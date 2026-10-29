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

var baseAi = {
  content: { blog: { problem: '', title: '' }, insta: { caption: '원래 인스타' }, threads: { body: '원래 쓰레드', comment: '' } }
};
var localAi = {
  content: { blog: { problem: 'AI가 채운 본문', title: 'AI 제목' }, insta: { caption: '원래 인스타' }, threads: { body: '원래 쓰레드', comment: '' } }
};
var serverAi = {
  content: { blog: { problem: '서버 본문', title: '서버 제목' }, insta: { caption: '원래 인스타' }, threads: { body: '원래 쓰레드', comment: '' } }
};
var aiPaths = S.diffTabPaths(baseAi, localAi, key);
assert(aiPaths.indexOf('blog.problem') >= 0 && aiPaths.indexOf('blog.title') >= 0, 'AI fill is stored as device paths without sheet edits');
var planAi = S.planConflictAction({
  base: baseAi, local: localAi, server: serverAi, key: key,
  devicePaths: aiPaths, sheetPaths: [], clearedPaths: []
});
assert(planAi.keepOutbox && planAi.action === 'ask', 'AI conflict keeps the outbox and opens the dialog');
assert(planAi.showPaths.indexOf('blog.problem') >= 0, 'AI conflict lists blog.problem');

var planRefresh = S.planConflictAction({
  base: null, local: localAi, server: serverAi, key: key,
  devicePaths: [], sheetPaths: [], clearedPaths: []
});
assert(planRefresh.keepOutbox && planRefresh.action === 'ask' && planRefresh.showPaths == null, 'refresh with no base keeps the outbox');
assert(planRefresh.value.content.blog.problem === 'AI가 채운 본문', 'refresh keeps the unsent blog');

var baseStatus = {
  content: { blog: { problem: '같은' }, insta: { caption: '같은' }, threads: { body: '', comment: '' } },
  tabPublished: {}
};
var localStatus = {
  content: { blog: { problem: '같은' }, insta: { caption: '같은' }, threads: { body: '', comment: '' } },
  tabPublished: { blog: '2026-10-29' }
};
var serverStatus = {
  content: { blog: { problem: '서버 본문' }, insta: { caption: '같은' }, threads: { body: '', comment: '' } },
  tabPublished: {}
};
assert(S.diffTabPaths(baseStatus, localStatus, key).length === 0, 'publish status is not a tab path');
var planStatus = S.planConflictAction({
  base: baseStatus, local: localStatus, server: serverStatus, key: key,
  devicePaths: [], sheetPaths: [], clearedPaths: []
});
assert(planStatus.keepOutbox && planStatus.action === 'ask' && planStatus.showPaths == null, 'status-only change is not discarded');
var statusKept = S.overlayDeviceEdits(serverStatus, localStatus, key, [], []);
assert(statusKept.tabPublished.blog === '2026-10-29', 'this device keeps publish status');
assert(statusKept.content.blog.problem === '서버 본문', 'untouched blog takes the server value');

var planInsta = S.planConflictAction({
  base: {
    content: { blog: { problem: 'A블로그1' }, insta: { caption: '원래 인스타' }, threads: { body: '원래 쓰레드', comment: '' } }
  },
  local: tabB,
  server: server,
  key: key,
  devicePaths: ['insta.caption'],
  sheetPaths: [],
  clearedPaths: []
});
assert(planInsta.keepOutbox && planInsta.showPaths.length === 1 && planInsta.showPaths[0] === 'insta.caption', 'tab B dialog is only insta.caption');
assert(planInsta.value.content.blog.problem === 'A블로그2', 'tab B blog takes the server value');
assert(planInsta.value.content.insta.caption === 'B인스타', 'tab B keeps the insta edit');

var baseOrder = {
  content: { blog: { title: '제목', problem: '본문' }, insta: { caption: '캡션' } },
  tabPublished: { blog: '발행', insta: '' },
  finalTexts: { blog: '최종', insta: '최종2' }
};
var localOrder = {
  finalTexts: { insta: '최종2', blog: '최종' },
  tabPublished: { insta: '', blog: '발행' },
  content: { insta: { caption: '캡션' }, blog: { problem: '본문', title: '제목' } }
};
assert(S.shouldKeepWholeConflict(baseOrder, localOrder, key) === false, 'key order alone is not a whole-card conflict');
assert(S.diffTabPaths(baseOrder, localOrder, key).length === 0, 'key order alone is not a tab diff');
assert(S.planConflictAction({
  base: baseOrder, local: localOrder, server: baseOrder, key: key,
  devicePaths: [], sheetPaths: [], clearedPaths: []
}).action === 'accept-server', 'key order alone does not open a conflict');

