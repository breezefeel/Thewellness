/* node planner-sync-rules-test.js */
var fs = require('fs');
var vm = require('vm');
var path = require('path');
var file = path.join(__dirname, 'planner-sync-rules.js');
var context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(file, 'utf8'), context);
var R = context.PlannerSyncRules;
var failed = 0;

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
assert(coupled.length === 2 && coupled[0].key === 'draft:d1', 'card stays while its body is still queued');
var both = R.plannerFilterAckedOutbox([card, body], { ack: { c1: 1, b1: 1 }, sentByKey: {} });
assert(both.length === 0, 'card leaves once the body is accepted');

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
assert(heldPair.length === 2, 'a conflicting body keeps its card queued');

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

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-sync-rules-test: ok');
