/* node planner-sync-rules-test.js */
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var context = { module: { exports: {} }, exports: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-banned-words.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-sync-rules.js'), 'utf8'), context);
var R = context.PlannerSyncRules;
var failed = 0;

assert(R.plannerShouldPersistView({ userEdited: false, beforeFp: 'a', afterFp: 'b' }) === false, 'opening or switching tabs does not persist');
assert(R.plannerShouldPersistView({ userEdited: true, beforeFp: 'a', afterFp: 'a' }) === false, 'same text after an edit does not persist');
assert(R.plannerShouldPersistView({ userEdited: true, beforeFp: 'a', afterFp: 'b' }) === true, 'a real edit persists');
assert(R.plannerSuggestKeywordLines('1. 목\n2. 어깨').length === 2, 'partial suggestions are kept');
assert(R.plannerSuggestKeywordLines('').length === 0, 'empty suggestion is empty');
assert(R.plannerSuggestKeywordLines('목 · 어깨 · 허리').length === 3, 'one-line suggestions split');
assert(R.plannerLayoutFileListed(['a.jpg']) === false, 'missing layout file is not downloaded');
assert(R.plannerLayoutFileListed(['_layout.json', 'a.jpg']) === true, 'listed layout file can be read');
assert(R.plannerExplicitPublishText({ generated: '긴 초안 본문입니다', finalText: '' }) === '', 'generated text is not a publish mark');
assert(R.plannerExplicitPublishText({ finalText: '사용자가 발행한 글' }) === '사용자가 발행한 글', 'explicit final text is a publish mark');
assert(R.plannerConnectionDropped('스크립트 엔드포인트 연결 닫힘') === true, 'closed endpoint is a connection drop');
assert(R.plannerConnectionDropped('저장했습니다') === false, 'a normal message is not a connection drop');

var plannerSrc = fs.readFileSync(path.join(__dirname, 'planner.js'), 'utf8');
var socialSrc = fs.readFileSync(path.join(__dirname, 'planner-social.js'), 'utf8');
assert(plannerSrc.indexOf('requestCloseSheet_') >= 0, 'card close asks before saving unsaved edits');
assert(plannerSrc.indexOf('if(beforeLen > afterLen) persistDraftContent_') < 0, 'opening a card does not persist image normalization');
assert(plannerSrc.indexOf('state._newItemKeepKeys = { topic: true }') >= 0, 'suggestions are not flushed away');
assert(socialSrc.indexOf('hasLayout ? readLayout') >= 0, 'missing layout file is not requested');
assert(socialSrc.indexOf("commitSheetTabPublish_(r.draft_id") < 0, 'a cloud post does not mark 발행완료 by itself');

function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var op = { mutationId: 'm1', version: 2, key: 'setting:x', value: 'b', baseEntityRevision: 1 };
var keptStuck = R.plannerFilterAckedOutbox([op], { ack: { m1: 1 }, sentByKey: {} });
assert(keptStuck.length === 1, 'ack version 1 must keep a version 2 row');

var flushed = R.plannerFilterAckedOutbox([op], { ack: { m1: 2 }, sentByKey: {} });
assert(flushed.length === 0, 'ack against the sent version removes the row');

var idempotent = R.plannerFilterAckedOutbox([op], { ack: {}, sentByKey: {} });
assert(idempotent.length === 1, 'idempotent (not in ack map) keeps the row');

var rotated = R.plannerNextMutation(op, function(){ return 'm2'; });
assert(rotated.mutationId === 'm2' && rotated.version === 3, 'version bump mints a new mutation id');
var afterRotate = {
  mutationId: rotated.mutationId,
  version: rotated.version,
  key: op.key,
  value: 'b'
};
var afterOk = R.plannerFilterAckedOutbox([afterRotate], { ack: { m2: 3 }, sentByKey: {} });
assert(afterOk.length === 0, 'rotated row is removed when the new version is accepted');

var newer = { mutationId: 'm9', version: 4, key: 'setting:x' };
var duringEdit = R.plannerFilterAckedOutbox([newer], {
  ack: { m2: 3 },
  sentByKey: { 'setting:x': { version: 3 } }
});
assert(duringEdit.length === 1, 'a newer local version is kept when the ack is for an older send');

var card = { mutationId: 'c1', version: 1, key: 'draft:d1' };
var body = { mutationId: 'b1', version: 1, key: 'generated:d1' };
var coupled = R.plannerFilterAckedOutbox([card, body], { ack: { c1: 1 }, sentByKey: {} });
assert(coupled.length === 1 && coupled[0].key === 'generated:d1', 'an accepted card leaves even while its body is still queued');
var both = R.plannerFilterAckedOutbox([card, body], { ack: { c1: 1, b1: 1 }, sentByKey: {} });
assert(both.length === 0, 'card leaves once the body is accepted');

var postureSteps = [
  { id: 's1', title: '운동상식' },
  { id: 's2', title: '유연성·스트레칭' },
  { id: 's3', title: '자세·거북목·라운드 숄더' }
];
assert(R.plannerSameStepId('3', 's3'), 'numeric step id matches the canonical id');
assert(!R.plannerSameStepId('3', 's2'), 'a different step id does not match');
assert(R.plannerCountDraftsForStep(postureSteps, [
  { roadmapStepId: '3', series: '자세·거북목·라운드 숄더', topic: '거북목' },
  { roadmapStepId: 's1', topic: '운동' }
], 's3') === 1, 'posture drawer counts a draft stored as step 3');
assert(R.plannerCountDraftsForStep(postureSteps, [
  { series: '자세 거북목 라운드 숄더', topic: '라운드 숄더' }
], 's3') === 1, 'a missing step id still counts by the drawer name');
assert(R.plannerTopicDrawerKey('자세·거북목·라운드 숄더') === R.plannerTopicDrawerKey('자세 거북목 라운드 숄더'), 'posture drawer names match');

var many = [];
for(var i = 0; i < 13; i++) many.push({ key: 'draft:t' + i, mutationId: 'k' + i, version: 1 });
assert(R.plannerTrimOutbox(many).length === 13, 'trim keeps every outbox row, including the 13th');

assert(R.plannerIsProtectedDelete({ key: 'draft:d1', deleted: true, value: null }), 'draft delete is protected');
assert(R.plannerIsProtectedDelete({ key: 'deleted:d1', deleted: false, value: '2026-01-01' }), 'deleted: tombstone is protected');
assert(!R.plannerIsProtectedDelete({ key: 'setting:x', deleted: false, value: 'a' }), 'ordinary setting is not a protected delete');

var batch = R.plannerSelectSyncBatch([
  { key: 'draft:d1', value: 'card' },
  { key: 'generated:d1', value: 'body' },
  { key: 'pinned:d1', value: 'pin' }
], {
  maxItems: 8,
  maxBytes: 5000,
  bytesOf: function(op){ return op.key.indexOf('generated:') === 0 ? 100 : 10; }
});
assert(batch.length === 2 && batch[0].key === 'generated:d1' && batch[1].key === 'pinned:d1',
  'card waits while its body is still unsent');

var together = R.plannerSelectSyncBatch([
  { key: 'generated:d1', value: 'body' },
  { key: 'draft:d1', value: 'card' }
], { maxItems: 8, maxBytes: 5000, bytesOf: function(){ return 10; } });
assert(together.length === 2 && together[0].key === 'generated:d1' && together[1].key === 'draft:d1',
  'body and card can share a batch when the body is first');

var huge = R.plannerSelectSyncBatch([
  { key: 'blob:abc:99', value: 'xxxx' }
], { maxItems: 2, maxBytes: 20, bytesOf: function(){ return 80; } });
assert(huge.length === 1 && huge[0].key === 'blob:abc:99', 'one oversized blob is still sent');

var incremental = [
  { key: 'setting:a', change_seq: 4 },
  { key: 'ops:checked:b', change_seq: 7 }
];
var indexOnly = [{ key: 'draft:z', change_seq: 99 }];
assert(R.plannerIncrementalCursor(3, incremental) === 7, 'cursor is the incremental max');
assert(R.plannerIncrementalCursor(3, incremental) !== 99, 'index seq 99 does not move the cursor');
assert(R.plannerKeysetAdvance(incremental, 'change_seq') === 7, 'keyset continues after the last row');
assert(R.plannerKeysetAdvance(indexOnly, 'key') === 'draft:z', 'prefix keyset uses the last key');
assert(R.plannerIncrementalCursor(10, []) === 10, 'partial fetch keeps the cursor it started with');

assert(!R.plannerServerRevHigher(4, 4), 'equal entity rev is not server-newer');
assert(!R.plannerServerRevHigher(3, 4), 'older server rev is not server-newer');
assert(R.plannerServerRevHigher(5, 4), 'strictly higher server rev wins');

assert(R.plannerIsAuthFailure({ message: 'JWT expired' }), 'JWT expired is auth');
assert(R.plannerIsAuthFailure({ code: 'PGRST301' }), 'PGRST301 is auth');
assert(R.plannerIsAuthFailure({ code: 'PGRST303' }), 'PGRST303 is auth');
assert(R.plannerIsAuthFailure({ status: 401, message: 'permission' }), 'HTTP 401 is auth');
assert(R.plannerIsAuthFailure({ message: 'not authenticated' }), 'not authenticated is auth');
assert(!R.plannerIsAuthFailure({ message: 'timeout', status: 500 }), 'a timeout is not auth');

var conflicted = { mutationId: 'm1', version: 2, key: 'draft:d1', value: 'local edit' };
var keptConflict = R.plannerFilterAckedOutbox([conflicted], {
  ack: {},
  sentByKey: { 'draft:d1': { version: 2 } },
  holdKeys: R.plannerConflictHoldKeys([{ key: 'draft:d1', serverValue: 'server' }])
});
assert(keptConflict.length === 1 && keptConflict[0].value === 'local edit',
  'a conflict key stays queued until the user chooses');

var cardHeld = { mutationId: 'c1', version: 1, key: 'draft:d9' };
var bodyHeld = { mutationId: 'b9', version: 1, key: 'generated:d9', value: 'body' };
var heldPair = R.plannerFilterAckedOutbox([cardHeld, bodyHeld], {
  ack: { c1: 1, b9: 1 },
  sentByKey: { 'draft:d9': { version: 1 }, 'generated:d9': { version: 1 } },
  holdKeys: { 'generated:d9': true }
});
assert(heldPair.length === 1 && heldPair[0].key === 'generated:d9', 'an accepted card leaves while a conflicting body stays');

var acceptedOnly = R.plannerAcceptedSentByKey([
  { mutationId: 'm1', version: 2, key: 'draft:d1' },
  { mutationId: 'm2', version: 1, key: 'draft:d2' }
], [
  { mutationId: 'm2', version: 1, key: 'draft:d2' }
]);
assert(!acceptedOnly['draft:d1'] && acceptedOnly['draft:d2'].version === 1,
  'a conflicted send is not treated as delivered');

var topics = [
  { id: 'late', slot: 2, index: 0, activityMs: 5000 },
  { id: 'first', slot: 1, index: 1, activityMs: 1000 },
  { id: 'third', slot: 3, index: 2, activityMs: 9000 }
];
function topicIds(mode){
  return topics.slice().sort(function(a, b){
    return R.plannerCompareTopicOrder(a, b, mode);
  }).map(function(row){ return row.id; }).join(',');
}
assert(topicIds('user') === 'first,late,third', 'user order follows the slot, not activity');
assert(topicIds('activity') === 'third,late,first', 'activity sort stays available');
assert(R.plannerTopicSlot('2/5') === 2, 'slot reads the numerator');
assert(R.plannerTopicSlot('') == null, 'blank step is not a slot');
assert(R.plannerCompareTopicOrder(
  { slot: null, index: 1, activityMs: 9 },
  { slot: null, index: 0, activityMs: 1 },
  'user'
) > 0, 'without a slot, user order is the list index');

var quotaPlan = R.plannerQuotaTrimPlan({
  outbox: [
    { key: 'generated:d1', value: 'unsynced body' },
    { key: 'draft:d2', value: 'user order' }
  ],
  generatedIds: ['d1', 'd2', 'd3']
});
assert(quotaPlan.keepOutbox === true && quotaPlan.outbox.length === 2, 'quota trim keeps every outbox row');
assert(quotaPlan.trimGeneratedIds.join(',') === 'd3', 'only an unqueued generated copy can be trimmed');
assert(quotaPlan.trimImages === true && quotaPlan.clearCaches === true, 'quota frees images and caches');
assert(R.plannerDataUrlOverLimit('data:image/jpeg;base64,' + 'x'.repeat(200000), 180000), 'a large image is over the quota trim line');
assert(!R.plannerDataUrlOverLimit('hello', 180000), 'plain text is not an image trim');

var smallBlob = R.plannerBlobSyncAction({ hash: 'h', data: 'data:image/jpeg;base64,abc' });
assert(smallBlob.action === 'queue' && !smallBlob.notice, 'a small image is queued');
var bigImage = R.plannerBlobSyncAction({
  hash: 'h2',
  data: 'data:image/png;base64,' + new Array(2200002).join('a')
});
assert(bigImage.action === 'compress' && bigImage.notice.indexOf('2.2MB') >= 0, 'an oversized image is compressed, not skipped');
var bigVideo = R.plannerBlobSyncAction({
  hash: 'h3',
  data: 'data:video/mp4;base64,' + new Array(2200002).join('b')
});
assert(bigVideo.action === 'reject' && bigVideo.notice.indexOf('영상') >= 0, 'an oversized video gets a Korean notice');

var stuckConflict = [{
  mutationId: 'm1',
  version: 2,
  key: 'draft:d1',
  value: 'unsynced edit',
  baseEntityRevision: 4
}];
var serverRevs = { 'draft:d1': 9 };
var choseServer = R.plannerApplyConflictResolution(stuckConflict, [
  { key: 'draft:d1', useLocal: false, serverRevision: 9 }
]);
assert(choseServer.outbox.length === 0, 'choosing the server removes that conflict row');
assert(R.plannerTopicGapAsks(choseServer.outbox, serverRevs).length === 0,
  'a server choice is not asked again on the next sync');
var keptOther = R.plannerApplyConflictResolution([
  { key: 'draft:d1', value: 'conflict', baseEntityRevision: 4 },
  { key: 'draft:d2', value: 'other edit', baseEntityRevision: 3 }
], [{ key: 'draft:d1', useLocal: false, serverRevision: 9 }]);
assert(keptOther.outbox.length === 1 && keptOther.outbox[0].key === 'draft:d2' && keptOther.outbox[0].value === 'other edit',
  'resolving one key leaves a different unsynced edit queued');

var choseLocal = R.plannerApplyConflictResolution(stuckConflict, [
  { key: 'draft:d1', useLocal: true, serverRevision: 9 }
]);
assert(choseLocal.outbox.length === 1 && choseLocal.outbox[0].value === 'unsynced edit',
  'choosing this device keeps the unsynced edit');
assert(choseLocal.outbox[0].baseEntityRevision === 9 && choseLocal.outbox[0].conflictResolved === 'local',
  'a local choice rebases onto the server revision');
assert(R.plannerTopicGapAsks(choseLocal.outbox, serverRevs).length === 0,
  'a rebased local choice is not a conflict on resync');
var serverMoved = R.plannerHealStaleConflictRows(choseLocal.outbox, { 'draft:d1': 12 });
assert(serverMoved.outbox[0].value === 'unsynced edit' && serverMoved.outbox[0].baseEntityRevision === 12,
  'a later server revision rebases the kept edit again');
assert(R.plannerTopicGapAsks(serverMoved.outbox, { 'draft:d1': 12 }).length === 0,
  'resolve then resync does not ask for the same key');

var v400Stuck = [{ mutationId: 'm-old', version: 3, key: 'draft:d9', value: 'phone edit', baseEntityRevision: 2 }];
var healedStuck = R.plannerHealStaleConflictRows(v400Stuck, { 'draft:d9': 8 });
assert(healedStuck.healed.join(',') === 'draft:d9', 'a stale v400 conflict row is healed');
assert(healedStuck.outbox[0].value === 'phone edit' && healedStuck.outbox[0].baseEntityRevision === 8,
  'healing keeps the unsynced edit and rebases it');
assert(R.plannerTopicGapAsks(healedStuck.outbox, { 'draft:d9': 8 }).length === 0,
  'a healed v400 row is not asked on the next check');
var leftOpen = R.plannerHealStaleConflictRows(v400Stuck, { 'draft:d9': 8 }, ['draft:d9']);
assert(leftOpen.healed.length === 0 && leftOpen.outbox[0].baseEntityRevision === 2,
  'an open conflict choice is not rewritten before the user picks');
assert(R.plannerTopicGapAsks(leftOpen.outbox, { 'draft:d9': 8 }).length === 1,
  'an unanswered conflict is still something to choose');

var healedOnce = R.plannerHealStaleConflictRows(
  [{ mutationId: 'm-phone', version: 1, key: 'draft:d9', value: 'phone edit', baseEntityRevision: 2 }],
  { 'draft:d9': 8 }
);
var healedTwice = R.plannerHealStaleConflictRows(healedOnce.outbox, { 'draft:d9': 8 });
assert(healedTwice.healed.length === 0 && healedTwice.outbox[0].baseEntityRevision === 8, 'heal does not rebase twice when the base already matches');
assert(healedTwice.outbox[0].value === 'phone edit' && healedTwice.outbox[0].mutationId === 'm-phone', 'a second heal keeps the unsynced value and mutation id');
assert(R.plannerQueuedTopicStable(healedOnce.outbox[0], 8), 'a row already based on the server revision is not requeued');
assert(!R.plannerQueuedTopicStable(healedOnce.outbox[0], 9), 'a newer server revision is not treated as already based');
var afterHealUpload = R.plannerTopicGapUploadKeys({
  uploadKeys: ['draft:d9'],
  outbox: healedOnce.outbox,
  serverRev: { 'draft:d9': 8 },
  acceptedKeys: []
});
assert(afterHealUpload.length === 0, 'a healed row is not uploaded again on the next list check');

var nineteen = [];
for(var n = 0; n < 19; n++){
  nineteen.push({ mutationId: 'm' + n, version: 1, key: 'draft:local' + n, value: 'unsynced ' + n, baseEntityRevision: 0 });
}
var stablePlan = R.plannerTopicGapUploadKeys({
  uploadKeys: nineteen.map(function(op){ return op.key; }).concat(['draft:brand-new']),
  outbox: nineteen,
  serverRev: {},
  acceptedKeys: {}
});
assert(stablePlan.length === 1 && stablePlan[0] === 'draft:brand-new', 'queued local topics are not uploaded again');
assert(nineteen.length === 19 && nineteen[0].value === 'unsynced 0' && nineteen[18].mutationId === 'm18', 'the 19 unsynced rows stay in the outbox');

var acceptedRow = [{ mutationId: 'm19', version: 1, key: 'draft:d19', value: 'local topic', baseEntityRevision: 0 }];
var afterAccept = R.plannerFilterAckedOutbox(acceptedRow, { ack: { m19: 1 }, sentByKey: {} });
assert(afterAccept.length === 0, 'an accepted row leaves the outbox');
var acceptedKeys = R.plannerAcceptedUploadKeys(acceptedRow, afterAccept, { m19: 1 });
assert(acceptedKeys.join(',') === 'draft:d19', 'an accepted key is remembered');
var reupload = R.plannerTopicGapUploadKeys({
  uploadKeys: ['draft:d19'],
  outbox: afterAccept,
  serverRev: {},
  acceptedKeys: acceptedKeys
});
assert(reupload.length === 0, 'an accepted key is not re-added as a local-only upload');
assert(R.plannerAcceptedUploadKeys(acceptedRow, acceptedRow, { m19: 1 }).length === 0, 'a key that is still queued is not marked accepted');
assert(R.plannerAcceptedUploadKeys([{ key: 'draft:d19', value: 'local topic' }], [], {}).length === 0, 'a row without an ack is not treated as accepted');

var boot1 = R.plannerBootCrashState(0, { limit: 3 });
var boot2 = R.plannerBootCrashState(boot1.count, { limit: 3 });
var boot3 = R.plannerBootCrashState(boot2.count, { limit: 3 });
assert(boot1.count === 1 && boot1.safeMode === false, 'the first boot is not safe mode');
assert(boot2.count === 2 && boot2.safeMode === false, 'the second boot is not safe mode');
assert(boot3.count === 3 && boot3.safeMode === true && boot3.clearAfterMs === 12000, 'a third quick boot starts safe mode');

assert(R.plannerNextBlobCompress(['h1', 'h2'], true) === null, 'compression waits while one image is running');
assert(R.plannerNextBlobCompress(['h1', 'h2'], false) === 'h1', 'compression takes the first image only');

var julyDraft = { id: 'd4-c1784719203187', topic: '목 설명', createdAt: '2026-07-24', activityAt: '2026-07-24' };
var julyDate = R.plannerDraftListDate(julyDraft);
assert(julyDate.label === '7.24.' && julyDate.edited === false, 'an untouched July draft still shows 7.24.');
var editedDraft = R.plannerNoteDraftActivity(julyDraft, '2026-10-26T09:00:00');
assert(editedDraft.topic === '목 설명' && editedDraft.activityAt === '2026-10-26T09:00:00', 'a content edit keeps the topic and stamps activity');
var octoberDate = R.plannerDraftListDate(editedDraft);
assert(octoberDate.label === '10.26.' && octoberDate.edited === true && octoberDate.ms > julyDate.ms, 'the list date moves to the edit day');
var thumbDraft = R.plannerNoteDraftActivity(julyDraft, '2026-10-26');
assert(R.plannerDraftListDate(thumbDraft).label === '10.26.', 'thumbnail creation uses the new activity day');
assert(R.plannerDraftActivityDay(julyDraft.activityAt) !== R.plannerDraftActivityDay(editedDraft.activityAt), 'a new activity day is a sync change');
assert(R.plannerDraftActivityDay('2026-10-26T01:00:00') === R.plannerDraftActivityDay('2026-10-26T20:00:00'), 'the same local day does not count as a new sync day');
var newerUpdated = R.plannerDraftListDate({ id: 'd4-c1', createdAt: '2026-07-24', activityAt: '2026-07-24', updatedAt: '2026-10-26' });
assert(newerUpdated.label === '10.26.' && newerUpdated.edited === true, 'a newer updatedAt is shown even when activityAt is still July');

assert(R.plannerPromptConflictAction({
  key: 'prompt:0:blog',
  localText: '같은 지침\n',
  remoteText: '같은 지침',
  userEdited: true
}) === 'align', 'the same prompt text is not a conflict');
assert(R.plannerPromptConflictAction({
  key: 'prompt:base',
  localText: '자동으로 바뀐 기본 지침',
  remoteText: '서버에 저장된 지침',
  userEdited: false
}) === 'adopt-server', 'an untouched prompt follows the server');
assert(R.plannerPromptConflictAction({
  key: 'prompt:1:insta',
  localText: '이 기기에서 고친 지침',
  remoteText: '다른 기기에서 고친 지침',
  userEdited: true
}) === 'ask', 'a prompt edited on both sides still asks');
assert(R.plannerPromptConflictAction({
  key: 'draft:d1',
  localText: '원고',
  remoteText: '다른 원고',
  userEdited: false
}) === 'keep', 'a draft is not treated as a prompt');
assert(R.plannerTopicDrawerKey('허리·골반·고관절') === R.plannerTopicDrawerKey('허리 / 골반 / 고관절'),
  'a drawer title matches when only the separator differs');
assert(R.plannerTopicDrawerKey('3단계 · 허리·골반·고관절') === '허리골반고관절',
  'a step prefix is ignored when matching a drawer');
assert(R.plannerImportNeedsMove({ imported: true, stepId: 'misc', miscId: 'misc', stepResolves: false }) === true,
  'an imported card still in misc is moved again');
assert(R.plannerImportNeedsMove({ imported: true, stepId: 's3', stepResolves: true }) === false,
  'an imported card already in a real drawer stays');
assert(R.plannerImportNeedsMove({ imported: true, stepId: 'gone', stepResolves: false }) === true,
  'an imported card whose drawer id is missing is moved again');
var left = R.plannerKeysLeftBehind(
  [{ key: 'draft:a' }, { key: 'prompt:base' }, { key: 'draft:b' }],
  [{ key: 'draft:a' }]
);
assert(left.join(',') === 'prompt:base,draft:b', 'the batch remainder is the keys that were not sent');
assert(R.plannerSameKeyList(['draft:b', 'prompt:base'], ['prompt:base', 'draft:b']),
  'the same leftover keys count as a stalled batch');
assert(R.plannerStripClinicTitlePrefix('[약수/인천] 유연한데 왜 자꾸 삐끗할까') === '유연한데 왜 자꾸 삐끗할까',
  'a stored clinic prefix is removed from the title');
assert(R.plannerStripClinicTitlePrefix('[약수/인천] [약수/인천] 모니터 앞에서 목이 뻣뻣할 때') === '모니터 앞에서 목이 뻣뻣할 때',
  'a repeated clinic prefix is removed');
assert(R.plannerStripClinicTitlePrefix('접두어 없는 제목') === '접두어 없는 제목',
  'a title without the prefix stays as written');

var journal = R.plannerRecordSyncJournal({ items: [] }, [
  { mutationId: 'm1', version: 2 },
  { mutationId: 'm1', version: 1 }
]);
assert(journal.items.length === 1 && journal.items[0].v === 2, 'a journal keeps the higher confirmed version');
var queued = [
  { mutationId: 'm1', version: 2, key: 'draft:a' },
  { mutationId: 'm2', version: 1, key: 'draft:b' },
  { mutationId: 'm1', version: 3, key: 'draft:a2' }
];
var leftQueue = R.plannerApplySyncJournal(queued, journal);
assert(leftQueue.length === 2 && leftQueue[0].mutationId === 'm2' && leftQueue[1].version === 3,
  'a journal drops only the confirmed version and keeps a newer one');
assert(R.plannerApplySyncJournal(queued, { items: [] }).length === 3, 'an empty journal leaves the queue');

var sameWorkDifferent = R.plannerMergeDuplicateGroup([
  { id: 'd6-c1782810860369', topic: '가져온 주제', placeholder: true, createdAt: '2026-10-29T01:00:00.000Z', workKey: 'blog#같은글', content: { blog: { problem: '본문' } } },
  { id: 'd6-c1782810860370', topic: '가져온 주제', placeholder: true, createdAt: '2026-10-29T02:00:00.000Z', workKey: 'blog#같은글', content: { blog: { problem: '다른 글', selfCare: '추가' } } }
]);
assert(!sameWorkDifferent.changed && sameWorkDifferent.retireIds.length === 0, 'the same work key with different text is not merged');
var emptyCards = R.plannerMergeDuplicateGroup([
  { id: 'e1', placeholder: true, content: {} },
  { id: 'e2', placeholder: true, content: { blog: { problem: '' } } }
]);
assert(!emptyCards.changed && emptyCards.retireIds.length === 0, 'empty cards are not merged');
var movedRefs = R.plannerRetargetDuplicateRefs({
  keepId: 'd6-keep',
  retireIds: ['d6-old'],
  assignments: [{ draftId: 'd6-old', stepId: 's3', order: 1 }]
});
assert(movedRefs.ok && movedRefs.assignments.length === 1 && movedRefs.assignments[0].draftId === 'd6-keep' && movedRefs.assignments[0].stepId === 's3', 'assignments move to the kept card');
var tabOnly = R.plannerRetargetDuplicateRefs({
  keepId: 'keep',
  retireIds: ['old'],
  published: {
    keep: { content: { blog: { problem: '같음' } }, updatedAt: '2026-10-29T01:00:00.000Z' },
    old: { content: { blog: { problem: '같음' } }, updatedAt: '2026-10-29T02:00:00.000Z', tabPublished: { blog: '2026-10-29T03:00:00.000Z' } }
  }
});
assert(!tabOnly.ok, 'a retiring card with its own tabPublished is not merged');
var brandMove = R.plannerRetargetDuplicateRefs({
  keepId: 'keep',
  retireIds: ['old'],
  brandOverrides: { old: { series: '시리즈', topic: '가져온 주제' } }
});
assert(brandMove.ok && brandMove.brandOverrides.keep.series === '시리즈' && !brandMove.brandOverrides.old, 'brand settings only on the retiring card move to the kept card');
var brandDiff = R.plannerRetargetDuplicateRefs({
  keepId: 'keep',
  retireIds: ['old'],
  brandOverrides: { keep: { series: '가' }, old: { series: '나' } }
});
assert(!brandDiff.ok, 'different brand settings are not merged');
var differentWork = R.plannerMergeDuplicateGroup([
  { id: 'a', placeholder: true, workKey: 'blog#하나', content: { blog: { problem: '하나' } } },
  { id: 'b', placeholder: true, workKey: 'blog#둘', content: { blog: { problem: '둘' } } }
]);
assert(!differentWork.changed && differentWork.retireIds.length === 0, 'different articles are not merged');
var untitledDifferent = R.plannerMergeDuplicateGroup([
  { id: 'c1', placeholder: true, workKey: '', content: { blog: { problem: '가' } } },
  { id: 'c2', placeholder: true, workKey: '', content: { blog: { problem: '나' } } }
]);
assert(!untitledDifferent.changed, 'different text without a shared title is not merged');
var identical = R.plannerMergeDuplicateGroup([
  { id: 'c3', placeholder: true, workKey: '', content: { blog: { problem: '같음' } } },
  { id: 'c4', placeholder: true, workKey: '', content: { blog: { problem: '같음' } } }
]);
assert(identical.changed && identical.content.blog.problem === '같음', 'identical copies merge and keep the text');

// 발행 기록 날짜 읽기: 옛 발행 모달이 남긴 「10. 31.」 같은 값도 버리지 않는다
var NOW = new Date(2026, 10, 2, 12).getTime();
var SAVED = new Date(2026, 9, 31, 9).getTime();
function ymd(ms){ return R.plannerDayKey(ms); }
assert(ymd(R.plannerParsePublishStamp('2026-10-31T01:00:00.000Z', NaN, NOW)) === '2026-10-31', 'ISO stamp is read');
assert(ymd(R.plannerParsePublishStamp('10. 31.', SAVED, NOW)) === '2026-10-31', 'legacy "10. 31." is read with the saved year');
assert(ymd(R.plannerParsePublishStamp('10월 31일', NaN, NOW)) === '2026-10-31', 'legacy "10월 31일" is read');
assert(ymd(R.plannerParsePublishStamp('10/30', NaN, NOW)) === '2026-10-30', '"10/30" is read');
assert(ymd(R.plannerParsePublishStamp('12. 25.', NaN, NOW)) === '2025-12-25', 'a month-day later than today falls back to last year');
assert(R.plannerParsePublishStamp(true, SAVED, NOW) === SAVED, 'a bare true falls back to the saved time');
assert(isNaN(R.plannerParsePublishStamp(true, NaN, NOW)), 'a bare true with no fallback stays unreadable');
assert(R.plannerParsePublishStamp('13. 40.', SAVED, NOW) === SAVED, 'an impossible month-day falls back');
assert(R.plannerParsePublishStamp(SAVED, NaN, NOW) === SAVED, 'a millisecond number is kept');

// 게시 기록 합치기: 주 기록은 그대로, 보조 기록은 없는 날짜만
var d30 = new Date(2026, 9, 30, 10).getTime();
var d31 = new Date(2026, 9, 31, 10).getTime();
var d31b = new Date(2026, 9, 31, 20).getTime();
var merged = R.plannerMergePostEvents([d30], [[d31, d31b], [d30]]);
assert(merged.events.length === 2, 'same day from a later source is counted once');
assert(merged.added[0] === 1 && merged.added[1] === 0, 'only the missing day is added');
assert(merged.events.indexOf(d31) >= 0, 'the newer planner record extends the last post date');
var twoSameDay = R.plannerMergePostEvents([d31, d31b], []);
assert(twoSameDay.events.length === 2, 'two posts on one day in the primary source are both kept');
var skipBad = R.plannerMergePostEvents([NaN, d30], [[undefined, d31]]);
assert(skipBad.events.length === 2, 'unreadable values are skipped');

// 직접 적은 「YYYY-MM-DD」는 어느 시간대 기기에서도 같은 달력 날짜로 읽혀야 한다 (미국 기기에서 하루 밀리면 안 됨)
var rulesFile = path.join(__dirname, 'planner-sync-rules.js');
['Asia/Seoul', 'America/New_York', 'America/Los_Angeles', 'UTC'].forEach(function(tz){
  var out = require('child_process').execFileSync(process.execPath, ['-e',
    "var fs=require('fs'),vm=require('vm');var c={};vm.createContext(c);" +
    "vm.runInContext(fs.readFileSync(" + JSON.stringify(rulesFile) + ",'utf8'),c);var R=c.PlannerSyncRules;" +
    "var ms=R.plannerParsePublishStamp('2026-10-31',NaN);var bad=R.plannerParsePublishStamp('2026-02-31',123);" +
    "console.log(R.plannerDayKey(ms)+'|'+bad);"
  ], { env: Object.assign({}, process.env, { TZ: tz }) }).toString().trim();
  assert(out === '2026-10-31|123', 'YYYY-MM-DD stays the same calendar day in ' + tz + ' (got ' + out + ')');
});

// 블로그 복사 본문: 메타 줄만 빼고 본문·제목 글자는 남긴다
var cleaned = R.plannerCleanBlogCopyText('[블로그]\n제목: 허리가 접히나요?\n\n첫 문단입니다.\n\n1) 스트레칭\n\n#허리 #고관절\n');
assert(cleaned === '허리가 접히나요?\n\n첫 문단입니다.\n\n1) 스트레칭', 'blog copy drops [블로그], 제목:, hashtag lines (got ' + JSON.stringify(cleaned) + ')');
assert(R.plannerCleanBlogCopyText('제목: A\n본문 #태그 포함 문장') === 'A\n본문 #태그 포함 문장', 'inline # inside a sentence is kept');
assert(R.plannerCleanBlogCopyText('A\n\n\n\nB') === 'A\n\nB', 'extra blank lines collapse');

// 시연·핵심 포인트: 번호와 빈 줄을 저장 그대로 보여 주고, 복사에서만 번호를 뺀다
var rawOutline = '1. 첫째 동작\n\n2. 둘째 동작\n3. 셋째\n\n4. 넷째';
assert(R.plannerOutlineDisplayText(rawOutline, ['x']) === rawOutline, 'saved outline text is shown exactly as typed');
assert(R.plannerOutlineDisplayText('', ['가', '나']) === '1. 가\n\n2. 나', 'old array-only cards still show numbered');
assert(R.plannerOutlineFromText(rawOutline).join('|') === '첫째 동작|둘째 동작|셋째|넷째', 'legacy array keeps stripped lines');
assert(R.plannerOutlineCopyText(rawOutline, []) === '첫째 동작\n\n둘째 동작\n\n셋째\n\n넷째', 'copy drops section numbers');

// 회원 → 환자 (조사 보정)
var mp = R.plannerMemberToPatient;
assert(mp('회원이 아프다고 말해요') === '환자가 아프다고 말해요', 'member + 이 → 환자가');
assert(mp('회원은 숨을 참아요. 회원을 먼저 살펴요.') === '환자는 숨을 참아요. 환자를 먼저 살펴요.', 'member 은/을 → 는/를');
assert(mp('회원과 함께, 회원으로 온') === '환자와 함께, 환자로 온', 'member 과/으로 → 와/로');
assert(mp('회원이에요') === '환자예요', 'member 이에요 → 환자예요');
assert(mp('회원들이 많고 회원님께') === '환자들이 많고 환자분께', 'plural keeps 이, 님 → 분');
assert(mp('회원가입 정회원 회원권') === '회원가입 정회원 회원권', 'other nouns containing 회원 are untouched');
// 본문 URL 제거
assert(R.plannerStripBodyUrls('앞 문장\nhttps://a.com/x\n뒤 문장 https://b.com 끝') === '앞 문장\n뒤 문장 끝', 'urls are removed, url-only lines dropped');
// 네이버 태그
assert(R.plannerNaverTag('#Re:AlFace') === 'ReAlFace', 'tag special characters removed');
assert(R.plannerNaverTag('##약수역_운동!') === '약수역운동', 'tag keeps Korean, drops _ and !');
// 글자 수
assert(R.plannerBlogBodyLength(['가나다', '라마\nhttps://x.com']) === 7, 'length counts spaces/newlines but not urls (got ' + R.plannerBlogBodyLength(['가나다', '라마\nhttps://x.com']) + ')');
assert(R.plannerBlogLengthState(1500, false).state === 'short', 'under 1700 is short');
assert(R.plannerBlogLengthState(1900, false).state === 'ok', '1900 is ok');
assert(R.plannerBlogLengthState(5000, true).state === 'long' && R.plannerBlogLengthState(1900, true).state === 'ok', 'expert posts use the same 1,900 guide');
assert(R.plannerStrongClaimWords('대부분 항상 그래요').join('|') === '대부분|항상', 'strong claim words found');

// 카드에서 직접 정한 날짜
var ovInfo = R.plannerDraftListDate({ id: 'd5-c1793629850222', createdAt: '2026-11-02T01:00:00.000Z', activityAt: '2026-11-02T05:00:00.000Z', dateOverride: '2026-11-07' });
assert(ovInfo.label === '11.7.', 'dateOverride wins over created/activity dates (got ' + ovInfo.label + ')');
assert(R.plannerDraftListDate({ createdAt: '2026-11-02T01:00:00.000Z', dateOverride: 'abc' }).label !== '-', 'bad override is ignored');

// 생성 뒤 자동 검사
var lint = R.plannerLintContent({
  catId: 5,
  blog: { title: '강사가 먼저', draft: '대부분 환자가 교정을 원해요 https://a.com', closing: '강사가 먼저 이완되어야 회원도 이완합니다. 시작은 항상 나로부터!' },
  insta: { hook: '스트레칭 시 회원이 버티는 건 테크닉 문제가 아닐 수 있습니다 🤲', caption: '손을 대는 순간 회원이 긴장한다면 😀', hashtags: ['a', 'b'] },
  threads: { body: '스트레칭 시 회원이 긴장하며 버티는 이유, 테크닉의 문제일까?', comment: '하나\n\n둘\n\n셋' }
});
var codes = lint.map(function(i){ return i.channel + ':' + i.code; }).join(',');
assert(/blog:strong/.test(codes), 'lint finds 대부분');
assert(/blog:forbidden/.test(codes), 'lint finds 교정 outside a course name');
assert(/blog:url/.test(codes), 'lint finds a url');
assert(/blog:honorific/.test(codes), 'lint finds 환자 in a 회원 category');
assert(/insta:emoji/.test(codes), 'lint finds the extra emoji in the caption');
assert(/insta:hashtag/.test(codes), 'lint finds too few hashtags');
assert(/threads:count/.test(codes), 'lint finds 3 comments instead of 4');
assert(!/blog:strong.*title/.test(JSON.stringify(lint.filter(function(i){ return i.field === 'closing'; }))), 'fixed slogan 시작은 항상 나로부터 is not flagged');
var clean = R.plannerLintContent({ catId: 5, insta: { hook: '스트레칭 시 회원이 긴장해요 🤲', caption: '본문입니다.', hashtags: ['1','2','3','4','5','6','7','8','9'] }, threads: { body: '한 줄?', comment: 'a\n\nb\n\nc\n\nd' } });
assert(clean.length === 0, 'clean content has no issues (got ' + JSON.stringify(clean) + ')');
assert(R.plannerLintContent({ catId: 0, blog: { draft: '회원이 아파요' } }).some(function(i){ return i.code === 'honorific'; }), 'CMT/도수 flags 회원');
assert(R.plannerLintContent({ catId: 2, blog: { selfCare: '적신호면 병원 진료를 먼저 받으세요.' }, visible: { blog: ['selfCare'] } }).some(function(i){ return i.code === 'forbidden' && /진료/.test(i.msg || ''); }), '병원 진료 still flags 진료');
assert(!R.plannerLintContent({ catId: 2, blog: { selfCare: '괜찮아요', draft: '숨은 칸에 진료' }, visible: { blog: ['title', 'problem', 'selfCare', 'explanation', 'cta'] } }).some(function(i){ return /진료/.test(i.msg || ''); }), 'hidden draft is skipped');
assert((R.plannerLintContent({ catId: 2, blog: { selfCare: '혼자 진료하지 마세요' }, visible: { blog: ['selfCare'] } })[0] || {}).excerpt, 'lint includes excerpt for jump');
assert(R.plannerLintContent({ catId: 2, news: { naver: { body: '통증 치료 안내' } }, visible: { news: ['naver.body'] } }).some(function(i){ return i.code === 'caution' && /치료/.test(i.msg || ''); }), '치료 is caution in 소식');
assert(!R.plannerLintContent({ catId: 2, blog: { cta: '통증 치료 안내' }, visible: { blog: ['cta'] } }).some(function(i){ return /치료/.test(i.msg || ''); }), '치료 is not flagged in blog');

// 카드 정보 날짜·제목: 새로고침(서버 행 → 목록 카드)에서 빠지지 않는다.
var metaTarget = R.plannerKeepDraftCardMeta({ id: 'd5-c1794226751677' }, { dateOverride: '2026-11-10', topicLocked: true });
assert(metaTarget.dateOverride === '2026-11-10', 'dateOverride survives the server row merge');
assert(metaTarget.topicLocked === true, 'topicLocked survives the server row merge');
assert(R.plannerKeepDraftCardMeta({ dateOverride: '2026-11-10' }, { dateOverride: 'x' }).dateOverride === undefined, 'bad dateOverride from the server is dropped');
assert(R.plannerAutoTitleMayRenameCard({ topic: '힘 적게 쓰는 패시브 스트레칭', topicLocked: true }, '하루 안에 패시브 스트레칭 순서를 다시 잡는 자리') === false, 'generated blog title does not rename a locked card');
assert(R.plannerAutoTitleMayRenameCard({ topic: '옛 제목' }, '새 블로그 제목') === true, 'unlocked card still follows the blog title');
assert(R.plannerAutoTitleMayRenameCard({ topic: '', topicLocked: true }, '새 제목') === true, 'empty locked title can be filled');

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
var rtCtx = {
  PlannerSyncRules: R,
  CATEGORIES: [],
  state: { deletedDraftIds: {} },
  imageSigFromValue_: function(){ return ''; },
  applyResolvedUserAddedStepOrMisc_: function(){},
  purgeDeletedDraftsFromCatalog_: function(){},
  ensureSyncedContentDraftCards_: function(){}
};
for(var ci = 0; ci < 8; ci++) rtCtx.CATEGORIES.push({ drafts: [] });
vm.createContext(rtCtx);
['isUserAddedDraftId_', 'userAddedDraftTimestamp_', 'normalizeDraftRowForSync_', 'collectExtraDrafts', 'mergeExtraDrafts'].forEach(function(n){
  vm.runInContext(extractFn(plannerSrc, n), rtCtx);
});
rtCtx.CATEGORIES[5].drafts.push({ id: 'd5-c1794226751677', topic: '힘 적게 쓰는 패시브 스트레칭', topicLocked: true, createdAt: '2026-11-09T03:00:00.000Z', dateOverride: '2026-11-10', roadmapStepId: 's1' });
rtCtx.CATEGORIES[7].drafts.push({ id: 'd7-c1794227530433', topic: '추워지면 왜 몸이 더 뻐근할까요?', createdAt: '2026-11-09T04:00:00.000Z', dateOverride: '2026-11-11', roadmapStepId: 's1' });
var saved = JSON.parse(JSON.stringify(vm.runInContext('collectExtraDrafts()', rtCtx)));
assert(saved[5][0].dateOverride === '2026-11-10' && saved[5][0].topicLocked === true, 'saved row keeps dateOverride and topicLocked');
rtCtx.CATEGORIES.forEach(function(c){ c.drafts = []; });
rtCtx.__saved = saved;
vm.runInContext('mergeExtraDrafts(__saved)', rtCtx);
var back5 = rtCtx.CATEGORIES[5].drafts[0];
var back7 = rtCtx.CATEGORIES[7].drafts[0];
assert(back5 && back5.dateOverride === '2026-11-10', 'reload keeps 11/10 on d5 (got ' + (back5 && back5.dateOverride) + ')');
assert(back5 && back5.topicLocked === true && back5.topic === '힘 적게 쓰는 패시브 스트레칭', 'reload keeps the locked card title');
assert(back7 && back7.dateOverride === '2026-11-11', 'reload keeps 11/11 on d7');
assert(back5 && R.plannerDraftListDate(back5).label === '11.10.', 'list date after reload is 11.10. (got ' + (back5 && R.plannerDraftListDate(back5).label) + ')');
assert(back7 && !back7.topicLocked, 'cards never edited in 카드 정보 stay unlocked');
assert(/draft\.topicLocked = true;\n    if\(ymd\) draft\.dateOverride/.test(plannerSrc), 'card info editor locks the title it saves');
assert((plannerSrc.match(/syncDraftTopicFromTitle_\([^)]*auto: true \}\)/g) || []).length === 4, 'blog/community title auto paths pass auto: true');

assert(R.plannerKeepDraftCardMeta({}, { dateOverride: null }).dateOverride === undefined, 'null dateOverride written by an old patch loads as no override');
// 새로고침 뒤 본문만 저장해도 draft 행 패치에 dateOverride 삭제가 실리지 않는다.
var fsCtx = {};
vm.createContext(fsCtx);
vm.runInContext(fs.readFileSync(path.join(__dirname, 'planner-field-sync.js'), 'utf8') + ';this.F = PlannerFieldSync;', fsCtx);
var serverDraftRow = { catId: '5', value: saved[5][0] };
var reloadedRow = { catId: '5', value: JSON.parse(JSON.stringify(vm.runInContext('collectExtraDrafts()', rtCtx)))[5][0] };
reloadedRow.value.activityAt = '2026-11-09T13:00:00.000Z';
var draftPlan = fsCtx.F.planOutboxSend(serverDraftRow, reloadedRow, 'draft:d5-c1794226751677', null);
var draftPaths = (draftPlan.fieldPatch && draftPlan.fieldPatch.paths) || [];
assert(draftPaths.indexOf('value.dateOverride') < 0, 'body save after reload does not patch dateOverride away (paths ' + draftPaths.join(',') + ')');

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-sync-rules-test: ok');
