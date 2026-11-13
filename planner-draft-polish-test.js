/* node planner-draft-polish-test.js */
var P = require('./planner-draft-polish.js');
var failed = 0;
function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var spaced = P.fixBrandSpacing('리얼 무브먼트와 리얼 페이스, 리:얼 무브먼트');
assert(spaced.indexOf('리얼 무브먼트') < 0 && spaced.indexOf('리얼무브먼트') >= 0, 'brand spacing collapses 리얼무브먼트');
assert(spaced.indexOf('리얼페이스') >= 0, 'brand spacing collapses 리얼페이스');

var common = P.applyCommonText('👉 메뉴얼을 리얼 페이스에서 한 번에 펴는 진료 전 매트', { catId: 1, flowSteps: [] });
assert(common.indexOf('👉') < 0, 'strips point emoji');
assert(common.indexOf('매뉴얼') >= 0 && common.indexOf('메뉴얼') < 0, 'spells 매뉴얼');
assert(common.indexOf('리얼페이스') >= 0, 'brand spacing in common text');
assert(common.indexOf('한 번에') < 0, 'replaces 한 번에');
assert(common.indexOf('침대') >= 0 && common.indexOf('매트') < 0, 'sessions use a bed');

var bullets = P.ensureBulletBlankLines('• 하나\n• 둘\n\n• 셋');
assert(bullets === '• 하나\n\n• 둘\n\n• 셋', 'blank line between bullets');

var blog = {
  title: '흐름 제목',
  selfCare: '👉 1) 목만 당긴다\n팔이 저리면 병원 진료가 먼저입니다.',
  problem: '리얼 무브먼트에서는 도수치료에서는 치료 방향을 봅니다.',
  explanation: '평가 포인트를 짚는다.\n\n좌골이 앞으로 빠집니다.',
  cta: '프로필 링크에서 온라인 문진으로 확인해 보세요.',
  hashtags: ['도수치료', '자세교정', '리얼무브먼트', '국제얼굴교정학회']
};
P.polishContent({ blog: blog }, {
  catId: 0,
  forceTitle: true,
  draftTopic: '확정한 주제 문장',
  flowSteps: ['평가 포인트를 짚는다']
});
assert(blog.title === '확정한 주제 문장', 'locked topic stays the blog title');
assert(blog.selfCare.indexOf('👉') < 0, 'blog self-care drops point emoji');
assert(blog.selfCare.indexOf(P.RED_FLAG) >= 0 && blog.selfCare.indexOf('진료') < 0, 'red flag replaces 진료');
assert(blog.problem.indexOf('도수치료에서는') < 0 && blog.problem.indexOf('치료 방향') < 0, '도수 clinic phrases are removed');
assert(blog.explanation.indexOf('짚는다') < 0, 'flow directive is not body text');
assert(blog.cta.indexOf('온라인 문진') < 0 && blog.cta.indexOf('약수점') >= 0, '도수 blog CTA is the evaluation booking');
assert(blog.hashtags.indexOf('도수치료') < 0 && blog.hashtags.indexOf('자세교정') < 0, 'banned tags drop');
assert(blog.hashtags.indexOf('국제얼굴교정학회') >= 0, 'course name may keep 교정');

var face = {
  selfCare: '【턱 — 이완】\n턱을 천천히 내립니다.\n⏱ 6초 · 3회\n숨은 길게 내쉽니다.\n【목 — 돌리기】\n목을 한쪽으로 봅니다.\n⏱ 10초\n시원한 지점에서 멈춥니다.',
  cta: '프로필 링크에서 온라인 문진',
  problem: '괜찮습니다.',
  hashtags: ['약수역운동']
};
P.polishContent({ blog: face }, { catId: 2, draftTopic: '얼굴' });
assert(/\n\n⏱/.test(face.selfCare), 'blank line before the timer line');
assert(/⏱ 6초 · 3회\n숨은/.test(face.selfCare), 'tip stays on the line after the timer');
assert(/\n\n【목/.test(face.selfCare), 'blank line between exercise blocks');
assert(face.cta.indexOf('인천점') >= 0 && face.cta.indexOf('약수점') < 0, '리얼페이스 booking is 인천 only');
assert(face.selfCare.indexOf(P.RED_FLAG) >= 0, 'red flag stays in the blog');

