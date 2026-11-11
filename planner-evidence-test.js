/* node planner-evidence-test.js */
var fs = require('fs');
var path = require('path');
var PlannerEvidence = require('./planner-evidence.js');
var failed = 0;
function assert(cond, msg){
  if(cond) return;
  failed++;
  console.error('FAIL: ' + msg);
}

var q = PlannerEvidence.buildSearchQuery('Passive stretching cueing', '강사가 호흡을 먼저 맞춥니다');
assert(q.indexOf('Passive') >= 0, 'search query keeps topic');

var paper = PlannerEvidence.normalizeOpenAlexWork({
  id: 'https://openalex.org/W123',
  display_name: 'Effects of passive stretching on tone',
  publication_year: 2019,
  authorships: [{ author: { display_name: 'Kim A' } }, { author: { display_name: 'Lee B' } }],
  primary_location: { source: { display_name: 'J Mov Sci' } },
  doi: 'https://doi.org/10.1000/test',
  abstract_inverted_index: { Stretching: [0], reduces: [1], tone: [2] }
});
assert(paper && paper.id.indexOf('openalex:') === 0, 'openalex id normalized');
assert(/Kim A/.test(paper.citationLine) && /2019/.test(paper.citationLine), 'citation line has author+year');
assert(paper.abstractSummary.indexOf('Stretching') >= 0, 'abstract rebuilt from inverted index');

var invented = 'Fake Author (1999). Made up paper. Fake Journal.\n' + paper.citationLine;
var filtered = PlannerEvidence.filterReferencesToVerified(invented, [paper]);
assert(filtered.indexOf('Made up') < 0, 'invented references are stripped');
assert(filtered.indexOf('Effects of passive stretching') >= 0, 'verified citation kept');
assert(PlannerEvidence.filterReferencesToVerified('anything', []) === '', 'empty evidence list yields empty references');

var block = PlannerEvidence.buildEvidencePromptBlock([paper]);
assert(block.indexOf('검증된 근거 목록') >= 0 && block.indexOf('지어내지') >= 0, 'prompt block forbids invented papers');

var pack = PlannerEvidence.buildNotebookLmPack({
  blog: { title: '호흡이 먼저', hook: '장면', draft: '원리', outline: ['포인트 1'] },
  papers: [paper],
  placement: '원리 설명 2문단 아래',
  linkedImages: [{ name: 'fig1.png', paperId: paper.id }],
  imagePrompt: 'flat vector evidence'
});
assert(pack.indexOf('NotebookLM 자료 묶음') >= 0, 'notebook pack title');
assert(pack.indexOf('원리 설명 2문단 아래') >= 0, 'placement included');
assert(pack.indexOf(paper.url) >= 0, 'doi/url included for notebook');
assert(pack.indexOf('fig1.png') >= 0, 'linked image name included');

var plannerSrc = fs.readFileSync(path.join(__dirname, 'planner.js'), 'utf8');
assert(/renderExpertEvidencePanelHTML_/.test(plannerSrc), 'evidence panel wired');
assert(/appendVerifiedEvidenceToPrompt_/.test(plannerSrc), 'prompt injection wired');
assert(/applyVerifiedEvidenceReferences_/.test(plannerSrc), 'post-gen reference filter wired');
assert(/근거를 먼저 찾을까요/.test(plannerSrc), 'empty evidence confirm before gen');
assert(/copyNotebookLmEvidencePack_/.test(plannerSrc) && /openNotebookLm_/.test(plannerSrc), 'notebooklm pack + open buttons');
assert(/plannerShouldPersistView/.test(plannerSrc), 'tab open persist guard remains');
assert(!/FORBID\s*=\s*\[/.test(plannerSrc), 'banned words not redefined in planner.js');

var indexSrc = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
assert(/planner-evidence\.js/.test(indexSrc), 'evidence script loaded from index');

if(failed){
  console.error(failed + ' assertion(s) failed');
  process.exit(1);
}
console.log('planner-evidence-test: ok');
