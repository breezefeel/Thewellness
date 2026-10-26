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
    var isDeviceLocal = ctx.isDeviceLocal || function(){ return false; };
    function wouldDrop(op){
      if(!op || !op.key) return true;
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

  return {
    plannerIsAuthFailure: plannerIsAuthFailure,
    plannerNextMutation: plannerNextMutation,
    plannerFilterAckedOutbox: plannerFilterAckedOutbox,
    plannerIsProtectedDelete: plannerIsProtectedDelete,
    plannerSelectSyncBatch: plannerSelectSyncBatch,
    plannerIncrementalCursor: plannerIncrementalCursor,
    plannerKeysetAdvance: plannerKeysetAdvance,
    plannerServerRevHigher: plannerServerRevHigher,
    plannerTrimOutbox: plannerTrimOutbox
  };
})();
