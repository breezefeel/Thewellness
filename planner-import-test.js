/* node planner-import-test.js */
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-import.js'), 'utf8'), context);
var I = context.PlannerImport;
var failed = 0;

function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var sample = JSON.parse(fs.readFileSync(path.join(__dirname, 'samples/draft-import.sample.json'), 'utf8'));
var parsedSample = I.parse(JSON.stringify(sample));
assert(parsedSample.ok && parsedSample.posts.length === 2, 'sample json parses to two posts');

var wrapped = I.parse(JSON.stringify({ posts: sample }));
assert(wrapped.ok && wrapped.posts.length === 2, 'posts wrapper is accepted');

var fenced = I.parse('# 원고\n\n```json\n' + JSON.stringify(sample) + '\n```\n');
assert(fenced.ok && fenced.posts.length === 2, 'markdown json fence parses');

var one = I.parse(JSON.stringify(sample[0]));
assert(one.ok && one.posts.length === 1, 'a single post object is accepted');

var bad = I.parse('{');
assert(!bad.ok, 'broken json is rejected');

var view = I.inspect([
  { topic: '목', program: '도수치료', channel: 'blog', account: 'dr.park_dc.pt', title: '앉기', body: '본문', hookType: '질문', sourceLinks: ['https://example.com/a'], scheduledDate: '2026-11-03' },
  { topic: '목', program: '리얼 무브먼트', channel: 'instagram', account: 're.al_movement_official', title: '앉기', body: '캡션', hookType: '한 줄', sourceLinks: [], scheduledDate: '2026-11-04' },
  { topic: '목', program: 'Re:Al', channel: 'threads', account: 're.al_movement_official', title: '앉기', body: '쓰레드', hookType: '장면', sourceLinks: ['https://example.com/b'] },
  { topic: '기타 글', program: '기타', channel: 'sonsik', account: '카카오', title: '소식 제목', body: '소식 본문', hookType: '안내', sourceLinks: ['https://example.com/c'], scheduledDate: '2026-12-01' },
  { topic: '기타 글', program: '기타', channel: 'sonsik', account: '네이버', title: '다른 소식', body: '다른 본문', hookType: '안내', sourceLinks: ['https://example.com/d'] },
  { topic: '목', program: '도수치료', channel: 'blog', account: 'x', title: '앉기', body: '중복', hookType: '질문', sourceLinks: [] },
  { topic: '금지어', program: 'IFC', channel: 'blog', account: 'dr.face_ifc', title: '페이스리프트 한 번에 끝내기', body: '교정하고 펴는 완치', hookType: '과장', sourceLinks: ['https://example.com/e'] },
  { topic: '', program: '없는프로그램', channel: 'reels', title: '', body: '', scheduledDate: '2026-13-40' }
], []);

assert(view.groups.length === 6, 'topics and invalid rows stay grouped, got ' + view.groups.length);
var neckBlog = view.items[0];
assert(neckBlog.ok && neckBlog.catId === 0 && neckBlog.channel === 'blog' && neckBlog.scheduledDate === '2026-11-03', 'manual therapy blog is ready');
assert(view.items[1].catId === 1 && view.items[1].channel === 'instagram', 'real movement maps to instagram');
assert(view.items[2].catId === 5 && view.items[2].channel === 'threads', 'Re:Al maps to threads');
assert(view.items[3].catId === 7 && view.items[3].newsSlot === 'kakao' && view.items[3].ok, 'kakao sonsik slot');
assert(view.items[4].newsSlot === 'naver' && view.items[4].ok, 'different sonsik title stays in the naver slot');
var sameTopic = view.groups.filter(function(g){ return g.topic === '목' && g.catId === 0; })[0];
assert(sameTopic && sameTopic.items.length === 2, 'same topic and program stay in one group even when one is a duplicate');
assert(view.items[5].status === 'duplicate' && !view.items[5].ok, 'same topic+channel+title is skipped');
assert(view.items[6].ok && view.items[6].status === 'warning' && /금지어/.test(view.items[6].warnings.join(' ')), 'banned words warn and still allow import');
assert(!view.items[7].ok && view.items[7].errors.length >= 4, 'missing fields, unknown program, bad channel, bad date');