var insta = { hook: '스트레칭 시 회원이 버티는 건 테크닉 문제가 아닐 수 있습니다 🤲', caption: '• 들숨\n• 날숨\n프로필 링크에서 온라인 문진\n약수역에서 3분, 작전역에서 2분입니다.\n병원 진료가 먼저입니다.', hashtags: ['약수역운동'] };
P.polishContent({ insta: insta }, { catId: 4, hookSource: '강사가 먼저 숨을 고릅니다', draftTopic: '강사가 먼저 숨을 고릅니다' });
assert(insta.hook.indexOf('테크닉 문제가 아닐') < 0 && insta.hook.indexOf('강사가 먼저') >= 0, 'stock hook is replaced from the topic');
assert(insta.caption.indexOf(P.SAFETY) < 0 && insta.caption.indexOf('DM으로') < 0, 'education posts skip the public safety line and DM');

var pub = { hook: '목이 무거울 때', caption: '• 하나\n• 둘\n프로필 링크에서 온라인 문진으로 확인해 보세요.', hashtags: [] };
P.polishContent({ insta: pub }, { catId: 1 });
assert(pub.caption.indexOf(P.SAFETY) >= 0, 'public instagram gets the safety line');
assert(pub.caption.indexOf(P.CTA_DM) >= 0 && pub.caption.indexOf('온라인 문진') < 0, 'instagram CTA is DM');
assert(pub.caption.indexOf(P.BRANCH_BOTH) >= 0, 'instagram branch line is exact');
assert(pub.caption.indexOf('• 하나\n\n• 둘') >= 0, 'instagram bullets have a blank line');

var threads = { body: '좌골이 닿아?', comment: '앞으로 빠진 거야.\n\n밑에서부터야.' };
P.polishContent({ threads: threads }, { catId: 1 });
assert(threads.comment.indexOf('멈춰') >= 0, 'threads safety word is 멈춰');
P.polishContent({ threads: { body: '강사 긴장', comment: '방법 하나.' } }, { catId: 3 });
var edu = { body: '강사 긴장', comment: '방법 하나.' };
P.polishContent({ threads: edu }, { catId: 3 });
assert(edu.body.indexOf('멈춰') < 0 && edu.comment.indexOf('멈춰') < 0, 'education threads skip 멈춰');

var news = { naver: { title: '앉기', body: '약수역에서 3분, 작전역에서 2분입니다. https://example.com', cta: '프로필 링크에서 온라인 문진' }, kakao: { title: '', body: '', cta: '' }, karrot: { title: '', body: '병원 진료', cta: '예약 URL https://booking.naver.com/x' } };
P.polishContent({ news: news }, { catId: 1 });
assert(news.naver.body.indexOf(P.BRANCH_BOTH) >= 0 && news.naver.body.indexOf('약수역에서') < 0, 'news branch line is not a comma sentence');
assert(news.naver.body.indexOf('http') < 0 && news.naver.cta.indexOf('http') < 0, 'news has no URL');
assert(news.naver.cta === P.CTA_TALKTALK, 'naver news CTA is 톡톡');
assert(news.karrot.cta === P.CTA_CHAT, 'karrot CTA is 채팅');
assert(news.naver.body.indexOf(P.SAFETY) >= 0, 'news includes the safety line');
assert(news.karrot.body.indexOf('진료') < 0, 'news drops 진료');

assert(P.isPlaceholderFlow({ title: '제목', angle: '카테고리·참고 자료 기반 흐름', steps: ['입력에 적힌 순서', '빠진 칸은 만들지 않음'] }), 'placeholder flow is detected');
assert(!P.isPlaceholderFlow({ title: '턱이 당길 때', angle: '목과 같이 보기', steps: ['장면', '숨 고르기', '이유'] }), 'a real flow is kept');
var picked = P.resolveDraftTitle({ cardTitle: '확정한 주제', flowTitle: '흐름 제목', choice: 'card' });
assert(picked.topic === '확정한 주제' && picked.locked, 'card title wins when chosen');
var flowPick = P.resolveDraftTitle({ cardTitle: '확정한 주제', flowTitle: '흐름 제목', choice: 'flow' });
assert(flowPick.topic === '흐름 제목', 'flow title is used only when chosen');

if(failed){
  console.error(failed + ' failed');
  process.exit(1);
}
console.log('planner-draft-polish-test ok');
