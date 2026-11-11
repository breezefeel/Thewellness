/* node planner-sheet-field-regen-empty-test.js */
var fs = require('fs');
var path = require('path');
var vm = require('vm');
var failed = 0;
function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var context = { module: { exports: {} }, exports: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-banned-words.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-sync-rules.js'), 'utf8'), context);
var R = context.PlannerSyncRules;
var plannerSrc = fs.readFileSync(path.join(__dirname, 'planner.js'), 'utf8');

var outlineMeta = { block: 'blog', label: '시연·핵심 포인트', arrayLines: true, __field: 'outline' };
var captionMeta = { block: 'blog', label: '본문', __field: 'draft' };

// 1) 성공: 비지 않은 outline 배열
var ok = R.plannerAcceptSheetFieldRegenResult(outlineMeta, { value: ['손 위치 확인', '호흡 6초'] });
assert(ok.ok && ok.value.length === 2 && ok.value[0] === '손 위치 확인', 'success path accepts outline lines');

// 2) 빈 응답: value 없음 / 빈 배열 / 빈 문자열
assert(!R.plannerAcceptSheetFieldRegenResult(outlineMeta, {}).ok, 'missing value is rejected');
assert(!R.plannerAcceptSheetFieldRegenResult(outlineMeta, { value: [] }).ok, 'empty array is rejected');
assert(!R.plannerAcceptSheetFieldRegenResult(outlineMeta, { value: ['', '  '] }).ok, 'blank lines only are rejected');
assert(!R.plannerAcceptSheetFieldRegenResult(captionMeta, { value: '   ' }).ok, 'blank string is rejected');
assert(R.plannerAcceptSheetFieldRegenResult(outlineMeta, null).reason === 'parse', 'null parse object is rejected');

// 3) 네트워크 실패는 호출부 catch — 복구·보호 토스트·홀드 경로가 소스에 있는지 확인
assert(/beginSheetFieldRegenHold_/.test(plannerSrc) && /endSheetFieldRegenHold_/.test(plannerSrc), 'regen holds sync while Claude runs');
assert(/restoreFieldBackup_/.test(plannerSrc), 'failed regen restores field backup');
assert(/protect:\s*true/.test(plannerSrc), 'regen toasts are protect:true so sync toasts cannot overwrite');
assert(/allowDuringFieldRegen:\s*true/.test(plannerSrc), 'successful regen may redraw; background sync may not');
assert(/isSheetFieldRegenHoldActive_\(\)/.test(plannerSrc) && /shouldProtectComposeUi_/.test(plannerSrc), 'compose/sync protect includes regen hold');
var regenFn = plannerSrc.slice(plannerSrc.indexOf('window.regenSheetField_ = async function'), plannerSrc.indexOf('window.polishSheetField_ = async function'));
assert(regenFn.indexOf('plannerAcceptSheetFieldRegenResult') >= 0, 'regen uses accept helper');
assert(regenFn.indexOf('plannerAcceptSheetFieldRegenResult') < regenFn.indexOf('persistDraftContent_(draftId, content)'), 'persist only after accepted non-empty result');
assert(regenFn.indexOf('restoreFieldBackup_') < regenFn.indexOf('persistDraftContent_(draftId, content)'), 'backup restore path exists before persist');
assert(/stillQueued <= mutations\.length/.test(plannerSrc), 'divided-save toast does not reset when queue stalls');
assert(/나눠 저장 중/.test(plannerSrc) && /sheetFieldRegenToastUntil_/.test(plannerSrc), 'divided-save toast skipped while regen toast is protected');
assert(/plannerShouldPersistView/.test(plannerSrc), 'open/tab switch still gated');

// iPad Safari 시나리오용: outline 재생성 결과가 비면 null
var emptyOutline = R.plannerNormalizeSheetFieldRegenValue(outlineMeta, []);
assert(emptyOutline === null, 'normalize empty outline → null (keep previous)');
var goodOutline = R.plannerNormalizeSheetFieldRegenValue(outlineMeta, '1. 첫 포인트\n2. 둘째');
assert(Array.isArray(goodOutline) && goodOutline.length === 2, 'normalize numbered outline text → 2 lines');

// iPad Safari 3 cases (mock — no live server): success / empty / network failure decision
function simulateOutlineRegen_(responseKind){
  var prev = ['기존 포인트 A', '기존 포인트 B'];
  var next = prev.slice();
  var persisted = false;
  var redraw = false;
  var toast = '';
  try {
    if(responseKind === 'network') throw new Error('네트워크 오류(모의)');
    var parsed = responseKind === 'empty'
      ? { value: [] }
      : { value: ['새 포인트 1', '새 포인트 2'] };
    var acc = R.plannerAcceptSheetFieldRegenResult(outlineMeta, parsed);
    if(!acc.ok){
      next = prev.slice();
      toast = 'empty-keep';
      return { next: next, persisted: persisted, redraw: redraw, toast: toast };
    }
    next = acc.value;
    persisted = true;
    redraw = true;
    toast = 'success';
  } catch(e){
    next = prev.slice();
    toast = 'network-keep';
  }
  return { next: next, persisted: persisted, redraw: redraw, toast: toast };
}
var sOk = simulateOutlineRegen_('ok');
assert(sOk.persisted && sOk.redraw && sOk.toast === 'success' && sOk.next[0] === '새 포인트 1', 'iPad case: success persists new outline');
var sEmpty = simulateOutlineRegen_('empty');
assert(!sEmpty.persisted && !sEmpty.redraw && sEmpty.toast === 'empty-keep' && sEmpty.next[0] === '기존 포인트 A', 'iPad case: empty keeps previous, no persist/redraw');
var sNet = simulateOutlineRegen_('network');
assert(!sNet.persisted && !sNet.redraw && sNet.toast === 'network-keep' && sNet.next[1] === '기존 포인트 B', 'iPad case: network failure keeps previous');

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-sheet-field-regen-empty-test: ok');