var existing = I.inspect([
  { topic: '목', program: 'CMT', channel: 'blog', account: 'cmt', title: '이미 있음', body: '본문', hookType: '설명', sourceLinks: ['https://example.com'] },
  { topic: '목', program: 'CMT', channel: 'instagram', account: 'cmt', title: '새 캡션', body: '본문', hookType: '설명', sourceLinks: ['https://example.com'] }
], [{ catId: 3, topic: '목', slots: { blog: '이미 있음', instagram: '다른 캡션' } }]);
assert(existing.items[0].status === 'duplicate', 'existing same title is skipped');
assert(!existing.items[1].ok && /다른 글/.test(existing.items[1].errors.join(' ')), 'occupied channel with another title is skipped');

var chosen = I.batch(view.items, [0, 1, 3, 4, 5, 6, 7]);
assert(chosen.drafts.length === 4, 'ready rows collapse to four drafts, got ' + chosen.drafts.length);
var manual = chosen.drafts.filter(function(d){ return d.catId === 0; })[0];
assert(manual && manual.pieces.length === 1 && manual.date === '2026-11-03', 'duplicate piece is not saved and the planned date is kept');
assert(!manual.publish && !manual.schedule && !manual.tabPublished, 'import batch does not publish or schedule');
var etc = chosen.drafts.filter(function(d){ return d.catId === 7; })[0];
assert(etc && etc.pieces.length === 2 && etc.pieces[0].newsSlot === 'kakao' && etc.pieces[1].newsSlot === 'naver', 'one topic keeps both sonsik accounts');
assert(chosen.skipped.length === 2, 'duplicate and invalid rows are reported, got ' + chosen.skipped.length);

var unchecked = I.batch(view.items, [1]);
assert(unchecked.drafts.length === 1 && unchecked.drafts[0].catId === 1, 'only the checked row is imported');
assert(unchecked.skipped.some(function(s){ return s.index === 5; }), 'unchecked duplicates are still reported');

var collabView = I.inspect([
  { topic: '목', program: '도수치료', channel: 'instagram', account: 'dr.park_dc.pt', title: '앉기', body: '본문', hookType: '질문', sourceLinks: ['https://example.com'], collab: ['@dr.face_ifc', 'dr.face_ifc', 're.al_movement_official'] },
  { topic: '목', program: '도수치료', channel: 'blog', account: 'dr.park_dc.pt', title: '앉기 블로그', body: '본문', hookType: '질문', sourceLinks: [], collab: 'cmt_academy, @dr.face_ifc' },
  { topic: '목', program: '도수치료', channel: 'threads', account: 'x', title: '쓰레드', body: '본문', hookType: '질문', sourceLinks: [], collab: { bad: true } },
  { topic: '다른 주제', program: '도수치료', channel: 'blog', account: 'a', title: '다른 제목', body: '본문', hookType: '질문', sourceLinks: [], collab: ['good_handle', '띄어 쓰기'] }
], []);
assert(collabView.items[0].ok && collabView.items[0].collab.join(',') === 'dr.face_ifc,re.al_movement_official', 'collab strips @ and dedupes');
assert(collabView.items[0].hookType === '질문' && collabView.items[0].sourceLinks[0] === 'https://example.com', 'hookType and sourceLinks stay on a collab row');
assert(collabView.items[1].ok && collabView.items[1].collab.join(',') === 'cmt_academy,dr.face_ifc', 'collab string is accepted');
assert(!collabView.items[2].ok && /collab/.test(collabView.items[2].errors.join(' ')), 'bad collab type is skipped');
assert(collabView.items[3].ok && collabView.items[3].collab.join(',') === 'good_handle' && /뺐습니다/.test(collabView.items[3].warnings.join(' ')), 'invalid handle warns and is dropped');
var collabBatch = I.batch(collabView.items, [0, 1, 3]);
assert(collabBatch.drafts.length === 2 && collabBatch.drafts[0].pieces[0].collab[0] === 'dr.face_ifc' && collabBatch.drafts[0].pieces[1].collab[1] === 'dr.face_ifc', 'collab is kept on the saved pieces');
assert(collabBatch.skipped.some(function(s){ return s.index === 2; }), 'bad collab is reported');
assert(!collabBatch.publish && !collabBatch.schedule, 'collab import still does not publish or schedule');

if(failed){
  console.error(failed + ' failed');
  process.exit(1);
}
console.log('planner-import-test: ok');
