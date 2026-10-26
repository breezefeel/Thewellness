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

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-sync-rules-test: ok');