var sameBase = { content: { blog: { problem: '서버 본문' }, insta: { caption: '서버 인스타' } } };
var editedLocal = { content: { blog: { problem: '이 기기 본문' }, insta: { caption: '서버 인스타' } } };
var planNoPaths = S.planConflictAction({
  base: sameBase, local: editedLocal, server: sameBase, key: key,
  devicePaths: [], sheetPaths: [], clearedPaths: []
});
assert(planNoPaths.keepOutbox === true && planNoPaths.action === 'ask', 'empty device paths still keep the outbox when tabs differ');
assert(planNoPaths.showPaths.indexOf('blog.problem') >= 0, 'the differing tab is shown');

var emptyProblem = { content: { blog: { problem: '' }, insta: { caption: '같음' } } };
var missingProblem = { content: { blog: {}, insta: { caption: '같음' } } };
var nullProblem = { content: { blog: { problem: null }, insta: { caption: '같음' } } };
assert(S.diffTabPaths(emptyProblem, missingProblem, key).length === 0, 'empty string and a missing value are the same field');
assert(S.diffTabPaths(emptyProblem, nullProblem, key).length === 0, 'empty string and null are the same field');
assert(S.deviceConflictPaths(missingProblem, emptyProblem, key, ['blog.problem'], []).length === 0, 'an empty field is not a conflict path');
assert(S.wrapperFieldsChanged(
  { content: { blog: { problem: '본문' } }, tabPublished: { blog: '', insta: null } },
  { content: { blog: { problem: '본문' } }, tabPublished: { insta: '', blog: undefined } },
  key
) === false, 'empty wrapper values are the same');
assert(S.nonTabContentChanged(
  { content: { extra: '메모', spare: '', blog: { problem: '본문' } }, note: null },
  { note: '', content: { blog: { title: '제목', problem: '본문' }, spare: undefined, extra: '메모' } },
  key
) === false, 'empty non-tab values are the same');

assert(planner.indexOf('normalized.devicePaths') >= 0, 'device paths survive outbox restore');
assert(planner.indexOf('생성이 중단됐습니다. 다시 만들려면 버튼을 누르세요.') >= 0, 'interrupted threads show a manual retry note');

var pendingCard = {
  content: { blog: { problem: '본문' }, insta: { caption: '캡션' }, instaPending: true, instaPendingEndMs: 9, threads: { body: '', comment: '' } }
};
var cleanCard = S.omitDevicePending(pendingCard);
assert(!cleanCard.content.instaPending && !cleanCard.content.instaPendingEndMs, 'insta pending clocks are omitted');
assert(S.sendKeyList(pendingCard).indexOf('instaPending') < 0, 'insta pending is not a send key');
var patchBlog = S.buildValuePatch(
  { content: { blog: { problem: '이전' }, insta: { caption: '캡션' } } },
  { content: { blog: { problem: '이후' }, insta: { caption: '캡션' }, instaPending: true } },
  [],
  key
);
assert(patchBlog && patchBlog.paths.join(',') === 'content.blog.problem', 'only the changed blog field is patched');
var patchOrder = S.buildValuePatch(
  { content: { insta: { caption: '같음' }, blog: { problem: '' } } },
  { content: { blog: {}, insta: { caption: '같음' } } },
  [],
  key
);
assert(patchOrder && patchOrder.paths.length === 0, 'key order and an empty field are not a patch');
var patchDraft = S.buildValuePatch(
  { catId: '1', value: { topic: '이전', roadmapStepId: 's3' } },
  { catId: '1', value: { topic: '이후', roadmapStepId: 's3' } },
  [],
  'draft:d1'
);
assert(patchDraft && patchDraft.paths.join(',') === 'value.topic', 'a draft patch sends only the changed field');
var collapsed = S.collapseSharedConflicts([
  { key: 'published:' + cardId, paths: ['insta.caption'] },
  { key: 'generated:' + cardId, paths: ['insta.caption'] }
]);
assert(collapsed.length === 1 && collapsed[0].label.indexOf('발행 글·생성 초안') === 0, 'the same caption is one conflict row');
assert(collapsed[0].indexes.length === 2, 'the one row still applies to both copies');

