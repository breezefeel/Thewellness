// 읽기 전용 재현: 서버·localStorage 없이 저장 행 → 로드 왕복만 돌린다.
var fs = require('fs'), vm = require('vm');
var dir = process.argv[2] || __dirname;
var src = fs.readFileSync(dir + '/planner.js', 'utf8');
function grab(name){
  var i = src.indexOf('function ' + name + '(');
  if(i < 0) throw new Error('missing ' + name);
  var depth = 0, j = src.indexOf('{', i);
  for(var k = j; k < src.length; k++){
    if(src[k] === '{') depth++;
    else if(src[k] === '}'){ depth--; if(!depth) return src.slice(i, k + 1); }
  }
}
var ctx = { console: console, Date: Date, JSON: JSON, Object: Object, Array: Array, String: String, parseInt: parseInt };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(dir + '/planner-sync-rules.js', 'utf8').replace(/^var PlannerSyncRules/m, 'PlannerSyncRules'), ctx);
var stubs = 'var state = { deletedDraftIds: {} };' +
  'function imageSigFromValue_(){ return ""; }' +
  'function purgeDeletedDraftsFromCatalog_(){}' +
  'function ensureSyncedContentDraftCards_(){}' +
  'function applyResolvedUserAddedStepOrMisc_(){}' +
  'var CATEGORIES = []; for(var i=0;i<8;i++) CATEGORIES.push({ id: i, drafts: [] });';
vm.runInContext(stubs + ['isUserAddedDraftId_', 'userAddedDraftTimestamp_', 'normalizeDraftRowForSync_', 'collectExtraDrafts', 'mergeExtraDrafts'].map(grab).join('\n'), ctx);
var cases = [
  { id: 'd5-c1794226751677', cat: 5, ymd: '2026-11-10' },
  { id: 'd7-c1794227530433', cat: 7, ymd: '2026-11-11' }
];
var fail = 0;
cases.forEach(function(c){
  ctx.CATEGORIES[c.cat].drafts = [{ id: c.id, topic: '테스트', roadmapStepId: 's1', createdAt: new Date(parseInt(c.id.split('-c')[1], 10)).toISOString(), dateOverride: c.ymd, activityAt: new Date().toISOString() }];
  var saved = JSON.parse(JSON.stringify(vm.runInContext('collectExtraDrafts()', ctx)));
  var savedRow = saved[c.cat][0];
  ctx.__in = saved;
  vm.runInContext('mergeExtraDrafts(__in)', ctx);
  var loaded = ctx.CATEGORIES[c.cat].drafts[0];
  var label = ctx.PlannerSyncRules.plannerDraftListDate(loaded).label;
  var ok = loaded.dateOverride === c.ymd;
  if(!ok) fail++;
  console.log(c.id, '| 저장 행 dateOverride =', savedRow.dateOverride, '| 로드 후 =', loaded.dateOverride, '| 목록 날짜 =', label, ok ? 'OK' : 'FAIL');
});
process.exit(fail ? 1 : 0);
