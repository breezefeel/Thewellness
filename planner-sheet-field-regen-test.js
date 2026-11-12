/* node planner-sheet-field-regen-test.js */
var fs = require('fs');
var path = require('path');
var vm = require('vm');
var failed = 0;
function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var plannerSrc = fs.readFileSync(path.join(__dirname, 'planner.js'), 'utf8');
var cssSrc = fs.readFileSync(path.join(__dirname, 'planner.css'), 'utf8');

assert(/busyLabel:\s*'재생성 중'/.test(plannerSrc), 'regen busyLabel is short 「재생성 중」');
assert(!/\(meta\.label \|\| ['"]필드['"]\) \+ ['"] 재생성 중['"]/.test(plannerSrc), 'regen busyLabel is not prefixed with field name');
assert(/busyLabel:\s*'글 다듬는 중'/.test(plannerSrc), 'polish busyLabel stays short like regen');
assert(/function startButtonCountdown_/.test(plannerSrc) && /function tickButtonCountdowns_/.test(plannerSrc), 'existing countdown helpers stay in use');
assert(/confirmRegenSheetField_/.test(plannerSrc) && /regenSheetField_/.test(plannerSrc), 'confirm path still calls regenSheetField_');

// 확인 OK → 프롬프트 조립 전에 카운트다운 시작(applySheetEdits 앞).
var regenStart = plannerSrc.indexOf('window.regenSheetField_ = async function');
var regenBody = plannerSrc.slice(regenStart, regenStart + 4500);
assert(regenBody.indexOf("busyLabel: '재생성 중'") >= 0, 'regenSheetField_ starts countdown with short label');
assert(
  regenBody.indexOf("busyLabel: '재생성 중'") < regenBody.indexOf('applySheetEditsForTab_(content, state.activeTab)'),
  'countdown starts before prompt/reference assembly'
);
assert(
  regenBody.indexOf('applySheetEditsForTab_(content, state.activeTab)') < regenBody.indexOf('buildSheetFieldReference_(meta, block)'),
  'sibling fields are read from the live sheet into the block before building reference'
);

assert(/white-space:\s*normal/.test(cssSrc) && /\.sheet-field-tools/.test(cssSrc), 'sheet-field-tools allow wrapping so countdown text is not clipped');
assert(/plannerShouldPersistView/.test(plannerSrc), 'open/tab switch still gated by plannerShouldPersistView');

function extractFn(src, name){
  var start = src.indexOf('function ' + name + '(');
  if(start < 0) throw new Error('missing ' + name);
  var i = src.indexOf('{', start), depth = 0;
  for(; i < src.length; i++){
    var ch = src[i];
    if(ch === '{') depth++;
    else if(ch === '}'){ depth--; if(depth === 0) return src.slice(start, i + 1); }
  }
  throw new Error('unbalanced ' + name);
}

var ctx = {
  SHEET_FIELD_META_: {
    'blog.title': { block: 'blog', label: '제목' },
    'blog.hook': { block: 'blog', label: '영상·사진 맥락' },
    'blog.outline': { block: 'blog', label: '시연·핵심 포인트', arrayLines: true },
    'blog.draft': { block: 'blog', label: '원리 설명' },
    'blog.cta': { block: 'blog', label: '마무리' },
    'insta.hook': { block: 'insta', label: '첫 줄 후킹' }
  },
  getThreadsBodyText_: function(){ return ''; },
  getThreadsCommentText_: function(){ return ''; }
};
vm.createContext(ctx);
vm.runInContext(extractFn(plannerSrc, 'buildSheetFieldReference_'), ctx);

var ref = ctx.buildSheetFieldReference_({ block: 'blog', __field: 'outline' }, {
  title: '거북목 제목',
  hook: '화면의 영상·사진 맥락 문장',
  outline: ['이 칸은 재생성 대상이라 참고에 넣지 않음'],
  draft: '원리 설명 본문',
  cta: '마무리 CTA'
});
assert(ref.indexOf('영상·사진 맥락') >= 0 && ref.indexOf('화면의 영상·사진 맥락 문장') >= 0, 'outline regen reference keeps live hook text');
assert(ref.indexOf('원리 설명 본문') >= 0, 'outline regen reference keeps draft sibling');
assert(ref.indexOf('이 칸은 재생성 대상') < 0, 'current outline field is excluded from reference');
assert(ref.indexOf('첫 줄 후킹') < 0, 'other blocks are not mixed into blog reference');

var cdCtx = { formatRoughCountdown: function(sec){ return Math.max(0, Math.ceil(sec)) + '초'; } };
vm.createContext(cdCtx);
vm.runInContext(extractFn(plannerSrc, 'buttonCountdownText_'), cdCtx);
assert(cdCtx.buttonCountdownText_('재생성 중', 18) === '재생성 중 · 약 18초', 'regen countdown text matches polish style');
assert(cdCtx.buttonCountdownText_('글 다듬는 중', 12) === '글 다듬는 중 · 약 12초', 'polish countdown text shape unchanged');

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-sheet-field-regen-test: ok');
