/* 동기화 대기열 규칙. DOM 없이 동작하고, planner.js가 이 결과를 그대로 쓴다. */
var PlannerSyncRules = (function(){
  function plannerIsAuthFailure(err){
    if(!err) return false;
    if(err.authRequired) return true;
    var code = String(err.code || err.error_code || '');
    var status = parseInt(err.status, 10) || 0;
    var msg = String(err.message || err.msg || '');
    if(status === 401) return true;
    if(code === 'PGRST301' || code === 'PGRST303') return true;
    return /jwt|not authenticated|invalid claim|refresh token|session expired/i.test(msg);
  }

  function plannerNextMutation(op, makeId){
    var version = (parseInt(op && op.version, 10) || 1) + 1;
    var mutationId = (typeof makeId === 'function')
      ? makeId()
      : ('m:' + version + ':' + Math.random().toString(36).slice(2, 10));
    return { mutationId: mutationId, version: version };
  }

  function plannerDraftBodyId(key){
    var m = String(key || '').match(/^(draft|generated|published):(.+)$/);
    if(!m) return null;
    return { kind: m[1], id: m[2] };
  }

  function plannerFilterAckedOutbox(ops, ctx){
    ctx = ctx || {};
    var ack = ctx.ack || {};
    var sentByKey = ctx.sentByKey || {};
    var holdKeys = ctx.holdKeys || {};
    var isDeviceLocal = ctx.isDeviceLocal || function(){ return false; };
    function wouldDrop(op){
      if(!op || !op.key) return true;
      // 충돌 키는 사용자가 어느 쪽을 남길지 고르기 전까지 대기열에서 빼지 않는다.
      if(holdKeys[String(op.key)]) return false;
      if(isDeviceLocal(op.key)) return true;
      if(!op.mutationId) return true;
      var opV = parseInt(op.version, 10) || 1;
      if(Object.prototype.hasOwnProperty.call(ack, op.mutationId) && ack[op.mutationId] != null){
        return opV <= (parseInt(ack[op.mutationId], 10) || 1);
      }
      var sent = sentByKey[String(op.key)];
      if(sent) return (parseInt(sent.version, 10) || 1) >= opV;
      return false;
    }
    var keep = {};
    (ops || []).forEach(function(op){
      if(op && op.key && !wouldDrop(op)) keep[String(op.key)] = true;
    });
    return (ops || []).filter(function(op){
      if(!wouldDrop(op)) return true;
      var parsed = plannerDraftBodyId(op && op.key);
      if(!parsed || parsed.kind !== 'draft') return false;
      return !!(keep['generated:' + parsed.id] || keep['published:' + parsed.id]);
    });
  }

  function plannerIsProtectedDelete(op){
    if(!op || !op.key) return false;
    var key = String(op.key);
    if(!(op.deleted || key.indexOf('deleted:') === 0)) return false;
    return key.indexOf('draft:') === 0 ||
      key.indexOf('generated:') === 0 ||
      key.indexOf('published:') === 0 ||
      key.indexOf('deleted:') === 0;
  }

  function plannerSelectSyncBatch(ops, opts){
    opts = opts || {};
    var maxItems = opts.maxItems || 12;
    var maxBytes = opts.maxBytes || 40000;
    var bytesOf = opts.bytesOf || function(){ return 1; };
    function draftIdOf(op){
      var parsed = plannerDraftBodyId(op && op.key);
      return parsed ? parsed.id : '';
    }
    function isBody(op){
      var key = String(op && op.key || '');
      return key.indexOf('generated:') === 0 || key.indexOf('published:') === 0;
    }
    function isCard(op){
      return String(op && op.key || '').indexOf('draft:') === 0;
    }
    var bodyLeft = {};
    (ops || []).forEach(function(op){
      if(!isBody(op)) return;
      var id = draftIdOf(op);
      if(!id) return;
      bodyLeft[id] = (bodyLeft[id] || 0) + 1;
    });
    var out = [];
    var bytes = 2;
    for(var i = 0; i < (ops || []).length; i++){
      var op = ops[i];
      if(!op || !op.key) continue;
      var id = draftIdOf(op);
      if(isCard(op) && id && bodyLeft[id] > 0) continue;
      var n = bytesOf(op) || 0;
      if(!out.length && n > maxBytes){
        out.push(op);
        if(isBody(op) && id && bodyLeft[id]) bodyLeft[id] -= 1;
        break;
      }
      if(out.length && (out.length >= maxItems || bytes + n > maxBytes)) break;
      out.push(op);
      bytes += n + 1;
      if(isBody(op) && id && bodyLeft[id]) bodyLeft[id] -= 1;
    }
    return out;
  }

  function plannerIncrementalCursor(since, rows){
    var maxSeq = parseInt(since, 10) || 0;
    (rows || []).forEach(function(row){
      var seq = parseInt(row && row.change_seq, 10) || 0;
      if(seq > maxSeq) maxSeq = seq;
    });
    return maxSeq;
  }

  function plannerKeysetAdvance(rows, field){
    if(!rows || !rows.length) return null;
    var last = rows[rows.length - 1];
    if(!last || !Object.prototype.hasOwnProperty.call(last, field)) return null;
    return last[field];
  }

  function plannerServerRevHigher(serverRev, knownLocalRev){
    return (parseInt(serverRev, 10) || 0) > (parseInt(knownLocalRev, 10) || 0);
  }

  function plannerTrimOutbox(ops){
    return (ops || []).slice();
  }

  // 약 2.2MB(문자 수). 이보다 긴 data URL은 동기화 묶음에서 조용히 빠지던 한도.
  var PLANNER_SYNC_BLOB_MAX_CHARS = 2200000;
  // 한도 복구 때, 대기열에 없는 사본만 지울 큰 사진·영상 기준.
  var PLANNER_QUOTA_IMAGE_CHARS = 180000;

  function plannerConflictHoldKeys(conflicts){
    var hold = {};
    (conflicts || []).forEach(function(conflict){
      var key = conflict && conflict.key;
      if(key) hold[String(key)] = true;
    });
    return hold;
  }

  function plannerCopyOutboxOp(op){
    var copy = {};
    Object.keys(op || {}).forEach(function(name){ copy[name] = op[name]; });
    return copy;
  }

  function plannerOutboxBase(op){
    if(!op) return 0;
    if(op.baseEntityRevision != null && op.baseEntityRevision !== '') return parseInt(op.baseEntityRevision, 10) || 0;
    return parseInt(op.base, 10) || 0;
  }

  // 사용자가 고른 뒤의 대기열. 서버를 고르면 그 키를 빼고, 이 기기를 고르면 서버 리비전에 다시 얹고 값을 남긴다.
  function plannerApplyConflictResolution(outbox, choices){
    var byKey = {};
    (choices || []).forEach(function(choice){
      if(!choice || !choice.key) return;
      byKey[String(choice.key)] = choice;
    });
    var next = [];
    var resolvedKeys = [];
    (outbox || []).forEach(function(op){
      if(!op || !op.key) return;
      var key = String(op.key);
      var choice = byKey[key];
      if(!choice){
        next.push(plannerCopyOutboxOp(op));
        return;
      }
      if(resolvedKeys.indexOf(key) < 0) resolvedKeys.push(key);
      if(!choice.useLocal) return;
      var copy = plannerCopyOutboxOp(op);
      var serverRev = parseInt(choice.serverRevision, 10) || 0;
      copy.baseEntityRevision = Math.max(plannerOutboxBase(op), serverRev);
      copy.conflictResolved = 'local';
      next.push(copy);
    });
    Object.keys(byKey).forEach(function(key){
      if(resolvedKeys.indexOf(key) < 0) resolvedKeys.push(key);
    });
    return { outbox: next, resolvedKeys: resolvedKeys };
  }

  // 이미 고른 키, 또는 서버 리비전 위에 다시 얹은 키는 다음 동기화에서 다시 묻지 않는다.
  function plannerTopicGapAsks(outbox, serverRevByKey, excludeKeys){
    var skip = {};
    (excludeKeys || []).forEach(function(key){ if(key) skip[String(key)] = true; });
    var asks = [];
    (outbox || []).forEach(function(op){
      if(!op || !op.key || String(op.key) === 'setting:surfaceDigest') return;
      var key = String(op.key);
      if(skip[key]) return;
      if(op.conflictResolved === 'local' || op.conflictResolved === 'server') return;
      var rev = parseInt((serverRevByKey || {})[key], 10) || 0;
      var base = plannerOutboxBase(op);
      if(rev > base && asks.indexOf(key) < 0) asks.push(key);
    });
    return asks;
  }

  // v400이 옛 base로 붙잡아 둔 줄. 값은 지우지 않고 서버 리비전에 다시 얹어 배지가 다시 뜨지 않게 한다.
  function plannerHealStaleConflictRows(outbox, serverRevByKey, excludeKeys){
    var skip = {};
    (excludeKeys || []).forEach(function(key){ if(key) skip[String(key)] = true; });
    var healed = [];
    var next = [];
    (outbox || []).forEach(function(op){
      if(!op || !op.key) return;
      var key = String(op.key);
      if(skip[key]){
        next.push(plannerCopyOutboxOp(op));
        return;
      }
      if(op.conflictResolved === 'server') return;
      var rev = parseInt((serverRevByKey || {})[key], 10) || 0;
      var base = plannerOutboxBase(op);
      if(!(rev > base)){
        next.push(plannerCopyOutboxOp(op));
        return;
      }
      var copy = plannerCopyOutboxOp(op);
      copy.baseEntityRevision = rev;
      copy.conflictResolved = 'local';
      next.push(copy);
      if(healed.indexOf(key) < 0) healed.push(key);
    });
    return { outbox: next, healed: healed };
  }

  // 서버가 수락한 키만 「보낸 것」으로 친다. 충돌로 돌아온 키는 사용자가 고르기 전까지 대기열에 남긴다.
  function plannerAcceptedSentByKey(sentMutations, accepted){
    var ack = {};
    (accepted || []).forEach(function(item){
      if(item && item.mutationId) ack[String(item.mutationId)] = true;
    });
    var sentByKey = {};
    (sentMutations || []).forEach(function(item){
      if(!item || !item.key || !item.mutationId || !ack[String(item.mutationId)]) return;
      var key = String(item.key);
      var version = parseInt(item.version, 10) || 1;
      var prev = sentByKey[key];
      if(!prev || version >= prev.version) sentByKey[key] = { version: version };
    });
    return sentByKey;
  }

  function plannerTopicSlot(step){
    if(step == null) return null;
    var text = String(step).trim();
    if(!text) return null;
    var slashed = text.match(/^(\d+)\s*\/\s*(\d+)/);
    if(slashed){
      var n = parseInt(slashed[1], 10);
      return n >= 1 ? n : null;
    }
    if(!/^\d+$/.test(text)) return null;
    var plain = parseInt(text, 10);
    return plain >= 1 ? plain : null;
  }

  // mode 'activity'일 때만 최근 활동이 먼저. 기본은 사용자가 둔 슬롯, 그다음 목록 순서.
  function plannerCompareTopicOrder(a, b, mode){
    a = a || {};
    b = b || {};
    if(mode === 'activity'){
      var ta = parseInt(a.activityMs, 10) || 0;
      var tb = parseInt(b.activityMs, 10) || 0;
      if(ta !== tb) return tb - ta;
    }
    var sa = a.slot == null ? 1000000000 : a.slot;
    var sb = b.slot == null ? 1000000000 : b.slot;
    if(sa !== sb) return sa - sb;
    var ia = parseInt(a.index, 10);
    var ib = parseInt(b.index, 10);
    if(isNaN(ia)) ia = 0;
    if(isNaN(ib)) ib = 0;
    return ia - ib;
  }

  function plannerQuotaTrimPlan(input){
    input = input || {};
    var queued = {};
    var kept = [];
    (input.outbox || []).forEach(function(op){
      if(!op || !op.key) return;
      queued[String(op.key)] = true;
      kept.push(op);
    });
    var trimGeneratedIds = [];
    (input.generatedIds || []).forEach(function(id){
      id = String(id || '');
      if(!id) return;
      if(queued['generated:' + id] || queued['published:' + id] || queued['draft:' + id]) return;
      trimGeneratedIds.push(id);
    });
    return {
      keepOutbox: true,
      outbox: kept,
      trimGeneratedIds: trimGeneratedIds,
      trimImages: true,
      clearCaches: true
    };
  }

  function plannerDataUrlOverLimit(url, maxChars){
    url = String(url || '');
    if(url.indexOf('data:image') !== 0 && url.indexOf('data:video') !== 0) return false;
    return url.length > (parseInt(maxChars, 10) || PLANNER_QUOTA_IMAGE_CHARS);
  }

  function plannerBlobSyncAction(blob){
    var data = String(blob && blob.data || '');
    if(!blob || !blob.hash || !data) return { action: 'skip', notice: '' };
    if(data.length <= PLANNER_SYNC_BLOB_MAX_CHARS) return { action: 'queue', notice: '' };
    if(data.indexOf('data:image') === 0){
      return {
        action: 'compress',
        notice: '사진이 약 2.2MB를 넘어요. 크기를 줄여 동기화 대기열에 넣습니다.'
      };
    }
    return {
      action: 'reject',
      notice: data.indexOf('data:video') === 0
        ? '영상이 약 2.2MB를 넘어 동기화에 올리지 못했어요. 더 짧은 영상으로 다시 올려 주세요.'
        : '파일이 약 2.2MB를 넘어 동기화에 올리지 못했어요.'
    };
  }

  return {
    plannerIsAuthFailure: plannerIsAuthFailure,
    plannerNextMutation: plannerNextMutation,
    plannerFilterAckedOutbox: plannerFilterAckedOutbox,
    plannerIsProtectedDelete: plannerIsProtectedDelete,
    plannerSelectSyncBatch: plannerSelectSyncBatch,
    plannerIncrementalCursor: plannerIncrementalCursor,
    plannerKeysetAdvance: plannerKeysetAdvance,
    plannerServerRevHigher: plannerServerRevHigher,
    plannerTrimOutbox: plannerTrimOutbox,
    plannerConflictHoldKeys: plannerConflictHoldKeys,
    plannerApplyConflictResolution: plannerApplyConflictResolution,
    plannerTopicGapAsks: plannerTopicGapAsks,
    plannerHealStaleConflictRows: plannerHealStaleConflictRows,
    plannerAcceptedSentByKey: plannerAcceptedSentByKey,
    plannerTopicSlot: plannerTopicSlot,
    plannerCompareTopicOrder: plannerCompareTopicOrder,
    plannerQuotaTrimPlan: plannerQuotaTrimPlan,
    plannerDataUrlOverLimit: plannerDataUrlOverLimit,
    plannerBlobSyncAction: plannerBlobSyncAction,
    PLANNER_SYNC_BLOB_MAX_CHARS: PLANNER_SYNC_BLOB_MAX_CHARS,
    PLANNER_QUOTA_IMAGE_CHARS: PLANNER_QUOTA_IMAGE_CHARS
  };
})();