var unsentLocal = { content: { blog: { problem: '서버에 아직 없음' }, insta: { caption: '같음' } } };
var beforePull = S.planOutboxSend(null, unsentLocal, key);
assert(beforePull.mode === 'full' && beforePull.dropOutbox === false, 'no server base keeps the outbox and sends the whole card');
assert(beforePull.value.content.blog.problem === '서버에 아직 없음', 'the unsent field is still in the full card');
var afterPull = S.planOutboxSend(
  { content: { blog: { problem: '' }, insta: { caption: '같음' } } },
  unsentLocal,
  key
);
assert(afterPull.mode === 'patch' && afterPull.fieldPatch.paths.indexOf('content.blog.problem') >= 0, 'a server base sends the unsent field');
assert(S.planOutboxSend(
  { content: { blog: { problem: '서버에 아직 없음' }, insta: { caption: '같음' } } },
  unsentLocal,
  key
).dropOutbox === true, 'unchanged drop is only for a server base');

var lineBreak = 'A문제-1b-SQL\n수정하고 저장했어';
assert(S.preserveProseBreaks(lineBreak) === lineBreak, 'a single line break stays a line break');
assert(S.preserveProseBreaks('첫째 문단\n\n둘째 문단') === '첫째 문단\n\n둘째 문단', 'a blank line stays a blank line');
assert(S.preserveProseBreaks('A문제-1b-SQL\r\n수정하고 저장했어') === lineBreak, 'windows newlines become a real line break');
var linePatch = S.buildValuePatch(
  { content: { blog: { problem: 'A문제-1b-SQL' } } },
  { content: { blog: { problem: lineBreak } } },
  [],
  key
);
assert(linePatch && linePatch.set['content.blog.problem'] === lineBreak, 'a saved line break is sent as a line break');

var publishedBase = { content: { blog: { problem: '이전' }, images: { gptVisuals: [{ prompt: '옛 안내' }] }, insta: { caption: '같음' }, threads: { body: '같음' } } };
var withImages = { content: { blog: { problem: '새 문제' }, images: { gptVisuals: [{ prompt: '새 안내' }] }, insta: { caption: '같음' }, threads: { body: '같음' } } };
var combined = S.planOutboxSend(publishedBase, withImages, key);
assert(combined.mode === 'patch', 'blog and image edits are one patch');
assert(combined.fieldPatch.paths.indexOf('content.blog.problem') >= 0, 'the combined patch includes the blog field');
assert(combined.fieldPatch.paths.join(',').indexOf('images') >= 0, 'the combined patch includes the image field');
var borrowed = S.baseForContentSend(null, publishedBase, 'generated:' + cardId, { baseEntityRevision: 4 });
var follow = S.planOutboxSend(borrowed, withImages.content, 'generated:' + cardId);
assert(follow.mode === 'patch' && follow.fieldPatch.paths.join(',').indexOf('images') >= 0, 'a generated row already on the server can patch from the published base');
assert(S.baseForContentSend(null, publishedBase, 'generated:' + cardId, { serverRevision: 2 }) != null, 'a stored server revision also allows the borrowed base');
var unsentGenerated = S.planOutboxSend(
  S.baseForContentSend(null, publishedBase, 'generated:' + cardId, { baseEntityRevision: 0, serverRevision: 0 }),
  withImages.content,
  'generated:' + cardId
);
assert(unsentGenerated.mode === 'full', 'generated not on the server sends the whole card');
assert(S.baseForContentSend(null, null, 'generated:' + cardId) == null, 'without any server base the follow-up does not invent one');

var seedStart = planner.indexOf('function seedSyncFieldBaseFromState_');
var seedEnd = planner.indexOf('function describePendingSyncItems_');
var seedFn = planner.slice(seedStart, seedEnd);
assert(seedFn.indexOf('state.published') < 0 && seedFn.indexOf('state.generatedOnly') < 0, 'boot does not copy this device into the base');
assert(planner.indexOf('syncFieldBaseFromServer_') >= 0, 'unchanged outbox drops require a server base');
assert(planner.indexOf('shaped.unchanged && syncFieldBaseFromServer_') >= 0, 'an unconfirmed base does not delete the outbox');

var supaCtx = {
  console: console,
  setTimeout: function(){},
  localStorage: { getItem: function(){ return null; }, setItem: function(){} }
};
vm.createContext(supaCtx);
vm.runInContext(supa, supaCtx);
var Supa = supaCtx.PlannerSyncSupabase;
assert(Supa.fieldPatchStorageKey('https://example.supabase.co').indexOf('https://example.supabase.co') >= 0, 'the display flag key includes the server url');
assert(Supa.fieldPatchSendDecision({ sessionConfirmed: false, storedDisplay: true }) === 'full', 'a stored support flag does not send a patch before this session confirms');
assert(Supa.fieldPatchSendDecision({ sessionConfirmed: true }) === 'patch', 'this session confirmation may send a patch');
assert(supa.indexOf('p_rows: []') >= 0, 'each session probes with an empty save');

if(failed){
  console.error(failed + ' failed');
  process.exit(1);
}
console.log('ok');
