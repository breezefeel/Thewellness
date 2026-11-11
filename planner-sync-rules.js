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

  function plannerNormalizeSyncJournal(raw){
    var byId = {};
    var list = raw && raw.items;
    if(!Array.isArray(list)) return { items: [] };
    list.forEach(function(row){
      if(!row || !row.id) return;
      var id = String(row.id);
      var v = parseInt(row.v, 10) || 1;
      if(byId[id] == null || v >= byId[id]) byId[id] = v;
    });
    var items = Object.keys(byId).map(function(id){ return { id: id, v: byId[id] }; });
    if(items.length > 300) items = items.slice(items.length - 300);
    return { items: items };
  }

  function plannerRecordSyncJournal(journal, confirmed){
    var next = plannerNormalizeSyncJournal(journal);
    (confirmed || []).forEach(function(row){
      if(!row || !row.mutationId) return;
      var id = String(row.mutationId);
      var v = parseInt(row.version, 10) || 1;
      var found = false;
      next.items.forEach(function(item){
        if(item.id !== id) return;
        found = true;
        if(v >= item.v) item.v = v;
      });
      if(!found) next.items.push({ id: id, v: v });
    });
    if(next.items.length > 300) next.items = next.items.slice(next.items.length - 300);
    return next;
  }

  function plannerApplySyncJournal(ops, journal){
    var map = {};
    plannerNormalizeSyncJournal(journal).items.forEach(function(item){
      map[item.id] = item.v;
    });
    return (ops || []).filter(function(op){
      if(!op || !op.mutationId) return true;
      var acked = map[String(op.mutationId)];
      if(acked == null) return true;
      return (parseInt(op.version, 10) || 1) > acked;
    });
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
  return (ops || []).filter(function(op){
    return !wouldDrop(op);
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

  // 서버 리비전 위에 이미 얹힌 줄은 다시 올리지 않는다. id를 바꾸면 수락이 대기열과 어긋나 빠지지 않는다.
  function plannerQueuedTopicStable(existingOp, serverRev){
    if(!existingOp || !existingOp.key || !existingOp.mutationId) return false;
    var rev = parseInt(serverRev, 10) || 0;
    return plannerOutboxBase(existingOp) >= rev;
  }

  // 이미 대기열에 있거나 서버가 받은 키는 업로드 목록에서 뺀다. 대기열 값은 지우지 않는다.
  function plannerTopicGapUploadKeys(spec){
    spec = spec || {};
    var accepted = {};
    var acceptedList = spec.acceptedKeys || [];
    if(Array.isArray(acceptedList)){
      acceptedList.forEach(function(key){ if(key) accepted[String(key)] = true; });
    } else if(acceptedList && typeof acceptedList === 'object'){
      Object.keys(acceptedList).forEach(function(key){
        if(acceptedList[key]) accepted[String(key)] = true;
      });
    }
    var stable = {};
    var serverRev = spec.serverRev || {};
    (spec.outbox || []).forEach(function(op){
      if(!op || !op.key) return;
      if(plannerQueuedTopicStable(op, serverRev[op.key])) stable[String(op.key)] = true;
    });
    var upload = [];
    var seen = {};
    (spec.uploadKeys || []).forEach(function(key){
      key = String(key || '');
      if(!key || seen[key] || accepted[key] || stable[key]) return;
      seen[key] = true;
      upload.push(key);
    });
    return upload;
  }

  // 서버가 그 mutation을 받은 뒤에만 기억한다. 아직 대기열에 있거나 수락 기록이 없으면 올리지 않은 것으로 둔다.
  function plannerAcceptedUploadKeys(beforeOps, afterOps, ack){
    var still = {};
    (afterOps || []).forEach(function(op){
      if(op && op.key) still[String(op.key)] = true;
    });
    var accepted = [];
    var seen = {};
    (beforeOps || []).forEach(function(op){
      if(!op || !op.key || !op.mutationId) return;
      var key = String(op.key);
      if(still[key] || seen[key]) return;
      if(!ack || !Object.prototype.hasOwnProperty.call(ack, op.mutationId)) return;
      seen[key] = true;
      accepted.push(key);
    });
    return accepted;
  }

  // 짧은 시간에 부팅이 이어지면 무거운 이미지와 딥링크를 건너뛴다.
  function plannerBootCrashState(prevCount, opts){
    opts = opts || {};
    var limit = parseInt(opts.limit, 10) || 3;
    if(limit < 2) limit = 2;
    var n = (parseInt(prevCount, 10) || 0) + 1;
    if(n < 1) n = 1;
    if(n > 99) n = 99;
    return { count: n, safeMode: n >= limit, clearAfterMs: 12000 };
  }

  function plannerParseDateMs(value){
    if(value == null || value === '') return NaN;
    if(typeof value === 'number') return isNaN(value) ? NaN : value;
    var s = String(value).trim();
    var day = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(day) return new Date(parseInt(day[1], 10), parseInt(day[2], 10) - 1, parseInt(day[3], 10)).getTime();
    var t = Date.parse(s);
    return isNaN(t) ? NaN : t;
  }

  // 발행 기록 값을 시각(ms)으로 읽는다. ISO·밀리초·「2026-10-31」, 그리고 옛 발행 모달이 남긴 「10. 31.」·「10월 31일」·「10/31」.
  // 연도가 없으면 fallbackMs(저장 시각)의 해를 쓰고, 그래도 미래(2일 넘게)면 작년으로 본다. 못 읽으면 fallbackMs, 그것도 없으면 NaN.
  function plannerParsePublishStamp(value, fallbackMs, nowMs){
    var fallback = (typeof fallbackMs === 'number' && isFinite(fallbackMs) && fallbackMs > 0) ? fallbackMs : NaN;
    if(typeof value === 'number') return (isFinite(value) && value > 100000000000) ? value : fallback;
    if(typeof value !== 'string') return fallback;
    var s = value.trim();
    if(!s) return fallback;
    // 「2026-10-31」은 시간대 없는 달력 날짜다. 이 기기의 로컬 날짜로 읽는다(Date.parse 는 UTC 자정으로 읽어 미국에서 하루 밀린다).
    var ymd = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(ymd){
      var yy = parseInt(ymd[1], 10);
      var mm = parseInt(ymd[2], 10);
      var dd = parseInt(ymd[3], 10);
      var local = new Date(yy, mm - 1, dd);
      if(local.getFullYear() !== yy || local.getMonth() !== mm - 1 || local.getDate() !== dd) return fallback;
      return local.getTime();
    }
    var md = s.match(/^(\d{1,2})\s*[.\/월]\s*(\d{1,2})\s*[.일]?$/);
    if(md){
      var month = parseInt(md[1], 10);
      var day = parseInt(md[2], 10);
      if(month < 1 || month > 12 || day < 1 || day > 31) return fallback;
      var now = (typeof nowMs === 'number' && isFinite(nowMs)) ? nowMs : Date.now();
      var year = new Date(isNaN(fallback) ? now : fallback).getFullYear();
      var at = new Date(year, month - 1, day).getTime();
      if(at > now + 2 * 86400000) at = new Date(year - 1, month - 1, day).getTime();
      return at;
    }
    var t = plannerParseDateMs(s);
    return isNaN(t) ? fallback : t;
  }

  // 로컬 날짜 키 「2026-10-31」. 같은 날짜인지 비교할 때만 쓴다.
  function plannerDayKey(ms){
    if(typeof ms !== 'number' || !isFinite(ms)) return '';
    var d = new Date(ms);
    var m = d.getMonth() + 1;
    var day = d.getDate();
    return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (day < 10 ? '0' : '') + day;
  }

  // 게시 기록을 합친다. primary 는 그대로 두고(같은 날 두 번 올린 글도 둘 다 센다),
  // secondaries 는 앞선 기록에 없는 날짜만 더한다. 같은 글이 두 출처에 있어도 한 번만 세려는 것이다.
  // 돌려주는 added[i] 는 i번째 보조 기록에서 실제로 더해진 건수.
  function plannerMergePostEvents(primary, secondaries){
    var events = [];
    var days = {};
    (primary || []).forEach(function(ms){
      if(typeof ms !== 'number' || !isFinite(ms)) return;
      events.push(ms);
      days[plannerDayKey(ms)] = true;
    });
    var added = [];
    (secondaries || []).forEach(function(list){
      var n = 0;
      (list || []).slice().sort(function(a, b){ return a - b; }).forEach(function(ms){
        if(typeof ms !== 'number' || !isFinite(ms)) return;
        var key = plannerDayKey(ms);
        if(days[key]) return;
        days[key] = true;
        events.push(ms);
        n++;
      });
      added.push(n);
    });
    return { events: events, added: added };
  }

  function plannerMonthDayLabel(ms){
    if(!ms) return '-';
    var d = new Date(ms);
    if(isNaN(d.getTime())) return '-';
    return (d.getMonth() + 1) + '.' + d.getDate() + '.';
  }

  function plannerDraftCreatedMs(draft){
    draft = draft || {};
    var created = plannerParseDateMs(draft.createdAt);
    if(!isNaN(created)) return created;
    var m = String(draft.id || '').match(/-c(\d+)$/);
    if(m){
      var n = parseInt(m[1], 10);
      if(!isNaN(n) && n > 1000000000000) return n;
    }
    var updated = plannerParseDateMs(draft.updatedAt);
    if(!isNaN(updated)) return updated;
    return 0;
  }

  // 목록에 보이는 날짜. 생성일보다 늦은 수정·활동이 있으면 그 날짜.
  function plannerDraftListDate(draft){
    draft = draft || {};
    // 사용자가 카드에서 직접 정한 날짜(YYYY-MM-DD)가 있으면 그 날짜를 보여 준다.
    var ov = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(draft.dateOverride || ''));
    if(ov){
      var oms = new Date(parseInt(ov[1], 10), parseInt(ov[2], 10) - 1, parseInt(ov[3], 10), 12).getTime();
      if(!isNaN(oms)) return { label: plannerMonthDayLabel(oms), edited: false, ms: oms };
    }
    var created = plannerDraftCreatedMs(draft);
    var touch = 0;
    var activity = plannerParseDateMs(draft.activityAt);
    var updated = plannerParseDateMs(draft.updatedAt);
    if(!isNaN(activity)) touch = activity;
    if(!isNaN(updated) && updated > touch) touch = updated;
    var ms = touch > created ? touch : created;
    var label = plannerMonthDayLabel(ms);
    var createdLabel = plannerMonthDayLabel(created);
    var edited = !!(touch && created && touch > created && label !== '-' && label !== createdLabel);
    return { label: label, edited: edited, ms: ms || 0 };
  }

  // 서버·이 기기에서 받은 카드 행을 목록 카드에 옮길 때, 사용자가 카드 정보에서 정한 값을 빠뜨리지 않는다.
  function plannerKeepDraftCardMeta(target, incoming){
    if(!target || !incoming) return target;
    if(/^\d{4}-\d{2}-\d{2}$/.test(String(incoming.dateOverride || ''))) target.dateOverride = String(incoming.dateOverride);
    else delete target.dateOverride;
    if(incoming.topicLocked) target.topicLocked = true;
    else delete target.topicLocked;
    return target;
  }

  // 블로그·커뮤니티 제목이 자동으로 바뀔 때(생성·다듬기·저장) 카드 제목도 따라 바꿀지.
  // 카드 정보에서 직접 정한 제목은 자동으로 바꾸지 않는다.
  function plannerAutoTitleMayRenameCard(draft, nextTitle){
    var next = String(nextTitle || '').trim();
    if(!draft || !next) return false;
    if(draft.topicLocked && String(draft.topic || '').trim()) return false;
    return true;
  }

  function plannerNoteDraftActivity(draft, iso){
    var next = {};
    Object.keys(draft || {}).forEach(function(key){ next[key] = draft[key]; });
    next.activityAt = iso;
    next.updatedAt = iso;
    return next;
  }

  function plannerDraftActivityDay(iso){
    var ms = plannerParseDateMs(iso);
    if(isNaN(ms)) return '';
    var d = new Date(ms);
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  // 이미 한 장을 줄이는 중이면 null. 아니면 대기열의 첫 장만.
  function plannerNextBlobCompress(queue, active){
    if(active) return null;
    var list = queue || [];
    for(var i = 0; i < list.length; i++){
      if(list[i]) return list[i];
    }
    return null;
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

  function plannerNormalizePromptText(value){
    if(value == null) return '';
    if(typeof value !== 'string'){
      try { value = JSON.stringify(value); } catch(eJson){ value = String(value); }
    }
    return String(value).replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').trim();
  }
  function plannerDuplicateTextSize_(content){
    try { return JSON.stringify(content || '').length; } catch(eSize){ return 0; }
  }
  function plannerCanonicalDuplicateContent_(value){
    if(value == null) return null;
    if(typeof value === 'string') return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/^[ \t\u00A0\n]+|[ \t\u00A0\n]+$/g, '');
    if(Array.isArray(value)) return value.map(plannerCanonicalDuplicateContent_);
    if(typeof value === 'object'){
      var out = {};
      Object.keys(value).sort().forEach(function(k){
        out[k] = plannerCanonicalDuplicateContent_(value[k]);
      });
      return out;
    }
    return value;
  }
  function plannerContentIsEmpty_(content){
    if(content == null) return true;
    var blank = true;
    function walk(v){
      if(!blank || v == null || v === false) return;
      if(typeof v === 'string'){
        if(v.trim()) blank = false;
        return;
      }
      if(Array.isArray(v)){
        v.forEach(walk);
        return;
      }
      if(typeof v === 'object'){
        Object.keys(v).forEach(function(k){ walk(v[k]); });
        return;
      }
      blank = false;
    }
    walk(content);
    return blank;
  }
  function plannerFoldDuplicateContent_(dst, src){
    if(!src || typeof src !== 'object' || !dst || typeof dst !== 'object' || Array.isArray(dst)) return dst;
    Object.keys(src).forEach(function(k){
      var sv = src[k];
      var dv = dst[k];
      if(sv && typeof sv === 'object' && !Array.isArray(sv)){
        if(dv == null || dv === '') dst[k] = {};
        if(!dst[k] || typeof dst[k] !== 'object' || Array.isArray(dst[k])) return;
        plannerFoldDuplicateContent_(dst[k], sv);
        return;
      }
      if(Array.isArray(sv)){
        if(!Array.isArray(dv) || !dv.length) dst[k] = sv.slice();
        return;
      }
      var ds = dv == null ? '' : String(dv);
      if(ds.trim()) return;
      if(sv == null || String(sv).trim() === '') return;
      dst[k] = sv;
    });
    return dst;
  }
  function plannerDuplicateCardsMatch_(keep, other){
    if(plannerContentIsEmpty_(keep && keep.content) || plannerContentIsEmpty_(other && other.content)) return false;
    try {
      return JSON.stringify(plannerCanonicalDuplicateContent_(keep.content)) === JSON.stringify(plannerCanonicalDuplicateContent_(other.content));
    } catch(eSame){ return false; }
  }
  function plannerMergeDuplicateGroup(cards){
    cards = (cards || []).filter(function(card){ return card && card.id; });
    if(cards.length < 2){
      return { changed: false, keepId: cards[0] ? cards[0].id : '', retireIds: [], content: cards[0] ? cards[0].content : null };
    }
    function score(card){
      return (plannerDuplicateTextSize_(card.content) > 2 ? 8 : 0) + (card.placeholder ? 0 : 4) + (card.onServer ? 2 : 0);
    }
    var sorted = cards.slice().sort(function(a, b){
      var diff = score(b) - score(a);
      if(diff) return diff;
      return String(a.createdAt || '').localeCompare(String(b.createdAt || ''));
    });
    var keep = sorted[0];
    var content = {};
    try { content = JSON.parse(JSON.stringify(keep.content || {})); } catch(eCopy){ content = {}; }
    if(!content || typeof content !== 'object' || Array.isArray(content)) content = {};
    var retireIds = [];
    sorted.slice(1).forEach(function(other){
      if(!plannerDuplicateCardsMatch_(keep, other)) return;
      plannerFoldDuplicateContent_(content, other.content);
      retireIds.push(other.id);
    });
    return { changed: retireIds.length > 0, keepId: keep.id, retireIds: retireIds, content: content };
  }
  function plannerRetargetDuplicateRefs(spec){
    spec = spec || {};
    var keepId = String(spec.keepId || '');
    var retireIds = {};
    (spec.retireIds || []).forEach(function(id){
      id = String(id || '');
      if(id && id !== keepId) retireIds[id] = true;
    });
    if(!keepId || !Object.keys(retireIds).length) return { ok: false, keepId: keepId, retireIds: [] };
    function moveId(id){
      id = String(id || '');
      return retireIds[id] ? keepId : id;
    }
    var blocked = false;
    function retargetAssignments(list){
      var out = [];
      var seen = {};
      (list || []).forEach(function(row){
        if(!row || !row.draftId){ blocked = true; return; }
        var nextId = moveId(row.draftId);
        var prev = seen[nextId];
        if(prev && String(prev.stepId) !== String(row.stepId)){ blocked = true; return; }
        if(prev) return;
        var next = { draftId: nextId, stepId: row.stepId, order: row.order };
        seen[nextId] = next;
        out.push(next);
      });
      return out;
    }
    var assignments = spec.assignments ? retargetAssignments(spec.assignments) : null;
    var plans = (spec.plans || []).map(function(plan){
      return { key: plan && plan.key, assignments: retargetAssignments(plan && plan.assignments) };
    });
    var reservations = [];
    var seenRes = {};
    (spec.reservations || []).forEach(function(row){
      if(!row || typeof row !== 'object' || !row.draftId || !row.channel){ blocked = true; return; }
      var nextId = moveId(row.draftId);
      if(retireIds[row.draftId] && spec.keepHasPublished === false){ blocked = true; return; }
      var sig = nextId + '|' + String(row.channel);
      var prev = seenRes[sig];
      if(prev && (String(prev.at || '') !== String(row.at || '') || String(prev.postId || '') !== String(row.postId || ''))){
        blocked = true;
        return;
      }
      if(prev) return;
      var next = { draftId: nextId, channel: row.channel, at: row.at || '', postId: row.postId || '' };
      seenRes[sig] = next;
      reservations.push(next);
    });
    var links = [];
    (spec.links || []).forEach(function(row){
      if(!row || typeof row !== 'object' || !Object.prototype.hasOwnProperty.call(row, 'draftId')){ blocked = true; return; }
      var next = {};
      Object.keys(row).forEach(function(k){ next[k] = row[k]; });
      next.draftId = moveId(row.draftId);
      links.push(next);
    });
    var publishedMetaSkip_ = { content: 1, updatedAt: 1, savedAt: 1, modifiedAt: 1, editedAt: 1, lastEditedAt: 1, lastSavedAt: 1, localSavedAt: 1, syncedAt: 1 };
    function sortedClone_(value){
      if(value == null || typeof value !== 'object') return value;
      if(Array.isArray(value)) return value.map(sortedClone_);
      var out = {};
      Object.keys(value).sort().forEach(function(k){ out[k] = sortedClone_(value[k]); });
      return out;
    }
    function sameSorted_(a, b){
      try { return JSON.stringify(sortedClone_(a)) === JSON.stringify(sortedClone_(b)); }
      catch(eSort){ return false; }
    }
    function publishedMeta_(row){
      var out = {};
      if(!row || typeof row !== 'object') return out;
      Object.keys(row).forEach(function(k){
        if(publishedMetaSkip_[k]) return;
        out[k] = row[k];
      });
      return out;
    }
    function movePublished(map){
      var out = {};
      Object.keys(map || {}).forEach(function(id){
        if(!retireIds[id]) out[id] = map[id];
      });
      Object.keys(retireIds).forEach(function(id){
        if(!map || !Object.prototype.hasOwnProperty.call(map, id)) return;
        if(!Object.prototype.hasOwnProperty.call(out, keepId)){ blocked = true; return; }
        if(!sameSorted_(publishedMeta_(out[keepId]), publishedMeta_(map[id]))) blocked = true;
      });
      return out;
    }
    function moveBrand(map){
      var out = {};
      Object.keys(map || {}).forEach(function(id){
        if(!retireIds[id]) out[id] = map[id];
      });
      Object.keys(retireIds).forEach(function(id){
        if(!map || !Object.prototype.hasOwnProperty.call(map, id)) return;
        if(!Object.prototype.hasOwnProperty.call(out, keepId)){
          out[keepId] = map[id];
          return;
        }
        if(!sameSorted_(out[keepId], map[id])) blocked = true;
      });
      return out;
    }
    function movePinned(map){
      map = map || {};
      var out = {};
      Object.keys(map).forEach(function(id){
        if(id !== keepId && !retireIds[id]) out[id] = map[id];
      });
      var marked = Object.prototype.hasOwnProperty.call(map, keepId);
      var mark = marked ? map[keepId] : undefined;
      Object.keys(retireIds).forEach(function(id){
        if(!Object.prototype.hasOwnProperty.call(map, id)) return;
        if(!marked){
          marked = true;
          mark = map[id];
        }
      });
      if(marked) out[keepId] = mark;
      return out;
    }
    function moveMap(map, allowCreate){
      var out = {};
      Object.keys(map || {}).forEach(function(id){
        if(!retireIds[id]) out[id] = map[id];
      });
      Object.keys(retireIds).forEach(function(id){
        if(!map || !Object.prototype.hasOwnProperty.call(map, id)) return;
        if(Object.prototype.hasOwnProperty.call(out, keepId)) return;
        if(!allowCreate){ blocked = true; return; }
        out[keepId] = map[id];
      });
      return out;
    }
    var published = movePublished(spec.published);
    var generated = moveMap(spec.generated, true);
    var brandOverrides = moveBrand(spec.brandOverrides);
    var pinned = movePinned(spec.pinned);
    if(blocked) return { ok: false, keepId: keepId, retireIds: Object.keys(retireIds) };
    return {
      ok: true,
      keepId: keepId,
      retireIds: Object.keys(retireIds),
      assignments: assignments,
      plans: plans,
      reservations: reservations,
      links: links,
      published: published,
      generated: generated,
      brandOverrides: brandOverrides,
      pinned: pinned
    };
  }

  // 프롬프트 충돌. align=같은 내용, adopt-server=사용자가 안 고친 값, ask=양쪽 수정.
  function plannerPromptConflictAction(spec){
    spec = spec || {};
    var key = String(spec.key || '');
    if(key !== 'prompt:base' && !/^prompt:\d+:[^:]+$/.test(key)) return 'keep';
    var localText = plannerNormalizePromptText(spec.localText);
    var remoteText = plannerNormalizePromptText(spec.remoteText);
    if(localText === remoteText) return 'align';
    if(!spec.userEdited) return 'adopt-server';
    return 'ask';
  }

  function plannerSameStepId(a, b){
    a = String(a == null ? '' : a).trim();
    b = String(b == null ? '' : b).trim();
    if(!a || !b) return false;
    if(a === b) return true;
    var na = a.match(/^s?(\d+)$/i);
    var nb = b.match(/^s?(\d+)$/i);
    return !!(na && nb && na[1] === nb[1]);
  }
  function plannerCountDraftsForStep(steps, drafts, stepId){
    var title = '';
    (steps || []).forEach(function(step){
      if(step && plannerSameStepId(step.id, stepId)) title = String(step.title || '');
    });
    var want = plannerTopicDrawerKey(title);
    var n = 0;
    (drafts || []).forEach(function(d){
      if(!d) return;
      var sid = String(d.roadmapStepId || '').trim();
      if(sid && plannerSameStepId(sid, stepId)){
        n++;
        return;
      }
      if(!sid && want && plannerTopicDrawerKey(d.series || d.topic || '') === want) n++;
    });
    return n;
  }
  function plannerTopicDrawerKey(title){
    return String(title || '')
      .replace(/^\d+\s*단계\s*[·ㆍ・․.\-–—]\s*/, '')
      .replace(/[·ㆍ・․.\s\-–—_/,，]+/g, '')
      .replace(/["""''「」]/g, '')
      .toLowerCase();
  }

  // 가져오기 카드가 아직 기타이거나, 서랍에 없는 단계 id면 다시 옮긴다.
  function plannerImportNeedsMove(spec){
    spec = spec || {};
    if(!spec.imported) return false;
    if(spec.userPlaced) return false;
    var sid = String(spec.stepId || '').trim();
    var misc = String(spec.miscId || 'misc');
    if(!sid || sid === misc) return true;
    if(spec.stepResolves === false) return true;
    return false;
  }

  function plannerKeysLeftBehind(allOps, batchOps){
    var inBatch = {};
    (batchOps || []).forEach(function(op){
      if(op && op.key) inBatch[String(op.key)] = true;
    });
    var left = [];
    (allOps || []).forEach(function(op){
      if(!op || !op.key || inBatch[String(op.key)]) return;
      left.push(String(op.key));
    });
    return left;
  }

  function plannerSameKeyList(a, b){
    a = a || [];
    b = b || [];
    if(!a.length || a.length !== b.length) return false;
    var seen = {};
    a.forEach(function(key){ seen[String(key)] = true; });
    for(var i = 0; i < b.length; i++){
      if(!seen[String(b[i])]) return false;
    }
    return true;
  }

  function plannerStripClinicTitlePrefix(title){
    var t = String(title || '').replace(/\s+/g, ' ').trim();
    if(!t) return '';
    var prev = '';
    while(t && t !== prev){
      prev = t;
      t = t.replace(/^\[약수\/인천\]\s*/, '').trim();
    }
    return t;
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

  /** 블로그 복사 본문에서 메타 줄([블로그], 제목:, ##해시태그 줄)을 뺀다. 제목 글자는 첫 줄에 남긴다. */
  function plannerCleanBlogCopyText(text){
    var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n');
    var out = [];
    var titleDone = false;
    for(var i = 0; i < lines.length; i++){
      var line = lines[i];
      var t = line.trim();
      if(/^\[\s*블로그\s*\]$/.test(t)) continue;
      if(/^(?:#+\s*[^\s#]+\s*)+$/.test(t) && /^\s*#/.test(t) && !/^#{1,6}\s+\S+\s+\S/.test(t)) continue;
      if(!titleDone && t){
        titleDone = true;
        line = line.replace(/^\s*제목\s*[:：]\s*/, '');
      }
      out.push(line);
    }
    return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  /** 「시연·핵심 포인트」 칸 글자 → 배열(번호·빈 줄을 뺀 예전 모양, 다른 곳 호환용) */
  function plannerOutlineFromText(text){
    return String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n')
      .map(function(s){ return s.replace(/^\s*\d+\s*[.)]\s*/, '').trim(); })
      .filter(Boolean);
  }

  /** 칸에 보이는 글자: 사용자가 저장한 원문이 있으면 그대로, 없으면 예전 배열을 1. 2. 로 이어 붙인다 */
  function plannerOutlineDisplayText(outlineText, outlineArr){
    if(typeof outlineText === 'string' && outlineText.trim()) return outlineText.replace(/\r\n?/g, '\n');
    var arr = Array.isArray(outlineArr) ? outlineArr : [];
    return arr.map(function(o, i){ return (i + 1) + '. ' + o; }).join('\n\n');
  }

  /** 네이버 붙여넣기용: 번호를 빼고 문단만 남긴다 */
  function plannerOutlineCopyText(outlineText, outlineArr){
    var lines = (typeof outlineText === 'string' && outlineText.trim())
      ? plannerOutlineFromText(outlineText)
      : (Array.isArray(outlineArr) ? outlineArr.map(function(o){ return String(o || '').trim(); }).filter(Boolean) : []);
    return lines.join('\n\n');
  }

  /** 「회원」→「환자」. 조사도 같이 맞춘다(회원이→환자가, 회원은→환자는, 회원과→환자와, 회원이에요→환자예요). */
  function plannerMemberToPatient(text){
    var src = String(text == null ? '' : text);
    var map = { '이에요': '예요', '이라': '라', '이다': '다', '이었': '였', '이': '가', '으로': '로', '은': '는', '을': '를', '과': '와' };
    var out = src.replace(/(^|[^가-힣])회원(들)?(이에요|이라|이다|이었|이|으로|은|을|과|의|에게|께서|께|도|만|에서|에)/g, function(m, pre, pl, p){
      if(pl) return pre + '환자들' + (p === '으로' ? '로' : p);
      return pre + '환자' + (map[p] != null ? map[p] : p);
    });
    out = out.replace(/(^|[^가-힣])회원님/g, '$1환자분');
    out = out.replace(/(^|[^가-힣])회원(들)?(?![가-힣])/g, function(m, pre, pl){ return pre + '환자' + (pl || ''); });
    return out;
  }

  /** 본문 속 http(s) 주소를 지운다(끝 링크는 앱이 고정으로 붙인다). 주소만 있던 줄은 줄째 지운다. */
  function plannerStripBodyUrls(text){
    var lines = String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n');
    var out = [];
    lines.forEach(function(line){
      if(!/https?:\/\//i.test(line)){ out.push(line); return; }
      var cleaned = line.replace(/\s*https?:\/\/[^\s)）]+/gi, '').replace(/[ \t]+$/g, '');
      if(cleaned.trim()) out.push(cleaned);
    });
    return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  /** 네이버 태그: 글자·숫자만 남긴다(Re:AlFace → ReAlFace). 앞의 # 는 하나만. */
  function plannerNaverTag(tag){
    var t = String(tag == null ? '' : tag).replace(/^[#\s]+/, '').replace(/[^0-9A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ]/g, '');
    return t;
  }

  /** 블로그 본문 글자 수(공백 포함). 제목·해시태그·끝 링크는 세지 않는다. */
  function plannerBlogBodyLength(parts){
    var arr = Array.isArray(parts) ? parts : [parts];
    var joined = arr.map(function(x){ return plannerStripBodyUrls(String(x == null ? '' : x)); }).filter(Boolean).join('\n\n');
    return joined.replace(/\r\n?/g, '\n').length;
  }

  /** 일반 대상 글은 1,900자 안팎. 전문가 글은 제한 없음. */
  function plannerBlogLengthState(len, expert){
    var base = { min: 1700, max: 2100, expert: !!expert };
    if(!len) return Object.assign({ state: 'empty' }, base);
    if(len < 1700) return Object.assign({ state: 'short' }, base);
    if(len > 2100) return Object.assign({ state: 'long' }, base);
    return Object.assign({ state: 'ok' }, base);
  }

  /** 근거를 단정하는 말(대부분·반드시·항상 …)을 찾아 돌려준다 */
  function plannerStrongClaimWords(text){
    var words = ['대부분', '반드시', '항상', '무조건', '모든 사람', '누구나', '절대', '100%', '확실히', '틀림없이', '예외 없이', '언제나'];
    var src = String(text == null ? '' : text);
    return words.filter(function(w){ return src.indexOf(w) >= 0; });
  }

  /**
   * 생성 뒤 자동 검사. 고칠 곳 목록을 돌려준다(빈 배열 = 문제 없음).
   * input.visible 이 있으면 그 채널·칸만 본다(숨은 draft·예전 칸·말미 고정문 오탐 방지).
   * 금지어 목록은 planner-banned-words.js (PlannerBannedWords) 한곳.
   */
  function plannerLintContent(input){
    input = input || {};
    var catId = parseInt(input.catId, 10);
    var issues = [];
    var visible = input.visible || null;
    var BW = (typeof PlannerBannedWords !== 'undefined') ? PlannerBannedWords : null;
    function fieldVisible(channel, field){
      if(!visible) return true;
      var list = visible[channel];
      if(!list) return false;
      return list.indexOf(field) >= 0;
    }
    function add(channel, field, code, msg, excerpt){
      var row = { channel: channel, field: field, code: code, msg: msg };
      if(excerpt) row.excerpt = String(excerpt).replace(/\s+/g, ' ').trim().slice(0, 120);
      issues.push(row);
    }
    var FORBID = BW && BW.forbiddenList ? BW.forbiddenList()
      : ['한 번에', '끝내기', '페이스리프트', '펴는', '완치', '진료', '더웰니스', '경락'];
    var CAUTION = BW && BW.cautionList ? BW.cautionList()
      : [{ word: '치료', channels: ['news', 'ads'] }];
    function eachLine(text, fn){
      String(text == null ? '' : text).replace(/\r\n?/g, '\n').split('\n').forEach(fn);
    }
    function findExcerpt_(text, needle){
      var src = String(text == null ? '' : text).replace(/\r\n?/g, '\n');
      var idx = src.indexOf(needle);
      if(idx < 0) return '';
      var lineStart = src.lastIndexOf('\n', idx);
      var lineEnd = src.indexOf('\n', idx);
      if(lineStart < 0) lineStart = 0; else lineStart += 1;
      if(lineEnd < 0) lineEnd = src.length;
      return src.slice(lineStart, lineEnd).trim();
    }
    function checkText(channel, field, text, o){
      o = o || {};
      if(!fieldVisible(channel, field)) return;
      var t = String(text == null ? '' : text);
      if(!t.trim()) return;
      eachLine(t, function(line){
        var bare = BW && BW.isBareGyojung ? BW.isBareGyojung(line) : (/교정/.test(line) && !/(과정|학회)/.test(line));
        if(bare) add(channel, field, 'forbidden', '「교정」은 과정명·학회명에서만 써요', line);
      });
      // 「진료」 포함 금지어는 예외 없이 모두 잡는다(병원 진료도 포함).
      FORBID.forEach(function(w){
        if(t.indexOf(w) >= 0) add(channel, field, 'forbidden', '금지어 「' + w + '」', findExcerpt_(t, w));
      });
      CAUTION.forEach(function(entry){
        var word = entry && entry.word;
        if(!word || t.indexOf(word) < 0) return;
        var okCh = BW && BW.channelAllowsCaution
          ? BW.channelAllowsCaution(channel, entry)
          : ((entry.channels || []).indexOf(channel) >= 0);
        if(!okCh) return;
        add(channel, field, 'caution', '주의 「' + word + '」(광고·소식에서는 피하세요)', findExcerpt_(t, word));
      });
      eachLine(t, function(line){
        if(/대부분|반드시/.test(line) || (/항상/.test(line) && !/시작은 항상 나로부터/.test(line))){
          add(channel, field, 'strong', '근거를 단정하는 말(대부분·반드시·항상)', line);
        }
      });
      if(!o.allowUrl && /https?:\/\//i.test(t)) add(channel, field, 'url', '본문에 URL이 있어요(링크는 말미 링크 칸에만)', findExcerpt_(t, 'http'));
      if(!o.allowEmoji){
        var em = t.match(/\p{Extended_Pictographic}/gu);
        if(em && em.length) add(channel, field, 'emoji', '이모지가 있어요(인스타 훅 끝 1개만 허용)', t.slice(0, 80));
      }
      if(catId === 0 || catId === 3){
        if(/회원/.test(t)) add(channel, field, 'honorific', '이 카테고리는 「환자」를 써요(「회원」이 남아 있어요)', findExcerpt_(t, '회원'));
      } else if(catId === 1 || catId === 2 || catId === 4 || catId === 5){
        if(/환자/.test(t)) add(channel, field, 'honorific', '이 카테고리는 「회원」을 써요(「환자」가 남아 있어요)', findExcerpt_(t, '환자'));
      }
    }
    var b = input.blog;
    if(b){
      ['title', 'problem', 'selfCare', 'explanation', 'hook', 'draft', 'cta', 'closing', 'references'].forEach(function(k){
        if(typeof b[k] === 'string') checkText('blog', k, b[k]);
      });
      if(typeof b.outlineText === 'string') checkText('blog', 'outline', b.outlineText);
      else if(Array.isArray(b.outline)) checkText('blog', 'outline', b.outline.join('\n'));
    }
    var ig = input.insta;
    if(ig){
      var hook = String(ig.hook || '').trim();
      var hookEm = hook.match(/\p{Extended_Pictographic}/gu) || [];
      if(fieldVisible('insta', 'hook')){
        if(hookEm.length > 1) add('insta', 'hook', 'emoji', '훅의 이모지는 끝에 1개만 넣어요', hook);
        else if(hookEm.length === 1 && !/\p{Extended_Pictographic}️?\s*$/u.test(hook)) add('insta', 'hook', 'emoji', '훅의 이모지는 맨 끝에 와야 해요', hook);
      }
      checkText('insta', 'hook', hook.replace(/\p{Extended_Pictographic}️?\s*$/u, ''), {});
      checkText('insta', 'caption', ig.caption, {});
      if(fieldVisible('insta', 'hashtags')){
        var tags = Array.isArray(ig.hashtags) ? ig.hashtags.filter(Boolean) : [];
        var inline = (String(ig.caption || '').match(/#[^\s#]+/g) || []);
        if(!tags.length && !inline.length) add('insta', 'hashtags', 'hashtag', '해시태그(#)가 없어요');
        else if(Math.max(tags.length, inline.length) < 7) add('insta', 'hashtags', 'hashtag', '해시태그가 9개 안팎이어야 해요(지금 ' + Math.max(tags.length, inline.length) + '개)');
      }
    }
    var th = input.threads;
    if(th){
      checkText('threads', 'body', th.body, {});
      checkText('threads', 'comment', th.comment, {});
      var expected = parseInt(input.expectedComments, 10) || 4;
      var n = String(th.comment || '').split(/\n\s*\n/).filter(function(x){ return x.trim(); }).length;
      if(fieldVisible('threads', 'comment') && String(th.comment || '').trim() && n !== expected){
        add('threads', 'comment', 'count', '댓글이 ' + expected + '개여야 하는데 ' + n + '개예요');
      }
      if(fieldVisible('threads', 'body') && String(th.body || '').trim() && String(th.body).trim().split('\n').filter(function(x){ return x.trim(); }).length > 1){
        add('threads', 'body', 'body-lines', '본문은 한 줄이어야 해요', String(th.body).trim().slice(0, 80));
      }
    }
    var news = input.news;
    if(news && typeof news === 'object'){
      ['naver', 'kakao', 'karrot'].forEach(function(ch){
        var item = news[ch];
        if(!item || typeof item !== 'object') return;
        ['title', 'body', 'cta'].forEach(function(k){
          if(typeof item[k] === 'string') checkText('news', ch + '.' + k, item[k]);
        });
      });
    }
    if(typeof input.ads === 'string') checkText('ads', 'copy', input.ads);
    else if(input.ads && typeof input.ads === 'object'){
      Object.keys(input.ads).forEach(function(k){
        if(typeof input.ads[k] === 'string') checkText('ads', k, input.ads[k]);
      });
    }
    return issues;
  }

  // 카드를 열거나 탭만 바꾼 경우에는 저장하지 않는다. 칸을 직접 고쳤고 내용이 달라질 때만 저장한다.
  function plannerShouldPersistView(opts){
    opts = opts || {};
    if(!opts.userEdited) return false;
    if(!opts.afterFp) return true;
    if(!opts.beforeFp) return true;
    return opts.beforeFp !== opts.afterFp;
  }

  function plannerSuggestKeywordLines(text){
    var raw = String(text || '').replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
    if(!raw) return [];
    var lines = raw.split(/\r?\n/).map(function(line){
      return line.replace(/^\s*(?:[-*•·]|\d+\s*[.)])\s*/, '').replace(/^["“「]|["”」]$/g, '').trim();
    }).filter(function(line){
      return line && !/^(?:아래|다음|제안|아이디어|키워드)\b.*[:：]$/.test(line);
    });
    if(lines.length === 1 && /[·|/]/.test(lines[0])){
      var parts = lines[0].split(/\s*[·|/]\s*/).map(function(part){ return part.trim(); }).filter(Boolean);
      if(parts.length > 1) lines = parts;
    }
    return lines.slice(0, 5);
  }

  function plannerLayoutFileListed(names){
    var i;
    for(i = 0; i < (names || []).length; i++){
      if(String(names[i] || '') === '_layout.json') return true;
    }
    return false;
  }

  function plannerExplicitPublishText(item){
    if(!item || typeof item !== 'object') return '';
    return String(item.finalText || '').trim();
  }

  function plannerConnectionDropped(message){
    var msg = String(message || '');
    return /연결이 닫|연결 닫|Failed to fetch|NetworkError|Load failed|ERR_CONNECTION|ECONNRESET|network error|The network connection was lost/i.test(msg);
  }

  return {
    plannerIsAuthFailure: plannerIsAuthFailure,
    plannerShouldPersistView: plannerShouldPersistView,
    plannerSuggestKeywordLines: plannerSuggestKeywordLines,
    plannerLayoutFileListed: plannerLayoutFileListed,
    plannerExplicitPublishText: plannerExplicitPublishText,
    plannerConnectionDropped: plannerConnectionDropped,
    plannerNextMutation: plannerNextMutation,
    plannerFilterAckedOutbox: plannerFilterAckedOutbox,
    plannerNormalizeSyncJournal: plannerNormalizeSyncJournal,
    plannerRecordSyncJournal: plannerRecordSyncJournal,
    plannerApplySyncJournal: plannerApplySyncJournal,
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
    plannerQueuedTopicStable: plannerQueuedTopicStable,
    plannerTopicGapUploadKeys: plannerTopicGapUploadKeys,
    plannerAcceptedUploadKeys: plannerAcceptedUploadKeys,
    plannerBootCrashState: plannerBootCrashState,
    plannerNextBlobCompress: plannerNextBlobCompress,
    plannerDraftListDate: plannerDraftListDate,
    plannerParsePublishStamp: plannerParsePublishStamp,
    plannerDayKey: plannerDayKey,
    plannerMergePostEvents: plannerMergePostEvents,
    plannerNoteDraftActivity: plannerNoteDraftActivity,
    plannerKeepDraftCardMeta: plannerKeepDraftCardMeta,
    plannerAutoTitleMayRenameCard: plannerAutoTitleMayRenameCard,
    plannerDraftActivityDay: plannerDraftActivityDay,
    plannerAcceptedSentByKey: plannerAcceptedSentByKey,
    plannerTopicSlot: plannerTopicSlot,
    plannerCompareTopicOrder: plannerCompareTopicOrder,
    plannerQuotaTrimPlan: plannerQuotaTrimPlan,
    plannerDataUrlOverLimit: plannerDataUrlOverLimit,
    plannerBlobSyncAction: plannerBlobSyncAction,
    plannerNormalizePromptText: plannerNormalizePromptText,
    plannerPromptConflictAction: plannerPromptConflictAction,
    plannerTopicDrawerKey: plannerTopicDrawerKey,
    plannerSameStepId: plannerSameStepId,
    plannerCountDraftsForStep: plannerCountDraftsForStep,
    plannerImportNeedsMove: plannerImportNeedsMove,
    plannerKeysLeftBehind: plannerKeysLeftBehind,
    plannerSameKeyList: plannerSameKeyList,
    plannerStripClinicTitlePrefix: plannerStripClinicTitlePrefix,
    plannerCleanBlogCopyText: plannerCleanBlogCopyText,
    plannerMemberToPatient: plannerMemberToPatient,
    plannerStripBodyUrls: plannerStripBodyUrls,
    plannerNaverTag: plannerNaverTag,
    plannerBlogBodyLength: plannerBlogBodyLength,
    plannerBlogLengthState: plannerBlogLengthState,
    plannerStrongClaimWords: plannerStrongClaimWords,
    plannerLintContent: plannerLintContent,
    plannerOutlineFromText: plannerOutlineFromText,
    plannerOutlineDisplayText: plannerOutlineDisplayText,
    plannerOutlineCopyText: plannerOutlineCopyText,
    plannerMergeDuplicateGroup: plannerMergeDuplicateGroup,
    plannerRetargetDuplicateRefs: plannerRetargetDuplicateRefs,
    PLANNER_SYNC_BLOB_MAX_CHARS: PLANNER_SYNC_BLOB_MAX_CHARS,
    PLANNER_QUOTA_IMAGE_CHARS: PLANNER_QUOTA_IMAGE_CHARS
  };
})();
