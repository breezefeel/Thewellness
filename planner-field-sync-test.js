/* node planner-field-sync-test.js
 * 두 탭 A/B. 카드 d1-c1719731533069 (리얼 무브먼트 '테스트 동기화 1029').
 * 서버에는 쓰지 않는다.
 */
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var file = path.join(__dirname, 'planner-field-sync.js');
var context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(file, 'utf8'), context);
var S = context.PlannerFieldSync;
var failed = 0;
function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var cardId = 'd1-c1719731533069';
var key = 'published:' + cardId;

var tabA = {
  content: {
    blog: { problem: 'A블로그1' },
    insta: { caption: '원래 인스타' },
    threads: { body: '원래 쓰레드', comment: '' }
  }
};
tabA.content.blog.problem = 'A블로그2';
var server = JSON.parse(JSON.stringify(tabA));

var tabB = {
  content: {
    blog: { problem: 'A블로그1' },
    insta: { caption: 'B인스타' },
    threads: { body: '원래 쓰레드', comment: '' }
  }
};
var editedB = ['insta.hook', 'insta.caption', 'insta.hashtags'];
var clearedB = [];

var kept = S.overlayDeviceEdits(server, tabB, key, editedB, clearedB);
assert(kept.content.blog.problem === 'A블로그2', 'unedited blog stays on the server value');
assert(kept.content.insta.caption === 'B인스타', 'edited insta stays on this device');
assert(kept.content.threads.body === '원래 쓰레드', 'unedited threads stays on the server value');

var shown = S.deviceConflictPaths(server, tabB, key, editedB, clearedB);
assert(shown.indexOf('blog.problem') < 0, 'blog.problem is not a device conflict');
assert(shown.indexOf('insta.caption') >= 0, 'insta.caption is a device conflict');
var rows = S.describeDiff(kept, server, key, shown);
assert(rows.length === 1 && rows[0].path === 'insta.caption', 'dialog lists only the edited insta field');
assert(rows[0].local === 'B인스타' && rows[0].remote === '원래 인스타', 'dialog compares insta only');

var chooseDevice = S.overlayDeviceEdits(server, tabB, key, editedB, clearedB);
assert(chooseDevice.content.blog.problem === 'A블로그2', 'choosing this device does not restore A블로그1');

var noEdit = S.deviceConflictPaths(server, {
  content: {
    blog: { problem: 'A블로그1' },
    insta: { caption: '원래 인스타' },
    threads: { body: '원래 쓰레드', comment: '' }
  }
}, key, [], []);
assert(noEdit.length === 0, 'a device that edited nothing has no conflict fields');
var adopted = S.overlayDeviceEdits(server, {
  content: { blog: { problem: 'A블로그1' }, insta: { caption: '원래 인스타' } }
}, key, [], []);
assert(adopted.content.blog.problem === 'A블로그2', 'unedited fields are adopted from the server');

var clearedLocal = JSON.parse(JSON.stringify(server));
clearedLocal.content.threads = { body: '', comment: '' };
clearedLocal.content.threadsPendingStartedAt = 111;
clearedLocal.content.threadsPendingEndMs = 222;
var cleared = S.overlayDeviceEdits(server, clearedLocal, key, [], ['threads.body']);
assert(cleared.content.threads.body === '', 'a cleared threads body stays empty');
assert(S.deviceConflictPaths(server, clearedLocal, key, [], ['threads.body']).indexOf('threads.body') >= 0, 'the cleared body is the conflict field');
var pendingOnly = JSON.parse(JSON.stringify(server));
pendingOnly.content.threadsPendingStartedAt = 111;
pendingOnly.content.threadsPendingEndMs = 222;
var strippedLocal = S.omitDevicePending(pendingOnly);
var strippedServer = S.omitDevicePending(server);
assert(!strippedLocal.content.threadsPendingEndMs && !strippedLocal.content.threadsPendingStartedAt, 'pending clocks are omitted');
assert(S.sendKeyList(strippedLocal) === S.sendKeyList(strippedServer), 'pending clocks are not send keys');
assert(S.sendKeyList(server).indexOf('blog') >= 0 && S.sendKeyList(server).indexOf('insta') >= 0, 'a full card logs its section keys');
assert(S.sendKeyList(server).indexOf('threadsPending') < 0, 'pending keys are not in the send list');

assert(S.shouldResumeThreadsJob('load') === false, 'refresh does not resume threads');
assert(S.shouldResumeThreadsJob('focus') === false, 'focus does not resume threads');
assert(S.shouldResumeThreadsJob('visibility') === false, 'visibility does not resume threads');
assert(S.shouldResumeThreadsJob('button') === true, 'the button may start threads');

var planner = fs.readFileSync(path.join(__dirname, 'planner.js'), 'utf8');
var recStart = planner.indexOf('function reconcileThreadsPendingJobs_');
var recEnd = planner.indexOf('function copyAndOpenThreads_');
var rec = planner.slice(recStart, recEnd);
assert(rec.indexOf('enqueueThreadsFromInsta_') < 0, 'reload does not enqueue threads generation');
assert(rec.indexOf('shouldResumeThreadsJob') >= 0, 'reload consults the resume gate');
assert(planner.indexOf("console.info('[칸 저장]', key, '카드 전체'") >= 0, 'full-card shaping logs the card');
var supa = fs.readFileSync(path.join(__dirname, 'planner-sync-supabase.js'), 'utf8');
assert(supa.indexOf("'카드 전체'") >= 0, 'the send path logs a full card');

if(failed){
  console.error(failed + ' failed');
  process.exit(1);
}
console.log('ok');
