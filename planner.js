// planner.js — 브랜딩 플래너 (배포용 번들)

const CATEGORIES = [
  { id:0, icon:"", name:"도수치료",       color:"#2DD4BF", audience:"일반인",
    sub:"연부 치료 · 관절치료",
    drafts:[
      {id:"d0-0", topic:"허리가 뻐근한 이유, 근육만의 문제가 아닙니다",        angle:"관절 구조와 연부조직이 함께 만들어내는 통증 메커니즘 설명"},
      {id:"d0-1", topic:"도수치료, 딱 소리 나야 효과 있는 거 아닌가요?",       angle:"관절치료의 원리와 소리의 의미 — 오해 해소 + 신뢰 구축"},
      {id:"d0-2", topic:"치료 받고 나서 더 아픈 이유 4가지",                   angle:"호전 반응 vs 부작용 구분법으로 환자 불안 해소"},
      {id:"d0-3", topic:"연부조직 치료, 어디까지 해야 효과가 날까요?",         angle:"근막·인대·건 각각의 치료 접근과 적절한 치료 횟수 가이드"},
      {id:"d0-4", topic:"목·허리·어깨 중 가장 먼저 치료해야 할 곳은?",        angle:"연쇄 보상 패턴 설명으로 치료 순서의 중요성 강조"},
    ]},
  { id:1, icon:"", name:"리:얼 무브먼트",   color:"#7AF0C8", audience:"일반인",
    sub:"Re-Alignment Movement Center — 패시브 스트레칭 · 기능운동 · 자세교정",
    drafts:[
      {id:"d1-0", topic:"스트레칭을 매일 해도 왜 몸이 안 풀릴까요?",           angle:"패시브 스트레칭의 올바른 방법과 잘못된 습관 교정"},
      {id:"d1-1", topic:"운동 전 5분, 이것만 하면 부상이 없습니다",            angle:"기능적 워밍업 루틴 — 관절 가동성 + 신경계 활성화"},
      {id:"d1-2", topic:"바른 자세, 오래 유지하면 오히려 독이 되는 이유",      angle:"정적 자세의 한계와 동적 자세 교정 개념 소개"},
      {id:"d1-3", topic:"앉아서 일하는 당신을 위한 3분 루틴",                  angle:"재택·사무직을 위한 척추-고관절 기능운동 시퀀스"},
      {id:"d1-4", topic:"걷기만 해도 자세가 교정된다, 가능한 이야기일까요?",   angle:"보행 패턴과 자세 교정의 연관성, 올바른 걷기 방법"},
    ]},
  { id:2, icon:"", name:"리:얼 페이스",    color:"#F0C87A", audience:"일반인",
    sub:"리:얼 페이스 · 얼굴 교정 · 작은얼굴",
    drafts:[
      {id:"d2-0", topic:"셀카에서 한쪽 얼굴만 작아 보이는 진짜 이유",          angle:"안면비대칭의 원인 — 습관, 교합, 경추 연관성 설명"},
      {id:"d2-1", topic:"얼굴 살이 빠지지 않는 이유, 다이어트 문제 아닙니다",  angle:"림프 순환 + 골격 구조로 설명하는 얼굴 윤곽 개선"},
      {id:"d2-2", topic:"광대가 발달한 이유, 알고 보면 턱이 원인이었어요",     angle:"저작근과 얼굴 골격의 관계, 교정 접근 방향 설명"},
      {id:"d2-3", topic:"얼굴 비대칭 교정, 몇 번 받으면 티가 날까요?",        angle:"실제 케이스 기반 치료 기간 안내 + 기대치 조율"},
      {id:"d2-4", topic:"이중턱이 생기는 세 가지 구조적 이유",                 angle:"피부·지방·골격 요인을 분리해서 설명, 각각의 접근법"},
    ]},
  { id:3, icon:"", name:"CMT 전문가 교육", color:"#A78BFA", audience:"전문가",
    sub:"도수치료 전문가 과정",
    drafts:[
      {id:"d3-0", topic:"촉진(Palpation)이 치료보다 먼저인 이유",               angle:"평가-치료 연결의 핵심, 실전 촉진 훈련의 필요성"},
      {id:"d3-1", topic:"교과서 해부학과 실전 도수치료의 괴리",                 angle:"이론적 지식을 임상 적용으로 전환하는 사고 훈련"},
      {id:"d3-2", topic:"잘 치료하는 것 vs 제대로 치료하는 것의 차이",          angle:"치료 철학과 평가 기반 치료의 우선순위 정립"},
      {id:"d3-3", topic:"CMT에서 관절가동술을 쓰는 타이밍은?",                  angle:"HVLA와 LVLA의 선택 기준, 실전 판단 프레임 공유"},
      {id:"d3-4", topic:"환자가 '좋아졌다'고 할 때 치료사가 확인해야 할 것",   angle:"주관적 개선과 객관적 지표의 차이, 재발 방지 전략"},
    ]},
  { id:4, icon:"", name:"IFC 얼굴교육",   color:"#F07A9A", audience:"전문가",
    sub:"얼굴교정 전문가 과정",
    drafts:[
      {id:"d4-0", topic:"IFC 얼굴교정, 단순 마사지와 다른 점은 무엇인가?",     angle:"구조적 접근 vs 표면 접근의 차이, IFC 핵심 원리"},
      {id:"d4-1", topic:"얼굴 교정에서 경추를 반드시 평가해야 하는 이유",      angle:"상부 경추-두개골 연결의 임상적 중요성"},
      {id:"d4-2", topic:"고객이 원하는 것과 필요한 것이 다를 때",               angle:"에스테틱 상담에서의 기대치 관리와 구조적 설명법"},
      {id:"d4-3", topic:"INDIBA와 IFC를 함께 사용할 때의 프로토콜",            angle:"기기와 도수 접근의 시너지 — 순서, 타이밍, 포인트"},
      {id:"d4-4", topic:"얼굴 비대칭 케이스에서 놓치기 쉬운 평가 포인트",      angle:"교합·턱관절·경추 복합 평가 체크리스트 공유"},
    ]},
  { id:5, icon:"", name:"Re:Al 움직임 과정", color:"#7AB8F0", audience:"전문가",
    sub:"Re:Al 움직임 과정 · 전문가 교육",
    drafts:[
      {id:"d5-0", topic:"패시브 스트레칭을 언제, 어떻게 써야 하는가?",          angle:"억제-이완 테크닉의 원리와 임상 적용 타이밍"},
      {id:"d5-1", topic:"기능운동, 치료의 끝이 아닌 연결이다",                  angle:"도수치료 후 기능운동으로의 전환 — 리:얼 무브먼트 접근 철학"},
      {id:"d5-2", topic:"자세 교정에서 '좋은 자세'가 없는 이유",                angle:"동적 안정성 개념과 자세 교정의 새로운 패러다임"},
      {id:"d5-3", topic:"고관절 가동성 vs 안정성, 무엇이 먼저인가?",            angle:"기능 사슬(kinetic chain) 관점의 운동 처방 우선순위"},
      {id:"d5-4", topic:"운동 처방 시 환자 순응도를 높이는 커뮤니케이션 전략",  angle:"행동변화 이론 + 동기부여 인터뷰를 운동 지도에 적용"},
    ]},
  { id:6, icon:"", name:"일상 공유", color:"#F59E0B", audience:"팔로워·일상",
    sub:"계절·날씨·건강·여행·공감 — 사진과 함께 가벼운 생활 나눔",
    drafts:[
      {id:"d6-0", topic:"비 오는 날, 몸이 더 무겁게 느껴질 때", angle:"5월 장마 전 — 실내·창밖 풍경, 컨디션·기분만 가볍게"},
      {id:"d6-1", topic:"봄 산책 늘리고 나서 종아리가 뻐근한 날", angle:"계절·걷기 — 전문 운동 처방 말고 오늘 컨디션 나눔"},
      {id:"d6-2", topic:"꽃가루 시즌, 피곤한데 밖은 좋을 때", angle:"봄·건강 — 공감·작은 위로, 의학 정보 최소"},
      {id:"d6-3", topic:"여행 다녀온 다음 날 몸이 뻐근할 때", angle:"여행·이동 — 추억·느낌 중심, 팁은 한 줄만"},
      {id:"d6-4", topic:"에어컨 켜기 전, 목·어깨가 먼저 뻐근한 날", angle:"초여름·실내 — 일상 한 컷·짧은 호흡"},
      {id:"d6-5", topic:"요즘 뉴스 보면 몸도 마음도 긴장되는 날", angle:"최근 이슈 — 공감·느낌, 논쟁·정치·설교 금지"},
      {id:"d6-6", topic:"커피 한 잔 마시며 쉬는 10분", angle:"일상·감사·여유 — 전문 정보 없이 분위기만"},
    ]},
  { id:7, icon:"", name:"힐자계", color:"#34D399", audience:"입주민",
    sub:"힐스테이트 자이 계양 — PAR · P-스트레칭 · 자세 · 기능운동 · 작은얼굴",
    drafts:[
      {id:"d7-0", topic:"앉아만 있어도 목이 뻐근할 때, 먼저 확인해 보면 좋은 한 가지", angle:"거북목이라고 단정 짓기 전에 — 경추·어깨·호흡을 아주 쉽게"},
      {id:"d7-1", topic:"P-스트레칭이 뭔가요?", angle:"억지로 당기지 말고 '아 시원하다' 선에서 이완 — 고양이 기지개 비유"},
      {id:"d7-2", topic:"자세 교정, 하루아침에 바뀌지 않는다는 말에 속지 말기", angle:"작게라도 매일 바뀌는 건 '감각'이라는 측면에서 위로 + 현실적인 팁"},
      {id:"d7-3", topic:"얼굴이 붓는 날, 물만 마시면 된다는 말의 빈틈", angle:"림프·자세·수면을 옆집 이야기하듯 가볍게, 과장 없이"},
      {id:"d7-4", topic:"엘리베이터 앞에서 할 수 있는 30초 골반 정리", angle:"기능운동 입문 — 부담 없는 동선·횟수 제시"},
      {id:"d7-5", topic:"봄 산책 늘리다 종아리가 뻐근할 때", angle:"5~6월 — 걷기 늘린 뒤 종아리·발목, 억지 스트레칭 말고 가벼운 이완"},
      {id:"d7-6", topic:"에어컨 켜기 전, 목·어깨가 먼저 뻐근해질 때", angle:"초여름 실내 냉방·창문 바람 — 짧은 호흡·어깨 이완"},
      {id:"d7-7", topic:"꽃가루 시즌, 몸이 무겁고 피곤할 때", angle:"봄 피로·붓기 — 과장 없이 수면·가벼운 움직임·림프 톤"},
    ]},
  { id:8, icon:"", name:"지점·브랜딩", color:"#6366F1", audience:"운영",
    sub:"플래너 밖 작업 · 지점 오픈 · GEO 체크리스트",
    drafts:[]},
];

/** 상단 카테고리 탭: 두 줄 순서·표시명 (데이터 CATEGORIES 인덱스 기준) */
const CAT_TAB_NAV_ROWS = [[0, 1, 2, 7], [3, 5, 4, 6]];
const CAT_TAB_SHORT = {
  0: '도수치료',
  1: '리:얼 무브먼트',
  2: '리:얼 페이스',
  7: '힐자계',
  3: 'CMT 과정',
  5: 'Re:Al 움직임 과정',
  4: 'IFC 과정',
  6: '일상 공유',
  8: '지점브랜딩'
};
const CAT_GROUP_GENERAL = [0, 1, 2, 7, 6];
const CAT_GROUP_EXPERT = [3, 5, 4];
/** 지점브랜딩 상단 드롭다운 — opsManual.activeBranch 와 연동 */
const CAT_GROUP_OPS = [
  { branch: 'global', label: '공통' },
  { branch: 'yaksu', label: '약수 지점' },
  { branch: 'jakjeon', label: '작전 지점' },
  { branch: 'new', label: '신규 지점' }
];
/** 추가 폼 카테고리 선택 순서 */
const ADD_FORM_CAT_ORDER = [0, 3, 1, 5, 2, 4, 7, 6];

/** 미카닥 박준규 프로필·PSP 가이드 공개 URL (프로필.html과 동기화) */
const PROFILE_BRAND_URL = 'https://breezefeel.github.io/drpark/';
const PROFILE_SYMPTOM_HUBS = [
  { id: 'back', label: '허리', url: PROFILE_BRAND_URL + '?hub=back', keywords: ['허리', '요통', '디스크', '요추', '요추통증'] },
  { id: 'neck', label: '목·거북목', url: PROFILE_BRAND_URL + '?hub=neck', keywords: ['거북목', '경추', '목 통증', '목통증', '목뻣뻣', '목 어깨'] },
  { id: 'shoulder', label: '어깨', url: PROFILE_BRAND_URL + '?hub=shoulder', keywords: ['어깨', '오십견', '회전근개', '견갑'] },
  { id: 'knee', label: '무릎', url: PROFILE_BRAND_URL + '?hub=knee', keywords: ['무릎', '무릎통증', '슬개건', '반월상', '관절염'] },
  { id: 'pelvis', label: '골반·둔부', url: PROFILE_BRAND_URL + '?hub=pelvis', keywords: ['골반', '둔부', '좌골', '좌골신경', '이상근', '천골', '골반통증'] }
];
function buildSymptomHubLinksBlock_(){
  return PROFILE_SYMPTOM_HUBS.map(function(h){ return h.label + ': ' + h.url; }).join('\n');
}
function guessSymptomHubForTopic_(topic){
  var t = String(topic || '');
  if(!t.trim()) return null;
  var best = null;
  var bestScore = 0;
  PROFILE_SYMPTOM_HUBS.forEach(function(h){
    var score = 0;
    (h.keywords || []).forEach(function(kw){
      if(t.indexOf(kw) >= 0) score += kw.length;
    });
    if(score > bestScore){ bestScore = score; best = h; }
  });
  return bestScore > 0 ? best : null;
}
function getSymptomHubCtaHintForTopic_(topic){
  var hub = guessSymptomHubForTopic_(topic);
  if(hub) return '「' + hub.label + '」증상 가이드: ' + hub.url;
  return '증상별 안내(프로필): ' + PROFILE_BRAND_URL;
}
function buildBlogHubCtaSamples_(){
  var lines = ['【블로그 말미 CTA 예시 — 복사 후 지역·지점명만 수정】', ''];
  PROFILE_SYMPTOM_HUBS.forEach(function(h){
    lines.push('■ ' + h.label);
    lines.push('통증이 심하거나 저림·마비가 있으면 먼저 병원 진료를 받으시고, 안정되면 운동·재활 프로그램을 병행하는 흐름이 안전합니다. 증상별 자가 점검과 다음 단계는 아래 가이드에서 확인하실 수 있습니다.');
    lines.push('👉 ' + h.label + ' 증상 가이드: ' + h.url);
    lines.push('');
  });
  return lines.join('\n').trim();
}

/** 지점·브랜딩 탭 — 플래너 밖 운영·오픈 체크리스트 */
const OPS_BRANCH_IDS = ['global', 'yaksu', 'jakjeon', 'new'];
const OPS_BRANCH_LABELS = {
  global: '공통 브랜딩',
  yaksu: '약수 지점',
  jakjeon: '작전 지점',
  new: '신규 지점 (가상)'
};
const OPS_BRANCH_HINTS = {
  global: '콘텐츠 플래너가 담지 못하는 브랜딩·GEO·법적 문구',
  yaksu: '서울 약수 — 오픈·정비하면서 항목 채우기',
  jakjeon: '인천 작전 — 오픈·정비하면서 항목 채우기',
  new: '다음 지점 후보 — 상권·이름·할 일을 미리 정리'
};
/** 리얼무브먼트 — 공통 브랜딩 확정 문구 (플레이스·채널 동기화) */
const OPS_BRAND_COPY = {
  master: '근골격·움직임 전문가의, 1:1 리:얼 움직임 프로그램',
  realLine1: '리:얼(Real) — 진짜로 몸이 편해지는 움직임',
  realLine2: 'Re Alignment(얼라이먼트) — 몸의 정렬을 다시 맞추는 움직임',
  realDualShort: '리:얼(Real)은 진짜로 편해지는 움직임, Re Alignment(얼라이먼트)는 몸의 정렬을 다시 맞추는 움직임을 뜻합니다.',
  cta: '내 몸에 맞는 리:얼 움직임, 1:1 상담으로 시작해 보세요.',
  disclaimer: '※ 본 프로그램은 의료행위가 아닌 운동·웰니스 프로그램입니다.',
  oneLiner: {
    yaksu: '리얼무브먼트 약수점 | 진짜 움직임, 몸의 재정렬 — 1:1 리:얼 프로그램',
    jakjeon: '리얼무브먼트 작전점 | 진짜 움직임, 몸의 재정렬 — 1:1 리:얼 프로그램'
  },
  storeName: { yaksu: '리얼무브먼트 약수점', jakjeon: '리얼무브먼트 작전점' },
  location: { yaksu: '서울 중구 약수역 인근', jakjeon: '인천 계양구 작전동' },
  phone: '010-2468-4596',
  profileUrl: 'https://breezefeel.github.io/drpark/',
  blogMain: 'https://blog.naver.com/allenjoy',
  category: '퍼스널트레이닝',
  categoryAlt: '체형교정',
  hoursNote: '예약제 1:1 · 사전 예약 후 방문',
  branch: {
    yaksu: {
      phone: '010-5967-4596',
      tagline90: 'Re:Al Movement | Real Alignment 1:1 Program',
      naverKeywords: ['약수1대1운동', '약수체형교정', '약수자세교정', '약수역피티', '기능성운동'],
      address: '서울특별시 중구 동호로7길 32, 4층',
      addressShort: '중구 동호로7길 32, 4층',
      directionsShort: '약수역 5·6·7번 출구 도보 약 3분',
      directionsPlace: '약수역 4·5번: 약수시장·새마을금고 방향 → 칼국수집·빵집 건물 4층\n약수역 7번: 우리은행 골목 → 약수시장길 우측 → 동일 건물 4층\n내비 「리사르커피 약수」 검색\n주차: 리사르커피 옆 지상, 벤츠 옆 우측 2칸',
      parking: '지상 주차장 (리사르커피 옆 · 벤츠 차량 옆 우측 2칸 전용)',
      blogDirections: 'https://blog.naver.com/allenjoy/224307689748',
      keywords: ['약수 1:1 운동', '약수 체형교정', '중구 자세교정', '약수 스트레칭', '리얼무브먼트 약수', 'Re Alignment'],
      target: '직장인·도심 거주 (중구·명동·을지로)'
    },
    jakjeon: {
      phone: '010-2468-4596',
      tagline90: 'Re:Al Movement | Real Alignment 1:1 Program',
      naverKeywords: ['작전1대1운동', '작전체형교정', '작전자세교정', '인천피티', '기능성운동'],
      address: '인천광역시 계양구 봉오대로651번길 9, 힐스테이트자이계양 1층',
      addressShort: '계양구 봉오대로651번길 9, 1층 (커뮤니티 · 도서관 옆)',
      directionsShort: '작전역 7번 출구 · 힐스테이트자이 계양 동문',
      directionsPlace: '작전역 7번 출구 직진 → 이마트24·메가커피 횡단보도 → 아파트 정문\n커뮤니티 작은 문 → 1층 도서관 옆 첫 공간\n내비 「힐스테이트자이 계양」 동문 검색\n주차: 단지 주차장 (차량번호 사전 안내)',
      parking: '단지 주차장 (차량번호 사전 안내 시 입차 가능)',
      blogDirections: 'https://blog.naver.com/allenjoy/224122998739',
      keywords: ['작전 1:1 운동', '인천 체형교정', '작전 스트레칭', '계양 필라테스', '리얼무브먼트 작전', 'Re Alignment'],
      target: '입주민·가족 단위 (인천·계양)'
    }
  }
};
function opsBranchMeta_(branchKey){
  return (OPS_BRAND_COPY.branch && OPS_BRAND_COPY.branch[branchKey]) || OPS_BRAND_COPY.branch.yaksu;
}
function opsBranchPhone_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  return meta.phone || OPS_BRAND_COPY.phone;
}
function opsPlaceBranchKey_(itemId){
  return String(itemId || '').indexOf('ops-j-') === 0 ? 'jakjeon' : 'yaksu';
}
function buildOpsPlaceBasicInfo_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  var sn = OPS_BRAND_COPY.storeName[branchKey] || '';
  return '상호: ' + sn + '\n' +
    '업종: ' + OPS_BRAND_COPY.category + ' (보조: ' + OPS_BRAND_COPY.categoryAlt + ')\n' +
    '주소: ' + meta.address + '\n' +
    '전화: ' + opsBranchPhone_(branchKey) + '\n' +
    '영업시간: 평일 09:00–21:00 / 토요일 09:00–18:00 / 일·공휴일 휴무\n' +
    '※ 위 시간은 초안입니다. 스케줄·실제 운영과 맞는지 확인 후 수정하세요.\n' +
    '운영: ' + OPS_BRAND_COPY.hoursNote + '\n' +
    '찾아오기: ' + (meta.directionsShort || meta.directions || '') + '\n' +
    '주차: ' + meta.parking;
}
function buildOpsNaverSmartPlaceDetail_(branchKey){
  var sn = OPS_BRAND_COPY.storeName[branchKey] || OPS_BRAND_COPY.storeName.yaksu;
  var meta = opsBranchMeta_(branchKey);
  return sn + ' — ' + OPS_BRAND_COPY.master + '\n\n' +
    OPS_BRAND_COPY.realDualShort + '\n\n' +
    'Re:Al Movement 기반으로 앉기·서기·걷기부터, 내 몸에 맞는 움직임을 단계적으로 익힙니다. 1:1 맞춤만 운영합니다.\n\n' +
    '■ 이런 분께\n' +
    '· 운동은 하지만 몸이 편해지지 않는 분\n' +
    '· 자세·유연성·균형을 단계적으로 배우고 싶은 분\n' +
    '· 1:1로 제대로 봐주는 움직임 프로그램을 찾는 분\n\n' +
    '■ 프로그램 (Re:Al Movement)\n' +
    '1) Passive Stretching — 관절·근막 이완, 체력 부담 없이 시작\n' +
    '2) 생활습관·자세 — 앉기·서기·걷기 패턴 점검\n' +
    '3) 기능 운동(PAR) — 일상에서 쓰는 움직임의 질을 높임\n\n' +
    '평가·상담 후 개인에게 맞는 단계를 1:1로 안내합니다.\n' +
    '전화 ' + opsBranchPhone_(branchKey) + ' · 사전 예약 후 방문\n\n' +
    OPS_BRAND_COPY.disclaimer;
}
function buildOpsNaverKeywords5_(branchKey){
  var kw = opsBranchMeta_(branchKey).naverKeywords || [];
  return kw.join('\n');
}
function buildOpsNaverTagline90_(branchKey){
  return opsBranchMeta_(branchKey).tagline90 || OPS_BRAND_COPY.master;
}
function buildOpsNaverDirections_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  return meta.directionsPlace || meta.directionsShort || '';
}
function buildOpsPhotoShotList_(){
  return '1. 외관·간판 (지점명·리얼무브먼트 로고 보이게)\n' +
    '2. 입구·안내 (층수·찾아오기 단서)\n' +
    '3. 내부 전경 (밝고 정돈된 1:1 공간)\n' +
    '4. 상담·평가 장면 (경청·설명하는 분위기)\n' +
    '5. 1:1 Passive Stretching 장면\n' +
    '6. 1:1 기능운동·자세 지도 장면\n' +
    '7. Re:Al Movement 단계별 움직임 (일상 동작 연결)\n' +
    '8. 프로그램 설명·자료 (체계가 보이는 컷)\n' +
    '9. 편안한 휴식·대기 공간\n' +
    '10. 원장·전문가 신뢰 컷 (지도·설명 장면, 과한 포즈 지양)';
}
function buildOpsKeywords_(branchKey){
  var kw = opsBranchMeta_(branchKey).naverKeywords || opsBranchMeta_(branchKey).keywords || [];
  return kw.join(' · ');
}
function buildOpsPlaceLinks_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  return '홈페이지(프로필): ' + OPS_BRAND_COPY.profileUrl + '\n' +
    '블로그: ' + OPS_BRAND_COPY.blogMain + '\n' +
    '오시는 길: ' + meta.blogDirections + '\n' +
    '예약·문의: 전화 ' + opsBranchPhone_(branchKey) + ' · 네이버 톡톡(연결 시)';
}
function buildOpsShortIntro_(branchKey){
  var sn = OPS_BRAND_COPY.storeName[branchKey] || OPS_BRAND_COPY.storeName.yaksu;
  return sn + '은 근골격·움직임 전문가가 진행하는 1:1 리:얼 움직임 프로그램입니다.\n' +
    OPS_BRAND_COPY.realDualShort + '\n' +
    'Re:Al Movement 기반으로 앉기·서기·걷기부터, 내 몸에 맞는 단계를 1:1로 안내합니다.';
}
function buildOpsDetailIntro_(branchKey){
  var sn = OPS_BRAND_COPY.storeName[branchKey] || OPS_BRAND_COPY.storeName.yaksu;
  var meta = opsBranchMeta_(branchKey);
  return '■ ' + sn + '\n\n' + OPS_BRAND_COPY.master + '\n\n' +
    OPS_BRAND_COPY.realLine1 + '\n' + OPS_BRAND_COPY.realLine2 + '\n\n' +
    '리얼무브먼트는 Re:Al Movement 기반의 기능운동·스트레칭 1:1 프로그램입니다.\n' +
    '앉기·서기·걷기 같은 일상 동작부터, 내 몸에 맞는 움직임을 단계적으로 익힙니다.\n\n' +
    '■ 이런 분께\n· 운동은 하지만 몸이 편해지지 않는 분\n· 자세·유연성·균형을 단계적으로 배우고 싶은 분\n· 1:1로 제대로 봐주는 움직임 프로그램을 찾는 분\n· 무엇부터 시작할지 방향을 함께 정하고 싶은 분\n\n' +
    '■ 리얼무브먼트의 특징\n· Re:Al Movement 5단계 — 스트레칭부터 기능운동까지 체계\n· 1:1 맞춤 — 평가·상담 후 개인에게 맞는 단계 안내\n· 근골격·움직임 20년+ 경험 — 원장 직접 지도\n· Re:Al Movement · Re:Al Face 등 목적별 프로그램\n\n' +
    '■ 프로그램\nRe:Al Movement — PAR 운동 · 자세 · 기능운동\nRe:Al Face — 작은얼굴 · 안면·체형 프로그램\n\n' +
    '■ 위치·운영\n· ' + meta.addressShort + '\n· ' + meta.directions + '\n· 1:1 프로그램만 운영 (그룹·단체 수업 없음)\n· 상담·예약 문의 환영\n\n' +
    OPS_BRAND_COPY.disclaimer;
}
function buildOpsMedicalDisclaimerStandard_(){
  return '※ 본 안내는 의료행위가 아닌 운동·웰니스 프로그램 정보입니다. 통증이 심하거나 적신호(마비·대소변 장애·급격한 악화)가 있으면 병원 진료를 먼저 받으세요. ' + OPS_BRAND_COPY.disclaimer;
}
function buildOpsMedicalProfileHubDisclaimer_(){
  return '※ 일반 정보 안내이며 진단·처방이 아닙니다. 미카닥 박준규는 현재 병원에서 근무하지 않습니다. 통증이 심하거나 적신호가 있으면 병원 진료를 먼저 받으세요.';
}
function buildOpsMedicalForbiddenList_(){
  return '금지: 치료, 진단, 완치, 처방, 수술 대신, 재활병원, 그룹 PT, Doctor·닥터·원장님(제목·서명)\n권장: 1:1 맞춤, Re Alignment(얼라이먼트), 기능운동, 자세, 프로그램 안내, 병원 진료 먼저 권고';
}
function buildOpsMedicalPlannerRuleShort_(){
  return '미카닥 박준규는 현재 병원 근무하지 않음. 진단·처방·치료행위 암시 금지. 운동·재활·웰니스 프로그램 안내. 병원 치료 필요 시 먼저 권고. 완치·즉효·처방 연상 표현 금지.';
}
function buildOpsMedicalBlogFooter_(){
  return '통증이 심하거나 저림·마비가 있으면 먼저 병원 진료를 받으시고, 안정되면 운동·재활 프로그램을 병행하는 흐름이 안전합니다. ' + OPS_BRAND_COPY.disclaimer;
}
function buildOpsMedicalConsultResult_(){
  return '오늘 상담은 운동·움직임 프로그램 방향을 함께 정리한 안내입니다. 의료 진단·치료가 필요한 경우 병원 진료를 권합니다. ' + OPS_BRAND_COPY.cta;
}
function buildOpsFaqFiveSummary_(){
  return 'Q1. 병원 진료하나요? → 현재 병원 근무 안 함. 치료 필요 시 병원 먼저 권고.\n' +
    'Q2. Re:Al Movement란? → P-스트레칭·기능운동·자세 중심 운동·웰니스 프로그램(의료행위 아님).\n' +
    'Q3. 이용 장소? → 서울 약수점·인천 작전점. 블로그 지점 안내 참고.\n' +
    'Q4. 통증 심할 때? → 적신호 시 병원 먼저. 안정 후 Passive Stretching·기능운동 단계적 진행.\n' +
    'Q5. 허리 통증 때 병원 vs 운동? → 심한 통증·저림·마비면 병원 먼저. 안정 후 프로그램 병행.';
}
function buildOpsJsonLdCheckNote_(){
  return '프로필.html <head>에 FAQPage + MedicalWebPage(허리·목·어깨·무릎·골반) JSON-LD 포함.\n' +
    '점검: URL이 ?hub=back|neck|shoulder|knee|pelvis 와 일치하는지, FAQ 5문항이 화면 FAQ와 동일한지 확인.';
}
function buildOpsBlogCategories_(){
  return '1. 통증·재활 — 허리·목·어깨 등 증상별 셀프 케어·원리\n' +
    '2. 움직임·자세 — Re:Al Movement, 앉기·서기·걷기, Passive Stretching\n' +
    '3. 지점 안내 — 약수·작전 오시는 길, 주차, 운영 안내';
}
function buildOpsBlogPostStructure_(){
  return '제목(질문형·35자 내외) → 문제 제기(공감) → 셀프 케어(👉 동작·초·회) → 원리 설명(TL;DR 선행) → 말미 CTA(허브 링크 1개)';
}
function buildOpsBlogPublishPlan_(){
  return '주 1회 고정 발행일(예: 수요일)\n' +
    '1주: 통증·재활(허브 연결) / 2주: 움직임·자세 / 3주: 지점·프로그램 / 4주: 통증 변형글';
}
function buildOpsBlogDirectionsSnippet_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  var sn = OPS_BRAND_COPY.storeName[branchKey] || OPS_BRAND_COPY.storeName.yaksu;
  return sn + ' 오시는 길\n' +
    '주소: ' + meta.address + '\n' +
    (meta.directionsPlace || meta.directionsShort || '') + '\n' +
    '주차: ' + meta.parking + '\n' +
    '전화: ' + opsBranchPhone_(branchKey) + ' (사전 예약)\n' +
    '블로그 글: ' + meta.blogDirections;
}
function buildOpsDeployUrls_(){
  return '프로필: ' + PROFILE_BRAND_URL + '\n' +
    '플래너: https://breezefeel.github.io/Thewellness/\n' +
    '블로그: ' + OPS_BRAND_COPY.blogMain + '\n' +
    '약수 오시는길: ' + OPS_BRAND_COPY.branch.yaksu.blogDirections + '\n' +
    '작전 오시는길: ' + OPS_BRAND_COPY.branch.jakjeon.blogDirections;
}
/** 네이버 검색광고 키워드 CSV — 템플릿 안내 행(1~6) */
var OPS_NAVER_KW_CSV_HEADER_LINES = [
  '키워드를 추가 할 광고그룹ID 와 신규 키워드를 입력하세요.',
  '광고그룹ID는 \'광고다운로드\' 파일에서 확인할 수 있습니다. 입찰가는 쉼표나 \'원\' 표시를 제외한 숫자만 입력해 주세요.',
  '입력은 최대 만(10000)개까지 가능합니다. (광고그룹 당 키워드는 1000개까지 등록가능합니다)',
  '그룹의 웹사이트URL이 1개인 경우라도 PC/모바일 URL에 동일하게 2번 입력해주시고 PC/모바일 웹사이트를 별도로 가지고 있는 경우에만 URL을 PC /모바일 구분해서 입력하세요. URL은 http:// 등으로 시작하는 형식이어야 합니다.',
  '[중요] 7행부터 입력값이 시스템에 반영됩니다. 1~6행을 삭제하지 마세요. 엑셀에서 저장시 CSV 파일형식을 꼭 확인하시기 바랍니다.',
  '광고그룹ID(필수),키워드(필수),PC URL(선택),모바일 URL(선택),"키워드입찰가(선택,숫자만)"'
];
var OPS_NAVER_KW_MAX_ROWS = 10000;
function opsDefaultNaverNeighborhoods_(branchKey){
  if(branchKey === 'jakjeon'){
    return ['작전', '작전역', '계양', '계양역', '임학', '임학역', '계산', '계산역', '귤현', '박촌', '인천'];
  }
  return ['약수', '약수역', '금호', '금호역', '옥수', '옥수역', '신당', '신당역', '동대입구', '청구', '버티고개', '중구'];
}
function opsNaverKwSeedKeywords_(){
  var seed = (typeof OPS_NAVER_KW_SEED !== 'undefined' && OPS_NAVER_KW_SEED) ? OPS_NAVER_KW_SEED : null;
  return seed && Array.isArray(seed.keywords) ? seed.keywords.slice() : [];
}
function opsNaverKwSeedMeta_(){
  var seed = (typeof OPS_NAVER_KW_SEED !== 'undefined' && OPS_NAVER_KW_SEED) ? OPS_NAVER_KW_SEED : {};
  return {
    adGroupId: String(seed.adGroupId || '').trim(),
    pcUrl: String(seed.pcUrl || OPS_BRAND_COPY.profileUrl || '').trim(),
    mobileUrl: String(seed.mobileUrl || seed.pcUrl || OPS_BRAND_COPY.profileUrl || '').trim(),
    bid: String(seed.bid || '70').trim()
  };
}
function isOpsNaverKwItemId_(itemId){
  return itemId === 'ops-y-23' || itemId === 'ops-j-23';
}
function getOpsNaverKwState_(itemId){
  var om = getOpsManualState_();
  if(!om.keywordAds || typeof om.keywordAds !== 'object') om.keywordAds = {};
  var branchKey = opsPlaceBranchKey_(itemId);
  var cur = om.keywordAds[itemId];
  if(!cur || typeof cur !== 'object'){
    var meta = opsNaverKwSeedMeta_();
    cur = {
      keywords: opsNaverKwSeedKeywords_(),
      neighborhoods: opsDefaultNaverNeighborhoods_(branchKey),
      adGroupId: meta.adGroupId,
      pcUrl: meta.pcUrl,
      mobileUrl: meta.mobileUrl,
      bid: meta.bid,
      joinMode: 'space'
    };
    om.keywordAds[itemId] = cur;
  }
  if(!Array.isArray(cur.keywords)) cur.keywords = [];
  if(!Array.isArray(cur.neighborhoods)) cur.neighborhoods = [];
  if(!cur.joinMode) cur.joinMode = 'space';
  return cur;
}
function parseOpsNaverKwLines_(text){
  var seen = {};
  var out = [];
  String(text || '').split(/\r?\n/).forEach(function(line){
    var t = String(line || '').trim();
    if(!t || seen[t]) return;
    seen[t] = true;
    out.push(t);
  });
  return out;
}
function buildOpsNaverKwCombined_(kwState){
  var sep = (kwState && kwState.joinMode === 'none') ? '' : ' ';
  var kws = (kwState && kwState.keywords) || [];
  var hoods = (kwState && kwState.neighborhoods) || [];
  var seen = {};
  var out = [];
  hoods.forEach(function(hood){
    var h = String(hood || '').trim();
    if(!h) return;
    kws.forEach(function(kw){
      var k = String(kw || '').trim();
      if(!k) return;
      var combined = h + sep + k;
      if(seen[combined]) return;
      seen[combined] = true;
      out.push(combined);
    });
  });
  return out;
}
function buildOpsNaverKwCsvRows_(kwState, mode){
  mode = mode || 'both';
  var list = [];
  var seen = {};
  function pushKw(kw){
    var t = String(kw || '').trim();
    if(!t || seen[t]) return;
    seen[t] = true;
    list.push(t);
  }
  if(mode === 'base' || mode === 'both'){
    (kwState.keywords || []).forEach(pushKw);
  }
  if(mode === 'combo' || mode === 'both'){
    buildOpsNaverKwCombined_(kwState).forEach(pushKw);
  }
  return list;
}
function escapeOpsNaverKwCsvCell_(val){
  var s = String(val == null ? '' : val);
  if(/[",\r\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function buildOpsNaverKwCsvText_(kwState, mode){
  var rows = buildOpsNaverKwCsvRows_(kwState, mode);
  if(rows.length > OPS_NAVER_KW_MAX_ROWS){
    rows = rows.slice(0, OPS_NAVER_KW_MAX_ROWS);
  }
  var gid = String(kwState.adGroupId || '').trim();
  var pc = String(kwState.pcUrl || '').trim();
  var mo = String(kwState.mobileUrl || pc).trim();
  var bid = String(kwState.bid || '').trim();
  var lines = OPS_NAVER_KW_CSV_HEADER_LINES.slice();
  rows.forEach(function(kw){
    lines.push([
      escapeOpsNaverKwCsvCell_(gid),
      escapeOpsNaverKwCsvCell_(kw),
      escapeOpsNaverKwCsvCell_(pc),
      escapeOpsNaverKwCsvCell_(mo),
      escapeOpsNaverKwCsvCell_(bid)
    ].join(','));
  });
  return { text: lines.join('\r\n') + '\r\n', count: rows.length, truncated: buildOpsNaverKwCsvRows_(kwState, mode).length > OPS_NAVER_KW_MAX_ROWS };
}
function buildOpsDeployFiles_(){
  return '배포 대상(확인 후 업로드):\n' +
    '- planner.js / ops-naver-kw-seed.js / 플래너.html / planner-sw.js\n' +
    '- 프로필.html\n' +
    '- 강사용.html (해당 시)';
}
function buildOpsDeploySmokeTest_(){
  return '1) 프로필 홈 + 허브 5개 (?hub=back 등) 열림\n' +
    '2) 플래너 지점브랜딩 탭 로드\n' +
    '3) 강사용 출석·회원 화면(해당 시)';
}
function buildOpsPlaceExtraForm_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  return '【부가정보】\n' +
    '예약: 예약제 운영 · 무선인터넷: 있음 · 대기공간: 있음\n' +
    '반려동물: 동반 불가 · 주차: 무료 (' + meta.parking + ')\n' +
    '결제: 간편결제 · 홈페이지: ' + OPS_BRAND_COPY.profileUrl + '\n' +
    '블로그: ' + OPS_BRAND_COPY.blogMain + '\n\n' +
    '【영업시간】\n평일 09:00–21:00 / 토요일 09:00–18:00 / 일·공휴일 휴무\n' +
    '※ 실제 스케줄과 맞는지 확인 후 수정\n\n' +
    '【가격정보 — 별도 확정 후 입력】\n' +
    '· 1:1 상담 30분\n· 1:1 프로그램 50분\n· 1:1 프로그램 80분\n' +
    '※ 금액·영업시간은 운영 확정 후 직접 입력 (플래너 초안은 참고용)';
}
function buildOpsPlaceBookingProducts_(){
  return '「예약 시작하기」 상품 초안:\n' +
    '1) 1:1 상담 30분 — 프로그램 방향 안내\n' +
    '2) 1:1 프로그램 50분\n' +
    '3) 1:1 프로그램 80분\n\n' +
    '예약 안내: 사전 예약 필수 · 당일 변경은 전화 문의\n' +
    OPS_BRAND_COPY.hoursNote + '\n' + OPS_BRAND_COPY.disclaimer;
}
function buildOpsPlaceExtraBookingForm_(branchKey){
  return buildOpsPlaceExtraForm_(branchKey) + '\n\n── 예약·톡톡 ──\n' + buildOpsPlaceBookingProducts_() +
    '\n자동응답: ' + OPS_BRAND_COPY.cta;
}
function buildOpsGbpIntro_(branchKey){
  return OPS_BRAND_COPY.oneLiner[branchKey] + '\n\n' + buildOpsShortIntro_(branchKey) + '\n\n' + OPS_BRAND_COPY.disclaimer;
}
function buildOpsSoomgoServices_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  return '활동 지역: ' + (meta.addressShort || OPS_BRAND_COPY.location[branchKey] || '') + '\n' +
    '서비스:\n· 1:1 체형·자세 교정 프로그램\n· 1:1 기능운동 (Re:Al Movement)\n· 1:1 Passive Stretching\n\n' +
    '한 줄: ' + OPS_BRAND_COPY.master + '\n' +
    '견적 답변: ' + OPS_BRAND_COPY.cta + '\n' + OPS_BRAND_COPY.disclaimer;
}
function buildOpsKarrotIntro_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  var tone = branchKey === 'jakjeon' ? '입주민·단지 가족' : '직장인·도심 근무';
  return '【' + tone + ' 대상 동네생활 초안】\n' +
    buildOpsShortIntro_(branchKey) + '\n' +
    '위치: ' + meta.addressShort + '\n' +
    '문의: ' + opsBranchPhone_(branchKey) + ' (사전 예약)\n' +
    OPS_BRAND_COPY.disclaimer;
}
function buildOpsKakaoMapProfile_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  var sn = OPS_BRAND_COPY.storeName[branchKey] || '';
  return '【카카오맵 매장관리 / 카카오비즈니스】\n' +
    '상호: ' + sn + '\n' +
    '주소: ' + meta.address + '\n' +
    '전화: ' + opsBranchPhone_(branchKey) + '\n' +
    '영업시간: 평일 09:00–21:00 / 토 09:00–18:00 / 일·공휴 휴무\n' +
    '카테고리: 헬스·PT · 체형교정 (네이버 플레이스와 동일 톤)\n' +
    '소개: ' + OPS_BRAND_COPY.oneLiner[branchKey] + '\n' + buildOpsShortIntro_(branchKey).replace(/\n/g, ' ') + '\n' +
    '홈페이지: ' + OPS_BRAND_COPY.profileUrl + '\n' +
    '찾아오기: ' + (meta.directionsShort || '') + '\n' +
    '주차: ' + meta.parking + '\n' +
    OPS_BRAND_COPY.disclaimer + '\n' +
    '※ 카카오맵·네이버·구글 소개·사진·영업시간을 통일하세요.';
}
function buildOpsUnifiedInstagramBio_(){
  return '리얼무브먼트 · 1:1 리:얼 움직임\n' +
    OPS_BRAND_COPY.realDualShort + '\n' +
    'Re:Al Movement · Passive Stretching · 기능운동\n' +
    '📍 약수점 · 작전점\n' +
    '약수 ' + OPS_BRAND_COPY.branch.yaksu.phone + ' · 작전 ' + OPS_BRAND_COPY.branch.jakjeon.phone + '\n' +
    '🔗 ' + OPS_BRAND_COPY.profileUrl + '\n' +
    '예약·문의 DM 또는 프로필 링크\n' +
    OPS_BRAND_COPY.disclaimer + '\n' +
    '※ 통합 브랜드 계정 1개 (지점별 분리 없음) · 계정 신규 생성 후 URL을 메모에 기록';
}
function buildOpsUnifiedSnsGuide_(){
  return '【운영 방침】 통합 브랜드 계정 1개 · 약수·작전 모두 소개\n' +
    '※ 인스타·Threads·유튜브 계정은 신규 생성 예정 — 생성 후 URL을 항목 메모에 적어 두세요.\n\n' +
    '【인스타그램 — 계정명 예: realmovement_kr / 리얼무브먼트】\n' +
    '바이오:\n' + buildOpsUnifiedInstagramBio_() + '\n' +
    '하이라이트: 프로그램 · 약수점 · 작전점 · 1:1 공간 · 후기\n' +
    'Reels: 1:1 지도·스트레칭·공간 소개 (지점명 자막, 15~60초)\n\n' +
    '【Threads — 인스타와 동일 계정 연동】\n' +
    '짧은 소개·일상 움직임 팁 · 프로필·블로그 링크\n' +
    '톤: 브랜드 통합, 친근·전문 균형\n\n' +
    '【유튜브 — 채널명 예: 리얼무브먼트 Real Movement】\n' +
    '채널 설명: ' + OPS_BRAND_COPY.master + '\n' +
    '약수·작전 지점 안내: ' + OPS_BRAND_COPY.profileUrl + '\n' +
    'Shorts 주제:\n' +
    '1) 1:1 프로그램 소개\n' +
    '2) 약수점 오시는 길 (' + OPS_BRAND_COPY.branch.yaksu.addressShort + ')\n' +
    '3) 작전점 오시는 길 (' + OPS_BRAND_COPY.branch.jakjeon.addressShort + ')\n' +
    '4) Passive Stretching 셀프 팁 1개\n' +
    '설명란·고정 댓글에 프로필·면책 링크';
}
function buildOpsUnifiedYoutubeGuide_(){
  return '채널명 예: 리얼무브먼트 Real Movement\n' +
    '채널 설명: ' + OPS_BRAND_COPY.master + '\n' +
    '약수·작전 지점: ' + OPS_BRAND_COPY.profileUrl + '\n\n' +
    'Shorts 주제:\n' +
    '1) 1:1 프로그램 소개 (30초)\n' +
    '2) 약수점 오시는 길·주차 (' + OPS_BRAND_COPY.branch.yaksu.addressShort + ')\n' +
    '3) 작전점 오시는 길·주차 (' + OPS_BRAND_COPY.branch.jakjeon.addressShort + ')\n' +
    '4) Passive Stretching 셀프 팁 1개\n' +
    OPS_BRAND_COPY.disclaimer + '\n' +
    '※ 계정 생성 후 채널 URL을 메모에 기록';
}
function buildOpsInstagramBio_(branchKey){
  return buildOpsUnifiedInstagramBio_();
}
function buildOpsSnsChannelsGuide_(branchKey){
  return buildOpsUnifiedSnsGuide_();
}
function buildOpsProfileBranchLinks_(branchKey){
  var sn = OPS_BRAND_COPY.storeName[branchKey];
  var meta = opsBranchMeta_(branchKey);
  return '프로필·홈페이지 지점 문구:\n' +
    sn + ' — ' + meta.addressShort + '\n' +
    '전화: ' + opsBranchPhone_(branchKey) + '\n' +
    '오시는 길: ' + meta.blogDirections;
}
function buildOpsLongtailKeywords_(branchKey){
  var meta = opsBranchMeta_(branchKey);
  var placeLabel = branchKey === 'jakjeon' ? '작전' : '약수';
  var samples = branchKey === 'jakjeon'
    ? ['작전 허리 통증 운동', '인천 목·거북목 프로그램', '작전 1:1 체형교정']
    : ['약수 허리 통증 운동', '중구 목·거북목 프로그램', '약수 1:1 체형교정'];
  return '지역×증상 롱테일 3개 (' + placeLabel + '):\n' +
    '1) ' + samples[0] + ' → 허브: ' + PROFILE_BRAND_URL + '?hub=back\n' +
    '2) ' + samples[1] + ' → 허브: ' + PROFILE_BRAND_URL + '?hub=neck\n' +
    '3) ' + samples[2] + ' → 프로필: ' + PROFILE_BRAND_URL + '\n' +
    '블로그 CTA 예시:\n' + buildBlogHubCtaSamples_().split('\n').slice(0, 6).join('\n');
}
function buildOpsReviewRequestTemplate_(){
  return '【요청 타이밍】 3~5회차, 첫 변화 체감 시\n' +
    '【요청 문구】 느낀 변화 1개와 일상에서 편해진 점 1개를 간단히 남겨주시면 다음 프로그램 안내에 큰 도움이 됩니다.\n' +
    '【답변 템플릿】 감사 인사 + 구체적 변화 인용 + 다음 관리 포인트 1개';
}
function buildOpsOfflineMaterials_(){
  return '명함: 지점명 · 리:얼 · 1:1 · 전화 · 프로필 QR\n' +
    '안내판: 층수·찾아오기·예약제 안내\n' +
    '상담지: 통증 부위·목표·면책 동의\n' +
    '동의서: 운동·웰니스 프로그램 참여·개인정보';
}
function buildOpsFourWeekChannelCheck_(){
  return '4주 점검:\n' +
    '□ 플레이스·구글 사진·소개 최신\n' +
    '□ 리뷰 답변 누락 없음\n' +
    '□ 블로그 4편 발행\n' +
    '□ 숨고·당근·카카오맵 프로필 유지\n' +
    '□ 인스타·Threads·유튜브 최근 게시 1건 이상\n' +
    '□ 허브·프로필 링크 동작';
}
function opsPurposeIntent_(p, i){ return '목적: ' + p + '\n의도: ' + i; }
function opsItemPurpose_(purpose, intent){
  return opsPurposeIntent_(String(purpose || '').trim(), String(intent || '').trim());
}
function buildOpsProposalItemsForId_(byId, item, branchId){
  if(byId === 'ops-g-1'){
    return [
      { id:'master', title:'마스터 포지셔닝 1문장',
        brief: opsPurposeIntent_('전 채널의 기준이 되는 핵심 1문장을 확정합니다.', '근골격·움직임 전문가 · 1:1 리:얼 프로그램이 한 문장에 담기게 합니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.master, '마스터 문장은 이후 채널별 문장 톤·방향의 기준이 됩니다.') },
      { id:'real-dual', title:'리:얼 이중 의미',
        brief: opsPurposeIntent_('Real(진짜) + Re Alignment(재정렬) 브랜드 스토리를 정의합니다.', '리얼무브먼트만의 차별점이 짧은 소개·상세에서 반복되게 합니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.realLine1 + '\n' + OPS_BRAND_COPY.realLine2, '리:얼의 이중 의미가 브랜드 기억점이 됩니다.') },
      { id:'profile', title:'프로필용 문장',
        brief: opsPurposeIntent_('프로필·FAQ·증상 허브에 쓸 고객-facing 문장을 만듭니다.', '1:1 리:얼 움직임 · Re:Al Movement가 자연스럽게 드러나게 합니다.'),
        text: opsProposalWithReason_('리얼무브먼트는 Re:Al Movement 기반 1:1 리:얼 움직임 프로그램을 안내합니다. ' + OPS_BRAND_COPY.disclaimer, '프로필·FAQ는 고객이 가장 먼저 읽는 구간입니다.') },
      { id:'blog', title:'블로그용 문장',
        brief: opsPurposeIntent_('블로그 본문·말미 CTA에 쓸 문장을 만듭니다.', '정보 제공 톤을 유지하면서 리:얼 · 1:1 맞춤으로 연결합니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.realDualShort + ' Re:Al Movement 기반 움직임·자세 프로그램을 안내합니다.', '일반 정보 톤을 유지하면서 상담 연결로 자연스럽게 이어져야 합니다.') },
      { id:'cta', title:'상담 결과/CTA 문장',
        brief: opsPurposeIntent_('상담 결과 카드·문진 후·플레이스 예약에 쓸 전환 문장을 만듭니다.', '평가·상담 후 다음 행동(프로그램 시작)으로 이어지게 합니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.cta, '상담·플레이스 직후 다음 행동을 명확히 안내해 전환률을 높입니다.') },
      { id:'prompt', title:'플래너 프롬프트용 기준 문장',
        brief: opsPurposeIntent_('플래너 AI 프롬프트·의료법·GEO 규칙의 기준 문장을 만듭니다.', '자동 생성 콘텐츠가 같은 톤·경계를 지키게 합니다.'),
        text: opsProposalWithReason_('기본 톤: 리:얼(Real + Re Alignment) · 1:1 맞춤 움직임 프로그램. 치료·진단·완치 표현 금지. ' + OPS_BRAND_COPY.disclaimer, 'AI 생성 콘텐츠가 같은 경계·톤을 지키도록 프롬프트에 고정합니다.') },
      { id:'lexicon', title:'금지/권장 표현',
        brief: opsPurposeIntent_('채널 공통으로 쓰지 않을 표현과 권장 표현을 정리합니다.', '의료법·광고 심의 리스크를 줄이면서 메시지 일관성을 유지합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalForbiddenList_(), '팀 전체가 같은 표현 경계를 쓰면 의료법·광고 심의 리스크를 줄일 수 있습니다.') }
    ];
  }
  if(byId === 'ops-g-2'){
    return [
      { id:'scope', title:'동기화 범위 요약',
        brief: opsPurposeIntent_('어떤 문구를 맞출지 한눈에 봅니다.', '아래 제안 문장을 순서대로 확정합니다.'),
        text: opsProposalWithReason_('공통 면책 + 허브 면책 + 블로그 말미 병원 권고 + 금지 표현표', '검토 시작 전 체크리스트로 씁니다.') },
      { id:'disclaimer-std', title:'공통 면책 문구',
        brief: opsPurposeIntent_('모든 채널 말미·하단에 넣을 표준 면책을 확정합니다.', '의료행위가 아님을 명확히 하고 적신호 시 병원 권고를 포함합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalDisclaimerStandard_(), '플레이스·블로그·상담 결과에 동일하게 반복합니다.') },
      { id:'disclaimer-hub', title:'프로필·증상 허브 면책',
        brief: opsPurposeIntent_('허브 페이지 상단·하단 면책을 프로필과 맞춥니다.', '병원 미근무·진단 아님을 먼저 밝힙니다.'),
        text: opsProposalWithReason_(buildOpsMedicalProfileHubDisclaimer_(), '허브 5개(back/neck/shoulder/knee/pelvis)에 동일 적용.') },
      { id:'planner-rule', title:'플래너 의료법 규칙 요약',
        brief: opsPurposeIntent_('플래너 AI 프롬프트에 고정할 의료법·포지셔닝 규칙을 요약합니다.', '자동 생성 글이 경계를 넘지 않게 합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalPlannerRuleShort_(), 'MEDICAL_COMPLIANCE_RULE과 동기화하세요.') },
      { id:'blog-footer', title:'블로그 말미 면책·병원 권고',
        brief: opsPurposeIntent_('블로그 글 말미에 넣을 병원→프로그램 흐름 문장을 통일합니다.', '통증 심할 때 병원 먼저를 습관화합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_(), '모든 블로그 CTA 직전에 동일 톤으로 넣습니다.') },
      { id:'consult', title:'상담 결과·문진 면책',
        brief: opsPurposeIntent_('상담 결과 카드·문진 후 안내 문장을 확정합니다.', '프로그램 안내와 의료 경계를 동시에 밝힙니다.'),
        text: opsProposalWithReason_(buildOpsMedicalConsultResult_(), '강사용·플래너 상담 결과 화면에 반영.') },
      { id:'lexicon', title:'금지/권장 표현표',
        brief: opsPurposeIntent_('채널별 문구 검수 시 대조할 표현표를 만듭니다.', 'g-1 포지셔닝과 함께 유지합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalForbiddenList_(), '주 1회 신규 콘텐츠에 금지 표현 스캔.') }
    ];
  }
  if(byId === 'ops-g-4'){
    var hubItems = [
      { id:'hub-links', title:'허브 URL 전체 목록',
        brief: opsPurposeIntent_('증상별 허브 주소를 한곳에 모읍니다.', '블로그 CTA·프로필·JSON-LD가 같은 URL을 가리키게 합니다.'),
        text: opsProposalWithReason_(buildSymptomHubLinksBlock_(), '링크 오타·구 URL을 방지합니다.') }
    ].concat(PROFILE_SYMPTOM_HUBS.map(function(h){
      return { id:'hub-' + h.id, title: h.label + ' 허브',
        brief: opsPurposeIntent_(h.label + ' 증상 가이드 허브 문구·링크를 점검합니다.', '블로그 CTA·프로필·JSON-LD가 같은 URL을 가리키게 합니다.'),
        text: opsProposalWithReason_(h.label + ' 증상 가이드: ' + h.url + '\n키워드: ' + (h.keywords || []).slice(0, 4).join(', '), '허브 딥링크가 검색·상담 전환의 허브가 됩니다.') };
    }));
    hubItems.push(
      { id:'faq', title:'FAQ 5문항 요약',
        brief: opsPurposeIntent_('프로필 FAQ와 JSON-LD FAQPage가 동일한지 확인합니다.', 'AI 검색·리치 결과에 노출됩니다.'),
        text: opsProposalWithReason_(buildOpsFaqFiveSummary_(), '프로필.html FAQPage mainEntity와 문장을 맞춥니다.') },
      { id:'jsonld', title:'JSON-LD 점검 메모',
        brief: opsPurposeIntent_('MedicalWebPage·FAQPage 구조화 데이터를 점검합니다.', 'GEO·검색 엔진이 허브를 인식하게 합니다.'),
        text: opsProposalWithReason_(buildOpsJsonLdCheckNote_(), '배포 후 Google Rich Results Test로 확인 권장.') }
    );
    return hubItems;
  }
  if(byId === 'ops-g-9'){
    return [
      { id:'categories', title:'블로그 카테고리 3개',
        brief: opsPurposeIntent_('운영 가능한 카테고리 구조를 고정합니다.', '주제가 흩어지지 않게 합니다.'),
        text: opsProposalWithReason_(buildOpsBlogCategories_(), '네이버 블로그 카테고리명과 동일하게 맞춥니다.') },
      { id:'structure', title:'글 구조 템플릿',
        brief: opsPurposeIntent_('문제→셀프케어→원리→CTA 흐름을 표준화합니다.', '플래너 일반인용 블로그 프롬프트와 동기화합니다.'),
        text: opsProposalWithReason_(buildOpsBlogPostStructure_(), '모든 신규 글이 같은 구조를 따르게 합니다.') },
      { id:'publish', title:'주간 발행 계획',
        brief: opsPurposeIntent_('주 1회 발행 리듬을 정합니다.', '운영 부담을 예측 가능하게 합니다.'),
        text: opsProposalWithReason_(buildOpsBlogPublishPlan_(), '한 달 단위로 주제를 미리 배정하세요.') },
      { id:'cta-back', title:'말미 CTA — 허리 허브',
        brief: opsPurposeIntent_('허리 관련 글 말미 CTA 샘플을 확정합니다.', '허브 딥링크로 상담 전환을 유도합니다.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_() + '\n👉 허리 증상 가이드: ' + PROFILE_BRAND_URL + '?hub=back', '허리·요통 주제 글에 복사해 씁니다.') },
      { id:'cta-neck', title:'말미 CTA — 목·거북목 허브',
        brief: opsPurposeIntent_('목·거북목 글 말미 CTA 샘플을 확정합니다.', '동일 톤·다른 허브 URL.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_() + '\n👉 목·거북목 증상 가이드: ' + PROFILE_BRAND_URL + '?hub=neck', '목·어깨 주제 글에 사용.') },
      { id:'cta-shoulder', title:'말미 CTA — 어깨 허브',
        brief: opsPurposeIntent_('어깨 관련 글 말미 CTA 샘플을 확정합니다.', '동일 톤·어깨 허브 URL.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_() + '\n👉 어깨 증상 가이드: ' + PROFILE_BRAND_URL + '?hub=shoulder', '어깨·회전근개 주제 글에 사용.') },
      { id:'cta-knee', title:'말미 CTA — 무릎 허브',
        brief: opsPurposeIntent_('무릎 관련 글 말미 CTA 샘플을 확정합니다.', '동일 톤·무릎 허브 URL.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_() + '\n👉 무릎 증상 가이드: ' + PROFILE_BRAND_URL + '?hub=knee', '무릎·관절 주제 글에 사용.') },
      { id:'cta-pelvis', title:'말미 CTA — 골반·둔부 허브',
        brief: opsPurposeIntent_('골반·둔부 관련 글 말미 CTA 샘플을 확정합니다.', '동일 톤·골반 허브 URL.'),
        text: opsProposalWithReason_(buildOpsMedicalBlogFooter_() + '\n👉 골반·둔부 증상 가이드: ' + PROFILE_BRAND_URL + '?hub=pelvis', '골반·좌골 주제 글에 사용.') },
      { id:'cta-samples-all', title:'말미 CTA 전체 샘플 (5허브)',
        brief: opsPurposeIntent_('증상별 블로그 말미 문장을 한곳에 모읍니다.', '복사 후 지역·지점명만 수정해 씁니다.'),
        text: opsProposalWithReason_(buildBlogHubCtaSamples_(), '허리·목·어깨·무릎·골반 글 말미에 붙입니다.') },
      { id:'directions', title:'지점 안내 글 링크',
        brief: opsPurposeIntent_('약수·작전 오시는 길 블로그 글을 카테고리에 연결합니다.', '플레이스 찾아오기와 동일 정보.'),
        text: opsProposalWithReason_('약수: ' + OPS_BRAND_COPY.branch.yaksu.blogDirections + '\n작전: ' + OPS_BRAND_COPY.branch.jakjeon.blogDirections, '지점 안내 카테고리 고정 글 2개.') }
    ];
  }
  if(byId === 'ops-g-11'){
    return [
      { id:'urls', title:'공개 URL 목록',
        brief: opsPurposeIntent_('프로필·플래너·블로그·지점 글 URL을 한곳에 정리합니다.', '링크 오타·구 URL을 방지합니다.'),
        text: opsProposalWithReason_(buildOpsDeployUrls_(), '채널 설정 시 이 목록을 복사해 씁니다.') },
      { id:'files', title:'배포 파일 목록',
        brief: opsPurposeIntent_('수정 후 업로드할 파일을 고정합니다.', '누락 배포를 방지합니다.'),
        text: opsProposalWithReason_(buildOpsDeployFiles_(), 'GitHub Pages 또는 호스팅에 일괄 업로드.') },
      { id:'smoke', title:'스모크 테스트 3항',
        brief: opsPurposeIntent_('배포 직후 최소 확인 항목을 정합니다.', '치명적 오류를 빠르게 잡습니다.'),
        text: opsProposalWithReason_(buildOpsDeploySmokeTest_(), '강력 새로고침(Ctrl+Shift+R) 후 실행.') },
      { id:'cache', title:'캐시·버전 점검',
        brief: opsPurposeIntent_('구버전 planner.js 캐시 문제를 점검합니다.', '변경이 안 보일 때 대응.'),
        text: opsProposalWithReason_('배포 후: 시크릿 창 열기 → 플래너·프로필 각 1회 → planner-sw.js 갱신 확인\n로그: 배포일·파일명·테스트 결과 3줄 메모', '서비스워커 캐시로 구버전이 보일 수 있습니다.') }
    ];
  }
  if(byId === 'ops-y-6' || byId === 'ops-j-6'){
    var pk = opsPlaceBranchKey_(byId);
    return [
      { id:'store', title:'업체명 (30자)',
        brief: opsPurposeIntent_('네이버 플레이스 업체명을 확정합니다.', '지점명이 검색·지도에 그대로 노출됩니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.storeName[pk], '현재 등록명과 동일하게 유지합니다.') },
      { id:'tagline90', title:'영문 업체명 (90자, 영문만)',
        brief: opsPurposeIntent_('업체명 아래 영문 필드 — 한글 불가.', '영문·숫자·특수문자만. 브랜드명 Re:Al Movement 노출용.'),
        text: opsProposalWithReason_(buildOpsNaverTagline90_(pk), '한글 포지셔닝 문장은 상세설명에 넣습니다.') },
      { id:'detail', title:'상세설명 (2000자)',
        brief: opsPurposeIntent_('기존 의료·재활 톤 상세설명을 교체합니다.', '리:얼 · 1:1 · Re:Al Movement · 면책으로 통일합니다.'),
        text: opsProposalWithReason_(buildOpsNaverSmartPlaceDetail_(pk), '기존 DC·PT·재활 중심 문구는 전면 교체하세요.') },
      { id:'keywords', title:'대표키워드 5개 (각 15자)',
        brief: opsPurposeIntent_('지역+프로그램 검색어 5개를 등록합니다.', '「재활」 대신 1:1·체형·자세·피티 조합을 씁니다.'),
        text: opsProposalWithReason_(buildOpsNaverKeywords5_(pk), '단어 1개씩 입력 — 띄어쓰기 없이 15자 이내.') },
      { id:'directions', title:'찾아오는 길 (400자)',
        brief: opsPurposeIntent_('지하철·내비·주차 안내를 입력합니다.', '블로그 오시는 길 글과 맞춥니다.'),
        text: opsProposalWithReason_(buildOpsNaverDirections_(pk), '현재 「3분 거리」만 있으면 아래 전체로 교체하세요.') },
      { id:'basic', title:'전화·주소·업종·지도핀',
        brief: opsPurposeIntent_('전화·주소·업종·지도 위치를 확인합니다.', '핀 위치·층수가 실제와 일치해야 합니다.'),
        text: opsProposalWithReason_(buildOpsPlaceBasicInfo_(pk), '업종 퍼스널트레이닝(보조 체형교정) 유지.') },
      { id:'photos', title:'업체 사진 (최대 120)',
        brief: opsPurposeIntent_('대표 사진 순서·컷을 정합니다.', '첫 3장에 외관·내부·1:1 지도가 보이게 합니다.'),
        text: opsProposalWithReason_(buildOpsPhotoShotList_(), '의료 시술처럼 보이는 컷은 피합니다.') },
      { id:'cta', title:'문의 CTA (톡톡·스마트콜)',
        brief: opsPurposeIntent_('전화·톡톡·스마트콜 안내 문구를 맞춥니다.', '상세설명 말미 CTA와 동일 톤입니다.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.cta, '스마트콜 자동응답에도 같은 톤을 씁니다.') }
    ];
  }
  if(byId === 'ops-y-15' || byId === 'ops-j-15' || byId === 'ops-y-16' || byId === 'ops-j-16'){
    var pk15 = opsPlaceBranchKey_(byId);
    return [
      { id:'extra', title:'부가·가격·영업시간',
        brief: opsPurposeIntent_('스마트플레이스 부가정보·가격·휴무일·영업시간을 입력합니다.', '방문 전 실무 정보를 한곳에 모읍니다.'),
        text: opsProposalWithReason_(buildOpsPlaceExtraForm_(pk15), '주차·결제·링크는 지점 실제와 맞는지 확인.') },
      { id:'booking', title:'예약·톡톡',
        brief: opsPurposeIntent_('예약 상품·톡톡·스마트콜을 연결합니다.', '영업시간과 예약 가능 시간을 맞춥니다.'),
        text: opsProposalWithReason_(buildOpsPlaceBookingProducts_() + '\n자동응답: ' + OPS_BRAND_COPY.cta, '「예약 시작하기」를 먼저 등록하세요.') }
    ];
  }
  if(byId === 'ops-y-23' || byId === 'ops-j-23'){
    var pk23 = opsPlaceBranchKey_(byId);
    var hoodSample = opsDefaultNaverNeighborhoods_(pk23).slice(0, 4).join(', ');
    return [
      { id:'kw-base', title:'일반 키워드 리스트',
        brief: opsPurposeIntent_('검수된 일반 키워드를 확인하고 추가·수정합니다.', '아래 키워드 패널에서 목록을 편집하세요.'),
        text: opsProposalWithReason_('정리본 시드(약 728개)를 기본으로 불러옵니다. 한 줄에 하나씩 추가·삭제하고, 필요하면 재생성으로 시드를 다시 불러오세요.', '수술·홍보성 키워드는 이미 제외된 상태를 권장합니다.') },
      { id:'kw-hood', title:'동네 이름 붙이기',
        brief: opsPurposeIntent_('지점 상권 동네명을 리스트로 만듭니다.', '예: ' + hoodSample),
        text: opsProposalWithReason_('동네명 한 줄씩 입력 → 조합 미리보기로 「동네 + 키워드」를 확인 → CSV 다운로드.', '패턴 예: 약수 허리통증 / 약수역 허리통증') },
      { id:'kw-csv', title:'대량등록 CSV',
        brief: opsPurposeIntent_('네이버 검색광고 키워드 일괄등록 템플릿으로 내려받습니다.', '1~6행 안내문은 삭제하지 마세요.'),
        text: opsProposalWithReason_('광고그룹ID·URL·입찰가를 채운 뒤 「일반만 / 동네조합만 / 둘 다」 중 선택해 다운로드합니다. 한 파일 최대 10,000행입니다.', '업로드 전 광고그룹ID가 실제 계정과 같은지 확인하세요.') }
    ];
  }
  if(byId === 'ops-y-17' || byId === 'ops-j-17'){
    var pk17 = opsPlaceBranchKey_(byId);
    return [
      { id:'intro', title:'구글 소개글',
        brief: opsPurposeIntent_('Google Business Profile 소개를 네이버와 통일합니다.', '지도·검색 첫인상.'),
        text: opsProposalWithReason_(buildOpsGbpIntro_(pk17), '한 줄·짧은 소개 모두 동일 톤.') },
      { id:'basic', title:'기본정보·링크',
        brief: opsPurposeIntent_('영업시간·전화·홈페이지·카테고리를 점검합니다.', '플레이스와 불일치 없게.'),
        text: opsProposalWithReason_(buildOpsPlaceBasicInfo_(pk17) + '\n홈페이지: ' + OPS_BRAND_COPY.profileUrl, '지점별 프로필 각각 확인.') },
      { id:'photos', title:'사진 6~10장',
        brief: opsPurposeIntent_('구글 지도용 대표 사진을 등록합니다.', '플레이스와 동일 세트 권장.'),
        text: opsProposalWithReason_(buildOpsPhotoShotList_().split('\n').slice(0, 8).join('\n'), '외관·내부·1:1 지도 우선.') }
    ];
  }
  if(byId === 'ops-y-7' || byId === 'ops-j-7'){
    var pk7 = opsPlaceBranchKey_(byId);
    var meta7 = opsBranchMeta_(pk7);
    return [
      { id:'blog-link', title:'오시는 길 글 URL',
        brief: opsPurposeIntent_('기존 블로그 글 주소를 고정합니다.', '수정·공유 시 바로 열 수 있게 합니다.'),
        text: opsProposalWithReason_(meta7.blogDirections || '(블로그 오시는 글 URL)', '플레이스·프로필 링크와 동일하게 맞춥니다.') },
      { id:'directions', title:'오시는 길 글 본문',
        brief: opsPurposeIntent_('블로그 지점 안내 글을 플레이스와 맞춥니다.', '지도·주차·층수 상세.'),
        text: opsProposalWithReason_(buildOpsBlogDirectionsSnippet_(pk7), '기존 글 수정 또는 신규 발행.') },
      { id:'cta', title:'글 말미 CTA',
        brief: opsPurposeIntent_('오시는 길 글 말미에 예약 CTA를 넣습니다.', '프로필·플레이스와 연결.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.cta + '\n전화: ' + opsBranchPhone_(pk7) + '\n' + OPS_BRAND_COPY.disclaimer, '지도 링크·네이버 플레이스 링크 추가 권장.') }
    ];
  }
  if(byId === 'ops-y-19' || byId === 'ops-j-19'){
    var pk19 = opsPlaceBranchKey_(byId);
    return [
      { id:'profile', title:'전문가 프로필',
        brief: opsPurposeIntent_('숨고 프로필 사진·경력·소개를 등록합니다.', '플레이스와 동일 톤.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.master + '\n' + OPS_BRAND_COPY.realDualShort + '\n' + OPS_BRAND_COPY.disclaimer, '치료·완치 표현 없이 웰니스 포지셔닝.') },
      { id:'services', title:'서비스·견적 답변',
        brief: opsPurposeIntent_('서비스 항목·활동 지역·견적 템플릿을 설정합니다.', '문의 응답 속도·톤 통일.'),
        text: opsProposalWithReason_(buildOpsSoomgoServices_(pk19), '견적 요청 시 복사해 답변.') }
    ];
  }
  if(byId === 'ops-y-20' || byId === 'ops-j-20'){
    var pk20 = opsPlaceBranchKey_(byId);
    return [
      { id:'biz', title:'비즈프로필',
        brief: opsPurposeIntent_('당근 비즈프로필·지역 인증을 완료합니다.', '근거리 고객 노출.'),
        text: opsProposalWithReason_(buildOpsKarrotIntro_(pk20), '사진 3~5장·연락처·영업시간 입력.') },
      { id:'post', title:'동네생활 홍보 글',
        brief: opsPurposeIntent_('동네생활 첫 홍보 글을 올립니다.', '입주민·근거리 톤.'),
        text: opsProposalWithReason_(buildOpsKarrotIntro_(pk20) + '\n\n오시는 길·주차는 블로그 글 참고: ' + opsBranchMeta_(pk20).blogDirections, '과장·즉효 없이 상담 후 1:1 맞춤으로 마무리.') }
    ];
  }
  if(byId === 'ops-y-21' || byId === 'ops-j-21'){
    var pk21 = opsPlaceBranchKey_(byId);
    return [
      { id:'portals', title:'등록 포털 주소',
        brief: opsPurposeIntent_('카카오맵·비즈니스 접속 주소를 고정합니다.', '담당자가 바로 열 수 있게 북마크합니다.'),
        text: opsProposalWithReason_('매장관리: map.kakao.com · 비즈니스: business.kakao.com', '등록·수정 시 이 주소로 접속합니다.') },
      { id:'basic', title:'카카오맵 기본정보',
        brief: opsPurposeIntent_('카카오맵·카카오비즈니스에 매장 정보를 등록합니다.', '지도 검색·길찾기·전화 연결.'),
        text: opsProposalWithReason_(buildOpsKakaoMapProfile_(pk21), '네이버·구글과 주소·전화·영업시간을 통일하세요.') },
      { id:'photos', title:'사진·소개',
        brief: opsPurposeIntent_('대표 사진·소개글을 플레이스와 맞춥니다.', '첫인상 일관성.'),
        text: opsProposalWithReason_(buildOpsPhotoShotList_().split('\n').slice(0, 6).join('\n'), '외관·내부·1:1 지도 우선 업로드.') }
    ];
  }
  if(byId === 'ops-y-22' || byId === 'ops-j-22'){
    return [
      { id:'instagram', title:'인스타그램 (통합 계정)',
        brief: opsPurposeIntent_('브랜드 통합 인스타 계정을 신규 개설·세팅합니다.', '약수·작전을 한 계정에서 소개합니다.'),
        text: opsProposalWithReason_(buildOpsUnifiedInstagramBio_(), '하이라이트: 프로그램 · 약수점 · 작전점 · 1:1 공간 · 후기') },
      { id:'threads', title:'Threads (인스타 연동)',
        brief: opsPurposeIntent_('Threads에 브랜드 소개·움직임 팁을 올립니다.', '인스타와 동일 통합 계정.'),
        text: opsProposalWithReason_('리얼무브먼트 — 1:1 Re:Al Movement · 체형·자세\n' + OPS_BRAND_COPY.realDualShort + '\n' + OPS_BRAND_COPY.profileUrl, '지점별 전화는 프로필·플레이스로 안내.') },
      { id:'youtube', title:'유튜브 (통합 채널)',
        brief: opsPurposeIntent_('유튜브 통합 채널·Shorts 주제를 정합니다.', '약수·작전 오시는 길을 Shorts로 분리.'),
        text: opsProposalWithReason_(buildOpsUnifiedYoutubeGuide_(), '설명란·고정 댓글에 프로필·면책 링크.') }
    ];
  }
  if(byId === 'ops-y-8' || byId === 'ops-j-8'){
    var pk8 = opsPlaceBranchKey_(byId);
    return [
      { id:'profile', title:'프로필 지점 문구',
        brief: opsPurposeIntent_('프로필·홈페이지에 지점 정보를 반영합니다.', '약수·작전 각각 주소·전화.'),
        text: opsProposalWithReason_(buildOpsProfileBranchLinks_(pk8), '프로필.html 지점 안내 섹션과 동기화.') },
      { id:'links', title:'채널 링크 묶음',
        brief: opsPurposeIntent_('플레이스·블로그·프로필 링크를 한곳에 정리합니다.', '상호 링크 누락 방지.'),
        text: opsProposalWithReason_(buildOpsPlaceLinks_(pk8), '플레이스 부가정보·블로그 소개에도 동일.') }
    ];
  }
  if(byId === 'ops-y-9' || byId === 'ops-j-9'){
    var pk9 = opsPlaceBranchKey_(byId);
    return [
      { id:'keywords', title:'롱테일 키워드 3개',
        brief: opsPurposeIntent_('지역×증상 키워드를 선정하고 허브에 연결합니다.', '전환 의도 높은 조합 우선.'),
        text: opsProposalWithReason_(buildOpsLongtailKeywords_(pk9), '블로그 제목·CTA에 동일 키워드 반복.') },
      { id:'hub-links', title:'허브 URL 참고',
        brief: opsPurposeIntent_('증상별 허브 주소를 확인합니다.', '키워드와 맞는 허브 1개를 골라 CTA에 연결합니다.'),
        text: opsProposalWithReason_(buildSymptomHubLinksBlock_(), '블로그 말미·프로필 링크와 동일 URL을 씁니다.') },
      { id:'hub-cta', title:'허브 CTA 블록',
        brief: opsPurposeIntent_('선정 키워드별 허브 링크 CTA를 준비합니다.', '글 말미 1개 고정.'),
        text: opsProposalWithReason_(buildBlogHubCtaSamples_().split('\n').slice(0, 10).join('\n'), '증상 주제에 맞는 허브 1개만 선택.') }
    ];
  }
  if(byId === 'ops-n-7'){
    return [
      { id:'keywords', title:'SEO 키워드 5개 (초안)',
        brief: opsPurposeIntent_('신규 지점 지역×증상 키워드를 미리 선정합니다.', '오픈 후 블로그·플레이스에 바로 씁니다.'),
        text: opsProposalWithReason_('예: (지역) 1:1 운동 · (지역) 체형교정 · (지역) 자세교정 · (지역) 스트레칭 · 리얼무브먼트 (지역)', '상권·타깃에 맞게 5개로 다듬으세요.') },
      { id:'hub-links', title:'허브 딥링크 참고',
        brief: opsPurposeIntent_('증상별 프로필 허브 URL을 확인합니다.', '블로그 CTA·프로필 링크에 연결합니다.'),
        text: opsProposalWithReason_(buildSymptomHubLinksBlock_(), '허브 딥링크 참고 자료입니다.') }
    ];
  }
  if(byId === 'ops-n-1'){
    return [
      { id:'meta', title:'신규 지점 메모 연동',
        brief: opsPurposeIntent_('상단 신규 지점 메모와 연동합니다.', '후보명·상권 조사 결과를 한곳에 모읍니다.'),
        text: opsProposalWithReason_('후보명·지역은 상단 「신규 지점 메모」에도 기록하세요.', '체크리스트와 메모가 서로 맞는지 확인합니다.') }
    ];
  }
  if(byId === 'ops-n-11'){
    return [
      { id:'clone', title:'체크리스트 복제·4주 점검',
        brief: opsPurposeIntent_('기존 지점 체크리스트를 복제합니다.', '오픈 후 4주 점검까지 이어지게 합니다.'),
        text: opsProposalWithReason_('약수·작전 지점브랜딩 체크리스트를 복제한 뒤 일정에 맞게 조정하세요.\n오픈 4주 후 점검: 약수 ops-y-14 · 작전 ops-j-14 항목 참고', '런칭 후 누락 채널을 잡습니다.') }
    ];
  }
  if(byId === 'ops-y-10' || byId === 'ops-j-10'){
    return [
      { id:'request', title:'리뷰 요청 SOP',
        brief: opsPurposeIntent_('요청 타이밍·문구를 정합니다.', '증상 키워드가 자연스럽게 쌓이게.'),
        text: opsProposalWithReason_(buildOpsReviewRequestTemplate_(), '과장·완치 뉘앙스 없이 요청.') },
      { id:'reply-pain', title:'답변 템플릿 — 통증·재활형',
        brief: opsPurposeIntent_('허리·목 등 통증 키워드 리뷰 답변을 준비합니다.', '감사+경과+다음 관리.'),
        text: opsProposalWithReason_('소중한 후기 감사합니다. 일상에서 편해지신 부분을 잘 케어해 가시면 좋겠습니다. 다음 단계에서는 (구체 포인트)를 함께 보겠습니다.', '고객이 쓴 키워드를 1개 인용하세요.') },
      { id:'reply-wellness', title:'답변 템플릿 — 웰니스형',
        brief: opsPurposeIntent_('자세·유연성 개선 리뷰 답변을 준비합니다.', '전문형·친근형 중 톤 선택.'),
        text: opsProposalWithReason_('후기 남겨 주셔서 감사합니다. Re:Al Movement 단계에 맞게 꾸준히 이어가시면 일상 동작에서도 차이를 느끼실 수 있습니다.', '지점 톤에 맞게 다듬으세요.') }
    ];
  }
  if(byId === 'ops-y-11' || byId === 'ops-j-11'){
    return [
      { id:'materials', title:'오프라인 자료 목록',
        brief: opsPurposeIntent_('명함·안내판·상담지·동의서를 정비합니다.', '브랜드·면책·연락처 통일.'),
        text: opsProposalWithReason_(buildOpsOfflineMaterials_(), '인쇄 전 g-1·g-2 문장과 대조.') },
      { id:'copy', title:'안내판·명함 문구',
        brief: opsPurposeIntent_('오프라인에 쓸 한 줄·짧은 소개를 확정합니다.', '리:얼 · 1:1 · 전화.'),
        text: opsProposalWithReason_(OPS_BRAND_COPY.oneLiner[opsPlaceBranchKey_(byId)] + '\n' + OPS_BRAND_COPY.disclaimer, 'QR은 프로필 URL 연결.') }
    ];
  }
  if(byId === 'ops-y-14' || byId === 'ops-j-14'){
    return [
      { id:'checklist', title:'4주 채널 점검',
        brief: opsPurposeIntent_('오픈 4주 후 플레이스·리뷰·채널을 점검합니다.', '누락·구버전을 잡습니다.'),
        text: opsProposalWithReason_(buildOpsFourWeekChannelCheck_(), '점검일·조치 내역을 메모에 기록.') }
    ];
  }
  return null;
}
function opsBranchItem_(id, text, purpose){
  return { id: id, text: text, purpose: purpose || '', hint: '' };
}
function buildOpsBranchOnlineItems_(prefix, branchKey){
  var meta = opsBranchMeta_(branchKey);
  var placeLabel = branchKey === 'jakjeon' ? '작전' : '약수';
  var items = [
    opsBranchItem_(prefix + '-7', '네이버 블로그 ' + placeLabel + ' 오시는 길 글·지도 링크',
      opsItemPurpose_('블로그 지점 안내 글을 플레이스·프로필과 맞춥니다.', '방문 전 길찾기·주차 정보를 검색에서 바로 찾게 합니다.')),
    opsBranchItem_(prefix + '-6', '네이버 스마트플레이스 — 기본·소개·키워드·사진',
      opsItemPurpose_('네이버 지도·검색에 보이는 기본 정보를 ' + placeLabel + ' 지점에 맞게 정비합니다.', '첫인상·신뢰·리:얼 톤이 한눈에 드러나게 합니다.')),
    opsBranchItem_(prefix + '-15', '네이버 스마트플레이스 — 부가·가격·시간·예약·톡톡',
      opsItemPurpose_('방문 전에 꼭 알아야 할 실무 정보를 플레이스에 채웁니다.', '예약·가격·영업시간·톡톡 경로가 한곳에 모이게 합니다.')),
    opsBranchItem_(prefix + '-23', '네이버 키워드 등록 — 일반·동네 조합·대량 CSV',
      opsItemPurpose_('검색광고에 올릴 일반 키워드와 동네 조합을 정리합니다.', '템플릿 CSV로 대량 등록해 지역×증상 유입을 만듭니다.')),
    opsBranchItem_(prefix + '-17', 'Google Business Profile — 기본정보·소개·사진',
      opsItemPurpose_('구글 지도·검색용 지점 정보를 최신화합니다.', '네이버와 같은 신뢰·톤으로 맞춥니다.')),
    opsBranchItem_(prefix + '-21', '카카오맵·카카오비즈니스 — 매장등록·소개·사진',
      opsItemPurpose_('카카오 지도에서 매장을 찾고 길찾기·전화 연결을 받습니다.', '주소·전화·사진이 다른 채널과 일치하게 합니다.')),
    opsBranchItem_(prefix + '-19', '숨고 — 프로필·서비스 등록·견적 응답',
      opsItemPurpose_('숨고에서 1:1 운동·체형 프로그램 문의를 받습니다.', '플레이스와 같은 톤으로 견적 답변을 빠르게 합니다.')),
    opsBranchItem_(prefix + '-20', '당근마켓 동네생활 — 비즈프로필·홍보 글',
      opsItemPurpose_('근거리·입주민 고객에게 가볍게 노출합니다.', '과장 없이 상담·1:1 맞춤으로 이어지게 합니다.'))
  ];
  if(branchKey === 'yaksu'){
    items.push(opsBranchItem_(prefix + '-22', '인스타그램 · Threads · 유튜브 — 통합 브랜드 계정 (신규 생성)',
      opsItemPurpose_('약수·작전 공통 SNS 계정을 개설·연결합니다.', '브랜드 톤·프로필 링크·면책을 한 계정에서 유지합니다.')));
  }
  return items;
}
function buildOpsBranchSearchItems_(prefix, branchKey){
  var placeLabel = branchKey === 'jakjeon' ? '작전' : '약수';
  return [
    opsBranchItem_(prefix + '-8', '프로필·홈페이지 ' + placeLabel + ' 링크·문구 반영',
      opsItemPurpose_('프로필·홈페이지에 ' + placeLabel + ' 지점 정보를 반영합니다.', '주소·전화·오시는 길이 플레이스·블로그와 일치하게 합니다.')),
    opsBranchItem_(prefix + '-9', '지역×증상 롱테일 키워드 3개 · 프로필 허브·블로그 연결',
      opsItemPurpose_('지역×증상 검색어를 정하고 허브·블로그를 연결합니다.', '전환 의도 높은 키워드로 상담 문의를 늘립니다.'))
  ];
}
function buildOpsBranchOpsItems_(prefix){
  return [
    opsBranchItem_(prefix + '-10', '리뷰 유도 SOP — 증상 키워드 포함 후기 요청',
      opsItemPurpose_('후기 요청 타이밍·문구·답변을 표준화합니다.', '증상 키워드가 자연스럽게 쌓이게 합니다.')),
    opsBranchItem_(prefix + '-11', '오프라인 안내판·명함·상담지·동의서',
      opsItemPurpose_('오프라인 인쇄물·안내 문구를 브랜드·면책 톤에 맞춥니다.', '방문 고객이 온·오프라인에서 같은 신뢰를 느끼게 합니다.')),
    opsBranchItem_(prefix + '-14', '오픈 4주 후 플레이스·리뷰·채널 점검',
      opsItemPurpose_('오픈 4주 뒤 채널·리뷰·링크를 한번에 점검합니다.', '초기 누락·구버전을 잡고 운영 리듬을 고정합니다.'))
  ];
}
function buildOpsGuideForItem_(item, branchId){
  var byId = item && item.id ? String(item.id) : '';
  var text = String(item && item.text || '').trim();
  var hint = String(item && item.hint || '').trim();
  if(!text) return null;
  if(byId === 'ops-g-1'){
    var g1 = [
      '무엇을 하나요: 전 채널에서 동일하게 쓰는 포지셔닝·리:얼 문장 세트를 확정합니다.',
      '어떻게 하나요:',
      '1) 마스터 1문장 확정 → 프로필·블로그·플레이스·상담 CTA에 각각 맞게 변형',
      '2) 리:얼(Real + Re Alignment) 이중 의미를 짧은·상세 소개에 반복',
      '3) 금지/권장 표현표와 함께 팀 공유',
      '4) 반영 위치 체크리스트로 누락 확인',
      '제안: 함께 검토의 7개 제안 블록을 순서대로 확정·고정하세요.',
      '함께 기획/검토: 약수·작전 소개 첫 문장만 상권에 맞게 다르게 갈지 결정합니다.'
    ].join('\n');
    return { short: g1, full: g1, long: true };
  }
  if(byId === 'ops-g-2'){
    var g2 = [
      '무엇을 하나요: 의료법 준수 면책·금지 표현을 프로필·블로그·상담·플래너에 동일하게 맞춥니다.',
      '어떻게 하나요:',
      '1) 공통 면책 문구 확정(의료행위 아님·적신호 시 병원)',
      '2) 프로필 허브 5개 상단·하단 면책 동기화',
      '3) 플래너 MEDICAL_COMPLIANCE_RULE 요약 반영',
      '4) 블로그 말미 병원→프로그램 흐름 문장 통일',
      '5) 상담 결과·문진 면책 문구 확정',
      '6) 금지 표현(치료·완치·진단) 전 채널 스캔',
      '제안: 신규 콘텐츠 발행 전 금지 표현 체크를 습관화하세요.',
      '함께 기획/검토: 블로그·플레이스 중 면책이 빠진 채널이 있는지 함께 찾습니다.'
    ].join('\n');
    return { short: g2, full: g2, long: true };
  }
  if(byId === 'ops-g-4'){
    var g4 = [
      '무엇을 하나요: 프로필 증상 허브 5개·FAQ·JSON-LD가 같은 URL·문장을 가리키게 점검합니다.',
      '어떻게 하나요:',
      '1) 허리·목·어깨·무릎·골반 허브 URL (?hub=) 확인',
      '2) 각 허브 상단·하단 면책·병원 권고 문구 점검',
      '3) FAQ 5문항이 프로필 화면·JSON-LD FAQPage와 일치하는지 대조',
      '4) MedicalWebPage JSON-LD URL이 허브와 일치하는지 확인',
      '5) 블로그 CTA가 올바른 허브로 연결되는지 샘플 2개 테스트',
      '제안: 허브별로 블로그 말미 CTA 1개씩 미리 복사해 두면 운영이 빨라집니다.',
      '함께 기획/검토: 이번 달 집중할 허브 2개(예: 허리·목)를 정하고 블로그 주제에 반영합니다.',
      '참고 자료: ' + (hint || buildSymptomHubLinksBlock_())
    ].join('\n');
    return { short: g4, full: g4, long: true };
  }
  if(byId === 'ops-g-6'){
    var g6 = [
      '무엇을 하나요: Bing Webmaster Tools에 사이트맵을 제출해 검색 엔진 색인 기반을 만듭니다.',
      '어떻게 하나요:',
      '1) Bing Webmaster Tools 로그인 → 사이트 추가',
      '2) URL Prefix에 프로필 공개 주소 입력',
      '3) 소유권 확인(권장: HTML 태그 또는 DNS)',
      '4) Sitemaps 메뉴에서 sitemap URL 제출',
      '5) 1~2일 뒤 색인 상태/오류 확인',
      '제안: 제출 후 "허리 통증", "목·거북목" 같은 핵심 키워드로 실제 노출 문장을 월 1회 기록하세요.',
      '함께 기획/검토: 지금은 프로필 허브 중심 색인을 우선할지, 블로그 글 색인을 우선할지 우선순위를 같이 정합니다.'
    ].join('\n');
    return { short: g6, full: g6, long: true };
  }
  if(byId === 'ops-g-7'){
    var g7 = [
      '무엇을 하나요: Google Business Profile(지점별) 기본 정보를 점검해 검색·지도 노출 품질을 맞춥니다.',
      '어떻게 하나요:',
      '1) 지점별 프로필(약수/작전) 각각 접속',
      '2) 카테고리·영업시간·전화·홈페이지 링크 확인',
      '3) 소개글에 리:얼(Real + Re Alignment) · 1:1 맞춤 톤 반영',
      '4) 최근 사진 6~10장 업데이트(외관/내부/프로그램 흐름)',
      '5) Q&A/리뷰 응답 문구 톤 통일',
      '제안: 리뷰 답변 템플릿 2종(통증·재활 / 웰니스)을 미리 정해 운영 시간을 줄이세요.',
      '함께 기획/검토: 지점별 타깃(직장인/입주민)에 따라 소개글 첫 문장을 다르게 갈지 결정합니다.'
    ].join('\n');
    return { short: g7, full: g7, long: true };
  }
  if(byId === 'ops-g-9'){
    var g9 = [
      '무엇을 하나요: 블로그 카테고리와 시리즈 흐름을 정리하고 글 말미 CTA를 허브 링크로 통일합니다.',
      '어떻게 하나요:',
      '1) 카테고리 3개 고정(통증·재활 / 움직임·자세 / 지점 안내)',
      '2) 각 카테고리에서 주 1개 주제만 먼저 확정',
      '3) 본문 구조를 문제 제기 → 셀프 케어 → 원리 설명으로 통일',
      '4) 말미 CTA는 증상 허브 링크 1개 고정 삽입',
      '5) 발행 후 검색어·문의 유입 키워드 메모',
      '제안: 글 길이를 일정하게(짧은형/표준형) 두 가지 템플릿으로 나누면 유지가 쉽습니다.',
      '함께 기획/검토: "허리/목/어깨/무릎/골반" 중 이번 달 우선 허브 2개를 정하고 집중 운영합니다.',
      '참고 자료: ' + (hint || '허브 링크 목록')
    ].join('\n');
    return { short: g9, full: g9, long: true };
  }
  if(byId === 'ops-y-9' || byId === 'ops-j-9' || byId === 'ops-n-7'){
    var geo = [
      '무엇을 하나요: 지역×증상 롱테일 키워드를 정하고 프로필 허브·블로그를 연결합니다.',
      '어떻게 하나요:',
      '1) 지역명+증상 조합 3~5개 선정',
      '2) 키워드별 대표 허브 1개 매칭',
      '3) 블로그 제목/소제목/CTA에 동일 키워드 반복',
      '4) 문의/예약에서 실제 사용된 표현을 다시 키워드에 반영',
      '제안: "지역+통증+재활" 조합을 우선하면 상담 전환 의도가 높은 편입니다.',
      '함께 기획/검토: 지점별 핵심 고객(직장인/입주민/운동초보)에 맞춰 키워드 톤을 분리할지 결정합니다.',
      '참고 자료: ' + (hint || '허브 링크 목록')
    ].join('\n');
    return { short: geo, full: geo, long: true };
  }
  if(byId === 'ops-g-11'){
    var deploy = [
      '무엇을 하나요: 강사용·프로필·플래너의 URL/버전을 맞추고 배포 누락을 점검합니다.',
      '어떻게 하나요:',
      '1) 수정 파일 목록 고정(예: 강사용.html, 프로필.html, planner.js)',
      '2) 업로드 후 강력 새로고침',
      '3) 핵심 화면 3개 스모크 테스트(출석/허브/플래너)',
      '4) 오류 문구·캡처를 메모에 남기고 원인 분류',
      '제안: 배포 체크는 "파일 업로드 / 캐시 초기화 / 테스트 결과" 3줄 템플릿으로 남기세요.',
      '함께 기획/검토: 다음 배포부터는 점검 항목을 자동화할지(간단 QA 스크립트) 함께 결정합니다.'
    ].join('\n');
    return { short: deploy, full: deploy, long: true };
  }
  if(byId === 'ops-y-6' || byId === 'ops-j-6'){
    var placeBasic = [
      '무엇을 하나요: 네이버 스마트플레이스 기본 정보·소개글·키워드·사진을 지점 톤에 맞춰 정비합니다.',
      '어떻게 하나요:',
      '1) 업체명·업종·전화·주소·지도핀 확인',
      '2) 상세설명(리:얼 · 1:1 · Re:Al Movement) 반영',
      '3) 대표키워드 5개 등록',
      '4) 대표 사진 10컷 이상(외관·내부·1:1 장면)',
      '5) 모바일/PC 노출 화면 캡처 저장',
      '제안: 부가·가격·시간·예약은 다음 항목에서 이어서 입력하세요.',
      '함께 기획/검토: 약수/작전 소개글 첫 문장만 상권에 맞게 다르게 갈지 결정합니다.'
    ].join('\n');
    return { short: placeBasic, full: placeBasic, long: true };
  }
  if(byId === 'ops-y-15' || byId === 'ops-j-15' || byId === 'ops-y-16' || byId === 'ops-j-16'){
    var placeExtraBook = [
      '무엇을 하나요: 스마트플레이스 부가정보·가격·영업시간·예약·톡톡을 입력합니다.',
      '어떻게 하나요:',
      '1) 부가정보 — 주차·결제·홈페이지·블로그 링크',
      '2) 가격정보 — 프로그램·이용권(금액 확정 후)',
      '3) 휴무일·영업시간 — 일·공휴 휴무, 평일/토 구분',
      '4) 「예약 시작하기」 — 1:1 상품(상담·50분·80분) 등록',
      '5) 예약 가능 시간 = 영업시간과 동일하게',
      '6) 톡톡·스마트콜 연결·자동응답 톤 통일',
      '제안: 가격 미정이면 텍스트만 먼저 등록해도 됩니다.'
    ].join('\n');
    return { short: placeExtraBook, full: placeExtraBook, long: true };
  }
  if(byId === 'ops-y-23' || byId === 'ops-j-23'){
    var kwGuide = [
      '무엇을 하나요: 네이버 검색광고용 일반 키워드·동네 조합을 정리하고 대량등록 CSV를 만듭니다.',
      '어떻게 하나요:',
      '1) 일반 키워드 — 현재 리스트 확인 후 추가·수정 (또는 시드 재생성)',
      '2) 동네 이름 — 지점 상권 동네를 리스트로 추가·수정·재생성',
      '3) 조합 미리보기 — 「동네 + 키워드」 형태 확인',
      '4) 광고그룹ID·URL·입찰가 입력',
      '5) 템플릿 CSV 다운로드 후 네이버 검색광고에 업로드',
      '제안: 파일당 최대 10,000행. 동네 조합이 많으면 「동네조합만」으로 나눠 받으세요.',
      '함께 기획/검토: 약수/작전 동네 범위를 어디까지 잡을지 함께 정합니다.'
    ].join('\n');
    return { short: kwGuide, full: kwGuide, long: true };
  }
  if(byId === 'ops-y-17' || byId === 'ops-j-17'){
    var gbp = [
      '무엇을 하나요: Google Business Profile(지점별) 기본 정보를 점검해 지도/검색 노출을 맞춥니다.',
      '어떻게 하나요:',
      '1) 지점별 프로필 생성·소유권 확인',
      '2) 카테고리·영업시간·전화·홈페이지 링크',
      '3) 소개글에 리:얼(Real + Re Alignment) · 1:1 맞춤 톤 반영',
      '4) 사진 6~10장(외관/내부/프로그램)',
      '5) Q&A/리뷰 응답 문구 톤 통일',
      '제안: 네이버 플레이스와 문구·사진을 최대한 통일하세요.'
    ].join('\n');
    return { short: gbp, full: gbp, long: true };
  }
  if(byId === 'ops-y-19' || byId === 'ops-j-19'){
    var soomgo = [
      '무엇을 하나요: 숨고에 지점 프로필·서비스를 등록해 견적 문의를 받습니다.',
      '어떻게 하나요:',
      '1) 전문가 프로필 — 사진·경력·한 줄 소개(리:얼 · 1:1)',
      '2) 서비스 등록 — 1:1 체형교정·기능운동·스트레칭 등',
      '3) 활동 지역·가격대·응답 시간 설정',
      '4) 견적 요청 시 공통 답변 템플릿(상담·예약 안내)',
      '5) 의료법 금지 표현(치료·완치) 점검',
      '제안: 「운동·웰니스 프로그램」 포지셔닝을 유지하세요.'
    ].join('\n');
    return { short: soomgo, full: soomgo, long: true };
  }
  if(byId === 'ops-y-20' || byId === 'ops-j-20'){
    var karrot = [
      '무엇을 하나요: 당근마켓 동네생활·비즈프로필로 지역 고객에게 노출합니다.',
      '어떻게 하나요:',
      '1) 비즈프로필 개설·지역 인증',
      '2) 간단 소개 — 1:1 Re:Al Movement · 체형·자세',
      '3) 대표 사진 3~5장 · 연락처·영업시간',
      '4) 동네생활 홍보 글 1편(오시는 길·프로그램 소개)',
      '5) 작전 지점은 입주민·단지 커뮤니티 톤으로 작성',
      '제안: 과장·즉효 약속 없이 「상담 후 1:1 맞춤」으로 마무리하세요.'
    ].join('\n');
    return { short: karrot, full: karrot, long: true };
  }
  if(byId === 'ops-y-21' || byId === 'ops-j-21'){
    var kakao = [
      '무엇을 하나요: 카카오맵 매장등록·카카오비즈니스에 지점 정보를 넣어 지도 검색·길찾기를 받습니다.',
      '어떻게 하나요:',
      '1) 카카오맵 매장관리 — 상호·주소·전화·영업시간·지도핀',
      '2) 소개글·카테고리 — 네이버·구글과 동일 톤(리:얼 · 1:1)',
      '3) 대표 사진 6~10장(플레이스와 동일 세트 권장)',
      '4) 홈페이지·예약 링크 = 프로필 URL',
      '5) 카카오비즈니스 채널·상담 연결(해당 시)',
      '제안: 네이버·구글·카카오 세 지도 채널의 문구·시간을 한 번에 대조하세요.',
      '참고: map.kakao.com · business.kakao.com'
    ].join('\n');
    return { short: kakao, full: kakao, long: true };
  }
  if(byId === 'ops-y-22' || byId === 'ops-j-22'){
    var sns = [
      '무엇을 하나요: 인스타·Threads·유튜브 통합 브랜드 계정을 신규 개설·세팅합니다.',
      '어떻게 하나요:',
      '1) 인스타 통합 계정 개설 — 바이오에 약수·작전 모두 안내',
      '2) 하이라이트: 프로그램 · 약수점 · 작전점 · 1:1 공간 · 후기',
      '3) Threads — 인스타 연동, 짧은 소개·움직임 팁',
      '4) 유튜브 통합 채널 — Shorts(프로그램·약수·작전 오시는길)',
      '5) 생성된 계정 URL을 항목 메모에 기록',
      '6) 모든 채널 설명란에 면책·프로필 링크',
      '제안: Reels·Shorts는 주 1회만 꾸준히 올려도 충분합니다.',
      '운영 방침: 통합 브랜드 계정 1개 (지점별 분리 없음 — 확정)'
    ].join('\n');
    return { short: sns, full: sns, long: true };
  }
  if(byId === 'ops-y-7' || byId === 'ops-j-7'){
    var blogDir = [
      '무엇을 하나요: 블로그 오시는 길 글을 플레이스·프로필과 동일 정보로 맞춥니다.',
      '어떻게 하나요:',
      '1) 주소·지하철·내비·주차·층수 상세 입력',
      '2) 대표 사진(외관·입구) 삽입',
      '3) 말미 예약 CTA·면책',
      '4) 플레이스 찾아오기·프로필 지점 안내와 대조',
      '제안: 기존 블로그 글이 있으면 수정, 없으면 함께 검토 초안으로 신규 발행.'
    ].join('\n');
    return { short: blogDir, full: blogDir, long: true };
  }
  if(byId === 'ops-y-8' || byId === 'ops-j-8'){
    var profLink = [
      '무엇을 하나요: 프로필·홈페이지에 지점 주소·전화·오시는 길을 반영합니다.',
      '어떻게 하나요:',
      '1) 프로필.html 지점 안내 문구 점검',
      '2) 플레이스·구글 홈페이지 링크 = 프로필 URL',
      '3) 블로그·숨고 등 채널 소개에도 동일 링크',
      '제안: 지점별 전화번호(약수/작전)가 섞이지 않았는지 확인.'
    ].join('\n');
    return { short: profLink, full: profLink, long: true };
  }
  if(byId === 'ops-y-11' || byId === 'ops-j-11'){
    var offline = [
      '무엇을 하나요: 명함·안내판·상담지·동의서를 브랜드·면책 톤에 맞게 정비합니다.',
      '어떻게 하나요:',
      '1) 명함 — 지점명·리:얼·전화·프로필 QR',
      '2) 안내판 — 층수·찾아오기·예약제',
      '3) 상담지·동의서 — 면책·개인정보',
      '4) g-1·g-2 문장과 인쇄 전 대조',
      '제안: 프로필 QR로 증상 허브 연결도 검토.'
    ].join('\n');
    return { short: offline, full: offline, long: true };
  }
  if(byId === 'ops-y-14' || byId === 'ops-j-14'){
    var week4 = [
      '무엇을 하나요: 오픈 4주 후 플레이스·리뷰·채널을 종합 점검합니다.',
      '어떻게 하나요:',
      '1) 플레이스·구글 사진·소개 최신 여부',
      '2) 리뷰 답변 누락·키워드 집계',
      '3) 블로그 4편 발행 여부',
      '4) 숨고·당근·허브 링크 동작',
      '5) 점검일·조치 내역 메모',
      '제안: 누락 항목 1개만 골라 이번 주에 마무리.'
    ].join('\n');
    return { short: week4, full: week4, long: true };
  }
  if(byId === 'ops-y-10' || byId === 'ops-j-10'){
    var review = [
      '무엇을 하나요: 리뷰 요청/응답 SOP를 만들어 증상 키워드가 자연스럽게 누적되도록 운영합니다.',
      '어떻게 하나요:',
      '1) 요청 타이밍 정의(첫 변화 체감 시점, 3~5회차 등)',
      '2) 요청 문구 2종 준비(통증·재활형 / 웰니스형)',
      '3) 금지 표현 체크(과장·완치 뉘앙스 방지)',
      '4) 리뷰 답변 템플릿 작성(감사 + 경과 + 다음 관리 포인트)',
      '5) 주 1회 리뷰 키워드 집계(허리/목/어깨 등) 후 콘텐츠 주제에 반영',
      '제안: 요청은 길게 설명하지 말고 "핵심 변화 1개 + 생활 변화 1개"를 적어달라고 안내하면 품질이 좋아집니다.',
      '함께 기획/검토: 지점별로 어떤 리뷰 톤이 신뢰를 더 주는지(전문형/친근형) 샘플 5개 기준으로 같이 정합니다.'
    ].join('\n');
    return { short: review, full: review, long: true };
  }
  var how = '담당자 1명 지정 → 완료 기준 1줄 정의 → 실행 후 링크/증빙을 메모에 남겨 다음 사람이 바로 이어서 할 수 있게 정리합니다.';
  var suggest = '이번 주에 바로 끝낼 최소 단위 1개부터 처리하고, 완료 후 파생 작업 1개만 추가하세요.';
  var discuss = '예산·우선순위·브랜드 톤에서 애매한 점이 있으면 메모에 질문형으로 남겨 다음 회의에서 함께 결정합니다.';

  if(text.indexOf('키워드') >= 0){
    how = '지역명+증상 조합 키워드를 3~5개 고른 뒤, 각 키워드를 프로필 허브/블로그 1:1로 연결합니다. 제목·소제목·CTA에 같은 키워드를 반복해 일관성을 맞춥니다.';
    suggest = '검색량보다 전환 가능성이 높은 키워드(예: 지역+통증+재활)를 우선 선택하고, 허브 링크를 CTA에 반드시 1개 넣어 주세요.';
  } else if(text.indexOf('숨고') >= 0){
    how = '프로필 사진·경력·서비스 설명을 플레이스와 같은 톤으로 맞추고, 견적 답변 템플릿을 미리 준비합니다.';
    suggest = '「운동·웰니스 프로그램」으로 포지셔닝하고, 치료·완치 표현은 쓰지 마세요.';
  } else if(text.indexOf('당근') >= 0){
    how = '비즈프로필 개설 후 지역 인증 → 사진·소개·연락처를 넣고, 동네생활에 짧은 홍보 글 1편을 올립니다.';
    suggest = '작전 지점은 입주민·단지 톤으로, 약수는 직장인·도심 톤으로 첫 문장을 다르게 쓰세요.';
  } else if(text.indexOf('카카오') >= 0){
    how = '카카오맵 매장관리에 주소·전화·영업시간·소개·사진을 넣고, 네이버·구글과 동일하게 맞춥니다.';
    suggest = '카카오비즈니스 채널·상담이 있으면 프로필 링크도 연결하세요.';
  } else if(text.indexOf('인스타') >= 0 || text.indexOf('Threads') >= 0 || text.indexOf('유튜브') >= 0){
    how = '인스타·Threads·유튜브 통합 브랜드 계정을 신규 개설하고, 바이오에 약수·작전을 함께 안내합니다.';
    suggest = '계정 생성 후 URL을 메모에 기록하세요. Reels·Shorts는 주 1회만 꾸준히 올려도 됩니다.';
  } else if(text.indexOf('Google') >= 0 || text.indexOf('Business') >= 0){
    how = '구글 지도 프로필을 네이버 플레이스와 동일한 소개·사진·영업시간으로 맞춥니다.';
    suggest = '리뷰 답변 템플릿을 미리 만들어 두면 운영 부담이 줄어듭니다.';
  } else if(text.indexOf('플레이스') >= 0 || text.indexOf('스마트플레이스') >= 0){
    how = '플레이스 기본 정보(영업시간·전화·카테고리)를 먼저 고정하고, 한 줄·짧은 소개에 리:얼(Real + Re Alignment) · 1:1 맞춤 포지셔닝을 통일합니다.';
    suggest = '사진은 외관/내부/1:1 지도/스트레칭/상담 공간 순으로 6~10장 구성하고, 면책 문구가 빠지지 않았는지 확인하세요.';
  } else if(text.indexOf('블로그') >= 0){
    how = '주제별 카테고리를 먼저 나눈 뒤, 각 글 말미 CTA를 증상 허브 링크로 통일합니다. 글 구조는 문제 제기 → 셀프 케어 → 원리 설명 순서로 고정합니다.';
    suggest = '운영 부담을 줄이려면 주 1회 고정 발행일을 정하고, 같은 주제에서 제목만 바꾼 변형 글 2개를 미리 준비하세요.';
  } else if(text.indexOf('심의') >= 0 || text.indexOf('의료법') >= 0){
    how = '금지 표현/권장 표현 체크리스트를 먼저 만들고, 프로필·플래너·플레이스·블로그 문구를 한 번에 대조해 같은 톤으로 맞춥니다.';
    suggest = '검토 시 "치료·진단·완치" 표현이 없고, 면책 문구가 들어갔는지 최종 확인 항목으로 넣어 주세요.';
  } else if(text.indexOf('동기화') >= 0 || text.indexOf('배포') >= 0){
    how = '수정 파일 목록을 먼저 고정하고, 업로드 → 강력 새로고침 → 핵심 화면 3개 스모크 테스트 순서로 진행합니다.';
    suggest = '배포 후 실패 화면/오류 문구를 캡처해 메모에 남기면 다음 점검 시간이 크게 줄어듭니다.';
  }

  var lines = [
    '무엇을 하나요: ' + text,
    '어떻게 하나요: ' + how,
    '제안: ' + suggest,
    '함께 기획/검토: ' + discuss
  ];
  if(hint) lines.push('참고 자료: ' + hint);
  var full = lines.join('\n');
  return {
    short: lines.slice(0, 2).join('\n'),
    full: full,
    long: full.length > 210
  };
}
function buildOpsReviewDraft_(item, branchId){
  var text = String(item && item.text || '').trim();
  var byId = item && item.id ? String(item.id) : '';
  var purpose = '이 항목의 목적은 "' + text + '"을 실제 운영 문장/설정으로 확정해 어디서나 동일하게 쓰는 기준을 만드는 것입니다.';
  var intent = '리:얼(Real + Re Alignment) · 1:1 맞춤 움직임이 기본 메시지로 드러나도록 정렬합니다. 의료법 준수(면책·금지 표현)는 유지합니다.';
  var todo = '해야 할 일\n1) 기준 문장 확정\n2) 채널별 문장 확정\n3) 금지/권장 표현 확인\n4) 반영 위치 체크\n5) 반영 완료 로그 기록';
  var proposals = '제안 문장\n- 마스터: ' + OPS_BRAND_COPY.master + '\n- 리:얼 이중 의미: ' + OPS_BRAND_COPY.realDualShort + '\n- CTA: ' + OPS_BRAND_COPY.cta;
  var placement = '반영 위치 가이드\n- 프로필: 홈/FAQ/증상 가이드/결과\n- 플래너: base prompt, 의료법·GEO 문구\n- 플레이스·구글: 한 줄/짧은/상세 소개\n- 블로그: 본문 말미 CTA + 허브 링크';

  if(byId === 'ops-g-6'){
    purpose = 'Bing Webmaster Tools에 사이트맵을 제출해 허브/블로그 색인 기반을 확보합니다.';
    intent = '검색 노출 누락을 줄이고, GEO 대응을 위한 기본 색인 품질을 안정화합니다.';
    todo = '해야 할 일\n1) 사이트 소유권 인증\n2) 사이트맵 제출\n3) 색인 상태 확인\n4) 오류 URL 수정\n5) 월 1회 점검';
    proposals = '제안 문장\n- 운영 메모: Bing 제출일·색인 상태·오류 URL·조치결과를 1줄 로그로 남깁니다.';
    placement = '반영 위치 가이드\n- Webmaster 제출 기록\n- 플래너 메모(증빙 링크)\n- 월간 점검 로그';
  } else if(byId === 'ops-g-7'){
    purpose = 'Google Business Profile 지점 정보를 최신화해 지도/검색 전환을 높입니다.';
    intent = '약수·작전 지점 정보 일관성과 신뢰도를 확보합니다.';
    todo = '해야 할 일\n1) 기본 정보(시간/전화/카테고리) 점검\n2) 소개글 업데이트\n3) 사진 6~10장 정비\n4) 링크 점검\n5) 리뷰 응답 템플릿 통일';
    proposals = '제안 문장\n- 한 줄: 지점명 | 진짜 움직임, 몸의 재정렬 — 1:1 리:얼 프로그램\n- 짧은 소개: ' + OPS_BRAND_COPY.realDualShort;
    placement = '반영 위치 가이드\n- Google Business Profile 한 줄·소개글\n- 지점별 Q&A/리뷰 답변 템플릿\n- 네이버 플레이스와 문구 통일';
  } else if(byId === 'ops-g-9'){
    purpose = '블로그 시리즈를 운영 가능한 구조로 정리하고 허브 링크 CTA를 표준화합니다.';
    intent = '주제 누적과 상담 전환이 동시에 일어나도록 글 구조를 고정합니다.';
    todo = '해야 할 일\n1) 카테고리 3개 고정\n2) 주간 주제 1개 확정\n3) 문제→셀프케어→원리 구조 유지\n4) CTA 허브 링크 삽입\n5) 발행 후 반응 메모';
    proposals = '제안 문장\n- CTA: ' + OPS_BRAND_COPY.cta;
    placement = '반영 위치 가이드\n- 블로그 본문 마지막 단락\n- 블로그 템플릿/자동 프롬프트';
  } else if(byId === 'ops-y-6' || byId === 'ops-j-6'){
    var placeKey = opsPlaceBranchKey_(byId);
    var placeLabel = placeKey === 'jakjeon' ? '작전' : '약수';
    purpose = '네이버 스마트플레이스 기본 정보·소개글·키워드·사진을 ' + placeLabel + ' 지점에 맞게 정비합니다.';
    intent = '검색 첫인상과 신뢰를 만듭니다. 리:얼(Real + Re Alignment) · 1:1 맞춤 톤을 유지합니다.';
    todo = '해야 할 일\n1) 업체명·업종·전화·주소\n2) 상세설명·키워드 5개\n3) 사진 10컷\n4) 모바일 화면 확인';
    proposals = '제안 문장\n- 한 줄: ' + OPS_BRAND_COPY.oneLiner[placeKey] + '\n- 짧은 소개: ' + buildOpsShortIntro_(placeKey).replace(/\n/g, ' ');
    placement = '반영 위치 가이드\n- 네이버 스마트플레이스 상세설명·키워드·사진\n- 기본정보(주소·전화·업종)';
  } else if(byId === 'ops-y-15' || byId === 'ops-j-15' || byId === 'ops-y-16' || byId === 'ops-j-16'){
    purpose = '스마트플레이스 부가정보·가격·영업시간·예약·톡톡을 입력합니다.';
    intent = '방문 전 실무 정보와 예약 경로를 한곳에 모읍니다.';
    proposals = '제안 문장\n- 운영: ' + OPS_BRAND_COPY.hoursNote + '\n- 예약: ' + OPS_BRAND_COPY.cta;
    placement = '반영 위치 가이드\n- 스마트플레이스 부가정보·가격·휴무일·영업시간\n- 네이버 예약 상품·톡톡·스마트콜';
  } else if(byId === 'ops-y-23' || byId === 'ops-j-23'){
    purpose = '네이버 검색광고에 올릴 일반 키워드와 동네 조합을 정리하고 대량등록 CSV를 만듭니다.';
    intent = '지역×증상 검색 유입을 키워드 자산으로 쌓아 상담·예약으로 연결합니다.';
    todo = '해야 할 일\n1) 일반 키워드 검수·수정\n2) 동네명 리스트 확정\n3) 조합 미리보기\n4) 광고그룹ID·URL·입찰가\n5) CSV 다운로드·업로드';
    proposals = '제안 문장\n- 조합 예: 약수 허리통증 / 약수역 거북목교정';
    placement = '반영 위치 가이드\n- 네이버 검색광고 키워드 일괄등록\n- 광고그룹별 키워드(그룹당 최대 1000개)\n- 플래너 키워드 리스트(재다운로드용)';
  } else if(byId === 'ops-y-17' || byId === 'ops-j-17'){
    var gbpKey = opsPlaceBranchKey_(byId);
    purpose = 'Google Business Profile 지점 정보를 최신화해 지도/검색 전환을 높입니다.';
    intent = '구글 지도·검색에서 네이버와 동일한 신뢰를 줍니다.';
    proposals = '제안 문장\n- 한 줄: ' + OPS_BRAND_COPY.oneLiner[gbpKey] + '\n- 짧은 소개: ' + OPS_BRAND_COPY.realDualShort;
    placement = '반영 위치 가이드\n- Google Business Profile 소개글·사진\n- Q&A/리뷰 답변\n- 네이버 플레이스와 문구 통일';
  } else if(byId === 'ops-y-19' || byId === 'ops-j-19'){
    purpose = '숨고 프로필·서비스를 등록해 견적 문의를 받습니다.';
    intent = '1:1 운동·체형 프로그램 수요를 플랫폼에서 확보합니다.';
    proposals = '제안 문장\n- 소개: ' + OPS_BRAND_COPY.master + ' ' + OPS_BRAND_COPY.disclaimer;
    placement = '반영 위치 가이드\n- 숨고 전문가 프로필\n- 서비스 설명·견적 답변 템플릿';
  } else if(byId === 'ops-y-20' || byId === 'ops-j-20'){
    purpose = '당근마켓 비즈프로필·동네생활로 지역 고객에게 노출합니다.';
    intent = '입주민·근거리 고객에게 가볍게 알리고 문의를 받습니다.';
    proposals = '제안 문장\n- 소개: ' + buildOpsShortIntro_(opsPlaceBranchKey_(byId)).replace(/\n/g, ' ');
    placement = '반영 위치 가이드\n- 당근 비즈프로필\n- 동네생활 홍보 글';
  } else if(byId === 'ops-y-21' || byId === 'ops-j-21'){
    var pk21k = opsPlaceBranchKey_(byId);
    purpose = '카카오맵·카카오비즈니스에 매장 정보를 등록해 지도 검색·길찾기를 받습니다.';
    intent = '네이버·구글과 동일한 신뢰·정보로 카카오 지도 사용자를 커버합니다.';
    proposals = '제안 문장\n- 소개: ' + OPS_BRAND_COPY.oneLiner[pk21k];
    placement = '반영 위치 가이드\n- 카카오맵 매장관리\n- 카카오비즈니스(채널·상담)\n- 네이버·구글과 문구·사진 통일';
  } else if(byId === 'ops-y-22' || byId === 'ops-j-22'){
    purpose = '인스타·Threads·유튜브 통합 브랜드 계정을 신규 개설·세팅합니다.';
    intent = '약수·작전을 한 계정에서 소개하고 프로필로 연결합니다. 계정 URL은 생성 후 메모에 기록합니다.';
    proposals = '제안 문장\n- 인스타 바이오: ' + OPS_BRAND_COPY.master + '\n- CTA: ' + OPS_BRAND_COPY.profileUrl;
    placement = '반영 위치 가이드\n- 인스타 통합 프로필·하이라이트·Reels\n- Threads (인스타 연동)\n- 유튜브 통합 채널·Shorts 설명란';
  } else if(byId === 'ops-y-10' || byId === 'ops-j-10'){
    purpose = '리뷰 요청·응답 SOP를 만들어 증상 키워드가 자연스럽게 누적되게 합니다.';
    intent = '과장 없이 신뢰도 높은 리뷰 자산을 장기적으로 축적합니다.';
    todo = '해야 할 일\n1) 요청 타이밍 정의\n2) 요청 문구 2종 준비\n3) 금지 표현 체크\n4) 답변 템플릿 통일\n5) 주간 키워드 집계';
    proposals = '제안 문장\n- 리뷰 요청: 느낀 변화 1개와 일상에서 편해진 점 1개를 간단히 남겨주시면 다음 프로그램 안내에 큰 도움이 됩니다.';
    placement = '반영 위치 가이드\n- 메시지 템플릿\n- 리뷰 답변 템플릿\n- 운영 매뉴얼';
  } else if(byId === 'ops-g-1'){
    purpose = '브랜드 전 채널에서 동일하게 쓰는 기준 문장 세트를 완성합니다.';
    intent = '마스터 포지셔닝 1문장을 중심으로 채널별 문장을 맞추고, 이후 수정/재생성으로 문장 품질을 높입니다.';
    todo = '해야 할 일\n1) 마스터 포지셔닝 1문장 확정\n2) 채널별 적용 문구 4종 확정\n3) 금지/권장 표현 표 확정\n4) 반영 체크 로그 작성';
    placement = '반영 체크 로그\n- 프로필 홈/FAQ/결과\n- 네이버·구글 플레이스 소개글\n- 플래너 base prompt/의료법·GEO 규칙\n- 상담 결과 카드/CTA';
  } else if(byId === 'ops-g-2'){
    purpose = '의료법 준수 면책·금지 표현을 프로필·블로그·상담·플래너에 동일하게 맞춥니다.';
    intent = '의료행위 연상을 줄이고 병원 진료→프로그램 병행 흐름을 전 채널에 통일합니다.';
    todo = '해야 할 일\n1) 공통 면책 확정\n2) 허브 5개 면책 동기화\n3) 플래너 규칙 반영\n4) 블로그·상담 면책 통일\n5) 금지 표현 스캔';
    placement = '반영 위치 가이드\n- 프로필.html FAQ·허브 상하단\n- 블로그 글 말미\n- 플래너 MEDICAL_COMPLIANCE_RULE\n- 상담 결과·문진·플레이스 소개\n- 강사용 동의서·상담지';
  } else if(byId === 'ops-g-4'){
    purpose = '증상 허브 5개·FAQ·JSON-LD가 같은 URL·문장을 가리키게 점검합니다.';
    intent = 'GEO·검색에서 허브 딥링크가 상담 전환의 중심이 되게 합니다.';
    todo = '해야 할 일\n1) 허브 URL 5개 확인\n2) 허브 면책·병원 권고\n3) FAQ 5문항 대조\n4) JSON-LD 점검\n5) 블로그 CTA 샘플 테스트';
    placement = '반영 위치 가이드\n- 프로필.html ?hub=back|neck|shoulder|knee|pelvis\n- JSON-LD FAQPage·MedicalWebPage\n- 블로그 말미 CTA\n- 플래너 증상 허브 프롬프트';
  } else if(byId === 'ops-g-11'){
    purpose = '강사용·프로필·플래너 URL·배포 버전을 맞추고 누락을 점검합니다.';
    intent = '수정 후에도 구버전 캐시·링크 오타로 운영이 끊기지 않게 합니다.';
    todo = '해야 할 일\n1) URL 목록 확정\n2) 파일 업로드\n3) 강력 새로고침\n4) 스모크 테스트 3항\n5) 배포 로그 기록';
    placement = '반영 위치 가이드\n- GitHub Pages / 호스팅\n- planner-sw.js 캐시\n- 채널별 홈페이지·블로그 링크 필드';
  } else if(byId === 'ops-y-7' || byId === 'ops-j-7'){
    var pk7l = opsPlaceBranchKey_(byId) === 'jakjeon' ? '작전' : '약수';
    purpose = '네이버 블로그 ' + pk7l + ' 오시는 길 글을 플레이스·프로필과 맞춥니다.';
    intent = '방문 전 길찾기·주차 정보를 검색에서 바로 찾게 합니다.';
    placement = '반영 위치 가이드\n- 네이버 블로그 지점 안내 카테고리\n- 스마트플레이스 찾아오기\n- 프로필 지점 안내';
  } else if(byId === 'ops-y-8' || byId === 'ops-j-8'){
    purpose = '프로필·홈페이지에 지점 링크·문구를 반영합니다.';
    intent = '지점별 주소·전화·오시는 길이 프로필과 채널에서 일치하게 합니다.';
    placement = '반영 위치 가이드\n- 프로필.html 지점 안내\n- 플레이스·구글 홈페이지 링크\n- 블로그 소개·지점 글';
  } else if(byId === 'ops-y-9' || byId === 'ops-j-9'){
    purpose = '지역×증상 롱테일 키워드를 정하고 허브·블로그를 연결합니다.';
    intent = '검색 의도가 높은 키워드로 상담 전환을 높입니다.';
    placement = '반영 위치 가이드\n- 블로그 제목·본문·CTA\n- 프로필 증상 허브\n- 플래너 SEO 키워드 메모';
  } else if(byId === 'ops-y-11' || byId === 'ops-j-11'){
    purpose = '오프라인 안내판·명함·상담지·동의서를 브랜드 톤에 맞게 정비합니다.';
    intent = '방문 고객이 오프라인에서도 동일한 신뢰·면책을 경험하게 합니다.';
    placement = '반영 위치 가이드\n- 명함·안내판 인쇄물\n- 상담지·동의서(강사용)\n- 매장 내 안내 스티커';
  } else if(byId === 'ops-y-14' || byId === 'ops-j-14'){
    purpose = '오픈 4주 후 플레이스·리뷰·채널을 점검합니다.';
    intent = '초기 누락·구버전을 잡고 운영 리듬을 고정합니다.';
    placement = '반영 위치 가이드\n- 네이버·구글·카카오 플레이스\n- 숨고·당근·SNS\n- 리뷰 답변·허브 링크';
  }

  var brief = opsPurposeIntent_(purpose, intent);
  var proposalItems = buildOpsProposalItemsForId_(byId, item, branchId);
  if(!proposalItems){
    var proposalText = proposals.replace(/^제안 문장[^\n]*\n?/, '').trim().replace(/^\-\s*/, '');
    var colonIdx = proposalText.indexOf(':');
    var sentence = colonIdx >= 0 ? proposalText.slice(colonIdx + 1).trim() : proposalText;
    proposalItems = [{
      id:'main',
      title:'제안 문장',
      brief: brief,
      text: opsProposalWithReason_(sentence, '이 제안은 위 목적·의도에 맞게 바로 적용할 수 있도록 정리한 문장입니다.')
    }];
  }
  var placementChecks = String(placement || '')
    .split('\n')
    .map(function(l){ return l.replace(/^\-\s*/, '').trim(); })
    .filter(function(l){ return l && l.indexOf('반영') !== 0 && l.indexOf('위치') !== 0; })
    .map(function(label, i){ return { id: 'c' + (i + 1), label: label, done: false }; });
  return {
    brief: brief,
    proposalItems: proposalItems,
    placementChecks: placementChecks
  };
}
function stripOpsTodoFromBrief_(s){
  s = String(s || '');
  var idx = s.indexOf('해야 할 일');
  if(idx >= 0) s = s.slice(0, idx).trim();
  return s;
}
function normalizeOpsProposalItem_(saved, base){
  var b = base || {};
  var brief = String((saved && saved.brief) || b.brief || '').trim() || String(b.brief || '');
  var text = String((saved && saved.text) || b.text || '');
  if(brief && brief.indexOf('해야 할 일') >= 0) brief = stripOpsTodoFromBrief_(brief);
  if(text && text.indexOf('이유:') < 0 && text.indexOf('제안 문장:') < 0 && String(b.text || '').indexOf('이유:') >= 0){
    text = String(b.text || text);
  } else if(text && text.indexOf('이유:') < 0 && text.trim()){
    text = '제안 문장: ' + text.trim() + (String(b.text || '').indexOf('이유:') >= 0 ? '\n이유: ' + String(b.text).split('이유:').pop().trim() : '');
  }
  return {
    id: String((saved && saved.id) || b.id || 'main'),
    title: String((saved && saved.title) || b.title || '제안 문장'),
    brief: brief,
    text: text,
    pinned: !!(saved && saved.pinned),
    done: !!(saved && saved.done)
  };
}
function splitOpsG1LegacyProposalText_(raw, baseItems){
  var text = String(raw || '');
  if(text.indexOf('[마스터') < 0 && text.indexOf('제안 문장 세트') < 0) return null;
  var keys = [
    { id:'master', re: /\[마스터[^\]]*\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'real-dual', re: /\[리:얼[^\]]*\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'profile', re: /\[프로필용\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'blog', re: /\[블로그용\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'cta', re: /\[상담[^\]]*\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'prompt', re: /\[플래너[^\]]*\]\s*([\s\S]*?)(?=\n\n\[|$)/ },
    { id:'lexicon', re: /\[금지\/권장\]\s*([\s\S]*?)$/ }
  ];
  var byId = {};
  baseItems = baseItems || [];
  baseItems.forEach(function(b){ byId[String(b.id)] = b; });
  var out = [];
  keys.forEach(function(k){
    var m = text.match(k.re);
    var base = byId[k.id] || {};
    var sentence = m && m[1] ? m[1].trim() : '';
    if(!sentence) return;
    var wrapped = sentence.indexOf('이유:') >= 0 ? sentence : opsProposalWithReason_(sentence.replace(/^제안 문장:\s*/, ''), (String(base.text || '').split('이유:')[1] || '채널 특성에 맞게 다듬은 문장입니다.').trim());
    out.push(normalizeOpsProposalItem_({ id: k.id, title: base.title, brief: base.brief, text: wrapped }, base));
  });
  return out.length ? out : null;
}
function opsProposalWithReason_(sentence, reason){ return '제안 문장: ' + sentence + '\n이유: ' + reason; }
function parseOpsProposalParts_(text){
  var raw = String(text || '');
  if(raw.indexOf('제안 문장:') >= 0){
    var split = raw.split(/\n이유:\s*/);
    return {
      sentence: split[0].replace(/^제안 문장:\s*/, '').trim(),
      reason: split.slice(1).join('이유: ').trim()
    };
  }
  return { sentence: raw.trim(), reason: '' };
}
function formatOpsProposalPreviewInnerHTML_(text){
  var parts = parseOpsProposalParts_(text);
  if(!parts.sentence) return '<span class="ops-proposal-preview-empty">제안 문장을 입력하세요</span>';
  var html = '<strong class="ops-proposal-sentence">' + escapeHtml(parts.sentence).replace(/\n/g, '<br>') + '</strong>';
  if(parts.reason) html += '<div class="ops-proposal-reason">이유: ' + escapeHtml(parts.reason).replace(/\n/g, '<br>') + '</div>';
  return html;
}
function syncOpsProposalPreview_(textarea){
  if(!textarea) return;
  var field = textarea.closest('.ops-proposal-field');
  if(!field) return;
  var preview = field.querySelector('.ops-proposal-preview');
  if(preview) preview.innerHTML = formatOpsProposalPreviewInnerHTML_(textarea.value);
}
function focusOpsProposalTextarea_(previewEl){
  if(!previewEl) return;
  var field = previewEl.closest('.ops-proposal-field');
  if(!field) return;
  field.classList.add('is-editing');
  var ta = field.querySelector('textarea[data-ops-text]');
  if(!ta) return;
  if(typeof autoGrowTextarea_ === 'function') autoGrowTextarea_(ta);
  ta.focus();
  var len = ta.value.length;
  try { ta.setSelectionRange(len, len); } catch(e) {}
}
function blurOpsProposalTextarea_(textarea){
  if(!textarea) return;
  setTimeout(function(){
    var field = textarea.closest('.ops-proposal-field');
    if(!field) return;
    if(field.contains(document.activeElement)) return;
    field.classList.remove('is-editing');
    syncOpsProposalPreview_(textarea);
  }, 120);
}
window.syncOpsProposalPreview_ = syncOpsProposalPreview_;
window.focusOpsProposalTextarea_ = focusOpsProposalTextarea_;
window.blurOpsProposalTextarea_ = blurOpsProposalTextarea_;
function normalizeOpsProposalItems_(itemId, savedItems, baseItems){
  baseItems = baseItems || [];
  savedItems = Array.isArray(savedItems) ? savedItems : [];
  if(itemId === 'ops-g-1' && savedItems.length === 1 && savedItems[0]){
    var split = splitOpsG1LegacyProposalText_(savedItems[0].text, baseItems);
    if(split) return split;
  }
  if(itemId === 'ops-g-1' && savedItems.length === 1 && savedItems[0] && savedItems[0].id === 'main'){
    savedItems = (baseItems || []).map(function(b, i){
      var s = savedItems[0] || {};
      return normalizeOpsProposalItem_(i === 0 ? { id: b.id, title: b.title, text: s.text || b.text, brief: s.brief || b.brief, pinned: s.pinned, done: s.done } : null, b);
    });
  }
  if(savedItems.length === 1 && savedItems[0] && savedItems[0].id === 'main' && baseItems.length > 1){
    savedItems = [];
  }
  var byId = {};
  savedItems.forEach(function(s){ if(s && s.id) byId[String(s.id)] = s; });
  var merged = baseItems.map(function(b){
    return normalizeOpsProposalItem_(byId[String(b.id)] || null, b);
  });
  if(!merged.length && savedItems.length){
    merged = savedItems.map(function(s){ return normalizeOpsProposalItem_(s, null); });
  }
  return merged;
}
function ensureOpsReviewState_(item, branchId){
  var om = getOpsManualState_();
  if(!om.review || typeof om.review !== 'object') om.review = {};
  var id = String(item.id || '');
  if(!id) return null;
  var base = buildOpsReviewDraft_(item, branchId);
  if(!om.review[id] || typeof om.review[id] !== 'object'){
    om.review[id] = {
      open: false,
      fields: { brief: base.brief || '' },
      proposalItems: (base.proposalItems || []).map(function(p){ return normalizeOpsProposalItem_(null, p); }),
      placementChecks: (base.placementChecks || []).map(function(c){ return { id: c.id, label: c.label, done: false }; }),
      pinned: { brief: false }
    };
  } else {
    if(!om.review[id].fields) om.review[id].fields = {};
    if(!om.review[id].pinned) om.review[id].pinned = { brief: false };
    if(!String(om.review[id].fields.brief || '').trim()){
      var legacyBrief = [om.review[id].fields.purpose, om.review[id].fields.intent, om.review[id].fields.todo].filter(Boolean).join('\n');
      om.review[id].fields.brief = legacyBrief || base.brief || '';
    }
    if(!Array.isArray(om.review[id].proposalItems) || !om.review[id].proposalItems.length){
      var legacyProposal = String(om.review[id].fields.proposals || '').trim();
      if(legacyProposal){
        om.review[id].proposalItems = normalizeOpsProposalItems_(id, [{ id:'main', title:'제안 문장', text: legacyProposal, pinned: false, done: false }], base.proposalItems);
      } else {
        om.review[id].proposalItems = (base.proposalItems || []).map(function(p){ return normalizeOpsProposalItem_(null, p); });
      }
    } else {
      om.review[id].proposalItems = normalizeOpsProposalItems_(id, om.review[id].proposalItems, base.proposalItems);
    }
    if(!Array.isArray(om.review[id].placementChecks) || !om.review[id].placementChecks.length){
      om.review[id].placementChecks = (base.placementChecks || []).map(function(c){ return { id: c.id, label: c.label, done: false }; });
    }
  }
  return om.review[id];
}
function syncOpsReviewItemComplete_(itemId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  if(!om.checked || typeof om.checked !== 'object') om.checked = {};
  if(!om.checkedAt) om.checkedAt = {};
  var rv = om.review[itemId];
  var proposalsDone = !(rv.proposalItems || []).length || (rv.proposalItems || []).every(function(p){ return !!p.done; });
  var placementsDone = !(rv.placementChecks || []).length || (rv.placementChecks || []).every(function(c){ return !!c.done; });
  if(proposalsDone && placementsDone){
    om.checked[itemId] = true;
    om.checkedAt[itemId] = new Date().toISOString();
  } else {
    om.checked[itemId] = false;
    om.checkedAt[itemId] = new Date().toISOString();
  }
}
function regenerateOpsReviewText_(fieldName, current, base){
  var cur = String(current || '').trim();
  var b = String(base || '').trim();
  if(!cur) return b;
  if(fieldName === 'brief' && cur.indexOf('\n') < 0){
    return cur + '\n의도: 위 목적에 맞게 팀과 함께 검토해 다듬습니다.';
  }
  if(fieldName.indexOf('proposal:') === 0 && cur.length < b.length) return cur + '\n\n[보강]\n' + b;
  if(cur.length < Math.max(40, b.length * 0.45)){
    return cur + '\n\n보강 제안: ' + b;
  }
  return cur;
}
const OPS_MANUAL_SECTIONS = [
  { id: 'ops-g-brand', branch: 'global', phase: '브랜딩 기반', items: [
    opsBranchItem_('ops-g-1', '포지셔닝 문장 확정 — 근골격·움직임 전문가 · 1:1 리:얼(Re Alignment) 프로그램',
      opsItemPurpose_('전 채널이 같은 한 문장·톤을 말하게 합니다.', '근골격·움직임 전문가 · 1:1 리:얼이 검색·상담·콘텐츠마다 흔들리지 않게 합니다.')),
    opsBranchItem_('ops-g-2', '의료법 준수 문구·면책 — 프로필·블로그·상담 결과·플래너 프롬프트 동기화',
      opsItemPurpose_('의료법·광고 심의 경계를 전 채널에 동일하게 맞춥니다.', '면책·금지 표현·병원 권고가 프로필·블로그·상담·AI 생성에 한 벌로 적용되게 합니다.')),
    opsBranchItem_('ops-g-4', '프로필 증상 허브 5개 + FAQ·JSON-LD — 허리·목·어깨·무릎·골반',
      opsItemPurpose_('증상별 안내 허브 5개와 FAQ·검색 노출을 점검합니다.', '허리·목·어깨·무릎·골반이 같은 URL·문장으로 연결되게 합니다.')),
    opsBranchItem_('ops-g-9', '네이버 블로그 시리즈·카테고리·지점 안내 글 구조 정리',
      opsItemPurpose_('블로그 카테고리·글 구조·발행 리듬을 고정합니다.', '플래너 초안과 맞는 시리즈·말미 CTA·지점 안내 글이 운영 가능한 틀로 정리되게 합니다.')),
    opsBranchItem_('ops-g-11', '강사용·프로필·플래너 URL·동기화·배포 버전 점검',
      opsItemPurpose_('공개 URL·배포 파일·버전을 한곳에서 점검합니다.', '강사용·프로필·플래너 링크 오타·구버전 캐시를 배포 때마다 확인합니다.'))
  ]},
  { id: 'ops-y-online', branch: 'yaksu', phase: '1. 온라인 필수', items: buildOpsBranchOnlineItems_('ops-y', 'yaksu') },
  { id: 'ops-y-search', branch: 'yaksu', phase: '2. 검색·연결', items: buildOpsBranchSearchItems_('ops-y', 'yaksu') },
  { id: 'ops-y-open', branch: 'yaksu', phase: '3. 운영', items: buildOpsBranchOpsItems_('ops-y') },
  { id: 'ops-j-online', branch: 'jakjeon', phase: '1. 온라인 필수', items: buildOpsBranchOnlineItems_('ops-j', 'jakjeon') },
  { id: 'ops-j-search', branch: 'jakjeon', phase: '2. 검색·연결', items: buildOpsBranchSearchItems_('ops-j', 'jakjeon') },
  { id: 'ops-j-open', branch: 'jakjeon', phase: '3. 운영', items: buildOpsBranchOpsItems_('ops-j') },
  { id: 'ops-n-plan', branch: 'new', phase: '1. 후보·기획', items: [
    opsBranchItem_('ops-n-1', '지역 후보·상권 조사 — 지점명·경쟁·임대료·상권 메모',
      opsItemPurpose_('신규 지점 후보 지역·상권을 조사·기록합니다.', '지점명·경쟁·임대료·타깃을 한곳에 모아 오픈 결정에 씁니다.')),
    opsBranchItem_('ops-n-2', '타깃 고객·프로그램 믹스 (병원 연계 vs 웰니스 비중)',
      opsItemPurpose_('신규 지점의 핵심 고객·프로그램 비중을 정합니다.', '병원 연계 vs 웰니스 비중을 미리 맞춰 메시지·공간을 설계합니다.')),
    opsBranchItem_('ops-n-4', '법인·계약·보험·소음·주차 등 리스크 체크',
      opsItemPurpose_('오픈 전 법·계약·운영 리스크를 점검합니다.', '소음·주차·보험 등 현장 이슈를 미리 파악합니다.'))
  ]},
  { id: 'ops-n-brand', branch: 'new', phase: '2. 오픈 준비', items: [
    opsBranchItem_('ops-n-6', '플레이스·블로그·프로필용 지점 소개 초안',
      opsItemPurpose_('오픈 전 지점 소개 문구 초안을 만듭니다.', '플레이스·블로그·프로필에 같은 톤으로 쓸 수 있게 합니다.')),
    opsBranchItem_('ops-n-7', '지역×증상 SEO 키워드 5개 선정',
      opsItemPurpose_('신규 지역×증상 SEO 키워드를 미리 선정합니다.', '오픈 후 블로그·플레이스·허브 링크에 바로 연결합니다.')),
    opsBranchItem_('ops-n-8', '오픈 전 콘텐츠 4편 주제 (플래너에서 작성)',
      opsItemPurpose_('오픈 전에 미리 쓸 블로그·채널 주제 4개를 정합니다.', '플래너에서 초안을 만들어 오픈 직후 발행 리듬을 잡습니다.')),
    opsBranchItem_('ops-n-9', '인테리어·사진 컨셉 10컷 리스트',
      opsItemPurpose_('매장·프로그램 사진 10컷 콘셉트를 정합니다.', '플레이스·SNS·블로그에 쓸 사진 방향을 미리 맞춥니다.'))
  ]},
  { id: 'ops-n-open', branch: 'new', phase: '3. 런칭', items: [
    opsBranchItem_('ops-n-11', '약수·작전 체크리스트 복제 → 일정에 맞게 조정',
      opsItemPurpose_('기존 지점 체크리스트를 복제해 신규 일정에 맞춥니다.', '누락 없이 오픈·4주 점검까지 이어지게 합니다.'))
  ]},
];

/** 카테고리별 프로그램 라인 (미카닥 박준규 · Re:Al 등) */
const CAT_PROGRAM_LINE = {
  0: '미카닥 박준규 · 도수치료',
  1: 'Re:Al Movement',
  2: 'Re:Al Face',
  3: '미카닥 박준규 · CMT 전문가',
  4: '미카닥 박준규 · IFC 전문가',
  5: 'Re:Al Movement · 전문가',
  6: '미카닥 박준규 · 일상',
  7: '힐자계 · 입주민'
};
const CAT_DEFAULT_SERIES = {
  0: 'PSP · 도수 이해',
  1: 'PAR · Re:Al Movement',
  2: '작은얼굴 · 구조 교정',
  3: 'CMT · 임상 노트',
  4: 'IFC · 얼굴 구조',
  5: 'Movement · 교육 핵심',
  6: '일상 나눔',
  7: '힐자계 · 셀프 케어'
};
const CAT_DEFAULT_PILLAR = {
  0: 'PSP · 구조→기능',
  1: 'Re:Al Movement · PAR',
  2: 'Re:Al Face · 구조 교정',
  3: '전문가 · 평가-치료',
  4: '전문가 · 구조 접근',
  5: 'Re:Al Movement · PAR',
  6: '신뢰 · 과장 없는 설명',
  7: '입주민 · 가벼운 셀프 케어'
};

/** 썸네일 상단 고정 멘트 (브랜드 · 프로그램) */
const CAT_IMAGE_THUMBNAIL_FIXED = {
  0: { brand: '리얼무브먼트', program: '도수치료 · PSP' },
  1: { brand: '리얼무브먼트', program: 'Re:Al Movement · PAR' },
  2: { brand: '리얼무브먼트', program: 'Re:Al Face · 구조 교정' },
  3: { brand: '미카닥 박준규', program: 'CMT · 임상 노트' },
  4: { brand: '미카닥 박준규', program: 'IFC · 얼굴 구조' },
  5: { brand: '미카닥 박준규', program: 'Re:Al Movement · 전문가' },
  6: { brand: '미카닥 박준규', program: '일상' },
  7: { brand: '힐자계', program: '입주민 셀프 케어' }
};
/** 썸네일 여백 밴드 색 (영문 프롬프트용) */
const CAT_IMAGE_BAND_COLOR_EN = {
  0: 'deep charcoal top and bottom bands with subtle teal accent',
  1: 'off-white and mint green top and bottom bands',
  2: 'warm rose and soft cream top and bottom bands',
  3: 'deep navy and muted purple top and bottom bands',
  4: 'burgundy rose and soft gray top and bottom bands',
  5: 'sky blue and charcoal top and bottom bands',
  6: 'soft warm gray top and bottom bands',
  7: 'light warm beige bands, apartment documentary feel'
};
/** 썸네일 중앙 비주얼 힌트 (영문) */
const CAT_IMAGE_THUMBNAIL_SCENE_EN = {
  0: 'close-up neck shoulder or lower back, gentle hands-on demonstration, documentary wellness clinic, natural shadows, visible skin texture',
  1: 'single exercise pose on yoga mat side view, movement studio, clear body alignment, athletic modest clothing',
  2: 'face jawline and neck close-up near window, natural skin texture, lifestyle editorial not beauty ad',
  3: 'hands-on palpation or joint mobilization demo, seminar room or clinic table, professional modest attire',
  4: 'cervical jaw assessment hand placement, clinical studio, structural approach not spa massage',
  5: 'P-ROM or functional movement demo on mat, education classroom, practitioner demonstrating',
  6: 'everyday slice of life coffee window rain walking shoes, no medical diagram, phone-photo realism',
  7: 'Korean apartment hallway or living room, relatable resident mood, not a sales ad'
};

function getCatImageThumbnailFixed_(catId){
  var id = parseInt(catId, 10);
  if(isNaN(id) || !CAT_IMAGE_THUMBNAIL_FIXED[id]) return CAT_IMAGE_THUMBNAIL_FIXED[1];
  return CAT_IMAGE_THUMBNAIL_FIXED[id];
}

function buildImageOverlayHookFromContent_(content){
  if(!content) return '';
  if(content.blog){
    var b = content.blog;
    if(b.title && String(b.title).trim()) return String(b.title).trim();
    if(b.hook && String(b.hook).trim()) return String(b.hook).trim();
  }
  if(content.community){
    var c = content.community;
    if(c.title && String(c.title).trim()) return String(c.title).trim();
  }
  return '';
}

function isGptVisualThumbnail_(item, idx, list){
  if(!item) return false;
  var isThumb = item.role === 'thumbnail' ||
    /썸네일|thumbnail/i.test(String(item.title || '')) ||
    (/①/.test(String(item.title || '')) && !/②|동작|본문|시연|셀프/i.test(String(item.title || '')));
  if(!isThumb && idx === 0 && list && list.length === 2){
    var second = list[1];
    if(second && (/동작|본문|시연|셀프|②/i.test(String(second.title || '')) || second.role === 'body')){
      isThumb = true;
    }
  }
  return isThumb;
}

/** 블로그·게시판 제목 변경 시 썸네일 overlayHook 동기화 */
function syncThumbnailOverlayHook_(content, catId){
  if(!content || !content.images || !content.images.gptVisuals) return content;
  var hook = buildImageOverlayHookFromContent_(content);
  if(!hook) return content;
  var list = content.images.gptVisuals;
  list.forEach(function(item, idx){
    if(isGptVisualThumbnail_(item, idx, list)) item.overlayHook = hook;
  });
  return content;
}

function enrichImageOverlays_(content, catId){
  if(!content || !content.images || !content.images.gptVisuals) return content;
  var fixed = getCatImageThumbnailFixed_(catId);
  var hook = buildImageOverlayHookFromContent_(content);
  content.images.gptVisuals.forEach(function(item, idx){
    if(!item) return;
    var isThumb = isGptVisualThumbnail_(item, idx, content.images.gptVisuals);
    if(isThumb){
      item.role = 'thumbnail';
      if(!item.overlayFixedLine1) item.overlayFixedLine1 = fixed.brand;
      if(!item.overlayFixedLine2) item.overlayFixedLine2 = fixed.program;
      if(!item.overlayHook && hook) item.overlayHook = hook;
    } else {
      item.role = item.role || 'body';
    }
  });
  return content;
}

function buildImageGptVisualsJsonExample_(catId, opts){
  opts = opts || {};
  var fixed = getCatImageThumbnailFixed_(catId);
  var bodyTitle = opts.expert
    ? '② 본문 시연·교육 동작'
    : (parseInt(catId, 10) === 7 ? '② 본문 셀프 동작' : '② 본문 셀프케어 동작');
  var hookHint = parseInt(catId, 10) === 7
    ? 'community.title과 동일한 후킹 한 줄'
    : 'blog.title과 동일한 후킹 한 줄';
  return `"images": {
"gptVisuals": [
{"role":"thumbnail","title":"① 썸네일 1:1","overlayFixedLine1":"${fixed.brand}","overlayFixedLine2":"${fixed.program}","overlayHook":"${hookHint}","prompt":"영문 단일 문자열. 위 [이미지 2장] ① 썸네일 규칙대로 주제에 맞게 새로 작성."},
{"role":"body","title":"${bodyTitle}","prompt":"영문 단일 문자열. 위 [이미지 2장] ② 본문 규칙대로 본문 동작·시연과 일치하게 새로 작성."}
]
}`;
}
const SUBGOAL_MISC_ID = 'misc';
const SUBGOAL_MISC_LABEL = '기타 주제';
const PENDING_SUBGOAL_SS_KEY = 'ht_pending_subgoal_plan';
const PENDING_YEAR_SS_KEY = 'ht_pending_year_plan';
function sameCatId_(a, b){
  if(a == null || b == null) return false;
  var na = Number(a);
  var nb = Number(b);
  if(isNaN(na) || isNaN(nb)) return String(a) === String(b);
  return na === nb;
}
function normalizePendingCatId_(catId){
  var n = Number(catId);
  return isNaN(n) ? catId : n;
}
const SUBGOAL_PLAN_GEN_ESTIMATE_SEC = 55;
const YEAR_PLAN_GEN_ESTIMATE_SEC = 40;
const TOPIC_FIVE_ESTIMATE_SEC = 25;
const TOPIC_ONE_ESTIMATE_SEC = 14;
const TOPIC_REGEN_ESTIMATE_SEC = 20;
const FLOW_PROPOSAL_ESTIMATE_SEC = 42;
const SHEET_FIELD_REGEN_ESTIMATE_SEC = 18;
const ADD_DRAFT_TOPIC_ESTIMATE_SEC = 38;
const ADD_DRAFT_FULL_ESTIMATE_SEC = 95;
var plannerWaitUiTimer_ = null;
var activeButtonCountdowns_ = [];

function getCountdownSec_(startedAt, estimateSec){
  return Math.max(0, (estimateSec || 0) - Math.floor((Date.now() - (startedAt || Date.now())) / 1000));
}
function formatCountdownShort_(leftSec){
  leftSec = Math.max(0, Math.ceil(leftSec));
  return leftSec <= 0 ? '거의 다 됐어요…' : ('약 ' + leftSec + '초');
}
function formatCountdownLong_(leftSec){
  leftSec = Math.max(0, Math.ceil(leftSec));
  return leftSec <= 0 ? '거의 다 됐어요…' : ('약 ' + leftSec + '초 남음');
}
function buttonCountdownText_(busyLabel, leftSec){
  var label = busyLabel || '재생성 중';
  if(leftSec <= 0) return label + ' · 마무리 중…';
  return label + ' · 약 ' + formatRoughCountdown(leftSec);
}
function startButtonCountdown_(btn, opts){
  if(!btn) return;
  opts = opts || {};
  var estSec = opts.estimateSec || 20;
  if(!btn.getAttribute('data-planner-idle')){
    btn.setAttribute('data-planner-idle', opts.idleText != null ? opts.idleText : btn.textContent);
  }
  activeButtonCountdowns_.push({
    btn: btn,
    endMs: Date.now() + estSec * 1000,
    idleText: btn.getAttribute('data-planner-idle'),
    busyLabel: opts.busyLabel || opts.label || '재생성 중'
  });
  btn.disabled = true;
  tickButtonCountdowns_();
  ensurePlannerWaitTimer_();
}
function startButtonsCountdownBySelector_(selector, opts){
  if(!selector) return;
  document.querySelectorAll(selector).forEach(function(btn){
    startButtonCountdown_(btn, opts);
  });
}
function stopButtonCountdown_(btn){
  if(!btn) return;
  activeButtonCountdowns_ = activeButtonCountdowns_.filter(function(w){
    if(w.btn !== btn) return true;
    if(document.body.contains(btn)){
      btn.disabled = false;
      btn.textContent = btn.getAttribute('data-planner-idle') || w.idleText || '';
      btn.removeAttribute('data-planner-idle');
    }
    return false;
  });
  stopPlannerWaitTimerIfIdle_();
}
function stopButtonsCountdownBySelector_(selector){
  if(!selector) return;
  document.querySelectorAll(selector).forEach(function(btn){ stopButtonCountdown_(btn); });
}
function tickButtonCountdowns_(){
  activeButtonCountdowns_ = activeButtonCountdowns_.filter(function(w){
    if(!w.btn || !document.body.contains(w.btn)) return false;
    var leftSec = (w.endMs - Date.now()) / 1000;
    w.btn.disabled = true;
    w.btn.textContent = buttonCountdownText_(w.busyLabel, leftSec);
    return true;
  });
}
function isAnyPlannerWaitActive_(){
  return !!(state.yearPlanGenerating || state.subGoalPlanGenerating || state.plannerAiWait || activeButtonCountdowns_.length);
}
function ensurePlannerWaitTimer_(){
  if(plannerWaitUiTimer_) return;
  plannerWaitUiTimer_ = setInterval(tickPlannerWaitUi_, 1000);
}
function stopPlannerWaitTimerIfIdle_(){
  if(!isAnyPlannerWaitActive_()){
    if(plannerWaitUiTimer_){
      clearInterval(plannerWaitUiTimer_);
      plannerWaitUiTimer_ = null;
    }
  }
}
function startPlannerAiWait_(opts){
  opts = opts || {};
  state.plannerAiWait = {
    startedAt: Date.now(),
    estimateSec: opts.estimateSec || 20,
    label: opts.label || '',
    busyLabel: opts.busyLabel || '재생성 중',
    statusElId: opts.statusElId || null,
    btnSelector: opts.btnSelector || null,
    btnIdleText: opts.btnIdleText || null,
    regenDraftId: opts.regenDraftId || null
  };
  ensurePlannerWaitTimer_();
  tickPlannerWaitUi_();
}
function stopPlannerAiWait_(opts){
  opts = opts || {};
  var w = state.plannerAiWait;
  state.plannerAiWait = null;
  if(w){
    if(w.btnSelector && w.btnIdleText){
      document.querySelectorAll(w.btnSelector).forEach(function(btn){
        btn.disabled = false;
        btn.textContent = btn.getAttribute('data-planner-idle') || w.btnIdleText;
        btn.removeAttribute('data-planner-idle');
      });
    }
    if(w.statusElId && !opts.keepStatus){
      var el = document.getElementById(w.statusElId);
      if(el) el.textContent = '';
    }
    if(w.regenDraftId){
      var rb = document.querySelector('.ws-item-btn[data-regen-draft="' + w.regenDraftId + '"]');
      if(rb){ rb.disabled = false; rb.textContent = '재생성'; rb.classList.remove('generating'); }
      var mini = document.querySelector('.draft-card-refresh-mini[data-regen-draft="' + w.regenDraftId + '"]');
      if(mini){ mini.disabled = false; mini.textContent = '주제 변경'; }
    }
  }
  stopPlannerWaitTimerIfIdle_();
}
function tickPlannerWaitUi_(){
  if(state.yearPlanGenerating){
    var leftY = getCountdownSec_(state.yearPlanGenerating.startedAt, state.yearPlanGenerating.estimateSec);
    var elY = document.getElementById('plan-strip-year-label');
    if(elY) elY.textContent = '1년 기획 중 · ' + formatCountdownShort_(leftY);
  }
  if(state.subGoalPlanGenerating){
    var leftP = getCountdownSec_(state.subGoalPlanGenerating.startedAt, state.subGoalPlanGenerating.estimateSec);
    var elP = document.getElementById('plan-strip-program-label');
    if(elP) elP.textContent = '프로그램 기획 중 · ' + formatCountdownShort_(leftP);
    var waitEl = document.getElementById('program-setup-wait');
    if(waitEl) waitEl.textContent = '기획 중 · ' + formatCountdownShort_(leftP) + ' · 상단 배너를 눌러 열 수 있어요';
  }
  var gen = state.yearPlanGenerating || state.subGoalPlanGenerating;
  if(gen){
    var leftG = getCountdownSec_(gen.startedAt, gen.estimateSec);
    var cd = document.getElementById('ws-gen-countdown');
    var bar = document.getElementById('ws-gen-progress');
    if(cd) cd.textContent = formatCountdownLong_(leftG);
    if(bar){
      var elapsed = gen.estimateSec - leftG;
      bar.style.width = Math.min(98, Math.round((elapsed / gen.estimateSec) * 100)) + '%';
    }
    if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
  }
  var w = state.plannerAiWait;
  if(w){
    var leftW = getCountdownSec_(w.startedAt, w.estimateSec);
    var cdShort = formatCountdownShort_(leftW);
    var cdBtn = buttonCountdownText_(w.busyLabel, leftW);
    if(w.statusElId){
      var sel = document.getElementById(w.statusElId);
      if(sel) sel.textContent = (w.label ? w.label + ' · ' : '') + cdShort;
    }
    if(w.btnSelector){
      document.querySelectorAll(w.btnSelector).forEach(function(btnW){
        if(!btnW.getAttribute('data-planner-idle')) btnW.setAttribute('data-planner-idle', btnW.textContent);
        btnW.disabled = true;
        btnW.textContent = cdBtn;
      });
    }
    if(w.regenDraftId){
      var rb2 = document.querySelector('.ws-item-btn[data-regen-draft="' + w.regenDraftId + '"]');
      if(rb2){ rb2.disabled = true; rb2.textContent = cdBtn; rb2.classList.add('generating'); }
      var mini2 = document.querySelector('.draft-card-refresh-mini[data-regen-draft="' + w.regenDraftId + '"]');
      if(mini2){ mini2.disabled = true; mini2.textContent = cdBtn; }
    }
  }
  tickButtonCountdowns_();
  stopPlannerWaitTimerIfIdle_();
}

const PERSONAL_BRAND_LABEL = '미카닥 박준규';
const MASTER_BRAND_NORTH_STAR = '「왜」를 설명하는 근골격계 전문가 — PSP 순서·과장 없는 20년 임상으로 신뢰를 쌓는다.';
const BRAND_DUAL_LAYER_HINT = '1년 기획 = 마스터 브랜드(누구·왜·신뢰). 각 프로그램 탭 = 독자별 3개월 여정. 개인 색깔(PSP·왜·과장 없음)은 모든 프로그램에 같은 렌즈로 녹인다.';
/** 프로그램 탭별 3개월 후 독자 상태 (마스터 브랜드를 독자·프로그램에 맞게 구체화) */
const CATEGORY_THREE_MONTH_OUTCOME = {
  '0': '통증을 부위가 아니라 구조·연부조직으로 이해하고, 치료·운동 순서(why first)를 납득한다.',
  '1': 'PAR·Position으로 스스로 움직임·자세를 조절하고, 일상 동작·보행에 연결한다.',
  '2': '얼굴·비대칭을 경축·골격 구조로 이해하고, 기대치를 현실적으로 잡는다.',
  '3': '평가(촉진·History)가 치료보다 먼저임을 체득하고, 임상 사고·치료 순서를 갖춘다.',
  '4': '얼굴 교정을 경축·구조 접근으로 이해하고, 표면 마사지와 다른 IFC 관점을 갖는다.',
  '5': 'PAR·Position 철학으로 치료→기능운동 연결, 동료에게 설명·지도할 언어를 갖춘다.',
  '6': '전문 강의·홍보 없이도 「믿을 만한 사람·공감되는 전문가」로 기억된다.',
  '7': '입주민이 부담 없이 P-스트레칭·자세·가벼운 기능을 일상에 붙인다.'
};
const PROGRAM_INITIAL_PLAN_DRAFTS = {
  '0': {
    brandProfile: '통증 부위를 단편적으로 다루지 않고, 구조·연부조직·기능을 함께 설명하는 도수치료 관점이 핵심입니다. 독자는 "왜 이 부위가 먼저인지"를 이해해야 치료 순서에 신뢰를 가질 수 있습니다. 과장된 즉효 표현보다 평가 기반 접근(History·Movement·Palpation)을 일관되게 보여 주세요.',
    strategyGuide: '기준:\n- 주제는 통증 이름보다 "원인 구조"를 먼저 설명한다.\n- 단계는 인식(오해 해소) → 원인 이해 → 우선순위 결정 → 유지 전략 순으로 배치한다.\n- 각 단계는 독자가 바로 적용할 1가지 행동을 포함한다.\n\n의도:\n- 치료 전 불안을 낮추고, 치료 순서를 스스로 납득하게 만든다.\n- 단기 완화 기대를 "재발 줄이는 구조 이해"로 전환한다.\n- 상담 시 "왜 지금 이 접근인지"를 설명하는 기준 문장을 확보한다.',
    steps: [
      { id: '1', title: '1단계 · 통증 오해 정리', summary: '통증을 근육만의 문제로 보는 오해를 바로잡기', rationale: '독자가 현재 통증 해석을 바꾸지 않으면 이후 설명을 받아들이기 어렵습니다. 먼저 흔한 오해를 짚어 방어를 낮추고, 구조적 접근의 필요성을 받아들이게 합니다.' },
      { id: '2', title: '2단계 · 원인 구조 파악', summary: '관절·연부조직·보상 패턴을 연결해서 이해시키기', rationale: '통증 위치와 원인 위치가 다를 수 있음을 이해해야 치료 방향이 명확해집니다. 독자가 자기 몸의 패턴을 설명할 수 있게 만드는 단계입니다.' },
      { id: '3', title: '3단계 · 치료 우선순위 설계', summary: '무엇을 먼저, 무엇을 나중에 할지 기준 제시', rationale: '치료 순서를 제시하면 막연한 불안을 줄이고 실행 의지를 높일 수 있습니다. "왜 이 부위부터"에 대한 근거를 제시해 상담 전환을 돕습니다.' },
      { id: '4', title: '4단계 · 재발 방지 루틴 연결', summary: '도수 후 생활·움직임 루틴으로 유지 전략 만들기', rationale: '치료 효과를 유지하려면 일상 행동 변화가 필요합니다. 독자가 스스로 관리 가능한 최소 루틴을 확보하도록 마무리합니다.' }
    ]
  },
  '1': {
    brandProfile: '리:얼 무브먼트는 PAR·Position을 통해 "좋은 자세를 고정"이 아니라 "움직임을 조절"하도록 돕는 프로그램입니다. 일반인이 일상 동작(앉기·걷기·업무)에서 즉시 써먹을 수 있는 표현이 중요합니다. 강한 교정보다 가벼운 감각 회복과 반복 가능한 루틴을 우선합니다.',
    strategyGuide: '기준:\n- 단계는 감각 깨우기 → 동작 패턴 교정 → 일상 적용 → 유지 습관 순으로 구성한다.\n- 각 단계는 3~5분 내 가능한 마이크로 루틴을 포함한다.\n- "정답 자세"보다 상황별 조절 원칙을 제시한다.\n\n의도:\n- 독자가 자세 교정을 부담이 아닌 생활 기술로 인식하게 한다.\n- 통증 예방과 피로 감소를 일상 동작에서 체감하게 만든다.\n- 센터 방문 전후 모두 유지 가능한 자기조절 프레임을 만든다.',
    steps: [
      { id: '1', title: '1단계 · 감각 깨우기', summary: '호흡·기준선 회복으로 몸 상태를 먼저 인식하기', rationale: '몸 상태를 모르면 교정 신호를 받아들이기 어렵습니다. 가장 쉬운 감각 입력부터 시작해 "지금 내 몸"을 파악하도록 돕습니다.' },
      { id: '2', title: '2단계 · 움직임 패턴 정리', summary: 'PAR 기반으로 잘못된 반복 동작을 수정하기', rationale: '반복 패턴을 바꾸지 않으면 통증과 피로가 재생산됩니다. 작은 동작 수정으로 즉시 체감 가능한 변화를 만들도록 구성합니다.' },
      { id: '3', title: '3단계 · 일상 동작 연결', summary: '앉기·걷기·업무 동작에 교정 원칙 적용하기', rationale: '운동 시간보다 생활 시간이 더 길기 때문에, 실제 생활 장면에 연결해야 효과가 유지됩니다. 상황별 적용 예시로 실행 장벽을 낮춥니다.' },
      { id: '4', title: '4단계 · 1주 유지 루틴', summary: '무리 없는 주간 루틴으로 습관화하기', rationale: '좋은 움직임은 반복으로 굳어집니다. 과도한 계획 대신 유지 가능한 최소 루틴을 제시해 장기 지속을 유도합니다.' }
    ]
  },
  '2': {
    brandProfile: '리:얼 페이스는 얼굴만 따로 보지 않고 경추·호흡·생활습관까지 함께 보는 구조 접근이 핵심입니다. "작은 얼굴" 기대는 과장 없이 현실적인 변화 범위로 안내해야 신뢰가 유지됩니다. 미용 표현보다 균형·순환·긴장 완화 관점으로 설명합니다.',
    strategyGuide: '기준:\n- 단계는 관찰(비대칭 인식) → 원인 분해(습관·구조) → 교정 루틴 → 유지 관리 순으로 구성한다.\n- 전/후 기대치는 기간·개인차를 반드시 함께 안내한다.\n- 얼굴 문제를 경추·호흡·저작 패턴과 연결해 설명한다.\n\n의도:\n- 단기 외형 집착을 줄이고 구조 기반 관리 관점을 심는다.\n- 스스로 악화 습관을 파악·교정할 수 있게 만든다.\n- 상담 시 현실적인 목표 설정으로 이탈을 줄인다.',
    steps: [
      { id: '1', title: '1단계 · 비대칭 관찰', summary: '내 얼굴 패턴을 객관적으로 확인하는 법 익히기', rationale: '문제를 정확히 보지 못하면 잘못된 관리가 반복됩니다. 먼저 관찰 기준을 제공해 자기 인식을 높입니다.' },
      { id: '2', title: '2단계 · 원인 구조 분해', summary: '습관·저작·경추 요인을 나눠서 이해하기', rationale: '원인을 분해해야 해결 순서를 정할 수 있습니다. "왜 한쪽이 더 쓰이는지"를 설명해 납득을 만듭니다.' },
      { id: '3', title: '3단계 · 교정 루틴 적용', summary: '얼굴-목-호흡을 묶은 실천 루틴 시작하기', rationale: '이론만으로는 변화가 생기지 않습니다. 부담 없는 루틴으로 실제 체감 변화를 시작하도록 구성합니다.' },
      { id: '4', title: '4단계 · 결과 유지 전략', summary: '재발 습관을 줄이는 생활 관리 기준 만들기', rationale: '유지 전략이 없으면 초기 변화가 금방 흐려집니다. 일상 습관 점검 포인트를 고정해 지속 가능성을 높입니다.' }
    ]
  },
  '3': {
    brandProfile: 'CMT 전문가는 치료 테크닉보다 평가 사고(촉진·히스토리·판단 순서)를 우선 학습해야 합니다. 교과서 지식을 임상 언어로 번역하는 능력이 핵심 경쟁력입니다. "잘한다"보다 "왜 그렇게 판단했는가"를 설명하는 훈련 중심으로 설계합니다.',
    strategyGuide: '기준:\n- 단계는 평가 기준 정렬 → 촉진 정확도 강화 → 치료 선택 논리화 → 케이스 재현 순으로 구성한다.\n- 모든 단계는 "판단 근거 한 문장"을 남기게 한다.\n- 기법 소개보다 임상 의사결정 프레임을 우선한다.\n\n의도:\n- 수강생이 테크닉 의존에서 벗어나 평가 중심 사고를 체득하게 한다.\n- 임상에서 재현 가능한 치료 판단 언어를 확보하게 한다.\n- 교육 후 실제 케이스 적용률을 높인다.',
    steps: [
      { id: '1', title: '1단계 · 평가 프레임 정렬', summary: 'History-Inspection-Movement-Palpation 기준 통일', rationale: '평가 순서가 흔들리면 치료 결과도 흔들립니다. 공통 프레임을 먼저 맞춰 팀 전체 판단 품질을 올립니다.' },
      { id: '2', title: '2단계 · 촉진 정확도 강화', summary: '핵심 구조를 빠르게 찾는 촉진 기준 훈련', rationale: '촉진 정확도는 치료 방향의 출발점입니다. 반복 가능한 기준점을 통해 임상 속도와 신뢰를 동시에 높입니다.' },
      { id: '3', title: '3단계 · 치료 선택 논리화', summary: '기법 선택 이유를 환자 상태와 연결해 설명', rationale: '기법 자체보다 선택 근거가 중요합니다. 수강생이 치료 결정을 설명할 수 있어야 임상 재현성이 생깁니다.' },
      { id: '4', title: '4단계 · 케이스 재현 적용', summary: '복합 케이스에서 평가-치료-운동 연결 완성', rationale: '실전에서는 단일 문제보다 복합 패턴이 많습니다. 케이스 재현으로 교육 내용을 임상 행동으로 전환합니다.' }
    ]
  },
  '4': {
    brandProfile: 'IFC 얼굴교육은 표면 자극이 아닌 구조·경축·기능 연결을 설명하는 전문가 과정입니다. 경추·턱관절·교합 관점을 함께 보며, 미용 기대와 구조적 필요를 조율하는 상담력이 중요합니다. 기기 사용과 도수 접근의 순서를 명확히 제시해야 합니다.',
    strategyGuide: '기준:\n- 단계는 구조 평가 → 핵심 경축 완화 → 기기·도수 통합 프로토콜 → 케이스 피드백 순으로 구성한다.\n- 각 단계는 상담 문구(기대치 조율)를 포함한다.\n- 단순 before/after보다 기능·편안함 지표를 함께 본다.\n\n의도:\n- 수강생이 "미용 중심"에서 "구조 기반" 설명으로 전환하게 한다.\n- 상담 단계에서 과도한 기대를 안전하게 조율하게 한다.\n- 프로토콜의 재현성과 안전성을 높인다.',
    steps: [
      { id: '1', title: '1단계 · 구조 평가 정렬', summary: '안면·경추·턱관절 평가 순서 표준화', rationale: '평가 기준이 없으면 기법 적용이 흔들립니다. 공통 평가 루틴으로 케이스 판단의 정확도를 확보합니다.' },
      { id: '2', title: '2단계 · 경축 핵심 완화', summary: '우선 완화할 조직과 순서를 명확히 하기', rationale: '경축 우선순위를 잘못 잡으면 결과 체감이 떨어집니다. 주요 긴장 포인트를 선별해 효율을 높입니다.' },
      { id: '3', title: '3단계 · 통합 프로토콜 적용', summary: 'IFC + 도수 접근을 단계별로 연결하기', rationale: '기기와 도수의 순서를 명확히 해야 일관된 결과가 나옵니다. 상황별 프로토콜 선택 기준을 확립합니다.' },
      { id: '4', title: '4단계 · 케이스 피드백 루프', summary: '결과 기록과 재계획 기준으로 완성도 높이기', rationale: '케이스 피드백이 있어야 교육이 실력으로 남습니다. 결과 기록을 바탕으로 다음 개입을 설계하도록 마무리합니다.' }
    ]
  },
  '5': {
    brandProfile: 'Re:Al 움직임 과정은 치료 이후 기능 회복을 실제 동작으로 연결하는 전문가 교육입니다. PAR·Position 철학을 임상 처방 언어로 번역하는 능력이 핵심입니다. 안전한 progression과 환자 순응도를 동시에 고려한 설계가 필요합니다.',
    strategyGuide: '기준:\n- 단계는 상태 분류 → 기본 패턴 재학습 → 기능 과제 확장 → 지도·코칭 고도화 순으로 구성한다.\n- 각 단계는 "중단 기준/진행 기준"을 함께 제시한다.\n- 운동 처방은 통증 감소보다 기능 회복 지표를 우선한다.\n\n의도:\n- 치료실에서 운동실로 이어지는 단절을 줄인다.\n- 수강생이 환자 상태별 progression을 설명·적용하게 만든다.\n- 교육 후 실제 지도 자신감을 높인다.',
    steps: [
      { id: '1', title: '1단계 · 상태 분류', summary: 'PAR 관점으로 현재 기능 수준을 분류하기', rationale: '현재 수준을 정확히 구분해야 과부하를 피할 수 있습니다. 상태 분류는 안전한 처방의 출발점입니다.' },
      { id: '2', title: '2단계 · 기본 패턴 재학습', summary: '호흡·정렬·기초 움직임 패턴 재구성', rationale: '기초 패턴이 무너지면 고급 동작에서 보상이 커집니다. 가장 작은 단위부터 안정적으로 재학습합니다.' },
      { id: '3', title: '3단계 · 기능 과제 확장', summary: '일상/직무 동작으로 점진적 난이도 확장', rationale: '실전 기능으로 연결해야 교육 가치가 완성됩니다. 과제 확장을 통해 현장 적용력을 높입니다.' },
      { id: '4', title: '4단계 · 코칭 언어 고도화', summary: '순응도를 높이는 설명·피드백 스크립트 구축', rationale: '좋은 처방도 전달이 약하면 지속되지 않습니다. 코칭 언어를 정교화해 수행률과 결과를 함께 높입니다.' }
    ]
  },
  '6': {
    brandProfile: '일상 공유는 전문 지식 전달보다 신뢰 축적이 목적입니다. 핵심을 담백하게 말하되 장면·관찰로 공감 한 스푼. 과장·설교·홍보·과한 감성 톤은 줄입니다. 독자가 "이 사람은 꾸준하고 진짜다"라고 느끼는 리듬이 핵심입니다.',
    strategyGuide: '기준:\n- 단계는 장면 관찰 → 핵심 한 가지 → (선택) 짧은 감탄·철학 → 담백한 마무리 순으로 구성한다.\n- 의학적 단정 대신 경험·관찰 기반 표현을 사용한다.\n- 각 글은 짧고 부담 없는 한 가지 메시지만 남긴다.\n\n의도:\n- 콘텐츠 피로도를 낮추면서 지속 노출 리듬을 만든다.\n- 담백함 속 살짝의 공감으로 거리감을 줄인다.\n- 전문 콘텐츠로 이어질 수 있는 인간적 접점을 확보한다.',
    steps: [
      { id: '1', title: '1단계 · 공감 장면 열기', summary: '계절·날씨·피로 같은 공감 포인트로 시작', rationale: '첫 단계는 읽는 장벽을 낮추는 것이 핵심입니다. 누구나 공감 가능한 장면으로 관계의 문을 엽니다.' },
      { id: '2', title: '2단계 · 몸 느낌 관찰', summary: '오늘 컨디션을 가볍게 언어화해 나누기', rationale: '과한 정보 없이도 신뢰는 쌓일 수 있습니다. 몸 느낌을 솔직하게 기록해 진정성을 강화합니다.' },
      { id: '3', title: '3단계 · 작은 실천 제안', summary: '30초~3분 내 가능한 가벼운 루틴 안내', rationale: '실천이 있어야 콘텐츠가 기억됩니다. 부담 없는 행동 제안으로 참여율을 높입니다.' },
      { id: '4', title: '4단계 · 관계 유지 마무리', summary: '다음 일상으로 이어지는 따뜻한 콜투액션', rationale: '일상 공유의 목적은 반복 접점입니다. 다음 대화를 열어두는 문장으로 관계를 이어갑니다.' }
    ]
  },
  '7': {
    brandProfile: '힐자계는 입주민이 집 근처에서 부담 없이 따라할 수 있는 생활형 케어가 핵심입니다. 전문 용어를 줄이고, 엘리베이터 앞·거실·출근 전처럼 실제 동선을 기준으로 안내해야 합니다. 즉시 가능한 짧은 루틴과 안전한 표현을 우선합니다.',
    strategyGuide: '기준:\n- 단계는 불편 공감 → 쉬운 이완 → 자세·움직임 연결 → 생활 고정 순으로 구성한다.\n- 한 콘텐츠당 동작은 1~2개로 제한한다.\n- 통증 악화·저림 등 경고 신호 시 병원 진료 권유 문구를 포함한다.\n\n의도:\n- 입주민이 "어렵지 않다"는 경험을 반복하게 만든다.\n- 과한 운동 대신 꾸준한 생활형 루틴을 정착시킨다.\n- 지역 커뮤니티 신뢰를 높여 상담 접점을 자연스럽게 만든다.',
    steps: [
      { id: '1', title: '1단계 · 불편 공감 시작', summary: '입주민 일상에서 자주 겪는 불편을 정확히 짚기', rationale: '내 이야기라고 느껴야 행동이 시작됩니다. 생활 맥락의 불편을 먼저 공감해 참여를 유도합니다.' },
      { id: '2', title: '2단계 · 1분 이완 루틴', summary: '누구나 바로 가능한 짧은 이완 동작 제시', rationale: '복잡한 설명보다 즉시 실행이 중요합니다. 1분 루틴으로 첫 성공 경험을 만들도록 구성합니다.' },
      { id: '3', title: '3단계 · 자세·기능 연결', summary: '이완 후 자세와 가벼운 기능동작으로 확장', rationale: '이완만으로는 유지가 어렵습니다. 자세와 기능을 연결해 일상 체감 효과를 높입니다.' },
      { id: '4', title: '4단계 · 생활 루틴 고정', summary: '집·직장 동선에 붙이는 반복 습관 만들기', rationale: '지역 프로그램은 지속성이 성패를 가릅니다. 생활 동선에 붙는 습관으로 장기 실행을 돕습니다.' }
    ]
  }
};
/** 프로그램별 1~4단계 · 단계당 주제 5개 초안 (로드맵 적용 시 빈 칸만 채움) */
const PROGRAM_INITIAL_STEP_TOPICS = {
  '0': {
    '1': [
      { topic: '통증이 근육만의 문제라면, 왜 스트레칭으로 안 풀릴까요?', angle: '통증=근육 오해 해소 + 구조 관점 입문' },
      { topic: '"쉬면 괜찮아지겠죠?"가 위험한 말이 되는 경우', angle: '휴식과 방치의 차이, 조기 평가 필요성' },
      { topic: '치료 받고 더 아플 때, 호전 반응일까 문제일까?', angle: '호전 반응 vs 부작용 구분 기준' },
      { topic: '통증 위치와 원인 위치가 다를 수 있는 이유', angle: '방사통·보상 패턴을 쉽게 설명' },
      { topic: '"딱 소리"가 나야 치료가 된 걸까요?', angle: '관절가동 오해 해소와 신뢰 기준' }
    ],
    '2': [
      { topic: '허리가 뻐근한데, 왜 고관절부터 보나요?', angle: '인접 관절·연부조직 연결 설명' },
      { topic: '목 통증인데 어깨를 치료하는 진짜 이유', angle: '연쇄 보상과 치료 순서 논리' },
      { topic: '관절·근막·건, 어디를 먼저 봐야 하나요?', angle: '연부조직·관절 우선순위 프레임' },
      { topic: '같은 허리 통증, 사람마다 다른 이유 3가지', angle: '구조·습관·기능 개인차 설명' },
      { topic: '"뼈가 틀어졌다"는 말, 어디까지 사실일까요?', angle: '과장 없이 구조 변화 설명' }
    ],
    '3': [
      { topic: '목·허리·어깨 중, 이번 달에 먼저 손댈 곳은?', angle: '우선순위 결정 체크리스트' },
      { topic: '통증 줄이기와 원인 해결, 뭐가 먼저인가요?', angle: '증상 완화 vs 구조 개입 순서' },
      { topic: '도수치료 횟수, 얼마나 해야 방향이 보이나요?', angle: '기대치·재평가 기준 제시' },
      { topic: '병원에서 검사 정상인데도 아픈 이유', angle: '기능·구조 관점의 해석 프레임' },
      { topic: '오늘 상담에서 확인할 질문 5가지', angle: '환자가 스스로 확인할 우선순위 질문' }
    ],
    '4': [
      { topic: '치료 후 3일, 집에선 무엇을 하면 좋을까요?', angle: '재발 방지 최소 루틴' },
      { topic: '앉아서 일할 때 통증 재발 막는 2분 루틴', angle: '직장 환경형 유지 전략' },
      { topic: '스트레칭만 늘리면 왜 다시 뻐근해질까요?', angle: '단순 스트레칭의 한계 + 순서' },
      { topic: '통증 없는 날에도 해야 하는 관리가 있나요?', angle: '예방형 최소 루틴 안내' },
      { topic: '좋아졌다 싶다가 다시 아픈 사이클 끊는 법', angle: '재발 신호 인식과 조기 대응' }
    ]
  },
  '1': {
    '1': [
      { topic: '스트레칭을 매일 해도 몸이 안 풀리는 이유', angle: '감각·기준선 회복이 먼저인 이유' },
      { topic: '"바른 자세"를 오래 유지하면 오히려 독인 이유', angle: '정적 자세 vs 동적 조절' },
      { topic: '호흡이 먼저인 이유, 3분만 해보면 압니다', angle: '호흡-긴장 기준선 체감' },
      { topic: '누워서 시작하는 게 운동보다 중요한 날', angle: 'Position 1 감각 깨우기' },
      { topic: '오늘 내 몸이 뻣뻣한지 확인하는 30초', angle: '자가 감각 체크 루틴' }
    ],
    '2': [
      { topic: '운동 전 5분, 이것만 하면 부상이 준다', angle: '기능적 워밍업·PAR 입문' },
      { topic: 'P-스트레칭, 억지로 당기면 안 되는 이유', angle: 'Passive 이완의 올바른 강도' },
      { topic: '고관절이 안 열리면 허리가 먼저 아파요', angle: '움직임 사슬 패턴 교정' },
      { topic: '어깨가 올라간 채 걷는 습관, 어떻게 바꾸나요?', angle: '보행·어깨 긴장 패턴 수정' },
      { topic: '"힘을 빼라"는 말, 실제로 어떻게 하나요?', angle: '이완 큐·감각 안내' }
    ],
    '3': [
      { topic: '앉아서 일하는 당신을 위한 3분 루틴', angle: '사무 장면 적용' },
      { topic: '걷기만 해도 자세가 바뀌는 조건 3가지', angle: '보행 습관 연결' },
      { topic: '집안일·육아 중에도 가능한 정렬 리셋', angle: '생활 동선형 적용' },
      { topic: '스쿼트보다 먼저 해야 할 일상 동작', angle: '기능동작 우선순위' },
      { topic: '핸드폰 볼 때 목만 들어올리는 착각', angle: '경추-흉추 연동 습관 교정' }
    ],
    '4': [
      { topic: '바쁜 주를 위한 움직임 루틴 템플릿', angle: '주 3회 최소 유지 설계' },
      { topic: '컨디션 저하일 때 강도 낮추는 기준', angle: 'progression / regression' },
      { topic: '좋아진 감각을 놓치지 않는 체크리스트', angle: '자기점검 습관화' },
      { topic: '운동을 쉬어도 패턴이 안 흐트러지게', angle: '유지형 마이크로 루틴' },
      { topic: '한 달 후를 위한 이번 주 한 가지 약속', angle: '습관 고정 CTA' }
    ]
  },
  '2': {
    '1': [
      { topic: '셀카에서 한쪽 얼굴만 작아 보이는 진짜 이유', angle: '비대칭 관찰 기준 잡기' },
      { topic: '거울로 내 얼굴 패턴 확인하는 3가지 포인트', angle: '관찰 체크리스트' },
      { topic: '사진 각도 탓일까, 구조 차이일까?', angle: '과도한 해석 줄이기' },
      { topic: '아침/저녁 얼굴이 다르게 느껴지는 이유', angle: '부종·긴장·습관 관찰' },
      { topic: '"작아 보이게"보다 먼저 볼 균형 지표', angle: '현실적 목표 설정' }
    ],
    '2': [
      { topic: '얼굴 살이 안 빠지는 이유, 다이어트가 아닐 때', angle: '순환·골격·긴장 분리' },
      { topic: '광대가 도드라져 보일 때, 턱이 원인인 경우', angle: '저작근·골격 관계' },
      { topic: '이중턱이 생기는 구조적 이유 3가지', angle: '피부·지방·골격 분리 설명' },
      { topic: '목 긴장이 얼굴을 바꾸게 만드는 경로', angle: '경추-안면 연결' },
      { topic: '한쪽으로만 씹는 습관이 남기는 흔적', angle: '생활 습관 원인 분해' }
    ],
    '3': [
      { topic: '얼굴 교정, 몇 번부터 변화가 느껴질까요?', angle: '기대치·기간 조율' },
      { topic: '집에서 할 수 있는 얼굴-목 호흡 루틴', angle: '부담 없는 실천 루틴' },
      { topic: '림프 마사지만으로는 부족한 순간', angle: '표면 vs 구조 접근' },
      { topic: '자는 자세·베개가 얼굴 비대칭에 미치는 영향', angle: '생활 교정 포인트' },
      { topic: '기기와 도수, 어떤 순서로 접근하나요?', angle: '통합 접근 입문' }
    ],
    '4': [
      { topic: '좋아진 윤곽을 유지하는 습관 관리표', angle: '재발 습관 점검' },
      { topic: '스트레스·수면이 얼굴을 다시 붓게 할 때', angle: '유지 전략과 컨디션' },
      { topic: '주 1회 셀프체크 포인트', angle: '관찰 루틴 고정' },
      { topic: '교정 후 "다시 예전처럼"이 되는 신호', angle: '조기 대응 기준' },
      { topic: '작은 변화도 오래가는 관리 원칙', angle: '과장 없는 유지 메시지' }
    ]
  },
  '3': {
    '1': [
      { topic: '촉진이 치료보다 먼저인 이유', angle: '평가 우선 철학' },
      { topic: 'History에서 놓치면 치료가 흔들리는 질문', angle: '문진 프레임 정렬' },
      { topic: 'Inspection·Movement·Palpation 순서를 지키는 법', angle: '4평가 기준 통일' },
      { topic: '"좋아졌다"는 주관 보고를 어떻게 검증할까', angle: '객관 지표 연결' },
      { topic: '교과서 순서와 임상 순서가 어긋날 때', angle: '임상 사고 훈련' }
    ],
    '2': [
      { topic: '핵심 구조 촉진, 초보가 먼저 익힐 랜드마크', angle: '촉진 기준점 훈련' },
      { topic: '같은 부위를 만져도 정보가 다른 이유', angle: '촉진 질 향상 포인트' },
      { topic: '통증 유발점과 관절 이상을 빠르게 가르는 법', angle: '감별 촉진' },
      { topic: '촉진 소견을 한 문장으로 기록하는 템플릿', angle: '임상 언어화' },
      { topic: '손끝 감각을 올리는 매일 5분 드릴', angle: '반복 훈련 루틴' }
    ],
    '3': [
      { topic: '잘 치료하는 것과 제대로 치료하는 것의 차이', angle: '선택 논리 정립' },
      { topic: 'HVLA와 LVLA, 언제 무엇을 고르나?', angle: '기법 선택 기준' },
      { topic: '관절가동술을 쓰는 타이밍 판단법', angle: '적응증·금기 사고' },
      { topic: '촉진·가동 검사 결과를 치료 선택 문장으로 바꾸는 법', angle: '평가 결과의 임상 언어화' },
      { topic: '치료 전후 비교를 설득력 있게 남기는 법', angle: '근거 기록' }
    ],
    '4': [
      { topic: '복합 케이스에서 평가-치료-운동 연결하기', angle: '케이스 재현' },
      { topic: '재발 환자에서 다시 볼 평가 포인트', angle: '피드백 루프' },
      { topic: '실습생에게 케이스 사고과정을 시연·피드백하는 법', angle: '교육·슈퍼비전 운영' },
      { topic: '"효과 없는 세션"을 다음 계획으로 바꾸는 법', angle: '재계획 기준' },
      { topic: '한 달 후 내 임상 습관을 바꿀 체크리스트', angle: '적용 고정' }
    ]
  },
  '4': {
    '1': [
      { topic: 'IFC 얼굴교정, 단순 마사지와 다른 점', angle: '구조 접근 vs 표면 접근' },
      { topic: '얼굴 교정에서 경추를 반드시 평가하는 이유', angle: '경추-두개 연결' },
      { topic: '턱관절·교합을 빼먹으면 생기는 공백', angle: '평가 순서 표준화' },
      { topic: '상담 시 고객이 원하는 것과 필요한 것', angle: '기대치 조율 입문' },
      { topic: '평가 기록 템플릿으로 케이스를 표준화하기', angle: '공통 평가 루틴' }
    ],
    '2': [
      { topic: '먼저 풀어야 할 경축, 우선순위 정하는 법', angle: '핵심 긴장 선별' },
      { topic: '안면 비대칭에서 놓치기 쉬운 평가 포인트', angle: '복합 평가 체크' },
      { topic: '과한 자극이 결과를 떨어뜨리는 순간', angle: '강도·순서 주의' },
      { topic: '경축 완화 전후에 확인할 기능 지표', angle: '체감·기능 지표' },
      { topic: '"이쪽만 풀어주세요" 요청을 구조로 번역하기', angle: '상담→평가 연결' }
    ],
    '3': [
      { topic: 'INDIBA와 IFC를 같이 쓸 때 프로토콜', angle: '기기+도수 시너지' },
      { topic: '세션 안에서 순서 바꾸면 결과가 달라지는 이유', angle: '프로토콜 논리' },
      { topic: '초기·중기·유지기 프로토콜을 나누는 기준', angle: '단계별 적용' },
      { topic: '안전 경고를 명확히 전달하는 상담 문장', angle: '기대치·안전 조율' },
      { topic: '시술 직후 설명해야 할 자기관리 3가지', angle: '홈케어 연결' }
    ],
    '4': [
      { topic: '케이스 전후를 사진 말고 기능으로 기록하기', angle: '피드백 지표' },
      { topic: '결과가 기대에 못 미쳤을 때 재계획 기준', angle: '재평가 루프' },
      { topic: '고객 피드백을 다음 세션에 반영하는 법', angle: '상담 피드백' },
      { topic: '교육 후 임상에서 바로 쓸 체크리스트', angle: '현장 적용' },
      { topic: '한 달간 프로토콜 완성도를 올리는 리뷰법', angle: '성장 루프' }
    ]
  },
  '5': {
    '1': [
      { topic: '패시브 스트레칭을 언제 어떻게 써야 하나', angle: '상태 분류·타이밍' },
      { topic: '환자 기능 수준을 PAR로 빠르게 나누는 법', angle: '분류 프레임' },
      { topic: '통증 없는 환자가 더 위험한 처방 실수', angle: '과부하 방지' },
      { topic: '진행·중단 기준을 세션 전에 정하는 이유', angle: '안전 progression' },
      { topic: '치료실에서 운동실로 넘기기 전 체크리스트', angle: '전환 평가' }
    ],
    '2': [
      { topic: '기능운동, 치료의 끝이 아닌 연결이다', angle: '치료→운동 철학' },
      { topic: '호흡·정렬이 무너진 채 근력운동을 하면', angle: '기초 패턴 재학습' },
      { topic: '자세 교정에 "좋은 자세"가 없는 이유', angle: '동적 안정성' },
      { topic: '고관절 가동성 vs 안정성, 무엇이 먼저인가', angle: '우선순위 처방' },
      { topic: '초보 환자에게 첫 과제로 줄 동작 고르기', angle: '기초 과제 설계' }
    ],
    '3': [
      { topic: '일상·직무 동작으로 난이도를 올리는 법', angle: '기능 과제 확장' },
      { topic: '집에서 지속 가능한 홈프로그램 설계', angle: '순응도 높은 처방' },
      { topic: '통증이 줄었을 때 강도를 올리는 타이밍', angle: 'progression 기준' },
      { topic: 'PAR 단계별 코칭 큐로 수행률 높이는 법', angle: '동기·설명 전략' },
      { topic: '재발 위험 동작을 일상에 안전하게 재도입하기', angle: '회귀·적용' }
    ],
    '4': [
      { topic: '환자에게 "왜 이 운동인지" 한 문장으로 말하기', angle: '코칭 언어' },
      { topic: '피드백을 교정으로 바꾸지 않고 유도하는 법', angle: '큐잉 기술' },
      { topic: '못 하는 날을 위한 regression 스크립트', angle: '유연한 지도' },
      { topic: '동료 지도자가 같은 처방을 재현하게 만들기', angle: '교육 전달력' },
      { topic: '4주 코칭 루틴으로 수행률 올리는 방법', angle: '습관·피드백 고정' }
    ]
  },
  '6': {
    '1': [
      { topic: '비 오는 날, 몸이 더 무겁게 느껴질 때', angle: '계절 공감 오프닝' },
      { topic: '에어컨 켜기 전, 목·어깨가 먼저 뻐근한 날', angle: '초여름 일상 공감' },
      { topic: '꽃가루 시즌, 피곤한데 밖은 좋을 때', angle: '봄 컨디션 공감' },
      { topic: '요즘 뉴스 보면 몸도 마음도 긴장되는 날', angle: '가벼운 정서 공감' },
      { topic: '커피 한 잔 마시며 쉬는 10분', angle: '여유·온기 오프닝' }
    ],
    '2': [
      { topic: '여행 다녀온 다음 날 몸이 뻐근할 때', angle: '컨디션 관찰 나눔' },
      { topic: '봄 산책 늘리고 나서 종아리가 뻐근한 날', angle: '움직임 후 몸 느낌' },
      { topic: '오래 앉아 일한 날의 저녁 몸 일기', angle: '생활 컨디션 기록' },
      { topic: '잘 잔 다음 날과 못 잔 날의 몸 차이', angle: '수면·컨디션 관찰' },
      { topic: '피곤한데 괜히 더 움직이는 날', angle: '과활동 자기관찰' }
    ],
    '3': [
      { topic: '창가에서 30초, 어깨 힘 빼고 바람 쐬기', angle: '초짧은 생활 실천' },
      { topic: '물 한 잔 마신 뒤 오늘 컨디션 한 줄 기록', angle: '부담 없는 루틴' },
      { topic: '엘리베이터 기다리며 발바닥 감각 느끼기', angle: '생활형 마이크로 루틴' },
      { topic: '잠들기 전, 목·어깨에 고생했다고 말해주기', angle: '저녁 작은 실천' },
      { topic: '오늘 할 일 하나: 척추 길게 펴고 숨 쉬기', angle: '한 가지 메시지' }
    ],
    '4': [
      { topic: '내일도 무리하지 말자는 짧은 다짐', angle: '관계 유지 CTA' },
      { topic: '같은 계절을 지나는 분들께', angle: '공감 마무리' },
      { topic: '오늘 기록 남기고 가는 한 줄', angle: '반복 접점' },
      { topic: '잠깐 쉬어도 괜찮다는 말', angle: '온기 메시지' },
      { topic: '다음엔 산책 이야기로 만나요', angle: '다음 일상 예고' }
    ]
  },
  '7': {
    '1': [
      { topic: '앉아만 있어도 목이 뻐근할 때 먼저 볼 한 가지', angle: '입주민 불편 공감' },
      { topic: '엘리베이터 앞에서 어깨가 올라가는 순간', angle: '동선형 불편 장면' },
      { topic: '장보기 다녀온 뒤 허리가 무거운 날', angle: '생활 맥락 공감' },
      { topic: '아이 등원 후 목이 먼저 굳어지는 아침', angle: '바쁜 일상 공감' },
      { topic: '"운동할 시간이 없다"가 진짜 고민일 때', angle: '진입 장벽 공감' }
    ],
    '2': [
      { topic: 'P-스트레칭이 뭔가요?', angle: '쉬운 이완 개념' },
      { topic: '엘리베이터 앞에서 할 수 있는 30초 골반 정리', angle: '초단시간 루틴' },
      { topic: '소파에 앉기 전 1분 목·어깨 이완', angle: '집 동선 루틴' },
      { topic: '고양이 기지개처럼 가볍게 푸는 법', angle: '강도 낮은 이완' },
      { topic: '아픈데 억지로 늘리지 말라는 말의 의미', angle: '안전 이완 기준' }
    ],
    '3': [
      { topic: '자세 교정, 하루아침에 바뀌지 않는 이유', angle: '감각부터 바꾸는 접근' },
      { topic: '얼굴이 붓는 날, 물만 마시면 된다는 말의 빈틈', angle: '가벼운 구조·순환 연결' },
      { topic: '단지 커뮤니티 다녀온 날 목·어깨 가볍게 푸는 법', angle: '계절+자세 연결' },
      { topic: '단지 산책 늘린 뒤 종아리 뻐근할 때', angle: '기능 동작 확장' },
      { topic: '서서 일하는 시간, 골반만 리셋하기', angle: '자세·기능 짧은 연결' }
    ],
    '4': [
      { topic: '출퇴근길에 붙이는 주 3회 루틴', angle: '생활 습관 고정' },
      { topic: '문손잡이 볼 때마다 어깨 내리기', angle: '동선 리마인더' },
      { topic: '같이 사는 사람과 웃으며 해보는 30초 루틴', angle: '커뮤니티형 유지' },
      { topic: '아파지면 멈추고, 병원 먼저인 경우', angle: '안전 경고+권유' },
      { topic: '아파트 생활에서 꾸준함이 생기는 조건', angle: '장기 실행 팁' }
    ]
  }
};
function getInitialStepTopics_(catId, stepId){
  var byCat = PROGRAM_INITIAL_STEP_TOPICS[String(catId)];
  if(!byCat) return [];
  var sid = String(stepId);
  var list = byCat[sid] || [];
  if(!list.length){
    var m = sid.match(/^s?(\d+)$/i);
    if(m) list = byCat[m[1]] || byCat['s' + m[1]] || [];
  }
  return list.slice(0, 5).map(function(t){
    return {
      topic: String((t && t.topic) || '').trim(),
      angle: String((t && t.angle) || '').trim()
    };
  }).filter(function(t){ return !!t.topic; });
}
function getInitialProgramPlanDraft_(catId){
  var seed = PROGRAM_INITIAL_PLAN_DRAFTS[String(catId)];
  if(!seed) return null;
  return {
    brandProfile: String(seed.brandProfile || '').trim(),
    strategyGuide: normalizeProgramStrategyGuideTemplate_(String(seed.strategyGuide || '').trim()),
    steps: (seed.steps || []).map(function(step, idx){
      var legacyId = String(step.id != null ? step.id : (idx + 1));
      return {
        id: 's' + (idx + 1),
        title: String(step.title || '').trim(),
        summary: String(step.summary || '').trim(),
        rationale: String(step.rationale || '').trim(),
        pinned: false,
        topics: getInitialStepTopics_(catId, legacyId)
      };
    })
  };
}
function getProgramSeedBrandProfile_(catId){
  var seed = PROGRAM_INITIAL_PLAN_DRAFTS[String(catId)];
  return seed ? String(seed.brandProfile || '').trim() : '';
}
function getProgramSeedStrategyGuide_(catId){
  var seed = PROGRAM_INITIAL_PLAN_DRAFTS[String(catId)];
  return seed ? normalizeProgramStrategyGuideTemplate_(String(seed.strategyGuide || '').trim()) : '';
}
/** 1~2단계만 남은 깨진 로드맵을 시드 3~4단계로 보완 (커스텀 1단계는 유지) */
function repairIncompleteSubGoalPlan_(catId){
  catId = normalizePendingCatId_(catId);
  if(!state.branding || typeof state.branding !== 'object') return false;
  if(!state.branding.subGoalPlans) state.branding.subGoalPlans = {};
  var key = String(catId);
  var plan = state.branding.subGoalPlans[key];
  if(!plan || !Array.isArray(plan.steps)) return false;
  if(plan.steps.length >= 3) return false;
  var seed = getInitialProgramPlanDraft_(catId);
  if(!seed || !seed.steps || seed.steps.length < 3) return false;
  var idMap = {};
  var kept = plan.steps.map(function(s, i){
    var oldId = String(s && s.id != null ? s.id : '').trim();
    var newId = 's' + (i + 1);
    if(oldId && oldId !== newId) idMap[oldId] = newId;
    return {
      id: newId,
      title: (s && s.title) || '',
      summary: (s && s.summary) || '',
      rationale: (s && s.rationale) || '',
      pinned: !!(s && s.pinned)
    };
  });
  for(var i = kept.length; i < seed.steps.length; i++){
    var ss = seed.steps[i];
    kept.push({
      id: 's' + (i + 1),
      title: ss.title || '',
      summary: ss.summary || '',
      rationale: ss.rationale || '',
      pinned: false
    });
  }
  plan.steps = kept;
  if(Object.keys(idMap).length){
    remapDraftStepIdsForCat_({ draftBrandOverrides: state.draftBrandOverrides }, catId, idMap);
  }
  if(!String(plan.brandProfile || '').trim() && seed.brandProfile) plan.brandProfile = seed.brandProfile;
  if(!String(plan.strategyGuide || plan.criteria || plan.intent || '').trim() && seed.strategyGuide){
    plan.strategyGuide = seed.strategyGuide;
    plan.criteria = seed.strategyGuide;
    plan.intent = seed.strategyGuide;
  }
  plan.updatedAt = new Date().toISOString();
  try { applyInitialProgramTopicsToCat_(catId); } catch(eTopics){}
  return true;
}
function repairAllIncompleteSubGoalPlans_(){
  if(!state.branding || !state.branding.subGoalPlans) return false;
  var changed = false;
  Object.keys(state.branding.subGoalPlans).forEach(function(k){
    if(repairIncompleteSubGoalPlan_(k)) changed = true;
  });
  return changed;
}
function ensureProgramIdentityPlan_(catId){
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(!state.branding.subGoalPlans) state.branding.subGoalPlans = {};
  var key = String(catId);
  var plan = state.branding.subGoalPlans[key];
  if(plan && plan.steps && plan.steps.length) return plan;
  var seed = getInitialProgramPlanDraft_(catId);
  if(!seed) return null;
  state.branding.subGoalPlans[key] = {
    steps: seed.steps.map(function(s){
      return {
        id: String(s.id),
        title: s.title || '',
        summary: s.summary || '',
        rationale: s.rationale || '',
        pinned: false
      };
    }),
    miscLabel: SUBGOAL_MISC_LABEL,
    brandProfile: seed.brandProfile || '',
    strategyGuide: seed.strategyGuide || '',
    criteria: seed.strategyGuide || '',
    intent: seed.strategyGuide || '',
    updatedAt: new Date().toISOString()
  };
  return state.branding.subGoalPlans[key];
}
function saveProgramBrandProfileDirect_(catId, value){
  var plan = ensureProgramIdentityPlan_(catId);
  if(!plan) return;
  plan.brandProfile = String(value || '').trim();
  plan.updatedAt = new Date().toISOString();
  syncPendingProgramIdentityFromApplied_(catId);
  save({ driveImmediate: true, gasImmediate: true });
}
function saveProgramStrategyGuideDirect_(catId, value){
  var plan = ensureProgramIdentityPlan_(catId);
  if(!plan) return;
  var sg = normalizeProgramStrategyGuideTemplate_(String(value || ''));
  plan.strategyGuide = sg;
  plan.criteria = sg;
  plan.intent = sg;
  plan.updatedAt = new Date().toISOString();
  syncPendingProgramIdentityFromApplied_(catId);
  save({ driveImmediate: true, gasImmediate: true });
}
function syncPendingProgramIdentityFromApplied_(catId){
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, catId) || !p.plan) return;
  var applied = state.branding && state.branding.subGoalPlans && state.branding.subGoalPlans[String(catId)];
  if(!applied) return;
  p.plan.brandProfile = String(applied.brandProfile || '').trim();
  var sg = String(applied.strategyGuide || applied.criteria || applied.intent || '').trim();
  if(sg){
    p.plan.strategyGuide = normalizeProgramStrategyGuideTemplate_(sg);
    p.plan.criteria = p.plan.strategyGuide;
    p.plan.intent = p.plan.strategyGuide;
  }
  persistPendingSubGoalPlan_();
}
function commitProgramIdentityFromPending_(catId){
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, catId) || !p.plan) return;
  var plan = ensureProgramIdentityPlan_(catId);
  if(!plan) return;
  if(p.plan.brandProfile != null) plan.brandProfile = String(p.plan.brandProfile || '').trim();
  if(p.plan.strategyGuide != null){
    var sg = normalizeProgramStrategyGuideTemplate_(String(p.plan.strategyGuide || ''));
    plan.strategyGuide = sg;
    plan.criteria = sg;
    plan.intent = sg;
  }
  plan.updatedAt = new Date().toISOString();
  syncPendingProgramIdentityFromApplied_(catId);
  save({ driveImmediate: true, gasImmediate: true });
}
function applyInitialProgramTopicsToCat_(catId){
  var seed = getInitialProgramPlanDraft_(catId);
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!seed || !cat || !plan || !plan.steps || !plan.steps.length) return 0;
  var applied = 0;
  seed.steps.forEach(function(step){
    var sid = String(step.id);
    var liveStep = (plan.steps || []).find(function(s){ return String(s.id) === sid; });
    if(!liveStep) return;
    var topics = step.topics || getInitialStepTopics_(catId, sid);
    for(var slot = 1; slot <= 5; slot++){
      var t = topics[slot - 1];
      if(!t || !t.topic) continue;
      var existing = getDraftForStepSlot_(catId, sid, slot, { live: true });
      if(existing) continue;
      if(applyTopicToStepSlot_(catId, sid, slot, t)) applied++;
    }
  });
  return applied;
}
const DAILY_SHARE_MASTER_BRIDGE = '일상 공유는 PSP·통증 설교가 아니라, 미카닥 박준규라는 사람의 신뢰를 보여 주는 레이어. 핵심을 담백하게 말하되 공감 한 스푼 — 「이 사람은 진짜」로 기억되게 한다.';
const DAILY_SHARE_TONE_ANCHOR = '담백·관찰 위주. 핵심 메시지 하나를 분명히 말하되, 장면·몸감각·짧은 감탄·한 줄 철학으로 살짝 공감을 더한다. 눈물·위로·설교·과한 감성·시적 수사 금지. 「읽는 사람이 아, 나도 그런 날 있지」 한 번 정도면 충분.';
/** 개인 색깔·약력·포지셔닝 — 대화·프로필·블로그(미카닥 박준규 DC PT 공지) 기준. AI·기획 시 톤·역할 참고용 */
const PERSONAL_BRAND_PROFILE = `
[미카닥 박준규 — 누구인지 · 어떻게 불러야 하는지]
- 정체: **미국에서 비수술 근골격계**를 다루는 전문가. 카이로프랙틱·물리치료·도수·운동·비침습 구조 접근이 중심.
- 한국식 「의료인」(의사·간호사·한의사) 라벨보다, 일반인이 이해하기 쉬운 **「근골격계 전문가」** 로 소개.
- 미국 DC·한국 PT 면허는 사실이나, **홍보 헤드라인에 Doctor/닥터/원장님** 을 전면에 내세우지 않음(오해·분쟁 리스크). 자격은 필요할 때만 짧게, 본문 톤은 **설명하는 전문가**.
- 브랜드 주어는 항상 **미카닥 박준규** 개인. 클리닉·병원·법인명은 기획 intent·분기 주제에 쓰지 않음.

[학력·면허·자격 — 색깔의 근거]
- 미국 카이로프랙틱 박사(DC, California) · 한국 물리치료사(PT)
- Bridgeport Univ 카이로프랙틱 · 대전대 물리치료 · 한서대 **건강관리학**
- 사회복지사 2급 · 심리상담 · 지문적성상담 · 필라테스 매트 등 — **몸+마음+생활** 을 잇는 폭
- 미용 관련 면허 보유 — 얼굴·바디 웰니스 프로그램(Re:Al Face/IFC)과 연결
- ACA 정회원 · Kinesio Taping · 자세교정·트레이너 협회 활동 등

[임상·경력 — 신뢰의 숫자]
- **20년+** 근골격계 임상(미국 LA·Bridgeport 수련 ~ 국내 센터·교육)
- **3,400+** 전문 블로그(통증·구조·운동·교육 — 「왜」 설명 축적)
- CMT 임상도수 아카데미 · IFC 국제 얼굴교정 학회 · Re:Al Movement — **치료+교육+프로그램** 운영
- 번역: The Pelvic Girdle, Clinical Guide to Musculoskeletal Palpation, Palpation and Assessment
- 논문·특허(요추·골반 교정 의자 등) — **과학·실무** 근거

[강점 — 브랜드에 녹일 6가지]
1. **Why first**: PSP(Philosophy→Science→Practice) — 통증·구조·순서를 **이유** 로 설명
2. **비수술·비침습 구조→기능**: 수술 대신 평가·도수·움직임·습관
3. **미국 임상 + 한국어 설명**: 전문 용어를 환자·일반인 언어로 풀어냄
4. **치료↔웰니스↔교육** 한 줄기: 환자용 · 입주민 · 전문가 교육(CMT/IFC/Re:Al)이 같은 철학
5. **가르치는 사람**: 동료·후배에게 평가-치료-운동 **순서** 와 임상 사고 전달
6. **과장 없는 신뢰**: 즉효·기적·타 기관 비방 금지 — 20년 블로그 톤 유지

[독자별 한 줄]
- 일반인(통증·재활): 「내 몸이 왜 아픈지, 무엇부터 해야 하는지」 이해
- 움직임·자세: PAR·Position — 일상 동작으로 연결
- 얼굴·웰니스: 구조(경축·골격)·비수술 · 기대치 현실화
- 전문가: 촉진·평가 우선, 교과서와 임상의 간격 메우기
- 일상 공유: 강의·홍보 없이 **믿을 만한 사람** — 담백한 관찰 + 공감 한 스푼

[쓰지 말 것 · 톤]
- 「최고의 의사」「완치 보장」「Doctor로만 신뢰」 류
- 힐링트리·특정 병원명을 브랜드 기획·분기 주제의 주어로 사용
- 의료인=의사 프레임으로만 포지셔닝
- **현재 병원 근무·직접 진료·처방** 암시 (병원 진료 **권유**는 가능)
`.trim();
const YEAR_BRAND_WRITING_RULE = '[출력 규칙] intent·topic·goal·rationale에 클리닉·병원·기관명을 쓰지 마세요. 브랜드 주어는 오직 「미카닥 박준규」 개인 브랜드입니다. Doctor·닥터·원장님을 헤드라인·브랜드 슬로gan 주어로 쓰지 마세요.';

const DEFAULT_BRANDING = {
  quarterLabel: '2026년 2분기',
  message: '근골격계 문제를 과학으로 찾고, 임상으로 해결한다 — 먼저 구조, 기능 회복',
  pillars: [
    'PSP · Philosophy→Science→Practice',
    'Re:Al Movement · PAR · Position',
    'Re:Al Face · IFC · 구조→기능',
    '신뢰 · 과장 없는 설명'
  ],
  categoryGoals: {
    '0': '도수치료(PSP) — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['0'],
    '1': 'Re:Al Movement(PAR) — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['1'],
    '2': 'Re:Al Face — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['2'],
    '3': 'CMT 전문가 — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['3'],
    '4': 'IFC 전문가 — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['4'],
    '5': 'Re:Al Movement 교육 — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['5'],
    '6': '일상 공유 — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['6'],
    '7': '힐자계 — 3개월: ' + CATEGORY_THREE_MONTH_OUTCOME['7']
  }
};

const DEFAULT_DAILY_SHARE_THEMES = [
  { id: 'season', label: '계절·날씨', note: '장면 관찰 — 습도·더위가 몸에 어떻게 느껴지는지 담백하게' },
  { id: 'body', label: '몸 컨디션', note: '피곤·뻐근함 — 판단 없이 관찰, 가벼운 움직임 한 줄' },
  { id: 'travel', label: '여행·이동', note: '다녀온 날의 핵심 한 가지 + 짧은 감탄' },
  { id: 'rest', label: '쉬는 날·여유', note: '커피·창밖·10분 쉼 — 과장 없는 한 줄 철학까지' }
];
const DAILY_MONTH_LEGACY_KEY = 'legacy';
const DAILY_TOPIC_SUGGEST_ESTIMATE_SEC = 28;
function padMonth2_(n){
  n = parseInt(n, 10) || 0;
  return (n < 10 ? '0' : '') + n;
}
function getCurrentShareMonthKey_(dateObj){
  var d = dateObj instanceof Date ? dateObj : new Date();
  if(isNaN(d.getTime())) d = new Date();
  return d.getFullYear() + '-' + padMonth2_(d.getMonth() + 1);
}
function formatShareMonthLabel_(monthKey){
  if(!monthKey || monthKey === DAILY_MONTH_LEGACY_KEY) return '이전·기본 주제';
  var m = String(monthKey).match(/^(\d{4})-(\d{2})$/);
  if(!m) return String(monthKey);
  return parseInt(m[1], 10) + '년 ' + parseInt(m[2], 10) + '월';
}
function shareMonthToCreatedAtIso_(monthKey){
  var cur = getCurrentShareMonthKey_();
  if(monthKey === cur) return new Date().toISOString();
  var m = String(monthKey || '').match(/^(\d{4})-(\d{2})$/);
  if(!m) return new Date().toISOString();
  return new Date(parseInt(m[1], 10), parseInt(m[2], 10) - 1, 15, 12, 0, 0).toISOString();
}
function getDraftShareMonthKey_(d){
  if(!d) return DAILY_MONTH_LEGACY_KEY;
  if(d.shareMonth && /^\d{4}-\d{2}$/.test(String(d.shareMonth))) return String(d.shareMonth);
  var ms = getDraftCreatedAtMs_(d);
  if(ms){
    var dt = new Date(ms);
    if(!isNaN(dt.getTime())) return dt.getFullYear() + '-' + padMonth2_(dt.getMonth() + 1);
  }
  var pub = d.id && state.published && state.published[d.id];
  if(pub && pub.date){
    var pd = Date.parse(String(pub.date).slice(0, 10));
    if(!isNaN(pd)){
      var pdt = new Date(pd);
      return pdt.getFullYear() + '-' + padMonth2_(pdt.getMonth() + 1);
    }
  }
  return DAILY_MONTH_LEGACY_KEY;
}
function groupDailyShareDraftsByMonth_(drafts){
  var groups = {};
  var order = [];
  (drafts || []).forEach(function(d){
    if(!d || !d.id) return;
    var key = getDraftShareMonthKey_(d);
    if(!groups[key]){
      groups[key] = [];
      order.push(key);
    }
    groups[key].push(d);
  });
  order.sort(function(a, b){
    if(a === DAILY_MONTH_LEGACY_KEY) return 1;
    if(b === DAILY_MONTH_LEGACY_KEY) return -1;
    return String(b).localeCompare(String(a));
  });
  return order.map(function(key){
    return { monthKey: key, label: formatShareMonthLabel_(key), drafts: groups[key] };
  });
}
function isDailyMonthCollapsed_(monthKey){
  if(state.dailyMonthCollapsed && Object.prototype.hasOwnProperty.call(state.dailyMonthCollapsed, monthKey)){
    return !!state.dailyMonthCollapsed[monthKey];
  }
  return monthKey !== getCurrentShareMonthKey_();
}
function getDailyShareCatId_(){
  for(var i = 0; i < CATEGORIES.length; i++){
    if(isDailyShareCategory(i)) return i;
  }
  return 6;
}
function refreshDailyTopicSuggestPanel_(){
  var sug = state.dailyTopicSuggestions;
  if(!sug || !sug.monthKey) return false;
  var panel = document.querySelector('.daily-suggest-panel');
  if(!panel) return false;
  var html = renderDailyTopicSuggestHTML_(sug.monthKey);
  if(!html) return false;
  var wrap = document.createElement('div');
  wrap.innerHTML = html;
  var next = wrap.firstChild;
  if(!next) return false;
  panel.replaceWith(next);
  return true;
}

const CLINIC_NAME_REPLACEMENTS = [
  [/힐링\s*트리/g, PERSONAL_BRAND_LABEL],
  [/Healing\s*Tree/gi, PERSONAL_BRAND_LABEL],
  [/healingtree/gi, PERSONAL_BRAND_LABEL]
];
function sanitizePersonalBrandText_(text){
  if(text == null || text === '') return text == null ? '' : text;
  var s = String(text);
  CLINIC_NAME_REPLACEMENTS.forEach(function(pair){ s = s.replace(pair[0], pair[1]); });
  return s;
}
function sanitizeYearPeriodFields_(per){
  if(!per) return per;
  if(per.topic != null) per.topic = sanitizePersonalBrandText_(per.topic);
  if(per.goal != null) per.goal = sanitizePersonalBrandText_(per.goal);
  if(per.rationale != null) per.rationale = sanitizePersonalBrandText_(per.rationale);
  return per;
}
function makePlanRowStableId_(prefix){
  return String(prefix || 'row') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
/** 연간/일상/단계 행에 안정 id를 부여 — index 키 동시편집 시 행 밀림 방지 */
function ensurePlanRowStableIdsInPayload_(payload){
  if(!payload || !payload.branding || typeof payload.branding !== 'object') return false;
  var branding = payload.branding;
  var changed = false;
  var used = {};
  function takeId_(raw, fallback){
    var id = String(raw || '').trim();
    if(!id || used[id]) id = fallback;
    if(used[id]) id = String(fallback || 'row') + '_' + Math.random().toString(36).slice(2, 6);
    used[id] = true;
    return id;
  }
  if(branding.yearPlan && Array.isArray(branding.yearPlan.periods)){
    branding.yearPlan.periods.forEach(function(period, i){
      if(!period || typeof period !== 'object') return;
      var next = takeId_(
        period.id,
        'yp_mig_' + i + '_' + String(period.start || '').replace(/-/g, '')
      );
      if(String(period.id || '') !== next){ period.id = next; changed = true; }
    });
  }
  if(branding.dailySharePlan && Array.isArray(branding.dailySharePlan.themes)){
    branding.dailySharePlan.themes.forEach(function(theme, i){
      if(!theme || typeof theme !== 'object') return;
      var def = DEFAULT_DAILY_SHARE_THEMES[i];
      var next = takeId_(theme.id, (def && def.id) || ('theme_' + i));
      if(String(theme.id || '') !== next){ theme.id = next; changed = true; }
    });
  }
  // 카테고리마다 단계 id 네임스페이스를 분리 — '1'이 도수·리얼무브에 겹치면 뒤 카테고리 id가 깨짐
  Object.keys(branding.subGoalPlans || {}).forEach(function(catId){
    var steps = (branding.subGoalPlans[catId] && branding.subGoalPlans[catId].steps) || [];
    var usedInCat = {};
    var idMap = {};
    steps.forEach(function(step, i){
      if(!step || typeof step !== 'object') return;
      var oldId = String(step.id != null ? step.id : '').trim();
      var preferred = oldId;
      // 숫자-only id는 sync remap이 배열 index로 오인 → s1,s2… 로 통일
      if(!preferred || /^\d+$/.test(preferred)) preferred = 's' + (i + 1);
      var next = preferred;
      if(usedInCat[next]) next = 'st_' + catId + '_' + i;
      if(usedInCat[next]) next = 'st_' + catId + '_' + i + '_' + Math.random().toString(36).slice(2, 5);
      usedInCat[next] = true;
      if(oldId && oldId !== next) idMap[oldId] = next;
      if(String(step.id || '') !== next){ step.id = next; changed = true; }
    });
    if(Object.keys(idMap).length){
      remapDraftStepIdsForCat_(payload, catId, idMap);
      changed = true;
    }
  });
  return changed;
}
function remapDraftStepIdsForCat_(payload, catId, idMap){
  if(!payload || !idMap) return;
  var catKey = String(catId);
  function remapDraft_(d){
    if(!d) return;
    var sid = String(d.roadmapStepId || '');
    if(idMap[sid]) d.roadmapStepId = idMap[sid];
  }
  var extras = payload.extraDraftsByCat && payload.extraDraftsByCat[catKey];
  (extras || []).forEach(remapDraft_);
  // 런타임 CATEGORIES 초안도 같이 맞춤
  try {
    var cat = CATEGORIES[catId] || CATEGORIES[parseInt(catId, 10)];
    if(cat && cat.drafts) cat.drafts.forEach(remapDraft_);
  } catch(eMap){}
  if(payload.draftBrandOverrides){
    Object.keys(payload.draftBrandOverrides).forEach(function(did){
      var ov = payload.draftBrandOverrides[did];
      if(!ov) return;
      var sid = String(ov.roadmapStepId || '');
      if(idMap[sid]) ov.roadmapStepId = idMap[sid];
    });
  }
  if(state.draftBrandOverrides){
    Object.keys(state.draftBrandOverrides).forEach(function(did){
      var ov = state.draftBrandOverrides[did];
      if(!ov) return;
      var sid = String(ov.roadmapStepId || '');
      if(idMap[sid]) ov.roadmapStepId = idMap[sid];
    });
  }
}
function remapIndexedPlanEntityKey_(key, payload){
  key = String(key || '');
  var branding = (payload && payload.branding) || {};
  var m = key.match(/^plan:year:period:(\d+)$/);
  if(m){
    var period = ((branding.yearPlan && branding.yearPlan.periods) || [])[parseInt(m[1], 10)];
    return period && period.id ? ('plan:year:period:' + period.id) : key;
  }
  m = key.match(/^plan:daily:theme:(\d+)$/);
  if(m){
    var theme = ((branding.dailySharePlan && branding.dailySharePlan.themes) || [])[parseInt(m[1], 10)];
    return theme && theme.id ? ('plan:daily:theme:' + theme.id) : key;
  }
  m = key.match(/^plan:subgoal:([^:]+):step:(.+)$/);
  if(m){
    var catSteps = ((((branding.subGoalPlans || {})[m[1]] || {}).steps) || []);
    var keyPart = String(m[2]);
    var si;
    for(si = 0; si < catSteps.length; si++){
      if(catSteps[si] && String(catSteps[si].id) === keyPart) return key;
    }
    if(/^\d+$/.test(keyPart)){
      var n = parseInt(keyPart, 10);
      // 숫자 키는 먼저 sN / N id 로 해석 (배열 index로 오인하면 step:1 → s2 로 빗나감)
      var idCandidates = ['s' + n, String(n)];
      var ci, cand;
      for(ci = 0; ci < idCandidates.length; ci++){
        cand = idCandidates[ci];
        for(si = 0; si < catSteps.length; si++){
          if(catSteps[si] && String(catSteps[si].id) === cand){
            return 'plan:subgoal:' + m[1] + ':step:' + catSteps[si].id;
          }
        }
      }
      // 1-based 순서 → 0-based legacy index 순
      if(n >= 1 && n <= catSteps.length && catSteps[n - 1] && catSteps[n - 1].id != null){
        return 'plan:subgoal:' + m[1] + ':step:' + catSteps[n - 1].id;
      }
      if(n >= 0 && n < catSteps.length && catSteps[n] && catSteps[n].id != null){
        return 'plan:subgoal:' + m[1] + ':step:' + catSteps[n].id;
      }
    }
    return key;
  }
  return key;
}
function migrateIndexedPlanEntityKeysInPayload_(payload, outboxArr){
  if(!payload || typeof payload !== 'object') return false;
  ensurePlanRowStableIdsInPayload_(payload);
  var changed = false;
  function remapMap_(map){
    if(!map || typeof map !== 'object') return;
    Object.keys(map).forEach(function(key){
      var next = remapIndexedPlanEntityKey_(key, payload);
      if(next === key) return;
      if(map[next] == null) map[next] = map[key];
      delete map[key];
      changed = true;
    });
  }
  remapMap_(payload.syncEntityUpdatedAt);
  remapMap_(payload.syncEntityRevisions);
  remapMap_(payload.syncEntityTombstones);
  if(Array.isArray(outboxArr)){
    outboxArr.forEach(function(op){
      if(!op || !op.key) return;
      var next = remapIndexedPlanEntityKey_(op.key, payload);
      if(next !== op.key){ op.key = next; changed = true; }
    });
  }
  return changed;
}
function sanitizeYearPlanObj_(plan){
  if(!plan) return plan;
  if(plan.intent != null) plan.intent = sanitizePersonalBrandText_(plan.intent);
  (plan.periods || []).forEach(function(per, i){
    sanitizeYearPeriodFields_(per);
    if(per && !per.id){
      per.id = 'yp_mig_' + i + '_' + String(per.start || '').replace(/-/g, '');
    }
  });
  return plan;
}
function sanitizeBrandingClinicRefs_(){
  if(!state.branding || typeof state.branding !== 'object') return false;
  var changed = false;
  if(state.branding.yearPlan){
    var snap = JSON.stringify(state.branding.yearPlan);
    sanitizeYearPlanObj_(state.branding.yearPlan);
    if(JSON.stringify(state.branding.yearPlan) !== snap) changed = true;
  }
  if(state.branding.message){
    var msg = sanitizePersonalBrandText_(state.branding.message);
    if(msg !== state.branding.message){ state.branding.message = msg; changed = true; }
  }
  if(state.branding.subGoalPlans && typeof state.branding.subGoalPlans === 'object'){
    Object.keys(state.branding.subGoalPlans).forEach(function(k){
      var sp = state.branding.subGoalPlans[k];
      if(!sp || typeof sp !== 'object') return;
      if(sp.intent != null){
        var intent = sanitizePersonalBrandText_(sp.intent);
        if(intent !== sp.intent){ sp.intent = intent; changed = true; }
      }
      (sp.steps || []).forEach(function(st){
        ['title', 'summary', 'rationale'].forEach(function(field){
          if(st[field] == null) return;
          var next = sanitizePersonalBrandText_(st[field]);
          if(next !== st[field]){ st[field] = next; changed = true; }
        });
      });
    });
  }
  if(state.pendingYearPlan){
    var pendingSnap = JSON.stringify(state.pendingYearPlan);
    sanitizeYearPlanObj_(state.pendingYearPlan);
    if(JSON.stringify(state.pendingYearPlan) !== pendingSnap) changed = true;
  }
  return changed;
}

/** 브랜딩·기획 AI용 — 프로필.html · PROFILE_BRAND_URL PSP·프로그램 구조 요약 */
const DEFAULT_BRAND_FOUNDATION = `
[미카닥 박준규 브랜드 기반 — 프로필 PSP 가이드와 동기화]
브랜드 주체: 미카닥 박준규 (미국 **비수술 근골격계 전문가** · DC·PT · 20년+ 임상 · 3,400+ 전문 블로그)
현재: 리얼무브먼트 서울 약수·인천 계양 대표 원장 (운동·재활·웰니스). 병원 임상 근무 아님.
※ 일반인에게는 「의료인」보다 **근골격계 전문가**·**왜를 설명하는 사람** 으로 기억되게. Doctor/닥터는 헤드라인·슬로gan 주어로 쓰지 않음.
※ 콘텐츠·기획·1년 브랜드 기획의 중심은 **개인 브랜드 '미카닥 박준규'**뿐입니다. 클리닉·병원·기관명(목동·힐링트리 센터 등)을 intent·분기 주제·브랜딩 목표에 쓰지 마세요.
상세 PSP·프로그램 로드맵: ${PROFILE_BRAND_URL}
약력 참고: https://blog.naver.com/allenjoy/120205433765

■ PSP = Philosophy · Science · Practice
(Philosophy based Science, Science based Practice)
- Philosophy: 기능하는 존재에게 물질(구조)과 에너지(작동)가 함께 맞물려야 한다. 핵심 물질 영역은 근골격계.
- Science: 해부·생리·신경생리·생체역학·통증과학으로 원인을 설명하고, 4가지 평가(History·Inspection·Movement·Palpation)로 좁힌다.
- Practice: Manual Therapy(도수) + Movement(PAR·Position·기능운동).
- 궁극 목표: 먼저 구조를 해결하고, 기능을 회복. 불필요한 긴장 없이 스스로 인지·조절.

■ 기준선 · 두 영역
- 편안한 상태 = 기준선
- 통증·불편 → 통증·재활 영역(병원 연계·재활로 회복) · 통증 없음 → 웰니스 영역(더 좋은 상태로)

■ 프로필 맞춤 안내 3분기
1. 통증·재활 — 증상 평가 · 병원 연계·프로그램 안내
2. 움직임·자세 — 기능 · 교정 · 운동
3. 전문가 교육 — CMT · IFC · Re:Al

■ 프로그램·브랜드 라인
- 미카닥 박준규 · 도수치료: PSP STEP01 평가 → STEP02 Manual(Fascia→Muscle→Joint) → STEP03 Movement
- Re:Al Movement: PAR(Passive=P-ROM → Assisted Active → Active → Resistive), Position 1(누움)→2(앉음)→3(서기) → 생활습관·기능운동
- Re:Al Face / IFC: 두개골·안면·경추 구조, 비수술 비침습, 구조→기능
- CMT: 카이로프랙틱·도수 전문가 실무 교육
- 힐자계: 입주민 — PAR·P-스트레칭·자세·가벼운 기능운동(전문 강의·과장 금지)

■ 웰니스 프로그램 (목표별 로드맵)
- 유연성: P-스트레칭·근막경선 → 기능운동·체력
- 자세·체형: 편안한 호흡 기준, 불필요한 긴장 최소화, 누움→앉기→서기
- 기능·체력: PAR + 림프·근막경선 운동
- 얼굴 교정: IFC, 자세·체형과 병행
- 예방·셀프 케어: 생활습관 코칭, 재발 방지

■ 치료·웰니스 로드맵 순서 (참고)
침습(필요 시 병원) → 비침습 도수(병원) → Passive Stretching → Assisted Active → Active(생활습관·자세) → Resistive(기능운동)
※ 미카닥 박준규는 **현재 병원 근무 없음**. 콘텐츠·상담은 **병원 진료·치료 권유** + **운동·재활 프로그램 병행** 포지셔닝. 진단·처방·치료행위 표현 금지.
`.trim();

function getCategoryThreeMonthOutcome_(catId){
  return String(CATEGORY_THREE_MONTH_OUTCOME[String(catId)] || '').trim();
}
function buildMasterBrandContextBlock_(){
  return [
    '[마스터 브랜드 · ' + PERSONAL_BRAND_LABEL + ']',
    MASTER_BRAND_NORTH_STAR,
    BRAND_DUAL_LAYER_HINT,
    '',
    PERSONAL_BRAND_PROFILE
  ].join('\n');
}
function getPersonalBrandProfileForPrompt_(){
  return PERSONAL_BRAND_PROFILE;
}
function getBrandFoundationForPrompt_(){
  return DEFAULT_BRAND_FOUNDATION;
}
function buildBrandStrategyPromptPrefix_(){
  var brand = getBranding_();
  return (
    '미카닥 박준규 DC·PT 개인 브랜드 전략가. PSP·Re:Al·과장·즉효 약속·타 기관 비방 금지.\n' +
    '※ 브랜딩·1년 기획·분기 주제의 중심은 클리닉명이 아닌 **미카닥 박준규** 개인 브랜드입니다.\n' +
    '※ 1년 기획은 마스터 브랜드만. 프로그램별 3개월 여정·주제는 각 탭에서 별도 기획.\n' +
    YEAR_BRAND_WRITING_RULE + '\n' +
    buildMasterBrandContextBlock_() + '\n\n' +
    getBrandFoundationForPrompt_() + '\n\n' +
    '[현재 브랜드 설정]\n' +
    '분기: ' + brand.quarterLabel + '\n' +
    '핵심 메시지: ' + brand.message + '\n' +
    '브랜드 기둥: ' + brand.pillars.join(' · ') + '\n' +
    '분기별 목표(현재 기간): ' + getCurrentMainGoal_()
  );
}
function buildContentStrategyPromptPrefix_(ctx){
  ctx = ctx || {};
  var parts = [
    '미카닥 박준규 DC·PT 콘텐츠 전략가. PSP·Re:Al·과장 금지.',
    YEAR_BRAND_WRITING_RULE,
    buildMasterBrandContextBlock_(),
    buildMainGoalContextBlock_()
  ];
  var catId = ctx.catId != null ? ctx.catId : state.currentCat;
  if(catId != null){
    var outcome = getCategoryThreeMonthOutcome_(catId);
    if(outcome) parts.push('프로그램 3개월 목표: ' + outcome);
  }
  if(ctx.program) parts.push('프로그램: ' + ctx.program);
  if(ctx.intent) parts.push('프로그램 기획 의도: ' + ctx.intent);
  return parts.join('\n\n');
}

function getBranding_(){
  var b = state.branding && typeof state.branding === 'object' ? state.branding : {};
  return {
    quarterLabel: String(b.quarterLabel || DEFAULT_BRANDING.quarterLabel).trim(),
    message: String(b.message || DEFAULT_BRANDING.message).trim(),
    pillars: (b.pillars && b.pillars.length ? b.pillars : DEFAULT_BRANDING.pillars).slice(),
    categoryGoals: Object.assign({}, DEFAULT_BRANDING.categoryGoals, b.categoryGoals || {}),
    seriesGoals: Object.assign({}, b.seriesGoals || {}),
    subGoalPlans: Object.assign({}, b.subGoalPlans || {}),
    yearPlan: b.yearPlan && typeof b.yearPlan === 'object' ? b.yearPlan : null,
    dailySharePlan: normalizeDailySharePlan_(b.dailySharePlan)
  };
}
function normalizeDailySharePlan_(raw){
  var intent = raw && raw.intent != null ? String(raw.intent).trim() : '';
  var inThemes = raw && Array.isArray(raw.themes) ? raw.themes : [];
  var themes = DEFAULT_DAILY_SHARE_THEMES.map(function(def){
    var found = inThemes.find(function(t){ return t && String(t.id) === def.id; });
    return {
      id: def.id,
      label: def.label,
      note: found && found.note != null ? String(found.note).trim() : def.note
    };
  });
  var out = { intent: intent, themes: themes };
  if(raw && raw.updatedAt) out.updatedAt = raw.updatedAt;
  return out;
}
function getDailySharePlan_(){
  return getBranding_().dailySharePlan || normalizeDailySharePlan_(null);
}
function hasDailyShareThemesCustomized_(){
  var plan = getDailySharePlan_();
  if(plan.intent) return true;
  return plan.themes.some(function(t, idx){
    var def = DEFAULT_DAILY_SHARE_THEMES[idx];
    return def && String(t.note || '').trim() !== String(def.note || '').trim();
  });
}
function buildDailyShareContextBlock_(){
  var plan = getDailySharePlan_();
  var lines = ['[일상 공유 · 이번 달 테마]', DAILY_SHARE_MASTER_BRIDGE, '톤: ' + DAILY_SHARE_TONE_ANCHOR];
  if(plan.intent) lines.push('나눔 방향: ' + plan.intent);
  plan.themes.forEach(function(t){
    if(t.note) lines.push('- ' + t.label + ': ' + t.note);
  });
  if(lines.length === 1) return '';
  return lines.join('\n');
}
window.updateDailyShareIntent_ = function(value){
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(!state.branding.dailySharePlan) state.branding.dailySharePlan = normalizeDailySharePlan_(null);
  state.branding.dailySharePlan.intent = String(value || '').trim();
  stampBrandingPlanUpdatedAt_(state.branding.dailySharePlan);
  save({ skipDriveUpload: true, skipGasPush: true });
};
window.updateDailyShareThemeNote_ = function(themeId, value){
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(!state.branding.dailySharePlan) state.branding.dailySharePlan = normalizeDailySharePlan_(null);
  var themes = state.branding.dailySharePlan.themes || normalizeDailySharePlan_(null).themes;
  themes = themes.map(function(t){
    if(String(t.id) !== String(themeId)) return t;
    return Object.assign({}, t, { note: String(value || '').trim() });
  });
  state.branding.dailySharePlan.themes = themes;
  stampBrandingPlanUpdatedAt_(state.branding.dailySharePlan);
  save({ skipDriveUpload: true, skipGasPush: true });
};
window.toggleDailySharePanel_ = function(forceOpen){
  if(forceOpen === true) state.dailyShareCollapsed = false;
  else state.dailyShareCollapsed = state.dailyShareCollapsed === false;
  renderMain();
};
window.toggleDailyMonthGroup_ = function(monthKey){
  monthKey = String(monthKey || '');
  if(!monthKey) return;
  if(!state.dailyMonthCollapsed) state.dailyMonthCollapsed = {};
  state.dailyMonthCollapsed[monthKey] = !isDailyMonthCollapsed_(monthKey);
  renderMain();
};
window.toggleDailySuggestItem_ = function(idx){
  var sug = state.dailyTopicSuggestions;
  if(!sug || !sug.items || !sug.items[idx]) return;
  sug.items[idx].selected = !sug.items[idx].selected;
  if(!refreshDailyTopicSuggestPanel_()) renderMain();
};
window.clearDailyTopicSuggestions_ = function(){
  state.dailyTopicSuggestions = null;
  renderMain();
};
window.suggestDailyShareTopicsForMonth_ = async function(monthKey){
  monthKey = String(monthKey || getCurrentShareMonthKey_());
  if(!/^\d{4}-\d{2}$/.test(monthKey)) monthKey = getCurrentShareMonthKey_();
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = getDailyShareCatId_();
  var cat = CATEGORIES[catId];
  if(!cat) return;
  if(state.currentCat !== catId) selectCat(catId);
  state.dailyShareCollapsed = false;
  if(!state.dailyMonthCollapsed) state.dailyMonthCollapsed = {};
  state.dailyMonthCollapsed[monthKey] = false;
  plannerAiBusy = true;
  state.dailyTopicSuggestions = { monthKey: monthKey, items: [], loading: true };
  startPlannerAiWait_({
    estimateSec: DAILY_TOPIC_SUGGEST_ESTIMATE_SEC,
    busyLabel: '추천 중',
    btnSelector: '[data-daily-suggest-btn="' + monthKey + '"]',
    btnIdleText: formatShareMonthLabel_(monthKey) + ' 주제 추천'
  });
  renderMain();
  try {
    var plan = getDailySharePlan_();
    var monthDrafts = [];
    var otherDrafts = [];
    getVisibleDraftsInMain_(catId).forEach(function(d){
      if(!d || !d.topic) return;
      var line = '- 「' + d.topic + '」' + (d.angle ? ' / ' + d.angle : '');
      if(getDraftShareMonthKey_(d) === monthKey) monthDrafts.push(line);
      else otherDrafts.push(line);
    });
    var existing = (monthDrafts.length ? '[이 달]\n' + monthDrafts.slice(0, 16).join('\n') : '') +
      (otherDrafts.length ? (monthDrafts.length ? '\n' : '') + '[다른 달·기본]\n' + otherDrafts.slice(0, 12).join('\n') : '');
    var themeLines = plan.themes.map(function(t){
      return '- ' + t.id + ' (' + t.label + '): ' + (t.note || '');
    }).join('\n');
    var prompt =
buildContentStrategyPromptPrefix_({ program: '일상 공유 · 팔로워 일상 나눔' }) + '\n\n' +
DAILY_SHARE_MASTER_BRIDGE + '\n톤: ' + DAILY_SHARE_TONE_ANCHOR + '\n\n' +
'[대상 월] ' + formatShareMonthLabel_(monthKey) + ' (' + monthKey + ')\n' +
'- 이 달 계절·날씨·생활 리듬에 맞는 장면으로 제안하세요.\n' +
(plan.intent ? '[이번 달 나눔 방향] ' + plan.intent + '\n' : '') +
'[테마 축]\n' + themeLines + '\n\n' +
'[이미 있는 주제 — 비슷한 제목 피하기]\n' + (existing || '(없음)') + '\n\n' +
'[요청] 위 달에 올릴 일상 공유 주제 6~8개를 제안하세요.\n' +
'- 강의·홍보·의료 단정 금지. 장면·몸감각·짧은 공감 한 스푼.\n' +
'- themeId는 season|body|travel|rest 중 하나.\n' +
'- topic은 호기심 있는 한 줄, angle은 톤·장면 힌트.\n' +
'JSON만: {"topics":[{"topic":"…","angle":"…","themeId":"season"}]}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 2200 });
    var obj = parsePlannerAiJsonObject_(text);
    var themesById = {};
    DEFAULT_DAILY_SHARE_THEMES.forEach(function(t){ themesById[t.id] = t; });
    var items = (obj.topics || []).map(function(t, i){
      var themeId = String((t && t.themeId) || '').trim();
      if(!themesById[themeId]) themeId = DEFAULT_DAILY_SHARE_THEMES[i % DEFAULT_DAILY_SHARE_THEMES.length].id;
      return {
        id: 'dsug_' + i,
        topic: String((t && t.topic) || '').trim(),
        angle: String((t && t.angle) || '').trim(),
        themeId: themeId,
        themeLabel: themesById[themeId] ? themesById[themeId].label : themeId,
        selected: true
      };
    }).filter(function(it){ return !!it.topic; }).slice(0, 8);
    if(!items.length) throw new Error('추천 주제를 찾지 못했어요');
    state.dailyTopicSuggestions = { monthKey: monthKey, items: items, loading: false };
    if(typeof setAppToast === 'function'){
      setAppToast(formatShareMonthLabel_(monthKey) + ' 주제 ' + items.length + '개를 추천했어요.\n고른 뒤 「선택 추가」를 눌러 주세요.', { duration: 4200, variant: 'ok' });
    }
  } catch(e){
    state.dailyTopicSuggestions = null;
    if(typeof setAppToast === 'function'){
      setAppToast('주제 추천 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
    }
  } finally {
    plannerAiBusy = false;
    stopPlannerAiWait_();
    renderMain();
  }
};
window.addSelectedDailyShareTopics_ = function(){
  var sug = state.dailyTopicSuggestions;
  if(!sug || sug.loading || !sug.items || !sug.items.length) return;
  var monthKey = sug.monthKey || getCurrentShareMonthKey_();
  var selected = sug.items.filter(function(it){ return it && it.selected && it.topic; });
  if(!selected.length){
    if(typeof setAppToast === 'function') setAppToast('추가할 주제를 선택해 주세요.', { duration: 3000, variant: 'err' });
    return;
  }
  var catId = getDailyShareCatId_();
  var cat = CATEGORIES[catId];
  if(!cat) return;
  var existingTopics = {};
  (cat.drafts || []).forEach(function(d){
    var t = String((d && d.topic) || '').trim().toLowerCase();
    if(t) existingTopics[t] = true;
  });
  var baseTs = Date.now();
  var added = 0;
  var skipped = 0;
  selected.forEach(function(it){
    var topic = String(it.topic).trim();
    var key = topic.toLowerCase();
    if(existingTopics[key]){ skipped++; return; }
    existingTopics[key] = true;
    var draft = {
      id: 'd' + catId + '-c' + (baseTs + added),
      topic: topic,
      angle: String(it.angle || '').trim() || (it.themeLabel ? it.themeLabel + ' 장면' : '일상 나눔'),
      createdAt: shareMonthToCreatedAtIso_(monthKey),
      shareMonth: monthKey,
      series: getDefaultSeriesForCat_(catId),
      pillar: getDefaultPillarForCat_(catId),
      rationale: it.themeLabel ? (it.themeLabel + ' · ' + formatShareMonthLabel_(monthKey)) : formatShareMonthLabel_(monthKey)
    };
    cat.drafts.push(draft);
    added++;
  });
  if(!added){
    if(typeof setAppToast === 'function') setAppToast('선택한 주제는 이미 목록에 있어요.', { duration: 3500, variant: 'err' });
    return;
  }
  if(!state.dailyMonthCollapsed) state.dailyMonthCollapsed = {};
  state.dailyMonthCollapsed[monthKey] = false;
  state.dailyTopicSuggestions = null;
  save({ driveImmediate: true, gasImmediate: true });
  renderMain();
  if(typeof setAppToast === 'function'){
    var msg = formatShareMonthLabel_(monthKey) + '에 주제 ' + added + '개를 추가했어요.';
    if(skipped) msg += '\n중복 ' + skipped + '개는 건너뛰었어요.';
    setAppToast(msg, { duration: 4000, variant: 'ok' });
  }
};
window.openAddForm_ = function(){
  state.showAdd = true;
  state.newItem.catId = state.currentCat;
  state.newItem.topic = state.newItem.topic || '';
  var btn = document.getElementById('add-toggle-btn');
  if(btn) btn.textContent = '닫기';
  renderMain();
};
function addMonthsToDate_(base, months){
  var d = new Date(base);
  d.setMonth(d.getMonth() + months);
  return d;
}
function formatPeriodRangeLabel_(startIso, endIso){
  var s = new Date(startIso);
  var e = new Date(endIso);
  if(isNaN(s.getTime()) || isNaN(e.getTime())) return '';
  return s.getFullYear() + '.' + (s.getMonth() + 1) + '~' + e.getFullYear() + '.' + (e.getMonth() + 1);
}
function buildRollingPeriodsFromAnchor_(anchorIso, goalList){
  var anchor = anchorIso ? new Date(anchorIso) : new Date();
  if(isNaN(anchor.getTime())) anchor = new Date();
  anchor.setHours(12, 0, 0, 0);
  var goals = goalList || [];
  var periods = [];
  var start = anchor;
  for(var i = 0; i < 4; i++){
    var end = addMonthsToDate_(start, 3);
    end.setDate(end.getDate() - 1);
    periods.push({
      id: makePlanRowStableId_('yp'),
      index: i,
      start: start.toISOString().slice(0, 10),
      end: end.toISOString().slice(0, 10),
      goal: String(goals[i] != null ? goals[i] : '').trim()
    });
    start = addMonthsToDate_(start, 3);
  }
  return periods;
}
function getYearPlan_(){
  var brand = state.branding && typeof state.branding === 'object' ? state.branding : {};
  var yp = brand.yearPlan;
  if(yp && yp.periods && yp.periods.length === 4){
    return {
      anchorDate: yp.anchorDate || yp.periods[0].start || new Date().toISOString().slice(0, 10),
      intent: String(yp.intent || '').trim(),
      periods: yp.periods.map(function(p, i){
        return {
          id: p.id || ('yp_mig_' + i + '_' + String(p.start || '').replace(/-/g, '')),
          index: i,
          start: p.start,
          end: p.end,
          goal: String(p.goal || p.topic || '').trim(),
          topic: String(p.topic || p.goal || '').trim(),
          rationale: String(p.rationale || '').trim(),
          pinned: !!p.pinned,
          months: parseInt(p.months, 10) || 3,
          createdAt: p.createdAt || ''
        };
      })
    };
  }
  var b = getBranding_();
  var anchor = new Date().toISOString().slice(0, 10);
  var goals = [b.message, '', '', ''];
  return { anchorDate: anchor, periods: buildRollingPeriodsFromAnchor_(anchor, goals) };
}
function getCurrentMainGoal_(){
  var plan = getYearPlan_();
  if(plan.periods[0] && plan.periods[0].goal) return plan.periods[0].goal;
  return getBranding_().message || '';
}
function getYearPlanMeta_(){
  var brand = state.branding && typeof state.branding === 'object' ? state.branding : {};
  var yp = brand.yearPlan || {};
  var pending = state.pendingYearPlan;
  var intent = '';
  var currentRationale = '';
  var currentTopic = '';
  if(pending && pending.periods && pending.periods.length){
    intent = String(pending.intent || yp.intent || '').trim();
    var cur = pending.periods[0] || {};
    currentRationale = String(cur.rationale || '').trim();
    currentTopic = String(cur.topic || cur.goal || '').trim();
  } else if(yp.periods && yp.periods.length){
    intent = String(yp.intent || '').trim();
    var cur2 = yp.periods[0] || {};
    currentRationale = String(cur2.rationale || '').trim();
    currentTopic = String(cur2.topic || cur2.goal || '').trim();
  }
  return { intent: intent, currentRationale: currentRationale, currentTopic: currentTopic };
}
function buildMainGoalContextBlock_(){
  var goal = getCurrentMainGoal_();
  var meta = getYearPlanMeta_();
  var lines = ['[분기별 목표 · 1년 브랜드 기획]', '목표(현재 분기): ' + goal];
  if(meta.currentTopic && meta.currentTopic !== goal) lines.push('분기 주제: ' + meta.currentTopic);
  if(meta.intent) lines.push('기획 의도(전체 1년·순서 이유): ' + meta.intent);
  if(meta.currentRationale) lines.push('현재 분기 의도(이 기간 방향·독자가 얻을 것): ' + meta.currentRationale);
  if(!meta.intent && !meta.currentRationale) lines.push('(의도 미작성 — 1년 기획에서 기획 의도·분기 의도를 자세히 적어 주세요)');
  return lines.join('\n');
}
function normalizeProgramStrategyGuideTemplate_(raw){
  var t = String(raw || '').trim();
  if(!t) return '기준:\n- \n\n의도:\n- ';
  var hasCriteria = /(^|\n)\s*기준\s*:/m.test(t);
  var hasIntent = /(^|\n)\s*의도\s*:/m.test(t);
  if(hasCriteria && hasIntent) return t;
  if(hasCriteria && !hasIntent) return t + '\n\n의도:\n- ';
  if(!hasCriteria && hasIntent) return '기준:\n- \n\n' + t;
  var blocks = t.split(/\n\s*\n/).map(function(s){ return s.trim(); }).filter(Boolean);
  if(blocks.length >= 2){
    return '기준:\n' + blocks[0] + '\n\n의도:\n' + blocks.slice(1).join('\n\n');
  }
  return '기준:\n' + t + '\n\n의도:\n- ';
}
function getProgramPlanMeta_(catId){
  function strategyText(plan){
    if(!plan) return '';
    var sg = String(plan.strategyGuide || '').trim();
    if(sg) return normalizeProgramStrategyGuideTemplate_(sg);
    var c = String(plan.criteria || '').trim();
    var i = String(plan.intent || '').trim();
    if(c && i) return normalizeProgramStrategyGuideTemplate_(c + '\n\n' + i);
    return normalizeProgramStrategyGuideTemplate_(c || i);
  }
  var pending = state.pendingSubGoalPlan;
  if(pending && sameCatId_(pending.catId, catId) && pending.plan){
    return {
      intent: String(pending.plan.intent || '').trim(),
      brandProfile: String(pending.plan.brandProfile || '').trim(),
      strategyGuide: strategyText(pending.plan),
      steps: (pending.plan.steps || []).map(function(s){
        return { id: s.id, title: s.title, summary: s.summary || '', rationale: s.rationale || '', pinned: !!s.pinned };
      })
    };
  }
  var plan = getSubGoalPlan_(catId);
  if(!plan) return { intent: '', brandProfile: '', strategyGuide: '', steps: [] };
  return {
    intent: String(plan.intent || '').trim(),
    brandProfile: String(plan.brandProfile || '').trim(),
    strategyGuide: strategyText(plan),
    steps: (plan.steps || []).map(function(s){
      return { id: s.id, title: s.title, summary: s.summary || '', rationale: s.rationale || '', pinned: !!s.pinned };
    })
  };
}
function getProgramBrandProfile_(catId){
  var meta = getProgramPlanMeta_(catId);
  return meta.brandProfile || getProgramSeedBrandProfile_(catId);
}
function getProgramStrategyGuide_(catId){
  var meta = getProgramPlanMeta_(catId);
  return meta.strategyGuide || getProgramSeedStrategyGuide_(catId);
}
function buildProgramIdentityPromptBlock_(catId){
  var bp = getProgramBrandProfile_(catId);
  var sg = getProgramStrategyGuide_(catId);
  if(!bp && !sg) return '';
  var lines = ['[프로그램 정체성 — 채널 지침과 함께 참고]'];
  if(bp) lines.push('브랜딩 요소: ' + bp);
  if(sg){
    lines.push('생성 기준·기획 의도:');
    lines.push(sg);
  }
  return lines.join('\n');
}
function buildProgramPlanContextBlock_(catId, stepId){
  var cat = CATEGORIES[catId];
  var meta = getProgramPlanMeta_(catId);
  var brandProfile = getProgramBrandProfile_(catId);
  var strategyGuide = getProgramStrategyGuide_(catId);
  var outcome = getCategoryThreeMonthOutcome_(catId);
  var lines = ['[프로그램 기획 · ' + (cat ? cat.name + ' (' + cat.audience + ')' : '') + ']'];
  if(outcome) lines.push('3개월 후 독자: ' + outcome);
  if(brandProfile) lines.push('프로그램 브랜딩 요소: ' + brandProfile);
  if(strategyGuide) lines.push('하위 목표 생성 기준·기획 의도: ' + strategyGuide);
  else lines.push('(생성 기준·기획 의도 미작성 — 기획 워크숍에서 자세히 적어 주세요)');
  if(meta.steps.length){
    lines.push('', '하위 목표 단계:');
    meta.steps.forEach(function(s, i){
      var mark = stepId != null && String(s.id) === String(stepId) ? ' ← 이번 단계' : '';
      lines.push((i + 1) + '. ' + s.title + (s.summary ? ' — ' + s.summary : '') + mark);
      if(s.rationale) lines.push('   단계 의도: ' + s.rationale);
    });
  }
  if(stepId != null){
    var step = meta.steps.find(function(s){ return String(s.id) === String(stepId); });
    if(step && step.rationale){
      lines.push('', '[이번 단계 의도 — 주제·콘텐츠 기획 시 반드시 참고]');
      lines.push(step.rationale);
    }
  }
  return lines.join('\n');
}
function buildTopicPlanPromptPrefix_(catId, stepId){
  return (
    buildContentStrategyPromptPrefix_({ mainGoal: getCurrentMainGoal_(), program: getCategoryProgramLine_(catId) + (CATEGORIES[catId] ? ' · ' + CATEGORIES[catId].name : '') }) + '\n\n' +
    buildProgramPlanContextBlock_(catId, stepId)
  );
}
function renderIntentRefBlockHTML_(title, body, opts){
  opts = opts || {};
  var open = opts.open !== false ? ' open' : '';
  return '<details class="ws-ref-block"' + open + '>' +
    '<summary class="ws-ref-summary">' + escapeHtml(title) + '</summary>' +
    '<div class="ws-ref-body">' + escapeHtml(body) + '</div>' +
  '</details>';
}
function syncBrandingMessageFromYearPlan_(){
  var plan = getYearPlan_();
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(!state.branding.yearPlan) state.branding.yearPlan = plan;
  if(plan.periods[0]){
    state.branding.message = plan.periods[0].goal || state.branding.message || '';
    var label = formatPeriodRangeLabel_(plan.periods[0].start, plan.periods[0].end);
    if(label) state.branding.quarterLabel = label;
  }
}
function hasSubGoalPlan_(catId){
  var plan = getSubGoalPlan_(catId);
  return !!(plan && plan.steps && plan.steps.length);
}
function hasTopicsFilledInPlan_(catId){
  var plan = getSubGoalPlan_(catId);
  if(!plan || !plan.steps.length) return false;
  return plan.steps.some(function(s){
    return countFilledTopicSlots_(catId, String(s.id)) > 0;
  });
}
function isYearPlanCustomized_(){
  if(!state.branding || !state.branding.yearPlan || !state.branding.yearPlan.periods) return false;
  if(state.branding.yearPlan.confirmed) return true;
  var periods = state.branding.yearPlan.periods;
  for(var i = 0; i < periods.length; i++){
    var g = String((periods[i] && periods[i].goal) || '').trim();
    if(!g) continue;
    if(i === 0 && g === DEFAULT_BRANDING.message) continue;
    return true;
  }
  return false;
}
function needsPlannerSetupGuide_(){
  if(state.plannerSetupDismissed) return false;
  if(isOpsManualCategory(state.currentCat)) return false;
  if(isDailyShareCategory(state.currentCat)){
    var dailyCat = CATEGORIES[state.currentCat];
    var draftCount = dailyCat && dailyCat.drafts ? dailyCat.drafts.filter(function(d){ return d && d.id; }).length : 0;
    return !hasDailyShareThemesCustomized_() && draftCount < 2;
  }
  return !isYearPlanCustomized_() || !hasSubGoalPlan_(state.currentCat) || !hasTopicsFilledInPlan_(state.currentCat);
}
function renderDailyShareSetupGuideHTML_(){
  return '<div class="planner-setup-guide daily-setup-guide">' +
    '<button type="button" class="planner-setup-dismiss" onclick="dismissPlannerSetupGuide_()" aria-label="안내 닫기">×</button>' +
    '<div class="planner-setup-title">일상 공유, 이렇게 시작해요</div>' +
    '<ol class="planner-setup-steps">' +
      '<li class="planner-setup-step setup-tone-year">' +
        '<span class="planner-setup-step-label">① 이번 달 테마 · 나눔 방향 잡기</span>' +
        '<button type="button" class="setup-step-btn" onclick="toggleDailySharePanel_(true)">설정</button>' +
      '</li>' +
      '<li class="planner-setup-step setup-tone-program">' +
        '<span class="planner-setup-step-label">② 이번 달 주제 추천 · 선택 추가</span>' +
        '<button type="button" class="setup-step-btn" onclick="suggestDailyShareTopicsForMonth_()">추천</button>' +
      '</li>' +
      '<li class="planner-setup-step setup-tone-topic">' +
        '<span class="planner-setup-step-label">③ 짧은 일상 글 생성 · 발행</span>' +
        '<span class="planner-setup-hint">카드 탭 → 발행완료</span>' +
      '</li>' +
    '</ol>' +
  '</div>';
}
function renderPlannerSetupGuideHTML_(){
  if(!needsPlannerSetupGuide_()) return '';
  if(isDailyShareCategory(state.currentCat)){
    return renderDailyShareSetupGuideHTML_();
  }
  var yearDone = isYearPlanCustomized_();
  var subDone = hasSubGoalPlan_(state.currentCat);
  var topicsDone = subDone && hasTopicsFilledInPlan_(state.currentCat);
  return '<div class="planner-setup-guide">' +
    '<button type="button" class="planner-setup-dismiss" onclick="dismissPlannerSetupGuide_()" aria-label="안내 닫기">×</button>' +
    '<div class="planner-setup-title">3단계로 시작해요</div>' +
    '<ol class="planner-setup-steps">' +
      '<li class="planner-setup-step setup-tone-year' + (yearDone ? ' done' : '') + '">' +
        '<span class="planner-setup-step-label">① 분기별 목표 · 1년 4기간</span>' +
        (yearDone ? '<span class="planner-setup-check">✓</span>' : '<button type="button" class="setup-step-btn" onclick="openPlanWorkshop_(\'year\')">기획</button>') +
      '</li>' +
      '<li class="planner-setup-step setup-tone-program' + (subDone ? ' done' : '') + '">' +
        '<span class="planner-setup-step-label">② 하위 목표 · 이 프로그램</span>' +
        (subDone ? '<span class="planner-setup-check">✓</span>' : '<button type="button" class="setup-step-btn" onclick="runProgramSetupWithAI_()">AI 기획</button>') +
      '</li>' +
      '<li class="planner-setup-step setup-tone-topic' + (topicsDone ? ' done' : ' pending') + '">' +
        '<span class="planner-setup-step-label">③ 주제 · 단계별 5개</span>' +
        (topicsDone ? '<span class="planner-setup-check">✓</span>' : (subDone ? '<button type="button" class="setup-step-btn" onclick="openTopicPlanningForActiveStep_()">기획</button>' : '<span class="planner-setup-hint">② 이후</span>')) +
      '</li>' +
    '</ol>' +
  '</div>';
}
window.openTopicPlanningForActiveStep_ = function(){
  var catId = state.currentCat;
  var plan = getSubGoalPlan_(catId);
  if(!plan || !plan.steps.length){
    if(typeof setAppToast === 'function') setAppToast('먼저 프로그램 하위 목표를 기획해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  openPlanWorkshop_('topic', getActiveSubGoalStepId_(catId));
};
window.dismissPlannerSetupGuide_ = function(){
  state.plannerSetupDismissed = true;
  save({ skipDriveUpload: true, skipGasPush: true });
  renderMain();
};
window.toggleLegacyDrafts_ = function(){
  state.legacyDraftsOpen = !state.legacyDraftsOpen;
  renderTabs();
  renderMain();
};
function ensureYearPlanMigrated_(){
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(state.branding.yearPlan && state.branding.yearPlan.periods && state.branding.yearPlan.periods.length === 4) return false;
  var plan = getYearPlan_();
  state.branding.yearPlan = { anchorDate: plan.anchorDate, periods: plan.periods };
  syncBrandingMessageFromYearPlan_();
  return true;
}
function usePendingProgramPreview_(catId){
  catId = catId != null ? catId : state.currentCat;
  var p = state.pendingSubGoalPlan;
  return !!(p && sameCatId_(p.catId, catId) && p.plan && p.plan.steps && p.plan.steps.length && isPendingSubGoalPlanDirty_(catId));
}
function getEffectiveSubGoalPlan_(catId){
  if(usePendingProgramPreview_(catId)){
    var p = state.pendingSubGoalPlan;
    return {
      steps: (p.plan.steps || []).map(function(s){
        return {
          id: String(s.id),
          title: s.title || '',
          summary: s.summary || '',
          rationale: s.rationale || '',
          pinned: !!s.pinned
        };
      }),
      miscLabel: p.plan.miscLabel || SUBGOAL_MISC_LABEL,
      intent: String(p.plan.intent || '').trim()
    };
  }
  return getSubGoalPlan_(catId);
}
function getDraftsForPendingSubGoalStep_(catId, stepId){
  var cat = CATEGORIES[catId];
  var p = state.pendingSubGoalPlan;
  if(!cat || !p) return [];
  var sid = String(stepId);
  var list = [];
  (p.assignments || []).forEach(function(a){
    if(!a || !a.draftId || String(a.stepId || '') !== sid) return;
    var d = (cat.drafts || []).find(function(x){ return x && x.id === a.draftId; });
    if(d) list.push({ draft: d, order: parseInt(a.order, 10) || 999 });
  });
  list.sort(function(a, b){ return a.order - b.order; });
  return list.map(function(x){ return x.draft; });
}
function getDraftsForSubGoalStep_(catId, stepId, opts){
  opts = opts || {};
  if(!opts.live && usePendingProgramPreview_(catId)){
    return getDraftsForPendingSubGoalStep_(catId, stepId);
  }
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return [];
  return cat.drafts.filter(function(d){
    if(!d || !d.id) return false;
    return getDraftRoadmapStepId_(d, catId, cat.drafts.indexOf(d)) === String(stepId);
  }).sort(function(a, b){
    var ia = cat.drafts.indexOf(a);
    var ib = cat.drafts.indexOf(b);
    var pa = getDraftStepParts_(a, catId, ia);
    var pb = getDraftStepParts_(b, catId, ib);
    if(pa.step !== pb.step) return pa.step - pb.step;
    if(String(stepId) === SUBGOAL_MISC_ID){
      var ta = userAddedDraftTimestamp_(a.id);
      var tb = userAddedDraftTimestamp_(b.id);
      if(ta !== tb) return tb - ta;
    }
    return ia - ib;
  });
}
function getDraftForStepSlot_(catId, stepId, slotNum, opts){
  opts = opts || {};
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return null;
  var slot = parseInt(slotNum, 10);
  if(slot < 1 || slot > 5) return null;
  var sid = String(stepId);
  if(!opts.live && usePendingProgramPreview_(catId)){
    var found = null;
    (state.pendingSubGoalPlan.assignments || []).forEach(function(a){
      if(found || !a || !a.draftId) return;
      if(String(a.stepId || '') !== sid) return;
      if(parseInt(a.order, 10) !== slot) return;
      found = (cat.drafts || []).find(function(x){ return x && x.id === a.draftId; }) || null;
    });
    return found;
  }
  for(var i = 0; i < cat.drafts.length; i++){
    var d = cat.drafts[i];
    if(!d || !d.id) continue;
    if(getDraftRoadmapStepId_(d, catId, i) !== sid) continue;
    if(getDraftStepParts_(d, catId, i).step === slot) return d;
  }
  return null;
}
function ensurePendingAssignmentForDraft_(catId, stepId, slotNum, draftId){
  if(!draftId || !usePendingProgramPreview_(catId)) return;
  var p = state.pendingSubGoalPlan;
  if(!p) return;
  if(!p.assignments) p.assignments = [];
  var sid = String(stepId);
  var slot = parseInt(slotNum, 10);
  var hit = null;
  p.assignments.forEach(function(a){
    if(a && a.draftId === draftId) hit = a;
  });
  if(hit){
    hit.stepId = sid;
    hit.order = slot;
  } else {
    p.assignments = p.assignments.filter(function(a){
      return !(a && String(a.stepId || '') === sid && parseInt(a.order, 10) === slot);
    });
    p.assignments.push({ draftId: draftId, stepId: sid, order: slot });
  }
  persistPendingSubGoalPlan_();
}
function syncPendingPlansOnRender_(){
  if(state.pendingYearPlan && hasYearPlanApplied_()){
    if(isPendingYearPlanContentSameAsApplied_() || isPendingYearPlanSameAsApplied_()){
      refreshPendingYearPlanFromApplied_();
    }
  }
  var catId = state.currentCat;
  if(state.pendingSubGoalPlan && sameCatId_(state.pendingSubGoalPlan.catId, catId) && hasSubGoalPlan_(catId)){
    if(isPendingSubGoalPlanStructureSameAsApplied_(catId)){
      reconcileSubGoalDraftSteps_(catId);
      state.pendingSubGoalPlan.assignments = buildSubGoalAssignmentsFromDrafts_(catId);
      persistPendingSubGoalPlan_();
    }
  }
}
function normalizeStepDraftSlots_(catId, stepId){
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan) return false;
  var sid = String(stepId);
  var title = getSubGoalStepTitle_(plan, sid);
  var drafts = getDraftsForSubGoalStep_(catId, sid, { live: true });
  var bySlot = {};
  var overflow = [];
  drafts.forEach(function(d){
    var di = cat.drafts.indexOf(d);
    var slot = getDraftStepParts_(d, catId, di).step;
    if(slot < 1 || slot > 5){
      overflow.push(d);
      return;
    }
    if(!bySlot[slot]){
      bySlot[slot] = d;
      return;
    }
    var existing = bySlot[slot];
    var dPinned = !!(state.pinnedDraftIds && state.pinnedDraftIds[d.id]);
    var exPinned = !!(state.pinnedDraftIds && state.pinnedDraftIds[existing.id]);
    if(dPinned && !exPinned){
      overflow.push(existing);
      bySlot[slot] = d;
    } else {
      overflow.push(d);
    }
  });
  var changed = false;
  for(var s = 1; s <= 5; s++){
    if(bySlot[s]){
      applyDraftRoadmapAssignment_(bySlot[s], catId, sid, title, s, 5);
      changed = true;
    }
  }
  overflow.forEach(function(d){
    var empty = firstEmptyStepSlot_(catId, sid);
    if(empty){
      applyDraftRoadmapAssignment_(d, catId, sid, title, empty, 5);
      changed = true;
      return;
    }
    var miscLabel = getSubGoalMiscLabel_(plan);
    var miscCount = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID, { live: true }).length + 1;
    applyDraftRoadmapAssignment_(d, catId, SUBGOAL_MISC_ID, miscLabel, miscCount, miscCount);
    changed = true;
  });
  return changed;
}
function buildStepSlotDraftMap_(catId, stepId, opts){
  opts = opts || {};
  var slots = [null, null, null, null, null];
  var cat = CATEGORIES[catId];
  var useLive = opts.live || !usePendingProgramPreview_(catId);
  getDraftsForSubGoalStep_(catId, stepId, { live: useLive }).forEach(function(d){
    var idx = cat.drafts.indexOf(d);
    var step = getDraftStepParts_(d, catId, idx).step;
    if(step >= 1 && step <= 5 && !slots[step - 1]) slots[step - 1] = d;
  });
  return slots;
}
function countFilledTopicSlots_(catId, stepId){
  var map = buildStepSlotDraftMap_(catId, stepId);
  var n = 0;
  for(var i = 0; i < 5; i++){
    if(map[i]) n++;
  }
  return n;
}
function stepNeedsMoreTopics_(catId, stepId){
  return countFilledTopicSlots_(catId, stepId) < 5;
}
function applyTopicToStepSlot_(catId, stepId, slotNum, topicData){
  if(!topicData || !topicData.topic) return false;
  var plan = getEffectiveSubGoalPlan_(catId);
  var cat = CATEGORIES[catId];
  if(!plan || !cat) return false;
  var slot = parseInt(slotNum, 10);
  if(slot < 1 || slot > 5) return false;
  var existing = getDraftForStepSlot_(catId, stepId, slot);
  if(existing && state.pinnedDraftIds && state.pinnedDraftIds[existing.id]) return false;
  if(existing && draftIsPublished_(existing.id)) return false;
  var title = getSubGoalStepTitle_(plan, stepId);
  if(existing){
    existing.topic = String(topicData.topic).trim();
    if(topicData.angle != null) existing.angle = String(topicData.angle).trim();
    if(topicData.rationale) existing.rationale = stripTopicRationaleStepPrefix_(String(topicData.rationale).trim());
    existing.updatedAt = new Date().toISOString();
    applyDraftRoadmapAssignment_(existing, catId, stepId, title, slot, 5);
    ensurePendingAssignmentForDraft_(catId, stepId, slot, existing.id);
    return true;
  }
  var id = makeExtraDraftId_(catId, slot * 1000 + String(stepId).charCodeAt(0));
  var draft = {
    id: id,
    topic: String(topicData.topic).trim(),
    angle: String(topicData.angle || '').trim(),
    rationale: stripTopicRationaleStepPrefix_(String(topicData.rationale || '').trim()),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  applyDraftRoadmapAssignment_(draft, catId, stepId, title, slot, 5);
  cat.drafts.push(draft);
  ensurePendingAssignmentForDraft_(catId, stepId, slot, draft.id);
  return true;
}
function mergeAiTopicsToStepSlots_(catId, stepId, aiTopics){
  var slotMap = buildStepSlotDraftMap_(catId, stepId);
  var merged = [];
  var aiIdx = 0;
  for(var slot = 1; slot <= 5; slot++){
    var d = slotMap[slot - 1];
    if(d && state.pinnedDraftIds && state.pinnedDraftIds[d.id]) merged.push(null);
    else merged.push((aiTopics && aiTopics[aiIdx++]) || null);
  }
  return merged;
}
function rebuildPendingProgramAssignments_(payload, oldSteps){
  var catId = payload.catId;
  var cat = CATEGORIES[catId];
  if(!cat || !payload.plan) return;
  oldSteps = oldSteps || [];
  var newSteps = payload.plan.steps || [];
  var newAssignments = [];
  (payload.assignments || []).forEach(function(a){
    if(!a || !a.draftId) return;
    var d = (cat.drafts || []).find(function(x){ return x && x.id === a.draftId; });
    if(!d) return;
    var oldSid = String(a.stepId);
    var oldIdx = -1;
    for(var i = 0; i < oldSteps.length; i++){
      if(String(oldSteps[i].id) === oldSid){ oldIdx = i; break; }
    }
    if(oldIdx < 0){
      var n = parseInt(oldSid, 10);
      if(n >= 1 && n <= oldSteps.length) oldIdx = n - 1;
    }
    if(oldIdx < 0 || oldIdx >= newSteps.length) return;
    var newStep = newSteps[oldIdx];
    var newSid = String(newStep.id);
    var di = cat.drafts.indexOf(d);
    var slot = getDraftStepParts_(d, catId, di).step;
    if(slot < 1 || slot > 5) slot = parseInt(a.order, 10) || 1;
    newAssignments.push({ draftId: a.draftId, stepId: newSid, order: slot });
    applyDraftRoadmapAssignment_(d, catId, newSid, newStep.title || '', slot, 5);
  });
  payload.assignments = newAssignments;
}
function countMissingInSubGoalStep_(catId, stepId){
  var slotMap = buildStepSlotDraftMap_(catId, stepId);
  var n = 0;
  for(var i = 0; i < 5; i++){
    var d = slotMap[i];
    if(d && !draftHasContent(d)) n++;
  }
  return n;
}
function getVisibleDraftsInMain_(catId){
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return [];
  if(isDailyShareCategory(catId)){
    return (cat.drafts || []).filter(function(d){
      return d && d.id && !(state.deletedDraftIds && state.deletedDraftIds[d.id]);
    }).sort(function(a, b){
      var ta = userAddedDraftTimestamp_(a.id) || (a.createdAt ? Date.parse(a.createdAt) : 0);
      var tb = userAddedDraftTimestamp_(b.id) || (b.createdAt ? Date.parse(b.createdAt) : 0);
      if(ta !== tb) return tb - ta;
      return (cat.drafts.indexOf(b) - cat.drafts.indexOf(a));
    });
  }
  var plan = getSubGoalPlan_(catId);
  var out = [];
  var seen = {};
  function pushDraft(d){
    if(!d || !d.id || seen[d.id]) return;
    if(state.deletedDraftIds && state.deletedDraftIds[d.id]) return;
    seen[d.id] = true;
    out.push(d);
  }
  if(plan && plan.steps && plan.steps.length){
    plan.steps.forEach(function(step){
      getDraftsForSubGoalStep_(catId, step.id).forEach(pushDraft);
    });
    getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID).forEach(pushDraft);
    return out;
  }
  if(state.legacyDraftsOpen){
    (cat.drafts || []).forEach(pushDraft);
  }
  return out;
}
function countVisibleDraftsInMain_(catId){
  return getVisibleDraftsInMain_(catId).length;
}
function persistPendingSubGoalPlan_(){
  try {
    if(state.pendingSubGoalPlan) sessionStorage.setItem(PENDING_SUBGOAL_SS_KEY, JSON.stringify(state.pendingSubGoalPlan));
    else sessionStorage.removeItem(PENDING_SUBGOAL_SS_KEY);
  } catch(e){}
  bumpPlanWorkshopApplyBtn_();
}
function restorePendingSubGoalPlan_(){
  try {
    var raw = sessionStorage.getItem(PENDING_SUBGOAL_SS_KEY);
    if(!raw) return;
    var p = JSON.parse(raw);
    if(!p || p.catId == null || !p.plan) return;
    var hasSteps = !!(p.plan.steps && p.plan.steps.length);
    var hasFoundation = !!(
      String(p.plan.brandProfile || '').trim() ||
      String(p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '').trim()
    );
    if(!hasSteps && !hasFoundation) return;
    p.catId = normalizePendingCatId_(p.catId);
    state.pendingSubGoalPlan = p;
  } catch(e){}
}
function getSubGoalPlan_(catId){
  var brand = getBranding_();
  var plan = brand.subGoalPlans && brand.subGoalPlans[String(catId)];
  if(!plan || !plan.steps || !plan.steps.length) return null;
  return plan;
}
function getSubGoalMiscLabel_(plan){
  return (plan && plan.miscLabel) ? String(plan.miscLabel).trim() : SUBGOAL_MISC_LABEL;
}
/** '1'↔'s1', 제목·N단계 표기로 plan.steps id 를 찾는다 */
function normalizeStepIdAgainstPlan_(plan, stepId){
  if(!plan || !plan.steps || !plan.steps.length) return '';
  var sid = String(stepId == null ? '' : stepId).trim();
  if(!sid || sid === SUBGOAL_MISC_ID) return sid;
  var i;
  for(i = 0; i < plan.steps.length; i++){
    if(String(plan.steps[i].id) === sid) return String(plan.steps[i].id);
  }
  var num = null;
  var m = sid.match(/^s(\d+)$/i);
  if(m) num = parseInt(m[1], 10);
  else if(/^\d+$/.test(sid)) num = parseInt(sid, 10);
  if(num != null && !isNaN(num)){
    var asS = 's' + num;
    for(i = 0; i < plan.steps.length; i++){
      if(String(plan.steps[i].id) === asS || String(plan.steps[i].id) === String(num)){
        return String(plan.steps[i].id);
      }
    }
    if(num >= 1 && num <= plan.steps.length) return String(plan.steps[num - 1].id);
  }
  return '';
}
function findPlanStepIdByTitle_(plan, title){
  title = String(title || '').trim();
  if(!plan || !title) return '';
  var i;
  for(i = 0; i < plan.steps.length; i++){
    if(String(plan.steps[i].title || '').trim() === title) return String(plan.steps[i].id);
  }
  var m = title.match(/(\d+)\s*단계/);
  if(m){
    var n = parseInt(m[1], 10);
    if(n >= 1 && n <= plan.steps.length) return String(plan.steps[n - 1].id);
  }
  for(i = 0; i < plan.steps.length; i++){
    var st = String(plan.steps[i].title || '').trim();
    if(st && (title.indexOf(st) >= 0 || st.indexOf(title) >= 0)) return String(plan.steps[i].id);
  }
  return '';
}
function normalizeTopicMatchKey_(topic){
  return String(topic || '').replace(/\s+/g, '').replace(/["""'']/g, '').toLowerCase();
}
function findPlanStepIdBySeedTopic_(catId, plan, topic){
  if(!plan || !topic) return '';
  var key = normalizeTopicMatchKey_(topic);
  if(!key) return '';
  var i, j;
  for(i = 0; i < plan.steps.length; i++){
    var topics = getInitialStepTopics_(catId, plan.steps[i].id);
    if(!topics.length) topics = getInitialStepTopics_(catId, i + 1);
    for(j = 0; j < topics.length; j++){
      var tk = normalizeTopicMatchKey_(topics[j].topic);
      if(!tk) continue;
      if(tk === key || (tk.length >= 12 && key.indexOf(tk.slice(0, 12)) >= 0) || (key.length >= 12 && tk.indexOf(key.slice(0, 12)) >= 0)){
        return String(plan.steps[i].id);
      }
    }
  }
  return '';
}
function getDraftRoadmapStepId_(draft, catId, draftIndex){
  var plan = getSubGoalPlan_(catId);
  if(!plan || !draft) return null;
  var ov = state.draftBrandOverrides && state.draftBrandOverrides[draft.id];
  var stored = (ov && ov.roadmapStepId) || draft.roadmapStepId;
  if(stored){
    stored = String(stored);
    if(stored === SUBGOAL_MISC_ID){
      // misc 로 떨어진 뒤에도 series·시드 주제로 복구 시도
      var rescued = findPlanStepIdByTitle_(plan, (ov && ov.series) || draft.series) ||
        findPlanStepIdBySeedTopic_(catId, plan, draft.topic);
      if(rescued) return rescued;
      return SUBGOAL_MISC_ID;
    }
    var normalized = normalizeStepIdAgainstPlan_(plan, stored);
    if(normalized && normalized !== SUBGOAL_MISC_ID) return normalized;
  }
  if(isUserAddedDraftId_(draft.id)){
    var ua = findPlanStepIdByTitle_(plan, draft.series) || findPlanStepIdBySeedTopic_(catId, plan, draft.topic);
    return ua || SUBGOAL_MISC_ID;
  }
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var miscLabel = getSubGoalMiscLabel_(plan);
  if(meta.series === miscLabel){
    var byTopic = findPlanStepIdBySeedTopic_(catId, plan, draft.topic);
    return byTopic || SUBGOAL_MISC_ID;
  }
  var byTitle = findPlanStepIdByTitle_(plan, meta.series);
  if(byTitle) return byTitle;
  var bySeed = findPlanStepIdBySeedTopic_(catId, plan, draft.topic);
  if(bySeed) return bySeed;
  return SUBGOAL_MISC_ID;
}
function getSubGoalStepTitle_(plan, stepId){
  if(String(stepId) === SUBGOAL_MISC_ID) return getSubGoalMiscLabel_(plan);
  for(var i = 0; i < (plan.steps || []).length; i++){
    if(String(plan.steps[i].id) === String(stepId)) return plan.steps[i].title;
  }
  return String(stepId);
}
function applyDraftRoadmapAssignment_(draft, catId, stepId, stepTitle, order, totalInStep){
  if(!draft) return;
  draft.series = stepTitle;
  draft.step = order + '/' + totalInStep;
  draft.roadmapStepId = String(stepId);
  if(!isUserAddedDraftId_(draft.id)){
    if(!state.draftBrandOverrides) state.draftBrandOverrides = {};
    if(!state.draftBrandOverrides[draft.id]) state.draftBrandOverrides[draft.id] = {};
    state.draftBrandOverrides[draft.id].series = draft.series;
    state.draftBrandOverrides[draft.id].step = draft.step;
    state.draftBrandOverrides[draft.id].roadmapStepId = draft.roadmapStepId;
  }
}
function isValidSubGoalStepId_(plan, stepId){
  return !!normalizeStepIdAgainstPlan_(plan, stepId);
}
/** 주제 기획안·수동 추가 초안의 단계 배정. 유효한 step이면 유지, 없으면 기타. */
function resolveUserAddedDraftStepAssignment_(draft, catId){
  if(!draft || !isUserAddedDraftId_(draft.id)) return null;
  var plan = getSubGoalPlan_(catId);
  if(!plan) return null;
  var sid = normalizeStepIdAgainstPlan_(plan, draft.roadmapStepId) ||
    findPlanStepIdByTitle_(plan, draft.series) ||
    findPlanStepIdBySeedTopic_(catId, plan, draft.topic);
  var order = 0;
  var m = String(draft.step || '').match(/^(\d+)\s*\/\s*(\d+)/);
  if(m) order = parseInt(m[1], 10) || 0;
  if(sid){
    return { stepId: sid, order: (order >= 1 && order <= 5) ? order : 1, total: 5 };
  }
  if(state.pendingSubGoalPlan && Number(state.pendingSubGoalPlan.catId) === Number(catId)){
    var pa = (state.pendingSubGoalPlan.assignments || []).find(function(a){
      return a && a.draftId === draft.id;
    });
    var psid = pa ? normalizeStepIdAgainstPlan_(plan, pa.stepId) : '';
    if(psid){
      var po = parseInt(pa.order, 10) || order || 1;
      return { stepId: psid, order: (po >= 1 && po <= 5) ? po : 1, total: 5 };
    }
  }
  return null;
}
function applyResolvedUserAddedStepOrMisc_(draft, catId){
  var resolved = resolveUserAddedDraftStepAssignment_(draft, catId);
  if(resolved){
    var plan = getSubGoalPlan_(catId);
    applyDraftRoadmapAssignment_(
      draft, catId, resolved.stepId,
      getSubGoalStepTitle_(plan, resolved.stepId),
      resolved.order, resolved.total
    );
    return true;
  }
  return assignUserAddedDraftToMisc_(draft, catId);
}
function assignUserAddedDraftToMisc_(draft, catId){
  if(!draft || !isUserAddedDraftId_(draft.id)) return false;
  var plan = getSubGoalPlan_(catId);
  if(!plan) return false;
  var miscLabel = getSubGoalMiscLabel_(plan);
  var existing = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID, { live: true })
    .filter(function(d){ return d && d.id !== draft.id; });
  var total = existing.length + 1;
  existing.forEach(function(d, i){
    applyDraftRoadmapAssignment_(d, catId, SUBGOAL_MISC_ID, miscLabel, i + 2, total);
  });
  applyDraftRoadmapAssignment_(draft, catId, SUBGOAL_MISC_ID, miscLabel, 1, total);
  return true;
}
function normalizeMiscUserAddedOrder_(catId){
  var plan = getSubGoalPlan_(catId);
  if(!plan) return;
  var miscLabel = getSubGoalMiscLabel_(plan);
  var list = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID, { live: true });
  if(!list.length) return;
  var userAdded = list.filter(function(d){ return isUserAddedDraftId_(d.id); });
  var others = list.filter(function(d){ return !isUserAddedDraftId_(d.id); });
  userAdded.sort(function(a, b){ return userAddedDraftTimestamp_(b.id) - userAddedDraftTimestamp_(a.id); });
  var ordered = userAdded.concat(others);
  var total = ordered.length;
  ordered.forEach(function(d, i){
    applyDraftRoadmapAssignment_(d, catId, SUBGOAL_MISC_ID, miscLabel, i + 1, total);
  });
}
function ensureUserAddedDraftsInMisc_(catId){
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan) return;
  // 주제 기획안이 단계에 붙인 초안은 기타로 끌어내리지 않음. 미배정·깨진 step만 misc.
  var toMigrate = [];
  (cat.drafts || []).forEach(function(d){
    if(!d || !isUserAddedDraftId_(d.id)) return;
    var resolved = resolveUserAddedDraftStepAssignment_(d, catId);
    if(resolved){
      if(String(d.roadmapStepId || '') !== resolved.stepId || String(d.series || '') !== getSubGoalStepTitle_(plan, resolved.stepId)){
        applyDraftRoadmapAssignment_(
          d, catId, resolved.stepId,
          getSubGoalStepTitle_(plan, resolved.stepId),
          resolved.order, resolved.total
        );
      }
      return;
    }
    if(String(d.roadmapStepId || '') !== SUBGOAL_MISC_ID) toMigrate.push(d);
  });
  toMigrate.sort(function(a, b){ return userAddedDraftTimestamp_(a.id) - userAddedDraftTimestamp_(b.id); });
  toMigrate.forEach(function(d){ assignUserAddedDraftToMisc_(d, catId); });
  normalizeMiscUserAddedOrder_(catId);
}
function isUnassignedDraftForSubGoal_(draft){
  if(!draft || !draft.id) return false;
  if(isUserAddedDraftId_(draft.id)) return false;
  var ov = state.draftBrandOverrides && state.draftBrandOverrides[draft.id];
  if(ov && ov.roadmapStepId) return false;
  if(draft.roadmapStepId) return false;
  return true;
}
function countOrphanDraftsForSubGoal_(catId){
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan) return 0;
  return (cat.drafts || []).filter(function(d){ return isUnassignedDraftForSubGoal_(d); }).length;
}
function firstEmptyStepSlot_(catId, stepId){
  var map = buildStepSlotDraftMap_(catId, stepId);
  for(var i = 0; i < 5; i++){
    if(!map[i]) return i + 1;
  }
  return null;
}
function assignOrphanDraftsToSubGoalSteps_(catId){
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan || !plan.steps.length) return { assigned: 0, leftover: 0 };
  var orphans = (cat.drafts || []).filter(function(d){ return isUnassignedDraftForSubGoal_(d); });
  orphans.sort(function(a, b){
    var ia = cat.drafts.indexOf(a);
    var ib = cat.drafts.indexOf(b);
    var pa = getDraftStepParts_(a, catId, ia);
    var pb = getDraftStepParts_(b, catId, ib);
    if(pa.step !== pb.step) return pa.step - pb.step;
    return ia - ib;
  });
  var assigned = 0;
  orphans.forEach(function(d){
    for(var si = 0; si < plan.steps.length; si++){
      var sid = String(plan.steps[si].id);
      if(countFilledTopicSlots_(catId, sid) >= 5) continue;
      var slot = firstEmptyStepSlot_(catId, sid);
      if(!slot) continue;
      applyDraftRoadmapAssignment_(d, catId, sid, plan.steps[si].title, slot, 5);
      assigned++;
      return;
    }
  });
  var leftover = orphans.length - assigned;
  return { assigned: assigned, leftover: leftover };
}
function getActiveSubGoalStepId_(catId){
  var plan = getEffectiveSubGoalPlan_(catId);
  var cat = CATEGORIES[catId];
  if(!plan || !cat || !cat.drafts) return plan && plan.steps.length ? String(plan.steps[0].id) : null;
  for(var si = 0; si < plan.steps.length; si++){
    var sid = String(plan.steps[si].id);
    var items = getDraftsForSubGoalStep_(catId, sid);
    if(!items.length) return sid;
    var allPub = items.every(function(d){ return draftIsPublished_(d.id); });
    if(!allPub) return sid;
  }
  return plan.steps.length ? String(plan.steps[plan.steps.length - 1].id) : null;
}
function subGoalStepKey_(catId, stepId){
  return String(catId) + '::sg::' + String(stepId);
}
function plannerStepActionAttrs_(fnName, arg){
  return ' data-planner-fn="' + escapeHtml(fnName) + '" data-planner-arg="' + escapeHtml(String(arg)) + '"';
}
function plannerFnClickAttr_(fnName){
  var parts = Array.prototype.slice.call(arguments, 1);
  var call = fnName + '(' + parts.map(function(a){ return JSON.stringify(a); }).join(',') + ')';
  return " onclick='" + call + "'";
}
function plannerClampTextHTML_(text, opts){
  opts = opts || {};
  var lines = opts.lines != null ? opts.lines : 2;
  var extraClass = opts.className || '';
  var t = String(text || '').trim();
  if(!t) return '';
  if(opts.passive){
    return '<span class="planner-clamp-text' + (extraClass ? ' ' + extraClass : '') + '" data-clamp="' + lines + '">' + escapeHtml(t) + '</span>';
  }
  return '<span class="planner-clamp-text' + (extraClass ? ' ' + extraClass : '') + '" data-clamp="' + lines + '" title="클릭하면 전체 보기" role="button" tabindex="0" aria-expanded="false">' + escapeHtml(t) + '</span>';
}
function bindPlannerMainClickDelegation_(){
  if(document._plannerStepClickBound) return;
  document._plannerStepClickBound = true;
  document.addEventListener('click', function(ev){
    var clamp = ev.target.closest('.planner-clamp-text');
    if(clamp){
      if(clamp.closest('.draft-card')) return;
      ev.preventDefault();
      ev.stopPropagation();
      clamp.classList.toggle('expanded');
      clamp.setAttribute('aria-expanded', clamp.classList.contains('expanded') ? 'true' : 'false');
      return;
    }
  }, true);
  document.addEventListener('click', function(ev){
    var btn = ev.target.closest('[data-planner-fn]');
    if(!btn) return;
    var fnName = btn.getAttribute('data-planner-fn');
    var arg = btn.getAttribute('data-planner-arg');
    if(!fnName || typeof window[fnName] !== 'function') return;
    ev.preventDefault();
    window[fnName](arg);
  });
  document.addEventListener('keydown', function(ev){
    if(ev.key !== 'Enter' && ev.key !== ' ') return;
    var clamp = ev.target.closest('.planner-clamp-text');
    if(!clamp) return;
    if(clamp.closest('.draft-card')) return;
    ev.preventDefault();
    clamp.classList.toggle('expanded');
    clamp.setAttribute('aria-expanded', clamp.classList.contains('expanded') ? 'true' : 'false');
  });
}
function parseSubGoalStepKey_(key){
  var marker = '::sg::';
  var idx = String(key).indexOf(marker);
  if(idx < 0) return null;
  return { catId: key.slice(0, idx), stepId: key.slice(idx + marker.length) };
}
function getFirstUnpublishedDraftInStep_(drafts){
  for(var i = 0; i < (drafts || []).length; i++){
    if(!draftIsPublished_(drafts[i].id)) return drafts[i];
  }
  return null;
}
function renderSubGoalStepCardsHTML_(catId, drafts, collapsed){
  var cat = CATEGORIES[catId];
  if(collapsed) return '';
  var html = '<div class="subgoal-step-cards">';
  if(drafts.length){
    drafts.forEach(function(d){
      html += draftCardHTML(d, cat, false, cat.drafts.indexOf(d), true);
    });
  } else {
    html += '<div class="subgoal-step-topics empty">상단 <strong>주제 기획안 · 함께 검토</strong>에서 5개 주제를 채워 주세요.</div>';
  }
  html += '</div>';
  return html;
}
function isSubGoalStepCollapsed_(catId, stepId){
  var key = subGoalStepKey_(catId, stepId);
  if(state.collapsedSubGoalSteps && state.collapsedSubGoalSteps[key] != null){
    return !!state.collapsedSubGoalSteps[key];
  }
  if(String(stepId) === SUBGOAL_MISC_ID) return true;
  return String(stepId) !== String(getActiveSubGoalStepId_(catId));
}
window.toggleSubGoalStep_ = function(key){
  if(!state.collapsedSubGoalSteps) state.collapsedSubGoalSteps = {};
  var parsed = parseSubGoalStepKey_(key);
  var currentlyCollapsed = parsed
    ? isSubGoalStepCollapsed_(parsed.catId, parsed.stepId)
    : !!state.collapsedSubGoalSteps[key];
  state.collapsedSubGoalSteps[key] = !currentlyCollapsed;
  renderMain();
};
function resetSubGoalCollapseDefaults_(catId){
  if(!state.collapsedSubGoalSteps) state.collapsedSubGoalSteps = {};
  var plan = getSubGoalPlan_(catId);
  if(!plan) return;
  plan.steps.forEach(function(step){
    delete state.collapsedSubGoalSteps[subGoalStepKey_(catId, step.id)];
  });
  delete state.collapsedSubGoalSteps[subGoalStepKey_(catId, SUBGOAL_MISC_ID)];
}
function groupDraftsBySubGoalSteps_(drafts, catId){
  var plan = getSubGoalPlan_(catId);
  if(!plan){
    var g = groupDraftsBySeries_(drafts, catId);
    g.isSubGoal = false;
    return g;
  }
  var cat = CATEGORIES[catId];
  var miscLabel = getSubGoalMiscLabel_(plan);
  var groups = {};
  var order = [];
  var stepMeta = {};
  plan.steps.forEach(function(step){
    var sid = String(step.id);
    groups[sid] = [];
    order.push(sid);
    stepMeta[sid] = step;
  });
  groups[SUBGOAL_MISC_ID] = [];
  order.push(SUBGOAL_MISC_ID);
  stepMeta[SUBGOAL_MISC_ID] = { id: SUBGOAL_MISC_ID, title: miscLabel, summary: '로드맵 단계와 거리가 있는 주제' };
  (drafts || []).forEach(function(d){
    if(!d || !d.id) return;
    var draftIndex = cat && cat.drafts ? cat.drafts.indexOf(d) : -1;
    var meta = getDraftBrandMeta_(d, catId, draftIndex);
    var stepId = getDraftRoadmapStepId_(d, catId, draftIndex) || SUBGOAL_MISC_ID;
    if(!groups[stepId]) stepId = SUBGOAL_MISC_ID;
    groups[stepId].push({ draft: d, meta: meta, draftIndex: draftIndex });
  });
  order.forEach(function(sid){
    groups[sid].sort(function(a, b){
      var sa = parseStepSortKey_(a.meta.step);
      var sb = parseStepSortKey_(b.meta.step);
      if(sa !== sb) return sa - sb;
      return (a.draftIndex >= 0 ? a.draftIndex : 9999) - (b.draftIndex >= 0 ? b.draftIndex : 9999);
    });
  });
  return { order: order, groups: groups, isSubGoal: true, plan: plan, stepMeta: stepMeta };
}
function buildDraftInventoryForSubGoalAI_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  return (cat.drafts || []).map(function(d, i){
    if(!d || !d.id) return '';
    var pub = draftIsPublished_(d.id) ? '발행완료' : (draftHasPartialPublish_(d.id, catId) ? '일부발행' : (draftHasContent(d) ? '초안있음' : '미작성'));
    var meta = getDraftBrandMeta_(d, catId, i);
    return '- id:' + d.id + ' | ' + pub + ' | topic:' + d.topic +
      (d.angle ? ' | angle:' + d.angle : '') +
      ' | series:' + meta.series + ' | step:' + meta.step;
  }).filter(Boolean).join('\n');
}
function deleteDraftSilent_(catId, draftId){
  var cat = CATEGORIES[catId];
  if(!cat || !draftId) return;
  cat.drafts = (cat.drafts || []).filter(function(x){ return !x || x.id !== draftId; });
  if(!state.deletedDraftIds) state.deletedDraftIds = {};
  state.deletedDraftIds[draftId] = new Date().toISOString();
  if(state.pinnedDraftIds && state.pinnedDraftIds[draftId]) delete state.pinnedDraftIds[draftId];
  delete state.published[draftId];
  delete state.generatedOnly[draftId];
  if(typeof instaBgByDraft !== 'undefined') delete instaBgByDraft[draftId];
  if(typeof threadsBgByDraft !== 'undefined') delete threadsBgByDraft[draftId];
  if(state.selectedId === draftId) closeSheetUiOnly_();
}
function getSeriesGoal_(catId, seriesName){
  var key = seriesGroupKey_(catId, seriesName);
  var brand = getBranding_();
  if(brand.seriesGoals && brand.seriesGoals[key]) return String(brand.seriesGoals[key]).trim();
  return getCategoryBrandGoal_(catId);
}
function stripTopicRationaleStepPrefix_(text){
  if(!text) return '';
  return String(text).replace(/^\d+\s*단계\s*[·—\-:]\s*/u, '').trim();
}
function buildDraftRationaleFromRoadmap_(draft, catId, draftIndex){
  if(!draft) return '';
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var plan = getSubGoalPlan_(catId);
  if(plan){
    var stepId = getDraftRoadmapStepId_(draft, catId, draftIndex);
    var stepObj = (plan.steps || []).find(function(s){ return String(s.id) === String(stepId); });
    if(stepObj && stepObj.summary){
      var r0 = String(stepObj.summary).trim();
      var angleBit0 = String(draft.angle || '').split(' — ')[0].split(',')[0].trim();
      if(angleBit0.length > 40) angleBit0 = angleBit0.slice(0, 40) + '…';
      if(angleBit0 && r0.indexOf(angleBit0) < 0) r0 += ' · ' + angleBit0;
      return stripTopicRationaleStepPrefix_(r0.slice(0, 140));
    }
  }
  var seriesGoal = getSeriesGoal_(catId, meta.series);
  var angleBit = String(draft.angle || '').split(' — ')[0].split(',')[0].trim();
  if(angleBit.length > 40) angleBit = angleBit.slice(0, 40) + '…';
  if(seriesGoal){
    var r = String(seriesGoal).trim();
    if(angleBit && r.indexOf(angleBit) < 0) r += ' · ' + angleBit;
    return stripTopicRationaleStepPrefix_(r.slice(0, 140));
  }
  var catGoal = getCategoryBrandGoal_(catId);
  if(catGoal) return stripTopicRationaleStepPrefix_(String(catGoal).trim().slice(0, 140));
  return stripTopicRationaleStepPrefix_(String(draft.rationale || '').trim());
}
function normalizeStepTopicRationales_(catId, stepId){
  var drafts = getDraftsForSubGoalStep_(catId, stepId);
  var changed = false;
  drafts.forEach(function(d){
    if(!d || !d.rationale) return;
    var clean = stripTopicRationaleStepPrefix_(d.rationale);
    if(clean !== d.rationale){
      d.rationale = clean;
      changed = true;
    }
  });
  if(changed) save({ skipDriveUpload: true, skipGasPush: true });
}
function syncDraftRationalesFromRoadmap_(catIds, skipPublished){
  var updated = 0;
  (catIds || []).forEach(function(catId){
    var cat = CATEGORIES[catId];
    if(!cat || !cat.drafts) return;
    cat.drafts.forEach(function(d, i){
      if(!d || !d.id) return;
      if(skipPublished && draftIsPublished_(d.id)) return;
      var next = buildDraftRationaleFromRoadmap_(d, catId, i);
      if(!next || next === d.rationale) return;
      d.rationale = next;
      if(!isUserAddedDraftId_(d.id)){
        if(!state.draftBrandOverrides) state.draftBrandOverrides = {};
        if(!state.draftBrandOverrides[d.id]) state.draftBrandOverrides[d.id] = {};
        state.draftBrandOverrides[d.id].rationale = next;
        var meta = getDraftBrandMeta_(d, catId, i);
        if(meta.series && !state.draftBrandOverrides[d.id].series) state.draftBrandOverrides[d.id].series = d.series || meta.series;
        if(meta.step && !state.draftBrandOverrides[d.id].step) state.draftBrandOverrides[d.id].step = d.step || meta.step;
      }
      updated++;
    });
  });
  return updated;
}
function isPublishRecCurrentTabOnly_(){
  return !!state.publishRecCurrentTabOnly;
}
window.togglePublishRecCurrentTabOnly_ = function(on){
  state.publishRecCurrentTabOnly = !!on;
  save({ driveImmediate: true });
  renderMain();
};
function getCategoryProgramLine_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  return cat.programLine || CAT_PROGRAM_LINE[catId] || cat.name;
}
function getDefaultSeriesForCat_(catId){
  return CAT_DEFAULT_SERIES[catId] || (CATEGORIES[catId] ? CATEGORIES[catId].name : '');
}
function getDefaultPillarForCat_(catId){
  return CAT_DEFAULT_PILLAR[catId] || getCategoryProgramLine_(catId);
}
function applyTopicsArrayToStep_(catId, stepId, topics){
  if(!getSubGoalPlan_(catId) || !CATEGORIES[catId]) return 0;
  var applied = 0;
  for(var slot = 1; slot <= 5; slot++){
    var t = topics && topics[slot - 1];
    if(applyTopicToStepSlot_(catId, stepId, slot, t)) applied++;
  }
  return applied;
}
function getCategoryBrandGoal_(catId){
  var plan = getSubGoalPlan_(catId);
  if(plan && plan.steps && plan.steps.length){
    var activeId = getActiveSubGoalStepId_(catId);
    for(var i = 0; i < plan.steps.length; i++){
      if(String(plan.steps[i].id) === String(activeId)){
        var s = plan.steps[i];
        return (s.title + (s.summary ? ' — ' + s.summary : '')).trim();
      }
    }
  }
  var brand = getBranding_();
  var key = String(catId);
  return String((brand.categoryGoals && brand.categoryGoals[key]) || '').trim();
}
function buildDraftStageContextLines_(draft, catId, draftIndex){
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var lines = [];
  var ymeta = getYearPlanMeta_();
  if(ymeta.currentRationale) lines.push('분기 의도: ' + ymeta.currentRationale);
  var plan = getSubGoalPlan_(catId);
  if(plan && plan.steps && plan.steps.length){
    var stepId = getDraftRoadmapStepId_(draft, catId, draftIndex);
    var stepIdx = plan.steps.findIndex(function(s){ return String(s.id) === String(stepId); });
    if(meta.series) lines.push(meta.series + (meta.step ? ' (' + meta.step + ')' : ''));
    if(stepIdx >= 0){
      for(var i = 0; i <= stepIdx; i++){
        var s = plan.steps[i];
        var bit = String(s.title || '').trim();
        if(s.summary) bit += (bit ? ': ' : '') + String(s.summary).trim();
        if(bit) lines.push('- ' + bit);
      }
    }
  } else {
    if(meta.series) lines.push(meta.series + (meta.step ? ' (' + meta.step + ')' : ''));
    var sg = getSeriesGoal_(catId, meta.series);
    if(sg) lines.push('- ' + sg);
  }
  return lines;
}
function parseWritingBriefSection_(brief, headingPattern){
  if(!brief) return '';
  var re = new RegExp('【' + headingPattern + '[^】]*】\\s*\\n([\\s\\S]*?)(?=\\n\\n【|$)', 'u');
  var m = String(brief).match(re);
  return m && m[1] ? String(m[1]).trim() : '';
}
function syncDraftFieldsFromWritingBrief_(draft){
  if(!draft) return;
  var brief = String(draft.writingBrief || '').trim();
  if(!brief) return;
  var pillar = parseWritingBriefSection_(brief, '브랜드\\s*기둥');
  var rationale = parseWritingBriefSection_(brief, '왜\\s*지금');
  var flow = parseWritingBriefSection_(brief, '풀어가는\\s*순서');
  if(pillar) draft.pillar = pillar.split('\n')[0].trim();
  if(rationale) draft.rationale = rationale;
  if(flow) draft.angle = flow;
}
function buildDefaultWritingBrief_(draft, catId, draftIndex){
  if(!draft) return '';
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var parts = [];
  if(meta.pillar) parts.push('【브랜드 기둥】\n' + meta.pillar);
  var stageLines = buildDraftStageContextLines_(draft, catId, draftIndex);
  if(stageLines.length) parts.push('【분기 → 현재 단계】\n' + stageLines.join('\n'));
  var rationale = stripTopicRationaleStepPrefix_(meta.rationale) || buildDraftRationaleFromRoadmap_(draft, catId, draftIndex);
  if(rationale) parts.push('【왜 지금 이 글인가】\n' + rationale);
  var angle = String(draft.angle || '').trim();
  if(angle) parts.push('【풀어가는 순서】\n' + angle);
  return parts.join('\n\n');
}
function getDraftWritingBrief_(draft, catId, draftIndex){
  if(!draft) return '';
  var saved = draft.writingBrief ? String(draft.writingBrief).trim() : '';
  if(saved) return saved;
  var ov = state.draftBrandOverrides && state.draftBrandOverrides[draft.id];
  if(ov && ov.writingBrief) return String(ov.writingBrief).trim();
  return buildDefaultWritingBrief_(draft, catId, draftIndex);
}
function buildDraftBriefPromptLines_(draft, catId){
  var flowLines = [];
  if(draft && draft.articleFlow){
    var af = draft.articleFlow;
    var steps = Array.isArray(af.steps) ? af.steps : [];
    flowLines.push('[선택한 글 흐름 — 추가 단계에서 확정]');
    if(af.title) flowLines.push('제목 방향: ' + af.title);
    if(af.angle) flowLines.push('각도: ' + af.angle);
    if(steps.length) flowLines.push('전개 순서:\n' + steps.map(function(s, i){ return (i + 1) + '. ' + s; }).join('\n'));
    flowLines.push('위 흐름·순서를 벗어나지 말고 작성하세요.');
  }
  var brief = getDraftWritingBrief_(draft, catId);
  if(flowLines.length && brief){
    return flowLines.join('\n') + '\n\n글 작성 핵심:\n' + brief + '\n\n위 「선택한 글 흐름」과 「글 작성 핵심」을 본문 전개에 우선 반영하세요.';
  }
  if(flowLines.length) return flowLines.join('\n');
  if(brief){
    return '글 작성 핵심:\n' + brief + '\n\n위 「글 작성 핵심」의 분기·단계 맥락, 필요성, 풀어가는 순서를 본문 전개에 우선 반영하세요.';
  }
  if(draft && draft.angle) return '각도: ' + draft.angle;
  return '';
}
function getDraftBrandMeta_(draft, catId, draftIndex){
  var cat = CATEGORIES[catId];
  var total = cat && cat.drafts ? cat.drafts.length : 0;
  var idx = typeof draftIndex === 'number' ? draftIndex : -1;
  var series = draft && draft.series ? String(draft.series).trim() : getDefaultSeriesForCat_(catId);
  var step = draft && draft.step ? String(draft.step).trim() : (idx >= 0 && total ? (idx + 1) + '/' + total : '');
  var pillar = draft && draft.pillar ? String(draft.pillar).trim() : getDefaultPillarForCat_(catId);
  var rationale = draft && draft.rationale ? String(draft.rationale).trim() : '';
  return { series: series, step: step, pillar: pillar, rationale: rationale };
}
function applyTopicFieldsToDraft_(draft, obj, catId){
  if(!draft || !obj) return;
  if(obj.topic) draft.topic = String(obj.topic).trim();
  if(obj.angle != null) draft.angle = String(obj.angle || '').trim();
  if(obj.series) draft.series = String(obj.series).trim();
  else if(!draft.series) draft.series = getDefaultSeriesForCat_(catId);
  if(obj.step) draft.step = String(obj.step).trim();
  if(obj.pillar) draft.pillar = String(obj.pillar).trim();
  else if(!draft.pillar) draft.pillar = getDefaultPillarForCat_(catId);
  if(obj.rationale) draft.rationale = stripTopicRationaleStepPrefix_(String(obj.rationale).trim());
  if(obj.topic || obj.angle != null || obj.rationale || obj.pillar) delete draft.writingBrief;
}
function buildBrandContextForPrompt_(catId, draft){
  var brand = getBranding_();
  var cat = CATEGORIES[catId];
  var meta = getDraftBrandMeta_(draft, catId);
  var lines = [
    '[미카닥 박준규 브랜딩 — 이번 분기]',
    '분기: ' + brand.quarterLabel,
    '핵심 메시지: ' + brand.message,
    '브랜드 기둥: ' + brand.pillars.join(' · '),
    '프로그램: ' + getCategoryProgramLine_(catId) + (cat ? ' · 독자 ' + cat.audience : ''),
    '브랜드 기반(PSP·PAR·프로그램): ' + PROFILE_BRAND_URL
  ];
  var goal = getCategoryBrandGoal_(catId);
  if(goal) lines.push('이번 탭 목표: ' + goal);
  var outcome = getCategoryThreeMonthOutcome_(catId);
  if(outcome && !goal) lines.push('프로그램 3개월 목표: ' + outcome);
  var ymeta = getYearPlanMeta_();
  if(ymeta.intent) lines.push('분기별 기획 의도: ' + ymeta.intent);
  if(ymeta.currentRationale) lines.push('현재 분기 의도: ' + ymeta.currentRationale);
  var pmeta = getProgramPlanMeta_(catId);
  if(pmeta.intent) lines.push('프로그램 기획 의도: ' + pmeta.intent);
  if(draft){
    lines.push('', '[이 주제 — 브랜드 로드맵]');
    var plan = getSubGoalPlan_(catId);
    if(plan){
      var stepId = getDraftRoadmapStepId_(draft, catId);
      var stepTitle = getSubGoalStepTitle_(plan, stepId);
      var stepRow = plan.steps && stepId ? plan.steps.find(function(s){ return String(s.id) === String(stepId); }) : null;
      if(stepTitle) lines.push('달성 단계: ' + stepTitle + (meta.step ? ' · ' + meta.step : ''));
      if(stepRow && stepRow.rationale) lines.push('단계 의도: ' + stepRow.rationale);
      var activeStep = getActiveSubGoalStepId_(catId);
      if(activeStep && String(stepId) === String(activeStep)) lines.push('※ 현재 우선 진행 단계');
    } else if(meta.series) lines.push('시리즈: ' + meta.series + (meta.step ? ' · ' + meta.step : ''));
    var sg = getSeriesGoal_(catId, meta.series);
    if(sg) lines.push('시리즈 목표: ' + sg);
    if(meta.pillar) lines.push('기둥: ' + meta.pillar);
    if(meta.rationale) lines.push('왜 지금(명분): ' + meta.rationale);
    if(getDraftWritingBrief_(draft, catId)) {
      lines.push('※ 글 작성 핵심은 아래 주제 블록에 별도 기재');
    } else if(draft.angle) {
      lines.push('글 풀기(각도): ' + draft.angle);
    }
  }
  lines.push('', '위 메시지·시리즈와 모순되지 않게, 미카닥 박준규·Re:Al 브랜드 톤을 유지하세요.');
  return lines.join('\n');
}
function buildTopicBrandJsonGuide_(catId){
  return (
    '- series: 이 카테고리 시리즈명 (예: 「' + getDefaultSeriesForCat_(catId) + '」)\n' +
    '- step: 시리즈 내 순서 (예: 2/5)\n' +
    '- pillar: 아래 기둥 중 하나 — ' + getBranding_().pillars.join(' / ') + '\n' +
    '- rationale: 왜 지금 이 주제인지 1~2문장 (분기별·프로그램·단계 의도와 연결). "N단계 —" 같은 순서 표기는 넣지 마세요\n'
  );
}
function parseStepSortKey_(step){
  if(!step) return 9999;
  var m = String(step).match(/^(\d+)\s*\/\s*(\d+)/);
  if(m) return parseInt(m[1], 10) || 9999;
  var n = parseInt(String(step).replace(/\D/g, ''), 10);
  return isNaN(n) ? 9999 : n;
}
function seriesGroupKey_(catId, seriesName){
  return String(catId) + '::' + String(seriesName || '');
}
function groupDraftsBySeries_(drafts, catId){
  var cat = CATEGORIES[catId];
  var groups = {};
  var seriesFirstIdx = {};
  (drafts || []).forEach(function(d){
    if(!d || !d.id) return;
    var draftIndex = cat && cat.drafts ? cat.drafts.indexOf(d) : -1;
    var meta = getDraftBrandMeta_(d, catId, draftIndex);
    var key = meta.series || getDefaultSeriesForCat_(catId);
    if(!groups[key]) groups[key] = [];
    groups[key].push({ draft: d, meta: meta, draftIndex: draftIndex });
    if(seriesFirstIdx[key] === undefined) seriesFirstIdx[key] = draftIndex >= 0 ? draftIndex : 9999;
  });
  var order = Object.keys(groups).sort(function(a, b){
    return (seriesFirstIdx[a] || 0) - (seriesFirstIdx[b] || 0);
  });
  order.forEach(function(key){
    groups[key].sort(function(a, b){
      var sa = parseStepSortKey_(a.meta.step);
      var sb = parseStepSortKey_(b.meta.step);
      if(sa !== sb) return sa - sb;
      return (a.draftIndex >= 0 ? a.draftIndex : 9999) - (b.draftIndex >= 0 ? b.draftIndex : 9999);
    });
  });
  return { order: order, groups: groups };
}
function persistPendingYearPlan_(){
  try {
    if(state.pendingYearPlan) sessionStorage.setItem(PENDING_YEAR_SS_KEY, JSON.stringify(state.pendingYearPlan));
    else sessionStorage.removeItem(PENDING_YEAR_SS_KEY);
  } catch(e){}
  bumpPlanWorkshopApplyBtn_();
}
function hasYearPlanApplied_(){
  return !!(state.branding && state.branding.yearPlan && state.branding.yearPlan.confirmed);
}
function snapshotYearPlanForCompare_(src){
  var brand = getBranding_();
  var pillars = src.pillars != null ? src.pillars : (brand.pillars || []);
  return {
    intent: String(src.intent || '').trim(),
    pillars: (pillars || []).map(function(x){ return String(x || '').trim(); }),
    periods: (src.periods || []).map(function(per){
      return {
        topic: String(per.topic || per.goal || '').trim(),
        rationale: String(per.rationale || '').trim(),
        pinned: !!per.pinned,
        months: parseInt(per.months, 10) || 3,
        start: String(per.start || '').trim(),
        end: String(per.end || '').trim()
      };
    })
  };
}
function snapshotYearPlanContentForCompare_(src){
  var snap = snapshotYearPlanForCompare_(src);
  snap.periods = snap.periods.map(function(per){
    return {
      topic: per.topic,
      rationale: per.rationale,
      pinned: per.pinned,
      months: per.months
    };
  });
  return snap;
}
function isPendingYearPlanContentSameAsApplied_(){
  if(!hasYearPlanApplied_()) return false;
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return false;
  var applied = snapshotYearPlanContentForCompare_({
    intent: state.branding.yearPlan.intent,
    pillars: getBranding_().pillars,
    periods: state.branding.yearPlan.periods
  });
  var pending = snapshotYearPlanContentForCompare_(p);
  return JSON.stringify(pending) === JSON.stringify(applied);
}
function refreshPendingYearPlanFromApplied_(){
  var plan = getYearPlan_();
  var brand = getBranding_();
  var defs = plan.periods.map(function(p, i){
    return sanitizeYearPeriodFields_(normalizeYearPeriod_(p, i, p.goal));
  });
  state.pendingYearPlan = sanitizeYearPlanObj_({
    intent: plan.intent || (brand.yearPlan && brand.yearPlan.intent) || '',
    pillars: (brand.pillars || []).slice(),
    anchorDate: plan.anchorDate,
    periods: buildRollingPeriodsWithMonths_(plan.anchorDate, defs)
  });
  persistPendingYearPlan_();
  bumpPlanWorkshopApplyBtn_();
}
function isPendingYearPlanSameAsApplied_(){
  if(!hasYearPlanApplied_()) return false;
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return false;
  var applied = snapshotYearPlanForCompare_({
    intent: state.branding.yearPlan.intent,
    pillars: getBranding_().pillars,
    periods: state.branding.yearPlan.periods
  });
  var pending = snapshotYearPlanForCompare_(p);
  return JSON.stringify(pending) === JSON.stringify(applied);
}
function getYearPlanApplyBtnState_(){
  if(isPendingYearPlanSameAsApplied_()) return { label: '적용됨', applied: true, onApply: '' };
  return {
    label: hasYearPlanApplied_() ? '수정하기' : '적용하기',
    applied: false,
    onApply: 'applyPendingYearPlan_()'
  };
}
function sortPlanAssignments_(arr){
  return (arr || []).slice().sort(function(a, b){
    var sa = String(a.stepId || '');
    var sb = String(b.stepId || '');
    if(sa !== sb) return sa.localeCompare(sb);
    return (a.order || 0) - (b.order || 0);
  });
}
function buildSubGoalAssignmentsFromDrafts_(catId){
  var plan = getSubGoalPlan_(catId);
  var cat = CATEGORIES[catId];
  if(!plan || !cat) return [];
  var assignments = [];
  plan.steps.forEach(function(step){
    var sid = String(step.id);
    getDraftsForSubGoalStep_(catId, sid, { live: true }).forEach(function(d){
      if(!d || !d.id) return;
      var di = cat.drafts.indexOf(d);
      var slot = getDraftStepParts_(d, catId, di).step;
      if(slot < 1 || slot > 5) slot = 1;
      assignments.push({ draftId: d.id, stepId: sid, order: slot });
    });
  });
  return sortPlanAssignments_(assignments);
}
function subGoalStepsMatchForCompare_(pSteps, aSteps){
  pSteps = pSteps || [];
  aSteps = aSteps || [];
  if(pSteps.length !== aSteps.length) return false;
  for(var i = 0; i < pSteps.length; i++){
    var ps = pSteps[i];
    var as = null;
    for(var j = 0; j < aSteps.length; j++){
      if(String(aSteps[j].id) === String(ps.id)){ as = aSteps[j]; break; }
    }
    if(!as) return false;
    if(String(ps.title || '').trim() !== String(as.title || '').trim()) return false;
    if(String(ps.summary || '').trim() !== String(as.summary || '').trim()) return false;
    if(String(ps.rationale || '').trim() !== String(as.rationale || '').trim()) return false;
    if(!!ps.pinned !== !!as.pinned) return false;
  }
  return true;
}
function reconcileSubGoalDraftSteps_(catId){
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan) return;
  var miscLabel = getSubGoalMiscLabel_(plan);
  var slotUsed = {};
  plan.steps.forEach(function(s){ slotUsed[String(s.id)] = 0; });
  (cat.drafts || []).forEach(function(d, di){
    if(!d || !d.id) return;
    var sid = getDraftRoadmapStepId_(d, catId, di);
    if(sid && sid !== SUBGOAL_MISC_ID){
      var title = getSubGoalStepTitle_(plan, sid);
      var slot = getDraftStepParts_(d, catId, di).step;
      if(slot < 1 || slot > 5) slot = (slotUsed[sid] || 0) + 1;
      if(slot > 5) slot = 5;
      slotUsed[sid] = Math.max(slotUsed[sid] || 0, slot);
      if(String(d.roadmapStepId || '') !== sid || String(d.series || '') !== title){
        applyDraftRoadmapAssignment_(d, catId, sid, title, slot, 5);
      }
      return;
    }
    // 단계 제목이 series에 남아 있으면 misc 라벨로 덮지 않음(복구 힌트 보존)
    var series = String(d.series || '').trim();
    if(series && series !== miscLabel && findPlanStepIdByTitle_(plan, series)) return;
    if(series !== miscLabel){
      var miscDrafts = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID, { live: true });
      var order = miscDrafts.indexOf(d) >= 0 ? miscDrafts.indexOf(d) + 1 : miscDrafts.length + 1;
      applyDraftRoadmapAssignment_(d, catId, SUBGOAL_MISC_ID, miscLabel, order, Math.max(miscDrafts.length, order));
    }
  });
}
/** misc 로 떨어진 주제를 시드 주제·제목으로 단계에 재배치 */
function rescueOrphanedStepDrafts_(catId){
  catId = normalizePendingCatId_(catId);
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  if(!cat || !plan || !plan.steps.length) return 0;
  var miscLabel = getSubGoalMiscLabel_(plan);
  var counts = {};
  plan.steps.forEach(function(s){
    counts[String(s.id)] = getDraftsForSubGoalStep_(catId, String(s.id), { live: true }).length;
  });
  var rescued = 0;
  (cat.drafts || []).forEach(function(d){
    if(!d || !d.id) return;
    var cur = String(d.roadmapStepId || '');
    var ov = state.draftBrandOverrides && state.draftBrandOverrides[d.id];
    var ovSid = ov && ov.roadmapStepId ? String(ov.roadmapStepId) : '';
    var looksMisc = cur === SUBGOAL_MISC_ID || ovSid === SUBGOAL_MISC_ID ||
      String(d.series || '') === miscLabel || (ov && String(ov.series || '') === miscLabel) ||
      (!normalizeStepIdAgainstPlan_(plan, cur) && !normalizeStepIdAgainstPlan_(plan, ovSid));
    if(!looksMisc) return;
    var already = normalizeStepIdAgainstPlan_(plan, cur) || normalizeStepIdAgainstPlan_(plan, ovSid);
    if(already && cur !== SUBGOAL_MISC_ID && ovSid !== SUBGOAL_MISC_ID && String(d.series || '') !== miscLabel) return;
    var target = normalizeStepIdAgainstPlan_(plan, cur !== SUBGOAL_MISC_ID ? cur : '') ||
      normalizeStepIdAgainstPlan_(plan, ovSid !== SUBGOAL_MISC_ID ? ovSid : '') ||
      findPlanStepIdByTitle_(plan, (ov && ov.series && ov.series !== miscLabel) ? ov.series : '') ||
      findPlanStepIdByTitle_(plan, (d.series && d.series !== miscLabel) ? d.series : '') ||
      findPlanStepIdBySeedTopic_(catId, plan, d.topic);
    if(!target || target === SUBGOAL_MISC_ID) return;
    if((counts[target] || 0) >= 5) return;
    counts[target] = (counts[target] || 0) + 1;
    applyDraftRoadmapAssignment_(
      d, catId, target,
      getSubGoalStepTitle_(plan, target),
      counts[target], 5
    );
    rescued++;
  });
  if(rescued){
    plan.steps.forEach(function(s){ normalizeStepDraftSlots_(catId, String(s.id)); });
    normalizeMiscUserAddedOrder_(catId);
  }
  return rescued;
}
/** 원 번호와 제목의 N단계가 어긋나거나 제목이 중복되면 시드로 맞춤 */
function repairMislabeledSubGoalSteps_(catId){
  catId = normalizePendingCatId_(catId);
  var plan = state.branding && state.branding.subGoalPlans && state.branding.subGoalPlans[String(catId)];
  if(!plan || !plan.steps || plan.steps.length < 2) return false;
  var seed = getInitialProgramPlanDraft_(catId);
  var changed = false;
  var seenTitles = {};
  var idMap = {};
  plan.steps.forEach(function(step, i){
    if(!step) return;
    var title = String(step.title || '').trim();
    var m = title.match(/^(\d+)\s*단계/);
    var expected = i + 1;
    var dup = !!(title && seenTitles[title]);
    var mismatch = !!(m && parseInt(m[1], 10) !== expected);
    if((dup || mismatch) && seed && seed.steps[i]){
      step.title = seed.steps[i].title || step.title;
      if(!String(step.summary || '').trim()) step.summary = seed.steps[i].summary || '';
      if(!String(step.rationale || '').trim()) step.rationale = seed.steps[i].rationale || '';
      changed = true;
      title = String(step.title || '').trim();
    }
    if(title) seenTitles[title] = true;
    var wantId = 's' + expected;
    var oldId = String(step.id || '');
    if(oldId !== wantId){
      if(oldId) idMap[oldId] = wantId;
      step.id = wantId;
      changed = true;
    }
  });
  if(Object.keys(idMap).length){
    remapDraftStepIdsForCat_({ draftBrandOverrides: state.draftBrandOverrides }, catId, idMap);
    var pending = state.pendingSubGoalPlan;
    if(pending && sameCatId_(pending.catId, catId) && pending.assignments){
      pending.assignments.forEach(function(a){
        if(!a) return;
        var sid = String(a.stepId || '');
        if(idMap[sid]) a.stepId = idMap[sid];
      });
    }
  }
  if(changed) plan.updatedAt = new Date().toISOString();
  return changed;
}
function repairSubGoalDraftAssignments_(catId){
  var changed = false;
  try {
    if(repairMislabeledSubGoalSteps_(catId)) changed = true;
    var n = rescueOrphanedStepDrafts_(catId);
    if(n) changed = true;
    reconcileSubGoalDraftSteps_(catId);
  } catch(eRepAssign){}
  return changed;
}
function repairAllSubGoalDraftAssignments_(){
  var changed = false;
  CATEGORIES.forEach(function(cat, i){
    if(!getSubGoalPlan_(i)) return;
    if(repairSubGoalDraftAssignments_(i)) changed = true;
  });
  return changed;
}
function isPendingSubGoalPlanSameAsApplied_(catId){
  catId = catId != null ? catId : state.currentCat;
  if(!hasSubGoalPlan_(catId)) return false;
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, catId) || !p.plan) return false;
  if((p.deleteIds || []).length) return false;
  var applied = getSubGoalPlan_(catId);
  if(String(p.plan.brandProfile || '').trim() !== String(applied.brandProfile || '').trim()) return false;
  if(String((p.plan.strategyGuide || p.plan.criteria || p.plan.intent) || '').trim() !==
     String((applied.strategyGuide || applied.criteria || applied.intent) || '').trim()) return false;
  if(!subGoalStepsMatchForCompare_(p.plan.steps, applied.steps)) return false;
  return JSON.stringify(sortPlanAssignments_(p.assignments)) === JSON.stringify(buildSubGoalAssignmentsFromDrafts_(catId));
}
function isPendingYearPlanDirty_(){
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return false;
  if(hasYearPlanApplied_()) return !isPendingYearPlanSameAsApplied_();
  return !!(String(p.intent || '').trim() || p.periods.some(function(per){
    return !!String(per.topic || per.goal || '').trim() || !!String(per.rationale || '').trim();
  }));
}
function isPendingSubGoalPlanDirty_(catId){
  catId = catId != null ? catId : state.currentCat;
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, catId) || !p.plan) return false;
  if(hasSubGoalPlan_(catId)) return !isPendingSubGoalPlanSameAsApplied_(catId);
  return !!(
    (p.plan.steps && p.plan.steps.length) ||
    String(p.plan.brandProfile || '').trim() ||
    String(p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '').trim()
  );
}
function isPlanWorkshopDirty_(){
  var mode = state.planWorkshopMode;
  if(mode === 'year') return isPendingYearPlanDirty_();
  if(mode === 'program') return isPendingSubGoalPlanDirty_(state.currentCat);
  return false;
}
function isPlanWorkshopGenerating_(){
  var mode = state.planWorkshopMode;
  if(mode === 'year') return !!state.yearPlanGenerating;
  if(mode === 'program') return !!(state.subGoalPlanGenerating && sameCatId_(state.subGoalPlanGenerating.catId, state.currentCat));
  return false;
}
function discardPendingForWorkshopMode_(){
  var mode = state.planWorkshopMode;
  if(mode === 'year'){
    state.pendingYearPlan = null;
    persistPendingYearPlan_();
  } else if(mode === 'program'){
    state.pendingSubGoalPlan = null;
    persistPendingSubGoalPlan_();
  }
}
function closePlanWorkshopForce_(){
  hidePlanWorkshopLeaveDialog_();
  document.getElementById('plan-workshop-overlay').classList.remove('open');
  if(state.planWorkshopMode === 'topic') state.topicEditStepId = null;
  state.planWorkshopMode = null;
  releaseModalFocusTrap_();
  renderMain();
}
function showPlanWorkshopLeaveDialog_(){
  var overlay = document.getElementById('plan-ws-leave-overlay');
  if(!overlay) return;
  var saveBtn = document.getElementById('plan-ws-leave-save-btn');
  var generating = isPlanWorkshopGenerating_();
  if(saveBtn){
    saveBtn.disabled = generating;
    saveBtn.style.display = generating ? 'none' : '';
  }
  overlay.classList.add('open');
}
function hidePlanWorkshopLeaveDialog_(){
  var overlay = document.getElementById('plan-ws-leave-overlay');
  if(overlay) overlay.classList.remove('open');
}
window.requestClosePlanWorkshop_ = function(ev, opts){
  opts = opts || {};
  if(ev && ev.target !== document.getElementById('plan-workshop-overlay')) return;
  var mode = state.planWorkshopMode;
  if(mode === 'topic'){
    closePlanWorkshopForce_();
    return;
  }
  if(!isPlanWorkshopDirty_()){
    if(opts.discard) discardPendingForWorkshopMode_();
    closePlanWorkshopForce_();
    if(opts.discard){ renderTabs(); renderMain(); }
    return;
  }
  showPlanWorkshopLeaveDialog_();
};
window.planWorkshopLeaveStay_ = function(ev){
  if(ev && ev.target !== document.getElementById('plan-ws-leave-overlay')) return;
  hidePlanWorkshopLeaveDialog_();
};
window.planWorkshopLeaveDiscard_ = function(){
  hidePlanWorkshopLeaveDialog_();
  discardPendingForWorkshopMode_();
  closePlanWorkshopForce_();
  renderTabs();
  renderMain();
};
window.planWorkshopLeaveSave_ = function(){
  hidePlanWorkshopLeaveDialog_();
  var mode = state.planWorkshopMode;
  if(mode === 'year') commitPendingYearPlan_();
  else if(mode === 'program') commitPendingSubGoalPlan_();
};
function getSubGoalPlanApplyBtnState_(catId){
  catId = catId != null ? catId : state.currentCat;
  if(isPendingSubGoalPlanSameAsApplied_(catId)) return { label: '적용됨', applied: true, onApply: '' };
  return {
    label: hasSubGoalPlan_(catId) ? '수정하기' : '적용하기',
    applied: false,
    onApply: 'applyPendingSubGoalPlan_()'
  };
}
function renderPlanApplyBtnHTML_(opts){
  opts = opts || {};
  var label = opts.label || '적용하기';
  var applied = !!opts.applied;
  var onclick = opts.onApply || '';
  return '<button type="button" class="modal-btn' + (applied ? ' ws-btn-applied' : '') + '" id="ws-apply-btn"' +
    (applied ? ' disabled' : '') +
    (applied ? '' : ' onclick="' + onclick + '"') + '>' + escapeHtml(label) + '</button>';
}
function bumpPlanWorkshopApplyBtn_(){
  var btn = document.getElementById('ws-apply-btn');
  if(!btn) return;
  var mode = state.planWorkshopMode || 'year';
  var st;
  if(mode === 'year') st = getYearPlanApplyBtnState_();
  else if(mode === 'program') st = getSubGoalPlanApplyBtnState_(state.currentCat);
  else return;
  btn.textContent = st.label;
  btn.disabled = !!st.applied;
  btn.classList.toggle('ws-btn-applied', !!st.applied);
  if(st.applied) btn.removeAttribute('onclick');
  else btn.setAttribute('onclick', st.onApply);
}
function restorePendingYearPlan_(){
  try {
    var raw = sessionStorage.getItem(PENDING_YEAR_SS_KEY);
    if(!raw) return;
    var p = JSON.parse(raw);
    if(p && p.periods && p.periods.length){
      sanitizeYearPlanObj_(p);
      state.pendingYearPlan = p;
    }
  } catch(e){}
}
function renderWsGeneratingHTML_(label, estSec, genState){
  var elapsed = genState ? Math.floor((Date.now() - genState.startedAt) / 1000) : 0;
  var left = Math.max(0, (genState && genState.estimateSec || estSec) - elapsed);
  var pct = Math.min(98, Math.round((elapsed / estSec) * 100));
  var cd = left <= 0 ? '거의 다 됐어요…' : ('약 ' + left + '초 남음');
  return '<div class="ws-generating">' +
    '<div class="ws-gen-head"><span class="subgoal-gen-spinner"></span><span class="ws-gen-title">기획 중</span></div>' +
    '<p class="ws-gen-desc">' + label + '</p>' +
    '<div class="ws-gen-countdown" id="ws-gen-countdown">' + escapeHtml(cd) + '</div>' +
    '<div class="subgoal-gen-bar"><span id="ws-gen-progress" style="width:' + pct + '%"></span></div>' +
  '</div>';
}
window.openPlanWorkshop_ = function(mode, stepId){
  var overlay = document.getElementById('plan-workshop-overlay');
  if(!overlay) return;
  state.planWorkshopMode = mode || 'year';
  if(mode === 'topic' && stepId != null) state.topicEditStepId = String(stepId);
  refreshPlanWorkshopModal_();
  overlay.classList.add('open');
  trapFocusIn_(document.querySelector('#plan-workshop-overlay .plan-workshop-box'));
  scheduleWorkshopTextareaGrow_();
};
window.openTopicStepWorkshop_ = function(stepId){
  stepId = stepId != null ? String(stepId) : '';
  if(!stepId) return;
  var plan = getSubGoalPlan_(state.currentCat);
  if(!plan || !plan.steps.some(function(s){ return String(s.id) === stepId; })){
    if(typeof setAppToast === 'function') setAppToast('하위 목표를 찾을 수 없어요.', { duration: 3000, variant: 'err' });
    return;
  }
  openPlanWorkshop_('topic', stepId);
};
window.closePlanWorkshop_ = function(ev, opts){
  requestClosePlanWorkshop_(ev, opts);
};
function refreshPlanWorkshopModal_(){
  var body = document.getElementById('plan-workshop-body');
  var footer = document.getElementById('plan-workshop-footer');
  var titleEl = document.getElementById('plan-workshop-title');
  if(!body || !footer) return;
  var mode = state.planWorkshopMode || 'year';
  if(mode === 'year'){
    if(titleEl) titleEl.textContent = '1년 브랜드 기획';
    body.innerHTML = renderYearWorkshopBodyHTML_();
    footer.innerHTML = renderYearWorkshopFooterHTML_();
  } else if(mode === 'program'){
    if(titleEl) titleEl.textContent = '세부 목표 기획';
    ensurePendingSubGoalPlanFromCurrent_(state.currentCat);
    body.innerHTML = renderProgramWorkshopBodyHTML_();
    footer.innerHTML = renderProgramWorkshopFooterHTML_();
  } else if(mode === 'topic'){
    var catT = CATEGORIES[state.currentCat];
    var planT = getSubGoalPlan_(state.currentCat);
    var stepT = planT && planT.steps ? planT.steps.find(function(s){ return String(s.id) === String(state.topicEditStepId); }) : null;
    if(titleEl) titleEl.textContent = '주제 기획';
    body.innerHTML = renderTopicWorkshopBodyHTML_(state.currentCat, state.topicEditStepId);
    footer.innerHTML = renderTopicWorkshopFooterHTML_(state.currentCat, state.topicEditStepId);
  }
  var box = document.querySelector('#plan-workshop-overlay .plan-workshop-box');
  if(box){
    box.className = 'plan-workshop-box plan-ws-tier-' + mode;
  }
  scheduleWorkshopTextareaGrow_(body);
}
function buildRollingPeriodsWithMonths_(anchorIso, periodDefs){
  var anchor = anchorIso ? new Date(anchorIso) : new Date();
  if(isNaN(anchor.getTime())) anchor = new Date();
  anchor.setHours(12, 0, 0, 0);
  var start = anchor;
  return (periodDefs || []).map(function(def, i){
    var mo = parseInt(def.months, 10) || 3;
    var end = addMonthsToDate_(start, mo);
    end.setDate(end.getDate() - 1);
    var row = {
      index: i,
      start: start.toISOString().slice(0, 10),
      end: end.toISOString().slice(0, 10),
      goal: String(def.goal != null ? def.goal : '').trim(),
      topic: String(def.topic != null ? def.topic : def.goal || '').trim(),
      rationale: String(def.rationale || '').trim(),
      months: mo,
      createdAt: def.createdAt || new Date().toISOString(),
      pinned: !!def.pinned
    };
    start = addMonthsToDate_(start, mo);
    return row;
  });
}
function rebuildPendingYearPeriodDates_(){
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return;
  var rebuilt = buildRollingPeriodsWithMonths_(p.anchorDate, p.periods.map(function(per){
    return { goal: per.goal, topic: per.topic, rationale: per.rationale, months: per.months, createdAt: per.createdAt, pinned: per.pinned };
  }));
  rebuilt.forEach(function(row, i){
    Object.assign(p.periods[i], { start: row.start, end: row.end });
  });
}
function normalizeYearPeriod_(per, i, fallbackGoal){
  var g = String((per && per.goal) || fallbackGoal || '').trim();
  return {
    index: i,
    topic: String((per && per.topic) || g).trim(),
    goal: g || String((per && per.topic) || '').trim(),
    rationale: String((per && per.rationale) || '').trim(),
    months: parseInt(per && per.months, 10) || 3,
    createdAt: (per && per.createdAt) ? per.createdAt : new Date().toISOString(),
    pinned: !!(per && per.pinned),
    start: per && per.start,
    end: per && per.end
  };
}
function formatYearPeriodCreatedLabel_(iso){
  try {
    if(!iso) return '—';
    var d = new Date(iso);
    if(isNaN(d.getTime())) return '—';
    return d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate();
  } catch(e){ return '—'; }
}
function autoGrowTextarea_(ta){
  if(!ta || ta.nodeName !== 'TEXTAREA') return;
  ta.style.height = 'auto';
  ta.style.overflowY = 'hidden';
  var style = window.getComputedStyle(ta);
  var lineH = parseFloat(style.lineHeight);
  if(!lineH || isNaN(lineH)) lineH = (parseFloat(style.fontSize) || 12) * 1.5;
  var pad = (parseFloat(style.paddingTop) || 0) + (parseFloat(style.paddingBottom) || 0);
  var border = (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0);
  var minRows = parseInt(ta.getAttribute('rows'), 10);
  if(isNaN(minRows) || minRows < 1) minRows = 2;
  var minH = Math.ceil(lineH * minRows + pad + border);
  var next = Math.max(minH, ta.scrollHeight + 2);
  ta.style.height = next + 'px';
}
function autoGrowTextareas_(rootEl){
  var root = rootEl || document.getElementById('plan-workshop-body');
  if(!root) return;
  root.querySelectorAll('textarea.ws-grow-textarea, textarea.ws-item-summary, textarea.sheet-edit, textarea.draft-brand-writing-brief').forEach(function(ta){
    if(!ta.__wsGrowBound){
      ta.__wsGrowBound = true;
      ta.addEventListener('input', function(){ autoGrowTextarea_(ta); });
    }
    autoGrowTextarea_(ta);
  });
}
function scheduleWorkshopTextareaGrow_(rootEl){
  var root = rootEl || document.getElementById('plan-workshop-body');
  if(!root) return;
  autoGrowTextareas_(root);
  requestAnimationFrame(function(){
    autoGrowTextareas_(root);
    requestAnimationFrame(function(){ autoGrowTextareas_(root); });
  });
  [50, 150, 320].forEach(function(ms){
    setTimeout(function(){ autoGrowTextareas_(root); }, ms);
  });
}
window.autoGrowTextarea_ = autoGrowTextarea_;
function opsGrowTextareas_(rootEl){
  var root = rootEl || document.querySelector('.ops-manual-wrap');
  if(!root) return;
  root.querySelectorAll('textarea.ops-grow-textarea').forEach(function(ta){
    if(!ta.__opsGrowBound){
      ta.__opsGrowBound = true;
      ta.addEventListener('input', function(){ autoGrowTextarea_(ta); });
    }
    autoGrowTextarea_(ta);
  });
}
function scheduleOpsReviewTextareaGrow_(rootEl){
  var root = rootEl || document.querySelector('.ops-manual-wrap');
  if(!root) return;
  opsGrowTextareas_(root);
  requestAnimationFrame(function(){
    opsGrowTextareas_(root);
    requestAnimationFrame(function(){ opsGrowTextareas_(root); });
  });
  [50, 150, 320].forEach(function(ms){
    setTimeout(function(){ opsGrowTextareas_(root); }, ms);
  });
}
window.scheduleOpsReviewTextareaGrow_ = scheduleOpsReviewTextareaGrow_;
function getYearPeriodPinnedStats_(periods){
  periods = periods || [];
  var pinned = periods.filter(function(per){ return per && per.pinned; }).length;
  var total = periods.length || 4;
  return { pinned: pinned, unpinned: Math.max(0, total - pinned), total: total };
}
function buildYearAiSuggestConfirmMsg_(stats){
  if(!stats || stats.pinned >= stats.total) return null;
  if(stats.pinned === 0){
    return '기획 의도와 4분기 주제·의도를 AI로 새로 제안할까요?\n(고정한 분기가 없으면 전체가 바뀝니다)';
  }
  if(stats.unpinned === 1) return '1개를 재생성 하시겠습니까?';
  return '고정된 주제 외 ' + stats.unpinned + '개를 재생성 하시겠습니까?';
}
function renderYearAiSuggestBtnHTML_(){
  ensurePendingYearPlanFromCurrent_();
  var stats = getYearPeriodPinnedStats_(state.pendingYearPlan && state.pendingYearPlan.periods);
  var allPinned = stats.pinned >= stats.total;
  return '<button type="button" class="modal-btn ws-btn-ai' + (allPinned ? ' is-disabled' : '') + '" id="btn-year-regen"' +
    (allPinned ? ' disabled title="재생성할 분기의 고정을 해제해 주세요"' : '') +
    ' onclick="generateYearPlanWorkshopWithAI_()">재생성</button>';
}
function applyYearAiPeriodsToPending_(p, aiPeriods, unpinnedIdxs, now){
  var applied = 0;
  var list = aiPeriods || [];
  var hasIndex = list.some(function(pr){ return pr && pr.index != null; });
  if(hasIndex){
    list.forEach(function(pr){
      if(!pr) return;
      var qi = parseInt(pr.index, 10) - 1;
      if(qi < 0 || qi > 3 || !p.periods[qi] || p.periods[qi].pinned) return;
      applyYearAiPeriodRow_(p.periods[qi], pr, now);
      applied++;
    });
  } else {
    var ui = 0;
    unpinnedIdxs.forEach(function(qi){
      var pr = list[ui++];
      if(!pr || !p.periods[qi] || p.periods[qi].pinned) return;
      applyYearAiPeriodRow_(p.periods[qi], pr, now);
      applied++;
    });
  }
  return applied;
}
function applyYearAiPeriodRow_(per, pr, now){
  var topic = sanitizePersonalBrandText_(String((pr && pr.topic) || (pr && pr.goal) || '').trim());
  if(topic){
    per.topic = topic;
    per.goal = sanitizePersonalBrandText_(String((pr && pr.goal) || topic).trim());
    if(!per.createdAt) per.createdAt = now || new Date().toISOString();
  }
  if(pr && pr.rationale) per.rationale = sanitizePersonalBrandText_(String(pr.rationale).trim());
}
function renderYearQuarterCardHTML_(per, idx){
  var lbl = formatPeriodRangeLabel_(per.start, per.end) || ((idx + 1) + '분기');
  var months = parseInt(per.months, 10) || 3;
  var monthOpts = '';
  for(var m = 1; m <= 6; m++){
    monthOpts += '<option value="' + m + '"' + (months === m ? ' selected' : '') + '>' + m + '개월</option>';
  }
  var pinnedCls = per.pinned ? ' active' : '';
  return '<div class="ws-quarter-card ' + getPlanTierClass_('year') + ' ' + getQuarterToneClass_(idx) + (per.pinned ? ' pinned' : '') + '" data-q-idx="' + idx + '" data-plan-tier="1">' +
    '<div class="ws-quarter-top">' +
      '<div class="ws-quarter-meta">' +
        '<div class="ws-quarter-meta-row">' +
          '<span class="ws-quarter-badge">' + (idx + 1) + '분기</span>' +
          '<span class="ws-quarter-date">생성 ' + escapeHtml(formatYearPeriodCreatedLabel_(per.createdAt)) + '</span>' +
          '<span class="ws-quarter-range">' + escapeHtml(lbl) + (idx === 0 ? ' · 지금' : '') + '</span>' +
          '<label class="ws-quarter-months-wrap">기간 ' +
            '<select class="ws-quarter-months" onchange="updatePendingYearPeriodMonths_(' + idx + ',this.value)"' + (per.pinned ? ' disabled' : '') + '>' + monthOpts + '</select>' +
          '</label>' +
        '</div>' +
        '<label class="ws-quarter-field-label ws-quarter-topic-label">주제</label>' +
        '<textarea class="ws-quarter-topic ws-grow-textarea" rows="1" placeholder="' + (idx + 1) + '분기 · 미카닥 박준규 브랜드 주제" oninput="updatePendingYearPeriodTopic_(' + idx + ',this.value);autoGrowTextarea_(this)" onchange="updatePendingYearPeriodTopic_(' + idx + ',this.value)">' + escapeHtml(per.topic || '') + '</textarea>' +
      '</div>' +
      '<div class="ws-quarter-tools">' +
        '<button type="button" class="ws-item-btn pin' + pinnedCls + '" onclick="togglePinYearPeriod_(' + idx + ')" title="고정">' + (per.pinned ? '고정됨' : '고정') + '</button>' +
        '<button type="button" class="ws-item-btn danger" onclick="clearYearPeriod_(' + idx + ')" title="삭제">삭제</button>' +
      '</div>' +
    '</div>' +
    '<label class="ws-quarter-rationale-label">이 분기 주제에 대한 의도 · 수정 후 재생성에 반영</label>' +
    '<textarea class="ws-grow-textarea ws-quarter-rationale" rows="2" placeholder="이 분기에 이 주제를 두는 이유, 독자가 얻을 것" oninput="updatePendingYearPeriodRationale_(' + idx + ',this.value);autoGrowTextarea_(this)">' + escapeHtml(per.rationale || '') + '</textarea>' +
  '</div>';
}
function ensurePendingYearPlanFromCurrent_(){
  if(state.pendingYearPlan) {
    state.pendingYearPlan.periods = (state.pendingYearPlan.periods || []).map(function(per, i){
      var n = normalizeYearPeriod_(per, i, per.goal);
      n.start = per.start || n.start;
      n.end = per.end || n.end;
      return sanitizeYearPeriodFields_(n);
    });
    sanitizeYearPlanObj_(state.pendingYearPlan);
    if(hasYearPlanApplied_()){
      if(isPendingYearPlanSameAsApplied_() || isPendingYearPlanContentSameAsApplied_()){
        refreshPendingYearPlanFromApplied_();
      }
    }
    return;
  }
  var plan = getYearPlan_();
  var brand = getBranding_();
  var defs = plan.periods.map(function(p, i){
    return sanitizeYearPeriodFields_(normalizeYearPeriod_(p, i, p.goal));
  });
  state.pendingYearPlan = sanitizeYearPlanObj_({
    intent: plan.intent || (brand.yearPlan && brand.yearPlan.intent) || '',
    pillars: (brand.pillars || []).slice(),
    anchorDate: plan.anchorDate,
    periods: buildRollingPeriodsWithMonths_(plan.anchorDate, defs)
  });
}
function renderYearWorkshopBodyHTML_(){
  if(state.yearPlanGenerating) return renderWsGeneratingHTML_('미카닥 박준규 브랜드 <strong>4분기 주제</strong>와 순서를 제안하고 있어요.', YEAR_PLAN_GEN_ESTIMATE_SEC, state.yearPlanGenerating);
  ensurePendingYearPlanFromCurrent_();
  var p = state.pendingYearPlan;
  if(!p) return '<p class="ws-intro">기획 데이터가 없어요.</p>';
  var hasTopics = p.periods.some(function(per){ return String(per.topic || per.goal || '').trim(); });
  var html = '';
  if(!hasTopics && !p.intent){
    html += '<div class="ws-year-cta ' + getPlanTierClass_('year') + '" data-plan-tier="1">' +
      '<p class="ws-intro">먼저 <strong>미카닥 박준규</strong> 마스터 브랜드의 4분기 방향을 AI와 함께 잡아 보세요.</p>' +
      '<p class="ws-intro-ref brand-layer-note">' + escapeHtml(BRAND_DUAL_LAYER_HINT) + '</p>' +
      '<p class="ws-intro-ref">북극성: ' + escapeHtml(MASTER_BRAND_NORTH_STAR) + '</p>' +
      '<p class="ws-intro-ref">PSP·PAR·프로그램 구조: <a href="' + PROFILE_BRAND_URL + '" target="_blank" rel="noopener">미카닥 박준규 프로필 PSP 가이드</a></p>' +
    '</div>';
  }
  html += '<div class="ws-intent-block">' +
    '<label class="ws-intent-label">기획 의도 · 1년 순서를 이렇게 잡은 이유 (3~5문장)</label>' +
    '<textarea class="ws-intent-input ws-grow-textarea" rows="4" placeholder="미카닥 박준규 마스터 브랜드(신뢰·왜·순서), 4분기 심리 변화(인식→이해→실천→공동체), 독자가 1년에 걸쳐 얻을 것. 프로그램별 주제는 각 탭에서 잡습니다." oninput="updatePendingYearIntent_(this.value);autoGrowTextarea_(this)">' + escapeHtml(p.intent || '') + '</textarea>' +
  '</div>' +
  '<div class="ws-items ws-items-full">';
  p.periods.forEach(function(per, idx){
    html += renderYearQuarterCardHTML_(per, idx);
  });
  html += '</div>';
  return html;
}
function renderYearWorkshopFooterHTML_(){
  var html = '';
  if(!state.yearPlanGenerating){
    var applySt = getYearPlanApplyBtnState_();
    html += '<div class="ws-actions">' +
      renderYearAiSuggestBtnHTML_() +
      renderPlanApplyBtnHTML_(applySt) +
      '<button type="button" class="modal-btn-ghost" onclick="discardPendingYearPlan_()">취소</button>' +
    '</div>';
  }
  return html;
}
function renderProgramStepCardHTML_(step, idx){
  var pinnedCls = step.pinned ? ' active' : '';
  return '<div class="ws-quarter-card ws-program-step-card ' + getPlanTierClass_('program') + ' ' + getStepToneClass_(idx) + (step.pinned ? ' pinned' : '') + '" data-step-idx="' + idx + '" data-plan-tier="2">' +
    '<div class="ws-quarter-top">' +
      '<div class="ws-quarter-meta">' +
        '<div class="ws-quarter-meta-row">' +
          '<span class="ws-quarter-badge">' + (idx + 1) + '단계</span>' +
        '</div>' +
        '<label class="ws-quarter-field-label ws-quarter-topic-label">제목</label>' +
        '<textarea class="ws-quarter-topic ws-grow-textarea" rows="1" placeholder="' + (idx + 1) + '단계 · 제목" oninput="updatePendingStepField_(' + idx + ',\'title\',this.value);autoGrowTextarea_(this)" onchange="updatePendingStepField_(' + idx + ',\'title\',this.value)">' + escapeHtml(step.title || '') + '</textarea>' +
      '</div>' +
      '<div class="ws-quarter-tools">' +
        '<button type="button" class="ws-item-btn pin' + pinnedCls + '" onclick="togglePinPendingStep_(' + idx + ')" title="고정">' + (step.pinned ? '고정됨' : '고정') + '</button>' +
        '<button type="button" class="ws-item-btn danger" onclick="removePendingStep_(' + idx + ')">삭제</button>' +
      '</div>' +
    '</div>' +
    '<textarea class="ws-item-summary ws-grow-textarea" rows="2" placeholder="한 줄 설명 · 이 단계가 독자에게 주는 것" oninput="updatePendingStepField_(' + idx + ',\'summary\',this.value);autoGrowTextarea_(this)">' + escapeHtml(step.summary || '') + '</textarea>' +
    '<label class="ws-quarter-rationale-label">이 단계 의도 · 수정 후 재생성에 반영</label>' +
    '<textarea class="ws-grow-textarea ws-quarter-rationale" rows="3" placeholder="이 단계가 여기 오는 이유, 독자가 얻을 것, 앞뒤 단계와의 연결" oninput="updatePendingStepField_(' + idx + ',\'rationale\',this.value);autoGrowTextarea_(this)">' + escapeHtml(step.rationale || '') + '</textarea>' +
  '</div>';
}
function renderProgramWorkshopBodyHTML_(){
  if(state.subGoalPlanGenerating && sameCatId_(state.subGoalPlanGenerating.catId, state.currentCat)){
    return renderWsGeneratingHTML_('분기별 목표에 맞는 <strong>3개월 단계별 하위 목표</strong>를 설계하고 있어요.', SUBGOAL_PLAN_GEN_ESTIMATE_SEC, state.subGoalPlanGenerating);
  }
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, state.currentCat)){
    var outcomeHint = getCategoryThreeMonthOutcome_(state.currentCat);
    return '<div class="ws-year-cta ' + getPlanTierClass_('program') + '" data-plan-tier="2">' +
      '<p class="ws-intro">분기별 <strong>마스터 목표</strong>를 이 프로그램의 <strong>3개월 여정</strong>으로 풀어 보세요.</p>' +
      (outcomeHint ? '<p class="ws-intro-ref ws-program-outcome">3개월 후 독자: ' + escapeHtml(outcomeHint) + '</p>' : '') +
      '<p class="ws-intro-ref">주제 5개는 각 하위 목표마다 따로 기획합니다.</p>' +
    '</div>';
  }
  var brandProfile = (p.plan && p.plan.brandProfile) ? String(p.plan.brandProfile).trim() : '';
  var strategyGuide = normalizeProgramStrategyGuideTemplate_(
    p.plan && (p.plan.strategyGuide || p.plan.criteria || p.plan.intent)
      ? String(p.plan.strategyGuide || p.plan.criteria || p.plan.intent).trim()
      : ''
  );
  var programOutcome = getCategoryThreeMonthOutcome_(state.currentCat);
  var html = '<p class="ws-intro">분기별 <strong>마스터 목표</strong> → 이 프로그램 <strong>3개월 여정</strong>. 하위 목표·의도만 정하고, 주제는 단계별로 따로 기획해요.</p>' +
    (programOutcome ? '<p class="ws-intro-ref ws-program-outcome">3개월 후 독자: ' + escapeHtml(programOutcome) + '</p>' : '') +
    '<p class="ws-intro-ref">PSP·PAR·프로그램 구조: <a href="' + PROFILE_BRAND_URL + '" target="_blank" rel="noopener">미카닥 박준규 프로필 PSP 가이드</a></p>' +
    renderIntentRefBlockHTML_('분기별 목표·의도 (하위 목표 기획 시 참고)', buildMainGoalContextBlock_()) +
    '<div class="ws-intent-block">' +
      '<label class="ws-intent-label">프로그램 브랜딩 요소 · 특징/강점/주의점/목표 독자 (3~5문장)</label>' +
      '<div class="ws-intent-tools"><button type="button" class="ws-item-btn" onclick="regenerateProgramBrandProfile_()">이 부분만 재생성</button></div>' +
      '<textarea class="ws-intent-input ws-grow-textarea" rows="4" placeholder="이 프로그램의 강점·한계, 주 독자와 약속할 결과, 피해야 할 표현/접근" oninput="updatePendingPlanBrandProfile_(this.value);autoGrowTextarea_(this)">' + escapeHtml(brandProfile) + '</textarea>' +
    '</div>' +
    '<div class="ws-intent-block ws-criteria-block">' +
      '<label class="ws-intent-label">하위 목표 생성 기준 + 기획 의도 (통합)</label>' +
      '<div class="ws-intent-tools"><button type="button" class="ws-item-btn" onclick="regenerateProgramStrategyGuide_()">이 부분만 재생성</button></div>' +
      '<textarea class="ws-intent-input ws-grow-textarea" rows="5" placeholder="예) 인식→이해→실천→유지(생성 기준), 단계별 역할, 제외 주제, CTA 톤, 왜 이 순서인지(기획 의도)" oninput="updatePendingPlanStrategyGuide_(this.value);autoGrowTextarea_(this)">' + escapeHtml(strategyGuide) + '</textarea>' +
    '</div>' +
    '<div class="ws-items ws-items-full">';
  (p.plan.steps || []).forEach(function(step, idx){
    html += renderProgramStepCardHTML_(step, idx);
  });
  var stepN = (p.plan.steps || []).length;
  if(stepN > 0 && stepN < 3){
    html += '<p class="ws-intro-ref" style="color:#B45309;margin-top:8px;">지금은 ' + stepN + '단계만 있어요. 아래 「단계 재생성」으로 3~5단계를 채운 뒤 적용해 주세요.</p>';
  }
  html += '</div>';
  return html;
}
function getProgramStepPinnedStats_(steps){
  steps = steps || [];
  var pinned = steps.filter(function(s){ return s && s.pinned; }).length;
  var total = steps.length;
  return { pinned: pinned, unpinned: Math.max(0, total - pinned), total: total };
}
function buildProgramRegenConfirmMsg_(stats){
  if(!stats || stats.pinned >= stats.total) return null;
  if(stats.pinned === 0) return '수정한 의도를 반영해 하위 목표를 다시 제안할까요?\n(고정한 단계가 없으면 전체가 바뀝니다)';
  if(stats.unpinned === 1) return '1개를 재생성 하시겠습니까?';
  return '고정된 단계 외 ' + stats.unpinned + '개를 재생성 하시겠습니까?';
}
function renderProgramRegenBtnHTML_(){
  ensurePendingSubGoalPlanFromCurrent_(state.currentCat);
  var p = state.pendingSubGoalPlan;
  var stats = p && p.plan && p.plan.steps ? getProgramStepPinnedStats_(p.plan.steps) : { pinned: 0, unpinned: 1, total: 1 };
  var hasSteps = !!(p && p.plan && p.plan.steps && p.plan.steps.length);
  var stepCount = hasSteps ? p.plan.steps.length : 0;
  var hasFoundation = !!(p && p.plan && String((p.plan.brandProfile || '') + (p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '')).trim());
  var allPinned = p && p.plan && p.plan.steps && p.plan.steps.length && stats.pinned >= stats.total;
  var regenLabel = !hasSteps
    ? (hasFoundation ? '단계 생성' : '기준 먼저 제안')
    : (stepCount < 3 ? '단계 채우기 (3~5개)' : '단계 재생성');
  return '<button type="button" class="modal-btn ws-btn-ai' + (allPinned ? ' is-disabled' : '') + '" id="btn-program-regen"' +
    (allPinned ? ' disabled title="재생성할 단계의 고정을 해제해 주세요"' : '') +
    ' onclick="regenerateProgramWorkshop_()">' + regenLabel + '</button>';
}
function renderProgramWorkshopFooterHTML_(){
  var catId = state.currentCat;
  ensurePendingSubGoalPlanFromCurrent_(catId);
  var p = state.pendingSubGoalPlan;
  var html = '';
  if(state.subGoalPlanGenerating && sameCatId_(state.subGoalPlanGenerating.catId, catId)) return html;
  if(p && sameCatId_(p.catId, catId)){
    var applyStP = getSubGoalPlanApplyBtnState_(catId);
    html += '<div class="ws-actions">' +
      renderProgramRegenBtnHTML_() +
      renderPlanApplyBtnHTML_(applyStP) +
      '<button type="button" class="modal-btn-ghost" onclick="discardPendingSubGoalPlan_()">취소</button>' +
    '</div>';
  } else {
    html += '<div class="ws-actions">' + renderProgramRegenBtnHTML_() + '</div>';
  }
  return html;
}
function isPendingSubGoalPlanStructureSameAsApplied_(catId){
  catId = catId != null ? catId : state.currentCat;
  var p = state.pendingSubGoalPlan;
  if(!p || !sameCatId_(p.catId, catId) || !p.plan || !hasSubGoalPlan_(catId)) return false;
  if((p.deleteIds || []).length) return false;
  var applied = getSubGoalPlan_(catId);
  if(String(p.plan.brandProfile || '').trim() !== String(applied.brandProfile || '').trim()) return false;
  if(String((p.plan.strategyGuide || p.plan.criteria || p.plan.intent) || '').trim() !==
     String((applied.strategyGuide || applied.criteria || applied.intent) || '').trim()) return false;
  return subGoalStepsMatchForCompare_(p.plan.steps, applied.steps);
}
function ensurePendingSubGoalPlanFromCurrent_(catId){
  catId = normalizePendingCatId_(catId != null ? catId : state.currentCat);
  try { repairIncompleteSubGoalPlan_(catId); } catch(eRep){}
  if(state.pendingSubGoalPlan && sameCatId_(state.pendingSubGoalPlan.catId, catId)){
    var pendingSteps = (state.pendingSubGoalPlan.plan && state.pendingSubGoalPlan.plan.steps) || [];
    var foundationOnly = !pendingSteps.length && !!(
      String((state.pendingSubGoalPlan.plan && state.pendingSubGoalPlan.plan.brandProfile) || '').trim() ||
      String((state.pendingSubGoalPlan.plan && (state.pendingSubGoalPlan.plan.strategyGuide || state.pendingSubGoalPlan.plan.criteria || state.pendingSubGoalPlan.plan.intent)) || '').trim()
    );
    // 1~2단계만 남은 깨진 pending, 또는 steps=[] 인 foundation-only pending은 버리고 적용본을 다시 올림
    if((pendingSteps.length > 0 && pendingSteps.length < 3) || foundationOnly){
      state.pendingSubGoalPlan = null;
      persistPendingSubGoalPlan_();
    } else {
      state.pendingSubGoalPlan.catId = catId;
      if(isPendingSubGoalPlanStructureSameAsApplied_(catId)){
        reconcileSubGoalDraftSteps_(catId);
        state.pendingSubGoalPlan.assignments = buildSubGoalAssignmentsFromDrafts_(catId);
        persistPendingSubGoalPlan_();
        bumpPlanWorkshopApplyBtn_();
      }
      return;
    }
  }
  var plan = getSubGoalPlan_(catId);
  var cat = CATEGORIES[catId];
  if(!plan || !plan.steps.length) return;
  reconcileSubGoalDraftSteps_(catId);
  var assignments = [];
  plan.steps.forEach(function(step){
    var sid = String(step.id);
    getDraftsForSubGoalStep_(catId, sid, { live: true }).forEach(function(d){
      if(!d || !d.id) return;
      var di = cat.drafts.indexOf(d);
      var slot = getDraftStepParts_(d, catId, di).step;
      if(slot < 1 || slot > 5) slot = 1;
      assignments.push({ draftId: d.id, stepId: sid, order: slot });
    });
  });
  state.pendingSubGoalPlan = {
    catId: catId,
    plan: {
      steps: plan.steps.map(function(s){
        return { id: String(s.id), title: s.title || '', summary: s.summary || '', rationale: s.rationale || '', pinned: !!s.pinned };
      }),
      miscLabel: plan.miscLabel || SUBGOAL_MISC_LABEL,
      brandProfile: plan.brandProfile ? String(plan.brandProfile).trim() : '',
      strategyGuide: plan.strategyGuide ? String(plan.strategyGuide).trim() : String(plan.criteria || plan.intent || '').trim(),
      criteria: plan.criteria ? String(plan.criteria).trim() : '',
      intent: plan.intent ? String(plan.intent).trim() : ''
    },
    assignments: assignments,
    deleteIds: []
  };
}
window.openProgramPlanWorkshop_ = function(){
  ensurePendingSubGoalPlanFromCurrent_(state.currentCat);
  openPlanWorkshop_('program');
};
function renderPlanWorkshopStripHTML_(catId){
  if(state.subGoalPlanGenerating && sameCatId_(state.subGoalPlanGenerating.catId, catId)){
    var leftP = getCountdownSec_(state.subGoalPlanGenerating.startedAt, state.subGoalPlanGenerating.estimateSec);
    return '<button type="button" class="plan-workshop-strip generating ' + getPlanTierClass_('program') + '" data-plan-tier="2" onclick="openProgramPlanWorkshop_()">' +
      '<span class="plan-workshop-strip-label" id="plan-strip-program-label">프로그램 기획 중 · ' + escapeHtml(formatCountdownShort_(leftP)) + '</span><span class="plan-workshop-strip-cta">열기</span></button>';
  }
  return '<button type="button" class="plan-workshop-strip ' + getPlanTierClass_('program') + '" data-plan-tier="2" onclick="openProgramPlanWorkshop_()">' +
    '<span class="plan-workshop-strip-label">세부 목표 기획안</span>' +
    '<span class="plan-workshop-strip-cta">함께 검토 →</span></button>';
}
function renderTopicWorkshopStripHTML_(catId, step, idx, opts){
  opts = opts || {};
  var sid = String(step.id);
  var filled = countFilledTopicSlots_(catId, sid);
  var compact = !!opts.compact;
  var active = !!opts.active;
  var label = compact
    ? ((idx + 1) + '단계 · ' + (step.title || ''))
    : ('주제 기획안' + (filled ? ' · ' + filled + '/5' : ''));
  var cta = compact ? (filled + '/5') : '함께 검토 →';
  var cls = 'plan-workshop-strip ' + getPlanTierClass_('topic-plan') + (compact ? ' compact' : ' in-step') + (active ? ' active' : '');
  return '<button type="button" class="' + cls + '" data-plan-tier="3"' + plannerStepActionAttrs_('openTopicStepWorkshop_', sid) + '>' +
    '<span class="plan-workshop-strip-label">' + escapeHtml(label) + '</span>' +
    '<span class="plan-workshop-strip-cta">' + escapeHtml(cta) + '</span></button>';
}
function renderYearWorkshopStripHTML_(){
  if(state.yearPlanGenerating){
    var leftY = getCountdownSec_(state.yearPlanGenerating.startedAt, state.yearPlanGenerating.estimateSec);
    return '<button type="button" class="plan-workshop-strip generating ' + getPlanTierClass_('year') + '" data-plan-tier="1"' + plannerStepActionAttrs_('openYearPlanWorkshop_', '') + '>' +
      '<span class="plan-workshop-strip-label" id="plan-strip-year-label">1년 기획 중 · ' + escapeHtml(formatCountdownShort_(leftY)) + '</span><span class="plan-workshop-strip-cta">열기</span></button>';
  }
  return '<button type="button" class="plan-workshop-strip ' + getPlanTierClass_('year') + '" data-plan-tier="1"' + plannerStepActionAttrs_('openYearPlanWorkshop_', '') + '>' +
    '<span class="plan-workshop-strip-label">1년 브랜드 기획안</span>' +
    '<span class="plan-workshop-strip-cta">함께 검토 →</span></button>';
}
window.openYearPlanWorkshop_ = function(){
  ensurePendingYearPlanFromCurrent_();
  openPlanWorkshop_('year');
};
function startPlanGenTimer_(kind, catId){
  var est = kind === 'year' ? YEAR_PLAN_GEN_ESTIMATE_SEC : SUBGOAL_PLAN_GEN_ESTIMATE_SEC;
  if(kind === 'year') state.yearPlanGenerating = { startedAt: Date.now(), estimateSec: est };
  else state.subGoalPlanGenerating = { catId: normalizePendingCatId_(catId), startedAt: Date.now(), estimateSec: est };
  ensurePlannerWaitTimer_();
  renderMain();
  if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
  tickPlannerWaitUi_();
}
function stopPlanGenTimer_(kind){
  if(kind === 'year') state.yearPlanGenerating = null;
  else state.subGoalPlanGenerating = null;
  stopPlannerWaitTimerIfIdle_();
  renderMain();
  if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
}
function buildPendingPlanContext_(p){
  var cat = CATEGORIES[p.catId];
  var ymeta = getYearPlanMeta_();
  return {
    mainGoal: getCurrentMainGoal_(),
    mainGoalIntent: ymeta.intent,
    currentPeriodRationale: ymeta.currentRationale,
    pillars: getBranding_().pillars.join(' · '),
    program: cat ? (getCategoryProgramLine_(p.catId) + ' · ' + cat.name + ' (' + cat.audience + ')') : '',
    intent: (p.plan && p.plan.intent) ? p.plan.intent : '',
    steps: (p.plan && p.plan.steps) ? p.plan.steps : []
  };
}
function refreshPlanWorkshopOrMain_(){
  persistPendingSubGoalPlan_();
  renderMain();
  if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
}
function updatePendingSubGoalPlanAndRender_(){ refreshPlanWorkshopOrMain_(); }
window.updatePendingPlanIntent_ = function(value){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan) return;
  p.plan.intent = String(value || '');
  persistPendingSubGoalPlan_();
};
window.updatePendingPlanBrandProfile_ = function(value){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan) return;
  p.plan.brandProfile = String(value || '');
  persistPendingSubGoalPlan_();
};
window.updatePendingPlanStrategyGuide_ = function(value){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan) return;
  p.plan.strategyGuide = normalizeProgramStrategyGuideTemplate_(String(value || ''));
  /* 기존 데이터 호환: 통합 텍스트를 intent/criteria에도 반영 */
  p.plan.criteria = p.plan.strategyGuide;
  p.plan.intent = p.plan.strategyGuide;
  persistPendingSubGoalPlan_();
};
window.updatePendingYearIntent_ = function(value){
  if(!state.pendingYearPlan) return;
  state.pendingYearPlan.intent = sanitizePersonalBrandText_(String(value || ''));
  persistPendingYearPlan_();
};
window.updatePendingYearPeriodTopic_ = function(idx, value){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  var v = sanitizePersonalBrandText_(String(value || '').trim());
  state.pendingYearPlan.periods[idx].topic = v;
  state.pendingYearPlan.periods[idx].goal = v;
  persistPendingYearPlan_();
};
window.updatePendingYearPeriodRationale_ = function(idx, value){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  state.pendingYearPlan.periods[idx].rationale = sanitizePersonalBrandText_(String(value || ''));
  persistPendingYearPlan_();
};
window.updatePendingYearPeriodMonths_ = function(idx, months){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  if(state.pendingYearPlan.periods[idx].pinned) return;
  state.pendingYearPlan.periods[idx].months = parseInt(months, 10) || 3;
  rebuildPendingYearPeriodDates_();
  persistPendingYearPlan_();
  refreshPlanWorkshopModal_();
};
window.togglePinYearPeriod_ = function(idx){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  state.pendingYearPlan.periods[idx].pinned = !state.pendingYearPlan.periods[idx].pinned;
  persistPendingYearPlan_();
  refreshPlanWorkshopModal_();
};
window.clearYearPeriod_ = function(idx){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  var per = state.pendingYearPlan.periods[idx];
  if(per.pinned){
    if(typeof setAppToast === 'function') setAppToast('고정된 분기는 삭제할 수 없어요. 고정을 해제해 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  if(!confirm((idx + 1) + '분기 주제·의도를 비울까요?')) return;
  per.topic = '';
  per.goal = '';
  per.rationale = '';
  persistPendingYearPlan_();
  refreshPlanWorkshopModal_();
};
window.updatePendingYearPeriodGoal_ = function(idx, value){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  state.pendingYearPlan.periods[idx].goal = String(value || '').trim();
  persistPendingYearPlan_();
};
window.updatePendingYearPeriodLabel_ = function(idx, value){
  if(!state.pendingYearPlan || !state.pendingYearPlan.periods[idx]) return;
  state.pendingYearPlan.periods[idx].label = String(value || '').trim();
  persistPendingYearPlan_();
};
window.updatePendingStepField_ = function(stepIdx, field, value){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan || !p.plan.steps || !p.plan.steps[stepIdx]) return;
  if(field === 'title') p.plan.steps[stepIdx].title = String(value || '').trim();
  else if(field === 'summary') p.plan.steps[stepIdx].summary = String(value || '').trim();
  else if(field === 'rationale') p.plan.steps[stepIdx].rationale = String(value || '').trim();
  persistPendingSubGoalPlan_();
};
window.togglePinPendingStep_ = function(stepIdx){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan || !p.plan.steps[stepIdx]) return;
  p.plan.steps[stepIdx].pinned = !p.plan.steps[stepIdx].pinned;
  persistPendingSubGoalPlan_();
  refreshPlanWorkshopModal_();
  bumpPlanWorkshopApplyBtn_();
};
window.removePendingStep_ = function(stepIdx){
  var p = state.pendingSubGoalPlan;
  if(!p || !p.plan || !p.plan.steps || p.plan.steps.length <= 1){
    if(typeof setAppToast === 'function') setAppToast('최소 1개 단계는 남겨야 해요.', { duration: 3000, variant: 'err' });
    return;
  }
  var removed = p.plan.steps[stepIdx];
  if(removed && removed.pinned){
    if(typeof setAppToast === 'function') setAppToast('고정된 단계는 삭제할 수 없어요. 고정을 해제해 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  var rid = String(removed.id);
  var oldIds = p.plan.steps.map(function(s){ return String(s.id); });
  p.plan.steps.splice(stepIdx, 1);
  p.plan.steps.forEach(function(s, i){ s.id = 's' + (i + 1); });
  var idMap = {};
  oldIds.forEach(function(oldId, j){
    if(j === stepIdx) return;
    var newIdx = j < stepIdx ? j : j - 1;
    idMap[oldId] = 's' + (newIdx + 1);
  });
  p.assignments = (p.assignments || []).map(function(a){
    if(String(a.stepId || '') === rid){
      return { draftId: a.draftId, stepId: SUBGOAL_MISC_ID, order: a.order };
    }
    var newSid = idMap[String(a.stepId || '')];
    return newSid ? { draftId: a.draftId, stepId: newSid, order: a.order } : a;
  });
  if(Object.keys(idMap).length){
    remapDraftStepIdsForCat_({ draftBrandOverrides: state.draftBrandOverrides }, p.catId, idMap);
  }
  persistPendingSubGoalPlan_();
  refreshPlanWorkshopOrMain_();
};
window.generateYearPlanWorkshopWithAI_ = async function(){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  ensurePendingYearPlanFromCurrent_();
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return;
  var stats = getYearPeriodPinnedStats_(p.periods);
  if(stats.pinned >= stats.total){
    if(typeof setAppToast === 'function') setAppToast('재생성할 분기의 고정을 해제해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  var confirmMsg = buildYearAiSuggestConfirmMsg_(stats);
  if(confirmMsg && !confirm(confirmMsg)) return;
  plannerAiBusy = true;
  startPlanGenTimer_('year');
  if(!document.getElementById('plan-workshop-overlay').classList.contains('open')) openPlanWorkshop_('year');
  else refreshPlanWorkshopModal_();
  var isPartial = stats.pinned > 0;
  var unpinnedIdxs = [];
  p.periods.forEach(function(per, i){ if(!per.pinned) unpinnedIdxs.push(i); });
  try {
    var brand = getBranding_();
    var prompt;
    if(isPartial){
      var pinnedBlock = p.periods.map(function(per, i){
        if(!per.pinned) return null;
        return (i + 1) + '분기(고정·변경 금지): 주제「' + (per.topic || per.goal || '') + '」' +
          (per.rationale ? ', 의도: ' + per.rationale : '');
      }).filter(Boolean).join('\n');
      var targetLabels = unpinnedIdxs.map(function(i){ return (i + 1) + '분기'; }).join(', ');
      var unpinnedBlock = unpinnedIdxs.map(function(i){
        var per = p.periods[i];
        var lines = [(i + 1) + '분기(' + (per.months || 3) + '개월)'];
        if(per.topic || per.goal) lines.push('현재 주제: ' + (per.topic || per.goal));
        if(per.rationale) lines.push('사용자 수정 의도(반드시 반영): ' + per.rationale);
        return lines.join('\n');
      }).join('\n\n');
      prompt =
buildBrandStrategyPromptPrefix_() + '\n\n' +
'현재 기획 의도(참고·유지): ' + (p.intent || '') + '\n' +
'브랜드 기둥: ' + ((p.pillars && p.pillars.length) ? p.pillars : brand.pillars || []).join(' · ') + '\n\n' +
'[고정 분기 — 절대 변경·대체하지 마세요]\n' + pinnedBlock + '\n\n' +
'[재생성 대상 — 사용자 수정 내용 반영]\n' + unpinnedBlock + '\n\n' +
'[요청] 고정 분기와 한 줄로 이어지게 ' + targetLabels + '만 새로 제안하세요.\n' +
YEAR_BRAND_WRITING_RULE + '\n' +
'- intent·pillars는 응답 JSON에 넣지 마세요.\n' +
'- periods[].index: 1~4 분기 번호\n' +
'- periods[].rationale: 2~4문장\n' +
'JSON: {"periods":[{"index":2,"topic":"…","goal":"…","rationale":"…"}]}';
    } else {
      var currentBlock = p.periods.map(function(per, i){
        var lines = [(i + 1) + '분기'];
        if(per.topic || per.goal) lines.push('현재 주제: ' + (per.topic || per.goal));
        if(per.rationale) lines.push('사용자 수정 의도(반드시 반영): ' + per.rationale);
        return lines.join('\n');
      }).join('\n\n');
      prompt =
buildBrandStrategyPromptPrefix_() + '\n\n' +
'미카닥 박준규 **마스터 브랜드** 1년 기획을 4분기(각 3개월) 주제로 제안하세요. (프로그램별 콘텐츠 로드맵은 각 탭에서 별도 기획)\n' +
'[마스터 북극성] ' + MASTER_BRAND_NORTH_STAR + '\n' +
YEAR_BRAND_WRITING_RULE + '\n' +
'현재 기획 의도(반드시 반영·클리닉명이 있으면 미카닥 박준규로 바꿔 작성): ' + sanitizePersonalBrandText_(p.intent || '') + '\n\n' +
'[현재 분기별 수정 내용 참고]\n' + currentBlock + '\n\n' +
'- intent: 전체 1년 기획 의도 3~5문장(순서 이유·브랜드 메시지·독자 변화)\n' +
'- periods[].topic: 분기별 브랜드 주제 한 줄\n' +
'- periods[].rationale: 그 분기 의도 2~4문장(왜 이 시기에 이 주제·독자가 얻을 것)\n' +
'JSON: {"intent":"…","pillars":["…"],"periods":[{"topic":"…","goal":"…","rationale":"…"},…4개]}';
    }
    var text = await callClaudePlanner_(prompt, { maxTokens: isPartial ? 1800 : 2200 });
    var obj = parsePlannerAiJsonObject_(text);
    if(obj.intent) obj.intent = sanitizePersonalBrandText_(obj.intent);
    (obj.periods || []).forEach(function(pr){
      if(pr.topic) pr.topic = sanitizePersonalBrandText_(pr.topic);
      if(pr.goal) pr.goal = sanitizePersonalBrandText_(pr.goal);
      if(pr.rationale) pr.rationale = sanitizePersonalBrandText_(pr.rationale);
    });
    var now = new Date().toISOString();
    if(isPartial){
      var applied = applyYearAiPeriodsToPending_(p, obj.periods, unpinnedIdxs, now);
      if(!applied) throw new Error('재생성할 분기 결과를 찾지 못했어요');
      persistPendingYearPlan_();
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('고정 분기를 제외하고 ' + applied + '개 분기를 제안했어요.', { duration: 4000, variant: 'ok' });
    } else {
      var plan = getYearPlan_();
      var defs = (obj.periods || []).slice(0, 4).map(function(pr, i){
        var topic = String((pr && pr.topic) || (pr && pr.goal) || '').trim();
        return {
          topic: topic,
          goal: String((pr && pr.goal) || topic).trim(),
          rationale: (pr && pr.rationale) ? String(pr.rationale).trim() : '',
          months: 3,
          createdAt: now,
          pinned: false
        };
      });
      while(defs.length < 4) defs.push({ topic: '', goal: '', rationale: '', months: 3, createdAt: now, pinned: false });
      state.pendingYearPlan = sanitizeYearPlanObj_({
        intent: String(p.intent || obj.intent || '').trim(),
        pillars: (obj.pillars && obj.pillars.length) ? obj.pillars.map(String) : brand.pillars.slice(),
        anchorDate: plan.anchorDate,
        periods: buildRollingPeriodsWithMonths_(plan.anchorDate, defs)
      });
      persistPendingYearPlan_();
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('기획 의도와 4분기 주제를 제안했어요.', { duration: 4000, variant: 'ok' });
    }
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('1년 기획 실패\n' + ((e && e.message) || e), { duration: 6000, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    stopPlanGenTimer_('year');
  }
};
function commitPendingYearPlan_(){
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return false;
  sanitizeYearPlanObj_(p);
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  state.branding.yearPlan = {
    anchorDate: p.anchorDate || new Date().toISOString().slice(0, 10),
    periods: p.periods.map(function(per, i){
      return {
        index: i,
        start: per.start,
        end: per.end,
        goal: per.goal || per.topic || '',
        topic: per.topic || per.goal || '',
        rationale: per.rationale || '',
        pinned: !!per.pinned,
        months: parseInt(per.months, 10) || 3,
        createdAt: per.createdAt || ''
      };
    }),
    confirmed: true,
    intent: p.intent || '',
    updatedAt: new Date().toISOString()
  };
  if(p.pillars && p.pillars.length) state.branding.pillars = p.pillars.slice();
  syncBrandingMessageFromYearPlan_();
  state.pendingYearPlan = null;
  persistPendingYearPlan_();
  save({ driveImmediate: true, gasImmediate: true });
  closePlanWorkshopForce_();
  renderMain();
  if(typeof setAppToast === 'function') setAppToast('1년 브랜드 기획을 적용했어요.', { duration: 3500, variant: 'ok' });
  return true;
}
window.applyPendingYearPlan_ = function(){
  var p = state.pendingYearPlan;
  if(!p || !p.periods || !p.periods.length) return;
  var confirmMsg = hasYearPlanApplied_() ? '수정 사항을 적용할까요?' : '1년 브랜드 기획안을 적용할까요?';
  if(!confirm(confirmMsg)) return;
  commitPendingYearPlan_();
};
window.discardPendingYearPlan_ = function(){
  requestClosePlanWorkshop_(null, { discard: true });
};
function applySubGoalRoadmapPlan_(payload){
  var catId = payload.catId;
  var cat = CATEGORIES[catId];
  if(!cat || !payload.plan) return { moved: 0, added: 0, deleted: 0 };
  if(!state.branding || typeof state.branding !== 'object') state.branding = {};
  if(!state.branding.subGoalPlans) state.branding.subGoalPlans = {};
  var prevPlan = state.branding.subGoalPlans[String(catId)];
  var prevIdMap = {};
  ((prevPlan && prevPlan.steps) || []).forEach(function(s, i){
    if(s && s.id != null) prevIdMap[String(s.id)] = 's' + (i + 1);
  });
  var nextSteps = (payload.plan.steps || []).map(function(s, i){
    var newId = 's' + (i + 1);
    var oldId = String(s.id != null ? s.id : (i + 1));
    if(oldId && oldId !== newId) prevIdMap[oldId] = newId;
    return {
      id: newId,
      title: s.title || '',
      summary: s.summary || '',
      rationale: s.rationale || '',
      pinned: !!s.pinned
    };
  });
  // pending assignments·초안의 옛 stepId 를 s1.. 로 맞춤
  if(Object.keys(prevIdMap).length){
    (payload.assignments || []).forEach(function(a){
      if(!a) return;
      var sid = String(a.stepId || '');
      if(prevIdMap[sid]) a.stepId = prevIdMap[sid];
      else if(/^\d+$/.test(sid)){
        var n = parseInt(sid, 10);
        if(n >= 1 && n <= nextSteps.length) a.stepId = 's' + n;
      }
    });
    remapDraftStepIdsForCat_({ draftBrandOverrides: state.draftBrandOverrides }, catId, prevIdMap);
  }
  state.branding.subGoalPlans[String(catId)] = {
    steps: nextSteps,
    miscLabel: payload.plan.miscLabel || SUBGOAL_MISC_LABEL,
    brandProfile: payload.plan.brandProfile ? String(payload.plan.brandProfile).trim() : '',
    strategyGuide: payload.plan.strategyGuide ? String(payload.plan.strategyGuide).trim() : '',
    criteria: payload.plan.strategyGuide ? String(payload.plan.strategyGuide).trim() : (payload.plan.criteria ? String(payload.plan.criteria).trim() : ''),
    intent: payload.plan.strategyGuide ? String(payload.plan.strategyGuide).trim() : (payload.plan.intent ? String(payload.plan.intent).trim() : ''),
    updatedAt: new Date().toISOString()
  };
  var plan = state.branding.subGoalPlans[String(catId)];
  var moved = 0, added = 0, deleted = 0;
  (payload.deleteIds || []).forEach(function(did){
    if(!did || draftIsPublished_(did)) return;
    deleteDraftSilent_(catId, did);
    deleted++;
  });
  var buckets = {};
  plan.steps.forEach(function(s){ buckets[String(s.id)] = []; });
  buckets[SUBGOAL_MISC_ID] = [];
  (payload.assignments || []).forEach(function(a){
    if(!a || !a.draftId) return;
    var d = (cat.drafts || []).find(function(x){ return x && x.id === a.draftId; });
    if(!d) return;
    var sid = String(a.stepId || SUBGOAL_MISC_ID);
    if(!buckets[sid]) sid = SUBGOAL_MISC_ID;
    buckets[sid].push({ draft: d, meta: a });
  });
  Object.keys(buckets).forEach(function(sid){
    var list = buckets[sid];
    var title = getSubGoalStepTitle_(plan, sid);
    var total = String(sid) === SUBGOAL_MISC_ID ? Math.max(list.length, 1) : 5;
    list.forEach(function(entry, idx){
      var order = (entry.meta && entry.meta.order) ? entry.meta.order : (idx + 1);
      if(String(sid) !== SUBGOAL_MISC_ID && (order < 1 || order > 5)) order = Math.min(Math.max(order, 1), 5);
      applyDraftRoadmapAssignment_(entry.draft, catId, sid, title, order, total);
      if(entry.meta && entry.meta.rationale) entry.draft.rationale = stripTopicRationaleStepPrefix_(String(entry.meta.rationale).trim());
      if(entry.meta && entry.meta.angle) entry.draft.angle = String(entry.meta.angle).trim();
      if(entry.isNew){
        cat.drafts.push(entry.draft);
        added++;
      } else {
        moved++;
      }
    });
  });
  if(state.syncRationalesOnBrandSave !== false){
    syncDraftRationalesFromRoadmap_([catId], true);
  }
  (plan.steps || []).forEach(function(step){
    normalizeStepDraftSlots_(catId, String(step.id));
  });
  var seededTopics = applyInitialProgramTopicsToCat_(catId);
  if(seededTopics) added += seededTopics;
  reconcileSubGoalDraftSteps_(catId);
  resetSubGoalCollapseDefaults_(catId);
  return { moved: moved, added: added, deleted: deleted };
}
function afterSubGoalPlanCommitted_(catId){
  setTimeout(function(){
    var plan = getSubGoalPlan_(catId);
    var firstNeed = plan && plan.steps.find(function(s){
      return stepNeedsMoreTopics_(catId, String(s.id));
    });
    if(!firstNeed) return;
    var targetId = String(firstNeed.id);
    if(targetId && state.apiKey){
      if(confirm('아직 비어 있는 단계의 주제 5개를 기획할까요?')){
        openPlanWorkshop_('topic', targetId);
      }
    }
  }, 400);
}
function commitPendingSubGoalPlan_(){
  var p = state.pendingSubGoalPlan;
  if(!p) return false;
  var result = applySubGoalRoadmapPlan_(p);
  var catId = p.catId;
  state.pendingSubGoalPlan = null;
  persistPendingSubGoalPlan_();
  save({ driveImmediate: true, gasImmediate: true });
  closePlanWorkshopForce_();
  renderTabs();
  renderMain();
  if(typeof setAppToast === 'function'){
    var msg = '하위 목표를 적용했어요.\n배치 ' + result.moved + ' · 추가 ' + result.added + ' · 삭제 ' + result.deleted;
    setAppToast(msg, { duration: 5000, variant: 'ok' });
  }
  afterSubGoalPlanCommitted_(catId);
  return true;
}
window.discardPendingSubGoalPlan_ = function(){
  requestClosePlanWorkshop_(null, { discard: true });
};
window.applyPendingSubGoalPlan_ = function(){
  var p = state.pendingSubGoalPlan;
  if(!p) return;
  var stepCount = (p.plan && p.plan.steps) ? p.plan.steps.length : 0;
  if(stepCount < 3 || stepCount > 5){
    if(typeof setAppToast === 'function') setAppToast('하위 목표는 3~5단계여야 해요. 「단계 재생성」으로 채워 주세요. (현재 ' + stepCount + '단계)', { duration: 4500, variant: 'err' });
    return;
  }
  var delCount = (p.deleteIds || []).filter(function(id){ return id && !draftIsPublished_(id); }).length;
  var isEdit = hasSubGoalPlan_(p.catId);
  var msg = (isEdit ? '수정 사항을 적용할까요?' : 'AI 제안을 적용할까요?') + '\n' +
    (p.plan.steps ? p.plan.steps.length + '단계 로드맵' : '');
  var assignCount = (p.assignments || []).length;
  if(assignCount) msg += ' · 기존 주제 배치 ' + assignCount + '건';
  if(delCount) msg += ' · 삭제 ' + delCount + '건(발행 완료는 유지)';
  msg += '\n\n각 단계 주제 5개 초안이 비어 있으면 기본 세트로 함께 채워집니다.';
  if(!confirm(msg)) return;
  commitPendingSubGoalPlan_();
};
function ensurePendingProgramPlanShell_(catId){
  catId = normalizePendingCatId_(catId);
  ensurePendingSubGoalPlanFromCurrent_(catId);
  if(state.pendingSubGoalPlan && sameCatId_(state.pendingSubGoalPlan.catId, catId)){
    state.pendingSubGoalPlan.catId = catId;
    return state.pendingSubGoalPlan;
  }
  var seed = getInitialProgramPlanDraft_(catId);
  var seededStrategy = seed ? seed.strategyGuide : '';
  state.pendingSubGoalPlan = {
    catId: catId,
    plan: {
      steps: seed ? seed.steps : [],
      miscLabel: SUBGOAL_MISC_LABEL,
      brandProfile: seed ? seed.brandProfile : '',
      strategyGuide: seededStrategy,
      criteria: seededStrategy,
      intent: seededStrategy
    },
    assignments: [],
    deleteIds: []
  };
  persistPendingSubGoalPlan_();
  return state.pendingSubGoalPlan;
}
async function suggestProgramFoundationWithAI_(catId, mode){
  mode = mode || 'both'; // both | brandProfile | strategyGuide
  var cat = CATEGORIES[catId];
  if(!cat) throw new Error('카테고리를 찾을 수 없어요.');
  var p = ensurePendingProgramPlanShell_(catId);
  var programOutcome = getCategoryThreeMonthOutcome_(catId);
  var brandProfile = String((p.plan && p.plan.brandProfile) || '').trim();
  var strategyGuide = String((p.plan && (p.plan.strategyGuide || p.plan.criteria || p.plan.intent)) || '').trim();
  var sectionGuide = mode === 'brandProfile'
    ? '- brandProfile만 작성하세요. strategyGuide는 출력하지 마세요.'
    : mode === 'strategyGuide'
      ? '- strategyGuide만 작성하세요. brandProfile은 출력하지 마세요.'
      : '- brandProfile, strategyGuide 둘 다 작성하세요.';
  var jsonGuide = mode === 'brandProfile'
    ? '{"brandProfile":"..."}'
    : mode === 'strategyGuide'
      ? '{"strategyGuide":"..."}'
      : '{"brandProfile":"...","strategyGuide":"..."}';
  var prompt =
buildContentStrategyPromptPrefix_({ program: getCategoryProgramLine_(catId) + ' · ' + cat.name + ' (' + cat.audience + ')' }) + '\n\n' +
renderIntentRefBlockHTML_('분기별 목표·의도', buildMainGoalContextBlock_()).replace(/<[^>]+>/g, '').trim() + '\n\n' +
(programOutcome ? '[프로그램 3개월 목표] ' + programOutcome + '\n\n' : '') +
'[현재 주제]\n' + buildDraftInventoryForSubGoalAI_(catId) + '\n\n' +
'[현재 프로그램 브랜딩 요소]\n' + (brandProfile || '(미작성)') + '\n\n' +
'[현재 생성 기준+기획 의도]\n' + (strategyGuide || '(미작성)') + '\n\n' +
'[요청] 프로그램 단계 생성 전에 먼저 기획 기준을 제안하세요.\n' +
'1) 프로그램 브랜딩 요소(특징·강점·주의점·목표 독자)\n' +
'2) 하위 목표 생성 기준 + 기획 의도(통합)\n' +
sectionGuide + '\n' +
'문장 길이: 각 항목 3~5문장. 구체적이고 실행 가능한 문장으로 작성하세요.\n' +
'JSON만 출력: ' + jsonGuide;
  var text = await callClaudePlanner_(prompt, { maxTokens: 2200 });
  var obj = parsePlannerAiJsonObject_(text);
  if(mode !== 'strategyGuide' && obj.brandProfile != null){
    p.plan.brandProfile = String(obj.brandProfile || '').trim();
  }
  if(mode !== 'brandProfile' && obj.strategyGuide != null){
    p.plan.strategyGuide = normalizeProgramStrategyGuideTemplate_(String(obj.strategyGuide || '').trim());
    /* 기존 데이터 호환 */
    p.plan.criteria = p.plan.strategyGuide;
    p.plan.intent = p.plan.strategyGuide;
  }
  persistPendingSubGoalPlan_();
  return p;
}
window.regenerateProgramBrandProfile_ = async function(){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  plannerAiBusy = true;
  startPlanGenTimer_('program', catId);
  try {
    await suggestProgramFoundationWithAI_(catId, 'brandProfile');
    refreshPlanWorkshopModal_();
    renderMain();
    if(typeof setAppToast === 'function') setAppToast('프로그램 브랜딩 요소를 다시 제안했어요.', { duration: 3600, variant: 'ok' });
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('브랜딩 요소 재생성 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    stopPlanGenTimer_('program');
  }
};
window.regenerateProgramStrategyGuide_ = async function(){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  plannerAiBusy = true;
  startPlanGenTimer_('program', catId);
  try {
    await suggestProgramFoundationWithAI_(catId, 'strategyGuide');
    refreshPlanWorkshopModal_();
    renderMain();
    if(typeof setAppToast === 'function') setAppToast('생성 기준+기획 의도를 다시 제안했어요.', { duration: 3600, variant: 'ok' });
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('생성 기준+기획 의도 재생성 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    stopPlanGenTimer_('program');
  }
};
window.regenerateProgramWorkshop_ = async function(){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = normalizePendingCatId_(state.currentCat);
  var cat = CATEGORIES[catId];
  if(!cat) return;
  if(!getCurrentMainGoal_()){
    if(typeof setAppToast === 'function') setAppToast('먼저 분기별 목표를 설정해 주세요.', { duration: 4500, variant: 'err' });
    openPlanWorkshop_('year');
    return;
  }
  ensurePendingSubGoalPlanFromCurrent_(catId);
  var p = state.pendingSubGoalPlan;
  var hasFoundation = !!(p && p.plan && String((p.plan.brandProfile || '') + (p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '')).trim());
  var hasAnySteps = !!(p && p.plan && p.plan.steps && p.plan.steps.length);
  if((!p || !p.plan || !hasFoundation) && !hasAnySteps){
    plannerAiBusy = true;
    startPlanGenTimer_('program', catId);
    state.mainGoalCollapsed = true;
    openPlanWorkshop_('program');
    try {
      await suggestProgramFoundationWithAI_(catId, 'both');
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('먼저 프로그램 브랜딩 요소·생성 기준을 제안했어요. 확인 후 단계 생성을 눌러 주세요.', { duration: 4800, variant: 'ok' });
    } catch(e){
      if(typeof setAppToast === 'function') setAppToast('기준 제안 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
    } finally {
      plannerAiBusy = false;
      stopPlanGenTimer_('program');
    }
    return;
  }
  if(!p || !p.plan || !p.plan.steps || !p.plan.steps.length){
    plannerAiBusy = true;
    startPlanGenTimer_('program', catId);
    state.mainGoalCollapsed = true;
    openPlanWorkshop_('program');
    try {
      var programOutcome = getCategoryThreeMonthOutcome_(catId);
      var promptInit =
buildContentStrategyPromptPrefix_({ program: getCategoryProgramLine_(catId) + ' · ' + cat.name + ' (' + cat.audience + ')' }) + '\n\n' +
(programOutcome ? '[프로그램 3개월 목표] ' + programOutcome + '\n\n' : '') +
'[현재 주제]\n' + buildDraftInventoryForSubGoalAI_(catId) + '\n\n' +
'[요청 순서]\n' +
'1) 프로그램 브랜딩 요소(특징·강점·주의점·목표 독자)\n' +
'2) 하위 목표 생성 기준 + 기획 의도(통합)\n' +
'4) 실제 단계(3~5개)\n\n' +
'[요청] 분기별 **마스터 목표**·의도를 이 **프로그램 3개월 여정**으로 풀어 3~5개 하위 목표(단계)로 나누세요.\n' +
'※ 마스터 브랜드(미카닥 박준규·왜·PSP)는 유지하되, 독자·프로그램에 맞게 구체화. 글 한 편 주제가 아니라 단계별 로드맵입니다.\n' +
'- brandProfile: 이 프로그램 브랜딩에 필요한 요소 3~5문장(특징·강점·주의점·목표 독자)\n' +
'- strategyGuide: 하위 목표 생성 기준+기획 의도(통합) 3~5문장(정렬 규칙·단계별 역할·왜 이 순서인지)\n' +
'- 각 step.rationale: 그 단계 의도 2~4문장(역할·독자가 얻을 것·앞뒤 단계 연결)\n' +
'기존 주제가 있으면 assignments로 단계에 배치.\n' +
'발행완료는 deleteIds 제외.\n' +
'※ steps는 반드시 3~5개. id는 s1,s2,s3… 형식. 예시처럼 1개만 두지 마세요.\n' +
'JSON만:\n' +
'{"brandProfile":"…","strategyGuide":"…",\n' +
'"steps":[{"id":"s1","title":"1단계 · …","summary":"한 줄","rationale":"…"},{"id":"s2","title":"2단계 · …","summary":"한 줄","rationale":"…"},{"id":"s3","title":"3단계 · …","summary":"한 줄","rationale":"…"}],\n' +
'"assignments":[{"draftId":"…","stepId":"s1","order":1}],\n' +
'"deleteIds":[]}';
      var textInit = await callClaudePlanner_(promptInit, { maxTokens: 4500 });
      var objInit = parsePlannerAiJsonObject_(textInit);
      if(!objInit.steps || !objInit.steps.length) throw new Error('하위 목표(steps)가 없어요');
      if(objInit.steps.length < 3 || objInit.steps.length > 5) throw new Error('하위 목표는 3~5단계여야 해요 (받은 개수: ' + objInit.steps.length + ')');
      state.pendingSubGoalPlan = {
        catId: normalizePendingCatId_(catId),
        plan: {
          steps: objInit.steps.map(function(s, i){
            return {
              id: 's' + (i + 1),
              title: s.title || '',
              summary: s.summary || '',
              rationale: s.rationale || '',
              pinned: false
            };
          }),
          miscLabel: SUBGOAL_MISC_LABEL,
          brandProfile: objInit.brandProfile ? String(objInit.brandProfile).trim() : '',
          strategyGuide: normalizeProgramStrategyGuideTemplate_(objInit.strategyGuide ? String(objInit.strategyGuide).trim() : (objInit.criteria ? String(objInit.criteria).trim() : (objInit.intent ? String(objInit.intent).trim() : ''))),
          criteria: normalizeProgramStrategyGuideTemplate_(objInit.strategyGuide ? String(objInit.strategyGuide).trim() : (objInit.criteria ? String(objInit.criteria).trim() : (objInit.intent ? String(objInit.intent).trim() : ''))),
          intent: normalizeProgramStrategyGuideTemplate_(objInit.strategyGuide ? String(objInit.strategyGuide).trim() : (objInit.criteria ? String(objInit.criteria).trim() : (objInit.intent ? String(objInit.intent).trim() : '')))
        },
        assignments: objInit.assignments || [],
        deleteIds: objInit.deleteIds || []
      };
      persistPendingSubGoalPlan_();
      renderTabs();
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('AI 하위 목표안을 불러왔어요.\n적용 후 각 단계에서 주제를 기획해 주세요.', { duration: 5000, variant: 'ok' });
    } catch(e){
      var msgInit = (e && e.message) ? e.message : String(e);
      if(typeof setAppToast === 'function') setAppToast('AI 기획 실패\n' + msgInit, { duration: 7000, variant: 'err' });
    } finally {
      plannerAiBusy = false;
      stopPlanGenTimer_('program');
    }
    return;
  }
  var stats = getProgramStepPinnedStats_(p.plan.steps);
  if(stats.total > 0 && stats.pinned >= stats.total){
    if(typeof setAppToast === 'function') setAppToast('재생성할 단계의 고정을 해제해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  var confirmMsg = buildProgramRegenConfirmMsg_(stats);
  if(confirmMsg && !confirm(confirmMsg)) return;
  plannerAiBusy = true;
  startPlanGenTimer_('program', catId);
  state.mainGoalCollapsed = true;
  if(!document.getElementById('plan-workshop-overlay').classList.contains('open')) openPlanWorkshop_('program');
  else refreshPlanWorkshopModal_();
  var isPartial = stats.pinned > 0;
  var unpinnedIdxs = [];
  p.plan.steps.forEach(function(s, i){ if(!s.pinned) unpinnedIdxs.push(i); });
  try {
    var ctx = buildPendingPlanContext_(p);
    var prompt;
    if(isPartial){
      var pinnedBlock = p.plan.steps.map(function(s, i){
        if(!s.pinned) return null;
        var line = (i + 1) + '단계(고정·변경 금지): ' + s.title + (s.summary ? ' — ' + s.summary : '');
        if(s.rationale) line += '\n   의도: ' + s.rationale;
        return line;
      }).filter(Boolean).join('\n');
      var unpinnedBlock = unpinnedIdxs.map(function(i){
        var s = p.plan.steps[i];
        var lines = [(i + 1) + '단계'];
        if(s.title) lines.push('현재 제목: ' + s.title);
        if(s.summary) lines.push('현재 설명: ' + s.summary);
        if(s.rationale) lines.push('사용자 수정 의도(반드시 반영): ' + s.rationale);
        return lines.join('\n');
      }).join('\n\n');
      var targetLabels = unpinnedIdxs.map(function(i){ return (i + 1) + '단계'; }).join(', ');
      prompt =
buildContentStrategyPromptPrefix_(ctx) + '\n\n' +
buildProgramPlanContextBlock_(p.catId) + '\n\n' +
'프로그램 브랜딩 요소(반드시 반영): ' + (p.plan.brandProfile || '') + '\n' +
'하위 목표 생성 기준+기획 의도(반드시 반영): ' + (p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '') + '\n\n' +
'[고정 단계 — 절대 변경하지 마세요]\n' + pinnedBlock + '\n\n' +
'[재생성 대상 — 사용자 수정 내용 반영]\n' + unpinnedBlock + '\n\n' +
'[요청] 고정 단계와 이어지게 ' + targetLabels + '만 새로 제안하세요.\n' +
'stepUpdates[].index는 0부터 시작하는 단계 번호.\n' +
'JSON: {"stepUpdates":[{"index":1,"title":"…","summary":"…","rationale":"…"}]}';
    } else {
      var stepsBlock = p.plan.steps.map(function(s, i){
        var lines = [(i + 1) + '단계'];
        if(s.title) lines.push('현재 제목: ' + s.title);
        if(s.summary) lines.push('현재 설명: ' + s.summary);
        if(s.rationale) lines.push('사용자 수정 의도(반드시 반영): ' + s.rationale);
        return lines.join('\n');
      }).join('\n\n');
      prompt =
buildContentStrategyPromptPrefix_(ctx) + '\n\n' +
buildProgramPlanContextBlock_(p.catId) + '\n\n' +
'프로그램 브랜딩 요소(반드시 반영): ' + (p.plan.brandProfile || '') + '\n' +
'하위 목표 생성 기준+기획 의도(반드시 반영): ' + (p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '') + '\n\n' +
'[현재 단계별 수정 내용 참고]\n' + stepsBlock + '\n\n' +
'3~5개 하위 목표(단계) 전체를 새로 제안하세요. 주제 5개는 단계에서 따로 기획합니다.\n' +
'※ steps는 반드시 3~5개. id는 s1,s2,s3… 형식. 예시처럼 1개만 두지 마세요.\n' +
'JSON: {"brandProfile":"…","strategyGuide":"…","steps":[{"id":"s1","title":"1단계 · …","summary":"…","rationale":"…"},{"id":"s2","title":"2단계 · …","summary":"…","rationale":"…"},{"id":"s3","title":"3단계 · …","summary":"…","rationale":"…"}]}';
    }
    var text = await callClaudePlanner_(prompt, { maxTokens: isPartial ? 2200 : 4500 });
    var obj = parsePlannerAiJsonObject_(text);
    if(isPartial){
      var applied = 0;
      (obj.stepUpdates || []).forEach(function(u){
        var idx = parseInt(u.index, 10);
        var st = p.plan.steps[idx];
        if(!st || st.pinned) return;
        if(u.title) st.title = String(u.title).trim();
        if(u.summary != null) st.summary = String(u.summary).trim();
        if(u.rationale) st.rationale = String(u.rationale).trim();
        applied++;
      });
      if(!applied) throw new Error('재생성할 단계 결과를 찾지 못했어요');
      persistPendingSubGoalPlan_();
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('고정 단계를 제외하고 ' + applied + '개 단계를 제안했어요.', { duration: 4000, variant: 'ok' });
    } else {
      if(!obj.steps || !obj.steps.length) throw new Error('하위 목표(steps)가 없어요');
      if(obj.steps.length < 3 || obj.steps.length > 5) throw new Error('하위 목표는 3~5단계여야 해요 (받은 개수: ' + obj.steps.length + ')');
      var oldSteps = (p.plan.steps || []).map(function(s){
        return { id: String(s.id), title: s.title || '', pinned: !!s.pinned };
      });
      var pinnedByTitle = {};
      var pinnedByIndex = {};
      oldSteps.forEach(function(s, i){
        if(s.pinned){
          if(s.title) pinnedByTitle[String(s.title).trim()] = true;
          pinnedByIndex[i] = true;
        }
      });
      var sameCount = obj.steps && obj.steps.length === oldSteps.length;
      if(obj.steps && obj.steps.length){
        p.plan.steps = obj.steps.map(function(s, i){
          var title = String(s.title || '').trim();
          return {
            id: 's' + (i + 1),
            title: s.title || '',
            summary: s.summary || '',
            rationale: s.rationale || '',
            pinned: !!pinnedByTitle[title] || (sameCount && !!pinnedByIndex[i])
          };
        });
      }
      if(obj.brandProfile != null) p.plan.brandProfile = String(obj.brandProfile || '').trim();
      if(obj.strategyGuide != null){
        p.plan.strategyGuide = normalizeProgramStrategyGuideTemplate_(String(obj.strategyGuide || '').trim());
        p.plan.criteria = p.plan.strategyGuide;
        p.plan.intent = p.plan.strategyGuide;
      }
      rebuildPendingProgramAssignments_(p, oldSteps);
      persistPendingSubGoalPlan_();
      refreshPlanWorkshopModal_();
      renderMain();
      if(typeof setAppToast === 'function') setAppToast('하위 목표를 다시 제안했어요.', { duration: 4000, variant: 'ok' });
    }
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('하위 목표 재생성 실패\n' + ((e && e.message) || e), { duration: 6000, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    stopPlanGenTimer_('program');
  }
};
window.generateSubGoalRoadmapWithAI_ = async function(){
  return regenerateProgramWorkshop_();
};
window.runProgramSetupWithAI_ = async function(){
  openPlanWorkshop_('program');
  if(!state.apiKey){ openApiModal(); return; }
  if(!getCurrentMainGoal_()){
    if(typeof setAppToast === 'function') setAppToast('먼저 분기별 목표를 설정해 주세요.', { duration: 4500, variant: 'err' });
    openPlanWorkshop_('year');
    return;
  }
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  var p = ensurePendingProgramPlanShell_(catId);
  var hasFoundation = !!String((p.plan.brandProfile || '') + (p.plan.strategyGuide || p.plan.criteria || p.plan.intent || '')).trim();
  if(hasFoundation) return;
  plannerAiBusy = true;
  startPlanGenTimer_('program', catId);
  try {
    await suggestProgramFoundationWithAI_(catId, 'both');
    renderMain();
    if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
    if(typeof setAppToast === 'function'){
      setAppToast('프로그램 브랜딩 요소·생성 기준을 먼저 제안했어요. 확인 후 단계 생성을 눌러 주세요.', { duration: 5200, variant: 'ok' });
    }
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('프로그램 기준 제안 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    stopPlanGenTimer_('program');
  }
};
function renderMainGoalCollapsedPreviewHTML_(plan, ymeta, current, rangeLabel){
  var yearGoal = (ymeta.intent || plan.intent || '').trim() || MASTER_BRAND_NORTH_STAR;
  var quarterGoal = String(current.topic || current.goal || '').trim() || '분기 목표 미설정';
  return '<div class="main-goal-collapsed-cards planner-layer-compact-toggle" onclick="toggleMainGoalPanel_()" role="button" tabindex="0" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();toggleMainGoalPanel_();}">' +
    '<div class="main-goal-preview-card year">' +
      '<span class="main-goal-preview-label">1년 브랜드 목표</span>' +
      '<span class="main-goal-preview-text">' + escapeHtml(yearGoal) + '</span>' +
    '</div>' +
    '<div class="main-goal-preview-card quarter ' + getQuarterToneClass_(0) + '">' +
      '<span class="main-goal-preview-label">현재 분기 · ' + escapeHtml(rangeLabel) + '</span>' +
      '<span class="main-goal-preview-text">' + escapeHtml(quarterGoal) + '</span>' +
    '</div>' +
  '</div>';
}
function renderMainGoalPanelHTML_(){
  var plan = getYearPlan_();
  var collapsed = state.mainGoalCollapsed !== false;
  var current = plan.periods[0] || {};
  var goalText = current.goal || getBranding_().message || '분기별 목표를 설정해 주세요.';
  var rangeLabel = formatPeriodRangeLabel_(current.start, current.end) || getBranding_().quarterLabel;
  var ymeta = getYearPlanMeta_();
  var html = renderYearWorkshopStripHTML_() +
    '<div class="planner-layer main-goal-layer ' + getPlanTierClass_('year') + (collapsed ? ' collapsed' : '') + '" data-plan-tier="1">' +
    '<div class="planner-layer-head planner-layer-head-toggle" onclick="toggleMainGoalPanel_()" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();toggleMainGoalPanel_();}" role="button" tabindex="0" aria-expanded="' + (!collapsed) + '">' +
      '<div class="planner-layer-kicker">분기별 목표 · ' + escapeHtml(rangeLabel) + '</div>' +
      '<div class="planner-layer-actions">' +
        '<button type="button" class="layer-btn subtle" onclick="event.stopPropagation();toggleMainGoalPanel_()" aria-expanded="' + (!collapsed) + '">' + (collapsed ? '펼치기' : '접기') + '</button>' +
      '</div>' +
    '</div>';
  if(collapsed){
    html += renderMainGoalCollapsedPreviewHTML_(plan, ymeta, current, rangeLabel);
  } else {
    html += '<div class="main-goal-north-star">' + escapeHtml(MASTER_BRAND_NORTH_STAR) + '</div>';
    if(ymeta.intent){
      html += '<div class="main-goal-intent"><span class="main-goal-intent-label">1년 브랜드 목표</span>' + escapeHtml(ymeta.intent) + '</div>';
    }
    if(ymeta.currentRationale){
      html += '<div class="main-goal-intent period"><span class="main-goal-intent-label">현재 분기 의도</span>' + escapeHtml(ymeta.currentRationale) + '</div>';
    }
    html += '<div class="year-period-timeline">';
    plan.periods.forEach(function(p, idx){
      var lbl = formatPeriodRangeLabel_(p.start, p.end);
      html += '<div class="year-period-row ' + getQuarterToneClass_(idx) + (idx === 0 ? ' current' : '') + '">' +
        '<span class="year-period-label">' + escapeHtml(lbl) + (idx === 0 ? ' · 지금' : '') + '</span>' +
        '<span class="year-period-goal">' + escapeHtml(p.goal || p.topic || '(목표 미설정)') + '</span>' +
      '</div>';
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
}
window.toggleMainGoalPanel_ = function(){
  state.mainGoalCollapsed = state.mainGoalCollapsed === false;
  renderMain();
};
function renderSubGoalStepBlockHTML_(catId, step, idx, activeId){
  var cat = CATEGORIES[catId];
  var sid = String(step.id);
  var collapsed = isSubGoalStepCollapsed_(catId, sid);
  var isActive = sid === String(activeId);
  var drafts = getDraftsForSubGoalStep_(catId, sid);
  var pub = drafts.filter(function(d){ return draftIsPublished_(d.id); }).length;
  var html = '<div class="subgoal-step-block ' + getPlanTierClass_('topic-plan') + (isActive ? ' active' : '') + (collapsed ? ' collapsed' : '') + '" data-plan-tier="3">' +
    renderTopicWorkshopStripHTML_(catId, step, idx) +
    '<div class="subgoal-step-block-head">' +
      '<div class="subgoal-step-head-static">' +
        '<span class="subgoal-step-num">' + (idx + 1) + '</span>' +
        '<span class="subgoal-step-main">' +
          '<span class="subgoal-step-title">' + escapeHtml(step.title) + '</span>' +
          (step.summary ? '<span class="subgoal-step-summary">' + escapeHtml(step.summary) + '</span>' : '') +
        '</span>' +
        '<span class="subgoal-step-stats">발행 ' + pub + '/' + drafts.length + '</span>' +
      '</div>' +
      '<div class="subgoal-step-actions">' +
        '<button type="button" class="layer-btn subtle"' + plannerStepActionAttrs_('toggleSubGoalStep_', subGoalStepKey_(catId, sid)) + ' aria-expanded="' + (!collapsed) + '">' + (collapsed ? '펼치기' : '접기') + '</button>' +
      '</div>' +
    '</div>';
  if(!collapsed && step.rationale){
    html += '<div class="main-goal-intent step"><span class="main-goal-intent-label">이 단계 의도</span>' + escapeHtml(step.rationale) + '</div>';
  }
  html += renderSubGoalStepCardsHTML_(catId, drafts, collapsed);
  html += '</div>';
  return html;
}
function getDailyThemeToneClass_(idx){
  return 'daily-theme-tone-' + (Math.max(0, parseInt(idx, 10) || 0) % 4);
}
function renderDailyTopicSuggestHTML_(monthKey){
  var sug = state.dailyTopicSuggestions;
  if(!sug || sug.monthKey !== monthKey) return '';
  var html = '<div class="daily-suggest-panel">';
  if(sug.loading){
    html += '<div class="daily-suggest-loading"><span class="subgoal-gen-spinner"></span> ' +
      escapeHtml(formatShareMonthLabel_(monthKey)) + ' 주제를 추천하고 있어요…</div>';
    html += '</div>';
    return html;
  }
  var selectedCount = (sug.items || []).filter(function(it){ return it && it.selected; }).length;
  html += '<div class="daily-suggest-head">' +
    '<span class="daily-suggest-title">' + escapeHtml(formatShareMonthLabel_(monthKey)) + ' 추천 · ' + selectedCount + '/' + (sug.items || []).length + ' 선택</span>' +
    '<div class="daily-suggest-actions">' +
      '<button type="button" class="ws-item-btn" onclick="suggestDailyShareTopicsForMonth_(\'' + escapeHtml(monthKey) + '\')">다시 추천</button>' +
      '<button type="button" class="ws-item-btn" onclick="clearDailyTopicSuggestions_()">닫기</button>' +
    '</div>' +
  '</div>';
  html += '<div class="daily-suggest-list">';
  (sug.items || []).forEach(function(it, idx){
    html += '<label class="daily-suggest-item' + (it.selected ? ' selected' : '') + '" onclick="toggleDailySuggestItem_(' + idx + ')">' +
      '<input type="checkbox"' + (it.selected ? ' checked' : '') + ' tabindex="-1" onclick="event.preventDefault()" />' +
      '<span class="daily-suggest-body">' +
        '<span class="daily-suggest-topic">' + escapeHtml(it.topic) + '</span>' +
        (it.angle ? '<span class="daily-suggest-angle">' + escapeHtml(it.angle) + '</span>' : '') +
        (it.themeLabel ? '<span class="daily-suggest-theme">' + escapeHtml(it.themeLabel) + '</span>' : '') +
      '</span>' +
    '</label>';
  });
  html += '</div>';
  html += '<div class="daily-suggest-footer">' +
    '<button type="button" class="modal-btn" onclick="addSelectedDailyShareTopics_()"' +
      (selectedCount ? '' : ' disabled') + '>선택 ' + selectedCount + '개 추가</button>' +
  '</div></div>';
  return html;
}
function renderDailySharePanelHTML_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  var plan = getDailySharePlan_();
  var collapsed = state.dailyShareCollapsed !== false;
  var drafts = getVisibleDraftsInMain_(catId);
  var pubCount = drafts.filter(function(d){ return draftIsPublished_(d.id); }).length;
  var curMonth = getCurrentShareMonthKey_();
  var monthGroups = groupDailyShareDraftsByMonth_(drafts);
  if(!monthGroups.some(function(g){ return g.monthKey === curMonth; })){
    monthGroups.unshift({ monthKey: curMonth, label: formatShareMonthLabel_(curMonth), drafts: [] });
  }
  var suggestBusy = !!(state.dailyTopicSuggestions && state.dailyTopicSuggestions.loading);
  var html = '<div class="planner-layer daily-layer' + (collapsed ? ' collapsed' : '') + '">' +
    '<div class="planner-layer-head">' +
      '<div class="planner-layer-kicker">' + escapeHtml(cat.name) + ' · ' + escapeHtml(cat.audience) + '</div>' +
      '<div class="planner-layer-actions">' +
        '<button type="button" class="layer-btn subtle" onclick="toggleDailySharePanel_()" aria-expanded="' + (!collapsed) + '">' + (collapsed ? '펼치기' : '접기') + '</button>' +
      '</div>' +
    '</div>';
  if(collapsed){
    var compact = plan.intent || plan.themes.map(function(t){ return t.label; }).join(' · ');
    html += '<div class="planner-layer-compact">' + escapeHtml(compact || '사진·오늘 느낌으로 가볍게 올려요') + '</div>';
  } else {
    html += '<p class="daily-share-intro">강의·홍보 없이 <strong>담백한 관찰 + 공감 한 스푼</strong>. 핵심 한 가지를 분명히, 과한 감성은 피해요.</p>';
    html += '<p class="daily-share-bridge">' + escapeHtml(DAILY_SHARE_MASTER_BRIDGE) + '</p>';
    html += '<div class="ws-intent-block daily-intent-block">' +
      '<label class="ws-intent-label">이번 달 일상 나눔 방향 (선택)</label>' +
      '<textarea class="ws-intent-input ws-grow-textarea daily-intent-input" rows="2" placeholder="예: 담백·관찰 위주. 핵심 한 가지 분명히, 장면·몸감각으로 살짝 공감. 감탄·짧은 철학 1문장까지" oninput="updateDailyShareIntent_(this.value);autoGrowTextarea_(this)">' + escapeHtml(plan.intent || '') + '</textarea>' +
    '</div>';
    html += '<div class="daily-theme-grid">';
    plan.themes.forEach(function(t, idx){
      html += '<div class="daily-theme-row ' + getDailyThemeToneClass_(idx) + '">' +
        '<span class="daily-theme-label">' + escapeHtml(t.label) + '</span>' +
        '<input type="text" class="daily-theme-input" value="' + escapeHtml(t.note || '') + '" placeholder="이 축에서 나눌 느낌·장면" onchange="updateDailyShareThemeNote_(\'' + escapeHtml(t.id) + '\',this.value)" />' +
      '</div>';
    });
    html += '</div>';
  }
  html += '<div class="daily-draft-section">' +
    '<div class="daily-draft-head">' +
      '<span class="daily-draft-title">일상 글 주제 · 달별</span>' +
      '<span class="daily-draft-stats">발행 ' + pubCount + '/' + drafts.length + '</span>' +
    '</div>' +
    '<div class="daily-month-toolbar">' +
      '<button type="button" class="modal-btn ws-btn-ai daily-suggest-btn' + (suggestBusy ? ' is-disabled' : '') + '" data-daily-suggest-btn="' + escapeHtml(curMonth) + '"' +
        (suggestBusy ? ' disabled' : '') +
        ' onclick="suggestDailyShareTopicsForMonth_(\'' + escapeHtml(curMonth) + '\')">' +
        escapeHtml(formatShareMonthLabel_(curMonth)) + ' 주제 추천</button>' +
      '<button type="button" class="modal-btn-ghost daily-add-manual-btn" onclick="openAddForm_()">직접 추가</button>' +
    '</div>';
  if(state.dailyTopicSuggestions && state.dailyTopicSuggestions.monthKey){
    html += renderDailyTopicSuggestHTML_(state.dailyTopicSuggestions.monthKey);
  }
  monthGroups.forEach(function(g){
    var monthCollapsed = isDailyMonthCollapsed_(g.monthKey);
    var mPub = g.drafts.filter(function(d){ return draftIsPublished_(d.id); }).length;
    var isCurrent = g.monthKey === curMonth;
    html += '<div class="daily-month-group' + (monthCollapsed ? ' collapsed' : '') + (isCurrent ? ' is-current' : '') + '" data-month="' + escapeHtml(g.monthKey) + '">' +
      '<div class="daily-month-head-row">' +
        '<button type="button" class="daily-month-head" onclick="toggleDailyMonthGroup_(\'' + escapeHtml(g.monthKey) + '\')" aria-expanded="' + (!monthCollapsed) + '">' +
          '<span class="daily-month-label">' + escapeHtml(g.label) + (isCurrent ? ' · 이번 달' : '') + '</span>' +
          '<span class="daily-month-stats">발행 ' + mPub + '/' + g.drafts.length + '</span>' +
          '<span class="daily-month-chevron">' + (monthCollapsed ? '▸' : '▾') + '</span>' +
        '</button>' +
        (g.monthKey !== DAILY_MONTH_LEGACY_KEY
          ? '<button type="button" class="ws-item-btn daily-month-suggest-mini' + (suggestBusy ? ' is-disabled' : '') + '" data-daily-suggest-btn="' + escapeHtml(g.monthKey) + '"' +
              (suggestBusy ? ' disabled' : '') +
              ' onclick="suggestDailyShareTopicsForMonth_(\'' + escapeHtml(g.monthKey) + '\')" title="이 달 주제 추천">추천</button>'
          : '') +
      '</div>';
    if(!monthCollapsed){
      html += '<div class="subgoal-step-cards daily-draft-cards">';
      if(g.drafts.length){
        g.drafts.forEach(function(d){
          html += draftCardHTML(d, cat, false, cat.drafts.indexOf(d), false);
        });
      } else {
        html += '<div class="subgoal-step-topics empty">아직 주제가 없어요. 위 <strong>주제 추천</strong>으로 채워 보세요.</div>';
      }
      html += '</div>';
    }
    html += '</div>';
  });
  html += '</div></div>';
  return html;
}
function renderProgramRoadmapHTML_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  try {
    var repairedPlan = repairIncompleteSubGoalPlan_(catId);
    var repairedAssign = repairSubGoalDraftAssignments_(catId);
    if(repairedPlan || repairedAssign){
      save({ driveImmediate: true, gasImmediate: true });
    }
  } catch(eRepMain){}
  var plan = getEffectiveSubGoalPlan_(catId);
  var pendingPreview = usePendingProgramPreview_(catId);
  var activeId = plan ? getActiveSubGoalStepId_(catId) : null;
  var strip = renderPlanWorkshopStripHTML_(catId);
  var isGenerating = state.subGoalPlanGenerating && sameCatId_(state.subGoalPlanGenerating.catId, catId);
  var html = strip + '<div class="planner-layer program-layer ' + getPlanTierClass_('program') + (isGenerating ? ' is-generating' : '') + (pendingPreview ? ' pending-preview' : '') + '" data-plan-tier="2">' +
    '<div class="planner-layer-head">' +
      '<div class="planner-layer-kicker">' + escapeHtml(cat.name) + ' · ' + escapeHtml(cat.audience) + '</div>' +
    '</div>';
  if(pendingPreview){
    html += '<div class="program-pending-banner">' +
      '<span class="program-pending-banner-label">적용 대기 중</span>' +
      '세부 목표 기획안 미리보기 — 워크숍에서 <strong>적용하기</strong>를 누르면 반영됩니다.' +
      '<button type="button" class="program-pending-banner-btn" onclick="openProgramPlanWorkshop_()">기획안 열기</button>' +
    '</div>';
  }
  if(plan && plan.steps.length && plan.intent){
    html += '<div class="main-goal-intent program" id="program-intent-block"><span class="main-goal-intent-label">프로그램 기획 의도</span>' + escapeHtml(plan.intent) + '</div>';
  }
  if(plan && plan.steps && plan.steps.length > 0 && plan.steps.length < 3){
    html += '<div class="program-pending-banner" style="border-color:#F59E0B;background:#FFFBEB;color:#92400E;">' +
      '<span class="program-pending-banner-label">단계 부족</span>' +
      '3개월 여정은 보통 <strong>3~5단계</strong>인데 지금은 <strong>' + plan.steps.length + '단계</strong>만 있어요. 세부 목표에서 「단계 재생성」 후 적용해 주세요.' +
      '<button type="button" class="program-pending-banner-btn" onclick="openProgramPlanWorkshop_()">기획안 열기</button>' +
    '</div>';
  }
  if(!plan || !plan.steps.length){
    var legacyCards = (cat.drafts || []).map(function(d){
      return draftCardHTML(d, cat, false, cat.drafts.indexOf(d), false);
    }).join('');
    var draftCount = (cat.drafts || []).filter(function(d){ return d && d.id; }).length;
    html += '<div class="program-setup-card' + (isGenerating ? ' is-generating' : '') + '">' +
      '<div class="program-setup-title">이 프로그램 기획</div>' +
      '<p class="program-setup-desc">분기별 목표를 달성하기 위한 <strong>3개월 단계별 하위 목표</strong> 3~5개를 정리해요. 주제 5개는 각 하위 목표에서 따로 기획합니다.</p>';
    if(isGenerating){
      var waitLeft = getCountdownSec_(state.subGoalPlanGenerating.startedAt, state.subGoalPlanGenerating.estimateSec);
      html += '<p class="program-setup-wait" id="program-setup-wait">기획 중 · ' + escapeHtml(formatCountdownShort_(waitLeft)) + ' · 상단 배너를 눌러 열 수 있어요</p>';
    } else {
      html += '<p class="program-setup-desc">상단 <strong>세부 목표 기획안 · 함께 검토</strong>에서 시작해 주세요.</p>';
    }
    if(draftCount){
      html += '<button type="button" class="program-legacy-toggle" onclick="toggleLegacyDrafts_()">' +
        (state.legacyDraftsOpen ? '기존 주제 숨기기' : '기존 주제 ' + draftCount + '개 보기') +
      '</button>';
      if(state.legacyDraftsOpen && legacyCards){
        html += '<div class="subgoal-step-cards legacy">' + legacyCards + '</div>';
      }
    }
    html += '</div>';
    html += '</div>';
    return html;
  }
  plan.steps.forEach(function(step, idx){
    html += renderSubGoalStepBlockHTML_(catId, step, idx, activeId);
  });
  var misc = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID);
  if(misc.length){
    var miscCollapsed = isSubGoalStepCollapsed_(catId, SUBGOAL_MISC_ID);
    html += '<div class="subgoal-step-block misc step-tone-misc' + (miscCollapsed ? ' collapsed' : '') + '">' +
      '<button type="button" class="subgoal-step-head"' + plannerStepActionAttrs_('toggleSubGoalStep_', subGoalStepKey_(catId, SUBGOAL_MISC_ID)) + '>' +
        '<span class="subgoal-step-num">·</span>' +
        '<span class="subgoal-step-main"><span class="subgoal-step-title">' + escapeHtml(getSubGoalMiscLabel_(plan)) + '</span></span>' +
        '<span class="subgoal-step-stats">' + misc.length + '건</span>' +
        '<span class="subgoal-step-chevron">' + (miscCollapsed ? '▸' : '▾') + '</span>' +
      '</button>';
    if(!miscCollapsed){
      html += '<div class="subgoal-step-cards">' + misc.map(function(d){
        return draftCardHTML(d, cat, false, cat.drafts.indexOf(d), true);
      }).join('') + '</div>';
    } else {
      html += renderSubGoalStepCardsHTML_(catId, misc, true);
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}
function buildDraftBrandBlockHTML_(draft, catId, editable){
  var meta = getDraftBrandMeta_(draft, catId);
  var brief = getDraftWritingBrief_(draft, catId);
  if(!editable){
    var parts = [];
    if(meta.series) parts.push('<span class="draft-brand-chip series">' + escapeHtml(meta.series + (meta.step ? ' · ' + meta.step : '')) + '</span>');
    if(!parts.length && !brief) return '';
    return '<div class="draft-brand-block">' + parts.join('') +
      (brief ? '<div class="draft-brand-brief-preview">' + escapeHtml(brief) + '</div>' : '') +
      '</div>';
  }
  return (
    '<div class="draft-brand-block editable">' +
      '<div class="draft-brand-edit-title">브랜드 로드맵</div>' +
      '<div class="draft-brand-edit-grid">' +
        '<label class="draft-brand-field"><span>시리즈</span><input type="text" id="draft-brand-series" value="' + escapeHtml(meta.series) + '" onchange="saveDraftBrandFields_()" /></label>' +
        '<label class="draft-brand-field"><span>단계</span><input type="text" id="draft-brand-step" value="' + escapeHtml(meta.step) + '" placeholder="2/5" onchange="saveDraftBrandFields_()" /></label>' +
        '<label class="draft-brand-field full"><span>글 작성 핵심</span>' +
          '<textarea id="draft-brand-writing-brief" class="draft-brand-writing-brief ws-grow-textarea" rows="1" placeholder="분기·단계 맥락, 글의 필요성, 풀어가는 순서 등 초안 작성에 필요한 핵심을 적어 주세요." onchange="saveDraftBrandFields_()" oninput="autoGrowTextarea_(this)">' + escapeHtml(brief) + '</textarea>' +
        '</label>' +
      '</div>' +
    '</div>'
  );
}
function flushDraftBrandFieldsFromDom_(){
  var draftId = state.selectedId;
  if(!draftId) return;
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var cat = CATEGORIES[catId];
  if(!cat) return;
  var draft = cat.drafts.find(function(d){ return d.id === draftId; });
  if(!draft) return;
  var s = document.getElementById('draft-brand-series');
  var st = document.getElementById('draft-brand-step');
  var wb = document.getElementById('draft-brand-writing-brief');
  if(s) draft.series = s.value.trim();
  if(st) draft.step = st.value.trim();
  if(wb){
    draft.writingBrief = wb.value.trim();
    syncDraftFieldsFromWritingBrief_(draft);
  }
  if(!isUserAddedDraftId_(draftId)){
    stampDraftBrandOverride_(draftId, {
      series: draft.series || '',
      step: draft.step || '',
      pillar: draft.pillar || '',
      rationale: draft.rationale || '',
      writingBrief: draft.writingBrief || '',
      topic: draft.topic || '',
      angle: draft.angle || ''
    });
  }
}
window.saveDraftBrandFields_ = function(opts){
  flushDraftBrandFieldsFromDom_();
  save({ driveImmediate: true });
  if(!opts || !opts.skipRender) renderMain();
};

function renderTopicWorkshopCardHTML_(catId, stepId, slotIndex, draft){
  var i = slotIndex;
  if(draft){
    var pinned = state.pinnedDraftIds && state.pinnedDraftIds[draft.id];
    return '<div class="ws-quarter-card ws-topic-card ' + getPlanTierClass_('topic') + '" data-plan-tier="4">' +
      '<div class="ws-quarter-top">' +
        '<div class="ws-quarter-meta">' +
          '<div class="ws-quarter-meta-row">' +
            '<span class="ws-quarter-badge">주제 ' + (i + 1) + '</span>' +
          '</div>' +
          '<label class="ws-quarter-field-label ws-quarter-topic-label">주제</label>' +
          '<textarea class="ws-quarter-topic ws-grow-textarea" rows="1" placeholder="호기심을 자극하는 한 줄 주제" oninput="updateTopicDraftField_(\'' + draft.id + '\',\'topic\',this.value);autoGrowTextarea_(this)" onchange="updateTopicDraftField_(\'' + draft.id + '\',\'topic\',this.value)">' + escapeHtml(draft.topic || '') + '</textarea>' +
        '</div>' +
        '<div class="ws-quarter-tools">' +
          '<button type="button" class="ws-item-btn pin' + (pinned ? ' active' : '') + '" onclick="togglePinDraft_(\'' + draft.id + '\')">' + (pinned ? '고정됨' : '고정') + '</button>' +
          '<button type="button" class="ws-item-btn danger" onclick="deleteDraft(' + catId + ',\'' + draft.id + '\'); refreshTopicWorkshop_();">삭제</button>' +
        '</div>' +
      '</div>' +
      '<textarea class="ws-item-summary ws-grow-textarea ws-topic-angle" rows="2" placeholder="신뢰·오해해소·실천팁·메커니즘 등" oninput="updateTopicDraftField_(\'' + draft.id + '\',\'angle\',this.value);autoGrowTextarea_(this)">' + escapeHtml(draft.angle || '') + '</textarea>' +
      '<label class="ws-quarter-rationale-label">이 주제 의도 · 수정 후 재생성에 반영</label>' +
      '<textarea class="ws-grow-textarea ws-quarter-rationale" rows="2" placeholder="이 주제를 왜 이 순서에 두는지, 독자가 얻을 것" oninput="updateTopicDraftField_(\'' + draft.id + '\',\'rationale\',this.value);autoGrowTextarea_(this)">' + escapeHtml(stripTopicRationaleStepPrefix_(draft.rationale || '')) + '</textarea>' +
    '</div>';
  }
  return '<div class="ws-quarter-card ws-topic-card empty ' + getPlanTierClass_('topic') + '" data-plan-tier="4">' +
    '<div class="ws-quarter-top">' +
      '<span class="ws-quarter-badge">주제 ' + (i + 1) + '</span>' +
      '<button type="button" class="modal-btn ws-btn-ai topic-slot-ai-btn" data-ai-slot="' + escapeHtml(String(stepId) + '-' + i) + '"' + plannerFnClickAttr_('addTopicSlotSuggestion_', stepId, i) + '>AI 추천</button>' +
    '</div>' +
    '<p class="ws-topic-empty-hint">비어 있는 슬롯이에요. AI 추천으로 주제를 채워 보세요.</p>' +
  '</div>';
}
function renderTopicWorkshopBodyHTML_(catId, stepId){
  normalizeStepTopicRationales_(catId, stepId);
  if(normalizeStepDraftSlots_(catId, stepId)) save({ skipDriveUpload: true, skipGasPush: true });
  reconcileSubGoalDraftSteps_(catId);
  var cat = CATEGORIES[catId];
  var plan = getEffectiveSubGoalPlan_(catId);
  var step = (plan && plan.steps) ? plan.steps.find(function(s){ return String(s.id) === String(stepId); }) : null;
  var slotDrafts = buildStepSlotDraftMap_(catId, stepId);
  var stepIdx = plan && plan.steps ? plan.steps.findIndex(function(s){ return String(s.id) === String(stepId); }) : 0;
  if(stepIdx < 0) stepIdx = 0;
  var html = '';
  if(plan && plan.steps.length > 1){
    html += '<div class="topic-workshop-step-strips">';
    plan.steps.forEach(function(s, idx){
      html += renderTopicWorkshopStripHTML_(catId, s, idx, { compact: true, active: String(s.id) === String(stepId) });
    });
    html += '</div>';
  }
  html += '<p class="ws-intro">이 <strong>하위 목표</strong>에 맞는 콘텐츠 주제 <strong>5개</strong>를 순서대로 잡아요. 수정은 바로 반영됩니다.</p>' +
    '<p class="ws-intro-ref">PSP·PAR·프로그램 구조: <a href="' + PROFILE_BRAND_URL + '" target="_blank" rel="noopener">미카닥 박준규 프로필 PSP 가이드</a></p>' +
    renderIntentRefBlockHTML_('분기별·프로그램·단계 의도 (주제 기획 시 참고)', buildMainGoalContextBlock_() + '\n\n' + buildProgramPlanContextBlock_(catId, stepId), { open: false });
  if(step){
    html += '<div class="ws-intent-block ws-step-context-block ' + getPlanTierClass_('topic-plan') + '">' +
      '<label class="ws-intent-label">' + escapeHtml((stepIdx + 1) + '단계 · ' + (step.title || '하위 목표')) + '</label>';
    if(step.summary){
      html += '<p class="ws-step-context-summary">' + escapeHtml(step.summary) + '</p>';
    }
    if(step.rationale){
      html += '<div class="main-goal-intent step ws-step-context-rationale"><span class="main-goal-intent-label">이 단계 의도</span>' + escapeHtml(step.rationale) + '</div>';
    }
    html += '</div>';
  }
  html += '<div class="ws-items ws-items-full">';
  for(var i = 0; i < 5; i++){
    html += renderTopicWorkshopCardHTML_(catId, stepId, i, slotDrafts[i]);
  }
  html += '</div>';
  return html;
}
function renderTopicRegenBtnHTML_(catId, stepId){
  var slotDrafts = buildStepSlotDraftMap_(catId, stepId);
  var unpinned = 0;
  for(var i = 0; i < 5; i++){
    var d = slotDrafts[i];
    if(!d || !(state.pinnedDraftIds && state.pinnedDraftIds[d.id])) unpinned++;
  }
  var hasAny = slotDrafts.some(function(d){ return !!d; });
  var allPinned = unpinned === 0 && hasAny;
  return '<button type="button" class="modal-btn ws-btn-ai' + (allPinned ? ' is-disabled' : '') + '" id="btn-topic-regen"' +
    (allPinned ? ' disabled title="재생성할 주제의 고정을 해제해 주세요"' : '') +
    plannerFnClickAttr_('regenerateTopicWorkshop_', stepId) + '>재생성</button>';
}
function renderTopicWorkshopFooterHTML_(catId, stepId){
  return '<div class="ws-actions ws-actions-topic">' +
    renderTopicRegenBtnHTML_(catId, stepId) +
    '<button type="button" class="modal-btn-ghost" onclick="requestClosePlanWorkshop_()">닫기</button>' +
  '</div>';
}
/** AI 주제 JSON 파싱 — 앞뒤 설명·코드펜스·잘린 배열·트레일링 콤마 등 흔한 깨짐을 복구 시도 */
function parsePlannerAiJsonObject_(text){
  var raw = String(text || '').replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/g, '').trim();
  // 모델이 한국어 설명 뒤에 JSON을 붙이는 경우 — 첫 { … 마지막 } 만 사용
  var start = raw.indexOf('{');
  if(start < 0){
    // 배열만 온 경우
    var a0 = raw.indexOf('[');
    if(a0 >= 0){
      var a1 = raw.lastIndexOf(']');
      var arrSlice = a1 > a0 ? raw.slice(a0, a1 + 1) : raw.slice(a0);
      try { return { _array: JSON.parse(arrSlice) }; } catch(eArr){}
    }
    throw new Error('JSON을 찾지 못했어요 (설명이 먼저 나온 응답일 수 있어요)');
  }
  var end = raw.lastIndexOf('}');
  var slice = end > start ? raw.slice(start, end + 1) : raw.slice(start);
  try {
    return JSON.parse(slice);
  } catch(e1){
    var repaired = slice
      .replace(/[\u201c\u201d]/g, '"')
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/,\s*([}\]])/g, '$1');
    repaired = repaired.replace(/,\s*\{[^]*$/,'');
    repaired = repaired.replace(/,\s*"[^"]*$/,'');
    repaired = repaired.replace(/,\s*$/,'');
    var openBrackets = (repaired.match(/\[/g) || []).length - (repaired.match(/\]/g) || []).length;
    var openBraces = (repaired.match(/\{/g) || []).length - (repaired.match(/\}/g) || []).length;
    while(openBrackets-- > 0) repaired += ']';
    while(openBraces-- > 0) repaired += '}';
    try {
      return JSON.parse(repaired);
    } catch(e2){
      var hint = (e1 && e1.message) ? String(e1.message) : 'JSON 파싱 실패';
      // 앞부분이 한글 설명이면 메시지 정리
      if(/^[\uac00-\ud7a3]/.test(raw) || hint.indexOf('Unrecognized token') >= 0){
        throw new Error('AI가 JSON 대신 설명을 먼저 보냈어요. 다시 시도해 주세요.');
      }
      throw new Error(hint);
    }
  }
}
async function callClaudePlannerForDraftJson_(prompt, options){
  options = options || {};
  var text = await callClaudePlanner_(prompt, options);
  try {
    return parsePlannerAiJsonObject_(text);
  } catch(e1){
    // 1회만: JSON만 다시 달라고 요청
    var retryPrompt =
      '아래 응답을 **유효한 JSON 객체 하나**로만 다시 출력하세요.\n' +
      '- 설명·서문·마크다운 코드펜스 금지. 첫 글자는 { 이어야 합니다.\n' +
      '- 원본에 있던 blog/images/thread/community 필드를 최대한 유지하세요.\n\n' +
      '--- 원본 응답 ---\n' + String(text || '').slice(0, 12000);
    var text2 = await callClaudePlanner_(retryPrompt, {
      maxTokens: Math.min(options.maxTokens || 4000, 4000),
      image: null
    });
    return parsePlannerAiJsonObject_(text2);
  }
}
window.updateTopicDraftField_ = function(draftId, field, value){
  var catId = state.currentCat;
  var cat = CATEGORIES[catId];
  if(!cat || !draftId) return;
  var d = (cat.drafts || []).find(function(x){ return x && x.id === draftId; });
  if(!d) return;
  d[field] = field === 'rationale' ? stripTopicRationaleStepPrefix_(String(value || '').trim()) : String(value || '').trim();
  d.updatedAt = new Date().toISOString();
  if(!isUserAddedDraftId_(draftId)){
    var patch = { topic: d.topic || '', angle: d.angle || '', rationale: d.rationale || '' };
    stampDraftBrandOverride_(draftId, patch);
  }
  save({ driveImmediate: true, gasImmediate: true });
};
window.refreshTopicWorkshop_ = function(){
  if(state.planWorkshopMode === 'topic'){
    refreshPlanWorkshopModal_();
  }
};
window.openTopicSlotsModal_ = function(stepId){
  openPlanWorkshop_('topic', stepId);
};
window.togglePinDraft_ = function(draftId){
  if(!state.pinnedDraftIds) state.pinnedDraftIds = {};
  if(state.pinnedDraftIds[draftId]) delete state.pinnedDraftIds[draftId];
  else state.pinnedDraftIds[draftId] = true;
  save({ driveImmediate: true });
  refreshTopicWorkshop_();
};
window.regenerateTopicWorkshop_ = async function(stepId){
  stepId = stepId != null ? String(stepId) : String(state.topicEditStepId);
  if(!stepId) return;
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  var slotDrafts = buildStepSlotDraftMap_(catId, stepId);
  var unpinnedSlots = [];
  for(var i = 0; i < 5; i++){
    var d = slotDrafts[i];
    if(!d || !(state.pinnedDraftIds && state.pinnedDraftIds[d.id])) unpinnedSlots.push(i);
  }
  if(!unpinnedSlots.length){
    if(typeof setAppToast === 'function') setAppToast('재생성할 주제의 고정을 해제해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  var pinnedCount = 5 - unpinnedSlots.length;
  var confirmMsg = pinnedCount === 0
    ? '고정되지 않은 주제 ' + unpinnedSlots.length + '개를 재생성할까요?'
    : '고정되지 않은 주제 ' + unpinnedSlots.length + '개를 재생성할까요?\n(고정한 ' + pinnedCount + '개는 유지됩니다)';
  if(!confirm(confirmMsg)) return;
  plannerAiBusy = true;
  startPlannerAiWait_({
    estimateSec: TOPIC_FIVE_ESTIMATE_SEC,
    busyLabel: '재생성 중',
    btnSelector: '#btn-topic-regen',
    btnIdleText: '재생성'
  });
  try {
    var pinnedBlock = slotDrafts.map(function(d, i){
      if(!d || !(state.pinnedDraftIds && state.pinnedDraftIds[d.id])) return null;
      return '슬롯 ' + (i + 1) + '(고정): 「' + d.topic + '」' + (d.angle ? ' / ' + d.angle : '') + (d.rationale ? ' — ' + d.rationale : '');
    }).filter(Boolean).join('\n');
    var unpinnedBlock = unpinnedSlots.map(function(i){
      var d = slotDrafts[i];
      var lines = ['슬롯 ' + (i + 1)];
      if(d){
        if(d.topic) lines.push('현재 주제: ' + d.topic);
        if(d.angle) lines.push('현재 각도: ' + d.angle);
        if(d.rationale) lines.push('사용자 수정 의도(반드시 반영): ' + d.rationale);
      } else lines.push('(비어 있음)');
      return lines.join('\n');
    }).join('\n\n');
    var prompt =
buildTopicPlanPromptPrefix_(catId, stepId) + '\n\n' +
(pinnedBlock ? '[고정 주제 — 절대 변경하지 마세요]\n' + pinnedBlock + '\n\n' : '') +
'[재생성 대상 슬롯]\n' + unpinnedBlock + '\n\n' +
'재생성 대상 슬롯만 정확히 ' + unpinnedSlots.length + '개 제안. topics 배열 순서는 슬롯 번호 오름차순.\n' +
'각 topic·angle·rationale은 단계·프로그램·분기별 목표 의도와 연결. rationale에 "N단계 —" 표기 금지.\n' +
'반드시 완결된 JSON만 출력. topics 배열을 중간에 끊지 마세요.\n' +
'JSON: {"topics":[{"topic":"…","angle":"…","rationale":"…"},…]}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 2800 });
    var obj = parsePlannerAiJsonObject_(text);
    var topics = Array.isArray(obj.topics) ? obj.topics : [];
    if(!topics.length) throw new Error('주제 배열이 비어 있어요. 다시 시도해 주세요.');
    var merged = mergeAiTopicsToStepSlots_(catId, stepId, topics);
    var applied = applyTopicsArrayToStep_(catId, stepId, merged);
    save({ driveImmediate: true });
    refreshTopicWorkshop_();
    renderMain();
    if(typeof setAppToast === 'function') setAppToast(applied ? '주제 ' + applied + '개를 다시 제안했어요.' : '반영할 주제가 없어요.', { duration: 4000, variant: applied ? 'ok' : 'err' });
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('주제 재생성 실패\n' + ((e && e.message) || e), { duration: 5000, variant: 'err' });
  } finally {
    stopPlannerAiWait_();
    plannerAiBusy = false;
  }
};
window.suggestFiveTopicsForStep_ = async function(stepId, opts){
  opts = opts || {};
  if(!state.apiKey){ if(!opts.silent) openApiModal(); return 0; }
  if(!opts.silent && plannerAiBusy) return 0;
  if(!opts.silent) plannerAiBusy = true;
  if(!opts.silent && opts.btnSelector) startPlannerAiWait_({
    estimateSec: TOPIC_FIVE_ESTIMATE_SEC,
    busyLabel: '생성 중',
    btnSelector: opts.btnSelector,
    btnIdleText: opts.btnIdleText || 'AI로 주제 5개 제안'
  });
  var catId = state.currentCat;
  var cat = CATEGORIES[catId];
  var plan = getSubGoalPlan_(catId);
  var step = plan && plan.steps ? plan.steps.find(function(s){ return String(s.id) === String(stepId); }) : null;
  if(!opts.silent && typeof setAppToast === 'function') setAppToast('주제 5개를 추천하고 있어요…', { duration: 3000, variant: 'ok' });
  try {
    var existing = getDraftsForSubGoalStep_(catId, stepId).map(function(d){ return d.topic; }).join(', ');
    var prompt =
buildTopicPlanPromptPrefix_(catId, stepId) + '\n' +
'기존 주제: ' + existing + '\n\n' +
'새 주제 5개. 각 topic·angle·rationale은 단계·프로그램·분기별 목표 의도와 연결. rationale에 "N단계 —" 표기 금지.\n' +
'JSON: {"topics":[{"topic":"…","angle":"…","rationale":"…"},…5개]}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 2800 });
    var obj = parsePlannerAiJsonObject_(text);
    var merged = mergeAiTopicsToStepSlots_(catId, stepId, obj.topics || []);
    var applied = applyTopicsArrayToStep_(catId, stepId, merged);
    save({ driveImmediate: true });
    refreshTopicWorkshop_();
    renderMain();
    if(!opts.silent && typeof setAppToast === 'function') setAppToast('주제 5개를 반영했어요. 고정한 주제는 유지됩니다.', { duration: 4000, variant: 'ok' });
    return applied;
  } catch(e){
    if(!opts.silent && typeof setAppToast === 'function') setAppToast('주제 추천 실패\n' + ((e && e.message) || e), { duration: 5000, variant: 'err' });
    return 0;
  } finally {
    if(!opts.silent && opts.btnSelector) stopPlannerAiWait_();
    if(!opts.silent) plannerAiBusy = false;
  }
};
window.addTopicSlotSuggestion_ = async function(stepId, slotIndex){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  plannerAiBusy = true;
  startPlannerAiWait_({
    estimateSec: TOPIC_ONE_ESTIMATE_SEC,
    busyLabel: '생성 중',
    btnSelector: '.topic-slot-ai-btn[data-ai-slot="' + String(stepId) + '-' + slotIndex + '"]',
    btnIdleText: 'AI 추천'
  });
  var catId = state.currentCat;
  var plan = getSubGoalPlan_(catId);
  var slotNum = parseInt(slotIndex, 10) + 1;
  try {
    var prompt = buildTopicPlanPromptPrefix_(catId, stepId) + '\n\n주제 1개(슬롯 ' + slotNum + '). 단계·프로그램·분기별 목표 의도에 맞게. rationale에 "N단계 —" 표기 금지.\nJSON: {"topic":"…","angle":"…","rationale":"…"}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 800 });
    var obj = parsePlannerAiJsonObject_(text);
    if(!applyTopicToStepSlot_(catId, stepId, slotNum, obj)){
      throw new Error('이 슬롯에 주제를 반영할 수 없어요.');
    }
    save({ driveImmediate: true });
    refreshTopicWorkshop_();
    renderMain();
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('주제 추천 실패', { duration: 4000, variant: 'err' });
  } finally {
    stopPlannerAiWait_();
    plannerAiBusy = false;
  }
};
window.genAllMissingForSubGoalStep_ = async function(stepId){
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  var slotMap = buildStepSlotDraftMap_(catId, stepId);
  var drafts = [];
  for(var i = 0; i < 5; i++){
    var d = slotMap[i];
    if(d && !draftHasContent(d)) drafts.push(d);
  }
  if(!drafts.length){
    if(typeof setAppToast === 'function') setAppToast('미작성 주제가 없어요.', { duration: 2800, variant: 'ok' });
    return;
  }
  if(!state.apiKey){ openApiModal(); return; }
  plannerAiBusy = true;
  try {
    for(var i = 0; i < drafts.length; i++){
      await window.enqueueDraftGeneration(catId, drafts[i].id, { batch: true });
    }
    refreshTopicWorkshop_();
    renderMain();
  } finally {
    plannerAiBusy = false;
  }
};

const BUILTIN_DRAFT_RATIONALE = {
  0: [
    'PSP 입문 1 — 통증은 근육만이 아님, 구조·연부조직부터',
    '신뢰 2 — 관절 소리=효과 오해를 바로잡기',
    '불안 해소 3 — 치료 후 악화감 vs 호전 반응',
    '치료 범위 4 — 연부조직, 어디까지·몇 번',
    '치료 순서 5 — 연쇄 보상, 어디부터 볼지'
  ],
  1: [
    'PAR 1 — P-ROM·스트레칭이 안 통하는 이유',
    '준비 2 — 워밍업·가동성·신경계 활성',
    '패러다임 3 — 정적 좋은 자세의 한계',
    '실천 4 — 사무직·재택 3분 루틴',
    '일상 5 — 보행·자세를 생활로 연결'
  ],
  2: [
    '구조 1 — 비대칭, 습관·교합·경추',
    '윤곽 2 — 다이어트만으로 안 되는 이유',
    '골격 3 — 광대·턱·저작근 관계',
    '기대치 4 — 몇 번에 티 나는지',
    '요인 5 — 피부·지방·골격 나누기'
  ],
  3: [
    '평가 1 — 촉진이 치료보다 먼저',
    '전환 2 — 해부학→임상 적용',
    '철학 3 — 잘 치료 vs 제대로 치료',
    '판단 4 — HVLA·LVLA 타이밍',
    '지표 5 — 주관적 호전 vs 객관 확인'
  ],
  4: [
    '원리 1 — IFC vs 표면 마사지',
    '연결 2 — 경추·두개골 평가',
    '상담 3 — 원하는 것 vs 필요한 것',
    '프로토콜 4 — INDIBA·IFC 순서',
    '평가 5 — 놓치기 쉬운 비대칭 포인트'
  ],
  5: [
    'PAR 1 — P-ROM 언제·어떻게',
    '연결 2 — 도수 후 기능운동',
    '패러다임 3 — 좋은 자세 없음',
    '처方 4 — 가동성 vs 안정성',
    '순응 5 — 환자 동기·커뮤니케이션'
  ],
  6: [
    '장마·컨디션 — 몸 무거움 공감',
    '봄 산책 — 걷기 후 종아리',
    '꽃가루 — 피곤·밖은 좋을 때',
    '여행 — 다음 날 뻐근함',
    '초여름 — 에어컨 전 목·어깨',
    '이슈 — 뉴스·긴장 공감',
    '여유 — 커피·쉼 일상'
  ],
  7: [
    '입문 1 — 목 뻐근함, 거북목 단정 전',
    'P-스트레칭 2 — 고양이 기지개 비유',
    '자세 3 — 하루아침 기대 vs 감각',
    '붓기 4 — 물만으로는 부족한 이유',
    '실천 5 — 엘리베이터 30초 골반',
    '계절 6 — 봄 산책·종아리',
    '냉방 7 — 에어컨 전 목·어깨',
    '봄 8 — 꽃가루·피로·가벼운 움직임'
  ]
};

function applyBuiltinDraftBrandSeeds_(){
  var overrides = state.draftBrandOverrides || {};
  CATEGORIES.forEach(function(cat){
    var catId = cat.id;
    var series = getDefaultSeriesForCat_(catId);
    var pillar = getDefaultPillarForCat_(catId);
    var total = (cat.drafts || []).length;
    var rationales = BUILTIN_DRAFT_RATIONALE[catId] || [];
    (cat.drafts || []).forEach(function(d, i){
      if(!d || !d.id || isUserAddedDraftId_(d.id)) return;
      var ov = overrides[d.id] || {};
      if(ov.series != null && String(ov.series).trim()) d.series = String(ov.series).trim();
      else if(!d.series) d.series = series;
      if(ov.step != null && String(ov.step).trim()) d.step = String(ov.step).trim();
      else if(!d.step) d.step = (i + 1) + '/' + total;
      if(ov.pillar != null && String(ov.pillar).trim()) d.pillar = String(ov.pillar).trim();
      else if(!d.pillar) d.pillar = pillar;
      if(Object.prototype.hasOwnProperty.call(ov, 'rationale')) d.rationale = String(ov.rationale || '').trim();
      else if(!d.rationale && rationales[i]) d.rationale = rationales[i];
      if(ov.roadmapStepId != null && String(ov.roadmapStepId).trim()) d.roadmapStepId = String(ov.roadmapStepId).trim();
      if(Object.prototype.hasOwnProperty.call(ov, 'topic') && String(ov.topic || '').trim()) d.topic = String(ov.topic).trim();
      if(Object.prototype.hasOwnProperty.call(ov, 'angle') && String(ov.angle || '').trim()) d.angle = String(ov.angle).trim();
    });
  });
}
function getDraftStepParts_(draft, catId, draftIndex){
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var m = String(meta.step || '').match(/^(\d+)\s*\/\s*(\d+)/);
  return {
    step: m ? (parseInt(m[1], 10) || 9999) : parseStepSortKey_(meta.step),
    total: m ? (parseInt(m[2], 10) || 0) : 0,
    series: meta.series || getDefaultSeriesForCat_(catId)
  };
}
function pickNextSeriesDraftForCat_(catId){
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return null;
  var grouped = groupDraftsBySubGoalSteps_(cat.drafts, catId);
  var activeStepId = grouped.isSubGoal ? getActiveSubGoalStepId_(catId) : null;
  var candidates = [];
  grouped.order.forEach(function(seriesName){
    if(grouped.isSubGoal && String(seriesName) === SUBGOAL_MISC_ID) return;
    var items = grouped.groups[seriesName];
    var lastPubStep = 0;
    items.forEach(function(item){
      if(!draftIsPublished_(item.draft.id)) return;
      var p = getDraftStepParts_(item.draft, catId, item.draftIndex);
      if(p.step > lastPubStep) lastPubStep = p.step;
    });
    var ideal = null;
    var fallback = null;
    var fallbackStep = 9999;
    items.forEach(function(item){
      if(draftIsPublished_(item.draft.id)) return;
      var p = getDraftStepParts_(item.draft, catId, item.draftIndex);
      if(p.step === lastPubStep + 1){
        ideal = item.draft;
      }
      if(p.step < fallbackStep){
        fallbackStep = p.step;
        fallback = item.draft;
      }
    });
    var pick = ideal || fallback;
    if(!pick) return;
    var pickIdx = cat.drafts.indexOf(pick);
    var pickParts = getDraftStepParts_(pick, catId, pickIdx);
    candidates.push({
      draft: pick,
      sequential: !!ideal,
      step: pickParts.step,
      series: seriesName,
      isActiveStep: activeStepId && String(seriesName) === String(activeStepId)
    });
  });
  if(!candidates.length) return null;
  candidates.sort(function(a, b){
    if(a.isActiveStep !== b.isActiveStep) return a.isActiveStep ? -1 : 1;
    if(a.sequential !== b.sequential) return a.sequential ? -1 : 1;
    return a.step - b.step;
  });
  return candidates[0].draft;
}
function scorePublishRecCandidate_(entry){
  var draft = entry.draft;
  var catId = entry.cat.id;
  var idx = entry.cat.drafts.indexOf(draft);
  var parts = getDraftStepParts_(draft, catId, idx);
  var grouped = groupDraftsBySubGoalSteps_(entry.cat.drafts, catId);
  var groupKey = grouped.isSubGoal ? getDraftRoadmapStepId_(draft, catId, idx) : parts.series;
  var items = grouped.groups[groupKey] || [];
  var lastPubStep = 0;
  items.forEach(function(item){
    if(!draftIsPublished_(item.draft.id)) return;
    var p = getDraftStepParts_(item.draft, catId, item.draftIndex);
    if(p.step > lastPubStep) lastPubStep = p.step;
  });
  return {
    draft: draft,
    cat: entry.cat,
    catPriority: entry.catPriority,
    hasContent: draftHasContent(draft) ? 1 : 0,
    sequential: parts.step === lastPubStep + 1 ? 1 : 0,
    step: parts.step,
    series: parts.series
  };
}

const SK = 'ht_v2';
/** 카테고리당 유지할 주제 카드 수 (발행·AI 초안 유무와 무관) */
const MIN_TOPICS_PER_CAT = 5;
const PROMPT_REFINE_EVERY_PUBLISH = 3;
const PROMPT_REFINE_SAMPLE_COUNT = 3;
/** 약수·피드백과 동일 웹앱 — code-full.gs 배포 URL */
const PLANNER_GAS_URL = 'https://script.google.com/macros/s/AKfycbwVJSc6rY5tcBSB1VaRi4DBEXGyUBr1ADFfs6QEA9Z9bu0G-0mdMAv374-MdPVYMnSaeQ/exec';
const PLANNER_TEAM_MODE = true;
const PLANNER_SYNC_TOKEN_KEY = 'ht_planner_sync_token';
const PLANNER_EMPLOYEE_ID_KEY = 'ht_planner_employee_id';
const PLANNER_DEVICE_ID_KEY = 'ht_planner_device_id';

function getPlannerSyncToken_(){
  try {
    return (localStorage.getItem(PLANNER_SYNC_TOKEN_KEY) || '').trim();
  } catch(e){ return ''; }
}

function setPlannerSyncToken_(token){
  try {
    var t = String(token || '').trim();
    if(t) localStorage.setItem(PLANNER_SYNC_TOKEN_KEY, t);
    else localStorage.removeItem(PLANNER_SYNC_TOKEN_KEY);
  } catch(e){}
}

function getPlannerEmployeeId_(){
  try { return (localStorage.getItem(PLANNER_EMPLOYEE_ID_KEY) || '').trim(); } catch(e){ return ''; }
}
function setPlannerEmployeeId_(value){
  try {
    var id = String(value || '').trim().slice(0, 80);
    if(id) localStorage.setItem(PLANNER_EMPLOYEE_ID_KEY, id);
    else localStorage.removeItem(PLANNER_EMPLOYEE_ID_KEY);
  } catch(e){}
}
function isPlannerEmployeeEmailValid_(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}
function consumePlannerTeamInvite_(){
  try {
    var url = new URL(location.href);
    var token = url.searchParams.get('teamToken') || '';
    var hashMatch = String(url.hash || '').match(/^#team=([^&]+)/);
    if(!token && hashMatch) token = decodeURIComponent(hashMatch[1]);
    if(!token) return false;
    setPlannerSyncToken_(token);
    url.searchParams.delete('teamToken');
    if(hashMatch) url.hash = '';
    history.replaceState(null, '', url.pathname + (url.search ? url.search : '') + (url.hash || ''));
    return true;
  } catch(e){ return false; }
}
window.copyPlannerTeamInviteLink_ = async function(){
  var input = document.getElementById('planner-sync-token');
  var token = String((input && input.value) || getPlannerSyncToken_() || '').trim();
  if(!token){
    if(typeof setAppToast === 'function') setAppToast('먼저 공용 동기화 토큰을 입력해 주세요.', { duration: 3600, variant: 'err' });
    return;
  }
  setPlannerSyncToken_(token);
  var url = new URL(location.href);
  url.searchParams.delete('teamToken');
  url.hash = 'team=' + encodeURIComponent(token);
  try {
    await navigator.clipboard.writeText(url.toString());
    if(typeof setAppToast === 'function') setAppToast('직원용 초대 링크를 복사했어요.', { duration: 3600, variant: 'ok' });
  } catch(e){
    window.prompt('아래 직원용 초대 링크를 복사하세요.', url.toString());
  }
};
function getPlannerDeviceId_(){
  try {
    var id = localStorage.getItem(PLANNER_DEVICE_ID_KEY) || '';
    if(id) return id;
    id = 'device-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(PLANNER_DEVICE_ID_KEY, id);
    return id;
  } catch(e){
    return 'device-session-' + Math.random().toString(36).slice(2, 10);
  }
}

function plannerGasRequestBody_(obj){
  obj = Object.assign({}, obj || {});
  var token = getPlannerSyncToken_();
  if(token) obj.plannerToken = token;
  obj.employeeId = getPlannerEmployeeId_();
  obj.deviceId = getPlannerDeviceId_();
  return JSON.stringify(obj);
}
async function plannerGasJsonRequest_(requestPayload, timeoutMs){
  var url = getPlannerGasUrl_();
  if(!url || location.protocol === 'file:') throw new Error('서버 URL을 사용할 수 없습니다.');
  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timeout = controller ? setTimeout(function(){ controller.abort(); }, timeoutMs || 20000) : null;
  try {
    var response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: plannerGasRequestBody_(requestPayload),
      signal: controller ? controller.signal : undefined
    });
    if(!response.ok) throw new Error('서버 연결 실패 (HTTP ' + response.status + ')');
    try {
      return await response.json();
    } catch(parseErr){
      throw new Error('서버 응답 형식 오류');
    }
  } catch(err){
    if(err && err.name === 'AbortError') throw new Error('서버 응답 시간이 초과되었습니다.');
    throw err;
  } finally {
    if(timeout) clearTimeout(timeout);
  }
}

function isPlannerAuthError_(data){
  return !!(data && data.authRequired);
}

function notifyPlannerAuthError_(data){
  if(typeof setAppToast !== 'function') return;
  setAppToast(
    (data && data.message) || '서버 동기화 토큰이 필요합니다. 설정에서 PLANNER_SYNC_TOKEN을 입력하세요.',
    { duration: 6000, variant: 'err' }
  );
}
/** GitHub Pages 공개 주소 — Apps Script PLANNER_PAGE_URL 과 동일하게 유지 */
const PLANNER_PUBLIC_URL = 'https://breezefeel.github.io/Thewellness/';
let plannerGasPushTimer = null;
let plannerGasRetryTimer_ = null;
let plannerGasRetryCount_ = 0;
let plannerDirtyGeneration_ = 0;
let plannerLastSyncError_ = '';
let plannerProtocolDowngraded_ = false;
let plannerStorageWriteFailed_ = false;
let plannerSyncBootstrapReady_ = false;
let plannerSyncBootstrapRunning_ = false;
let plannerSyncConflictPending_ = null;
var detailHashSyncLock_ = false;
var searchDebounceTimer = null;
var modalFocusTrap_ = null;
var plannerAiBusy = false;

// ── PSP 임상 프로토콜 (프로필.html · PROFILE_BRAND_URL 와 동기화) ──
const DEFAULT_PSP_CLINICAL_FRAMEWORK = `
[PSP 임상 프로토콜 — 모든 초안의 임상·설명 뼈대]
상세·구조 참고: 프로필 PSP 건강 가이드 · ${PROFILE_BRAND_URL}
아래 순서·용어·PAR 개념과 모순되게 쓰지 말 것. 일반 독자에게는 쉬운 비유로, 전문가에게는 정확한 용어로.

■ PSP = Philosophy · Science · Practice
(Philosophy based Science, Science based Practice)
- Philosophy: 기능하는 존재에게 **물질**(구조)과 **에너지**(작동)가 함께 맞물려야 한다. 이 프로토콜이 다루는 핵심 물질 영역은 **근골격계**. (에너지·자율신경·내장 등은 다른 체계가 필요할 수 있음)
- Science: 원인을 이론(해부·생리·신경생리·생체역학·통증과학 등)으로 설명하고, 체계적 평가로 부위·조직을 좁힌다.
- Practice: 평가에 맞는 Manual Therapy(도수)와 Movement(움직임·운동).
- 궁극 목표: **먼저 구조를 해결하고, 기능을 회복**한다. 불필요한 긴장 없이 스스로 인지·조절할 수 있는 몸.

■ 기준선 · 두 영역
- **편안한 상태 = 기준선**
- 통증·불편 있음 → **통증·재활 영역**(병원 연계·재활로 회복)
- 통증 없음 → **웰니스 영역**(더 좋은 상태로 끌어올리기)

■ STEP 01 — 평가 (4가지, 시점에 맞게 유기적으로)
History Taking · Inspection · Movement Test · Palpation
- History: General Screen, OPPQRST. 통증의 **질**(뻐근·당김·찌릿·한 점 날카로움·찢어짐·저림 등)으로 Muscle·Joint·신경·Fascia 방향을 가늠.
- Inspection: 자세·체형·불균형·생활 패턴(장시간 자세·반복 동작·수면·업무 환경).
- Movement: A-ROM·P-ROM, 동작 패턴, 필요 시 Muscle·Nerve Test.
- Palpation: Fascia / Muscle / Joint를 직접 확인해 예상을 검증.

■ STEP 02 — Manual Therapy (VAS는 참고, 임상 판단 우선)
- VAS 0~2: 원칙적으로 **움직임 평가 & Passive Stretching**. 단 찌릿·저림·날카로운 관절통·찢어짐 등 통증 질이 뚜렷하면 VAS가 낮아도 **비침습 도수**부터.
- VAS 3~6: 비침습 Manual Therapy — **Fascia → Muscle → Joint → Movement**.
- VAS 6+: 침습적 옵션을 단계적으로 고려(약물·주사·시술·수술 — 임상 판단·효과 없을 때).
- Fascia: 근막층 활주 저하·유착(Adhesion). Muscle: 과긴장·트리거·뭉침. Joint: 저가동성·Hypomobility.
- 공통 원칙: **표층→심층**, **중심(척추)→말단**, **Static→Motion**. 사고 없이 생긴 문제도 F→M→J 순으로 찾고 중재하며 변화를 관찰.

■ STEP 03 — Movement · PAR 시퀀스
**Passive Stretching(=P-ROM)** 에서 안전한 움직임을 시작한다. 시행 자체가 관절 가동범위·질을 평가하는 과정이다.

[PAR — 관절별 공통 순서]
각 **관절마다** 아래를 진행한 뒤 다음 관절로 넘어간다. 매 순간 **통증·ROM**을 확인한다.

**P · Passive (Passive Stretching)**
- 말단 → 근위로 진행. 통증·ROM 매 순간 확인.
- 통증 있음(Fascia/Muscle) → Pin & Stretching·소도구 자극 등 → 해소 후 ROM 재판단. (결합조직 손상 의심 시 **무통 범위만**, 통증 동작 자제)

**AA · Assisted Active (Assisted Active Stretching)**
- 통증 없음 + **ROM 감소(유연성 저하)** 일 때.
- 단관절 ROM 회복: CIE · Hold & Relax · Pull & Push 등.

**A · Active (Active Stretching)**
- 통증 없음 + **ROM 정상**일 때 A-ROM 확인·강화.

**R · Resistive**
- 가동 정상·통증 없을 때 **근막경선**을 따라 저항 운동.
- 방향 순서: **굴곡 → 신전 → 회전 → 외전 → 내전** (베이직: 근막경선 따라 / 어드밴스드: 기능 패턴 8종 등).
- PAR 완료 후 → **생활습관·자세 교정**(장시간 자세·반복 동작·수면·업무 환경 등 통증 재생산 요인) → **기능운동**(보행·계단·들어올리기·일상 동작을 통증 없는 범위에서 회복).

[Position — 하중을 올리며 일상에 가깝게]
- **Position 1** Supine/Prone(누움): 중력 부하 최소 → **Passive Stretching**에서 PAR 시작.
- **Position 2** Sitting(앉음): 부분 하중 → Position 1과 달리 **Active Stretching을 먼저** 시행하는 경우가 많음. 기준 미달 시 Passive 보완 후 통증·ROM 분기.
- **Position 3** Standing(서기): 완전 하중·기능적 패턴. 일상 동작에 가까운 훈련.

■ 콘텐츠에 녹이는 방법
- 일반 독자: 공감 → 왜 아픈지(평가·원인, 쉬운 비유) → 센터에서 무엇을 하는지(도수 F→M→J → 움직임 P→AA→A→생활습관→기능) → 집 셀프(동작·초·회·분, 무리·재통증 주의).
- Movement·리:얼 카테고리: P-ROM·PAR·Position 1→2→3 순서를 환자 언어로. '왜 이 동작인지'·편안한 호흡·긴장 자각을 강조.
- 전문가 독자: 평가-치료 연결, PSP·PAR 순서 존중. 과장·즉효 약속·타 기관 비방 금지.
- 얼굴·웰니스: 구조→기능, 호흡·자세·긴장 조절 맥락 유지.`;

const DEFAULT_BLOG_TITLE_HOOK_RULE = `제목은 **독자의 호기심·궁금증**을 자극하는 후킹 요소를 넣으세요. (예: "왜 ~일까?", "사실 ○○이 원인?", "○○ 안 하면 생기는 일", 숫자·흔한 오해·반전 한 줄). 네이버 SEO(검색 키워드 자연스럽게)도 고려하되, 과장·즉효 약속·낚시는 금지.
증상형 주제일 때는 **증상 키워드**와 **지역·프로그램 키워드**(예: 성수·계양·재활필라테스·도수)를 **자연스럽게** 넣을 수 있으나, 브랜드명·지역명을 억지로 반복하지 말 것.`;

let state = {
  currentCat: 0,
  searchQ: '',
  published: {},
  generatedOnly: {},
  localSavedAt: '',
  showAdd: false,
  newItem: { date:'', topic:'', catId:0, refImages:[], refImage:null, refNote:'', imageAnalyzing:false, flowProposals:[], selectedFlowIdx:0, flowProposalsLoading:false, flowProposalsReady:false, cachedYoutubeAnalysis:'', _cachedFlowYoutubeUrl:'' },
  apiKey: '',
  plannerClaudeEnabled: false,
  geminiYoutubeEnabled: false,
  plannerAuthRequired: false,
  syncProtocolVersion: 1,
  syncEntitySchemaVersion: 1,
  chatgptOpenUrl: '',
  selectedId: null,
  activeTab: 'blog',
  prompts: null, // null이면 DEFAULT_PROMPTS 사용
  promptTab: 'blog',
  editingCatId: 0,
  promptRefineMilestones: {}, // catId → 마지막 반영한 발행 N건 (3, 6, …)
  branding: null,
  collapsedSubGoalSteps: {},
  pendingSubGoalPlan: null,
  pendingYearPlan: null,
  planWorkshopMode: null,
  yearPlanGenerating: null,
  subGoalPlanGenerating: null,
  mainGoalCollapsed: true,
  dailyShareCollapsed: false,
  dailyMonthCollapsed: {},
  dailyTopicSuggestions: null,
  topicEditStepId: null,
  pinnedDraftIds: {},
  plannerSetupDismissed: false,
  legacyDraftsOpen: false,
  publishRecCurrentTabOnly: false,
  syncRationalesOnBrandSave: true,
  draftBrandOverrides: {},
  deletedDraftIds: {},
  opsManual: null,
  catGroupLast: { general: 0, expert: 3 },
  syncRevision: 0,
  syncEntityUpdatedAt: {},
  syncEntityRevisions: {},
  syncEntityTombstones: {},
  syncBaseEntityUpdatedAt: {},
  syncDirty: false,
  syncDirtyEntityKeys: {},
  syncOutbox: [],
  syncNeedsSnapshot: false,
};

function getCatGroupKeyForCat_(catId){
  if(CAT_GROUP_GENERAL.indexOf(catId) >= 0) return 'general';
  if(CAT_GROUP_EXPERT.indexOf(catId) >= 0) return 'expert';
  if(isOpsManualCategory(catId)) return 'ops';
  return null;
}
function ensureCatGroupLast_(){
  if(!state.catGroupLast || typeof state.catGroupLast !== 'object'){
    state.catGroupLast = { general: CAT_GROUP_GENERAL[0], expert: CAT_GROUP_EXPERT[0] };
  }
  if(CAT_GROUP_GENERAL.indexOf(state.catGroupLast.general) < 0) state.catGroupLast.general = CAT_GROUP_GENERAL[0];
  if(CAT_GROUP_EXPERT.indexOf(state.catGroupLast.expert) < 0) state.catGroupLast.expert = CAT_GROUP_EXPERT[0];
  return state.catGroupLast;
}
function rememberCatGroupSelection_(catId){
  var key = getCatGroupKeyForCat_(catId);
  if(!key || key === 'ops') return;
  ensureCatGroupLast_()[key] = catId;
}
function getDisplayCatInGroup_(ids, groupKey){
  if(ids.indexOf(state.currentCat) >= 0) return state.currentCat;
  var remembered = ensureCatGroupLast_()[groupKey];
  if(remembered != null && ids.indexOf(remembered) >= 0) return remembered;
  return ids[0];
}

var minDraftReplenishRunningByCat = {};
var minDraftReplenishLastAttemptByCat = {};
var minDraftReplenishTimerByCat = {};
const MIN_DRAFT_REPLENISH_COOLDOWN_MS = 90 * 1000;

function getPrompts() {
  return state.prompts || JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
}
/** 프롬프트 설정 모달에 표시할 프로그램 (지점·브랜딩 제외) */
function getPromptModalCatIds_(){
  return CATEGORIES.map(function(c, i){ return i; }).filter(function(i){ return !isOpsManualCategory(i); });
}
/** 카테고리별 AI 생성에 쓰는 프롬프트 키 */
function getPromptTypesForCat_(catId){
  if(isOpsManualCategory(catId)) return [];
  if(isDailyShareCategory(catId)) return ['thread'];
  if(isHeiljagyaeCategory(catId)) return ['community', 'image'];
  if(isBlogInstaCategory(catId)) return ['blog', 'insta', 'threads', 'image'];
  return [];
}
/** 프롬프트 모달 채널 탭 정의 */
function getPromptChannelTabDefsForCat_(catId){
  if(isDailyShareCategory(catId)){
    return [
      { id: 'thread', label: '일상 공유' },
      { id: 'base', label: '공통 기본' }
    ];
  }
  if(isHeiljagyaeCategory(catId)){
    return [
      { id: 'community', label: '아파트너 게시판' },
      { id: 'image', label: '이미지' },
      { id: 'base', label: '공통 기본' }
    ];
  }
  if(isBlogInstaCategory(catId)){
    return [
      { id: 'blog', label: '블로그' },
      { id: 'insta', label: '인스타' },
      { id: 'threads', label: '쓰레드' },
      { id: 'image', label: '이미지' },
      { id: 'base', label: '공통 기본' }
    ];
  }
  return [{ id: 'base', label: '공통 기본' }];
}
function getDefaultCatPrompt_(catId, type){
  var def = DEFAULT_PROMPTS.categories[catId];
  if(!def || def[type] == null || def[type] === undefined) return '';
  return String(def[type]);
}
function getPromptTypeLabelKr_(type){
  var labels = { blog: '블로그', insta: '인스타', threads: '쓰레드', image: '이미지', community: '아파트너 게시판', thread: '일상 공유' };
  return labels[type] || type;
}
/** 저장본에 해당 프로그램에 없는 채널 키가 남아 있으면 제거 */
function sanitizeCatPromptKeys_(catId){
  if(!state.prompts || !state.prompts.categories[catId]) return;
  var allowed = getPromptTypesForCat_(catId);
  var cat = state.prompts.categories[catId];
  Object.keys(cat).forEach(function(k){
    if(allowed.indexOf(k) < 0) delete cat[k];
  });
}
function normalizePromptTextForCompare_(text){
  return String(text || '').replace(/\r\n/g, '\n').trim();
}
/** 저장된 값만 (렌더 중 stale DOM textarea 오염 방지) */
function getPromptStoredValue_(catId, type){
  if(type === 'base') return getBasePrompt();
  return getCatPrompt(catId, type);
}
/** 화면에 열린 textarea가 있으면 그 값, 없으면 저장값 */
function getPromptCompareValue_(catId, type){
  var el = document.getElementById('pt-' + type);
  if(el) return el.value;
  return getPromptStoredValue_(catId, type);
}
/**
 * @param {boolean} [useLiveDom] true면 현재 textarea 입력 반영(입력 중·리셋 클릭).
 *   false/생략이면 저장값만 — render 템플릿 평가 시 이전 탭 DOM을 읽지 않음.
 */
function isPromptAtDefault_(catId, type, useLiveDom){
  var def = type === 'base' ? String(DEFAULT_PROMPTS.base || '') : getDefaultCatPrompt_(catId, type);
  if(type !== 'base' && !def) return true;
  var cur = useLiveDom ? getPromptCompareValue_(catId, type) : getPromptStoredValue_(catId, type);
  return normalizePromptTextForCompare_(cur) === normalizePromptTextForCompare_(def);
}
function isCatPromptsAllDefault_(catId, useLiveDom){
  var types = getPromptTypesForCat_(catId);
  if(!types.length) return true;
  return types.every(function(t){ return isPromptAtDefault_(catId, t, useLiveDom); });
}
function promptResetBtnHtml_(catId, type){
  var atDefault = isPromptAtDefault_(catId, type, false);
  return '<button type="button" class="prompt-reset-btn' + (atDefault ? ' is-at-default' : ' is-modified') + '"' +
    (atDefault ? ' disabled title="현재 내용이 기본값과 같아요"' : ' title="기본값과 다릅니다. 누르면 되돌려요"') +
    ' onclick="resetPrompt(\'' + type + '\')">기본값으로</button>';
}
function promptResetAllBtnHtml_(catId){
  var atDefault = isCatPromptsAllDefault_(catId, false);
  return '<button type="button" class="prompt-reset-all-btn' + (atDefault ? ' is-at-default' : ' is-modified') + '"' +
    (atDefault ? ' disabled title="이 프로그램 프롬프트가 모두 기본값이에요"' : ' title="수정된 채널 지침을 모두 기본값으로 되돌려요"') +
    ' onclick="resetAllPromptsForCat()">이 프로그램 전체 기본값으로</button>';
}
function updatePromptResetButtons_(){
  var catId = state.editingCatId;
  if(catId == null || isOpsManualCategory(catId)) return;
  var types = getPromptTypesForCat_(catId);
  types.concat(['base']).forEach(function(type){
    var ta = document.getElementById('pt-' + type);
    if(!ta) return;
    var section = ta.closest('.prompt-section');
    if(!section) return;
    var btn = section.querySelector('.prompt-reset-btn');
    if(!btn) return;
    var atDefault = isPromptAtDefault_(catId, type, true);
    btn.disabled = atDefault;
    btn.classList.toggle('is-at-default', atDefault);
    btn.classList.toggle('is-modified', !atDefault);
    btn.title = atDefault ? '현재 내용이 기본값과 같아요' : '기본값과 다릅니다. 누르면 되돌려요';
  });
  var allBtn = document.querySelector('.prompt-reset-all-btn');
  if(allBtn && types.length){
    var allDefault = isCatPromptsAllDefault_(catId, true);
    allBtn.disabled = allDefault;
    allBtn.classList.toggle('is-at-default', allDefault);
    allBtn.classList.toggle('is-modified', !allDefault);
    allBtn.title = allDefault ? '이 프로그램 프롬프트가 모두 기본값이에요' : '수정된 채널 지침을 모두 기본값으로 되돌려요';
  }
}
function getCatPrompt(catId, type) {
  const catPrompts = getPrompts().categories[catId] || {};
  const cur = catPrompts[type];
  if(cur !== undefined && cur !== null && String(cur).length > 0) return cur;
  return DEFAULT_PROMPTS.categories[catId]?.[type] || '';
}
function getCatPromptForGeneration_(catId, type){
  var guide = getCatPrompt(catId, type);
  if(!guide) return guide;
  var withIdentity = { blog: 1, insta: 1, threads: 1, community: 1, thread: 1, image: 1 };
  if(!withIdentity[type]) return guide;
  var block = buildProgramIdentityPromptBlock_(catId);
  if(!block) return guide;
  return guide + '\n\n' + block;
}
function isDailyShareCategory(catId){ return catId === 6; }
function isOpsManualCategory(catId){ return catId === 8; }
function isThreadCategory(catId){ return isDailyShareCategory(catId); }
function isHeiljagyaeCategory(catId){ return catId === 7; }
function isGeneralAudienceCategory(catId){ return catId === 0 || catId === 1 || catId === 2; }
/** CMT·IFC·Re:Al 움직임 과정 — 강연·영상 공유 톤 */
function isExpertCourseCategory(catId){ return catId === 3 || catId === 4 || catId === 5; }
function getExpertCourseTopicAudienceLine_(catId){
  if(catId === 3) return 'CMT 수강·복습 중인 도수·물리치료 동료에게 건네는 한 줄';
  if(catId === 4) return 'IFC 얼굴·구조 교육을 배우는 미용·도수·물리치료 동료에게 건네는 한 줄';
  if(catId === 5) return 'Re:Al 움직임 과정 수강·복습 중인 재활·트레이닝 동료에게 건네는 한 줄';
  return 'PT·트레이너 동료에게 건네는 한 줄';
}
/** 초안·주제 생성 등에 쓰는 탭별 독자 한 줄 (cat.audience보다 구체적) */
function getProgramAudienceLine_(catId){
  var id = parseInt(catId, 10);
  if(id === 3) return 'CMT 임상도수 과정 수강·복습 중인 물리치료사·도수 치료사 (평가·촉진 중심)';
  if(id === 4) return 'IFC 얼굴·구조 교육 수강·복습 중인 얼굴·구조 교육 전문가 (미용·도수·물리치료)';
  if(id === 5) return 'Re:Al 움직임 과정 수강·복습 중인 물리치료사·트레이너 (치료→기능 연결)';
  if(id === 0) return '통증·구조 치료에 관심 있는 일반인';
  if(id === 1) return '일상 움직임·자세 개선에 관심 있는 일반인';
  if(id === 2) return '얼굴·비대칭 관리에 관심 있는 일반인 (20~40대)';
  var cat = CATEGORIES[id];
  return cat ? (cat.audience || '') : '';
}
/** 분기·단계 시각 구분용 톤 클래스 (0~3 분기, 0~4 단계) */
function getQuarterToneClass_(idx){ return 'quarter-tone-' + (Math.max(0, parseInt(idx, 10) || 0) % 4); }
function getStepToneClass_(idx){ return 'step-tone-' + (Math.max(0, parseInt(idx, 10) || 0) % 5); }
/** 기획 계층 ①1년 ②세부목표 ③주제기획 ④주제 */
function getPlanTierClass_(tier){ return 'plan-tier-' + tier; }
/** 블로그·인스타·이미지(2장) 워크플로 — 도수·리:얼·뷰티·교육 탭 */
function isBlogInstaCategory(catId){ return catId !== 6 && catId !== 7 && catId !== 8; }
function getImageSlotCount(catId){
  if(isDailyShareCategory(catId)) return 0;
  return 2;
}
function getBasePrompt() {
  return getPrompts().base || DEFAULT_PROMPTS.base;
}

function getFocusableIn_(root){
  if(!root) return [];
  return Array.prototype.slice.call(root.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(function(el){
    return !el.disabled && (el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
  });
}
function releaseModalFocusTrap_(){
  if(!modalFocusTrap_) return;
  modalFocusTrap_.root.removeEventListener('keydown', modalFocusTrap_.onKeydown);
  var prev = modalFocusTrap_.prev;
  modalFocusTrap_ = null;
  if(prev && typeof prev.focus === 'function'){
    try { prev.focus(); } catch(e){}
  }
}
function trapFocusIn_(rootEl){
  releaseModalFocusTrap_();
  if(!rootEl) return;
  var prev = document.activeElement;
  function onKeydown(e){
    if(e.key !== 'Tab') return;
    var nodes = getFocusableIn_(rootEl);
    if(!nodes.length) return;
    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    if(e.shiftKey){
      if(document.activeElement === first){
        e.preventDefault();
        last.focus();
      }
    } else if(document.activeElement === last){
      e.preventDefault();
      first.focus();
    }
  }
  rootEl.addEventListener('keydown', onKeydown);
  modalFocusTrap_ = { root: rootEl, onKeydown: onKeydown, prev: prev };
  setTimeout(function(){
    var nodes = getFocusableIn_(rootEl);
    if(nodes.length) nodes[0].focus();
  }, 60);
}
function restoreDetailFocusTrapIfOpen_(){
  if(document.getElementById('detail-overlay').classList.contains('open')){
    trapFocusIn_(document.getElementById('detail-sheet'));
  }
}
function closeTopmostPlannerOverlay_(){
  if(document.getElementById('sync-status-overlay').classList.contains('open')){
    closeSyncStatusModal_();
    return true;
  }
  if(document.getElementById('drive-modal-overlay').classList.contains('open')){
    closeDriveModal();
    return true;
  }
  if(document.getElementById('prompt-modal-overlay').classList.contains('open')){
    closePromptModal();
    return true;
  }
  if(document.getElementById('plan-ws-leave-overlay').classList.contains('open')){
    planWorkshopLeaveStay_();
    return true;
  }
  if(document.getElementById('plan-workshop-overlay').classList.contains('open')){
    closePlanWorkshop_();
    return true;
  }
  if(document.getElementById('api-modal').classList.contains('open')){
    closeApiModal();
    return true;
  }
  if(document.getElementById('detail-overlay').classList.contains('open')){
    closeSheet();
    return true;
  }
  return false;
}


const EXT_NAVER_BLOG = 'https://blog.naver.com/allenjoy';
const EXT_INSTAGRAM_WEB = 'https://www.instagram.com/dr.park_dc.pt/';
const EXT_THREADS = 'https://www.threads.com/@dr.park_dc.pt';
const APARTNER_ANDROID_PKG = 'kr.co.azsmart.apartner';
const APARTNER_IOS_STORE = 'https://apps.apple.com/kr/app/id1243505765';
const APARTNER_PLAY_STORE = 'https://play.google.com/store/apps/details?id=' + APARTNER_ANDROID_PKG;
const APARTNER_WEB = 'https://www.aptner.com/';

/** iPhone·iPad(요청 데스크톱 UA 포함)·Android 구분 — 바로가기 앱 연동용 */
function isIOSLikeDevice(){
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}
function isAndroidDevice(){
  return /Android/i.test(navigator.userAgent || '');
}
function isPhoneOrTablet(){
  return isIOSLikeDevice() || isAndroidDevice();
}
/** iOS: location.href 대신 iframe으로 scheme 호출 — 플래너 탭이 웹 URL로 바뀌지 않음 */
function openIOSAppScheme_(schemeUrl){
  if(!schemeUrl) return;
  try {
    var ifr = document.createElement('iframe');
    ifr.setAttribute('aria-hidden', 'true');
    ifr.style.cssText = 'display:none;width:0;height:0;border:0';
    ifr.src = schemeUrl;
    (document.body || document.documentElement).appendChild(ifr);
    setTimeout(function(){
      try { if(ifr.parentNode) ifr.parentNode.removeChild(ifr); } catch(e){}
    }, 2500);
  } catch(e){}
}
function openNaverBlogAppOnIOS_(){
  openIOSAppScheme_('naverblog://');
}
function getThreadsProfileUsername(){
  const m = String(EXT_THREADS).match(/@([^/?#]+)/);
  return m ? m[1] : 'dr.park_dc.pt';
}
function getInstagramUsernameFromExt_(){
  const m = String(EXT_INSTAGRAM_WEB || '').match(/instagram\.com\/([^/?#]+)/i);
  return m ? m[1].replace(/\/$/, '') : 'dr.park_dc.pt';
}
/** 예전 초안: carousel이 있으면 캡션에 합쳐 붙여넣기용으로 사용 */
function formatCarouselKeyPointsForCaption_(carousel){
  if(!carousel || !carousel.length) return '';
  return carousel
    .map(function (c) {
      if(!c) return '';
      const t = String(c.title || '').trim();
      const body = String(c.content || '').trim();
      if(!t && !body) return '';
      if(t && body) return '• ' + t + '\n' + body;
      if(t) return '• ' + t;
      return body;
    })
    .filter(Boolean)
    .join('\n\n');
}
function getInstaCaptionBodyMerged_(ig){
  if(!ig) return '';
  const cap = String(ig.caption || '').trim();
  const extra = formatCarouselKeyPointsForCaption_(ig.carousel);
  if(!extra) return cap;
  const firstLine = String((ig.carousel[0] && ig.carousel[0].title) || '').trim();
  if(firstLine && cap.indexOf(firstLine) !== -1) return cap;
  return cap ? cap + '\n\n' + extra : extra;
}
function getInstaFullPasteText_(ig){
  if(!ig) return '';
  const hook = String(ig.hook || '').trim();
  const body = getInstaCaptionBodyMerged_(ig);
  const mid = hook ? hook + (body ? '\n\n' + body : '') : body;
  const tags = (ig.hashtags || []).map(function (h){ return '#' + h; }).join(' ');
  return (mid + (tags ? '\n\n' + tags : '')).trim();
}

const DEFAULT_CHATGPT_IMAGE_PROJECT_URL = 'https://chatgpt.com/g/g-p-6a005d9f06c481918ae0a417388d5d61-imiji-saengseong/project';

const COMMUNITY_FIXED_GREETING = `안녕하세요, 입주민 여러분 😊
미카닥 박준규입니다.
매주 한 번, 일상에서 바로 쓸 수 있는 건강 이야기를 나눠드리고 있어요.`;

const COMMUNITY_FIXED_CLOSING = `궁금한 점은 언제든 편하게 문의해 주세요 😊
미카닥 박준규 드림`;

const DEFAULT_HEILJAGYAE_COMMUNITY_PROMPT = `힐스테이트 자이 계양 **아파트너(힐자계) 게시판**에 올라가는 글입니다.

[가장 중요한 톤]
- **설득·강의·꼭 해야 한다는 압박**보다, **같은 단지 옆집 이웃**이 복도에서 잠깐 붙어 나누는 건강 이야기.
- "~하세요" 명령보다 **"이렇게보면 시원해요"** 식 가벼운 정보·공유. 전문 용어는 풀어 쓰고, 근거·통계 나열은 최소화.
- **홍보·예약 유도·센터 이름 반복** 금지.

[계절·일상 연결]
- 주제·각도에 **봄·초여름(5~6월)** 이 맞으면 자연스럽게 녹이기: 꽃가루·봄 피로, 산책·걷기 늘리다 종아리·무릎, 실내 냉방 전후 목·어깨, 붓기·수면, 가벼운 야외 활동 후 뻐근함 등.
- 계절이 주제와 무관하면 억지로 넣지 말 것.

[다루는 주제 축]
- **P-스트레칭**(패시브·이완), 자세·기능 운동, 일상 속 움직임
- 가벼운 **얼굴·림프·경추** (효과 보장·의학적 단정 금지)

[고정 요소 — JSON에 넣지 말 것]
인사말·마무리는 앱에서 고정 문구로 붙입니다.

[글 흐름 — 반드시 이 순서]
1. **문제 제기** (problem): 일상 장면에서 공감되는 불편·궁금증을 **자연스러운 문장 2~4개**로. 불릿·번호 나열 금지. 문장(문단) 사이 **빈 줄**. 마지막 문장에서 **짧은 시간·일상 공간으로 해결 가능**하다는 뉘앙스로 이어지기.
2. **해결책 제시** (selfCare): **👉 로 시작**. 동작·자세·**초·회·분** 숫자를 앞쪽에 배치해 핵심이 먼저 보이게. "지금 바로 해보세요" 같은 가벼운 멘트 OK. "아 시원하다" 지점에서 멈추라는 뉘앙스.
3. **원리 설명** (explanation): 동작 **뒤에** 왜 도움이 되는지 **2~5문장**. 문단 사이 빈 줄. 정의 한 줄 + **비유 한 줄**(쿠션 털기, 고양이 기지개 등) + 복잡하지 않다·도구 필요 없다는 마무리.

[형식]
- title: 🌿 로 시작, 질문형·공감형 한 줄 (낚시·과장 금지)
- problem: 문제 제기 단락 (위 1번)
- selfCare: 해결책·동작 단락 (위 2번)
- explanation: 원리 설명 단락 (위 3번)

[완성 톤 참고 — 구조·말투만 따르고 문장은 주제에 맞게 새로 쓸 것]
🌿 엘리베이터 기다리는 30초, 그냥 보낼 건가요?
(인사 — 앱 고정)
하루 종일 앉아 있다가 일어설 때, 골반이 뻐근하고 묵직한 느낌 드신 적 있으신가요?
그 불편함, 엘리베이터 기다리는 30초로 해결할 수 있습니다.
👉 지금 바로 해보세요
엘리베이터 앞 벽에 등을 살짝 대고 서서,
한쪽 무릎을 가슴 쪽으로 천천히 당겨주세요.
⏱ 15초 × 양쪽 교대 × 2~3회
억지로 힘줄 필요 없어요.
몸이 "아, 시원하다" 싶은 선에서 멈추면 딱 맞아요.
오래 앉아 있으면 골반 주변 근육이 조금씩 굳고 틀어집니다.
이 동작은 그 긴장을 풀어주는 골반 리셋 스트레칭이에요.
마치 오래 눌린 쿠션을 탁탁 털어 제자리로 돌려놓는 것처럼요.
복잡하지 않아요. 도구도 필요 없어요.
엘리베이터 앞, 30초면 충분합니다. 🙂
(마무리 — 앱 고정)`;

const DEFAULT_DAILY_SHARE_PROMPT = `**일상 공유** 탭용 글입니다. Threads·인스타 등에 올리는 **담백한 생활 나눔** 톤으로 써 주세요.

[톤 앵커 — 최우선]
${DAILY_SHARE_TONE_ANCHOR}

[글의 뼈대]
- **핵심 메시지 하나**를 분명히 (전문가답게 말하고 싶은 포인트는 유지)
- 그 앞뒤로 **장면·관찰**을 깔고, **몸감각·날씨**를 담백하게 묘사
- **짧은 감탄·한 줄 철학**은 1문장 이내로만 — 공감을 살짝 보태는 용도
- 감성 일기·위로·눈물·시적 수사·「우리 모두~」 류 **과한 터치 금지**

[주제 축]
- 일상·쉬는 시간, 계절·날씨, 몸 컨디션, 여행·이동, 최근 느낌(논쟁·설교 금지)

[근골격계 전문가 시선 — 가볍게]
- 본문 **1~2문장**만, 옆에서 한 줄 덧붙이듯 (강의·진단·치료 권유·"꼭 하세요"·용어·PSP 나열 금지)
- 날씨·피로·뻐근함과 맞을 때만 짧은 이유·연결

[사진이 있을 때]
- 교육·세미나 사진이어도 강의 톤 금지 — "오늘 다녀왔는데", "피곤하지만" 같은 **관찰 나눔**만

[절대 피할 것]
- 억지 공감 유도, 독자에게 던지는 질문("~하신 적 있나요?" 등)
- 소제목·번호·강의록·홍보·"결론부터" 멘트

[이렇게 써 주세요]
- **topicTitle**: 오늘의 한 줄 — **평서·짧은 감탄·장면** (질문형 금지)
- **summary**: topicTitle에 이어지는 연속 본문. **관찰 → 핵심 한 가지 → (선택) 짧은 감탄/철학 1문장** 흐름. 이모지 0~1개
- **3~7문장**, 번호·불릿 없이 한 덩어리`;

const BLOG_UNIVERSAL_QUALITY_RULE = `[블로그 공통 완성도 — 주제와 무관하게 적용]
- 글마다 **독자 한 집단·핵심 메시지 한 가지**를 먼저 정하고 끝까지 유지하세요.
- 문단마다 새 정보가 진행되어야 합니다. 같은 결론·가치·감정을 표현만 바꿔 반복하지 마세요.
- 비유는 가장 이해를 돕는 **한 번만** 사용하고, 이후에는 구체적인 장면·관찰·근거로 설명하세요.
- 입력에 장소·대상·질문·현장 장면이 있으면 구체적으로 활용하되, 없는 사실·반응·성과를 만들지 마세요.
- 정보형 글은 **독자 장면 → 원인·오해 → 구체적 도움 → 원리·주의 → 다음 행동**으로 전개하세요.
- 강의·연수·행사 후기라면 **왜 이 자리가 필요했는지 → 현장 장면 → 핵심 내용 2~3개 → 실제 질문·반응 → 역할의 경계 → 달라진 관점 → 자연스러운 문의**로 전개하세요.
- 진단·교정·치료 주체와 관찰·교육·운동 안내자의 역할을 분명히 구분하세요.
- CTA는 본문의 결론과 직접 연결하고, 갑작스러운 홍보·상담 압박·상투적인 감사 인사를 피하세요.
- 복사 과정의 "접기/펴기", 빈 제목, 중복 구분선 같은 편집 흔적을 본문에 넣지 마세요.`;

const THREADS_UNIVERSAL_QUALITY_RULE = `[Threads 댓글 완성도 보강]
- **맥락·과정 → 핵심 구분 → 구체적 장면·근거 → 관점·다음 행동** 순서로 전개하세요.
- 핵심 메시지는 하나만 남기고, 같은 결론을 표현만 바꿔 반복하지 마세요.
- 쉬운 비유는 최대 1개이며, 비유 뒤에는 반드시 실제 장면·관찰·원리를 붙이세요.
- 독자 역할이 교사·기관 담당자·일반인이라면 진단·교정이 아닌 관찰·교육·연결의 범위를 분명히 하세요.
- 마지막 질문은 본문과 직접 연결될 때만 1개 사용하고, 억지 공감 질문은 생략하세요.
- 짧은 문단 5~8개, 대체로 500~1,000자. 긴 블로그 전체를 옮기지 마세요.`;

const THREADS_BODY_COMMENT_RULES = `[Threads 2단 구조 — 필수]
■ **body(본문)**: 게시글 1포스트 — 궁금증·후킹만. 해설·답·근거는 넣지 마세요.
■ **comment(댓글)**: 본인 댓글(재게시용) — 본문의 물음·반전에 대한 해설·근거·과정·철학.

[본문 body]
- **1~3문장**, 줄바꿈 최소. **한 줄 핵심**이 반이어야 함.
- **통념·익숙한 말 vs 실제 과정**: "보이는 결과는 ○○지만, 먼저 볼 것은 △△" 흐름.
- **쉬운 비유** 1개. **의견이 갈리는** 주제 OK (의료법·과장 금지).
- 통념 뒤집기·반전·궁금증 유발. **답·해설·리스트·근거는 본문에 쓰지 마세요.**

[댓글 comment]
- 본문에서 던진 **궁금증·반전에 대한 답**.
- **근거**: 현장 경험·짧은 메커니즘. (해당 시) 병원 진료 먼저 권고.
- 본문과 **같은 문장 반복 금지**. 해시태그·"~하세요" 나열 금지.

${THREADS_UNIVERSAL_QUALITY_RULE}

[공통 금지]
- 치료·완치·진단·처방·수술 대신·Doctor/닥터/원장님
- 인스타 해시태그·불릿·번호 목록 그대로 복사
- 본문에 긴 해설·리스트·해답 미리 공개`;

const DEFAULT_THREADS_SNS_PROMPT = `당신은 **블로그 글**을 Threads **2단 포스트**(본문 훅 + 댓글 해설)로 만드는 전문가입니다.

[인스타와 다른 각도 — 중요]
- **인스타** = "오늘 현장에서 ○○ 했더니 △△" (결과·시연·변화)
- **쓰레드** = **통념 뒤집기 훅(본문)** + **과정·철학·근거(댓글)**
- 블로그를 다시 요약하지 말고, 위 각도로 **새로** 쓰세요.

[말투]
- 원문과 독자에 맞춰 조절하세요. 동료·팔로워 대상은 자연스러운 구어체, 학교·기관·교사 대상은 간결한 정중체를 사용하세요.
- "~임·~거임"을 기계적으로 반복하지 말고, 실제 사람이 짧게 말하는 리듬으로 쓰세요.

` + THREADS_BODY_COMMENT_RULES + `

[형식]
- 이모지: 본문 0~1개, 댓글 0~1개
- 해시태그 없음. 불릿(•), 볼드, 헤더 없음`;

function buildExpertCourseThreadsPrompt_(opts){
  opts = opts || {};
  var roleReaders = opts.roleReaders || '현장 움직임 전문가 동료';
  var programBlock = opts.programBlock ? String(opts.programBlock).trim() : '';
  return DEFAULT_THREADS_SNS_PROMPT + '\n\n' +
    '[전문가 과정 맥락]\n' +
    '- 변환 대상: **블로그(강의·시연 글)** → Threads 본문+댓글\n' +
    '- 독자: ' + roleReaders + '\n' +
    '- 본문: 현장에서 흔히 틀리는 테크닉·전제 하나를 **한 줄**로 뒤집기\n' +
    '- 댓글: 영상·글에 있는 테크닉 원리·손 느낌·주의를 풀어 설명. 수강·등록 유도 금지\n' +
    '- 블로그·참고·영상 범위 밖 내용 추가 금지' +
    (programBlock ? '\n' + programBlock : '');
}

const DEFAULT_BLOG_INSTA_IMAGE_PROMPT = `이미지는 **정확히 2장** — ① 1:1 썸네일(피드·인스타 커버) ② 본문 보조(동작·시연).

[① 썸네일 1:1]
- 비율 1:1. 상단 20%·하단 22%는 단색 밴드(글자 없음) — 후처리 시 한글 삽입용 여백
- overlayFixedLine1·overlayFixedLine2·overlayHook 필드에 한글 고정·후킹 문구 기록 (이미지 안에 글자 생성 금지)
- 중앙만 사진: editorial documentary, natural light, slight film grain, visible skin texture
- 크리미 베이지 인포그래픽·3D 해부·AI 매끈 피부 금지

[② 본문]
- blog.selfCare와 **동일한** 셀프 동작 1장면. 매트·바닥·옆모습·자연광
- 텍스트·로고 없음

영문 prompt는 한 덩어리 90~200단어. 불릿·한 줄 요약 금지.`;

const DEFAULT_EXPERT_COURSE_IMAGE_PROMPT = `전문가 과정·강연 공유용 — **2장**: ① 1:1 썸네일 ② 본문 시연.

[① 썸네일] 상·하 여백 밴드 + 중앙 시연·손 클로즈업. overlay 필드에 한글 고정·후킹.
[② 본문] blog.outline·draft·참고 메모의 테크닉·시연과 **정확히 일치**. 강의실·클리닉.

크리미 medical illustration 금지. documentary·seminar editorial. 영문 prompt 한 덩어리.`;

const DEFAULT_HEILJAGYAE_IMAGE_PROMPT = `힐자계 아파트너 — **2장**: ① 1:1 썸네일 ② 본문 셀프 동작.

[① 썸네일] 아파트·단지 공감 컷 + 상·하 여백. overlay: 힐자계 / 입주민 셀프 케어 + community.title 후킹.
[② 본문] community.selfCare와 **동일** 동작. 광고톤 금지, 옆집 이웃 생활감.

영문 prompt 한 덩어리. 크리미 AI 일러스트 금지.`;

const DEFAULT_EXPERT_COURSE_SCOPE_RULE = `[범위·집중 — 최우선]
- 이 글은 **교육·강의 때 촬영한 영상** 또는 **실습·시연 사진**을 공유하면서, 그 장면에 맞춰 쓰는 글입니다.
- [작성자 참고]의 YouTube 분석·사진 메모·참고 메모가 **소스의 전부**입니다. 영상·사진에 없는 내용은 쓰지 마세요.
- **써도 되는 것**: 영상·사진에서 보이는 테크닉/동작, 시연·손 위치·주의사항, 그에 대한 **원리 설명**(왜 이렇게 하는지·짧은 메커니즘).
- 학교·기관·기업 연수임이 입력에 명시되면, 테크닉 나열보다 **교육이 필요했던 이유·참여자의 역할·실제 질문·관찰 관점의 변화**를 중심으로 후기형 글을 쓸 수 있습니다.
- 연수 후기에서도 장소·대상·질문·현장 장면은 입력에 있는 내용만 사용하고, 교사·담당자가 진단하거나 교정하는 사람처럼 쓰지 마세요.
- **쓰지 말 것**: 참고에 없는 평가·질환·부위·테크닉으로 **확장**, PSP·임상 전체 흐름으로 **넓혀 쓰기**, "통상적으로는~" 식 **교과서적 부가 설명**, 영상·사진과 무관한 **별도 케이스·일반론**.
- 정보가 부족하면 억지로 채우지 말고, 참고·영상·사진에 있는 것만 **더 명확하게** 풀어라. 강의 본 동료와 대화하는 톤.`;

const BLOG_CONTENT_VOICE_RULE = '미카닥 박준규 톤 — 따뜻하고 신뢰감 있는 **설명하는 전문가**. 제목·서명·헤드라인에 Doctor·닥터·원장님을 쓰지 않음. 과장·즉효 약속 금지.';

const MEDICAL_COMPLIANCE_RULE = `[의료법·포지셔닝 — 필수]
- 작성자(미카닥 박준규)는 **현재 병원에서 근무하지 않습니다**. 진단·처방·치료행위를 하거나 암시하지 마세요.
- **치료가 필요할 수 있는 상황**은 원인·징후를 **교육적으로** 설명한 뒤, **병원 진료·검사·의사 처방 치료를 먼저 권하는** 문장을 넣으세요.
- 제공 범위는 **운동·재활·웰니스 프로그램**(Re:Al Movement, P-스트레칭, 기능운동 등)이며, 병원 치료와 **병행**하는 흐름으로 씁니다.
- "완치""치료한다""진단 확정""처방""수술 대신" 등 **의료행위 연상** 표현 금지. "이해를 돕기 위한 일반 정보"·"생활·운동 관리 참고" 톤.
- 응급·적신호(마비, 대소변 장애, 발열·체중감소 동반, 사고 직후 급격한 악화 등)는 **즉시 병원** 권고.`;

const GEO_CONTENT_STRUCTURE_RULE = `[GEO · AI 인용 가능 구조 — explanation 필드에 자연스럽게 녹이기]
**explanation 맨 앞 2~3문장은 TL;DR(핵심 결론 요약)**으로 시작할 것. AI가 먼저 발췌할 수 있게 결론을 선제시한 뒤, 아래 요소를 번호·"N단계" 표기 없이 문단으로 이어 연결:
① (TL;DR — 위에서 이미 작성) ② 자가 점검 2~4개 ③ 가능한 원인 ④ 병원 진료 신호 vs 운동·프로그램으로 관리 가능한 경우 ⑤ 안전한 셀프 확인·이완 ⑥ 주의·금기 ⑦ 근골격계 전문가 관점 ⑧ 익명 사례 톤의 변화(숫자는 예시로) ⑨ FAQ 2~3개 ⑩ 다음 행동(병원 상담 또는 프로그램 상담) — 주제와 맞으면 프로필 증상 허브 딥링크 1개 포함 가능`;

const DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW = `**일반인 독자**용 블로그입니다. ${BLOG_CONTENT_VOICE_RULE}

${BLOG_UNIVERSAL_QUALITY_RULE}

${MEDICAL_COMPLIANCE_RULE}

${GEO_CONTENT_STRUCTURE_RULE}

[글 흐름 — 반드시 이 순서·필드]
1. **문제 제기** (problem): 일상 장면에서 공감되는 불편·궁금증 2~4문장. 불릿·번호 나열 금지. 문장(문단) 사이에는 **빈 줄**로 띄워 가독성 확보. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스.
2. **셀프 케어** (selfCare): **👉 로 시작**. 동작·자세·**초·회·분**을 앞쪽에. "아 시원하다" 지점에서 멈추라는 뉘앙스. 무리·재통증 주의 한 줄. 통증이 심하면 병원 먼저 한 줄.
3. **원리 설명** (explanation): **맨 앞 2~3문장 TL;DR(핵심 결론)** → 동작 **뒤에** 왜 도움이 되는지 + GEO 구조. 비유 한 줄. 병원 치료가 필요한 경우와 **프로그램 병행**이 맞는 경우를 구분. **문단 사이 빈 줄**로 읽기 쉽게.

[형식]
- title: 호기심·질문형 한 줄 (35자 내외, 네이버 SEO 고려, 과장 금지)
- problem / selfCare / explanation: 위 순서대로 각각 별도 필드. "N단계 —" 같은 순서 표기 금지
- cta: 병원 상담 또는 Re:Al·프로그램 상담 중 맥락에 맞게 (과장·즉시 예약 압박 금지). 주제와 맞는 증상 허브 URL 1개 포함 권장 — 허리 ?hub=back · 목 ?hub=neck · 어깨 ?hub=shoulder · 무릎 ?hub=knee · 골반 ?hub=pelvis (기본 ${PROFILE_BRAND_URL})
- hashtags: 6~8개 (# 없이)`;

function buildExpertCourseBlogPrompt_(opts){
  opts = opts || {};
  var audienceIntro = opts.audienceIntro || '물리치료사·트레이너 등 **움직임 전문가**를 독자로 하는';
  var roleReaders = opts.roleReaders || 'PT, 트레이너, 움직임에 관심 있는 현장 전문가';
  var programBlock = opts.programBlock ? String(opts.programBlock).trim() : '';
  return audienceIntro + ' SNS·블로그 글입니다.\n\n' +
    '**주 사용 방식**: 교육·강의 때 진행한 **영상 링크** 또는 **실습·시연 사진**을 첨부하고, 입력에 따라 **테크닉 원리** 또는 **교육 현장의 의미**를 중심으로 글을 씁니다.\n\n' +
    BLOG_UNIVERSAL_QUALITY_RULE + '\n\n' +
    DEFAULT_EXPERT_COURSE_SCOPE_RULE + '\n\n' +
    '[역할]\n' +
    '- 독자: ' + roleReaders + '\n' +
    '- 글의 중심은 **원리 설명**(왜 이렇게 하는지)이며, 영상·사진에서 본 시연을 복기하는 톤\n\n' +
    '[글 흐름 — 입력에 맞는 유형 하나를 선택]\n' +
    '- **테크닉·시연형**: 영상·사진 맥락(hook) → 손 위치·동작·주의사항 2~3개(outline) → 왜 그런지·메커니즘·현장 적용(draft)\n' +
    '- **강의·연수 후기형**: 교육이 필요했던 이유와 현장 장면(hook) → 다룬 관찰·학습 포인트 2~3개(outline) → 실제 질문·역할의 경계·달라진 관점(draft)\n' +
    '- 두 유형을 섞어 나열하지 말고, 입력의 중심에 더 가까운 하나를 선택하세요.\n\n' +
    '[톤 & 스타일]\n' +
    '- 과장·낚시·"꼭 해야 한다" 압박 금지. **내용으로 말하는** 느낌\n' +
    '- 전문 용어는 쓰되, **한 줄 정도 풀어서** 설명\n' +
    '- 강의 중 실제로 하는 **말하듯** 자연스럽게\n' +
    '- 해시태그 **최소화**(3~5개)\n\n' +
    '[형식 — JSON 필드]\n' +
    '- title: 현장에서 궁금해할 테크닉·질문 한 줄 (35자 내외)\n' +
    '- hook: 영상·사진 맥락 (위 1번)\n' +
    '- outline: 시연·핵심 포인트 배열 (위 2번)\n' +
    '- draft: 선택한 유형의 본문 (**650~1,000자**, 참고·영상·사진 범위 안만)\n' +
    '- cta: 수강·등록 유도 금지. 가벼운 마무리\n' +
    '- hashtags: 3~5개' +
    (programBlock ? '\n\n' + programBlock : '');
}

function buildExpertCourseInstaPrompt_(opts){
  opts = opts || {};
  var roleReaders = opts.roleReaders || 'PT, 트레이너, 움직임 전문가 동료';
  var programBlock = opts.programBlock ? String(opts.programBlock).trim() : '';
  return '전문가 과정 **강연·영상·사진 공유**용 인스타 캡션입니다. 블로그보다 짧고 밀도 있게.\n\n' +
    DEFAULT_EXPERT_COURSE_SCOPE_RULE + '\n\n' +
    '[역할·독자]\n' +
    '- ' + roleReaders + '에게 말하듯\n' +
    '- 공유한 **영상·사진에서 다룬 테크닉**과 **원리 한 줄**이 드러나게\n\n' +
    '[구성]\n' +
    '- 영상·사진 맥락 한 줄 → 시연·핵심 포인트 2~3개 → **원리 설명** 한두 문장\n' +
    '- 참고 메모·영상 분석·블로그 원문 **범위 안**에서만\n\n' +
    '[톤]\n' +
    '- 과장 없이, 내용으로 말하기. 전문 용어는 한 줄 풀어쓰기\n' +
    '- 강의 말투처럼 자연스럽게\n\n' +
    '[형식]\n' +
    '- hook: 기억에 남는 한 줄 (25자 내외)\n' +
    '- caption: hook 제외 **200~400자**. 수강·등록 유도 금지\n' +
    '- hashtags: **4~6개** 이내, 전문 키워드 위주' +
    (programBlock ? '\n\n' + programBlock : '');
}

const DEFAULT_CMT_EXPERT_BLOG_PROMPT = buildExpertCourseBlogPrompt_({
  audienceIntro: '**CMT 임상도수 전문가 과정** 수강·복습 중인 물리치료사·도수 치료사를 독자로 하는',
  roleReaders: '평가(촉진·히스토리) 중심 사고를 키우는 현장 치료사·도수 전문가',
  programBlock: '[CMT 맥락]\n' +
    '- 치료 테크닉보다 **평가·판단 순서**가 먼저임을 유지. "왜 그렇게 판단했는가"가 드러나게\n' +
    '- PSP 용어는 **참고·영상에서 다룬 범위** 안에서만. 무관한 평가·중재 전체 흐름으로 확장 금지\n' +
    '- 촉진·관절가동술 등 **이번 강의 테크닉** 중심. 짧은 원리 설명은 괜찮으나 별도 케이스·부위로 넓히지 말 것'
});
const DEFAULT_IFC_EXPERT_BLOG_PROMPT = buildExpertCourseBlogPrompt_({
  audienceIntro: '**IFC 얼굴교육** 수강·복습 중인 얼굴·구조 교육 전문가(미용·도수·물리치료 등)를 독자로 하는',
  roleReaders: '얼굴·경축·턱관절·교합을 구조적으로 보는 미용·도수·물리치료 현장 전문가',
  programBlock: '[IFC 얼굴교육 맥락]\n' +
    '- 표면 자극·미용 마사지가 아닌 **구조·경축·기능 연결** 관점. 경추·턱관절·교합을 함께 설명\n' +
    '- 구조적 접근은 **참고·영상에서 다룬 범위** 안에서만. 무관한 전신·다른 부위 이야기로 확장 금지\n' +
    '- 기기(IFC)와 도수 접근 **순서**·상담(기대치 조율) 포인트 중심. before/after 과장 금지'
});
const DEFAULT_REAL_MOVEMENT_EXPERT_BLOG_PROMPT = buildExpertCourseBlogPrompt_({
  audienceIntro: '**Re:Al 움직임 전문가 과정** 수강·복습 중인 물리치료사·트레이너를 독자로 하는',
  roleReaders: '치료 후 기능 회복·PAR·Position을 임상에 연결하는 움직임·재활 전문가',
  programBlock: '[Re:Al Movement 맥락]\n' +
    '- 치료실→기능운동 연결. PAR·Position·progression을 **참고·영상에서 다룬 내용** 안에서만 연결\n' +
    '- 참고에 없는 평가·운동 처방·다른 부위로 확장 금지\n' +
    '- 안전한 progression·환자 순응도·코칭 언어가 드러나게'
});
const DEFAULT_CMT_EXPERT_INSTA_PROMPT = buildExpertCourseInstaPrompt_({
  roleReaders: 'CMT 수강·복습 중인 도수·물리치료 동료',
  programBlock: '[CMT] 평가·판단 근거가 보이게. 이번 강의·영상의 테크닉·포인트만. PSP는 참고 범위 안에서만.'
});
const DEFAULT_IFC_EXPERT_INSTA_PROMPT = buildExpertCourseInstaPrompt_({
  roleReaders: 'IFC 얼굴·구조 교육을 배우는 미용·도수·물리치료 동료',
  programBlock: '[IFC] 얼굴·경축·구조 관점. 이번 강의·영상의 테크닉·평가 포인트만. 표면 미용 톤 금지.'
});
const DEFAULT_REAL_MOVEMENT_EXPERT_INSTA_PROMPT = buildExpertCourseInstaPrompt_({
  roleReaders: 'Re:Al 움직임 과정 수강·복습 중인 재활·트레이닝 동료',
  programBlock: '[Re:Al] 치료→기능 연결. 이번 강의·영상의 테크닉·포인트만.'
});
const DEFAULT_CMT_EXPERT_THREADS_PROMPT = buildExpertCourseThreadsPrompt_({
  roleReaders: 'CMT 수강·복습 중인 도수·물리치료 동료',
  programBlock: '[CMT] 평가·판단 근거가 보이게. 이번 강의·영상 테크닉만. PSP는 참고 범위 안에서만.'
});
const DEFAULT_IFC_EXPERT_THREADS_PROMPT = buildExpertCourseThreadsPrompt_({
  roleReaders: 'IFC 얼굴·구조 교육을 배우는 미용·도수·물리치료 동료',
  programBlock: '[IFC] 경축·턱관절·구조 연결 관점. 미용 마사지 톤 금지. before/after 과장 금지.'
});
const DEFAULT_REAL_MOVEMENT_EXPERT_THREADS_PROMPT = buildExpertCourseThreadsPrompt_({
  roleReaders: 'Re:Al 움직임 과정 수강·복습 중인 재활·트레이닝 동료',
  programBlock: '[Re:Al] 치료→기능·PAR·Position 연결. 이번 강의·영상 테크닉만.'
});

// ── 기본 프롬프트 (카테고리별 블로그/인스타/쓰레드 등) ──
const DEFAULT_PROMPTS = {
  base: `당신은 '미카닥 박준규'의 전담 콘텐츠 기획자입니다.
브랜드 주체: 미카닥 박준규 (미국 DC·한국 PT, 20년+ 근골격계·움직임 전문가)
현재 소속: 리얼무브먼트 서울 약수점 · 인천 계양(작전)점 대표 원장
※ 목동·병원 임상 근무는 종료. 현재 병원에서 근무하지 않음. 치료 필요 시 병원 연계·병행 안내.
프로그램: Re:Al Movement(P-스트레칭·기능운동·자세교정), 리:얼 페이스(얼굴 교정·작은얼굴), CMT/IFC/Re:Al 전문가 교육
프로필·약력: https://breezefeel.github.io/drpark · https://blog.naver.com/allenjoy/120205433765
${BLOG_CONTENT_VOICE_RULE}
${MEDICAL_COMPLIANCE_RULE}
인스타: @dr.park_dc.pt` + DEFAULT_PSP_CLINICAL_FRAMEWORK,
  categories: {
    0: { // 도수치료
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[도수치료 맥락] PSP·PAR 순서를 환자 언어로: 평가(증상·통증 질)→연부·관절 이해→Passive(P-ROM)→생활습관. problem에 공감·왜 아픈지 가볍게, selfCare는 집에서 할 수 있는 동작.`,
      insta: `캐러셀(여러 장 슬라이드) 없이 **한 포스트 캡션**으로 끝내세요. 첫 줄 후킹에 이어, 본문 캡션 안에 통증→원인→해결 흐름의 **핵심 포인트**를 번호(1. 2.) 또는 • 불릿으로 넣어 한 번에 읽히게 하세요.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    1: { // 리:얼 무브먼트
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[Movement 맥락] P-ROM·PAR·Position 1→2→3을 환자 언어로. '왜 이 동작인지'·호흡·긴장 조절·초·회·분·무리 금지.`,
      insta: `캐러셀 없이 **한 포스트 캡션**에 동작·포인트·주의사항을 단계적으로 적습니다. 마지막에 저장·팔로우 유도 문장을 캡션 끝에 자연스럽게 넣으세요.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    2: { // 리:얼 페이스
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[얼굴·뷰티 맥락] 20~40대 여성 독자. 과학적 근거는 가볍게, 공감과 희망. selfCare는 부담 없는 가벼운 동작·습관.`,
      insta: `캐러셀 없이 **한 포스트 캡션**으로 스토리텔링하세요. "이런 고민 있으신가요?"에 이어 문제→원인→해결→CTA를 캡션 안에서 줄바꿈으로 구분해 읽기 쉽게.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    3: { // CMT 전문가
      blog: DEFAULT_CMT_EXPERT_BLOG_PROMPT,
      insta: DEFAULT_CMT_EXPERT_INSTA_PROMPT,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      threads: DEFAULT_CMT_EXPERT_THREADS_PROMPT
    },
    4: { // IFC 얼굴교육
      blog: DEFAULT_IFC_EXPERT_BLOG_PROMPT,
      insta: DEFAULT_IFC_EXPERT_INSTA_PROMPT,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      threads: DEFAULT_IFC_EXPERT_THREADS_PROMPT
    },
    5: { // Re:Al 움직임 과정
      blog: DEFAULT_REAL_MOVEMENT_EXPERT_BLOG_PROMPT,
      insta: DEFAULT_REAL_MOVEMENT_EXPERT_INSTA_PROMPT,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      threads: DEFAULT_REAL_MOVEMENT_EXPERT_THREADS_PROMPT
    },
    6: { // 일상 공유 (thread JSON만 — 블로그/인스타/이미지 없음)
      thread: DEFAULT_DAILY_SHARE_PROMPT
    },
    7: { // 힐자계 — 아파트너 게시글 + 이미지 프롬프트 2개만 (블로그/인스타 없음)
      community: DEFAULT_HEILJAGYAE_COMMUNITY_PROMPT,
      image: DEFAULT_HEILJAGYAE_IMAGE_PROMPT
    }
  }
};

/** v44 이전 공통 「움직임 전문가」 템플릿 — 저장본이 이 값과 정확히 같을 때만 새 기본값으로 자동 교체 */
const LEGACY_EXPERT_COURSE_PROMPTS = {
  3: {
    blog: buildExpertCourseBlogPrompt_({
      audienceIntro: '물리치료사·트레이너 등 **움직임 전문가**를 독자로 하는',
      roleReaders: 'PT, 트레이너, 움직임에 관심 있는 현장 전문가',
      programBlock: '[CMT 맥락]\n- PSP 용어는 **참고·영상에서 다룬 범위** 안에서만. 무관한 평가·중재 전체 흐름으로 확장 금지\n- 촉진·관절가동술 등 **이번 강의 테크닉** 중심. 짧은 원리 설명은 괜찮으나 별도 케이스·부위로 넓히지 말 것'
    }),
    insta: buildExpertCourseInstaPrompt_({
      roleReaders: 'PT, 트레이너, 움직임 전문가 동료',
      programBlock: '[CMT] 이번 강의·영상의 테크닉·포인트만. PSP는 참고 범위 안에서만.'
    })
  },
  4: {
    blog: buildExpertCourseBlogPrompt_({
      audienceIntro: '물리치료사·트레이너 등 **움직임 전문가**를 독자로 하는',
      roleReaders: 'PT, 트레이너, 움직임에 관심 있는 현장 전문가',
      programBlock: '[IFC 맥락]\n- 구조적 접근은 **참고·영상에서 다룬 범위** 안에서만. 무관한 경추·교합·전신 이야기로 확장 금지\n- 이번 강의·시연의 테크닉·평가 포인트 중심'
    }),
    insta: buildExpertCourseInstaPrompt_({
      roleReaders: 'PT, 트레이너, 움직임 전문가 동료',
      programBlock: '[IFC] 이번 강의·영상의 테크닉·포인트만.'
    })
  },
  5: {
    blog: buildExpertCourseBlogPrompt_({
      audienceIntro: '물리치료사·트레이너 등 **움직임 전문가**를 독자로 하는',
      roleReaders: 'PT, 트레이너, 움직임에 관심 있는 현장 전문가',
      programBlock: '[Re:Al Movement 맥락]\n- Movement·P-A-R 등은 **참고·영상에서 다룬 내용** 안에서만 연결\n- 참고에 없는 평가·운동 처방·다른 부위로 확장 금지'
    }),
    insta: buildExpertCourseInstaPrompt_({
      roleReaders: 'PT, 트레이너, 움직임 전문가 동료',
      programBlock: '[Re:Al] 이번 강의·영상의 테크닉·포인트만.'
    })
  }
};
/** 저장된 공통 기본에 목동·힐링트리 센터 운영 등 구 소속이 남아 있으면 교정 */
function migrateLegacyBaseAffiliationPrompt_(){
  if(!state.prompts) return false;
  var cur = String(state.prompts.base || '');
  if(!cur) return false;
  var hasLegacyPlace =
    /목동/.test(cur) ||
    /힐링트리\s*센터/.test(cur) ||
    (/힐링트리/.test(cur) && /센터\s*운영/.test(cur));
  if(!hasLegacyPlace) return false;
  // 구형 짧은 템플릿(목동·힐링트리 센터 운영 문구 포함)만 통째로 최신 기본값으로
  var looksOldDefaultTemplate =
    /전담 콘텐츠 기획자/.test(cur) &&
    /목동\s*\/\s*인천\s*힐링트리|힐링트리\s*센터\s*운영/.test(cur) &&
    cur.length < 900;
  if(looksOldDefaultTemplate){
    state.prompts.base = DEFAULT_PROMPTS.base;
    return true;
  }
  // 직접 손본 긴 프롬프트는 소속 문구만 치환
  var next = cur
    .replace(/목동\s*\/\s*인천\s*힐링트리\s*센터\s*운영/g, '리얼무브먼트 서울 약수·인천 계양 대표 원장')
    .replace(/목동[^\n,]{0,24}힐링트리[^\n]{0,40}/g, '리얼무브먼트 서울 약수·인천 계양')
    .replace(/힐링트리\s*센터\s*운영/g, '리얼무브먼트 대표 원장(약수·계양)');
  if(next === cur) return false;
  state.prompts.base = next;
  return true;
}
function migrateLegacyExpertCoursePrompts_(){
  if(!state.prompts || !state.prompts.categories) return false;
  var changed = false;
  [3, 4, 5].forEach(function(catId){
    var legacy = LEGACY_EXPERT_COURSE_PROMPTS[catId];
    var defs = DEFAULT_PROMPTS.categories[catId];
    if(!legacy || !defs) return;
    if(!state.prompts.categories[catId]) state.prompts.categories[catId] = {};
    var cat = state.prompts.categories[catId];
    ['blog', 'insta', 'threads'].forEach(function(type){
      if(!defs[type]) return;
      var cur = cat[type];
      if(!cur) return;
      var legacyText = legacy[type];
      if(type === 'threads' && !legacyText){
        legacyText = DEFAULT_THREADS_SNS_PROMPT;
      }
      if(!legacyText) return;
      if(normalizePromptTextForCompare_(cur) !== normalizePromptTextForCompare_(legacyText)) return;
      cat[type] = defs[type];
      changed = true;
    });
  });
  return changed;
}
function migrateUniversalContentFlowPrompts_(){
  if(!state.prompts || !state.prompts.categories) return false;
  var changed = false;
  Object.keys(state.prompts.categories).forEach(function(catId){
    var cat = state.prompts.categories[catId];
    if(!cat || typeof cat !== 'object') return;
    if(cat.blog && String(cat.blog).indexOf('[블로그 공통 완성도 — 주제와 무관하게 적용]') < 0){
      cat.blog = String(cat.blog).trim() + '\n\n' + BLOG_UNIVERSAL_QUALITY_RULE;
      changed = true;
    }
    if(cat.threads && String(cat.threads).indexOf('[Threads 댓글 완성도 보강]') < 0){
      cat.threads = String(cat.threads).trim() + '\n\n' + THREADS_UNIVERSAL_QUALITY_RULE;
      changed = true;
    }
  });
  return changed;
}



function esc(s){ if(!s) return ''; return s.replace(/`/g,"'").replace(/\\/g,'\\\\').replace(/\n/g,'\\n'); }
function escapeHtml(s){
  if(s==null || s===undefined) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function isSheetEditFocused_(){
  var el = document.activeElement;
  return !!(el && el.classList && el.classList.contains('sheet-edit'));
}

var FOCUS_RESTORE_DELAYS_ = [0, 60, 150, 320];

function isEditableTextField_(el){
  if(!el) return false;
  var tag = el.tagName;
  if(tag !== 'TEXTAREA' && tag !== 'INPUT') return false;
  var type = String(el.type || 'text').toLowerCase();
  if(type === 'hidden' || type === 'file' || type === 'checkbox' || type === 'radio' || type === 'button' || type === 'submit') return false;
  if(el.readOnly || el.disabled) return false;
  return true;
}

function captureTextFieldFocus_(){
  var el = document.activeElement;
  if(!isEditableTextField_(el)) return null;
  return {
    id: el.id || '',
    start: typeof el.selectionStart === 'number' ? el.selectionStart : null,
    end: typeof el.selectionEnd === 'number' ? el.selectionEnd : null,
    scrollTop: el.scrollTop
  };
}

function restoreTextFieldFocus_(snap){
  if(!snap || !snap.id) return;
  var el = document.getElementById(snap.id);
  if(!el || !isEditableTextField_(el) || !document.contains(el)) return;
  if(document.activeElement === el) return;

  function attempt(){
    var target = document.getElementById(snap.id);
    if(!target || !isEditableTextField_(target) || !document.contains(target)) return;
    if(document.activeElement === target) return;
    try {
      target.focus({ preventScroll: true });
      if(snap.start != null && typeof target.setSelectionRange === 'function'){
        var len = (target.value || '').length;
        var s = Math.min(snap.start, len);
        var e = Math.min(snap.end != null ? snap.end : s, len);
        target.setSelectionRange(s, e);
      }
      if(snap.scrollTop != null) target.scrollTop = snap.scrollTop;
    } catch(e){}
  }
  FOCUS_RESTORE_DELAYS_.forEach(function(ms){
    if(ms === 0){
      requestAnimationFrame(function(){ requestAnimationFrame(attempt); });
    } else {
      setTimeout(attempt, ms);
    }
  });
}
let appToastTimer = null;
var appToastLiftTimer = null;
var APP_TOAST_GAP = 10;
var APP_TOAST_BASE_BOTTOM = 22;
var _bodyScrollLockY = 0;
var _bodyScrollLockCount = 0;

function lockBodyScroll_() {
  if (_bodyScrollLockCount === 0) {
    _bodyScrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + _bodyScrollLockY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
  _bodyScrollLockCount += 1;
}

function unlockBodyScroll_() {
  if (_bodyScrollLockCount <= 0) return;
  _bodyScrollLockCount -= 1;
  if (_bodyScrollLockCount > 0) return;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  window.scrollTo(0, _bodyScrollLockY);
}

function settleBottomSheet_(el) {
  if (!el) return;
  setTimeout(function () {
    el.classList.add('sheet-settled');
  }, 320);
}

function resetBottomSheet_(el) {
  if (!el) return;
  el.classList.remove('sheet-settled');
}

function getAppToastBottomChromeRects_(){
  var rects = [];
  var sheet = document.getElementById('detail-sheet');
  if(sheet && sheet.classList.contains('open')){
    var actions = document.getElementById('sheet-actions');
    if(actions){
      var ra = actions.getBoundingClientRect();
      if(ra.height > 0 && ra.bottom > (window.innerHeight || 0) * 0.45) rects.push(ra);
    }
  }
  var pmOverlay = document.getElementById('prompt-modal-overlay');
  if(pmOverlay && pmOverlay.classList.contains('open')){
    var pmFooter = pmOverlay.querySelector('.prompt-modal-footer');
    if(pmFooter){
      var rp = pmFooter.getBoundingClientRect();
      if(rp.height > 0) rects.push(rp);
    }
  }
  return rects;
}

function isEditableTextFieldFocused_(){
  return isEditableTextField_(document.activeElement);
}

function updateAppToastLift_(){
  var el = document.getElementById('app-toast');
  if(!el) return;
  if(isEditableTextFieldFocused_()){
    if(!el.classList.contains('show')) el.style.bottom = '';
    return;
  }
  if(!el.classList.contains('show')){
    el.style.bottom = '';
    return;
  }
  var vh = window.innerHeight || document.documentElement.clientHeight || 0;
  var lift = 0;
  var rects = getAppToastBottomChromeRects_();
  for(var i = 0; i < rects.length; i++){
    var chromeFromBottom = vh - rects[i].top + APP_TOAST_GAP;
    if(chromeFromBottom > lift) lift = chromeFromBottom;
  }
  if(lift <= APP_TOAST_BASE_BOTTOM) el.style.bottom = '';
  else el.style.bottom = Math.ceil(lift) + 'px';
}

function scheduleAppToastLift_(){
  if(isEditableTextFieldFocused_()) return;
  if(appToastLiftTimer) clearTimeout(appToastLiftTimer);
  appToastLiftTimer = setTimeout(function(){
    appToastLiftTimer = null;
    if(isEditableTextFieldFocused_()) return;
    updateAppToastLift_();
    requestAnimationFrame(function(){
      if(isEditableTextFieldFocused_()) return;
      updateAppToastLift_();
    });
  }, 48);
}

function setAppToast(message, options) {
  options = options || {};
  var duration = options.duration !== undefined ? options.duration : 4200;
  var variant = options.variant || '';
  var el = document.getElementById('app-toast');
  if (!el) return;
  var focusSnap = captureTextFieldFocus_();
  var wasTyping = !!focusSnap;
  clearTimeout(appToastTimer);
  el.classList.remove('app-toast--ok', 'app-toast--err');
  if (variant === 'ok') el.classList.add('app-toast--ok');
  else if (variant === 'err') el.classList.add('app-toast--err');
  el.textContent = message;
  el.classList.add('show');
  if(!wasTyping) scheduleAppToastLift_();
  else if(focusSnap){
    var lost = document.activeElement !== document.getElementById(focusSnap.id);
    if(lost) restoreTextFieldFocus_(focusSnap);
  }
  if (duration > 0) appToastTimer = setTimeout(function(){
    var hideFocusSnap = captureTextFieldFocus_();
    var hideWasTyping = !!hideFocusSnap;
    el.classList.remove('show');
    if(!hideWasTyping) el.style.bottom = '';
    if(hideFocusSnap && document.activeElement !== document.getElementById(hideFocusSnap.id)){
      restoreTextFieldFocus_(hideFocusSnap);
    }
  }, duration);
}

function getPlannerGasUrl_(){
  try {
    var u = (localStorage.getItem('ht_planner_gas_url') || '').trim();
    if(u) return u;
  } catch(e){}
  return PLANNER_GAS_URL;
}
function ensurePayloadSyncRevision_(payload){
  if(!payload || typeof payload !== 'object') return payload;
  var rev = parseInt(payload.syncRevision, 10);
  if(!isNaN(rev) && rev > 0) return payload;
  if(PLANNER_TEAM_MODE){
    payload.syncRevision = 0;
    return payload;
  }
  var ms = getPayloadSavedMs_(payload);
  payload.syncRevision = ms > 0 ? Math.floor(ms / 1000) : 0;
  return payload;
}
function getPayloadRevision_(payload){
  if(!payload) return 0;
  ensurePayloadSyncRevision_(payload);
  var rev = parseInt(payload.syncRevision, 10);
  if(!isNaN(rev) && rev > 0) return rev;
  if(PLANNER_TEAM_MODE) return 0;
  var ms = getPayloadSavedMs_(payload);
  return ms > 0 ? Math.floor(ms / 1000) : 0;
}
/** true = remote 쪽을 기본으로 (revision·시각 모두 고려) */
function preferRemotePayload_(local, remote){
  if(!remote) return false;
  if(!local) return true;
  var lr = getPayloadRevision_(local);
  var rr = getPayloadRevision_(remote);
  if(rr > lr) return true;
  if(lr > rr) return false;
  return getPayloadSavedMs_(remote) >= getPayloadSavedMs_(local);
}
/** 워크숍 미적용안은 sync dirty가 아니라서, 서버 pull 시 지우면 고정·적용이 먹통이 된다. */
function invalidateStalePendingPlans_(opts){
  opts = opts || {};
  var force = !!opts.force;
  var keepSub = !force && !!(state.pendingSubGoalPlan && isPendingSubGoalPlanDirty_(state.pendingSubGoalPlan.catId));
  var keepYear = !force && !!isPendingYearPlanDirty_();
  if(!keepSub){
    state.pendingSubGoalPlan = null;
    try { sessionStorage.removeItem(PENDING_SUBGOAL_SS_KEY); } catch(e){}
  } else {
    try {
      state.pendingSubGoalPlan.catId = normalizePendingCatId_(state.pendingSubGoalPlan.catId);
      persistPendingSubGoalPlan_();
    } catch(eKeepSub){}
  }
  if(!keepYear){
    state.pendingYearPlan = null;
    try { sessionStorage.removeItem(PENDING_YEAR_SS_KEY); } catch(e2){}
  } else {
    try { persistPendingYearPlan_(); } catch(eKeepYear){}
  }
}
function stampDraftBrandOverride_(draftId, patch){
  if(!draftId) return;
  if(!state.draftBrandOverrides) state.draftBrandOverrides = {};
  var prev = state.draftBrandOverrides[draftId] || {};
  state.draftBrandOverrides[draftId] = Object.assign({}, prev, patch || {}, {
    updatedAt: new Date().toISOString()
  });
}

function cloneSyncValue_(value){
  if(value === undefined) return undefined;
  try { return JSON.parse(JSON.stringify(value)); } catch(e){ return value; }
}
function syncValueFingerprint_(value){
  if(value === undefined) return '__missing__';
  try { return JSON.stringify(value); } catch(e){ return String(value); }
}
function syncPayloadContentFingerprint_(payload){
  var copy = Object.assign({}, payload || {});
  delete copy.apiKey;
  delete copy.savedAt;
  delete copy.localSavedAt;
  delete copy.syncRevision;
  delete copy.syncEntityUpdatedAt;
  delete copy.syncEntityRevisions;
  delete copy.syncEntityTombstones;
  delete copy._syncBaseEntityUpdatedAt;
  delete copy._syncDirty;
  delete copy._syncDirtyEntityKeys;
  delete copy._syncOutbox;
  delete copy._syncNeedsSnapshot;
  try { return JSON.stringify(copy); } catch(e){ return ''; }
}
function syncUntrackedContentFingerprint_(payload){
  var copy = cloneSyncValue_(payload || {}) || {};
  delete copy.prompts;
  delete copy.branding;
  delete copy.extraDraftsByCat;
  delete copy.published;
  delete copy.generatedOnly;
  delete copy.chatgptOpenUrl;
  delete copy.publishRecCurrentTabOnly;
  delete copy.syncRationalesOnBrandSave;
  delete copy.promptRefineMilestones;
  delete copy.deletedDraftIds;
  delete copy.pinnedDraftIds;
  delete copy.draftBrandOverrides;
  delete copy.opsManual;
  delete copy.plannerSetupDismissed;
  delete copy.catGroupLast;
  delete copy.dailyAutoLast;
  delete copy.apiKey;
  delete copy.savedAt;
  delete copy.localSavedAt;
  delete copy.syncRevision;
  delete copy.syncEntityUpdatedAt;
  delete copy.syncEntityRevisions;
  delete copy.syncEntityTombstones;
  delete copy._syncBaseEntityUpdatedAt;
  delete copy._syncDirty;
  delete copy._syncDirtyEntityKeys;
  delete copy._syncOutbox;
  delete copy._syncNeedsSnapshot;
  try { return JSON.stringify(copy); } catch(e){ return ''; }
}
function collectSyncEntities_(payload){
  payload = payload || {};
  ensurePlanRowStableIdsInPayload_(payload);
  var out = {};
  var prompts = payload.prompts || {};
  if(Object.prototype.hasOwnProperty.call(prompts, 'base')) out['prompt:base'] = prompts.base;
  Object.keys(prompts.categories || {}).forEach(function(catId){
    Object.keys(prompts.categories[catId] || {}).forEach(function(type){
      out['prompt:' + catId + ':' + type] = prompts.categories[catId][type];
    });
  });
  var branding = payload.branding || {};
  Object.keys(branding).forEach(function(field){
    if(field === 'yearPlan' || field === 'dailySharePlan' || field === 'subGoalPlans' || field === 'categoryGoals' || field === 'seriesGoals') return;
    out['branding:field:' + field] = branding[field];
  });
  Object.keys(branding.categoryGoals || {}).forEach(function(key){
    out['branding:categoryGoal:' + key] = branding.categoryGoals[key];
  });
  Object.keys(branding.seriesGoals || {}).forEach(function(key){
    out['branding:seriesGoal:' + key] = branding.seriesGoals[key];
  });
  ['chatgptOpenUrl','publishRecCurrentTabOnly','syncRationalesOnBrandSave'].forEach(function(field){
    if(Object.prototype.hasOwnProperty.call(payload, field)) out['setting:' + field] = payload[field];
  });
  Object.keys(payload.promptRefineMilestones || {}).forEach(function(key){
    out['milestone:' + key] = payload.promptRefineMilestones[key];
  });
  Object.keys(payload.deletedDraftIds || {}).forEach(function(id){
    out['deleted:' + id] = payload.deletedDraftIds[id];
  });
  Object.keys(payload.pinnedDraftIds || {}).forEach(function(id){
    out['pinned:' + id] = payload.pinnedDraftIds[id];
  });
  Object.keys(payload.draftBrandOverrides || {}).forEach(function(id){
    out['override:' + id] = payload.draftBrandOverrides[id];
  });
  if(payload.opsManual && (parseInt(state.syncEntitySchemaVersion, 10) || 1) < 2){
    out['ops:root'] = payload.opsManual;
  } else if(payload.opsManual){
    var ops = payload.opsManual;
    if(Object.prototype.hasOwnProperty.call(ops, 'activeBranch') || Object.prototype.hasOwnProperty.call(ops, 'updatedAt')){
      out['ops:meta'] = { activeBranch: ops.activeBranch || 'global', updatedAt: ops.updatedAt || '' };
    }
    Object.keys(ops.checked || {}).forEach(function(key){
      out['ops:checked:' + key] = { value: ops.checked[key], updatedAt: (ops.checkedAt || {})[key] || '' };
    });
    Object.keys(ops.notes || {}).forEach(function(key){
      out['ops:note:' + key] = { value: ops.notes[key], updatedAt: (ops.notesAt || {})[key] || '' };
    });
    ['collapsed','review','newBranchMeta','keywordAds'].forEach(function(field){
      Object.keys(ops[field] || {}).forEach(function(key){
        out['ops:' + field + ':' + key] = ops[field][key];
      });
    });
  }
  if(Object.prototype.hasOwnProperty.call(payload, 'plannerSetupDismissed')) out['setting:plannerSetupDismissed'] = !!payload.plannerSetupDismissed;
  if(payload.catGroupLast) out['setting:catGroupLast'] = payload.catGroupLast;
  if(payload.dailyAutoLast) out['setting:dailyAutoLast'] = payload.dailyAutoLast;
  if(branding.yearPlan){
    var yearMeta = Object.assign({}, branding.yearPlan);
    delete yearMeta.periods;
    out['plan:year:meta'] = yearMeta;
    (branding.yearPlan.periods || []).forEach(function(period, i){
      var periodId = String((period && period.id) || ('yp_mig_' + i));
      out['plan:year:period:' + periodId] = { id: periodId, order: i, index: i, value: period };
    });
  }
  if(branding.dailySharePlan){
    var dailyMeta = Object.assign({}, branding.dailySharePlan);
    delete dailyMeta.themes;
    out['plan:daily:meta'] = dailyMeta;
    (branding.dailySharePlan.themes || []).forEach(function(theme, i){
      var themeId = String((theme && theme.id) || ('theme_' + i));
      out['plan:daily:theme:' + themeId] = { id: themeId, order: i, index: i, value: theme };
    });
  }
  Object.keys(branding.subGoalPlans || {}).forEach(function(catId){
    var plan = branding.subGoalPlans[catId] || {};
    var planMeta = Object.assign({}, plan);
    delete planMeta.steps;
    out['plan:subgoal:' + catId + ':meta'] = planMeta;
    (plan.steps || []).forEach(function(step, i){
      var stepId = String((step && step.id != null) ? step.id : ('st_mig_' + i));
      out['plan:subgoal:' + catId + ':step:' + stepId] = { id: stepId, order: i, index: i, value: step };
    });
  });
  Object.keys(payload.extraDraftsByCat || {}).forEach(function(catId){
    (payload.extraDraftsByCat[catId] || []).forEach(function(draft){
      if(draft && draft.id) out['draft:' + draft.id] = { catId: String(catId), value: draft };
    });
  });
  Object.keys(payload.published || {}).forEach(function(id){
    out['published:' + id] = payload.published[id];
  });
  Object.keys(payload.generatedOnly || {}).forEach(function(id){
    out['generated:' + id] = payload.generatedOnly[id];
  });
  return out;
}
function syncEntityFallbackMs_(key, value, payload){
  var v = value && value.value ? value.value : value;
  return parseIsoMs_(v && (v.updatedAt || v.savedAt || v.createdAt)) ||
    getPayloadSavedMs_(payload) || 0;
}
function ensureSyncEntityTimes_(payload){
  if(!payload || typeof payload !== 'object') return {};
  var times = Object.assign({}, payload.syncEntityUpdatedAt || {});
  var entities = collectSyncEntities_(payload);
  Object.keys(entities).forEach(function(key){
    if(!times[key]){
      var ms = syncEntityFallbackMs_(key, entities[key], payload);
      if(ms) times[key] = new Date(ms).toISOString();
    }
  });
  payload.syncEntityUpdatedAt = times;
  return times;
}
/** 안정 id 키로 배열 행 upsert. order가 있으면 id 기준으로 삽입(숫자 step id를 index로 쓰지 않음). */
function upsertPlanRowByStableKey_(rows, keyPart, wrapped, missing, touchId){
  if(!Array.isArray(rows)) return;
  var key = String(keyPart || '');
  var hasIdMatch = rows.some(function(row){ return row && String(row.id) === key; });
  var hasOrder = !!(wrapped && typeof wrapped.order === 'number');
  // 레거시: 순수 숫자 키 + order 없음 + id 미매칭 → 배열 index.
  // subgoal step id "1","2"는 order와 함께 오므로 id 경로를 써야 함(아니면 rows[1]에 들어가 0번이 비며 유실).
  var legacyIndex = /^\d+$/.test(key) && !hasIdMatch && !hasOrder;
  if(legacyIndex){
    var idx = parseInt(key, 10) || 0;
    if(missing) rows.splice(idx, 1);
    else rows[idx] = cloneSyncValue_(wrapped && wrapped.value);
    return;
  }
  var found = -1;
  var i;
  for(i = 0; i < rows.length; i++){
    if(rows[i] && String(rows[i].id) === key){ found = i; break; }
  }
  if(missing){
    if(found >= 0) rows.splice(found, 1);
    return;
  }
  var row = cloneSyncValue_(wrapped && wrapped.value);
  if(typeof touchId === 'function') row = touchId(row, key);
  else if(row && typeof row === 'object' && !row.id) row.id = key;
  var order = wrapped && typeof wrapped.order === 'number' ? wrapped.order : -1;
  if(found >= 0){
    rows[found] = row;
  } else if(order >= 0 && order <= rows.length){
    rows.splice(order, 0, row);
  } else {
    rows.push(row);
  }
}
function setSyncEntity_(payload, key, wrapped){
  payload = payload || {};
  var parts = String(key).split(':');
  var missing = wrapped === undefined;
  if(parts[0] === 'prompt'){
    if(!payload.prompts) payload.prompts = {};
    if(parts[1] === 'base'){
      if(missing) delete payload.prompts.base;
      else payload.prompts.base = cloneSyncValue_(wrapped);
      return;
    }
    if(!payload.prompts.categories) payload.prompts.categories = {};
    if(!payload.prompts.categories[parts[1]]) payload.prompts.categories[parts[1]] = {};
    if(missing) delete payload.prompts.categories[parts[1]][parts[2]];
    else payload.prompts.categories[parts[1]][parts[2]] = cloneSyncValue_(wrapped);
    return;
  }
  if(parts[0] === 'plan'){
    if(!payload.branding) payload.branding = {};
    if(parts[1] === 'year'){
      if(!payload.branding.yearPlan) payload.branding.yearPlan = {};
      if(parts[2] === 'meta'){
        var yearPeriods = payload.branding.yearPlan.periods || [];
        if(missing) delete payload.branding.yearPlan;
        else payload.branding.yearPlan = Object.assign({}, cloneSyncValue_(wrapped), { periods: yearPeriods });
      } else if(parts[2] === 'period'){
        var periods = (payload.branding.yearPlan.periods || []).slice();
        upsertPlanRowByStableKey_(periods, parts.slice(3).join(':'), wrapped, missing, function(row, id){
          if(row && typeof row === 'object' && !row.id) row.id = id;
          return row;
        });
        payload.branding.yearPlan.periods = periods.filter(function(x){ return x != null; });
      }
    } else if(parts[1] === 'daily'){
      if(!payload.branding.dailySharePlan) payload.branding.dailySharePlan = {};
      if(parts[2] === 'meta'){
        var dailyThemes = payload.branding.dailySharePlan.themes || [];
        if(missing) delete payload.branding.dailySharePlan;
        else payload.branding.dailySharePlan = Object.assign({}, cloneSyncValue_(wrapped), { themes: dailyThemes });
      } else if(parts[2] === 'theme'){
        var themes = (payload.branding.dailySharePlan.themes || []).slice();
        upsertPlanRowByStableKey_(themes, parts.slice(3).join(':'), wrapped, missing, function(row, id){
          if(row && typeof row === 'object' && !row.id) row.id = id;
          return row;
        });
        payload.branding.dailySharePlan.themes = themes.filter(function(x){ return x != null; });
      }
    } else if(parts[1] === 'subgoal'){
      if(!payload.branding.subGoalPlans) payload.branding.subGoalPlans = {};
      var catId = parts[2];
      if(!payload.branding.subGoalPlans[catId]) payload.branding.subGoalPlans[catId] = {};
      if(parts[3] === 'meta'){
        var oldSteps = payload.branding.subGoalPlans[catId].steps || [];
        if(missing) delete payload.branding.subGoalPlans[catId];
        else payload.branding.subGoalPlans[catId] = Object.assign({}, cloneSyncValue_(wrapped), { steps: oldSteps });
      } else if(parts[3] === 'step'){
        var steps = (payload.branding.subGoalPlans[catId].steps || []).slice();
        upsertPlanRowByStableKey_(steps, parts.slice(4).join(':'), wrapped, missing, function(row, id){
          if(row && typeof row === 'object' && (row.id == null || row.id === '')) row.id = id;
          return row;
        });
        payload.branding.subGoalPlans[catId].steps = steps.filter(function(x){ return x != null; });
      }
    }
    return;
  }
  if(parts[0] === 'branding'){
    if(!payload.branding) payload.branding = {};
    if(parts[1] === 'field'){
      if(missing) delete payload.branding[parts.slice(2).join(':')];
      else payload.branding[parts.slice(2).join(':')] = cloneSyncValue_(wrapped);
    } else {
      var mapName = parts[1] === 'categoryGoal' ? 'categoryGoals' : 'seriesGoals';
      if(!payload.branding[mapName]) payload.branding[mapName] = {};
      var brandKey = parts.slice(2).join(':');
      if(missing) delete payload.branding[mapName][brandKey];
      else payload.branding[mapName][brandKey] = cloneSyncValue_(wrapped);
    }
    return;
  }
  if(parts[0] === 'setting'){
    var settingKey = parts.slice(1).join(':');
    if(missing) delete payload[settingKey];
    else payload[settingKey] = cloneSyncValue_(wrapped);
    return;
  }
  if(parts[0] === 'milestone' || parts[0] === 'deleted' || parts[0] === 'pinned' || parts[0] === 'override'){
    var mapByType = {
      milestone: 'promptRefineMilestones',
      deleted: 'deletedDraftIds',
      pinned: 'pinnedDraftIds',
      override: 'draftBrandOverrides'
    };
    var payloadMap = mapByType[parts[0]];
    if(!payload[payloadMap]) payload[payloadMap] = {};
    var mapKey = parts.slice(1).join(':');
    if(missing) delete payload[payloadMap][mapKey];
    else payload[payloadMap][mapKey] = cloneSyncValue_(wrapped);
    return;
  }
  if(parts[0] === 'ops'){
    if(parts[1] === 'root'){
      if(missing) delete payload.opsManual;
      else payload.opsManual = cloneSyncValue_(wrapped);
      return;
    }
    if(!payload.opsManual) payload.opsManual = {};
    var opsKey = parts.slice(2).join(':');
    if(parts[1] === 'meta'){
      if(missing){
        delete payload.opsManual.activeBranch;
        delete payload.opsManual.updatedAt;
      } else {
        payload.opsManual.activeBranch = wrapped.activeBranch || 'global';
        payload.opsManual.updatedAt = wrapped.updatedAt || '';
      }
    } else if(parts[1] === 'checked' || parts[1] === 'note'){
      var valueMap = parts[1] === 'checked' ? 'checked' : 'notes';
      var timeMap = parts[1] === 'checked' ? 'checkedAt' : 'notesAt';
      if(!payload.opsManual[valueMap]) payload.opsManual[valueMap] = {};
      if(!payload.opsManual[timeMap]) payload.opsManual[timeMap] = {};
      if(missing){
        delete payload.opsManual[valueMap][opsKey];
        delete payload.opsManual[timeMap][opsKey];
      } else {
        payload.opsManual[valueMap][opsKey] = cloneSyncValue_(wrapped.value);
        payload.opsManual[timeMap][opsKey] = wrapped.updatedAt || '';
      }
    } else {
      var opsField = parts[1];
      if(!payload.opsManual[opsField]) payload.opsManual[opsField] = {};
      if(missing) delete payload.opsManual[opsField][opsKey];
      else payload.opsManual[opsField][opsKey] = cloneSyncValue_(wrapped);
    }
    return;
  }
  if(parts[0] === 'draft'){
    var draftId = parts.slice(1).join(':');
    if(!payload.extraDraftsByCat) payload.extraDraftsByCat = {};
    Object.keys(payload.extraDraftsByCat).forEach(function(catId){
      payload.extraDraftsByCat[catId] = (payload.extraDraftsByCat[catId] || []).filter(function(d){ return d && d.id !== draftId; });
    });
    if(!missing && wrapped && wrapped.value){
      var cat = String(wrapped.catId);
      if(!payload.extraDraftsByCat[cat]) payload.extraDraftsByCat[cat] = [];
      payload.extraDraftsByCat[cat].push(cloneSyncValue_(wrapped.value));
    }
    return;
  }
  var id = parts.slice(1).join(':');
  if(parts[0] === 'published'){
    if(!payload.published) payload.published = {};
    if(missing) delete payload.published[id];
    else payload.published[id] = cloneSyncValue_(wrapped);
  } else if(parts[0] === 'generated'){
    if(!payload.generatedOnly) payload.generatedOnly = {};
    if(missing) delete payload.generatedOnly[id];
    else payload.generatedOnly[id] = cloneSyncValue_(wrapped);
  }
}
function listChangedSyncEntityKeys_(previousPayload, currentPayload){
  var prevEntities = collectSyncEntities_(previousPayload || {});
  var nextEntities = collectSyncEntities_(currentPayload || {});
  var keys = {};
  Object.keys(prevEntities).forEach(function(k){ keys[k] = true; });
  Object.keys(nextEntities).forEach(function(k){ keys[k] = true; });
  var changed = [];
  Object.keys(keys).forEach(function(key){
    if(syncValueFingerprint_(prevEntities[key]) !== syncValueFingerprint_(nextEntities[key])){
      changed.push(key);
    }
  });
  return changed;
}
function stampChangedSyncEntities_(previousPayload, currentPayload){
  var times = Object.assign({}, state.syncEntityUpdatedAt || {}, (previousPayload && previousPayload.syncEntityUpdatedAt) || {});
  var now = new Date().toISOString();
  var changed = listChangedSyncEntityKeys_(previousPayload, currentPayload);
  changed.forEach(function(key){ times[key] = now; });
  state.syncEntityUpdatedAt = times;
  return changed;
}
function hasPendingLocalSyncChanges_(){
  if(state.syncNeedsSnapshot) return true;
  if(state.syncDirty) return true;
  if((state.syncOutbox || []).length) return true;
  if(Object.keys(state.syncDirtyEntityKeys || {}).length) return true;
  return false;
}
/** 로컬 미업로드 수정이 없을 때 — GAS를 기준본으로 채택 */
function adoptServerPayloadAuthoritatively_(remotePayload, remoteRevision){
  try { invalidateStalePendingPlans_(); } catch(eInv){}
  applyPersistPayload(remotePayload || {}, {
    skipRestorePending: true,
    replaceDeletedDraftIds: true,
    authoritativeAdopt: true
  });
  state.syncRevision = parseInt(remoteRevision, 10) || getPayloadRevision_(remotePayload);
  state.syncEntityRevisions = ensureSyncEntityRevisions_(remotePayload || {});
  state.syncEntityTombstones = Object.assign({}, (remotePayload && remotePayload.syncEntityTombstones) || {});
  state.syncEntityUpdatedAt = Object.assign({}, (remotePayload && remotePayload.syncEntityUpdatedAt) || {});
  state.syncBaseEntityUpdatedAt = Object.assign({}, (remotePayload && remotePayload.syncEntityUpdatedAt) || {});
  state.syncDirty = false;
  state.syncDirtyEntityKeys = {};
  state.syncNeedsSnapshot = false;
  state.syncOutbox = [];
  // adopt 중 마이그레이션이 내용을 바꿨으면 이후 patch/snapshot으로 올리도록 dirty 복구
  if(state._postAdoptMigration){
    state.syncDirty = true;
    state.syncNeedsSnapshot = true;
    state._postAdoptMigration = false;
  }
}
/**
 * GAS 기준 + 로컬 dirty 예외.
 * @returns {'adopted'|'merged'|'conflict'|'noop'}
 */
function reconcileLocalWithServerPayload_(localPayload, remotePayload, remoteRevision){
  remoteRevision = parseInt(remoteRevision, 10) || getPayloadRevision_(remotePayload);
  ensureOutboxFromLegacyDirty_(localPayload || getPersistPayload());
  if(!hasPendingLocalSyncChanges_()){
    adoptServerPayloadAuthoritatively_(remotePayload, remoteRevision);
    return 'adopted';
  }
  // 미업로드 로컬 수정 있음 → 겹친 항목만 충돌 UI, 없으면 outbox 보존 병합
  if(openPlannerConflict_(localPayload || getPersistPayload(), remotePayload, remoteRevision)){
    return 'conflict';
  }
  applyServerPayloadPreservingOutbox_(remotePayload, remoteRevision);
  return 'merged';
}
function mergeTrackedSyncEntities_(out, local, remote, preferRemote){
  var lEntities = collectSyncEntities_(local);
  var rEntities = collectSyncEntities_(remote);
  var lTimes = ensureSyncEntityTimes_(local);
  var rTimes = ensureSyncEntityTimes_(remote);
  var mergedTimes = {};
  var keys = {};
  Object.keys(lEntities).concat(Object.keys(rEntities), Object.keys(lTimes), Object.keys(rTimes)).forEach(function(k){ keys[k] = true; });
  Object.keys(keys).sort(compareSyncEntityKeysForApply_).forEach(function(key){
    var lm = parseIsoMs_(lTimes[key]);
    var rm = parseIsoMs_(rTimes[key]);
    var lVal = lEntities[key];
    var rVal = rEntities[key];
    var pickRemote = rm > lm || (rm === lm && preferRemote);
    // 생성·발행 초안: 로컬 본문 vs 서버 빈값이면 시각과 무관하게 로컬 유지
    if((key.indexOf('generated:') === 0 || key.indexOf('published:') === 0) &&
      hasUsableAiDraftContent_(unwrapSyncEntityValue_(lVal)) &&
      !hasUsableAiDraftContent_(unwrapSyncEntityValue_(rVal))){
      pickRemote = false;
    }
    // 로컬만 있는 추가분은 서버가 없다고 지우지 않음
    if(lVal !== undefined && rVal === undefined) pickRemote = false;
    if(lVal === undefined && rVal !== undefined) pickRemote = true;
    var chosen = pickRemote ? rVal : lVal;
    setSyncEntity_(out, key, chosen);
    var chosenAt = pickRemote ? rTimes[key] : lTimes[key];
    if(chosenAt) mergedTimes[key] = chosenAt;
  });
  out.syncEntityUpdatedAt = mergedTimes;
  return out;
}
function indexedPlanEntityForApply_(key){
  key = String(key || '');
  var m = key.match(/^plan:year:(?:period:(\d+)|(meta))$/);
  if(m) return { group: 'plan:year', index: m[2] ? -1 : parseInt(m[1], 10) };
  m = key.match(/^plan:daily:(?:theme:(\d+)|(meta))$/);
  if(m) return { group: 'plan:daily', index: m[2] ? -1 : parseInt(m[1], 10) };
  m = key.match(/^plan:subgoal:([^:]+):(?:step:([^:]+)|(meta))$/);
  if(m){
    var stepNum = parseInt(String(m[2] || '').replace(/\D/g, ''), 10);
    return { group: 'plan:subgoal:' + m[1], index: m[3] ? -1 : (isNaN(stepNum) ? 0 : stepNum) };
  }
  return null;
}
function compareSyncEntityKeysForApply_(a, b){
  var left = indexedPlanEntityForApply_(a);
  var right = indexedPlanEntityForApply_(b);
  if(left && right && left.group === right.group) return right.index - left.index;
  return 0;
}
function hasUsableAiDraftContent_(val){
  if(!val || typeof val !== 'object') return false;
  var c = val.content || val;
  if(!c || typeof c !== 'object') return false;
  var blog = c.blog;
  if(blog && typeof blog === 'object'){
    if(blog.title || blog.draft || blog.problem || blog.selfCare || blog.explanation ||
      blog.hook || blog.cta || (blog.outline && blog.outline.length)) return true;
  }
  if(c.thread && (c.thread.summary || c.thread.topicTitle)) return true;
  if(c.community && (c.community.title || c.community.problem || c.community.selfCare ||
    c.community.explanation || c.community.empathy)) return true;
  if(c.insta && (c.insta.caption || c.insta.text)) return true;
  if(c.threads && (c.threads.text || c.threads.body)) return true;
  if(c.images && c.images.gptVisuals && c.images.gptVisuals.length) return true;
  return false;
}
function unwrapSyncEntityValue_(wrapped){
  if(wrapped === undefined) return undefined;
  return (wrapped && Object.prototype.hasOwnProperty.call(wrapped, 'value') && wrapped.value !== undefined)
    ? wrapped.value
    : wrapped;
}
/** 한쪽만 추가된 키·로컬 생성 초안(서버에 본문 없음)은 충돌 UI 없이 병합 */
function shouldSkipPlannerConflict_(key, localVal, remoteVal){
  key = String(key || '');
  var l = unwrapSyncEntityValue_(localVal);
  var r = unwrapSyncEntityValue_(remoteVal);
  // 순수 추가: 한쪽만 있으면 충돌 아님 (합치면 됨)
  if(l !== undefined && r === undefined) return true;
  if(l === undefined && r !== undefined) return true;
  // 생성·발행 초안: 로컬에 본문 있고 서버가 비어 있으면 로컬 유지 (서버 선택으로 유실 방지)
  if(key.indexOf('generated:') === 0 || key.indexOf('published:') === 0){
    if(hasUsableAiDraftContent_(l) && !hasUsableAiDraftContent_(r)) return true;
  }
  return false;
}
function detectPlannerEntityConflicts_(local, remote){
  var base = state.syncBaseEntityUpdatedAt || {};
  var lTimes = ensureSyncEntityTimes_(local);
  var rTimes = ensureSyncEntityTimes_(remote);
  var lEntities = collectSyncEntities_(local);
  var rEntities = collectSyncEntities_(remote);
  var conflicts = [];
  var baseEmpty = !Object.keys(base).length;
  // base 맵이 비어 있으면 예전엔 무음 LWW였음 → dirty 키와 원격이 다르면 충돌로 올려 유실 방지
  if(baseEmpty){
    if(!state.syncDirty) return [];
    var dirtyKeys = state.syncDirtyEntityKeys || {};
    var keysToCheck = Object.keys(dirtyKeys);
    if(!keysToCheck.length && state.syncNeedsSnapshot){
      var allKeys = {};
      Object.keys(lEntities).concat(Object.keys(rEntities)).forEach(function(k){ allKeys[k] = true; });
      keysToCheck = Object.keys(allKeys);
    }
    keysToCheck.forEach(function(key){
      if(shouldSkipPlannerConflict_(key, lEntities[key], rEntities[key])) return;
      if(syncValueFingerprint_(lEntities[key]) === syncValueFingerprint_(rEntities[key])) return;
      conflicts.push({
        key: key,
        local: lEntities[key],
        remote: rEntities[key],
        localAt: lTimes[key] || '',
        remoteAt: rTimes[key] || ''
      });
    });
    return conflicts;
  }
  var keys = {};
  Object.keys(lTimes).concat(Object.keys(rTimes)).forEach(function(k){ keys[k] = true; });
  Object.keys(keys).forEach(function(key){
    var bt = parseIsoMs_(base[key]);
    var lt = parseIsoMs_(lTimes[key]);
    var rt = parseIsoMs_(rTimes[key]);
    var localChanged = lt > bt;
    var remoteChanged = rt > bt;
    if(!(localChanged && remoteChanged)) return;
    if(shouldSkipPlannerConflict_(key, lEntities[key], rEntities[key])) return;
    if(syncValueFingerprint_(lEntities[key]) === syncValueFingerprint_(rEntities[key])) return;
    conflicts.push({ key: key, local: lEntities[key], remote: rEntities[key], localAt: lTimes[key] || '', remoteAt: rTimes[key] || '' });
  });
  return conflicts;
}
function plannerConflictLabel_(key){
  var p = String(key).split(':');
  if(p[0] === 'prompt') return p[1] === 'base' ? '공통 프롬프트' : '카테고리 ' + p[1] + ' · ' + p[2] + ' 프롬프트';
  if(p[0] === 'plan'){
    if(p[1] === 'year') return p[2] === 'period' ? '연간 기획 · ' + (parseInt(p[3], 10) + 1) + '분기' : '연간 기획 기본 설정';
    if(p[1] === 'daily') return p[2] === 'theme' ? '일상 공유 · 항목 ' + (parseInt(p[3], 10) + 1) : '일상 공유 기본 설정';
    return p[3] === 'step' ? '카테고리 ' + p[2] + ' · 단계 ' + (parseInt(p[4], 10) + 1) : '카테고리 ' + p[2] + ' 기획 설정';
  }
  if(p[0] === 'draft') return '주제 · ' + p.slice(1).join(':');
  if(p[0] === 'published') return '발행 글 · ' + p.slice(1).join(':');
  if(p[0] === 'generated') return '생성 초안 · ' + p.slice(1).join(':');
  if(p[0] === 'branding') return '브랜딩 설정 · ' + p.slice(2).join(':');
  if(p[0] === 'setting') return '플래너 설정 · ' + p.slice(1).join(':');
  if(p[0] === 'deleted') return '삭제 기록 · ' + p.slice(1).join(':');
  if(p[0] === 'pinned') return '고정 주제 · ' + p.slice(1).join(':');
  if(p[0] === 'override') return '주제 수정값 · ' + p.slice(1).join(':');
  if(p[0] === 'ops') return '운영 매뉴얼';
  if(p[0] === 'milestone') return '프롬프트 개선 기록 · ' + p.slice(1).join(':');
  return key;
}
function plannerConflictPreview_(wrapped){
  if(wrapped === undefined) return '(삭제됨)';
  var value = wrapped && wrapped.value ? wrapped.value : wrapped;
  if(typeof value === 'string') return value.slice(0, 100);
  if(value && value.topic) return String(value.topic).slice(0, 100);
  if(value && value.title) return String(value.title).slice(0, 100);
  try { return JSON.stringify(value).slice(0, 100); } catch(e){ return '(내용 있음)'; }
}

function getPersistPayload(){
  var dailyLast = '';
  try { dailyLast = localStorage.getItem('ht_daily_auto_last') || ''; } catch(e0){}
  var payload = {
    published: state.published,
    generatedOnly: state.generatedOnly,
    localSavedAt: state.localSavedAt,
    syncRevision: state.syncRevision || 0,
    syncEntityUpdatedAt: state.syncEntityUpdatedAt || {},
    syncEntityRevisions: state.syncEntityRevisions || {},
    syncEntityTombstones: state.syncEntityTombstones || {},
    chatgptOpenUrl: state.chatgptOpenUrl,
    prompts: state.prompts,
    promptRefineMilestones: state.promptRefineMilestones || {},
    dailyAutoLast: dailyLast
  };
  if(state.branding) payload.branding = state.branding;
  payload.publishRecCurrentTabOnly = !!state.publishRecCurrentTabOnly;
  payload.syncRationalesOnBrandSave = state.syncRationalesOnBrandSave !== false;
  if(state.draftBrandOverrides && Object.keys(state.draftBrandOverrides).length){
    payload.draftBrandOverrides = state.draftBrandOverrides;
  }
  payload.extraDraftsByCat = collectExtraDrafts();
  if(state.deletedDraftIds && Object.keys(state.deletedDraftIds).length){
    payload.deletedDraftIds = state.deletedDraftIds;
  }
  if(state.pinnedDraftIds && Object.keys(state.pinnedDraftIds).length){
    payload.pinnedDraftIds = state.pinnedDraftIds;
  }
  if(state.plannerSetupDismissed) payload.plannerSetupDismissed = true;
  if(state.opsManual) payload.opsManual = state.opsManual;
  if(state.catGroupLast) payload.catGroupLast = state.catGroupLast;
  return payload;
}
function getLocalStoragePayload(){
  return Object.assign({}, getPersistPayload(), {
    apiKey: state.apiKey === '__server__' ? '' : (state.apiKey || ''),
    _syncBaseEntityUpdatedAt: state.syncBaseEntityUpdatedAt || {},
    _syncDirty: !!state.syncDirty,
    _syncDirtyEntityKeys: state.syncDirtyEntityKeys || {},
    _syncOutbox: state.syncOutbox || [],
    _syncNeedsSnapshot: !!state.syncNeedsSnapshot
  });
}
function makePlannerMutationId_(){
  return getPlannerDeviceId_() + ':' + Date.now().toString(36) + ':' + Math.random().toString(36).slice(2, 9);
}
function ensureSyncEntityRevisions_(payload){
  payload = payload || {};
  var revisions = Object.assign({}, payload.syncEntityRevisions || {});
  var fallbackRevision = parseInt(payload.syncRevision, 10) || 0;
  var entities = collectSyncEntities_(payload);
  Object.keys(entities).forEach(function(key){
    if(revisions[key] == null) revisions[key] = fallbackRevision;
  });
  Object.keys(payload.syncEntityTombstones || {}).forEach(function(key){
    if(revisions[key] == null){
      revisions[key] = parseInt(payload.syncEntityTombstones[key].revision, 10) || fallbackRevision;
    }
  });
  return revisions;
}
function rebuildDirtyStateFromOutbox_(){
  var keys = {};
  (state.syncOutbox || []).forEach(function(op){ if(op && op.key) keys[op.key] = true; });
  state.syncDirtyEntityKeys = keys;
  state.syncDirty = Object.keys(keys).length > 0 || !!state.syncNeedsSnapshot;
}
function isValidClientSyncEntityKey_(key){
  key = String(key || '');
  return key === 'prompt:base' ||
    /^prompt:\d+:[^:]+$/.test(key) ||
    /^plan:year:meta$/.test(key) ||
    /^plan:year:period:[A-Za-z0-9_-]+$/.test(key) ||
    /^plan:daily:meta$/.test(key) ||
    /^plan:daily:theme:[A-Za-z0-9_-]+$/.test(key) ||
    /^plan:subgoal:\d+:meta$/.test(key) ||
    /^plan:subgoal:\d+:step:[A-Za-z0-9_.-]+$/.test(key) ||
    /^branding:(?:field|categoryGoal|seriesGoal):.+$/.test(key) ||
    /^setting:.+$/.test(key) ||
    /^(?:milestone|deleted|pinned|override|draft|published|generated):.+$/.test(key) ||
    key === 'ops:root' ||
    key === 'ops:meta' ||
    /^ops:(?:checked|note|collapsed|review|newBranchMeta|keywordAds):.+$/.test(key);
}
function normalizeSyncOutbox_(raw){
  var byKey = {};
  (Array.isArray(raw) ? raw : []).forEach(function(item){
    if(!item || typeof item !== 'object' || !isValidClientSyncEntityKey_(item.key)){
      state.syncNeedsSnapshot = true;
      return;
    }
    var key = String(item.key);
    var previous = byKey[key];
    var normalized = {
      mutationId: String(item.mutationId || makePlannerMutationId_()),
      version: Math.max(1, parseInt(item.version, 10) || 1),
      key: key,
      value: item.deleted ? null : cloneSyncValue_(item.value),
      deleted: !!item.deleted,
      baseEntityRevision: Math.max(0, parseInt(item.baseEntityRevision, 10) || 0),
      updatedAt: String(item.updatedAt || new Date().toISOString())
    };
    if(previous){
      normalized.baseEntityRevision = previous.baseEntityRevision;
      if(!item.mutationId) normalized.mutationId = previous.mutationId;
      normalized.version = Math.max(previous.version + 1, normalized.version);
    }
    byKey[key] = normalized;
  });
  return Object.keys(byKey).map(function(key){ return byKey[key]; });
}
function enqueueSyncOutboxChanges_(changedKeys, payload){
  if(!changedKeys || !changedKeys.length) return;
  var entities = collectSyncEntities_(payload || {});
  var times = (payload && payload.syncEntityUpdatedAt) || {};
  var revisions = Object.assign({}, state.syncEntityRevisions || {}, ensureSyncEntityRevisions_(payload));
  if(!Array.isArray(state.syncOutbox)) state.syncOutbox = [];
  changedKeys.forEach(function(key){
    var hasValue = Object.prototype.hasOwnProperty.call(entities, key);
    var existing = state.syncOutbox.find(function(op){ return op && op.key === key; });
    if(existing){
      existing.value = hasValue ? cloneSyncValue_(entities[key]) : null;
      existing.deleted = !hasValue;
      existing.updatedAt = times[key] || new Date().toISOString();
      existing.version = (parseInt(existing.version, 10) || 1) + 1;
    } else {
      state.syncOutbox.push({
        mutationId: makePlannerMutationId_(),
        version: 1,
        key: key,
        value: hasValue ? cloneSyncValue_(entities[key]) : null,
        deleted: !hasValue,
        baseEntityRevision: parseInt(revisions[key], 10) || 0,
        updatedAt: times[key] || new Date().toISOString()
      });
    }
  });
  rebuildDirtyStateFromOutbox_();
}
function ensureOutboxFromLegacyDirty_(payload){
  state.syncOutbox = normalizeSyncOutbox_(state.syncOutbox);
  if(Array.isArray(state.syncOutbox) && state.syncOutbox.length) return;
  var keys = Object.keys(state.syncDirtyEntityKeys || {});
  if(keys.length) enqueueSyncOutboxChanges_(keys, payload || getPersistPayload());
  else if(state.syncDirty) state.syncNeedsSnapshot = true;
}
var SYNC_OUTBOX_PATCH_BATCH_ = 200;
function buildPendingSyncMutations_(payload){
  ensureOutboxFromLegacyDirty_(payload);
  migrateIndexedPlanEntityKeysInPayload_(payload || {}, state.syncOutbox);
  var sorted = (state.syncOutbox || []).slice().sort(function(a, b){
    return compareSyncEntityKeysForApply_(a && a.key, b && b.key);
  });
  return sorted.slice(0, SYNC_OUTBOX_PATCH_BATCH_).map(function(op){
    return {
      mutationId: op.mutationId,
      version: parseInt(op.version, 10) || 1,
      key: op.key,
      value: op.deleted ? null : cloneSyncValue_(op.value),
      deleted: !!op.deleted,
      baseEntityRevision: parseInt(op.baseEntityRevision, 10) || 0,
      updatedAt: op.updatedAt || new Date().toISOString()
    };
  });
}
function acknowledgeSyncOutbox_(accepted, sentMutations){
  var ack = {};
  (accepted || []).forEach(function(item){
    if(item && item.mutationId) ack[item.mutationId] = parseInt(item.version, 10) || 1;
  });
  if(!accepted && sentMutations){
    sentMutations.forEach(function(item){ if(item && item.mutationId) ack[item.mutationId] = parseInt(item.version, 10) || 1; });
  }
  state.syncOutbox = (state.syncOutbox || []).filter(function(op){
    if(!op || !op.mutationId) return true;
    return !ack[op.mutationId] || (parseInt(op.version, 10) || 1) !== ack[op.mutationId];
  });
  rebuildDirtyStateFromOutbox_();
}
function overlayOutboxOnPayload_(payload){
  var out = cloneSyncValue_(payload || {}) || {};
  (state.syncOutbox || []).slice().sort(function(a, b){
    return compareSyncEntityKeysForApply_(a && a.key, b && b.key);
  }).forEach(function(op){
    if(!op || !op.key) return;
    setSyncEntity_(out, op.key, op.deleted ? undefined : cloneSyncValue_(op.value));
    if(!out.syncEntityUpdatedAt) out.syncEntityUpdatedAt = {};
    out.syncEntityUpdatedAt[op.key] = op.updatedAt || new Date().toISOString();
  });
  return out;
}
function applyServerPayloadPreservingOutbox_(serverPayload, serverRevision){
  var local = getPersistPayload();
  var merged = mergePlannerPayloads_(local, serverPayload || {});
  merged = overlayOutboxOnPayload_(merged);
  applyPersistPayload(merged, { skipRestorePending: true });
  state.syncRevision = parseInt(serverRevision, 10) || getPayloadRevision_(serverPayload);
  state.syncEntityRevisions = ensureSyncEntityRevisions_(serverPayload || {});
  state.syncEntityTombstones = Object.assign({}, (serverPayload && serverPayload.syncEntityTombstones) || {});
  state.syncEntityUpdatedAt = Object.assign({}, merged.syncEntityUpdatedAt || {});
  state.syncBaseEntityUpdatedAt = Object.assign({}, (serverPayload && serverPayload.syncEntityUpdatedAt) || {});
  rebuildDirtyStateFromOutbox_();
}
function schedulePlannerGasPush_(immediate){
  if(!plannerSyncBootstrapReady_ || plannerSyncConflictPending_) return;
  if(!getPlannerGasUrl_() || location.protocol === 'file:') return;
  if(plannerGasRetryTimer_){
    clearTimeout(plannerGasRetryTimer_);
    plannerGasRetryTimer_ = null;
  }
  clearTimeout(plannerGasPushTimer);
  plannerGasPushTimer = null;
  var run = function(){
    plannerGasPushTimer = null;
    plannerGasPushNow_().catch(function(err){ console.warn('[서버 동기화]', err); });
  };
  if(immediate) run();
  else plannerGasPushTimer = setTimeout(run, 2500);
}
function clearPlannerGasRetry_(){
  if(plannerGasRetryTimer_) clearTimeout(plannerGasRetryTimer_);
  plannerGasRetryTimer_ = null;
  plannerGasRetryCount_ = 0;
  plannerLastSyncError_ = '';
}
function schedulePlannerGasRetry_(error){
  if(!state.syncDirty || !plannerSyncBootstrapReady_ || plannerSyncConflictPending_) return;
  if(typeof navigator !== 'undefined' && navigator.onLine === false) return;
  if(plannerGasRetryTimer_) return;
  plannerGasRetryCount_++;
  plannerLastSyncError_ = String((error && error.message) || error || '서버 동기화 실패');
  var delay = Math.min(5 * 60 * 1000, 3000 * Math.pow(2, Math.min(plannerGasRetryCount_ - 1, 6)));
  plannerGasRetryTimer_ = setTimeout(function(){
    plannerGasRetryTimer_ = null;
    plannerGasPushNow_().catch(function(err){ console.warn('[서버 동기화 재시도]', err); });
  }, delay);
  updateSyncStatusUI_();
}
async function plannerPullRemoteIntoStateCore_(){
  var body = getPersistPayload();
  var fpBefore = plannerSyncFingerprint_(body);
  var remote = null;
  var remoteRevision = 0;

  var url = getPlannerGasUrl_();
  if(url && location.protocol !== 'file:'){
    try {
      var pullData = await plannerGasJsonRequest_({ action: 'plannerSyncPull' }, 20000);
      applyPlannerServerCaps_(pullData, true);
      if(pullData.result === 'success' && pullData.payload){
        remote = pullData.payload;
        remoteRevision = parseInt(pullData.serverRevision, 10) || getPayloadRevision_(remote);
      }
    } catch(pullErr){
      console.warn('[서버 동기화 pull]', pullErr);
    }
  }

  if(!PLANNER_TEAM_MODE && hasDriveValidToken_()){
    try {
      var token = await getDriveAccessToken({ forcePrompt: false });
      var out = await driveDownloadCloudPayload_(token);
      if(out.data && !remote){
        remote = out.data;
      }
    } catch(driveErr){
      console.warn('[Drive 동기화 pull]', driveErr);
    }
  }

  if(!remote) return false;
  if(state.syncDirty && remoteRevision !== (parseInt(state.syncRevision, 10) || 0)){
    if((state.syncOutbox || []).length){
      applyServerPayloadPreservingOutbox_(remote, remoteRevision);
      return true;
    }
    return reconcileRemoteBeforeWrite_(body, remote, remoteRevision);
  }
  var merged = mergePlannerPayloads_(body, remote);
  if(plannerSyncFingerprint_(body) === plannerSyncFingerprint_(merged)){
    state.syncRevision = remoteRevision || getPayloadRevision_(remote);
    state.syncEntityRevisions = ensureSyncEntityRevisions_(remote);
    state.syncEntityTombstones = Object.assign({}, remote.syncEntityTombstones || {});
    state.syncBaseEntityUpdatedAt = Object.assign({}, remote.syncEntityUpdatedAt || {});
    return false;
  }
  var remoteWins = preferRemotePayload_(body, remote);
  if(remoteWins) invalidateStalePendingPlans_();
  applyPersistPayload(merged, { skipRestorePending: remoteWins });
  state.syncRevision = remoteRevision || getPayloadRevision_(merged);
  state.syncEntityRevisions = ensureSyncEntityRevisions_(remote);
  state.syncEntityTombstones = Object.assign({}, remote.syncEntityTombstones || {});
  state.syncBaseEntityUpdatedAt = Object.assign({}, state.syncDirty ? (remote.syncEntityUpdatedAt || {}) : (merged.syncEntityUpdatedAt || {}));
  return true;
}
async function plannerPullRemoteIntoState_(){
  return withPlannerSyncMutex_(function(){ return plannerPullRemoteIntoStateCore_(); });
}
async function plannerGasPushNow_(){
  var url = getPlannerGasUrl_();
  if(!url || !plannerSyncBootstrapReady_ || plannerSyncConflictPending_) return { ok: false, skipped: true };
  return withPlannerSyncMutex_(async function(){
  try {
    await plannerPullRemoteIntoStateCore_();
    if(plannerSyncConflictPending_) return { ok: false, conflict: true };
    if(!state.syncDirty) return { ok: true, skipped: true };
    var body = getPersistPayload();
    body.savedAt = new Date().toISOString();
    ensurePlanRowStableIdsInPayload_(body);
    migrateIndexedPlanEntityKeysInPayload_(body, state.syncOutbox);
    var mutations = buildPendingSyncMutations_(body);
    var requestDirtyGeneration = plannerDirtyGeneration_;
    var usePatch = mutations.length > 0 && !state.syncNeedsSnapshot && state.syncProtocolVersion >= 2;
    var maxPatchRounds = usePatch ? 8 : 1;
    var round = 0;
    var lastOkRevision = state.syncRevision;
    while(round < maxPatchRounds){
      round++;
      if(round > 1){
        if(plannerSyncConflictPending_ || !state.syncDirty) break;
        body = getPersistPayload();
        body.savedAt = new Date().toISOString();
        ensurePlanRowStableIdsInPayload_(body);
        migrateIndexedPlanEntityKeysInPayload_(body, state.syncOutbox);
        mutations = buildPendingSyncMutations_(body);
        if(!mutations.length || state.syncNeedsSnapshot || state.syncProtocolVersion < 2) break;
        if((state.syncOutbox || []).length > SYNC_OUTBOX_PATCH_BATCH_ && typeof setAppToast === 'function'){
          setAppToast(
            '대량 변경을 나눠 저장 중이에요. 남은 ' +
              Math.max(0, (state.syncOutbox || []).length - mutations.length) +
              '건…',
            { duration: 2800, variant: 'ok' }
          );
        }
      }
    var requestPayload = usePatch
      ? {
          action: 'plannerSyncPatch',
          protocolVersion: 2,
          mutations: mutations,
          baseRevision: parseInt(state.syncRevision, 10) || 0
        }
      : {
          action: 'plannerSyncPush',
          payload: body,
          baseRevision: parseInt(state.syncRevision, 10) || 0
        };
    var pushController = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var pushTimeout = pushController ? setTimeout(function(){ pushController.abort(); }, 25000) : null;
    var r;
    try {
      r = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: plannerGasRequestBody_(requestPayload),
      signal: pushController ? pushController.signal : undefined
      });
    } finally {
      if(pushTimeout) clearTimeout(pushTimeout);
    }
    if(!r.ok) throw new Error('HTTP ' + r.status);
    var data;
    try {
      data = await r.json();
    } catch(parseErr) {
      throw new Error('서버 응답 형식 오류');
    }
    if(Array.isArray(data.conflicts) && data.conflicts.length && data.payload){
      acknowledgeSyncOutbox_(data.accepted || [], mutations);
      applyServerPayloadPreservingOutbox_(data.payload, data.serverRevision);
      save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
      if(Array.isArray(data.accepted) && data.accepted.length){
        markGasSyncOk_(state.syncRevision, data.savedAt || data.payload.savedAt);
      }
      if(openPlannerOutboxConflict_(data.conflicts, data.payload, data.serverRevision)){
        return { ok: false, conflict: true, partial: data.result === 'partial' };
      }
      // 스킵 가능한 충돌만 있으면 UI 없이 로컬 초안 유지 후 재푸시
      schedulePlannerGasPush_(true);
      return { ok: true, conflict: false, skippedEmptyConflicts: true };
    }
    if(data.result === 'conflict' && data.payload){
      var localBefore = getPersistPayload();
      var serverRev = parseInt(data.serverRevision, 10) || getPayloadRevision_(data.payload);
      if(!openPlannerConflict_(localBefore, data.payload, serverRev)){
        reconcileRemoteBeforeWrite_(localBefore, data.payload, serverRev);
        schedulePlannerGasPush_(true);
      }
      return { ok: false, conflict: true };
    }
    if(data.result !== 'success' && data.result !== 'conflict' && data.result !== 'partial'){
      var unsupportedPatch = data.code === 'UNSUPPORTED_ACTION' ||
        /지원하지 않는 planner action|unknown planner action|unsupported.*planner/i.test(String(data.message || ''));
      if(usePatch && unsupportedPatch && !plannerProtocolDowngraded_){
        plannerProtocolDowngraded_ = true;
        state.syncProtocolVersion = 1;
        state.syncEntitySchemaVersion = 1;
        state.syncNeedsSnapshot = true;
        state.syncDirty = true;
        save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
        // 구버전 서버 폴백 전 pull+merge 로 서버 전용 엔티티를 로컬에 합친 뒤 스냅샷 push
        try {
          await plannerPullRemoteIntoStateCore_();
        } catch(pullErr) {
          console.warn('[GAS push] downgrade pull', pullErr);
        }
        state.syncProtocolVersion = 1;
        state.syncNeedsSnapshot = true;
        state.syncDirty = true;
        save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
        setTimeout(function(){ schedulePlannerGasPush_(true); }, 0);
        return { ok: false, downgraded: true };
      }
      var serverErr = new Error(data.message || '서버 백업 실패');
      if(data.retry === false) serverErr.noRetry = true;
      if(isPlannerAuthError_(data)){
        notifyPlannerAuthError_(data);
        serverErr.noRetry = true;
      }
      throw serverErr;
    }
    if(data.result === 'success' && data.payload){
      if(usePatch){
        acknowledgeSyncOutbox_(data.accepted, mutations);
        applyServerPayloadPreservingOutbox_(data.payload, data.serverRevision);
        save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
        clearPlannerGasRetry_();
        markGasSyncOk_(state.syncRevision, data.savedAt || data.payload.savedAt);
        lastOkRevision = state.syncRevision;
        scheduleDriveUpload(false);
        if((state.syncOutbox || []).length && !plannerSyncConflictPending_) continue;
        if(state.syncDirty) schedulePlannerGasPush_(true);
        return { ok: true, revision: state.syncRevision, batches: round };
      }
      var changedDuringRequest = plannerDirtyGeneration_ !== requestDirtyGeneration;
      var pendingKeysAfterRequest = Object.assign({}, state.syncDirtyEntityKeys || {});
      var needsSnapshotAfterRequest = !!state.syncNeedsSnapshot;
      var canon = mergePlannerPayloads_(getPersistPayload(), data.payload);
      applyPersistPayload(canon, { skipRestorePending: true });
      state.syncRevision = parseInt(data.serverRevision, 10) || getPayloadRevision_(data.payload);
      state.syncEntityUpdatedAt = Object.assign({}, canon.syncEntityUpdatedAt || {});
      state.syncBaseEntityUpdatedAt = Object.assign({}, canon.syncEntityUpdatedAt || {});
      state.syncDirty = changedDuringRequest;
      state.syncDirtyEntityKeys = changedDuringRequest ? pendingKeysAfterRequest : {};
      state.syncNeedsSnapshot = changedDuringRequest ? needsSnapshotAfterRequest : false;
      if(!changedDuringRequest) state.syncOutbox = [];
      save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
      clearPlannerGasRetry_();
      markGasSyncOk_(state.syncRevision, data.savedAt || canon.savedAt);
      scheduleDriveUpload(false);
      if(changedDuringRequest) schedulePlannerGasPush_(true);
      return { ok: true, revision: state.syncRevision };
    } else if(data.result === 'success'){
      clearPlannerGasRetry_();
      markGasSyncOk_(state.syncRevision, data.savedAt);
      return { ok: true, revision: state.syncRevision };
    }
    break;
    }
    if((state.syncOutbox || []).length && !plannerSyncConflictPending_) schedulePlannerGasPush_(true);
    return { ok: true, revision: lastOkRevision, batches: round };
  } catch(err) {
    console.warn('[GAS push]', err);
    plannerLastSyncError_ = String((err && err.message) || err);
    if(!err.noRetry) schedulePlannerGasRetry_(err);
    if(typeof setAppToast === 'function'){
      var retryText = err.noRetry ? '동기화 설정을 확인해 주세요.' : '자동으로 다시 시도합니다.';
      setAppToast('서버 저장에 실패했어요. 이 기기 저장은 유지됩니다.\n' + retryText, { duration: 5500, variant: 'err' });
    }
    updateSyncStatusUI_();
    return { ok: false, error: err };
  }
  });
}
function getPayloadSavedMs_(payload){
  if(!payload) return 0;
  return parseIsoMs_(payload.savedAt || payload.localSavedAt);
}
function draftExtraTimestamp_(draft){
  if(!draft) return 0;
  return parseIsoMs_(draft.updatedAt) || userAddedDraftTimestamp_(draft.id) || 0;
}
function mergeDraftBrandOverrides_(local, remote, preferRemote){
  var out = {};
  var keys = {};
  Object.keys(local || {}).forEach(function(k){ keys[k] = true; });
  Object.keys(remote || {}).forEach(function(k){ keys[k] = true; });
  Object.keys(keys).forEach(function(id){
    var l = (local || {})[id] || {};
    var r = (remote || {})[id] || {};
    if(!Object.keys(l).length){ out[id] = Object.assign({}, r); return; }
    if(!Object.keys(r).length){ out[id] = Object.assign({}, l); return; }
    var lAt = parseIsoMs_(l.updatedAt);
    var rAt = parseIsoMs_(r.updatedAt);
    if(lAt && rAt && lAt !== rAt){
      out[id] = Object.assign({}, lAt > rAt ? l : r);
      return;
    }
    out[id] = Object.assign({}, preferRemote ? l : r, preferRemote ? r : l);
  });
  return out;
}

function filterDeletedFromExtraDraftsByCat_(byCat, deleted){
  if(!byCat || typeof byCat !== 'object') return byCat || {};
  var out = {};
  Object.keys(byCat).forEach(function(k){
    out[k] = (byCat[k] || []).filter(function(d){ return d && d.id && !(deleted && deleted[d.id]); });
  });
  return out;
}
function mergeExtraDraftsByCat_(a, b, deletedIds, preferRemote){
  var deleted = deletedIds || {};
  a = filterDeletedFromExtraDraftsByCat_(a, deleted);
  b = filterDeletedFromExtraDraftsByCat_(b, deleted);
  var out = {};
  function mergeDraftPair(existing, incoming){
    if(!existing) return Object.assign({}, incoming);
    if(!incoming) return Object.assign({}, existing);
    var eAt = draftExtraTimestamp_(existing);
    var iAt = draftExtraTimestamp_(incoming);
    if(iAt > eAt) return Object.assign({}, existing, incoming);
    if(eAt > iAt) return Object.assign({}, incoming, existing);
    return Object.assign({}, existing, incoming);
  }
  function addFrom(src){
    Object.keys(src || {}).forEach(function(k){
      if(!out[k]) out[k] = [];
      (src[k] || []).forEach(function(d){
        if(!d || !d.id || deleted[d.id]) return;
        var ix = out[k].findIndex(function(x){ return x.id === d.id; });
        if(ix === -1) out[k].push(Object.assign({}, d));
        else out[k][ix] = mergeDraftPair(out[k][ix], d);
      });
    });
  }
  var first = preferRemote ? a : b;
  var second = preferRemote ? b : a;
  addFrom(first);
  addFrom(second);
  return out;
}
function mergePublishedMaps_(a, b, preferB){
  var out = {};
  function put(id, entry, fromB){
    if(!entry) return;
    if(!out[id]){ out[id] = entry; return; }
    var existOk = hasUsableAiDraftContent_(out[id]);
    var nextOk = hasUsableAiDraftContent_(entry);
    if(nextOk && !existOk){ out[id] = entry; return; }
    if(existOk && !nextOk) return;
    var existAt = parseIsoMs_(out[id].savedAt);
    var nextAt = parseIsoMs_(entry.savedAt);
    if(nextAt > existAt) out[id] = entry;
    else if(nextAt === existAt && fromB && preferB) out[id] = entry;
  }
  Object.keys(a || {}).forEach(function(id){ put(id, a[id], false); });
  Object.keys(b || {}).forEach(function(id){ put(id, b[id], true); });
  return out;
}
function mergeGeneratedMaps_(a, b, preferB){
  var out = {};
  var ids = {};
  Object.keys(a || {}).forEach(function(id){ ids[id] = true; });
  Object.keys(b || {}).forEach(function(id){ ids[id] = true; });
  Object.keys(ids).forEach(function(id){
    var av = a && a[id];
    var bv = b && b[id];
    if(av && !bv){ out[id] = av; return; }
    if(bv && !av){ out[id] = bv; return; }
    if(!av && !bv) return;
    var aOk = hasUsableAiDraftContent_(av);
    var bOk = hasUsableAiDraftContent_(bv);
    if(aOk && !bOk) out[id] = av;
    else if(bOk && !aOk) out[id] = bv;
    else out[id] = preferB ? bv : av;
  });
  return out;
}
/** 두 기기·Drive·서버 payload를 합침 — 주제(extraDrafts)는 항상 합집합, 발행·초안은 더 최신 쪽 우선 */
/** 브랜딩 하위 기획(yearPlan/subGoalPlans/dailySharePlan)에 수정 시각 도장을 찍는다. */
function stampBrandingPlanUpdatedAt_(plan){
  if(plan && typeof plan === 'object') plan.updatedAt = new Date().toISOString();
  return plan;
}
/** 두 기획 객체 중 자체 updatedAt이 더 최신인 것을 고른다. 없으면 전체 payload 우선순위(preferRemote)로 폴백. */
function pickNewerBrandingPlan_(localPlan, remotePlan, preferRemote){
  if(!localPlan) return remotePlan || null;
  if(!remotePlan) return localPlan || null;
  var lm = parseIsoMs_(localPlan.updatedAt);
  var rm = parseIsoMs_(remotePlan.updatedAt);
  if(lm && rm){
    if(rm > lm) return remotePlan;
    if(lm > rm) return localPlan;
    return preferRemote ? remotePlan : localPlan;
  }
  if(rm && !lm) return remotePlan;
  if(lm && !rm) return localPlan;
  return preferRemote ? remotePlan : localPlan;
}
/** subGoalPlans는 카테고리별로 각자의 updatedAt 기준으로 최신본을 고른다. */
function mergeSubGoalPlansByTs_(localPlans, remotePlans, preferRemote){
  var out = {};
  var keys = {};
  Object.keys(localPlans || {}).forEach(function(k){ keys[k] = true; });
  Object.keys(remotePlans || {}).forEach(function(k){ keys[k] = true; });
  Object.keys(keys).forEach(function(k){
    out[k] = pickNewerBrandingPlan_((localPlans || {})[k], (remotePlans || {})[k], preferRemote);
  });
  return out;
}
function mergePlannerPayloads_(local, remote){
  if(!remote) return ensurePayloadSyncRevision_(Object.assign({}, local || {}));
  if(!local) return ensurePayloadSyncRevision_(Object.assign({}, remote));
  ensurePayloadSyncRevision_(local);
  ensurePayloadSyncRevision_(remote);
  var preferRemote = preferRemotePayload_(local, remote);
  var localMs = getPayloadSavedMs_(local);
  var remoteMs = getPayloadSavedMs_(remote);
  var out = Object.assign({}, preferRemote ? remote : local, {
    published: mergePublishedMaps_(local.published, remote.published, preferRemote),
    generatedOnly: mergeGeneratedMaps_(local.generatedOnly, remote.generatedOnly, preferRemote),
    extraDraftsByCat: mergeExtraDraftsByCat_(local.extraDraftsByCat, remote.extraDraftsByCat, Object.assign({}, remote.deletedDraftIds || {}, local.deletedDraftIds || {}), preferRemote),
    deletedDraftIds: Object.assign({}, remote.deletedDraftIds || {}, local.deletedDraftIds || {}),
    promptRefineMilestones: Object.assign({}, local.promptRefineMilestones || {}, remote.promptRefineMilestones || {}),
  });
  if(remote.prompts != null && (preferRemote || local.prompts == null)) out.prompts = remote.prompts;
  else if(local.prompts != null) out.prompts = local.prompts;
  if(remote.chatgptOpenUrl && !local.chatgptOpenUrl) out.chatgptOpenUrl = remote.chatgptOpenUrl;
  else if(local.chatgptOpenUrl) out.chatgptOpenUrl = local.chatgptOpenUrl;
  if(remote.dailyAutoLast && (!local.dailyAutoLast || remote.dailyAutoLast > local.dailyAutoLast)) out.dailyAutoLast = remote.dailyAutoLast;
  else if(local.dailyAutoLast) out.dailyAutoLast = local.dailyAutoLast;
  if(local.branding || remote.branding){
    var baseBrand = preferRemote ? (remote.branding || {}) : (local.branding || {});
    out.branding = Object.assign({}, baseBrand);
    var lb = local.branding || {};
    var rb = remote.branding || {};
    if(preferRemote){
      out.branding.categoryGoals = Object.assign({}, lb.categoryGoals || {}, rb.categoryGoals || {});
      out.branding.seriesGoals = Object.assign({}, lb.seriesGoals || {}, rb.seriesGoals || {});
    } else {
      out.branding.categoryGoals = Object.assign({}, rb.categoryGoals || {}, lb.categoryGoals || {});
      out.branding.seriesGoals = Object.assign({}, rb.seriesGoals || {}, lb.seriesGoals || {});
    }
    // 기획(yearPlan/subGoalPlans/dailySharePlan)은 각 plan의 updatedAt 기준으로 최신본을 고른다.
    // 전체 payload 저장 시각과 무관하게, 실제로 나중에 수정된 기획이 살아남도록.
    out.branding.subGoalPlans = mergeSubGoalPlansByTs_(lb.subGoalPlans, rb.subGoalPlans, preferRemote);
    out.branding.yearPlan = pickNewerBrandingPlan_(lb.yearPlan, rb.yearPlan, preferRemote);
    out.branding.dailySharePlan = pickNewerBrandingPlan_(lb.dailySharePlan, rb.dailySharePlan, preferRemote);
    if(!out.branding.yearPlan) delete out.branding.yearPlan;
    if(!out.branding.dailySharePlan) delete out.branding.dailySharePlan;
  }
  out.pinnedDraftIds = Object.assign({}, remote.pinnedDraftIds || {}, local.pinnedDraftIds || {});
  out.publishRecCurrentTabOnly = preferRemote ? !!remote.publishRecCurrentTabOnly : !!local.publishRecCurrentTabOnly;
  if(remote.syncRationalesOnBrandSave != null || local.syncRationalesOnBrandSave != null){
    out.syncRationalesOnBrandSave = preferRemote
      ? remote.syncRationalesOnBrandSave !== false
      : local.syncRationalesOnBrandSave !== false;
  }
  out.draftBrandOverrides = mergeDraftBrandOverrides_(local.draftBrandOverrides, remote.draftBrandOverrides, preferRemote);
  out.opsManual = mergeOpsManual_(local.opsManual, remote.opsManual, preferRemote);
  out = mergeTrackedSyncEntities_(out, local, remote, preferRemote);
  var mergedMs = Math.max(localMs, remoteMs, Date.now());
  out.savedAt = new Date(mergedMs).toISOString();
  out.localSavedAt = out.savedAt;
  out.syncRevision = Math.max(getPayloadRevision_(local), getPayloadRevision_(remote));
  delete out.apiKey;
  return out;
}
function mergeOpsManualFieldMaps_(localVal, localAt, remoteVal, remoteAt, preferRemote){
  localVal = localVal || {};
  remoteVal = remoteVal || {};
  localAt = localAt || {};
  remoteAt = remoteAt || {};
  var outVal = {};
  var outAt = {};
  var keys = {};
  Object.keys(localVal).forEach(function(k){ keys[k] = true; });
  Object.keys(remoteVal).forEach(function(k){ keys[k] = true; });
  Object.keys(localAt).forEach(function(k){ keys[k] = true; });
  Object.keys(remoteAt).forEach(function(k){ keys[k] = true; });
  Object.keys(keys).forEach(function(k){
    var hasL = Object.prototype.hasOwnProperty.call(localVal, k);
    var hasR = Object.prototype.hasOwnProperty.call(remoteVal, k);
    var lt = parseIsoMs_(localAt[k]);
    var rt = parseIsoMs_(remoteAt[k]);
    if(lt && rt){
      if(lt > rt){
        if(hasL) outVal[k] = localVal[k];
        else outVal[k] = false;
        outAt[k] = localAt[k];
      } else if(rt > lt){
        if(hasR) outVal[k] = remoteVal[k];
        else outVal[k] = false;
        outAt[k] = remoteAt[k];
      } else {
        var pickRemote = preferRemote;
        if(hasL && hasR) outVal[k] = pickRemote ? remoteVal[k] : localVal[k];
        else if(hasL) outVal[k] = localVal[k];
        else if(hasR) outVal[k] = remoteVal[k];
        outAt[k] = pickRemote ? (remoteAt[k] || localAt[k]) : (localAt[k] || remoteAt[k]);
      }
      return;
    }
    if(lt && !rt){
      outVal[k] = hasL ? localVal[k] : false;
      outAt[k] = localAt[k];
      return;
    }
    if(!lt && rt){
      outVal[k] = hasR ? remoteVal[k] : false;
      outAt[k] = remoteAt[k];
      return;
    }
    if(hasL && hasR) outVal[k] = preferRemote ? remoteVal[k] : localVal[k];
    else if(hasL) outVal[k] = localVal[k];
    else if(hasR) outVal[k] = remoteVal[k];
  });
  Object.keys(outVal).forEach(function(k){
    if(outVal[k] == null) delete outVal[k];
  });
  return { val: outVal, at: outAt };
}
function mergeOpsManual_(local, remote, preferRemote){
  if(!local || typeof local !== 'object') return remote && typeof remote === 'object' ? remote : null;
  if(!remote || typeof remote !== 'object') return local;
  var base = preferRemote ? remote : local;
  var other = preferRemote ? local : remote;
  var checkedMerged = mergeOpsManualFieldMaps_(
    local.checked, local.checkedAt, remote.checked, remote.checkedAt, preferRemote
  );
  var notesMerged = mergeOpsManualFieldMaps_(
    local.notes, local.notesAt, remote.notes, remote.notesAt, preferRemote
  );
  return {
    activeBranch: base.activeBranch || other.activeBranch || 'global',
    checked: checkedMerged.val,
    checkedAt: checkedMerged.at,
    notes: notesMerged.val,
    notesAt: notesMerged.at,
    collapsed: Object.assign({}, other.collapsed || {}, base.collapsed || {}),
    review: Object.assign({}, other.review || {}, base.review || {}),
    keywordAds: Object.assign({}, other.keywordAds || {}, base.keywordAds || {}),
    newBranchMeta: Object.assign({}, other.newBranchMeta || {}, base.newBranchMeta || {}),
    updatedAt: (parseIsoMs_(base.updatedAt) >= parseIsoMs_(other.updatedAt) ? base.updatedAt : other.updatedAt) || new Date().toISOString()
  };
}
function brandingFingerprint_(branding){
  if(!branding || typeof branding !== 'object') return '';
  try {
    return JSON.stringify({
      yearPlan: branding.yearPlan || null,
      subGoalPlans: branding.subGoalPlans || null,
      pillars: branding.pillars || null,
      message: branding.message || ''
    });
  } catch(e){ return ''; }
}
function plannerSyncFingerprint_(payload){
  if(!payload) return '';
  try {
    var extraBits = [];
    var byCat = payload.extraDraftsByCat || {};
    Object.keys(byCat).sort().forEach(function(k){
      (byCat[k] || []).forEach(function(d){
        if(!d || !d.id) return;
        extraBits.push(d.id + ':' + String(d.topic || '') + '|' + String(d.angle || '') + '|' + String(d.rationale || ''));
      });
    });
    return JSON.stringify({
      extra: extraBits.sort(),
      overrides: payload.draftBrandOverrides || {},
      pub: Object.keys(payload.published || {}).sort(),
      gen: Object.keys(payload.generatedOnly || {}).sort(),
      del: Object.keys(payload.deletedDraftIds || {}).sort(),
      brand: brandingFingerprint_(payload.branding),
      ops: payload.opsManual ? JSON.stringify(payload.opsManual) : '',
      rev: getPayloadRevision_(payload)
    });
  } catch(e){ return ''; }
}

function promptsFingerprint_(prompts){
  try { return JSON.stringify(prompts || null); } catch(e){ return ''; }
}

const PLANNER_IDLE_SYNC_MS = 5 * 60 * 1000;
let plannerIdleSyncTimer = null;

function armPlannerIdleSync_() {
  if (plannerIdleSyncTimer) clearTimeout(plannerIdleSyncTimer);
  plannerIdleSyncTimer = setTimeout(function () {
    plannerIdleSyncTimer = null;
    syncAllSourcesIfNewer_('idle').catch(function (e) {
      console.warn('[동기화 idle]', e);
    });
    armPlannerIdleSync_();
  }, PLANNER_IDLE_SYNC_MS);
}

function onPlannerUserActivity_() {
  armPlannerIdleSync_();
}

function startPlannerIdleSync_() {
  ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'].forEach(function (ev) {
    document.addEventListener(ev, onPlannerUserActivity_, { passive: true });
  });
  armPlannerIdleSync_();
}

/** Drive(appData) · GAS 서버 백업을 이 기기와 합침 (주제·초안·발행본 누락 방지) */
var _plannerSyncMutexTail = Promise.resolve();
let _plannerSyncUiBusy = false;
let _syncStatusUiTimer = null;
let _syncStatusModalRemote = null;
function withPlannerSyncMutex_(fn){
  _plannerSyncUiBusy = true;
  updateSyncStatusUI_();
  var run = _plannerSyncMutexTail.then(function(){
    return fn();
  }, function(){
    return fn();
  }).finally(function(){
    _plannerSyncUiBusy = false;
    updateSyncStatusUI_();
  });
  _plannerSyncMutexTail = run.catch(function(){});
  return run;
}
function readStoredSyncRev_(key){
  try { return parseInt(localStorage.getItem(key) || '0', 10) || 0; } catch(e){ return 0; }
}
function markGasSyncOk_(rev, iso){
  try {
    localStorage.setItem(GAS_LAST_SYNC_KEY, iso || new Date().toISOString());
    localStorage.setItem(GAS_LAST_SYNC_REV_KEY, String(rev != null ? rev : (state.syncRevision || 0)));
  } catch(e){}
  updateSyncStatusUI_();
}
function markSyncReason_(reason){
  try { if(reason) localStorage.setItem(SYNC_LAST_REASON_KEY, String(reason)); } catch(e){}
}
function isPlannerSyncBusy_(){
  return !!(_plannerSyncUiBusy || plannerGasPushTimer || driveUploadTimer);
}
function isServerSyncConfigured_(){
  return !!(getPlannerGasUrl_() && location.protocol !== 'file:');
}
function getSyncStatusInfo_(remoteMeta){
  remoteMeta = remoteMeta || _syncStatusModalRemote || null;
  var localRev = parseInt(state.syncRevision, 10) || 0;
  var localAt = state.localSavedAt || '';
  var serverRev = readStoredSyncRev_(GAS_LAST_SYNC_REV_KEY);
  var serverAt = '';
  try { serverAt = localStorage.getItem(GAS_LAST_SYNC_KEY) || ''; } catch(e0){}
  var driveRev = readStoredSyncRev_(DRIVE_LAST_SYNC_REV_KEY);
  var driveAt = '';
  try { driveAt = localStorage.getItem(DRIVE_LAST_SYNC_KEY) || ''; } catch(e1){}
  var remoteRev = remoteMeta && remoteMeta.rev != null ? remoteMeta.rev : null;
  var remoteAt = remoteMeta && remoteMeta.savedAt ? remoteMeta.savedAt : '';
  var remoteBy = remoteMeta && remoteMeta.lastModifiedBy ? remoteMeta.lastModifiedBy : '';
  var busy = isPlannerSyncBusy_();
  var serverOn = isServerSyncConfigured_();
  var driveOn = hasDriveValidToken_();
  var serverPending = serverOn && !!state.syncDirty;
  var drivePending = driveOn && !!state.syncDirty;
  var remoteNewer = remoteRev != null && remoteRev > localRev;
  var retryScheduled = !!plannerGasRetryTimer_;
  var overall = 'ok';
  if(busy) overall = 'syncing';
  else if(plannerLastSyncError_) overall = 'warn';
  else if(!serverOn && location.protocol === 'file:') overall = 'warn';
  else if(serverPending || drivePending) overall = 'pending';
  else if(remoteNewer) overall = 'pending';
  else if(serverOn && !serverRev && localRev > 0) overall = 'pending';
  var summary = '';
  if(busy) summary = '동기화를 진행 중이에요. 잠시만 기다려 주세요.';
  else if(plannerLastSyncError_) summary = '최근 서버 저장 실패: ' + plannerLastSyncError_ + (retryScheduled ? ' · 자동 재시도 예정' : '');
  else if(remoteNewer) summary = '서버에 이 기기보다 최신 데이터(rev ' + remoteRev + ')가 있어요. 「지금 동기화」를 눌러 받아오세요.';
  else if(serverPending || drivePending) summary = '이 기기에 저장된 변경이 아직 서버·Drive에 반영되지 않았어요. 곧 자동으로 올라가거나 「지금 동기화」를 눌러 주세요.';
  else if(!serverOn) summary = '서버 URL이 없거나 file:// 로 열려 있어요. https로 열면 기기 간 동기화가 됩니다.';
  else summary = '이 기기·서버·Drive가 같은 revision 기준으로 맞춰져 있어요.';
  var lastReason = '';
  try { lastReason = localStorage.getItem(SYNC_LAST_REASON_KEY) || ''; } catch(e2){}
  return {
    localRev: localRev,
    localAt: localAt,
    employeeId: getPlannerEmployeeId_(),
    serverRev: serverRev,
    serverAt: serverAt,
    driveRev: driveRev,
    driveAt: driveAt,
    remoteRev: remoteRev,
    remoteAt: remoteAt,
    remoteBy: remoteBy,
    busy: busy,
    serverOn: serverOn,
    driveOn: driveOn,
    serverPending: serverPending,
    drivePending: drivePending,
    remoteNewer: remoteNewer,
    retryScheduled: retryScheduled,
    lastError: plannerLastSyncError_,
    overall: overall,
    summary: summary,
    lastReason: lastReason
  };
}
function scheduleSyncStatusUiRefresh_(){
  if(_syncStatusUiTimer) clearTimeout(_syncStatusUiTimer);
  _syncStatusUiTimer = setTimeout(function(){
    _syncStatusUiTimer = null;
    updateSyncStatusUI_();
  }, 120);
}
function updateSyncStatusUI_(){
  var btn = document.getElementById('btn-sync-status');
  var dot = document.getElementById('sync-dot');
  var label = document.getElementById('sync-status-label');
  var sub = document.getElementById('sync-btn-sub');
  if(!btn) return;
  var info = getSyncStatusInfo_();
  btn.classList.remove('ok', 'pending', 'syncing', 'warn');
  if(dot) dot.className = 'sync-dot ' + info.overall;
  btn.classList.add(info.overall);
  if(label) label.textContent = '동기화';
  if(sub){
    if(info.busy) sub.textContent = '진행 중…';
    else if(info.overall === 'pending') sub.textContent = '대기 · ' + info.localRev;
    else if(info.overall === 'ok') sub.textContent = '최신 · ' + info.localRev;
    else if(info.overall === 'warn') sub.textContent = info.retryScheduled ? '재시도' : '확인 필요';
    else sub.textContent = String(info.localRev);
  }
  btn.title = '동기화 및 설정 — ' + info.summary;
  var body = document.getElementById('sync-status-body');
  if(body && document.getElementById('sync-status-overlay') && document.getElementById('sync-status-overlay').classList.contains('open')){
    body.innerHTML = renderSyncStatusBodyHTML_(info);
  }
}
function renderSyncStatusBodyHTML_(info){
  function row(title, badgeClass, badgeText, metaHtml, actionsHtml){
    return '<div class="sync-status-row">' +
      '<div class="sync-status-row-head">' +
        '<span class="sync-status-row-title">' + escapeHtml(title) + '</span>' +
        '<span class="sync-status-badge ' + badgeClass + '">' + escapeHtml(badgeText) + '</span>' +
      '</div>' +
      '<div class="sync-status-row-meta">' + metaHtml + '</div>' +
      (actionsHtml ? '<div class="sync-status-row-actions">' + actionsHtml + '</div>' : '') +
    '</div>';
  }
  var localFmt = formatDriveTimeShort(info.localAt) || '(아직 없음)';
  var email = info.employeeId || '';
  var emailOk = !!email;
  var aiOn = isPlannerAiAvailable_();
  var ytOn = isGeminiYoutubeAvailable_();
  var aiBadge = aiOn ? 'ok' : 'warn';
  var aiText = state.plannerClaudeEnabled
    ? (ytOn ? '서버 AI · 유튜브' : '서버 AI')
    : (state.apiKey ? (ytOn ? '개인 API · 유튜브' : '개인 API') : '미설정');
  var aiMeta = state.plannerClaudeEnabled
    ? 'Claude는 Apps Script 서버 키로 동작합니다.' + (ytOn ? ' 유튜브 분석(Gemini)도 사용 가능합니다.' : ' 유튜브 분석(Gemini)은 아직 꺼져 있습니다.')
    : (state.apiKey
      ? '개인 Claude API로 동작 중입니다. 서버 키를 쓰면 직원 브라우저에 키가 남지 않습니다.'
      : '서버 CLAUDE_API_KEY 또는 개인 API 키가 필요합니다.');
  var html = '<div class="sync-status-summary ' + (info.overall === 'ok' ? '' : info.overall) + '">' + escapeHtml(info.summary) + '</div>';

  // 1. 사용자 이메일
  html += row(
    '1. 사용자 이메일',
    emailOk ? 'ok' : 'warn',
    emailOk ? '설정됨' : '필요',
    '<label class="sync-settings-label" for="sync-settings-employee">수정 기록·충돌에 표시됩니다</label>' +
      '<div class="sync-settings-inline">' +
        '<input class="modal-input sync-settings-input" type="email" id="sync-settings-employee" value="' + escapeHtml(email) + '" placeholder="name@company.com" autocomplete="email">' +
        '<button type="button" class="modal-btn sync-settings-mini-btn" onclick="saveSyncSettingsEmployee_()">저장</button>' +
      '</div>'
  );

  // 2. 이 기기
  html += row(
    '2. 이 기기',
    info.busy ? 'syncing' : 'ok',
    info.busy ? '저장/동기화 중' : '기준',
    'revision <strong>' + info.localRev + '</strong> · 마지막 저장 <strong>' + escapeHtml(localFmt) + '</strong>' +
      '<br>기기 ID는 자동으로 관리됩니다.'
  );

  // 3. 서버 (GAS)
  if(info.serverOn){
    var sBadge = info.serverPending ? 'pending' : (info.remoteNewer ? 'pending' : (info.serverRev ? 'ok' : 'off'));
    var sText = info.serverPending ? '업로드 대기' : (info.remoteNewer ? '서버가 더 최신' : (info.serverRev ? '일치' : '미확인'));
    var sMeta = '마지막 확인 revision <strong>' + info.serverRev + '</strong>';
    if(info.serverAt) sMeta += ' · <strong>' + escapeHtml(formatDriveTimeShort(info.serverAt)) + '</strong>';
    if(info.remoteRev != null){
      sMeta += '<br>서버 현재 revision <strong>' + info.remoteRev + '</strong>';
      if(info.remoteAt) sMeta += ' · <strong>' + escapeHtml(formatDriveTimeShort(info.remoteAt)) + '</strong>';
      if(info.remoteBy) sMeta += '<br>마지막 수정자 <strong>' + escapeHtml(info.remoteBy) + '</strong>';
    }
    sMeta += '<br>팀 기준본입니다. 하단 「지금 동기화」로 맞출 수 있어요.';
    html += row('3. 서버 (GAS)', sBadge, sText, sMeta);
  } else {
    html += row(
      '3. 서버 (GAS)',
      'off',
      '미설정',
      'https 배포 URL이 필요해요.',
      '<button type="button" class="modal-btn sync-settings-mini-btn" onclick="openApiModalFromSync_()">서버·토큰 설정</button>'
    );
  }

  // 4. Google Drive
  var driveTitle = PLANNER_TEAM_MODE ? '4. Google Drive (개인 백업)' : '4. Google Drive';
  if(hasDriveConnection_()){
    var dBadge = info.driveOn ? (info.drivePending ? 'pending' : (info.driveRev ? 'ok' : 'off')) : 'warn';
    var dText = !info.driveOn ? '로그인 필요' : (info.drivePending ? '업로드 대기' : (info.driveRev ? '일치' : '미업로드'));
    var dMeta = info.driveRev ? ('마지막 revision <strong>' + info.driveRev + '</strong>') : '아직 Drive에 올린 기록이 없어요.';
    if(info.driveAt) dMeta += ' · <strong>' + escapeHtml(formatDriveTimeShort(info.driveAt)) + '</strong>';
    dMeta += '<br>팀 서버를 덮어쓰지 않는 개인 백업입니다.';
    html += row(
      driveTitle,
      dBadge,
      dText,
      dMeta,
      '<button type="button" class="modal-btn sync-settings-mini-btn" onclick="driveLoginAndUploadFromSync_()">' +
        (info.driveOn ? 'Drive에 백업' : 'Drive 로그인') + '</button>' +
      '<button type="button" class="modal-btn-ghost sync-settings-mini-btn" onclick="driveDisconnectFromSync_()">로그아웃</button>'
    );
  } else {
    html += row(
      driveTitle,
      'off',
      '미연동',
      '로그인하면 이 계정의 개인 백업·복구에 쓸 수 있어요.',
      '<button type="button" class="modal-btn sync-settings-mini-btn" onclick="driveLoginAndUploadFromSync_()">Drive 로그인</button>'
    );
  }

  // 5. 기타
  html += row(
    '5. 기타 · 서버 AI · 유튜브',
    aiBadge,
    aiText,
    aiMeta + (info.lastReason ? '<br>최근 자동 동기화: <strong>' + escapeHtml(info.lastReason) + '</strong>' : ''),
    '<button type="button" class="modal-btn sync-settings-mini-btn" onclick="openApiModalFromSync_()">AI·토큰·자동초안 설정</button>' +
      '<button type="button" class="modal-btn-ghost sync-settings-mini-btn" onclick="copyPlannerTeamInviteLink_()">직원 초대 링크 복사</button>'
  );
  html += '<div class="sync-status-row-meta" style="padding:0 2px;color:#9CA3AF;">revision은 서버가 동기화 성공 때마다 발급합니다. 로컬 변경은 업로드 대기로 표시됩니다.</div>';
  return html;
}
window.saveSyncSettingsEmployee_ = function(){
  var el = document.getElementById('sync-settings-employee');
  if(!el) return;
  var next = String(el.value || '').trim();
  if(next && !isPlannerEmployeeEmailValid_(next)){
    if(typeof setAppToast === 'function') setAppToast('올바른 이메일 형식으로 입력해 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  setPlannerEmployeeId_(next);
  save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
  updateSyncStatusUI_();
  if(typeof setAppToast === 'function') setAppToast(next ? '직원 이메일을 저장했어요.' : '직원 이메일을 비웠어요.', { duration: 2800, variant: 'ok' });
};
window.openApiModalFromSync_ = function(){
  closeSyncStatusModal_();
  openApiModal();
};
window.driveLoginAndUploadFromSync_ = async function(){
  try {
    await driveLoginAndUpload();
  } catch(e){}
  updateSyncStatusUI_();
};
window.driveDisconnectFromSync_ = function(){
  try { driveDisconnect(); } catch(e){}
  updateSyncStatusUI_();
};
async function fetchServerSyncMeta_(){
  var url = getPlannerGasUrl_();
  if(!url || location.protocol === 'file:') return null;
  try {
    var data = await plannerGasJsonRequest_({ action: 'plannerSyncPull' }, 15000);
    applyPlannerServerCaps_(data, true);
    if(data.result === 'success' && data.payload){
      return {
        rev: parseInt(data.serverRevision, 10) || getPayloadRevision_(data.payload),
        savedAt: data.savedAt || data.payload.savedAt || data.payload.localSavedAt || '',
        lastModifiedBy: data.payload.lastModifiedBy || ''
      };
    }
  } catch(e){
    console.warn('[동기화 상태]', e);
    throw e;
  }
  return null;
}
window.reloadPlannerPage_ = function(){
  try {
    if(navigator.serviceWorker && navigator.serviceWorker.getRegistration){
      navigator.serviceWorker.getRegistration().then(function(reg){
        if(reg) reg.update();
      }).catch(function(){});
    }
  } catch(e){}
  location.reload();
};
window.openSyncStatusModal_ = async function(){
  var overlay = document.getElementById('sync-status-overlay');
  var body = document.getElementById('sync-status-body');
  var err = document.getElementById('sync-status-err');
  if(!overlay || !body) return;
  if(err) err.textContent = '';
  _syncStatusModalRemote = null;
  overlay.classList.add('open');
  body.innerHTML = renderSyncStatusBodyHTML_(getSyncStatusInfo_());
  body.innerHTML += '<div class="sync-status-row-meta" style="padding:4px 2px;">서버 상태 확인 중…</div>';
  try {
    _syncStatusModalRemote = await fetchServerSyncMeta_();
    body.innerHTML = renderSyncStatusBodyHTML_(getSyncStatusInfo_());
  } catch(e2){
    if(err) err.textContent = '서버 상태를 가져오지 못했어요.';
    body.innerHTML = renderSyncStatusBodyHTML_(getSyncStatusInfo_());
  }
};
window.closeSyncStatusModal_ = function(ev){
  if(ev && ev.target && ev.currentTarget && ev.target !== ev.currentTarget) return;
  var overlay = document.getElementById('sync-status-overlay');
  if(overlay) overlay.classList.remove('open');
  _syncStatusModalRemote = null;
};
function setPlannerBootstrapUi_(mode, message){
  var overlay = document.getElementById('sync-bootstrap-overlay');
  var msg = document.getElementById('sync-bootstrap-message');
  var appRoot = document.getElementById('planner-app-root');
  if(!overlay) return;
  var locked = mode !== 'done';
  if(appRoot){
    appRoot.inert = locked;
    if(locked) appRoot.setAttribute('aria-hidden', 'true');
    else appRoot.removeAttribute('aria-hidden');
  }
  overlay.classList.toggle('open', mode !== 'done');
  overlay.classList.toggle('failed', mode === 'failed');
  overlay.classList.toggle('needs-token', mode === 'failed' && /토큰|인증/.test(String(message || '')));
  if(msg) msg.textContent = message || '';
  if(mode === 'failed'){
    var tokenInput = document.getElementById('sync-bootstrap-token');
    if(tokenInput) tokenInput.value = getPlannerSyncToken_();
    var employeeInput = document.getElementById('sync-bootstrap-employee');
    if(employeeInput) employeeInput.value = getPlannerEmployeeId_();
    setTimeout(function(){ if(employeeInput) employeeInput.focus(); }, 0);
  }
}
async function verifyPlannerServerReachable_(){
  if(!isPlannerEmployeeEmailValid_(getPlannerEmployeeId_())) throw new Error('직원 이메일을 입력해야 팀 데이터를 사용할 수 있어요.');
  var url = getPlannerGasUrl_();
  if(!url || location.protocol === 'file:') throw new Error('웹 배포 주소(https)에서 접속해야 서버 데이터를 확인할 수 있어요.');
  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timeout = controller ? setTimeout(function(){ controller.abort(); }, 20000) : null;
  var r;
  try {
    r = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: plannerGasRequestBody_({ action: 'plannerSyncPull' }),
      signal: controller ? controller.signal : undefined
    });
  } finally {
    if(timeout) clearTimeout(timeout);
  }
  if(!r.ok) throw new Error('서버 연결 실패 (HTTP ' + r.status + ')');
  var data = await r.json();
  applyPlannerServerCaps_(data, true);
  if(isPlannerAuthError_(data)) throw new Error(data.message || '동기화 토큰이 필요합니다.');
  if(data.result !== 'success' && data.result !== 'empty') throw new Error(data.message || '서버 데이터를 확인하지 못했습니다.');
  return data;
}
async function runPlannerBootstrapSync_(){
  if(plannerSyncBootstrapRunning_) return;
  plannerSyncBootstrapRunning_ = true;
  plannerSyncBootstrapReady_ = false;
  setPlannerBootstrapUi_('loading', '서버(GAS) 기준으로 맞춘 뒤 편집을 시작합니다.');
  try {
    var bootstrapData = await verifyPlannerServerReachable_();
    var reconcileMode = 'noop';
    if(bootstrapData.result === 'success' && bootstrapData.payload){
      var localPayload = getPersistPayload();
      var remotePayload = bootstrapData.payload;
      var remoteRevision = parseInt(bootstrapData.serverRevision, 10) || getPayloadRevision_(remotePayload);
      reconcileMode = reconcileLocalWithServerPayload_(localPayload, remotePayload, remoteRevision);
    } else if(bootstrapData.result === 'empty'){
      state.syncRevision = 0;
      state.syncBaseEntityUpdatedAt = {};
      state.syncDirty = true;
      state.syncNeedsSnapshot = true;
      plannerDirtyGeneration_++;
      reconcileMode = 'merged';
    }
    if(reconcileMode !== 'conflict' && !hasPendingLocalSyncChanges_()){
      state.syncBaseEntityUpdatedAt = Object.assign({}, state.syncEntityUpdatedAt || {});
      state.syncDirtyEntityKeys = {};
      state.syncNeedsSnapshot = false;
      state.syncOutbox = [];
      state.syncDirty = false;
    }
    if(!save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true, forceWrite: true })){
      throw new Error('이 기기의 저장 공간에 서버 데이터를 기록하지 못했습니다.');
    }
    plannerSyncBootstrapReady_ = true;
    if(bootstrapData.result === 'empty'){
      var initialPush = await plannerGasPushNow_();
      if(!initialPush || !initialPush.ok){
        throw (initialPush && initialPush.error) || new Error('빈 서버에 최초 데이터를 저장하지 못했습니다.');
      }
    }
    setPlannerBootstrapUi_('done', '');
    if(reconcileMode === 'adopted' && typeof setAppToast === 'function'){
      setAppToast('서버 최신 데이터로 맞췄어요.', { duration: 3200, variant: 'ok' });
    }
    // 충돌 UI가 열린 동안에는 push하지 않음. dirty만 있으면 이어서 업로드.
    if(reconcileMode !== 'conflict' && hasPendingLocalSyncChanges_()){
      schedulePlannerGasPush_(true);
      scheduleDriveUpload(false);
    }
  } catch(e){
    plannerSyncBootstrapReady_ = false;
    var msg = (e && e.message) ? e.message : String(e);
    setPlannerBootstrapUi_('failed', '서버 동기화가 완료되지 않아 편집을 잠갔습니다.\n' + msg);
  } finally {
    plannerSyncBootstrapRunning_ = false;
    updateSyncStatusUI_();
  }
}
window.retryPlannerBootstrapSync_ = function(){
  var tokenInput = document.getElementById('sync-bootstrap-token');
  if(tokenInput) setPlannerSyncToken_(tokenInput.value);
  var employeeInput = document.getElementById('sync-bootstrap-employee');
  if(employeeInput) setPlannerEmployeeId_(employeeInput.value);
  runPlannerBootstrapSync_();
};
function openPlannerConflict_(local, remote, serverRevision){
  var conflicts = detectPlannerEntityConflicts_(local, remote);
  if(!conflicts.length) return false;
  plannerSyncConflictPending_ = {
    local: cloneSyncValue_(local),
    remote: cloneSyncValue_(remote),
    serverRevision: parseInt(serverRevision, 10) || getPayloadRevision_(remote),
    dirtyGeneration: plannerDirtyGeneration_,
    conflicts: conflicts
  };
  renderPlannerConflictUi_(plannerSyncConflictPending_);
  return true;
}
function renderPlannerConflictUi_(pending){
  var list = document.getElementById('sync-conflict-list');
  if(list){
    var remote = pending.remote || {};
    var conflicts = pending.conflicts || [];
    var remoteBy = remote.lastModifiedBy ? ' · ' + remote.lastModifiedBy : '';
    var localBy = getPlannerEmployeeId_() ? ' · ' + getPlannerEmployeeId_() : '';
    list.innerHTML = conflicts.map(function(conflict, i){
      var key = String(conflict.key || '');
      var preferLocal = (key.indexOf('generated:') === 0 || key.indexOf('published:') === 0) &&
        hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.local)) &&
        !hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.remote));
      var remoteChecked = preferLocal ? '' : ' checked';
      var localChecked = preferLocal ? ' checked' : '';
      var hint = preferLocal
        ? '<div class="sync-conflict-name-sub" style="font-size:11px;color:#B45309;margin-top:4px;">이 기기에서 만든 초안 본문이 있어요. 서버를 고르면 초안이 사라질 수 있어 「이 기기」를 권장합니다.</div>'
        : '';
      return '<div class="sync-conflict-item">' +
        '<div class="sync-conflict-name">' + escapeHtml(plannerConflictLabel_(conflict.key)) + '</div>' + hint +
        '<div class="sync-conflict-options">' +
          '<label class="sync-conflict-option"><input type="radio" name="sync-conflict-' + i + '" value="remote"' + remoteChecked + '>' +
            '<span><strong>서버 내용' + escapeHtml(remoteBy) + '</strong><span class="sync-conflict-preview">' + escapeHtml(plannerConflictPreview_(conflict.remote)) + '</span></span></label>' +
          '<label class="sync-conflict-option"><input type="radio" name="sync-conflict-' + i + '" value="local"' + localChecked + '>' +
            '<span><strong>이 기기 내용' + escapeHtml(localBy) + '</strong><span class="sync-conflict-preview">' + escapeHtml(plannerConflictPreview_(conflict.local)) + '</span></span></label>' +
        '</div></div>';
    }).join('');
  }
  var overlay = document.getElementById('sync-conflict-overlay');
  if(overlay) overlay.classList.add('open');
}
function openPlannerOutboxConflict_(serverConflicts, remote, serverRevision){
  var localPayload = getPersistPayload();
  var localEntities = collectSyncEntities_(localPayload);
  var outboxByKey = {};
  (state.syncOutbox || []).forEach(function(op){ if(op && op.key) outboxByKey[op.key] = op; });
  var conflicts = (serverConflicts || []).map(function(conflict){
    var op = outboxByKey[conflict.key];
    return {
      key: conflict.key,
      local: op ? (op.deleted ? undefined : cloneSyncValue_(op.value)) : localEntities[conflict.key],
      remote: conflict.serverDeleted ? undefined : cloneSyncValue_(conflict.serverValue),
      localAt: op ? op.updatedAt : '',
      remoteAt: conflict.serverUpdatedAt || '',
      serverEntityRevision: parseInt(conflict.serverEntityRevision, 10) || 0,
      mutationId: conflict.mutationId || (op && op.mutationId) || '',
      version: parseInt(conflict.version, 10) || (op && parseInt(op.version, 10)) || 1
    };
  }).filter(function(conflict){
    return !shouldSkipPlannerConflict_(conflict.key, conflict.local, conflict.remote);
  });
  if(!conflicts.length) return false;
  plannerSyncConflictPending_ = {
    mode: 'outbox',
    local: cloneSyncValue_(localPayload),
    remote: cloneSyncValue_(remote || {}),
    serverRevision: parseInt(serverRevision, 10) || getPayloadRevision_(remote),
    conflicts: conflicts
  };
  renderPlannerConflictUi_(plannerSyncConflictPending_);
  return true;
}
window.applyPlannerConflictChoices_ = async function(){
  var pending = plannerSyncConflictPending_;
  if(!pending) return;
  if(pending.mode === 'outbox'){
    var clearDeletedIds = [];
    var remotePicks = [];
    pending.conflicts.forEach(function(conflict, i){
      var picked = document.querySelector('input[name="sync-conflict-' + i + '"]:checked');
      var useLocal = picked && picked.value === 'local';
      var key = String(conflict.key || '');
      if(!useLocal && (key.indexOf('generated:') === 0 || key.indexOf('published:') === 0) &&
        hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.local)) &&
        !hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.remote))){
        useLocal = true;
      }
      var opIndex = (state.syncOutbox || []).findIndex(function(op){
        return op && (op.mutationId === conflict.mutationId || op.key === conflict.key);
      });
      if(!useLocal){
        state.syncOutbox = (state.syncOutbox || []).filter(function(op){
          if(!op || op.key !== conflict.key) return true;
          return op.mutationId !== conflict.mutationId || (parseInt(op.version, 10) || 1) !== conflict.version;
        });
        remotePicks.push(conflict);
        var remoteKey = key;
        if(remoteKey.indexOf('deleted:') === 0) clearDeletedIds.push(remoteKey.slice('deleted:'.length));
        if(remoteKey.indexOf('draft:') === 0 && conflict.remote !== undefined) clearDeletedIds.push(remoteKey.slice('draft:'.length));
        return;
      }
      var now = new Date().toISOString();
      if(opIndex >= 0){
        state.syncOutbox[opIndex].baseEntityRevision = conflict.serverEntityRevision;
        state.syncOutbox[opIndex].updatedAt = now;
        state.syncOutbox[opIndex].version = (parseInt(state.syncOutbox[opIndex].version, 10) || 1) + 1;
      } else {
        state.syncOutbox.push({
          mutationId: makePlannerMutationId_(),
          version: 1,
          key: conflict.key,
          value: conflict.local === undefined ? null : cloneSyncValue_(conflict.local),
          deleted: conflict.local === undefined,
          baseEntityRevision: conflict.serverEntityRevision,
          updatedAt: now
        });
      }
    });
    // 원격 통째 치환 대신 로컬(미충돌 dirty 포함) ∪ 원격 ∪ 남은 outbox
    var outboxMerged = overlayOutboxOnPayload_(
      mergePlannerPayloads_(getPersistPayload(), pending.remote || {})
    );
    // LWW merge가 로컬을 다시 살리지 않도록, 서버로 고른 키는 마지막에 강제 적용
    remotePicks.forEach(function(conflict){
      setSyncEntity_(outboxMerged, conflict.key, conflict.remote === undefined ? undefined : cloneSyncValue_(conflict.remote));
      if(!outboxMerged.syncEntityUpdatedAt) outboxMerged.syncEntityUpdatedAt = {};
      outboxMerged.syncEntityUpdatedAt[conflict.key] = conflict.remoteAt || new Date().toISOString();
    });
    applyPersistPayload(outboxMerged, {
      skipRestorePending: true,
      clearDeletedDraftIds: clearDeletedIds
    });
    state.syncRevision = pending.serverRevision;
    state.syncEntityRevisions = ensureSyncEntityRevisions_(pending.remote || {});
    state.syncEntityTombstones = Object.assign({}, (pending.remote && pending.remote.syncEntityTombstones) || {});
    state.syncBaseEntityUpdatedAt = Object.assign({}, (pending.remote && pending.remote.syncEntityUpdatedAt) || {});
    rebuildDirtyStateFromOutbox_();
    plannerDirtyGeneration_++;
    plannerSyncConflictPending_ = null;
    var outboxOverlay = document.getElementById('sync-conflict-overlay');
    if(outboxOverlay) outboxOverlay.classList.remove('open');
    save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
    if(state.syncDirty){
      var outboxResult = await plannerGasPushNow_();
      if(!outboxResult || !outboxResult.ok){
        if(typeof setAppToast === 'function') setAppToast('선택 내용은 이 기기에 보관했고 서버 저장을 다시 시도합니다.', { duration: 5200, variant: 'err' });
        return;
      }
    }
    if(typeof setAppToast === 'function') setAppToast('충돌 선택 내용을 서버에 반영했어요.', { duration: 4300, variant: 'ok' });
    return;
  }
  if(pending.dirtyGeneration != null && pending.dirtyGeneration !== plannerDirtyGeneration_){
    plannerSyncConflictPending_ = null;
    if(!openPlannerConflict_(getPersistPayload(), pending.remote, pending.serverRevision)){
      var staleOverlay = document.getElementById('sync-conflict-overlay');
      if(staleOverlay) staleOverlay.classList.remove('open');
      schedulePlannerGasPush_(true);
    }
    if(typeof setAppToast === 'function') setAppToast('충돌 확인 중 새 편집이 감지되어 최신 내용으로 다시 확인합니다.', { duration: 4800, variant: 'err' });
    return;
  }
  var merged = mergePlannerPayloads_(pending.local, pending.remote);
  var times = Object.assign({}, merged.syncEntityUpdatedAt || {});
  var keptLocal = false;
  var resolvedKeys = {};
  var clearDeletedIds = [];
  pending.conflicts.forEach(function(conflict, i){
    var picked = document.querySelector('input[name="sync-conflict-' + i + '"]:checked');
    var useLocal = picked && picked.value === 'local';
    var key = String(conflict.key || '');
    // 안전장치: 생성·발행 초안이 로컬에만 본문이 있는데 서버를 고르면 유실 → 로컬 유지
    if(!useLocal && (key.indexOf('generated:') === 0 || key.indexOf('published:') === 0) &&
      hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.local)) &&
      !hasUsableAiDraftContent_(unwrapSyncEntityValue_(conflict.remote))){
      useLocal = true;
    }
    resolvedKeys[conflict.key] = true;
    setSyncEntity_(merged, conflict.key, useLocal ? conflict.local : conflict.remote);
    times[conflict.key] = useLocal ? new Date().toISOString() : conflict.remoteAt;
    if(useLocal){
      state.syncDirtyEntityKeys[conflict.key] = true;
      keptLocal = true;
    } else {
      delete state.syncDirtyEntityKeys[conflict.key];
      var rk = key;
      if(rk.indexOf('deleted:') === 0) clearDeletedIds.push(rk.slice('deleted:'.length));
      if(rk.indexOf('draft:') === 0 && conflict.remote !== undefined) clearDeletedIds.push(rk.slice('draft:'.length));
    }
  });
  merged.syncEntityUpdatedAt = times;
  merged.syncRevision = pending.serverRevision;
  // 원격으로 고른 키의 옛 outbox mutation 제거 → 다음 push가 선택을 되돌리지 않게
  state.syncOutbox = (state.syncOutbox || []).filter(function(op){
    if(!op || !resolvedKeys[op.key]) return true;
    return !!state.syncDirtyEntityKeys[op.key];
  });
  applyPersistPayload(merged, {
    skipRestorePending: true,
    clearDeletedDraftIds: clearDeletedIds
  });
  state.syncRevision = pending.serverRevision;
  state.syncBaseEntityUpdatedAt = Object.assign({}, pending.remote.syncEntityUpdatedAt || {});
  ensureOutboxFromLegacyDirty_(getPersistPayload());
  rebuildDirtyStateFromOutbox_();
  state.syncDirty = Object.keys(state.syncDirtyEntityKeys || {}).length > 0 || !!state.syncNeedsSnapshot;
  if(keptLocal) plannerDirtyGeneration_++;
  plannerSyncConflictPending_ = null;
  var overlay = document.getElementById('sync-conflict-overlay');
  if(overlay) overlay.classList.remove('open');
  save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true });
  if(state.syncDirty){
    var result = await plannerGasPushNow_();
    if(!result || !result.ok){
      if(typeof setAppToast === 'function') setAppToast('선택 내용은 이 기기에 저장됐지만 서버 저장은 완료되지 않았어요.\n자동으로 다시 시도합니다.', { duration: 5600, variant: 'err' });
      return;
    }
  }
  if(typeof setAppToast === 'function') setAppToast('선택한 내용의 서버 동기화를 확인했어요.', { duration: 4500, variant: 'ok' });
};
function reconcileRemoteBeforeWrite_(local, remote, serverRevision){
  var mode = reconcileLocalWithServerPayload_(local, remote, serverRevision);
  if(mode === 'conflict') return false;
  save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true, forceWrite: true });
  return true;
}
window.runManualFullSync_ = async function(){
  var btn = document.getElementById('btn-sync-now');
  var err = document.getElementById('sync-status-err');
  if(btn) btn.disabled = true;
  if(err) err.textContent = '';
  updateSyncStatusUI_();
  try {
    markSyncReason_('수동');
    var changed = await syncAllSourcesIfNewer_('manual');
    var pushResult = { ok: true, skipped: true };
    if(isServerSyncConfigured_()){
      pushResult = await plannerGasPushNow_();
      if(!pushResult || !pushResult.ok){
        throw (pushResult && pushResult.error) || new Error(pushResult && pushResult.conflict ? '동기화 충돌을 먼저 확인해 주세요.' : '서버 저장을 완료하지 못했습니다.');
      }
    }
    if(hasDriveValidToken_()){
      await driveUploadNow();
    }
    _syncStatusModalRemote = await fetchServerSyncMeta_();
    var body = document.getElementById('sync-status-body');
    if(body) body.innerHTML = renderSyncStatusBodyHTML_(getSyncStatusInfo_());
    if(typeof setAppToast === 'function'){
      setAppToast(changed ? '최신 데이터를 받아 서버 저장까지 확인했어요.' : '서버와 최신 상태가 일치해요.', { duration: 4200, variant: 'ok' });
    }
  } catch(e3){
    var msg = (e3 && e3.message) ? e3.message : String(e3);
    if(err) err.textContent = msg;
    if(typeof setAppToast === 'function') setAppToast('동기화에 실패했어요.\n' + msg, { duration: 6500, variant: 'err' });
  } finally {
    if(btn) btn.disabled = false;
    updateSyncStatusUI_();
  }
};
async function syncAllSourcesIfNewer_(reason){
  return withPlannerSyncMutex_(function(){ return syncAllSourcesIfNewerCore_(reason); });
}
async function syncAllSourcesIfNewerCore_(reason){
  var localPayload = getPersistPayload();
  var localMs = getPayloadSavedMs_(localPayload);
  var remote = null;
  var remoteMs = 0;
  var remoteSource = '';
  var remoteRevision = 0;

  if(!PLANNER_TEAM_MODE && hasDriveValidToken_()){
    try {
      var token = await getDriveAccessToken({ forcePrompt: false });
      var out = await driveDownloadCloudPayload_(token);
      if(out.data){
        var ms = getPayloadSavedMs_(out.data);
        if(!remote || ms >= remoteMs){
          remote = out.data;
          remoteMs = ms;
          remoteSource = 'Drive';
        } else {
          remote = mergePlannerPayloads_(remote, out.data);
          remoteMs = getPayloadSavedMs_(remote);
        }
      }
    } catch(e0){
      console.warn('[동기화 Drive]', reason || '', e0);
    }
  }

  var url = getPlannerGasUrl_();
  if(url && location.protocol !== 'file:'){
    try {
      var data = await plannerGasJsonRequest_({ action: 'plannerSyncPull' }, 20000);
      applyPlannerServerCaps_(data, true);
      if(data.result === 'success' && data.payload){
        remoteRevision = parseInt(data.serverRevision, 10) || getPayloadRevision_(data.payload);
        var ms2 = getPayloadSavedMs_(data.payload);
        remote = data.payload;
        remoteMs = ms2;
        remoteSource = '서버';
      }
    } catch(e1){
      console.warn('[동기화 서버]', reason || '', e1);
    }
  }

  if(!remote) return false;

  // 팀 모드·온라인 복귀: GAS 기준. 로컬 dirty가 있을 때만 충돌/부분 병합.
  var mode = reconcileLocalWithServerPayload_(localPayload, remote, remoteRevision || getPayloadRevision_(remote));
  if(mode === 'conflict'){
    renderTabs();
    renderMain();
    updateSyncStatusUI_();
    return false;
  }
  try {
    if(remote.dailyAutoLast) localStorage.setItem('ht_daily_auto_last', remote.dailyAutoLast);
  } catch(e2){}
  save({ skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true, forceWrite: true });
  updateApiBadge();
  renderTabs();
  renderMain();
  updateDriveButtonState();
  markSyncReason_(reason || 'auto');
  if(remoteSource === '서버') markGasSyncOk_(state.syncRevision, remote.savedAt || remote.localSavedAt);
  updateSyncStatusUI_();
  if(mode === 'merged' && hasPendingLocalSyncChanges_() && plannerSyncBootstrapReady_){
    schedulePlannerGasPush_(true);
  }
  if(remote.plannerLastAuto && remote.plannerLastAuto.draftId != null){
    handleServerPlannerAuto_(remote);
    setTimeout(function(){
      openNextPublishRecommendationFromEntry_(remote.plannerLastAuto.draftId, remote.plannerLastAuto.catId);
    }, 400);
  } else if(mode === 'adopted' && reason === 'online' && typeof setAppToast === 'function'){
    setAppToast((remoteSource || '서버') + ' 최신 데이터로 맞췄어요.', { duration: 3200, variant: 'ok' });
  }
  return true;
}

async function plannerGasPullIfNewer_(reason){
  return syncAllSourcesIfNewer_(reason);
}
function handleServerPlannerAuto_(payload){
  var auto = payload && payload.plannerLastAuto;
  if(!auto || !auto.draftId || auto.catId == null) return;
  if(draftIsPublished_(auto.draftId)) return;
  var seenKey = 'ht_server_auto_seen_' + (auto.at || auto.draftId);
  try {
    if(localStorage.getItem(seenKey)) return;
    localStorage.setItem(seenKey, '1');
  } catch(e){}
  if(typeof tryNotifyDraftDone === 'function'){
    tryNotifyDraftDone(auto.topic || '오늘의 발행 초안', true, auto.draftId, auto.catId, true);
  }
}
function isUserAddedDraftId_(id){
  return /^d\d+-c\d+$/.test(String(id || ''));
}
function userAddedDraftTimestamp_(id){
  var m = String(id || '').match(/-c(\d+)$/);
  return m ? parseInt(m[1], 10) : 0;
}
function purgeDeletedDraftsFromCatalog_(){
  var deleted = state.deletedDraftIds || {};
  if(!deleted || !Object.keys(deleted).length) return;
  CATEGORIES.forEach(function(cat){
    cat.drafts = (cat.drafts || []).filter(function(d){ return d && d.id && !deleted[d.id]; });
  });
}
function collectExtraDrafts(){
  var out = {};
  var deleted = state.deletedDraftIds || {};
  CATEGORIES.forEach(function(cat, i){
    out[i] = (cat.drafts || []).filter(function(d){
      return d && isUserAddedDraftId_(d.id) && !deleted[d.id];
    }).map(function(d){
      return {
        id: d.id, topic: d.topic, angle: d.angle || '',
        series: d.series || '', step: d.step || '', pillar: d.pillar || '', rationale: d.rationale || '',
        writingBrief: d.writingBrief || '',
        roadmapStepId: d.roadmapStepId || '',
        shareMonth: d.shareMonth || '',
        createdAt: d.createdAt || '',
        sourceNote: d.sourceNote || '',
        youtubeAnalysis: d.youtubeAnalysis || '',
        youtubeUrls: d.youtubeUrls || [],
        articleFlow: d.articleFlow || null,
        updatedAt: d.updatedAt || (userAddedDraftTimestamp_(d.id) ? new Date(userAddedDraftTimestamp_(d.id)).toISOString() : '')
      };
    });
  });
  return out;
}
function mergeExtraDrafts(byCat){
  if(!byCat || typeof byCat !== 'object') return;
  CATEGORIES.forEach(function(cat, i){
    var key = String(i);
    if(!Object.prototype.hasOwnProperty.call(byCat, key) && !Object.prototype.hasOwnProperty.call(byCat, i)) return;
    var incoming = byCat[key] || byCat[i] || [];
    cat.drafts = (cat.drafts || []).filter(function(d){ return !d || !isUserAddedDraftId_(d.id); });
    incoming.forEach(function(d){
      if(!d || !d.id || (state.deletedDraftIds && state.deletedDraftIds[d.id])) return;
      cat.drafts.push({
        id: d.id, topic: d.topic || '', angle: d.angle || '',
        series: d.series || '', step: d.step || '', pillar: d.pillar || '', rationale: d.rationale || '',
        writingBrief: d.writingBrief || '',
        roadmapStepId: d.roadmapStepId || '',
        shareMonth: d.shareMonth || '',
        createdAt: d.createdAt || '',
        sourceNote: d.sourceNote || '',
        youtubeAnalysis: d.youtubeAnalysis || '',
        youtubeUrls: d.youtubeUrls || [],
        articleFlow: d.articleFlow || null,
        updatedAt: d.updatedAt || ''
      });
      var merged = cat.drafts[cat.drafts.length - 1];
      // 저장돼 있던 roadmapStepId(주제 기획안 단계)를 존중. 없을 때만 기타로.
      if(merged) applyResolvedUserAddedStepOrMisc_(merged, i);
    });
  });
  purgeDeletedDraftsFromCatalog_();
}
function applyPersistPayload(s, opts){
  if(!s) return;
  var legacyDirtyBeforeRestore = !!s._syncDirty;
  var prevDeleted = state.deletedDraftIds || {};
  state.published = s.published || {};
  state.generatedOnly = s.generatedOnly || {};
  state.localSavedAt = s.localSavedAt || '';
  state.syncRevision = parseInt(s.syncRevision, 10) || state.syncRevision || 0;
  state.syncEntityUpdatedAt = Object.assign({}, s.syncEntityUpdatedAt || {});
  state.syncEntityRevisions = Object.assign({}, s.syncEntityRevisions || {});
  state.syncEntityTombstones = Object.assign({}, s.syncEntityTombstones || {});
  if(s._syncBaseEntityUpdatedAt) state.syncBaseEntityUpdatedAt = Object.assign({}, s._syncBaseEntityUpdatedAt);
  if(s._syncDirty != null) state.syncDirty = !!s._syncDirty;
  if(s._syncDirtyEntityKeys) state.syncDirtyEntityKeys = Object.assign({}, s._syncDirtyEntityKeys);
  if(s._syncNeedsSnapshot != null) state.syncNeedsSnapshot = !!s._syncNeedsSnapshot;
  if(Array.isArray(s._syncOutbox)) state.syncOutbox = normalizeSyncOutbox_(s._syncOutbox);
  if(legacyDirtyBeforeRestore && !(state.syncOutbox || []).length &&
      !Object.keys(state.syncDirtyEntityKeys || {}).length && !state.syncNeedsSnapshot){
    state.syncNeedsSnapshot = true;
    state.syncDirty = true;
  }
  state.chatgptOpenUrl = s.chatgptOpenUrl || '';
  state.prompts = s.prompts !== undefined ? s.prompts : null;
  state.promptRefineMilestones = s.promptRefineMilestones || {};
  state.branding = s.branding && typeof s.branding === 'object' ? s.branding : null;
  state.draftBrandOverrides = s.draftBrandOverrides && typeof s.draftBrandOverrides === 'object' ? s.draftBrandOverrides : {};
  if(s.publishRecCurrentTabOnly != null) state.publishRecCurrentTabOnly = !!s.publishRecCurrentTabOnly;
  if(s.syncRationalesOnBrandSave != null) state.syncRationalesOnBrandSave = s.syncRationalesOnBrandSave !== false;
  if(opts && opts.replaceDeletedDraftIds){
    state.deletedDraftIds = Object.assign({}, s.deletedDraftIds || {});
  } else {
    state.deletedDraftIds = Object.assign({}, s.deletedDraftIds || {}, prevDeleted);
    if(opts && Array.isArray(opts.clearDeletedDraftIds)){
      opts.clearDeletedDraftIds.forEach(function(id){
        if(id) delete state.deletedDraftIds[id];
      });
    }
  }
  state.pinnedDraftIds = s.pinnedDraftIds && typeof s.pinnedDraftIds === 'object' ? s.pinnedDraftIds : {};
  if(s.plannerSetupDismissed) state.plannerSetupDismissed = true;
  // GAS 권위 채택 시 opsManual도 서버 기준으로 맞춤 (로컬 sticky 방지)
  if(opts && opts.authoritativeAdopt){
    state.opsManual = (s.opsManual && typeof s.opsManual === 'object') ? s.opsManual : null;
  } else if(s.opsManual && typeof s.opsManual === 'object'){
    state.opsManual = s.opsManual;
  }
  if(s.catGroupLast && typeof s.catGroupLast === 'object'){
    state.catGroupLast = s.catGroupLast;
    ensureCatGroupLast_();
  }
  mergeExtraDrafts(s.extraDraftsByCat);
  // 단계 id 마이그레이션 전에 misc 로 끌어내리면 안 됨 → 아래에서 plan 복구 후 재배치
  purgeDeletedDraftsFromCatalog_();
  applyBuiltinDraftBrandSeeds_();
  if(!(opts && opts.skipRestorePending)){
    restorePendingSubGoalPlan_();
    restorePendingYearPlan_();
  }
  var migOpts = opts && opts.authoritativeAdopt
    ? { skipDriveUpload: true, skipGasPush: true, skipMarkDirty: true, skipEntityStamp: true, forceWrite: true }
    : { skipDriveUpload: true, skipGasPush: true };
  var migrated = false;
  if(sanitizeBrandingClinicRefs_()){ save(migOpts); migrated = true; }
  if(ensureYearPlanMigrated_()){ save(migOpts); migrated = true; }
  var planKeyPayload = {
    branding: state.branding,
    syncEntityUpdatedAt: state.syncEntityUpdatedAt,
    syncEntityRevisions: state.syncEntityRevisions,
    syncEntityTombstones: state.syncEntityTombstones
  };
  var planIdsChanged = ensurePlanRowStableIdsInPayload_(planKeyPayload);
  var planKeysChanged = migrateIndexedPlanEntityKeysInPayload_(planKeyPayload, state.syncOutbox);
  if(planIdsChanged || planKeysChanged){
    state.syncEntityUpdatedAt = planKeyPayload.syncEntityUpdatedAt || state.syncEntityUpdatedAt;
    state.syncEntityRevisions = planKeyPayload.syncEntityRevisions || state.syncEntityRevisions;
    state.syncEntityTombstones = planKeyPayload.syncEntityTombstones || state.syncEntityTombstones;
    var nextDirty = {};
    Object.keys(state.syncDirtyEntityKeys || {}).forEach(function(k){
      nextDirty[remapIndexedPlanEntityKey_(k, planKeyPayload)] = true;
    });
    state.syncDirtyEntityKeys = nextDirty;
    var nextBase = {};
    Object.keys(state.syncBaseEntityUpdatedAt || {}).forEach(function(k){
      nextBase[remapIndexedPlanEntityKey_(k, planKeyPayload)] = state.syncBaseEntityUpdatedAt[k];
    });
    state.syncBaseEntityUpdatedAt = nextBase;
    rebuildDirtyStateFromOutbox_();
    save(migOpts);
    migrated = true;
  }
  if(repairAllIncompleteSubGoalPlans_()){
    save(migOpts);
    migrated = true;
  }
  if(repairAllSubGoalDraftAssignments_()){
    save(migOpts);
    migrated = true;
  }
  CATEGORIES.forEach(function(cat, i){ ensureUserAddedDraftsInMisc_(i); });
  if(migrateLegacyPublishTabPublished_()){ save(migOpts); migrated = true; }
  if(migrateLegacyBaseAffiliationPrompt_()){ save(migOpts); migrated = true; }
  if(migrateLegacyExpertCoursePrompts_()){ save(migOpts); migrated = true; }
  if(migrateUniversalContentFlowPrompts_()){ save(migOpts); migrated = true; }
  if(migrated && opts && opts.authoritativeAdopt) state._postAdoptMigration = true;
}

function writeLocalStoragePayloadString_(payloadStr){
  try {
    localStorage.setItem(SK, payloadStr);
    plannerStorageWriteFailed_ = false;
    return true;
  } catch (e0) {
    try {
      localStorage.setItem(SK, payloadStr);
      plannerStorageWriteFailed_ = false;
      return true;
    } catch (e1) {
      plannerStorageWriteFailed_ = true;
      if (typeof setAppToast === 'function') {
        setAppToast('이 기기에 저장하지 못했어요.\n저장 공간이 부족하거나 브라우저가 비공개 모드일 수 있어요.', { duration: 6500, variant: 'err' });
      } else {
        alert('저장에 실패했습니다.');
      }
      plannerSyncBootstrapReady_ = false;
      setPlannerBootstrapUi_('failed', '이 기기의 저장 공간에 기록하지 못해 편집을 잠갔습니다.\n브라우저 저장 공간을 확보한 뒤 다시 시도해 주세요.');
      return false;
    }
  }
}
/** 내용 변경 없이 sync 메타만 바뀐 경우 — localSavedAt/dirty/업로드는 건드리지 않고 디스크만 맞춤 */
function persistSyncMetaIfNeeded_(){
  var payloadStr = JSON.stringify(getLocalStoragePayload());
  var prevStr = null;
  try { prevStr = localStorage.getItem(SK); } catch(ePrev){}
  if(prevStr === payloadStr) return true;
  var ok = writeLocalStoragePayloadString_(payloadStr);
  if(ok) scheduleSyncStatusUiRefresh_();
  return ok;
}
function save(opts) {
  var o = opts || {};
  var previous = null;
  try { previous = JSON.parse(localStorage.getItem(SK) || 'null'); } catch(ePrev){}
  var beforeStamp = getPersistPayload();
  var contentChanged = syncPayloadContentFingerprint_(previous || {}) !== syncPayloadContentFingerprint_(beforeStamp);
  var untrackedChanged = syncUntrackedContentFingerprint_(previous || {}) !== syncUntrackedContentFingerprint_(beforeStamp);
  var changedEntities = o.skipEntityStamp ? [] : listChangedSyncEntityKeys_(previous || {}, beforeStamp);
  var realChange = !!(changedEntities.length || contentChanged || untrackedChanged);
  // 실제 내용 변경이 없으면 localSavedAt·dirty·업로드를 건드리지 않음 (가짜 "최신" 방지)
  // sync 메타(_syncDirty, outbox, revision 등)만 바뀐 경우는 조용히 디스크에만 반영
  if(!realChange && !o.forceWrite){
    return persistSyncMetaIfNeeded_();
  }
  if(!o.skipEntityStamp && changedEntities.length){
    stampChangedSyncEntities_(previous || {}, beforeStamp);
  }
  // 실제 내용이 바뀐 경우에만 localSavedAt 갱신 (forceWrite 메타 저장은 시각을 올리지 않음)
  if(realChange){
    state.localSavedAt = new Date().toISOString();
  }
  if(!o.skipMarkDirty){
    var becameDirty = changedEntities.length > 0 || contentChanged || untrackedChanged;
    if(changedEntities.length || contentChanged) state.syncDirty = true;
    changedEntities.forEach(function(key){ state.syncDirtyEntityKeys[key] = true; });
    enqueueSyncOutboxChanges_(changedEntities, getPersistPayload());
    if(untrackedChanged) state.syncNeedsSnapshot = true;
    rebuildDirtyStateFromOutbox_();
    if(untrackedChanged) state.syncDirty = true;
    if(becameDirty) plannerDirtyGeneration_++;
  }
  var payload = JSON.stringify(getLocalStoragePayload());
  var ok = writeLocalStoragePayloadString_(payload);
  if (ok) {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      try {
        if (!sessionStorage.getItem('ht_offline_save_hint')) {
          sessionStorage.setItem('ht_offline_save_hint', '1');
          if (typeof setAppToast === 'function') {
            setAppToast('오프라인 상태예요.\n이 기기에는 저장됐고, 인터넷에 연결되면 서버 동기화를 다시 시도합니다.', { duration: 4800, variant: 'ok' });
          }
        }
      } catch (e2) {}
    }
    if(plannerSyncBootstrapReady_ && !plannerSyncConflictPending_){
      if(!o.skipDriveUpload) scheduleDriveUpload(!!o.driveImmediate);
      if(!o.skipGasPush) schedulePlannerGasPush_(!!o.gasImmediate);
      else if(!o.skipMarkDirty && state.syncDirty) schedulePlannerGasPush_(false);
    }
    scheduleSyncStatusUiRefresh_();
  }
  return ok;
}

// ── Google Drive (앱 데이터 폴더, 단일 JSON) ──
const DRIVE_SYNC_FILENAME = 'planner-sync-v1.json';
const DRIVE_CONNECTED_KEY = 'ht_drive_connected';
const DRIVE_LAST_SYNC_KEY = 'ht_drive_last_sync_ok';
const DRIVE_LAST_SYNC_REV_KEY = 'ht_drive_last_sync_rev';
const GAS_LAST_SYNC_KEY = 'ht_gas_last_sync_ok';
const GAS_LAST_SYNC_REV_KEY = 'ht_gas_last_sync_rev';
const SYNC_LAST_REASON_KEY = 'ht_sync_last_reason';
/** Google OAuth 웹 클라이언트 ID — 비밀이 아니므로 내장. 다른 ID로 덮어쓰려면 Drive 모달에서 입력( ht_gdrive_cid 저장 ) */
const GOOGLE_OAUTH_WEB_CLIENT_ID = '442956975507-a6qqamnjlhuqflflfdknq20slb16jrmc.apps.googleusercontent.com';
let driveTokenWaiters = [];
let driveOAuthPopupInFlight = false;
let driveUploadTimer = null;
let promptCloudSaveTimer = null;

function loadGsiScript(){
  if(window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
  if(window.__htGsiLoadPromise) return window.__htGsiLoadPromise;
  window.__htGsiLoadPromise = new Promise(function(resolve, reject){
    var s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = function(){
      // GIS 내부 초기화가 onload 직후 끝나지 않을 수 있어 한 틱 대기
      setTimeout(resolve, 0);
    };
    s.onerror = function(){ reject(new Error('Google 로그인 스크립트를 불러오지 못했어요')); };
    document.head.appendChild(s);
  });
  return window.__htGsiLoadPromise;
}
function driveGsiWarmup_(){
  if(location.protocol === 'file:') return;
  loadGsiScript().catch(function(){});
}
function getDriveClientId(){
  var fromStore = (localStorage.getItem('ht_gdrive_cid') || '').trim();
  if(fromStore) return fromStore;
  return GOOGLE_OAUTH_WEB_CLIENT_ID.trim();
}
function setDriveConnected_(connected){
  try {
    if(connected) localStorage.setItem(DRIVE_CONNECTED_KEY, '1');
    else localStorage.removeItem(DRIVE_CONNECTED_KEY);
  } catch(e){}
}
function hasDriveConnection_(){
  try {
    return localStorage.getItem(DRIVE_CONNECTED_KEY) === '1' || !!localStorage.getItem('ht_drive_oauth');
  } catch(e){ return false; }
}
function getDriveInteractivePrompt_(){
  // 첫 연결은 동의 화면(consent), 재연결은 가능한 한 무프롬프트로 시도
  return hasDriveConnection_() ? '' : 'consent';
}
/** 실제로 API 호출 가능한 유효 토큰 (만료 전) */
function hasDriveValidToken_(){
  return !!readCachedDriveToken_();
}
function flushDriveTokenWaiters(ok, val){
  var w = driveTokenWaiters.slice();
  driveTokenWaiters = [];
  w.forEach(function(x){
    if(ok) x.resolve(val);
    else x.reject(val instanceof Error ? val : new Error(String(val)));
  });
}
function getDriveHintEmail_(){
  try { return (localStorage.getItem('ht_drive_hint_email') || '').trim(); } catch(e){ return ''; }
}
function saveDriveHintEmail_(email){
  try {
    if(email) localStorage.setItem('ht_drive_hint_email', String(email).trim());
  } catch(e){}
}
async function fetchAndSaveDriveHintEmail_(accessToken){
  if(!accessToken || getDriveHintEmail_()) return;
  try {
    var r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken }
    });
    if(!r.ok) return;
    var u = await r.json();
    if(u && u.email) saveDriveHintEmail_(u.email);
  } catch(e){}
}
function readCachedDriveToken_(){
  try {
    var raw = localStorage.getItem('ht_drive_oauth');
    if(!raw) return '';
    var t = JSON.parse(raw);
    if(t.access_token && t.expires_at > Date.now()) return t.access_token;
  } catch(e1){}
  return '';
}
function isInAppBrowser_(){
  var ua = navigator.userAgent || '';
  return /KAKAOTALK|Instagram|FBAN|FBAV|Line\/|NAVER|DaumApps/i.test(ua);
}
function isDrivePreferRedirect_(){
  if(location.protocol === 'file:') return false;
  if(isInAppBrowser_()) return true;
  var ua = navigator.userAgent || '';
  if(/Android|iPhone|iPad|iPod|Mobile|CriOS|FxiOS/i.test(ua)) return true;
  if(navigator.maxTouchPoints > 0 && window.innerWidth < 960) return true;
  return false;
}
function isPlannerGithubDeploy_(){
  return location.hostname === 'breezefeel.github.io' && (location.pathname || '').indexOf('/Thewellness') !== -1;
}
/** OAuth·주소창 정리용 (GitHub Pages: 항상 /Thewellness/) */
function getPlannerCleanUrl_(){
  if(isPlannerGithubDeploy_()) return '/Thewellness/';
  return (location.pathname || '/') + (location.search || '');
}
function getDriveRedirectUri_(){
  if(isPlannerGithubDeploy_()) return PLANNER_PUBLIC_URL.replace(/\/?$/, '/');
  var path = location.pathname || '/';
  var u = (location.origin + path).replace(/#.*$/, '').replace(/\?.*$/, '');
  if(/\.html$/i.test(u)) return u;
  return u.replace(/\/?$/, '/');
}
function normalizeDriveOAuthPrompt_(prompt){
  var p = prompt || 'consent';
  if(!readCachedDriveToken_() && (p === 'none' || p === '')) return 'consent';
  return p;
}
function showDriveOAuthBusy_(msg){
  var el = document.getElementById('drive-oauth-busy');
  var tx = document.getElementById('drive-oauth-busy-msg');
  if(tx) tx.textContent = msg || 'Google 로그인 결과를 처리하는 중…';
  if(el) el.classList.add('show');
}
function hideDriveOAuthBusy_(){
  var el = document.getElementById('drive-oauth-busy');
  if(el) el.classList.remove('show');
  try {
    sessionStorage.removeItem('ht_drive_oauth_started');
    sessionStorage.removeItem('ht_drive_oauth_redirecting');
  } catch(e){}
  if(window.__htDriveOAuthRedirectTimer){
    clearTimeout(window.__htDriveOAuthRedirectTimer);
    window.__htDriveOAuthRedirectTimer = null;
  }
}
function clearDriveOAuthInflight_(){
  try {
    sessionStorage.removeItem('ht_drive_oauth_started');
    sessionStorage.removeItem('ht_drive_oauth_redirecting');
  } catch(e){}
}
function readDriveOAuthHash_(){
  var h = location.hash || '';
  if(h.indexOf('access_token=') !== -1 || h.indexOf('error=') !== -1) return h;
  try {
    var saved = sessionStorage.getItem('ht_drive_oauth_hash') || '';
    if(saved) return saved.indexOf('#') === 0 ? saved : ('#' + saved.replace(/^#/, ''));
  } catch(e){}
  return '';
}
function checkDriveOAuthStuck_(){
  var started = 0;
  try { started = parseInt(sessionStorage.getItem('ht_drive_oauth_started') || '0', 10); } catch(e){}
  if(!started || Date.now() - started < 20000) return;
  if(readCachedDriveToken_()){ hideDriveOAuthBusy_(); return; }
  hideDriveOAuthBusy_();
  try { sessionStorage.removeItem('ht_drive_oauth_started'); } catch(e2){}
  var errEl = document.getElementById('drive-modal-err');
  if(errEl) errEl.textContent = '';
  if(typeof setAppToast === 'function'){
    setAppToast('Drive 로그인이 완료되지 않았어요.\n① Safari·Chrome에서 열기 ② Google Cloud에 리디렉션 URI 등록\n' + getDriveRedirectUri_(), { duration: 9000, variant: 'err' });
  }
}
function checkDriveOAuthFailedReturn_(){
  if(readCachedDriveToken_()){ hideDriveOAuthBusy_(); clearDriveOAuthInflight_(); return; }
  var started = 0;
  try { started = parseInt(sessionStorage.getItem('ht_drive_oauth_started') || '0', 10); } catch(e){}
  if(!started) return;
  if(Date.now() - started > 120000) return;
  var h = readDriveOAuthHash_();
  if(h.indexOf('access_token=') !== -1 || h.indexOf('error=') !== -1) return;
  hideDriveOAuthBusy_();
  try { sessionStorage.removeItem('ht_drive_oauth_started'); } catch(e2){}
  if(typeof setAppToast === 'function'){
    setAppToast('Google 로그인이 끝나지 않았어요.\n다시 Drive를 누르고, 로그인 화면에서 계정 선택·허용까지 진행해 주세요.\n(Safari·Chrome 권장)', { duration: 9000, variant: 'err' });
  }
}
function ensureDriveTokenClient_(useRedirect){
  var cid = getDriveClientId();
  if(!cid) throw new Error('OAuth 클라이언트 ID를 입력해 주세요');
  var redirect = !!useRedirect;
  if(window.__htDriveTokenClient && window.__htDriveTokenClientCid === cid && window.__htDriveTokenClientRedirect === redirect) return;
  var opts = {
    client_id: cid,
    scope: 'https://www.googleapis.com/auth/drive.appdata',
    callback: onDriveTokenReceived,
    error_callback: onDriveTokenError_
  };
  var hint = getDriveHintEmail_();
  if(hint) opts.hint = hint;
  if(redirect){
    opts.ux_mode = 'redirect';
    opts.redirect_uri = getDriveRedirectUri_();
  }
  window.__htDriveTokenClient = google.accounts.oauth2.initTokenClient(opts);
  window.__htDriveTokenClientCid = cid;
  window.__htDriveTokenClientRedirect = redirect;
}
function consumeDriveOAuthRedirect_(){
  var h = readDriveOAuthHash_();
  if(h.indexOf('access_token=') === -1 && h.indexOf('error=') === -1) return false;
  try {
    var sig = h.slice(0, 120);
    if(sessionStorage.getItem('ht_drive_oauth_done_sig') === sig) return !!readCachedDriveToken_();
    sessionStorage.setItem('ht_drive_oauth_done_sig', sig);
  } catch(eSig){}
  clearDriveOAuthInflight_();
  showDriveOAuthBusy_('Drive 연동을 마무리하는 중…');
  var qs = h.indexOf('#') === 0 ? h.slice(1) : h;
  var params = new URLSearchParams(qs);
  var cleanUrl = getPlannerCleanUrl_();
  try { sessionStorage.removeItem('ht_drive_oauth_hash'); } catch(e0){}
  if(params.get('error')){
    hideDriveOAuthBusy_();
    try { sessionStorage.removeItem('ht_drive_pending_action'); } catch(e0b){}
    history.replaceState(null, '', cleanUrl);
    var rh = '';
    try { rh = sessionStorage.getItem('ht_drive_return_hash') || ''; sessionStorage.removeItem('ht_drive_return_hash'); } catch(e1){}
    if(rh) location.hash = rh;
    if(typeof setAppToast === 'function'){
      setAppToast('Drive 로그인이 취소되었거나 차단되었어요.\nSafari·Chrome에서 다시 시도해 주세요.', { duration: 7000, variant: 'err' });
    }
    return true;
  }
  var token = params.get('access_token');
  if(!token){ hideDriveOAuthBusy_(); return false; }
  var sec = Math.max(parseInt(params.get('expires_in') || '3600', 10) || 3600, 300);
  try {
    localStorage.setItem('ht_drive_oauth', JSON.stringify({
      access_token: token,
      expires_at: Date.now() + sec * 1000 - 60000
    }));
    setDriveConnected_(true);
  } catch(e2){ hideDriveOAuthBusy_(); return false; }
  if(!readCachedDriveToken_()){ hideDriveOAuthBusy_(); return false; }
  fetchAndSaveDriveHintEmail_(token);
  updateDriveButtonState();
  history.replaceState(null, '', cleanUrl);
  var retHash = '';
  try { retHash = sessionStorage.getItem('ht_drive_return_hash') || ''; sessionStorage.removeItem('ht_drive_return_hash'); } catch(e3){}
  hideDriveOAuthBusy_();
  if(retHash) location.hash = retHash;
  return true;
}
async function finishDrivePendingAction_(pendingAction){
  if(!pendingAction) return true;
  if(!readCachedDriveToken_()) return false;
  if(PLANNER_TEAM_MODE && pendingAction === 'pull'){
    try { sessionStorage.removeItem('ht_drive_pending_action'); } catch(e){}
    throw new Error('팀 모드에서는 Drive 데이터를 불러오지 않습니다. Drive는 개인 백업용입니다.');
  }
  if(pendingAction === 'upload'){
    await driveUploadNow();
    if(typeof setAppToast === 'function') setAppToast('Drive에 저장했어요.', { duration: 4500, variant: 'ok' });
    maybeRequestNotificationAfterDrive();
  } else if(pendingAction === 'pull'){
    var token = await getDriveAccessToken({ forcePrompt: false });
    var dl = await driveDownloadCloudPayload_(token);
    if(!dl.data) throw new Error('Drive에 아직 백업 파일이 없어요. 먼저 업로드해 주세요.');
    applyPersistPayload(dl.data);
    save({ skipDriveUpload: true });
    updateApiBadge();
    renderTabs();
    renderMain();
    updateDriveButtonState();
    if(typeof setAppToast === 'function') setAppToast('Drive에서 불러왔어요.', { duration: 4000, variant: 'ok' });
  }
  closeDriveModal();
  return true;
}
function startDriveRedirectAuth_(prompt, pendingAction){
  if(isInAppBrowser_()){
    return Promise.reject(new Error('카카오톡·인스타 등 앱 안 브라우저에서는 Google 로그인이 안 될 수 있어요.\n링크를 복사해 Safari 또는 Chrome에서 열어 주세요.'));
  }
  prompt = normalizeDriveOAuthPrompt_(prompt);
  var hashNow = readDriveOAuthHash_();
  if(hashNow.indexOf('access_token=') !== -1){
    var consumed = consumeDriveOAuthRedirect_();
    if(consumed && readCachedDriveToken_()){
      return finishDrivePendingAction_(pendingAction).then(function(){ return false; });
    }
  }
  if(readCachedDriveToken_()){
    hideDriveOAuthBusy_();
    return finishDrivePendingAction_(pendingAction).then(function(){ return true; });
  }
  var redirecting = 0;
  try { redirecting = parseInt(sessionStorage.getItem('ht_drive_oauth_redirecting') || '0', 10); } catch(e0){}
  var hashNow2 = readDriveOAuthHash_();
  if(redirecting && Date.now() - redirecting < 120000){
    if(hashNow2.indexOf('access_token=') !== -1 || hashNow2.indexOf('error=') !== -1){
      showDriveOAuthBusy_('Drive 연동을 마무리하는 중…');
      return Promise.resolve(false);
    }
    // 이전에 Google로 이동하지 못한 채 플래그만 남은 경우 — 재시도 허용
    clearDriveOAuthInflight_();
  }
  if(pendingAction){
    try { sessionStorage.setItem('ht_drive_pending_action', pendingAction); } catch(e){}
  }
  if(location.hash && /^#open\//.test(location.hash)){
    try { sessionStorage.setItem('ht_drive_return_hash', location.hash); } catch(e2){}
  }
  try {
    sessionStorage.setItem('ht_drive_oauth_started', String(Date.now()));
    sessionStorage.setItem('ht_drive_redirect_uri', getDriveRedirectUri_());
  } catch(e3){}
  closeDriveModal();
  showDriveOAuthBusy_('Google 연동을 준비하는 중…');
  window.__htDriveTokenClient = null;
  window.__htDriveTokenClientCid = null;
  if(window.__htDriveOAuthRedirectTimer) clearTimeout(window.__htDriveOAuthRedirectTimer);
  window.__htDriveOAuthRedirectTimer = setTimeout(function(){
    if(readCachedDriveToken_()){ hideDriveOAuthBusy_(); return; }
    if(readDriveOAuthHash_().indexOf('access_token=') !== -1) return;
    hideDriveOAuthBusy_();
    clearDriveOAuthInflight_();
    if(typeof setAppToast === 'function'){
      setAppToast('Google 로그인 페이지로 이동하지 못했어요.\n다시 Drive를 눌러 주세요. (Chrome·Safari 권장)', { duration: 8000, variant: 'err' });
    }
  }, 15000);
  return loadGsiScript().then(function(){
    showDriveOAuthBusy_('Google 로그인 화면으로 이동합니다…\n잠시만 기다려 주세요.');
    ensureDriveTokenClient_(true);
    var req = { prompt: prompt || 'consent' };
    var hint = getDriveHintEmail_();
    if(hint) req.hint = hint;
    try { sessionStorage.setItem('ht_drive_oauth_redirecting', String(Date.now())); } catch(e4){}
    window.__htDriveTokenClient.requestAccessToken(req);
  }).catch(function(err){
    hideDriveOAuthBusy_();
    clearDriveOAuthInflight_();
    var msg = (err && err.message) ? err.message : String(err);
    if(typeof setAppToast === 'function'){
      setAppToast('Google 로그인을 시작하지 못했어요.\n' + msg, { duration: 8000, variant: 'err' });
    }
    throw err;
  });
}
async function driveLoginInteractive_(pendingAction, promptMode){
  if(isInAppBrowser_()){
    throw new Error('카카오톡·인스타 등 앱 안 브라우저에서는 Google 로그인이 안 될 수 있어요.\n링크를 복사해 Safari 또는 Chrome에서 열어 주세요.');
  }
  var pr = normalizeDriveOAuthPrompt_(promptMode || 'consent');
  var errEl = document.getElementById('drive-modal-err');
  if(errEl) errEl.textContent = '';
  if(!readCachedDriveToken_()){
    var hashLogin = readDriveOAuthHash_();
    if(hashLogin.indexOf('access_token=') !== -1){
      var got = consumeDriveOAuthRedirect_();
      if(got && readCachedDriveToken_()){
        try { await finishDrivePendingAction_(pendingAction); } catch(fe){
          if(errEl) errEl.textContent = String(fe.message || fe);
          throw fe;
        }
        return true;
      }
    }
    await startDriveRedirectAuth_(pr, pendingAction);
    return false;
  }
  try {
    await getDriveAccessToken({ forcePrompt: pr, desktopPopup: true });
  } catch(popErr){
    var popMsg = String((popErr && popErr.message) || popErr || '');
    var useRedirect = (
      popMsg === 'POPUP_CLOSED' ||
      /popup|blocked|closed|user_cancel|access_denied|popup_busy/i.test(popMsg)
    );
    if(!useRedirect) throw popErr;
    await startDriveRedirectAuth_(pr, pendingAction);
    return false;
  }
  if(pendingAction === 'upload'){
    await driveUploadNow();
    if(typeof setAppToast === 'function') setAppToast('Drive에 저장했어요. 이후 저장은 자동으로 올라가요.', { duration: 4500, variant: 'ok' });
    maybeRequestNotificationAfterDrive();
  } else if(pendingAction === 'pull'){
    if(PLANNER_TEAM_MODE) throw new Error('팀 모드에서는 Drive 복원을 사용할 수 없습니다.');
    var token = await getDriveAccessToken({ forcePrompt: false, desktopPopup: true });
    var dl = await driveDownloadCloudPayload_(token);
    if(!dl.data) throw new Error('Drive에 아직 백업 파일이 없어요. 먼저 업로드해 주세요.');
    var data = dl.data;
    var when = data.savedAt || '알 수 없음';
    if(!confirm('Drive에 있는 데이터(저장 시각: ' + when + ')로 이 기기 내용을 덮어씁니다. 계속할까요?')) return true;
    applyPersistPayload(data);
    save({ skipDriveUpload: true });
    updateApiBadge();
    renderTabs();
    renderMain();
    updateDriveButtonState();
    if(typeof setAppToast === 'function') setAppToast('Drive에서 불러왔어요.', { duration: 4000, variant: 'ok' });
  }
  closeDriveModal();
  return true;
}
async function handleDrivePendingActionAfterRedirect_(){
  var act = '';
  try { act = sessionStorage.getItem('ht_drive_pending_action') || ''; sessionStorage.removeItem('ht_drive_pending_action'); } catch(e){}
  if(!act) return;
  if(!readCachedDriveToken_()){
    hideDriveOAuthBusy_();
    if(typeof setAppToast === 'function'){
      setAppToast('Drive 로그인은 됐지만 이 기기에 토큰을 저장하지 못했어요.\nSafari·Chrome에서 다시 Drive를 눌러 주세요.', { duration: 9000, variant: 'err' });
    }
    return;
  }
  showDriveOAuthBusy_('Drive에 연결하는 중…');
  try {
    await finishDrivePendingAction_(act);
  } catch(err){
    var errEl = document.getElementById('drive-modal-err');
    if(errEl) errEl.textContent = String(err.message || err);
    console.warn('[Drive redirect 후 작업]', err);
    if(typeof setAppToast === 'function') setAppToast(String(err.message || err), { duration: 6500, variant: 'err' });
  } finally {
    hideDriveOAuthBusy_();
  }
}
function onDriveTokenError_(err){
  var msg = 'Drive 인증이 취소되었어요';
  if(err && err.type === 'popup_closed') msg = 'POPUP_CLOSED';
  else if(err && err.message) msg = String(err.message);
  flushDriveTokenWaiters(false, new Error(msg));
}
function onDriveTokenReceived(resp){
  if(resp && resp.access_token){
    var sec = resp.expires_in || 3600;
    localStorage.setItem('ht_drive_oauth', JSON.stringify({
      access_token: resp.access_token,
      expires_at: Date.now() + Math.max(sec, 300) * 1000 - 60000
    }));
    setDriveConnected_(true);
    updateDriveButtonState();
    fetchAndSaveDriveHintEmail_(resp.access_token);
    flushDriveTokenWaiters(true, resp.access_token);
  } else {
    var msg = (resp && resp.error) ? resp.error : '액세스 토큰을 받지 못했어요';
    flushDriveTokenWaiters(false, new Error(msg));
  }
}
function requestDriveTokenOnce_(promptMode){
  if(driveOAuthPopupInFlight){
    return Promise.reject(new Error('POPUP_BUSY'));
  }
  if(!readCachedDriveToken_()){
    return Promise.reject(new Error('POPUP_CLOSED'));
  }
  driveOAuthPopupInFlight = true;
  return new Promise(function(resolve, reject){
    driveTokenWaiters.push({ resolve: resolve, reject: reject });
    loadGsiScript().then(function(){
      ensureDriveTokenClient_(false);
      var req = { prompt: promptMode || '' };
      var hint = getDriveHintEmail_();
      if(hint) req.hint = hint;
      window.__htDriveTokenClient.requestAccessToken(req);
    }).catch(function(e2){
      driveOAuthPopupInFlight = false;
      flushDriveTokenWaiters(false, e2);
    });
  }).finally(function(){
    driveOAuthPopupInFlight = false;
  });
}
function requestDriveTokenChain_(promptModes){
  var modes = promptModes.slice();
  function attempt(i){
    if(i >= modes.length){
      return Promise.reject(new Error('Drive 로그인이 필요해요. 「동기화 및 설정」에서 Drive를 연결해 주세요.'));
    }
    return requestDriveTokenOnce_(modes[i]).catch(function(err){
      if(i >= modes.length - 1) return Promise.reject(err);
      return attempt(i + 1);
    });
  }
  return attempt(0);
}
function getDriveAccessToken(options){
  options = options || {};
  var cached = readCachedDriveToken_();
  if(cached && !options.forcePrompt) return Promise.resolve(cached);
  if(!cached){
    return Promise.reject(new Error('Drive 로그인이 필요해요. 「동기화 및 설정」에서 Drive를 연결해 주세요.'));
  }
  if(isDrivePreferRedirect_() && !options.desktopPopup){
    return Promise.reject(new Error('모바일: Drive 메뉴에서 「Google 로그인 · 연동」을 눌러 주세요.'));
  }
  var wantConsent = options.forcePrompt === true || options.forcePrompt === 'consent';
  var modes;
  if(wantConsent) modes = ['consent'];
  else modes = [''];
  return requestDriveTokenChain_(modes);
}
function driveSilentWarmup_(){
  if(location.protocol === 'file:' || !hasDriveValidToken_()) return;
  getDriveAccessToken({}).then(function(tok){
    return fetchAndSaveDriveHintEmail_(tok);
  }).then(function(){
    return driveAutoSyncIfNewer_('warmup');
  }).catch(function(){});
}
var driveRefreshTimer = null;
function startDriveTokenRefreshLoop_(){
  if(driveRefreshTimer) return;
  driveRefreshTimer = setInterval(function(){
    if(!hasDriveValidToken_()) return;
    var exp = readDriveAuthExpiryMs();
    if(!exp) return;
    var left = exp - Date.now();
    if(left > 0 && left < 25 * 60 * 1000){
      getDriveAccessToken({}).catch(function(){});
    }
  }, 10 * 60 * 1000);
}
async function driveFindSyncFileId(accessToken){
  var q = "name='" + DRIVE_SYNC_FILENAME + "' and 'appDataFolder' in parents and trashed=false";
  var url = 'https://www.googleapis.com/drive/v3/files?q=' + encodeURIComponent(q) + '&spaces=appDataFolder&fields=files(id)';
  var r = await fetch(url, { headers: { Authorization: 'Bearer ' + accessToken } });
  var d = await r.json();
  if(!r.ok) throw new Error((d.error && d.error.message) || 'Drive 목록 조회 실패');
  return (d.files && d.files[0] && d.files[0].id) ? d.files[0].id : '';
}
async function driveEnsureFileId(accessToken){
  var cached = localStorage.getItem('ht_drive_file_id');
  if(cached){
    var h = await fetch('https://www.googleapis.com/drive/v3/files/' + cached + '?fields=id', { headers: { Authorization: 'Bearer ' + accessToken } });
    if(h.ok) return cached;
    localStorage.removeItem('ht_drive_file_id');
  }
  var found = await driveFindSyncFileId(accessToken);
  if(found){
    localStorage.setItem('ht_drive_file_id', found);
    return found;
  }
  var res = await fetch('https://www.googleapis.com/drive/v3/files', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + accessToken, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: DRIVE_SYNC_FILENAME, parents: ['appDataFolder'] })
  });
  var j = await res.json();
  if(!res.ok) throw new Error((j.error && j.error.message) || 'Drive 파일 생성 실패');
  localStorage.setItem('ht_drive_file_id', j.id);
  return j.id;
}
function buildDriveFileBody(){
  var p = getPersistPayload();
  p.savedAt = new Date().toISOString();
  p.syncVersion = 1;
  return JSON.stringify(p);
}
async function driveUploadNow(){
  if(!plannerSyncBootstrapReady_ || plannerSyncConflictPending_) return;
  return withPlannerSyncMutex_(async function(){
  await plannerPullRemoteIntoStateCore_();
  if(plannerSyncConflictPending_) return;
  var token = await getDriveAccessToken({ forcePrompt: false });
  var fileId = await driveEnsureFileId(token);
  var body = buildDriveFileBody();
  var uploadUrl = 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media';
  var r = await fetch(uploadUrl, {
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: body
  });
  if(r.status === 401){
    try { localStorage.removeItem('ht_drive_oauth'); } catch(e401){}
    updateDriveButtonState();
    throw new Error('Drive 로그인이 만료됐어요. 「동기화 및 설정」에서 Drive를 다시 연결해 주세요.');
  }
  if(!r.ok){
    var tx = await r.text();
    throw new Error(tx || ('HTTP ' + r.status));
  }
  markDriveSyncOk_();
  schedulePlannerGasPush_(true);
  });
}
function scheduleDriveUpload(immediate){
  if(!plannerSyncBootstrapReady_ || plannerSyncConflictPending_) return;
  try {
    if(!hasDriveValidToken_()) return;
  } catch(e3){ return; }
  clearTimeout(driveUploadTimer);
  driveUploadTimer = null;
  if(immediate){
    driveUploadNow().catch(function(err){
      console.warn('[Drive 즉시 백업]', err);
    });
    return;
  }
  driveUploadTimer = setTimeout(function(){
    driveUploadTimer = null;
    driveUploadNow().catch(function(err){
      console.warn('[Drive 자동 저장]', err);
    });
  }, 2000);
}
function formatDriveTimeShort(iso){
  if(!iso) return '';
  try{
    var d = new Date(iso);
    if(isNaN(d.getTime())) return '';
    return d.toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch(e){ return ''; }
}
function readDriveAuthExpiryMs(){
  try{
    var raw = localStorage.getItem('ht_drive_oauth');
    if(!raw) return null;
    var t = JSON.parse(raw);
    if(!t || !t.access_token) return null;
    return typeof t.expires_at === 'number' ? t.expires_at : null;
  } catch(e){ return null; }
}
function updateDriveButtonState(){
  var b = document.getElementById('btn-drive-sync');
  var sub = document.getElementById('drive-btn-sub');
  var status = document.getElementById('drive-status');
  var dot = document.getElementById('drive-dot');
  if(!b) return;
  var lastIso = '';
  try { lastIso = localStorage.getItem(DRIVE_LAST_SYNC_KEY) || ''; } catch(e0){}
  var lastFmt = formatDriveTimeShort(lastIso);
  var hasLink = hasDriveConnection_();
  var hasValid = hasDriveValidToken_();
  var exp = readDriveAuthExpiryMs();
  var now = Date.now();
  b.classList.remove('warn');
  b.removeAttribute('data-drive-sync-pending');
  if(dot) dot.className = 'drive-dot';
  if(!hasLink){
    b.classList.remove('linked');
    if(status) status.textContent = 'Drive';
    if(sub) sub.textContent = lastFmt ? ('연동 안 됨 · 동기화 ' + lastFmt) : '연동 안 됨';
    b.title = lastFmt ? ('Drive 미연동 — 마지막 동기화 ' + lastFmt) : 'Google Drive 동기화';
    return;
  }
  b.classList.add('linked');
  if(status) status.textContent = 'Drive';
  if(!hasValid){
    b.classList.add('warn');
    if(dot) dot.classList.add('warn');
    if(sub) sub.textContent = '로그인 갱신 필요';
    b.title = '로그인이 만료됐어요. 탭하면 다시 연결·동기화';
    b.setAttribute('data-drive-sync-pending', '1');
    return;
  }
  var state = 'ok';
  if(exp && exp > now && exp - now < 8 * 60 * 1000) state = 'soon';
  if(state === 'soon') b.classList.add('warn');
  if(dot) dot.classList.add(state === 'soon' ? 'warn' : 'on');
  if(sub) sub.textContent = lastFmt ? lastFmt : '동기화 대기';
  b.title = lastFmt
    ? ('Drive 연결됨 — 마지막 동기화 ' + lastFmt)
    : 'Drive 연결됨 — 탭하면 지금 동기화';
  if(!lastFmt) b.setAttribute('data-drive-sync-pending', '1');
}
function isDriveSyncPending_(){
  if(!hasDriveValidToken_()) return false;
  try { return !localStorage.getItem(DRIVE_LAST_SYNC_KEY); } catch(e){ return false; }
}
function isDriveNeedsReauth_(){
  return hasDriveConnection_() && !hasDriveValidToken_();
}
window.onDriveButtonClick = async function(){
  if(location.protocol === 'file:'){
    alert('Drive 연동은 https 또는 http로 이 페이지를 연 뒤에만 동작합니다.');
    return;
  }
  var btn = document.getElementById('btn-drive-sync');
  var sub = document.getElementById('drive-btn-sub');
  var needsReauth = isDriveNeedsReauth_();
  var syncPending = isDriveSyncPending_();

  if(!needsReauth && !syncPending){
    openDriveModal();
    return;
  }

  if(btn) btn.disabled = true;
  if(sub) sub.textContent = needsReauth ? '로그인 중…' : '동기화 중…';
  try {
    if(needsReauth){
      var loginResult = await driveLoginInteractive_('upload', getDriveInteractivePrompt_());
      if(loginResult === false) return;
      return;
    }
    await driveUploadNow();
    if(typeof setAppToast === 'function'){
      setAppToast('Drive에 동기화했어요.', { duration: 4200, variant: 'ok' });
    }
  } catch(err){
    var msg = (err && err.message) ? err.message : String(err);
    if(typeof setAppToast === 'function'){
      setAppToast('Drive 동기화에 실패했어요.\n' + msg, { duration: 8000, variant: 'err' });
    } else {
      alert(msg);
    }
  } finally {
    if(btn) btn.disabled = false;
    updateDriveButtonState();
  }
};
function markDriveSyncOk_(){
  try {
    localStorage.setItem(DRIVE_LAST_SYNC_KEY, new Date().toISOString());
    localStorage.setItem(DRIVE_LAST_SYNC_REV_KEY, String(state.syncRevision || 0));
  } catch(e){}
  updateDriveButtonState();
  updateSyncStatusUI_();
}
function maybeRequestNotificationAfterDrive(){
  try{
    if(localStorage.getItem('ht_notif_drive_prompt_done')) return;
    if(typeof Notification === 'undefined'){
      localStorage.setItem('ht_notif_drive_prompt_done', '1');
      return;
    }
    if(Notification.permission !== 'default'){
      localStorage.setItem('ht_notif_drive_prompt_done', '1');
      return;
    }
    localStorage.setItem('ht_notif_drive_prompt_done', '1');
    if(typeof setAppToast === 'function'){
      setAppToast('초안 완료를 기기 알림으로도 받으려면, 곧 뜨는 창에서 허용을 눌러 주세요.\n(건너뛰어도 화면 안내는 그대로예요)', { duration: 5200, variant: 'ok' });
    }
    setTimeout(function(){
      try { Notification.requestPermission(); } catch(e2){}
    }, 650);
  } catch(e3){}
}
window.openDriveModal = function(){
  if(location.protocol === 'file:'){
    alert('Drive 연동은 https 또는 http로 이 페이지를 연 뒤에만 동작합니다.');
    return;
  }
  var err = document.getElementById('drive-modal-err');
  if(err) err.textContent = '';
  document.getElementById('drive-modal-overlay').classList.add('open');
  trapFocusIn_(document.querySelector('#drive-modal-overlay .modal-box'));
};
window.closeDriveModal = function(ev){
  if(ev && ev.target !== document.getElementById('drive-modal-overlay')) return;
  document.getElementById('drive-modal-overlay').classList.remove('open');
  releaseModalFocusTrap_();
};
window.driveLoginAndUpload = async function(){
  var errEl = document.getElementById('drive-modal-err');
  if(!getDriveClientId()){ if(errEl) errEl.textContent = 'Drive 클라이언트 ID가 없습니다'; return; }
  if(errEl) errEl.textContent = '';
  try{
    var firstConnect = !hasDriveConnection_() && !readCachedDriveToken_();
    if(firstConnect){
      window.__htDriveTokenClient = null;
      window.__htDriveTokenClientCid = null;
    }
    if(!readCachedDriveToken_()){
      var ok = await driveLoginInteractive_('upload', firstConnect ? 'consent' : getDriveInteractivePrompt_());
      if(!ok) return;
      maybeRequestNotificationAfterDrive();
      return;
    }
    await driveUploadNow();
    closeDriveModal();
    if(typeof setAppToast === 'function') setAppToast('Drive에 저장했어요. 이후 저장은 자동으로 올라가요.', { duration: 4500, variant: 'ok' });
    else alert('Drive에 저장했습니다.');
    maybeRequestNotificationAfterDrive();
  } catch(e5){
    hideDriveOAuthBusy_();
    if(errEl) errEl.textContent = String(e5.message || e5);
  }
};
async function driveDownloadCloudPayload_(token){
  var fileId = localStorage.getItem('ht_drive_file_id') || await driveFindSyncFileId(token);
  if(!fileId) return { fileId: '', data: null };
  localStorage.setItem('ht_drive_file_id', fileId);
  var r = await fetch('https://www.googleapis.com/drive/v3/files/' + fileId + '?alt=media', { headers: { Authorization: 'Bearer ' + token } });
  if(r.status === 401){
    try { localStorage.removeItem('ht_drive_oauth'); } catch(e401){}
    updateDriveButtonState();
    throw new Error('Drive 로그인이 만료됐어요. 「동기화 및 설정」에서 Drive를 다시 연결해 주세요.');
  }
  var text = await r.text();
  if(!r.ok) throw new Error(text || 'Drive 다운로드 실패');
  var data = JSON.parse(text);
  markDriveSyncOk_();
  return { fileId: fileId, data: data };
}

function parseIsoMs_(iso){
  try{
    if(!iso) return 0;
    var d = new Date(iso);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  } catch(e){ return 0; }
}

async function driveAutoSyncIfNewer_(reason){
  return syncAllSourcesIfNewer_(reason);
}

window.driveDisconnect = function(){
  if(!confirm('Drive에 저장된 파일은 그대로 두고, 이 브라우저의 로그인만 지웁니다.')) return;
  setDriveConnected_(false);
  localStorage.removeItem('ht_drive_oauth');
  localStorage.removeItem('ht_drive_file_id');
  window.__htDriveTokenClient = null;
  window.__htDriveTokenClientCid = null;
  updateDriveButtonState();
  closeDriveModal();
  if(typeof setAppToast === 'function') setAppToast('Drive에서 로그아웃했어요.', { duration: 3500, variant: 'ok' });
};
// Load persisted
try {
  const s = JSON.parse(localStorage.getItem(SK));
  if(s){
    ensurePayloadSyncRevision_(s);
    applyPersistPayload(s);
    if(s.apiKey) state.apiKey = s.apiKey;
    if(s.syncRevision) state.syncRevision = parseInt(s.syncRevision, 10) || state.syncRevision || 0;
  }
  else applyBuiltinDraftBrandSeeds_();
} catch(e){
  applyBuiltinDraftBrandSeeds_();
}
ensureOutboxFromLegacyDirty_(getPersistPayload());
rebuildDirtyStateFromOutbox_();

function suggestPlannerSwRefresh_(reason, opts){
  opts = opts || {};
  try {
    if(sessionStorage.getItem('ht_planner_sw_refresh_prompted') === '1') return;
  } catch(e0){}
  var dirty = typeof hasPendingLocalSyncChanges_ === 'function' && hasPendingLocalSyncChanges_();
  var editing = typeof isEditableTextFieldFocused_ === 'function' && isEditableTextFieldFocused_();
  if(opts.preferReload && !dirty && !editing && !plannerSyncConflictPending_){
    try { sessionStorage.setItem('ht_planner_sw_refresh_prompted', '1'); } catch(e1){}
    location.reload();
    return;
  }
  try { sessionStorage.setItem('ht_planner_sw_refresh_prompted', '1'); } catch(e2){}
  if(typeof setAppToast === 'function'){
    setAppToast(
      '앱 새 버전이 준비됐어요. 저장 후 새로고침(Ctrl+Shift+R)하면 최신이 적용됩니다.',
      { duration: 7200, variant: 'ok' }
    );
  }
}
function maybeRefreshPlannerAfterOnline_(){
  var offlineBoot = false;
  try {
    offlineBoot = sessionStorage.getItem('ht_planner_offline_boot') === '1';
    sessionStorage.removeItem('ht_planner_offline_boot');
  } catch(e0){}
  if(!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.getRegistration().then(function(reg){
    if(reg){
      try { reg.update(); } catch(eUp){}
    }
    if(!offlineBoot) return;
    var dirty = typeof hasPendingLocalSyncChanges_ === 'function' && hasPendingLocalSyncChanges_();
    var editing = typeof isEditableTextFieldFocused_ === 'function' && isEditableTextFieldFocused_();
    if(!dirty && !editing && !plannerSyncConflictPending_){
      try {
        if(sessionStorage.getItem('ht_planner_online_reloaded') === '1') return;
        sessionStorage.setItem('ht_planner_online_reloaded', '1');
      } catch(e1){}
      if(typeof setAppToast === 'function'){
        setAppToast('온라인 연결됨 · 최신 앱으로 새로고침합니다…', { duration: 2200, variant: 'ok' });
      }
      setTimeout(function(){ location.reload(); }, 700);
      return;
    }
    if(typeof setAppToast === 'function'){
      setAppToast(
        '온라인 연결됨. 오프라인에서 뜬 이전 버전일 수 있어요. 저장 후 새로고침해 주세요.',
        { duration: 6500, variant: 'ok' }
      );
    }
  }).catch(function(){});
}
function setupPlannerServiceWorker_(){
  if(!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  try {
    if(navigator.onLine === false) sessionStorage.setItem('ht_planner_offline_boot', '1');
  } catch(eOff){}
  navigator.serviceWorker.register('planner-sw.js').then(function(reg){
    try { reg.update(); } catch(eUp){}
    if(reg.waiting) suggestPlannerSwRefresh_('waiting');
    reg.addEventListener('updatefound', function(){
      var nw = reg.installing;
      if(!nw) return;
      nw.addEventListener('statechange', function(){
        if(nw.state === 'installed' && navigator.serviceWorker.controller){
          suggestPlannerSwRefresh_('updatefound');
        }
      });
    });
  }).catch(function(e){ console.warn('[SW]', e); });
  if(!window.__plannerSwControllerBound){
    window.__plannerSwControllerBound = true;
    navigator.serviceWorker.addEventListener('controllerchange', function(){
      suggestPlannerSwRefresh_('controllerchange', { preferReload: true });
    });
  }
}

// ── Init ──
window.onload = () => {
  consumePlannerTeamInvite_();
  if(readCachedDriveToken_()) hideDriveOAuthBusy_();
  var oauthHashEarly = readDriveOAuthHash_();
  var pendingOAuth = oauthHashEarly.indexOf('access_token=') !== -1 || oauthHashEarly.indexOf('error=') !== -1;
  if(!pendingOAuth && !readCachedDriveToken_()) hideDriveOAuthBusy_();
  checkDriveOAuthStuck_();
  var oauthReturned = consumeDriveOAuthRedirect_();
  if(readCachedDriveToken_()) hideDriveOAuthBusy_();
  if(!oauthReturned) checkDriveOAuthFailedReturn_();
  var initialEmployeeEl = document.getElementById('planner-employee-id');
  if(initialEmployeeEl) initialEmployeeEl.value = getPlannerEmployeeId_();
  var initialSyncTokenEl = document.getElementById('planner-sync-token');
  if(initialSyncTokenEl) initialSyncTokenEl.value = getPlannerSyncToken_();
  document.getElementById('api-modal').classList.remove('open');
  updateApiBadge();
  refreshPlannerServerCaps_();
  updateDriveButtonState();
  updateSyncStatusUI_();
  bindPlannerMainClickDelegation_();
  renderTabs();
  updateAddButtonVisibility_();
  renderMain();
  if(oauthReturned){
    handleDrivePendingActionAfterRedirect_();
  }
  window.addEventListener('pageshow', function(ev){
    if(readCachedDriveToken_()) hideDriveOAuthBusy_();
    var hasOAuthHash = !!(location.hash || '').match(/access_token=|error=/);
    try {
      var saved = sessionStorage.getItem('ht_drive_oauth_hash') || '';
      if(saved.indexOf('access_token=') !== -1 || saved.indexOf('error=') !== -1) hasOAuthHash = true;
    } catch(e){}
    if(!hasOAuthHash && !ev.persisted) return;
    var again = consumeDriveOAuthRedirect_();
    if(readCachedDriveToken_()) hideDriveOAuthBusy_();
    if(again) handleDrivePendingActionAfterRedirect_();
    else if(!readCachedDriveToken_()) checkDriveOAuthFailedReturn_();
  });
  setupPlannerServiceWorker_();
  driveGsiWarmup_();
  driveSilentWarmup_();
  startDriveTokenRefreshLoop_();
  runPlannerBootstrapSync_();
  if(!oauthReturned) consumeDeepLinkFromHash_();
  else setTimeout(function(){ consumeDeepLinkFromHash_(); }, 300);
  setTimeout(function(){
    reconcileInstaPendingJobs_('load');
    reconcileThreadsPendingJobs_('load');
  }, 600);
  scheduleDailyAutoDraft_();
  setInterval(function(){ maybeRunDailyAutoDraft_('interval'); }, 2 * 60 * 1000);
  setTimeout(function(){ maybeRunDailyAutoDraft_('load'); }, 4000);
  var onToastViewportChange_ = function(){
    if(isEditableTextFieldFocused_()) return;
    scheduleAppToastLift_();
  };
  window.addEventListener('resize', onToastViewportChange_);
  window.addEventListener('orientationchange', onToastViewportChange_);
  if(window.visualViewport){
    window.visualViewport.addEventListener('resize', onToastViewportChange_);
    window.visualViewport.addEventListener('scroll', onToastViewportChange_);
  }
  window.addEventListener('focus', function(){
    syncAllSourcesIfNewer_('focus');
    maybeRunDailyAutoDraft_('focus');
    reconcileInstaPendingJobs_('focus');
    reconcileThreadsPendingJobs_('focus');
  });
  let hiddenAt = 0;
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      hiddenAt = Date.now();
      flushPromptCloudSave_();
      return;
    }
    syncAllSourcesIfNewer_('visibility');
    maybeRunDailyAutoDraft_('visibility');
    onReturnFromBackgroundForInsta_();
    reconcileInstaPendingJobs_('visibility');
    reconcileThreadsPendingJobs_('visibility');
    if(hiddenAt){
      var sec = Math.floor((Date.now() - hiddenAt) / 1000);
      hiddenAt = 0;
      if(sec >= 10 && typeof setAppToast === 'function'){
        setAppToast('다른 앱/화면으로 전환하면 브라우저가 잠시 멈출 수 있어요.\n탭을 닫지 말고 그대로 두면, 다시 돌아왔을 때 이어서 동작합니다.', { duration: 5200 });
      }
    }
  });
  window.addEventListener('online', function(){
    try { sessionStorage.removeItem('ht_offline_save_hint'); } catch(e){}
    // 온라인 복귀: GAS 기준 맞춤 → 로컬 dirty만 예외(충돌 UI 또는 patch 업로드)
    syncAllSourcesIfNewer_('online').finally(function(){
      if(hasPendingLocalSyncChanges_() && !plannerSyncConflictPending_) schedulePlannerGasPush_(true);
    });
    // 오프라인 중 SW 캐시로 뜬 이전 JS일 수 있음 → 온라인에서 한 번 새로고침 유도
    maybeRefreshPlannerAfterOnline_();
  });
  startPlannerIdleSync_();
  window.addEventListener('hashchange', onPlannerHashChange_);
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closeTopmostPlannerOverlay_();
    }
  });
};

function normalizeChatgptOpenUrl(raw){
  const s = String(raw || '').trim();
  if(!s) return '';
  let u = s;
  if(!/^https?:\/\//i.test(u)) u = 'https://' + u;
  try {
    const parsed = new URL(u);
    if(parsed.protocol !== 'https:') return '__invalid__';
    const h = parsed.hostname.replace(/^www\./i, '');
    if(h !== 'chatgpt.com' && h !== 'chat.openai.com') return '__invalid__';
    return parsed.href.split(/[#?]/)[0];
  } catch(e){ return '__invalid__'; }
}

function getChatgptOpenUrl(){
  const n = normalizeChatgptOpenUrl(state.chatgptOpenUrl);
  if(n && n !== '__invalid__') return n;
  const fallback = normalizeChatgptOpenUrl(DEFAULT_CHATGPT_IMAGE_PROJECT_URL);
  if(fallback && fallback !== '__invalid__') return fallback;
  return 'https://chatgpt.com/';
}

function applyPlannerServerCaps_(data, isSyncResponse){
  if(!data) return;
  if(data.syncCapabilities){
    state.syncProtocolVersion = parseInt(data.syncCapabilities.protocolVersion, 10) || 1;
    state.syncEntitySchemaVersion = parseInt(data.syncCapabilities.entitySchemaVersion, 10) || 1;
  } else if(isSyncResponse){
    state.syncProtocolVersion = 1;
    state.syncEntitySchemaVersion = 1;
  }
  if(typeof data.plannerClaude !== 'undefined'){
    state.plannerClaudeEnabled = !!data.plannerClaude;
    if(state.plannerClaudeEnabled && !state.apiKey) state.apiKey = '__server__';
    if(!state.plannerClaudeEnabled && state.apiKey === '__server__') state.apiKey = '';
    updateApiBadge();
  }
  if(typeof data.geminiYoutube !== 'undefined'){
    state.geminiYoutubeEnabled = !!data.geminiYoutube;
  }
  if(typeof data.plannerAuthRequired !== 'undefined'){
    state.plannerAuthRequired = !!data.plannerAuthRequired;
  }
  updateGeminiServerStatusUI_();
  updateApiBadge();
}

function isGeminiYoutubeAvailable_(){
  return !!state.geminiYoutubeEnabled;
}
function isPlannerAiAvailable_(){
  return !!state.plannerClaudeEnabled || !!state.apiKey;
}

function updateGeminiServerStatusUI_(){
  var el = document.getElementById('gemini-server-status');
  if(!el) return;
  if(!getPlannerGasUrl_() || location.protocol === 'file:'){
    el.innerHTML = '유튜브 분석(Gemini): <strong>웹 배포 페이지</strong>에서 서버와 연결되면 사용할 수 있어요. 키는 GAS 스크립트 속성 <code style="font-size:10px;background:#E5E7EB;padding:1px 4px;border-radius:4px;">GEMINI_API_KEY</code>';
    return;
  }
  if(state.geminiYoutubeEnabled){
    el.innerHTML = '유튜브 분석(Gemini): <strong style="color:#0F766E;">서버에 키 설정됨</strong> · 공개 유튜브 URL 분석 가능';
  } else {
    el.innerHTML = '유튜브 분석(Gemini): <strong style="color:#B45309;">미설정</strong> — Apps Script → 프로젝트 설정 → 스크립트 속성에 <code style="font-size:10px;background:#E5E7EB;padding:1px 4px;border-radius:4px;">GEMINI_API_KEY</code> 추가 후 배포를 새로 해 주세요';
  }
  if(state.plannerAuthRequired){
    var hasToken = !!getPlannerSyncToken_();
    el.innerHTML += '<br>서버 동기화: <strong style="color:' + (hasToken ? '#0F766E' : '#B45309') + ';">' +
      (hasToken ? '토큰 입력됨' : 'PLANNER_SYNC_TOKEN 입력 필요') + '</strong>';
  }
}

async function refreshPlannerServerCaps_(){
  var url = getPlannerGasUrl_();
  if(!url || location.protocol === 'file:'){
    updateGeminiServerStatusUI_();
    return;
  }
  try {
    var data = await plannerGasJsonRequest_({ action: 'plannerSyncPull' }, 15000);
    if(isPlannerAuthError_(data)){
      notifyPlannerAuthError_(data);
      updateGeminiServerStatusUI_();
      return;
    }
    applyPlannerServerCaps_(data, true);
  } catch(e){
    console.warn('[서버 caps]', e);
    updateGeminiServerStatusUI_();
  }
}

function toggleApiKeyVisible(){
  var inp = document.getElementById('api-input');
  var btn = document.getElementById('api-key-toggle');
  if(!inp) return;
  var show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  if(btn) btn.textContent = show ? '숨기기' : '보기';
}
window.toggleApiKeyVisible = toggleApiKeyVisible;
function saveKey() {
  const v = document.getElementById('api-input').value.trim();
  const urlIn = document.getElementById('chatgpt-open-url') ? document.getElementById('chatgpt-open-url').value : '';
  const errEl = document.getElementById('api-error');
  errEl.textContent = '';
  if(v) state.apiKey = v;
  const nu = normalizeChatgptOpenUrl(urlIn);
  if(nu === '__invalid__'){
    errEl.textContent = 'ChatGPT 주소는 chatgpt.com 또는 chat.openai.com 만 허용됩니다';
    return;
  }
  state.chatgptOpenUrl = nu === '' ? '' : nu;
  var employeeEl = document.getElementById('planner-employee-id');
  if(employeeEl){
    var employeeId = employeeEl.value.trim();
    if(!isPlannerEmployeeEmailValid_(employeeId)){ errEl.textContent = '올바른 직원 이메일을 입력해 주세요'; return; }
    setPlannerEmployeeId_(employeeId);
  }
  var syncTokEl = document.getElementById('planner-sync-token');
  if(syncTokEl) setPlannerSyncToken_(syncTokEl.value);
  var dailyAutoEl = document.getElementById('daily-auto-enabled');
  if(dailyAutoEl) setDailyAutoEnabled_(!!dailyAutoEl.checked);
  save();
  document.getElementById('api-modal').classList.remove('open');
  releaseModalFocusTrap_();
  updateApiBadge();
  renderMain();
}
function closeApiModal(){
  document.getElementById('api-modal').classList.remove('open');
  releaseModalFocusTrap_();
}
window.closeApiModal = closeApiModal;
function closeApiModalBackdrop(ev){
  if(ev && ev.target !== document.getElementById('api-modal')) return;
  closeApiModal();
}
window.closeApiModalBackdrop = closeApiModalBackdrop;
function openApiModal() {
  document.getElementById('api-input').value = state.apiKey === '__server__' ? '' : state.apiKey;
  document.getElementById('api-input').type = 'password';
  var toggleBtn = document.getElementById('api-key-toggle');
  if(toggleBtn) toggleBtn.textContent = '보기';
  const uEl = document.getElementById('chatgpt-open-url');
  if(uEl) uEl.value = state.chatgptOpenUrl || DEFAULT_CHATGPT_IMAGE_PROJECT_URL;
  var syncTokEl = document.getElementById('planner-sync-token');
  if(syncTokEl) syncTokEl.value = getPlannerSyncToken_();
  var employeeEl = document.getElementById('planner-employee-id');
  if(employeeEl) employeeEl.value = getPlannerEmployeeId_();
  var dailyAutoEl = document.getElementById('daily-auto-enabled');
  if(dailyAutoEl) dailyAutoEl.checked = isDailyAutoEnabled_();
  updateGeminiServerStatusUI_();
  refreshPlannerServerCaps_();
  document.getElementById('api-modal').classList.add('open');
  trapFocusIn_(document.querySelector('#api-modal .modal-box'));
}
function updateApiBadge() {
  var dot = document.getElementById('api-dot');
  var status = document.getElementById('api-status');
  if(!dot && !status){
    // 헤더 배지는 동기화 및 설정으로 통합됨 — 모달이 열려 있으면 본문만 갱신
    if(document.getElementById('sync-status-overlay') &&
       document.getElementById('sync-status-overlay').classList.contains('open')){
      updateSyncStatusUI_();
    }
    return;
  }
  if(dot) dot.className = 'api-dot' + (isPlannerAiAvailable_() ? ' on' : '');
  var label = 'API 키 설정';
  if(state.plannerClaudeEnabled){
    label = isGeminiYoutubeAvailable_() ? '서버 AI · 유튜브' : '서버 AI';
  } else if(state.apiKey){
    label = isGeminiYoutubeAvailable_() ? 'API · 유튜브' : 'API';
  }
  if(status) status.textContent = label;
}

// ── Tabs ──
function getSortedCatTabOrder() {
  return CAT_TAB_NAV_ROWS[0].concat(CAT_TAB_NAV_ROWS[1]);
}

function renderTabs() {
  function groupSelectorHTML(groupLabel, ids, groupKey){
    var displayCat = getDisplayCatInGroup_(ids, groupKey);
    var isActive = ids.indexOf(state.currentCat) >= 0;
    var activeCount = countUnpublishedTopicsForCat_(displayCat);
    var hasPending = !!(state.pendingSubGoalPlan && ids.some(function(id){ return sameCatId_(state.pendingSubGoalPlan.catId, id); }));
    var options = ids.map(function(idx){
      var c = CATEGORIES[idx];
      if(!c) return '';
      var short = CAT_TAB_SHORT[idx] || c.name;
      var count = countUnpublishedTopicsForCat_(idx);
      var pending = state.pendingSubGoalPlan && sameCatId_(state.pendingSubGoalPlan.catId, idx);
      return '<option value="' + idx + '"' + (displayCat === idx ? ' selected' : '') + '>' +
        short + ' · ' + count + (pending ? ' • 대기' : '') + '</option>';
    }).join('');
    return '<div class="cat-group-select-wrap' + (isActive ? ' active' : '') + '" role="button" tabindex="0" onclick="activateCatGroup_(\'' + groupKey + '\', event)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();activateCatGroup_(\'' + groupKey + '\', event);}">' +
      '<span class="cat-group-dot' + (isActive ? ' on' : '') + (hasPending ? ' pending' : '') + '" aria-hidden="true"></span>' +
      '<span class="cat-group-label">' + groupLabel + '</span>' +
      '<select class="cat-group-select" onclick="event.stopPropagation()" onchange="selectCat(parseInt(this.value,10))" aria-label="' + groupLabel + ' 프로그램 선택">' +
      options +
      '</select>' +
      '<span class="cat-group-badge" title="현재 선택 프로그램의 진행 중 주제 수">' + activeCount + '</span>' +
    '</div>';
  }
  function opsGroupSelectorHTML(){
    var om = getOpsManualState_();
    var isActive = isOpsManualCategory(state.currentCat);
    var displayBranch = om.activeBranch;
    var branchProg = countOpsManualProgress_(displayBranch);
    var activeCount = Math.max(0, branchProg.total - branchProg.done);
    var options = CAT_GROUP_OPS.map(function(opt){
      var bp = countOpsManualProgress_(opt.branch);
      var count = Math.max(0, bp.total - bp.done);
      return '<option value="' + opt.branch + '"' + (displayBranch === opt.branch ? ' selected' : '') + '>' +
        opt.label + ' · ' + count + '</option>';
    }).join('');
    return '<div class="cat-group-select-wrap cat-group-ops' + (isActive ? ' active' : '') + '" role="button" tabindex="0" onclick="activateCatGroup_(\'ops\', event)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();activateCatGroup_(\'ops\', event);}">' +
      '<span class="cat-group-dot' + (isActive ? ' on ops-dot' : '') + '" aria-hidden="true"></span>' +
      '<span class="cat-group-label">지점브랜딩</span>' +
      '<select class="cat-group-select" onclick="event.stopPropagation()" onchange="selectOpsBranchFromNav_(this.value)" aria-label="지점브랜딩 선택">' +
      options +
      '</select>' +
      '<span class="cat-group-badge" title="현재 지점의 미완료 항목 수">' + activeCount + '</span>' +
    '</div>';
  }
  var html =
    groupSelectorHTML('일반인용', CAT_GROUP_GENERAL, 'general') +
    groupSelectorHTML('전문가용', CAT_GROUP_EXPERT, 'expert') +
    opsGroupSelectorHTML();
  document.getElementById('cat-tabs-grid').innerHTML = html;
  var promptBtn = document.getElementById('btn-prompt-settings');
  if(promptBtn) promptBtn.style.display = isOpsManualCategory(state.currentCat) ? 'none' : '';
}

function activateCatGroup_(groupKey, ev){
  if(ev){
    if(ev.target && ev.target.closest && ev.target.closest('select')) return;
    ev.preventDefault();
    ev.stopPropagation();
  }
  if(groupKey === 'ops'){
    selectOpsBranchFromNav_(getOpsManualState_().activeBranch);
    return;
  }
  var ids = groupKey === 'expert' ? CAT_GROUP_EXPERT : CAT_GROUP_GENERAL;
  var catId = getDisplayCatInGroup_(ids, groupKey);
  if(state.currentCat !== catId) selectCat(catId);
}
window.activateCatGroup_ = activateCatGroup_;

function selectOpsBranchFromNav_(branchId){
  if(!OPS_BRANCH_IDS.includes(branchId)) return;
  state.currentCat = 8;
  state.searchQ = '';
  state.showAdd = false;
  var om = getOpsManualState_();
  om.activeBranch = branchId;
  save({ skipDriveUpload: true, skipGasPush: true });
  renderTabs();
  updateAddButtonVisibility_();
  renderMain();
}
window.selectOpsBranchFromNav_ = selectOpsBranchFromNav_;

function selectCat(i) {
  rememberCatGroupSelection_(i);
  state.currentCat = i;
  state.searchQ = '';
  state.showAdd = false;
  renderTabs();
  updateAddButtonVisibility_();
  renderMain();
}

function updateAddButtonVisibility_(){
  var btn = document.getElementById('add-toggle-btn');
  if(!btn) return;
  btn.style.display = isOpsManualCategory(state.currentCat) ? 'none' : '';
}
window.updateAddButtonVisibility_ = updateAddButtonVisibility_;

// ── Recommendations ──
function getRequiredPublishKeysForCat_(catId){
  if(isDailyShareCategory(catId)) return ['thread'];
  if(isHeiljagyaeCategory(catId)) return ['community', 'image'];
  if(isBlogInstaCategory(catId)) return ['blog', 'insta', 'threads', 'image'];
  return [];
}

function draftHasAnyPublish_(draftId){
  var pub = draftId && state.published[draftId];
  if(!pub) return false;
  if(pub.date) return true;
  if(pub.tabPublished && Object.keys(pub.tabPublished).length) return true;
  return false;
}

function draftIsFullyPublished_(draftId, catId){
  if(catId == null) catId = getCatIdFromDraftId_(draftId);
  var keys = getRequiredPublishKeysForCat_(catId);
  if(!keys.length) return false;
  var pub = state.published[draftId];
  if(!pub || !pub.tabPublished) return false;
  return keys.every(function(k){ return !!pub.tabPublished[k]; });
}

function draftHasPartialPublish_(draftId, catId){
  if(catId == null) catId = getCatIdFromDraftId_(draftId);
  if(draftIsFullyPublished_(draftId, catId)) return false;
  return draftHasAnyPublish_(draftId);
}

function draftIsPublished_(draftId) {
  return draftIsFullyPublished_(draftId, getCatIdFromDraftId_(draftId));
}

/** 미발행 초안(생성됐지만 아직 발행 완료 전) */
function draftIsPendingPublish_(d) {
  if (!d || !d.id || draftIsPublished_(d.id)) return false;
  return !!(state.generatedOnly[d.id] || state.published[d.id]?.content);
}

function draftHasContent(d) {
  return !!(d && d.id && (state.generatedOnly[d.id] || (state.published[d.id] && state.published[d.id].content)));
}

/** 상단 탭 배지 — 메인 화면에 보이는 미발행 주제 수 */
function countUnpublishedTopicsForCat_(catIdx) {
  if(isOpsManualCategory(catIdx)) return countOpsManualUnchecked_(catIdx);
  return getVisibleDraftsInMain_(catIdx).filter(function (d) {
    return !draftIsPublished_(d.id);
  }).length;
}

function countPendingDraftsInCat_(catId) {
  const cat = CATEGORIES[catId];
  if (!cat || !cat.drafts) return 0;
  return cat.drafts.filter(function (d) {
    return draftIsPendingPublish_(d);
  }).length;
}

/** 카테고리에 생성된 주제 카드 수 (발행·초안 본문 유무와 무관) */
function countTopicsInCat_(catId) {
  const cat = CATEGORIES[catId];
  if (!cat || !cat.drafts) return 0;
  return cat.drafts.filter(function (d) { return d && d.id; }).length;
}

function getDraftCreatedAtMs_(d) {
  if (!d) return 0;
  if (d.createdAt) {
    var t = Date.parse(d.createdAt);
    if (!isNaN(t)) return t;
  }
  var m = String(d.id || '').match(/-c(\d+)$/);
  if (m) {
    var n = parseInt(m[1], 10);
    if (!isNaN(n)) return n;
  }
  return 0;
}

function getDraftCreatedDateLabel_(d) {
  var ms = getDraftCreatedAtMs_(d);
  if (!ms) return '-';
  try {
    return new Date(ms).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
  } catch (e) {
    return '-';
  }
}

function sortDraftsForDisplay(drafts) {
  return (drafts || []).slice().sort(function (a, b) {
    const ap = draftIsPublished_(a.id) ? 1 : 0;
    const bp = draftIsPublished_(b.id) ? 1 : 0;
    if (ap === 1 && bp === 1) {
      const aSaved = (state.published[a.id] && state.published[a.id].savedAt) ? String(state.published[a.id].savedAt) : '';
      const bSaved = (state.published[b.id] && state.published[b.id].savedAt) ? String(state.published[b.id].savedAt) : '';
      if (aSaved !== bSaved) return bSaved.localeCompare(aSaved);
    }
    if (ap !== bp) return ap - bp;
    const ag = draftIsPendingPublish_(a) ? 1 : 0;
    const bg = draftIsPendingPublish_(b) ? 1 : 0;
    if (ag !== bg) return bg - ag;
    const aCreated = getDraftCreatedAtMs_(a);
    const bCreated = getDraftCreatedAtMs_(b);
    if (aCreated !== bCreated) return bCreated - aCreated;
    return 0;
  });
}

function getNextPublishRecommendation() {
  const flatOrder = CAT_TAB_NAV_ROWS[0].concat(CAT_TAB_NAV_ROWS[1]);
  const catIds = isPublishRecCurrentTabOnly_() ? [state.currentCat] : flatOrder;
  const picks = [];
  catIds.forEach(function(catId, catPriority){
    const cat = CATEGORIES[catId];
    if(!cat || !cat.drafts) return;
    const draft = pickNextSeriesDraftForCat_(catId);
    if(!draft || draftIsPublished_(draft.id)) return;
    picks.push(scorePublishRecCandidate_({ draft: draft, cat: cat, catPriority: catPriority }));
  });
  picks.sort(function(a, b){
    if(!isPublishRecCurrentTabOnly_()){
      var aCur = a.cat.id === state.currentCat ? 1 : 0;
      var bCur = b.cat.id === state.currentCat ? 1 : 0;
      if(bCur !== aCur) return bCur - aCur;
    }
    if(b.hasContent !== a.hasContent) return b.hasContent - a.hasContent;
    if(b.sequential !== a.sequential) return b.sequential - a.sequential;
    if(a.step !== b.step) return a.step - b.step;
    return a.catPriority - b.catPriority;
  });
  return picks[0] || null;
}

// ── Main render ──
function getOpsManualState_(){
  if(!state.opsManual || typeof state.opsManual !== 'object'){
    state.opsManual = { activeBranch: 'global', checked: {}, checkedAt: {}, notes: {}, notesAt: {}, collapsed: {}, review: {}, keywordAds: {}, newBranchMeta: { name: '', area: '', note: '' } };
  }
  if(!state.opsManual.checked) state.opsManual.checked = {};
  if(!state.opsManual.checkedAt) state.opsManual.checkedAt = {};
  if(!state.opsManual.notes) state.opsManual.notes = {};
  if(!state.opsManual.notesAt) state.opsManual.notesAt = {};
  if(!state.opsManual.collapsed) state.opsManual.collapsed = {};
  if(!state.opsManual.review) state.opsManual.review = {};
  if(!state.opsManual.keywordAds) state.opsManual.keywordAds = {};
  if(!state.opsManual.newBranchMeta) state.opsManual.newBranchMeta = { name: '', area: '', note: '' };
  if(!OPS_BRANCH_IDS.includes(state.opsManual.activeBranch)) state.opsManual.activeBranch = 'global';
  return state.opsManual;
}
function isOpsItemChecked_(om, itemId){
  return !!(om && om.checked && om.checked[itemId] === true);
}
function stampOpsCheckedAt_(om, itemId){
  if(!om.checkedAt) om.checkedAt = {};
  om.checkedAt[itemId] = new Date().toISOString();
  om.updatedAt = om.checkedAt[itemId];
}
function stampOpsNoteAt_(om, itemId){
  if(!om.notesAt) om.notesAt = {};
  om.notesAt[itemId] = new Date().toISOString();
  om.updatedAt = om.notesAt[itemId];
}
function getOpsSectionsForBranch_(branchId){
  return OPS_MANUAL_SECTIONS.filter(function(sec){ return sec.branch === branchId; });
}
function findOpsItemById_(itemId){
  var found = null;
  OPS_MANUAL_SECTIONS.forEach(function(sec){
    (sec.items || []).forEach(function(it){
      if(!found && String(it.id) === String(itemId)) found = it;
    });
  });
  return found;
}
function countOpsManualUnchecked_(catIdx){
  if(!isOpsManualCategory(catIdx)) return 0;
  var om = getOpsManualState_();
  var p = countOpsManualProgress_(om.activeBranch);
  return Math.max(0, p.total - p.done);
}
function countOpsManualProgress_(branchId){
  var om = getOpsManualState_();
  var total = 0;
  var done = 0;
  getOpsSectionsForBranch_(branchId).forEach(function(sec){
    (sec.items || []).forEach(function(it){
      total++;
      if(isOpsItemChecked_(om, it.id)) done++;
    });
  });
  return { done: done, total: total };
}
function renderOpsNaverKwPanelHTML_(itemId){
  var st = getOpsNaverKwState_(itemId);
  var kwText = (st.keywords || []).join('\n');
  var hoodText = (st.neighborhoods || []).join('\n');
  var combo = buildOpsNaverKwCombined_(st);
  var comboPreview = combo.slice(0, 40).join('\n');
  if(combo.length > 40) comboPreview += '\n… 외 ' + (combo.length - 40) + '개';
  var baseCount = (st.keywords || []).length;
  var hoodCount = (st.neighborhoods || []).length;
  var comboCount = combo.length;
  var bothCount = buildOpsNaverKwCsvRows_(st, 'both').length;
  return '<div class="ops-kw-panel" data-ops-kw="' + escapeHtml(itemId) + '">' +
    '<div class="ops-review-group ops-kw-group">' +
      '<div class="ops-review-group-title"><strong>일반 키워드 설정하기</strong> <span class="ops-review-group-hint">한 줄에 하나 · 추가·수정 후 저장</span>' +
        '<span class="ops-review-group-progress">' + baseCount + '개</span></div>' +
      '<textarea class="ops-review-input ops-kw-textarea" rows="8" data-ops-kw-field="keywords" placeholder="예: 허리통증&#10;거북목교정" onchange="setOpsNaverKwList_(\'' + itemId + '\', \'keywords\', this.value)">' + escapeHtml(kwText) + '</textarea>' +
      '<div class="ops-kw-actions">' +
        '<button type="button" class="ops-kw-btn" onclick="addOpsNaverKwLine_(\'' + itemId + '\', \'keywords\')">추가</button>' +
        '<button type="button" class="ops-kw-btn" onclick="focusOpsNaverKwField_(\'' + itemId + '\', \'keywords\')">수정</button>' +
        '<button type="button" class="ops-kw-btn ops-kw-btn-regen" onclick="regenOpsNaverKwList_(\'' + itemId + '\', \'keywords\')">재생성</button>' +
      '</div>' +
    '</div>' +
    '<div class="ops-review-group ops-kw-group">' +
      '<div class="ops-review-group-title"><strong>일반 키워드에 + 동네 붙이기</strong> <span class="ops-review-group-hint">동네명 한 줄에 하나</span>' +
        '<span class="ops-review-group-progress">' + hoodCount + '개</span></div>' +
      '<textarea class="ops-review-input ops-kw-textarea ops-kw-hood-textarea" rows="5" data-ops-kw-field="neighborhoods" placeholder="예: 약수&#10;약수역" onchange="setOpsNaverKwList_(\'' + itemId + '\', \'neighborhoods\', this.value)">' + escapeHtml(hoodText) + '</textarea>' +
      '<div class="ops-kw-actions">' +
        '<button type="button" class="ops-kw-btn" onclick="addOpsNaverKwLine_(\'' + itemId + '\', \'neighborhoods\')">추가</button>' +
        '<button type="button" class="ops-kw-btn" onclick="focusOpsNaverKwField_(\'' + itemId + '\', \'neighborhoods\')">수정</button>' +
        '<button type="button" class="ops-kw-btn ops-kw-btn-regen" onclick="regenOpsNaverKwList_(\'' + itemId + '\', \'neighborhoods\')">재생성</button>' +
        '<label class="ops-kw-join"><span>연결</span>' +
          '<select onchange="setOpsNaverKwMeta_(\'' + itemId + '\', \'joinMode\', this.value)">' +
            '<option value="space"' + (st.joinMode !== 'none' ? ' selected' : '') + '>띄어쓰기 (약수 허리통증)</option>' +
            '<option value="none"' + (st.joinMode === 'none' ? ' selected' : '') + '>붙여쓰기 (약수허리통증)</option>' +
          '</select></label>' +
      '</div>' +
      '<div class="ops-kw-preview-head">조합 미리보기 <span>' + comboCount.toLocaleString() + '개</span></div>' +
      '<pre class="ops-kw-preview">' + escapeHtml(comboPreview || '(동네·키워드를 입력하면 여기에 표시됩니다)') + '</pre>' +
    '</div>' +
    '<div class="ops-review-group ops-kw-group">' +
      '<div class="ops-review-group-title"><strong>대량등록 CSV 다운로드</strong> <span class="ops-review-group-hint">네이버 키워드 일괄등록 템플릿</span></div>' +
      '<div class="ops-kw-meta-grid">' +
        '<label class="ops-kw-meta"><span>광고그룹ID</span><input type="text" value="' + escapeHtml(st.adGroupId || '') + '" placeholder="grp-a001-…" onchange="setOpsNaverKwMeta_(\'' + itemId + '\', \'adGroupId\', this.value)" /></label>' +
        '<label class="ops-kw-meta"><span>입찰가</span><input type="text" value="' + escapeHtml(st.bid || '') + '" placeholder="70" onchange="setOpsNaverKwMeta_(\'' + itemId + '\', \'bid\', this.value)" /></label>' +
        '<label class="ops-kw-meta ops-kw-meta-wide"><span>PC URL</span><input type="text" value="' + escapeHtml(st.pcUrl || '') + '" placeholder="https://…" onchange="setOpsNaverKwMeta_(\'' + itemId + '\', \'pcUrl\', this.value)" /></label>' +
        '<label class="ops-kw-meta ops-kw-meta-wide"><span>모바일 URL</span><input type="text" value="' + escapeHtml(st.mobileUrl || '') + '" placeholder="https://…" onchange="setOpsNaverKwMeta_(\'' + itemId + '\', \'mobileUrl\', this.value)" /></label>' +
      '</div>' +
      '<div class="ops-kw-dl-counts">일반 ' + baseCount.toLocaleString() + ' · 동네조합 ' + comboCount.toLocaleString() + ' · 합산(중복제거) ' + bothCount.toLocaleString() + ' / 최대 ' + OPS_NAVER_KW_MAX_ROWS.toLocaleString() + '</div>' +
      '<div class="ops-kw-actions ops-kw-dl-actions">' +
        '<button type="button" class="ops-kw-btn ops-kw-btn-dl" onclick="downloadOpsNaverKwCsv_(\'' + itemId + '\', \'base\')">일반 키워드만</button>' +
        '<button type="button" class="ops-kw-btn ops-kw-btn-dl" onclick="downloadOpsNaverKwCsv_(\'' + itemId + '\', \'combo\')">동네 조합만</button>' +
        '<button type="button" class="ops-kw-btn ops-kw-btn-dl ops-kw-btn-primary" onclick="downloadOpsNaverKwCsv_(\'' + itemId + '\', \'both\')">일반+동네 함께</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}
function setOpsNaverKwList_(itemId, field, text){
  var st = getOpsNaverKwState_(itemId);
  st[field] = parseOpsNaverKwLines_(text);
  var om = getOpsManualState_();
  om.updatedAt = new Date().toISOString();
  save({ skipDriveUpload: true, skipGasPush: true });
  refreshOpsNaverKwPanel_(itemId);
}
window.setOpsNaverKwList_ = setOpsNaverKwList_;
function setOpsNaverKwMeta_(itemId, field, value){
  var st = getOpsNaverKwState_(itemId);
  st[field] = String(value || '').trim();
  var om = getOpsManualState_();
  om.updatedAt = new Date().toISOString();
  save({ skipDriveUpload: true, skipGasPush: true });
  if(field === 'joinMode') refreshOpsNaverKwPanel_(itemId);
}
window.setOpsNaverKwMeta_ = setOpsNaverKwMeta_;
function focusOpsNaverKwField_(itemId, field){
  var panel = document.querySelector('.ops-kw-panel[data-ops-kw="' + itemId + '"]');
  if(!panel) return;
  var ta = panel.querySelector('textarea[data-ops-kw-field="' + field + '"]');
  if(ta){
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
  }
}
window.focusOpsNaverKwField_ = focusOpsNaverKwField_;
function addOpsNaverKwLine_(itemId, field){
  var label = field === 'neighborhoods' ? '추가할 동네 이름' : '추가할 키워드';
  var raw = window.prompt(label);
  if(raw == null) return;
  var parts = String(raw).split(/[,，\n]+/).map(function(s){ return s.trim(); }).filter(Boolean);
  if(!parts.length) return;
  var st = getOpsNaverKwState_(itemId);
  var list = Array.isArray(st[field]) ? st[field].slice() : [];
  var seen = {};
  list.forEach(function(x){ seen[x] = true; });
  parts.forEach(function(p){
    if(seen[p]) return;
    seen[p] = true;
    list.push(p);
  });
  st[field] = list;
  getOpsManualState_().updatedAt = new Date().toISOString();
  save({ skipDriveUpload: true, skipGasPush: true });
  refreshOpsNaverKwPanel_(itemId);
}
window.addOpsNaverKwLine_ = addOpsNaverKwLine_;
function regenOpsNaverKwList_(itemId, field){
  var st = getOpsNaverKwState_(itemId);
  var branchKey = opsPlaceBranchKey_(itemId);
  if(field === 'neighborhoods'){
    if(!window.confirm('동네 이름을 지점 기본 목록으로 다시 불러올까요? 현재 동네 목록은 덮어씁니다.')) return;
    st.neighborhoods = opsDefaultNaverNeighborhoods_(branchKey);
  } else {
    var seed = opsNaverKwSeedKeywords_();
    if(!seed.length){
      if(typeof setAppToast === 'function') setAppToast('시드 키워드 파일이 없습니다. ops-naver-kw-seed.js를 확인하세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(!window.confirm('일반 키워드를 정리본 시드(' + seed.length + '개)로 다시 불러올까요? 현재 목록은 덮어씁니다.')) return;
    st.keywords = seed;
    var meta = opsNaverKwSeedMeta_();
    if(!st.adGroupId) st.adGroupId = meta.adGroupId;
    if(!st.bid) st.bid = meta.bid;
  }
  getOpsManualState_().updatedAt = new Date().toISOString();
  save({ skipDriveUpload: false, gasImmediate: true, driveImmediate: true });
  refreshOpsNaverKwPanel_(itemId);
  if(typeof setAppToast === 'function') setAppToast(field === 'neighborhoods' ? '동네 목록을 재생성했습니다.' : '일반 키워드를 재생성했습니다.', { duration: 2500 });
}
window.regenOpsNaverKwList_ = regenOpsNaverKwList_;
function refreshOpsNaverKwPanel_(itemId){
  var panel = document.querySelector('.ops-review-panel[data-item-id="' + itemId + '"]');
  if(!panel){ renderMain(); return; }
  var old = panel.querySelector('.ops-kw-panel');
  var html = renderOpsNaverKwPanelHTML_(itemId);
  var wrap = document.createElement('div');
  wrap.innerHTML = html;
  var next = wrap.firstChild;
  if(old && next) old.replaceWith(next);
  else if(next) panel.insertBefore(next, panel.firstChild);
}
function downloadOpsNaverKwCsv_(itemId, mode){
  var st = getOpsNaverKwState_(itemId);
  if(!String(st.adGroupId || '').trim()){
    if(typeof setAppToast === 'function') setAppToast('광고그룹ID를 먼저 입력해 주세요.', { duration: 3500, variant: 'err' });
    else alert('광고그룹ID를 먼저 입력해 주세요.');
    return;
  }
  var total = buildOpsNaverKwCsvRows_(st, mode).length;
  if(!total){
    if(typeof setAppToast === 'function') setAppToast('다운로드할 키워드가 없습니다.', { duration: 3000, variant: 'err' });
    return;
  }
  if(total > OPS_NAVER_KW_MAX_ROWS){
    if(!window.confirm('키워드가 ' + total.toLocaleString() + '개입니다. 템플릿 최대 ' + OPS_NAVER_KW_MAX_ROWS.toLocaleString() + '개만 저장합니다. 계속할까요?')) return;
  }
  var built = buildOpsNaverKwCsvText_(st, mode);
  var modeLabel = mode === 'base' ? '일반' : (mode === 'combo' ? '동네조합' : '일반+동네');
  var branchKey = opsPlaceBranchKey_(itemId);
  var place = branchKey === 'jakjeon' ? '작전' : '약수';
  var filename = '네이버키워드_' + place + '_' + modeLabel + '_' + built.count + '개.csv';
  var blob = new Blob(['\ufeff' + built.text], { type: 'text/csv;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 800);
  if(typeof setAppToast === 'function'){
    setAppToast(filename + (built.truncated ? ' (10,000개로 잘림)' : '') + ' 다운로드', { duration: 3500 });
  }
}
window.downloadOpsNaverKwCsv_ = downloadOpsNaverKwCsv_;
function renderOpsManualMainHTML_(){
  var om = getOpsManualState_();
  var branch = om.activeBranch;
  var prog = countOpsManualProgress_(branch);
  var branchLabel = (CAT_GROUP_OPS.find(function(o){ return o.branch === branch; }) || {}).label || OPS_BRANCH_LABELS[branch] || branch;
  var intro = '<div class="ops-manual-intro">' +
    '<div class="ops-manual-title">브랜딩·지점 오픈 메뉴얼 · ' + escapeHtml(branchLabel) + '</div>' +
    '<p class="ops-manual-desc">' + escapeHtml(OPS_BRANCH_HINTS[branch] || '') + '</p>' +
    '<div class="ops-manual-progress"><span class="ops-manual-progress-label">진행</span><span class="ops-manual-progress-num">' + prog.done + ' / ' + prog.total + '</span></div>' +
  '</div>';
  var newMeta = '';
  if(branch === 'new'){
    var meta = om.newBranchMeta || {};
    newMeta = '<div class="ops-new-meta">' +
      '<div class="ops-new-meta-title">신규 지점 메모</div>' +
      '<label class="ops-new-field"><span>후보명</span><input type="text" value="' + escapeHtml(meta.name || '') + '" placeholder="예: ○○ Re:Al Movement" onchange="setOpsNewMeta_(\'name\', this.value)" /></label>' +
      '<label class="ops-new-field"><span>지역·상권</span><input type="text" value="' + escapeHtml(meta.area || '') + '" placeholder="예: 성수·역삼·계양" onchange="setOpsNewMeta_(\'area\', this.value)" /></label>' +
      '<label class="ops-new-field"><span>메모</span><textarea rows="2" placeholder="차별점·타깃·일정" onchange="setOpsNewMeta_(\'note\', this.value)">' + escapeHtml(meta.note || '') + '</textarea></label>' +
    '</div>';
  }
  var sections = getOpsSectionsForBranch_(branch).map(function(sec){
    var collapsed = !!om.collapsed[sec.id];
    var itemsHtml = (sec.items || []).map(function(it){
      var checked = isOpsItemChecked_(om, it.id);
      var note = om.notes[it.id] || '';
      var review = ensureOpsReviewState_(it, branch) || { open: false, fields: {}, pinned: {} };
      var reviewOpen = !!review.open;
      var field = review.fields || {};
      var proposalItems = review.proposalItems || [];
      var checks = review.placementChecks || [];
      var proposalHtml = proposalItems.map(function(p){
        return '<div class="ops-review-proposal' + (p.done ? ' done' : '') + '" data-proposal-id="' + escapeHtml(p.id) + '">' +
          '<div class="ops-review-proposal-head">' +
            '<label class="ops-review-proposal-check">' +
              '<input type="checkbox"' + (p.done ? ' checked' : '') + ' onchange="toggleOpsReviewProposalDone_(\'' + it.id + '\', \'' + p.id + '\', this.checked)" />' +
              '<span class="ops-review-label">' + escapeHtml(p.title || '제안 문장') + '</span>' +
            '</label>' +
            '<div class="ops-review-proposal-actions">' +
              '<button type="button" class="ops-review-pin' + (p.pinned ? ' active' : '') + '" onclick="toggleOpsReviewProposalPin_(\'' + it.id + '\', \'' + p.id + '\')">' + (p.pinned ? '고정됨' : '고정') + '</button>' +
              '<button type="button" class="ops-review-rewrite" data-rewrite-btn="' + it.id + '-' + p.id + '" onclick="rewriteOpsReviewProposal_(\'' + it.id + '\', \'' + p.id + '\', \'' + branch + '\')">재작성</button>' +
            '</div>' +
          '</div>' +
          '<div class="ops-review-field">' +
            '<span class="ops-review-sublabel">목적 의도 알려주기</span>' +
            '<textarea class="ops-review-input ops-grow-textarea" rows="1" data-ops-brief="' + it.id + '-' + p.id + '" oninput="autoGrowTextarea_(this)" onchange="setOpsReviewProposalBrief_(\'' + it.id + '\', \'' + p.id + '\', this.value)">' + escapeHtml(p.brief || '') + '</textarea>' +
          '</div>' +
          '<div class="ops-review-field ops-proposal-field">' +
            '<span class="ops-review-sublabel"><strong>제안 문장</strong>과 그 이유 <span class="ops-proposal-edit-hint">· 탭하여 수정</span></span>' +
            '<div class="ops-proposal-preview" tabindex="0" role="button" aria-label="제안 문장 수정" onclick="focusOpsProposalTextarea_(this)" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();focusOpsProposalTextarea_(this);}">' + formatOpsProposalPreviewInnerHTML_(p.text || '') + '</div>' +
            '<textarea class="ops-review-input ops-grow-textarea ops-proposal-textarea" rows="1" data-ops-text="' + it.id + '-' + p.id + '" oninput="autoGrowTextarea_(this);syncOpsProposalPreview_(this)" onblur="blurOpsProposalTextarea_(this)" onchange="setOpsReviewProposalText_(\'' + it.id + '\', \'' + p.id + '\', this.value)">' + escapeHtml(p.text || '') + '</textarea>' +
          '</div>' +
        '</div>';
      }).join('');
      var proposalProgress = proposalItems.length ? ('<span class="ops-review-group-progress">' + proposalItems.filter(function(x){ return !!x.done; }).length + '/' + proposalItems.length + ' 완료</span>') : '';
      var checklistHtml = checks.map(function(c, idx){
        return '<label class="ops-review-check-row">' +
          '<input type="checkbox"' + (c.done ? ' checked' : '') + ' onchange="toggleOpsReviewPlacementCheck_(\'' + it.id + '\',' + idx + ',this.checked)" />' +
          '<span>' + escapeHtml(c.label || '') + '</span>' +
        '</label>';
      }).join('');
      var kwPanelHtml = isOpsNaverKwItemId_(it.id) ? renderOpsNaverKwPanelHTML_(it.id) : '';
      var reviewHtml = '<div class="ops-review-wrap">' +
        '<div class="ops-item-toolbar">' +
          '<button type="button" class="ops-review-btn" data-item-id="' + it.id + '" aria-expanded="' + (reviewOpen ? 'true' : 'false') + '" onclick="toggleOpsReview_(\'' + it.id + '\', event)">함께 검토</button>' +
          '<textarea class="ops-check-note ops-grow-textarea" rows="1" placeholder="메모·링크·담당·완료일" oninput="autoGrowTextarea_(this)" onchange="setOpsNote_(\'' + it.id + '\', this.value)">' + escapeHtml(note) + '</textarea>' +
        '</div>' +
        '<div class="ops-review-panel' + (reviewOpen ? ' open' : '') + '" data-item-id="' + it.id + '">' +
          kwPanelHtml +
          '<div class="ops-review-group"><div class="ops-review-group-title"><strong>제안 문장</strong> <span class="ops-review-group-hint">항목별로 기획·완료</span>' + proposalProgress + '</div>' + proposalHtml + '</div>' +
          '<div class="ops-review-group"><div class="ops-review-group-title">생성된 내용을 어디에 반영할지(체크)</div><div class="ops-review-checklist">' + checklistHtml + '</div></div>' +
          '<div class="ops-review-actions">' +
            '<button type="button" class="ops-review-regen" onclick="regenOpsReview_(\'' + it.id + '\', \'' + branch + '\')">재생성</button>' +
          '</div>' +
        '</div>' +
      '</div>';
      return '<li class="ops-check-item' + (checked ? ' done' : '') + '">' +
        '<label class="ops-check-row">' +
          '<input type="checkbox"' + (checked ? ' checked' : '') + ' onchange="toggleOpsCheck_(\'' + it.id + '\', this.checked)" />' +
          '<span class="ops-check-text">' + escapeHtml(it.text) + '</span>' +
        '</label>' +
        (function(){
          var purposeLine = String(it.purpose || it.hint || '').trim();
          return purposeLine ? '<div class="ops-check-purpose">' + escapeHtml(purposeLine) + '</div>' : '';
        })() +
        reviewHtml +
      '</li>';
    }).join('');
    return '<details class="ops-section' + (collapsed ? '' : ' open') + '" id="ops-sec-' + sec.id + '"' + (collapsed ? '' : ' open') + '>' +
      '<summary class="ops-section-summary" onclick="toggleOpsSection_(\'' + sec.id + '\'); return false;">' +
        '<span class="ops-section-phase">' + escapeHtml(sec.phase) + '</span>' +
        '<span class="ops-section-count">' + (sec.items || []).filter(function(it){ return isOpsItemChecked_(om, it.id); }).length + '/' + (sec.items || []).length + '</span>' +
      '</summary>' +
      '<ol class="ops-check-list">' + itemsHtml + '</ol>' +
    '</details>';
  }).join('');
  return '<div class="ops-manual-wrap">' + intro + newMeta +
    '<div class="ops-sections">' + sections + '</div>' +
    '<p class="ops-manual-foot">체크·메모는 이 기기·Drive·서버 동기화에 저장됩니다. 지점은 상단 「지점브랜딩」에서 바꿀 수 있어요.</p>' +
  '</div>';
}
function selectOpsBranch_(branchId){
  selectOpsBranchFromNav_(branchId);
}
window.selectOpsBranch_ = selectOpsBranch_;
function toggleOpsCheck_(itemId, checked){
  var om = getOpsManualState_();
  if(checked) om.checked[itemId] = true;
  else om.checked[itemId] = false;
  stampOpsCheckedAt_(om, itemId);
  save({ skipDriveUpload: false, gasImmediate: true, driveImmediate: true });
  renderTabs();
  renderMain();
}
window.toggleOpsCheck_ = toggleOpsCheck_;
function setOpsNote_(itemId, note){
  var om = getOpsManualState_();
  note = String(note || '').trim();
  if(note) om.notes[itemId] = note;
  else delete om.notes[itemId];
  stampOpsNoteAt_(om, itemId);
  save({ skipDriveUpload: true, skipGasPush: true });
}
window.setOpsNote_ = setOpsNote_;
function setOpsNewMeta_(field, value){
  var om = getOpsManualState_();
  if(!om.newBranchMeta) om.newBranchMeta = { name: '', area: '', note: '' };
  om.newBranchMeta[field] = String(value || '').trim();
  save({ skipDriveUpload: true, skipGasPush: true });
}
window.setOpsNewMeta_ = setOpsNewMeta_;
function toggleOpsSection_(sectionId){
  var om = getOpsManualState_();
  om.collapsed[sectionId] = !om.collapsed[sectionId];
  save({ skipDriveUpload: true, skipGasPush: true });
  var el = document.getElementById('ops-sec-' + sectionId);
  if(el){
    if(om.collapsed[sectionId]) el.removeAttribute('open');
    else el.setAttribute('open', 'open');
  }
}
window.toggleOpsSection_ = toggleOpsSection_;
function renderOpsReviewFieldHTML_(itemId, key, label, value, isPinned){
  return '<div class="ops-review-field">' +
    '<div class="ops-review-field-head">' +
      '<span class="ops-review-label">' + escapeHtml(label) + '</span>' +
      '<button type="button" class="ops-review-pin' + (isPinned ? ' active' : '') + '" onclick="toggleOpsReviewPin_(\'' + itemId + '\', \'' + key + '\')">' + (isPinned ? '고정됨' : '고정') + '</button>' +
    '</div>' +
    '<textarea class="ops-review-input ops-grow-textarea" rows="1" oninput="autoGrowTextarea_(this)" onchange="setOpsReviewField_(\'' + itemId + '\', \'' + key + '\', this.value)">' + escapeHtml(value || '') + '</textarea>' +
  '</div>';
}
function toggleOpsReview_(itemId, ev){
  if(ev){
    ev.preventDefault();
    ev.stopPropagation();
  }
  var om = getOpsManualState_();
  var item = findOpsItemById_(itemId);
  if(!item) return;
  var review = ensureOpsReviewState_(item, om.activeBranch);
  if(!review) return;
  review.open = !review.open;
  save({ skipDriveUpload: true, skipGasPush: true });
  var panel = document.querySelector('.ops-review-panel[data-item-id="' + itemId + '"]');
  var btn = document.querySelector('.ops-review-btn[data-item-id="' + itemId + '"]');
  if(panel){
    panel.classList.toggle('open', !!review.open);
    if(btn) btn.setAttribute('aria-expanded', review.open ? 'true' : 'false');
    if(review.open) scheduleOpsReviewTextareaGrow_(panel.closest('.ops-check-item') || panel);
  } else {
    renderMain();
  }
}
window.toggleOpsReview_ = toggleOpsReview_;
function setOpsReviewField_(itemId, key, value){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  if(!om.review[itemId].fields) om.review[itemId].fields = {};
  om.review[itemId].fields[key] = String(value || '').trim();
  save({ skipDriveUpload: true, skipGasPush: true });
}
window.setOpsReviewField_ = setOpsReviewField_;
function toggleOpsReviewPin_(itemId, key){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  if(!om.review[itemId].pinned) om.review[itemId].pinned = {};
  om.review[itemId].pinned[key] = !om.review[itemId].pinned[key];
  save({ skipDriveUpload: true, skipGasPush: true });
  renderMain();
}
window.toggleOpsReviewPin_ = toggleOpsReviewPin_;
function setOpsReviewProposalText_(itemId, proposalId, value){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].proposalItems)) return;
  om.review[itemId].proposalItems.forEach(function(p){
    if(String(p.id) === String(proposalId)) p.text = String(value || '').trim();
  });
  save({ skipDriveUpload: true, skipGasPush: true });
}
window.setOpsReviewProposalText_ = setOpsReviewProposalText_;
function setOpsReviewProposalBrief_(itemId, proposalId, value){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].proposalItems)) return;
  om.review[itemId].proposalItems.forEach(function(p){
    if(String(p.id) === String(proposalId)) p.brief = String(value || '').trim();
  });
  save({ skipDriveUpload: true, skipGasPush: true });
}
window.setOpsReviewProposalBrief_ = setOpsReviewProposalBrief_;
function toggleOpsReviewProposalDone_(itemId, proposalId, checked){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].proposalItems)) return;
  om.review[itemId].proposalItems.forEach(function(p){
    if(String(p.id) === String(proposalId)) p.done = !!checked;
  });
  syncOpsReviewItemComplete_(itemId);
  save({ skipDriveUpload: false });
  renderTabs();
  renderMain();
}
window.toggleOpsReviewProposalDone_ = toggleOpsReviewProposalDone_;
function toggleOpsReviewProposalPin_(itemId, proposalId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].proposalItems)) return;
  om.review[itemId].proposalItems.forEach(function(p){
    if(String(p.id) === String(proposalId)) p.pinned = !p.pinned;
  });
  save({ skipDriveUpload: true, skipGasPush: true });
  renderMain();
}
window.toggleOpsReviewProposalPin_ = toggleOpsReviewProposalPin_;
function toggleOpsReviewPlacementCheck_(itemId, idx, checked){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].placementChecks) || !om.review[itemId].placementChecks[idx]) return;
  if(!om.checked || typeof om.checked !== 'object') om.checked = {};
  om.review[itemId].placementChecks[idx].done = !!checked;
  syncOpsReviewItemComplete_(itemId);
  save({ skipDriveUpload: false });
  renderTabs();
  renderMain();
}
window.toggleOpsReviewPlacementCheck_ = toggleOpsReviewPlacementCheck_;
function syncOpsReviewProposalFromDOM_(itemId, proposalId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId] || !Array.isArray(om.review[itemId].proposalItems)) return null;
  var key = String(itemId) + '-' + String(proposalId);
  var briefEl = document.querySelector('textarea[data-ops-brief="' + key + '"]');
  var textEl = document.querySelector('textarea[data-ops-text="' + key + '"]');
  var proposal = null;
  om.review[itemId].proposalItems.forEach(function(p){
    if(String(p.id) !== String(proposalId)) return;
    if(briefEl) p.brief = String(briefEl.value || '').trim();
    if(textEl) p.text = String(textEl.value || '').trim();
    proposal = p;
  });
  return proposal;
}
async function rewriteOpsReviewProposal_(itemId, proposalId, branchId){
  if(plannerAiBusy) return;
  var item = findOpsItemById_(itemId);
  if(!item) return;
  var om = getOpsManualState_();
  ensureOpsReviewState_(item, branchId || om.activeBranch);
  var rv = om.review && om.review[itemId];
  if(!rv || !Array.isArray(rv.proposalItems)) return;
  var p = syncOpsReviewProposalFromDOM_(itemId, proposalId);
  if(!p){
    rv.proposalItems.forEach(function(x){ if(String(x.id) === String(proposalId)) p = x; });
  }
  if(!p) return;
  if(p.pinned){
    if(typeof setAppToast === 'function') setAppToast('고정된 제안은 재작성할 수 없어요. 고정을 해제해 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  if(!state.apiKey){ openApiModal(); return; }
  var base = buildOpsReviewDraft_(item, branchId || om.activeBranch);
  var baseP = null;
  (base.proposalItems || []).forEach(function(x){ if(String(x.id) === String(proposalId)) baseP = x; });
  var btn = document.querySelector('button[data-rewrite-btn="' + itemId + '-' + proposalId + '"]');
  plannerAiBusy = true;
  if(btn){ btn.disabled = true; btn.textContent = '재작성 중…'; }
  try {
    var prompt =
      buildBrandStrategyPromptPrefix_() + '\n\n' +
      '[체크리스트 항목]\n' + String(item.text || '') + '\n\n' +
      '[제안 블록]\n' + String(p.title || '제안 문장') + '\n\n' +
      '[사용자가 수정한 목적·의도 — 반드시 반영]\n' + String(p.brief || '') + '\n\n' +
      '[사용자가 수정한 제안 문장 — 반드시 반영·다듬기]\n' + String(p.text || '') + '\n\n' +
      (baseP ? ('[초안 참고]\n목적·의도: ' + String(baseP.brief || '') + '\n제안: ' + String(baseP.text || '') + '\n\n') : '') +
      '[요청]\n' +
      '- 사용자가 박스에 적어 둔 목적·의도와 제안 문장의 방향을 유지하면서 문장만 더 명확하고 실무에 쓸 수 있게 다듬으세요.\n' +
      '- 리:얼(Real + Re Alignment) · 1:1 맞춤 움직임 톤 유지. 치료·진단·완치 표현 금지.\n' +
      '- brief 형식: "목적: …\\n의도: …"\n' +
      '- text 형식: "제안 문장: …\\n이유: …"\n' +
      'JSON만: {"brief":"…","text":"…"}';
    var raw = await callClaudePlanner_(prompt, { maxTokens: 1400 });
    var jsonText = raw.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = jsonText.indexOf('{');
    var end = jsonText.lastIndexOf('}');
    if(start < 0 || end < start) throw new Error('재작성 결과를 읽지 못했어요');
    var obj = JSON.parse(jsonText.slice(start, end + 1));
    if(obj.brief) p.brief = String(obj.brief).trim();
    if(obj.text){
      var nextText = String(obj.text).trim();
      if(nextText.indexOf('제안 문장:') < 0){
        nextText = opsProposalWithReason_(nextText, '사용자 수정 내용을 반영해 다듬었습니다.');
      }
      p.text = nextText;
    }
    if(!rv.open) rv.open = true;
    save({ skipDriveUpload: true, skipGasPush: true });
    renderMain();
    if(typeof setAppToast === 'function') setAppToast('「' + (p.title || '제안') + '」을 수정 내용 기준으로 재작성했어요.', { duration: 3500, variant: 'ok' });
  } catch(e){
    p.brief = regenerateOpsReviewText_('proposal-brief:' + proposalId, p.brief, (baseP && baseP.brief) || '');
    p.text = regenerateOpsReviewText_('proposal:' + proposalId, p.text, (baseP && baseP.text) || '');
    save({ skipDriveUpload: true, skipGasPush: true });
    renderMain();
    if(typeof setAppToast === 'function') setAppToast('AI 재작성에 실패해 로컬 보강으로 반영했어요.', { duration: 4000, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    if(btn){ btn.disabled = false; btn.textContent = '재작성'; }
  }
}
window.rewriteOpsReviewProposal_ = rewriteOpsReviewProposal_;
function regenOpsReview_(itemId, branchId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  var item = findOpsItemById_(itemId);
  if(!item) return;
  var rv = om.review[itemId];
  var base = buildOpsReviewDraft_(item, branchId || om.activeBranch);
  if(!rv.fields) rv.fields = {};
  if(!rv.pinned) rv.pinned = {};
  if(!Array.isArray(rv.proposalItems)) rv.proposalItems = [];
  var baseById = {};
  (base.proposalItems || []).forEach(function(p){ baseById[String(p.id)] = p; });
  rv.proposalItems.forEach(function(p){
    var b = baseById[String(p.id)] || { text: p.text || '', brief: p.brief || '' };
    if(p.pinned) return;
    if(b.brief) p.brief = regenerateOpsReviewText_('proposal-brief:' + p.id, p.brief, b.brief);
    p.text = regenerateOpsReviewText_('proposal:' + p.id, p.text, b.text || '');
  });
  if(!rv.proposalItems.length && (base.proposalItems || []).length){
    rv.proposalItems = (base.proposalItems || []).map(function(p){ return normalizeOpsProposalItem_(null, p); });
  }
  if(!Array.isArray(rv.placementChecks) || !rv.placementChecks.length){
    rv.placementChecks = (base.placementChecks || []).map(function(c){ return { id:c.id, label:c.label, done:false }; });
  }
  rv.open = true;
  save({ skipDriveUpload: true, skipGasPush: true });
  var panel = document.querySelector('.ops-review-panel[data-item-id="' + itemId + '"]');
  var btn = document.querySelector('.ops-review-btn[data-item-id="' + itemId + '"]');
  if(panel){
    panel.classList.add('open');
    if(btn) btn.setAttribute('aria-expanded', 'true');
    scheduleOpsReviewTextareaGrow_(panel.closest('.ops-check-item') || panel);
  } else {
    renderMain();
  }
}
window.regenOpsReview_ = regenOpsReview_;

function renderMain() {
  syncPendingPlansOnRender_();
  const cat = CATEGORIES[state.currentCat];
  const mc = document.getElementById('main-content');
  updateAddButtonVisibility_();

  if(isOpsManualCategory(state.currentCat)){
    mc.innerHTML = renderOpsManualMainHTML_();
    scheduleOpsReviewTextareaGrow_(mc);
    return;
  }

  if(state.showAdd){ mc.innerHTML = renderAddForm(); bindNewItemTopicInput_(); bindNewItemRefNoteInput_(); bindNewItemFlowInputs_(); return; }

  const visibleDrafts = getVisibleDraftsInMain_(state.currentCat);
  const total = visibleDrafts.length;
  const pubCount = visibleDrafts.filter(function(d){ return draftIsPublished_(d.id); }).length;
  const statsHTML = '<div class="pub-count-row"><span class="pub-count-label">발행</span><span class="pub-count-num">' + pubCount + '/' + total + '</span></div>';

  const searchHTML = `
    <div class="search-wrap">
      <input class="search-input" value="${escapeHtml(state.searchQ)}" oninput="setSearch(this.value)" placeholder="주제 검색..." />
    </div>`;

  var bodyHTML = '';
  if(state.searchQ && String(state.searchQ).trim()){
    var q = state.searchQ;
    var hits = cat.drafts.filter(function(d){
      if(!d) return false;
      return (d.topic || '').includes(q) || (d.angle || '').includes(q) ||
        (d.series && d.series.includes(q)) || (d.rationale && d.rationale.includes(q)) ||
        (d.pillar && d.pillar.includes(q));
    });
    bodyHTML = renderMainGoalPanelHTML_() +
      '<div class="search-mode-note">검색 중 · ' + (isDailyShareCategory(state.currentCat) ? '일상 주제 목록' : (isOpsManualCategory(state.currentCat) ? '메뉴얼' : '단계별 로드맵')) + '은 검색어를 지우면 다시 보여요.</div>' +
      '<div class="cards-wrap search-results">' +
      (hits.length ? hits.map(function(d){ return draftCardHTML(d, cat, false, cat.drafts.indexOf(d), false); }).join('') :
        '<div class="empty-note">검색 결과가 없어요</div>') +
    '</div>';
  } else {
    var planPanel = isDailyShareCategory(state.currentCat)
      ? renderDailySharePanelHTML_(state.currentCat)
      : renderProgramRoadmapHTML_(state.currentCat);
    bodyHTML = renderPlannerSetupGuideHTML_() + renderMainGoalPanelHTML_() + planPanel;
  }

  mc.innerHTML = statsHTML + searchHTML + bodyHTML;
  scheduleWorkshopTextareaGrow_(document.getElementById('main-content'));
  if(isAutoTopicReplenishEnabled_()){
    scheduleMinimumPendingDraftsForCat_(state.currentCat, 'render');
  }
}

function draftCardHTML(d, cat, isRec, draftIndex, compactInSeries) {
  const pub = state.published[d.id];
  const hasDraft = draftIsPendingPublish_(d);
  const isPub = draftIsPublished_(d.id);
  const isPartialPub = !isPub && draftHasPartialPublish_(d.id, cat.id);
  const color = cat.color;
  const brandMeta = getDraftBrandMeta_(d, cat.id, draftIndex);
  const audienceBadge = String(cat.audience || '').includes('전문가') ? '전문가' : (String(cat.audience || '').includes('일반') ? '일반인' : cat.audience);
  const createdDateLabel = getDraftCreatedDateLabel_(d);
  const badges = [
    `<span class="badge badge-aud">${escapeHtml(audienceBadge)}</span>`,
    isRec && d.recType==='related' ? '<span class="badge badge-rec">관련</span>' : '',
    compactInSeries && brandMeta.step ? '<span class="badge badge-step">' + escapeHtml(brandMeta.step) + '</span>' : '',
    hasDraft ? '<span class="badge badge-gen">초안있음</span>' : '',
    isPartialPub ? '<span class="badge badge-partial">일부발행</span>' : '',
    isPub ? '<span class="badge badge-pub">발행완료</span>' : '',
  ].filter(Boolean).join('');
  const brandLine = compactInSeries
    ? (brandMeta.pillar ? '<div class="card-brand-line compact">' + escapeHtml(brandMeta.pillar) + '</div>' : '')
    : '<div class="card-brand-line">' + escapeHtml(brandMeta.series) + (brandMeta.step ? ' · ' + escapeHtml(brandMeta.step) : '') + (brandMeta.pillar ? ' · ' + escapeHtml(brandMeta.pillar) : '') + '</div>';
  return `<div class="draft-card plan-tier-topic${isPub?' published':''}${isRec?' recommended':''}" data-plan-tier="4" style="--cc:${color}" tabindex="0" role="button" aria-label="${escapeHtml(d.topic)}" onclick="openDetail('${d.id}',${cat.id})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDetail('${d.id}',${cat.id});}">
    <div class="draft-card-actions">
      <button type="button" class="draft-card-delete-mini" title="이 주제 카드 삭제" onclick="event.stopPropagation();deleteDraft(${cat.id},'${d.id}')">삭제</button>
      <button type="button" class="draft-card-refresh-mini" data-regen-draft="${d.id}" title="이 주제의 제목·각도만 다시 받기" onclick="event.stopPropagation();refreshTopicsForDraft(${cat.id},'${d.id}')">주제 변경</button>
    </div>
    <div class="card-badges">${badges}</div>
    ${brandLine}
    <div class="card-topic">${plannerClampTextHTML_(d.topic, { lines: 2, passive: true })}</div>
    <div class="card-angle">${plannerClampTextHTML_(d.angle, { lines: 3, passive: true })}</div>
    ${brandMeta.rationale ? '<div class="card-rationale">' + plannerClampTextHTML_(stripTopicRationaleStepPrefix_(brandMeta.rationale), { lines: 2, passive: true }) + '</div>' : ''}
    <div class="card-footer">
      <div class="card-date">${isPub?'발행: '+pub.date:'미발행'}</div>
      <div class="card-created-date">생성: ${createdDateLabel}</div>
    </div>
  </div>`;
}

function resetDraftFilters(){
  state.searchQ = '';
  renderMain();
}
window.resetDraftFilters = resetDraftFilters;
function setSearch(v){
  state.searchQ = v;
  clearTimeout(searchDebounceTimer);
  var selStart = null;
  var active = document.activeElement;
  if(active && active.classList && active.classList.contains('search-input')){
    selStart = active.selectionStart;
  }
  searchDebounceTimer = setTimeout(function(){
    renderMain();
    var inp = document.querySelector('.search-input');
    if(inp){
      inp.focus();
      if(selStart != null){
        try { inp.setSelectionRange(selStart, selStart); } catch(e){}
      }
    }
  }, 300);
}

function toggleAdd(){
  state.showAdd = !state.showAdd;
  if(state.showAdd){
    state.newItem.catId = state.currentCat;
    state.newItem.topic = state.newItem.topic || '';
  }
  document.getElementById('add-toggle-btn').textContent = state.showAdd ? '닫기' : '추가';
  renderMain();
}

function normalizeRefImages_(imagePayload){
  if(!imagePayload) return [];
  if(Array.isArray(imagePayload)) return imagePayload.filter(function(img){ return img && img.data; });
  return (imagePayload.data ? [imagePayload] : []);
}
function buildClaudeMessageContent_(textPrompt, imagePayload){
  var images = normalizeRefImages_(imagePayload);
  if(!images.length) return textPrompt;
  var content = images.map(function(img){
    return { type: 'image', source: { type: 'base64', media_type: img.mediaType || 'image/jpeg', data: img.data } };
  });
  content.push({ type: 'text', text: textPrompt });
  return content;
}
function newItemHasRefImages_(){
  return !!(state.newItem.refImages && state.newItem.refImages.length && state.newItem.refImages[0].data);
}

function createEmptyNewItem_(catId){
  return {
    date: '', topic: '', catId: typeof catId === 'number' ? catId : 0,
    refImages: [], refImage: null, refNote: '', imageAnalyzing: false,
    flowProposals: [], selectedFlowIdx: 0, flowProposalsLoading: false,
    flowProposalsReady: false, cachedYoutubeAnalysis: '', _cachedFlowYoutubeUrl: ''
  };
}

function resetNewItemFlowProposals_(){
  if(!state.newItem) return;
  state.newItem.flowProposals = [];
  state.newItem.selectedFlowIdx = 0;
  state.newItem.flowProposalsReady = false;
  state.newItem.flowProposalsLoading = false;
  state.newItem.cachedYoutubeAnalysis = '';
  state.newItem._cachedFlowYoutubeUrl = '';
}

function newItemHasMediaSource_(){
  if(newItemHasRefImages_()) return true;
  var source = buildDraftSourceNote_(state.newItem.topic, state.newItem.refNote);
  return extractYoutubeUrlsFromText_(source).length > 0;
}

function newItemHasFlowSource_(){
  if(newItemHasRefImages_()) return true;
  return !!buildDraftSourceNote_(state.newItem.topic, state.newItem.refNote).trim();
}

function parseFlowStepsText_(text){
  return String(text || '').split('\n').map(function(line){
    return line.replace(/^\s*\d+[\.\)、]\s*/, '').trim();
  }).filter(Boolean);
}

function flowStepsToText_(steps){
  return (steps || []).map(function(s, i){ return (i + 1) + '. ' + s; }).join('\n');
}

function normalizeFlowProposal_(raw, idx){
  var steps = Array.isArray(raw && raw.steps) ? raw.steps : [];
  if(!steps.length && raw && typeof raw.steps === 'string') steps = parseFlowStepsText_(raw.steps);
  if(!steps.length && raw && raw.flow) steps = parseFlowStepsText_(raw.flow);
  if(!steps.length && raw && raw.outline) steps = parseFlowStepsText_(raw.outline);
  var title = String((raw && (raw.title || raw.topic || raw.headline)) || '').trim();
  var angle = String((raw && (raw.angle || raw.hook || raw.summary)) || '').trim();
  if(!title && steps[0]) title = String(steps[0]).slice(0, 36);
  if(!angle) angle = '카테고리·참고 자료 기반 흐름';
  var cleanSteps = steps.map(function(s){ return String(s).trim(); }).filter(Boolean);
  var stepFallback = ['문제·장면 제기', '핵심 전개', '원리·마무리'];
  while(cleanSteps.length < 3) cleanSteps.push(stepFallback[cleanSteps.length]);
  return {
    id: idx,
    title: title || ('글 흐름 ' + (idx + 1)),
    angle: angle,
    steps: cleanSteps.slice(0, 3)
  };
}
/** 글 흐름 제안용 — 공통 기본 + 카테고리 채널 프롬프트 (너무 길면 앞부분만) */
function clipPromptGuideForFlow_(text, maxLen){
  text = String(text || '').trim();
  maxLen = maxLen || 4200;
  if(text.length <= maxLen) return text;
  return text.slice(0, maxLen) + '\n…(이하 생략 — 흐름 기획용)';
}
function buildFlowProposalPromptGuides_(catId){
  var chunks = [];
  var base = getBasePrompt();
  if(base) chunks.push('[공통 기본 프롬프트 — 톤·포지셔닝·의료법]\n' + clipPromptGuideForFlow_(base, 4200));
  if(isDailyShareCategory(catId)){
    var thread = getCatPrompt(catId, 'thread');
    if(thread) chunks.push('[일상 공유(쓰레드) 작성 지침 — 각 흐름이 이 형식·톤·단계에 맞게]\n' + clipPromptGuideForFlow_(thread, 4200));
  } else if(isHeiljagyaeCategory(catId)){
    var community = getCatPrompt(catId, 'community');
    if(community) chunks.push('[힐자계 게시판 작성 지침 — 각 흐름이 이 형식·톤·단계에 맞게]\n' + clipPromptGuideForFlow_(community, 4200));
  } else {
    var blog = getCatPrompt(catId, 'blog');
    if(blog) chunks.push('[블로그 작성 지침 — 각 흐름이 이 형식·톤·단계에 맞게]\n' + clipPromptGuideForFlow_(blog, 4200));
    // 전문가·일반 모두 인스타 캡션 각도도 흐름에 반영 (본문 초안 단계와 톤 맞춤)
    var insta = getCatPrompt(catId, 'insta');
    if(insta) chunks.push('[인스타 캡션 지침 — 흐름 각도·훅에 참고]\n' + clipPromptGuideForFlow_(insta, 1800));
  }
  return chunks.join('\n\n');
}
/** sourceNote(키워드+메모)에서 키워드 줄을 빼 중복 입력 방지 */
function stripKeywordsFromSourceNote_(sourceNote, keywords){
  var note = String(sourceNote || '').trim();
  var kw = String(keywords || '').trim();
  if(!note || !kw) return note;
  if(note === kw) return '';
  var prefix = kw + '\n\n';
  if(note.indexOf(prefix) === 0) return note.slice(prefix.length).trim();
  if(note.indexOf(kw + '\n') === 0) return note.slice(kw.length).replace(/^\n+/, '').trim();
  return note;
}
function extractFlowArrayFromAiObj_(obj){
  if(!obj) return [];
  if(Array.isArray(obj)) return obj;
  if(Array.isArray(obj.flows)) return obj.flows;
  if(Array.isArray(obj.proposals)) return obj.proposals;
  if(Array.isArray(obj.suggestions)) return obj.suggestions;
  if(Array.isArray(obj.items)) return obj.items;
  if(obj.flow1 || obj.flow2 || obj.flow3){
    return [obj.flow1, obj.flow2, obj.flow3].filter(Boolean);
  }
  return [];
}
function isUsableFlowTitle_(title){
  title = String(title || '').trim();
  if(title.length < 4) return false;
  if(/^\.{2,}$|^…+$|^title$|^제목|^글 제목|^TITLE\d*$|^실제제목\d*$|^각도\d*$|^1단계$|^2단계$|^3단계$/i.test(title)) return false;
  return true;
}
function collectLooseFlowTitlesFromText_(text){
  var loose = [];
  var re = /"title"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  var m;
  while((m = re.exec(String(text || ''))) && loose.length < 6){
    var t = m[1].replace(/\\"/g, '"').trim();
    if(!isUsableFlowTitle_(t)) continue;
    loose.push({ title: t, angle: '', steps: [] });
  }
  return loose;
}
function parseArticleFlowProposalsFromText_(text){
  var flows = [];
  try {
    var obj = parsePlannerAiJsonObject_(text);
    flows = extractFlowArrayFromAiObj_(obj).filter(function(f){
      return f && isUsableFlowTitle_(f.title || f.topic || f.headline);
    });
  } catch(parseErr){
    flows = [];
  }
  if(flows.length >= 3) return flows;
  // JSON 파싱 실패·잘림 시에도 title 문자열로 복구 시도
  var loose = collectLooseFlowTitlesFromText_(text);
  if(loose.length > flows.length) return loose;
  return flows;
}

function getSelectedNewItemFlow_(){
  var flows = state.newItem.flowProposals || [];
  var idx = typeof state.newItem.selectedFlowIdx === 'number' ? state.newItem.selectedFlowIdx : 0;
  return flows[idx] || null;
}
function getDraftRefImages_(draft){
  if(!draft) return [];
  if(Array.isArray(draft.refImages) && draft.refImages.length) return draft.refImages.filter(function(img){ return img && img.data; });
  return (draft.refImage && draft.refImage.data) ? [draft.refImage] : [];
}

const CLAUDE_PLANNER_MODEL = 'claude-sonnet-4-6';

async function callClaudePlanner_(prompt, options){
  options = options || {};
  if(state.plannerClaudeEnabled){
    var gasUrl = getPlannerGasUrl_();
    if(!gasUrl || location.protocol === 'file:') throw new Error('서버 AI는 웹 배포 페이지에서 사용할 수 있어요.');
    var serverImages = normalizeRefImages_(options.image).map(function(img){
      return { mediaType: img.mediaType || 'image/jpeg', data: img.data, name: img.name || '' };
    });
    var serverController = options.timeoutMs && typeof AbortController !== 'undefined' ? new AbortController() : null;
    var serverTimer = serverController ? setTimeout(function(){ serverController.abort(); }, options.timeoutMs) : null;
    try {
      var serverRes = await fetch(gasUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: plannerGasRequestBody_({
          action: 'plannerClaude',
          prompt: String(prompt || ''),
          maxTokens: options.maxTokens || 1200,
          images: serverImages
        }),
        signal: serverController ? serverController.signal : undefined
      });
      var serverData = await serverRes.json();
      applyPlannerServerCaps_(serverData);
      if(serverData.result !== 'success') throw new Error(serverData.message || '서버 AI 호출에 실패했어요.');
      return String(serverData.text || '');
    } catch(serverErr){
      if(serverErr && serverErr.name === 'AbortError') throw new Error('AI 응답 시간이 길어 중단했어요. 다시 시도해 주세요.');
      throw serverErr;
    } finally {
      if(serverTimer) clearTimeout(serverTimer);
    }
  }
  if(!state.apiKey) throw new Error('서버 CLAUDE_API_KEY가 설정되지 않았어요.');
  var body = JSON.stringify({
    model: CLAUDE_PLANNER_MODEL,
    max_tokens: options.maxTokens || 1200,
    messages: [{ role: 'user', content: buildClaudeMessageContent_(prompt, options.image) }]
  });
  var fetchOpts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': state.apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: body
  };
  var timeoutTimer = null;
  if(options.timeoutMs && typeof AbortController !== 'undefined'){
    var controller = new AbortController();
    fetchOpts.signal = controller.signal;
    timeoutTimer = setTimeout(function(){ controller.abort(); }, options.timeoutMs);
  }
  if(options.keepalive) fetchOpts.keepalive = true;
  try {
    var res = await fetch('https://api.anthropic.com/v1/messages', fetchOpts);
    var data = await res.json();
    if(!res.ok) throw new Error((data.error && data.error.message) ? data.error.message : ('HTTP ' + res.status));
    return (data.content || []).filter(function(b){ return b.type === 'text'; }).map(function(b){ return b.text; }).join('');
  } catch(e){
    if(e && e.name === 'AbortError') throw new Error('응답 시간이 길어져 인스타 캡션 생성을 중단했어요. 다시 시도해 주세요.');
    throw e;
  } finally {
    if(timeoutTimer) clearTimeout(timeoutTimer);
  }
}

function buildDraftSourceNote_(keywords, refNote){
  var kw = String(keywords || '').trim();
  var rn = String(refNote || '').trim();
  if(kw && rn) return kw + '\n\n' + rn;
  return kw || rn;
}

function extractYoutubeUrlsFromText_(text){
  if(!text) return [];
  var found = [];
  var re = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:[^\s]*&)?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/gi;
  var m;
  while((m = re.exec(String(text))) !== null){
    found.push('https://www.youtube.com/watch?v=' + m[1]);
  }
  return found.filter(function(u, i, arr){ return arr.indexOf(u) === i; });
}

function getDraftReferenceText_(draft){
  if(!draft) return '';
  var parts = [];
  if(draft.sourceNote && String(draft.sourceNote).trim()) parts.push(String(draft.sourceNote).trim());
  if(draft.youtubeAnalysis && String(draft.youtubeAnalysis).trim()){
    parts.push('[YouTube 영상 분석 — Gemini]\n' + String(draft.youtubeAnalysis).trim());
  }
  return parts.join('\n\n');
}

function buildTopicGenFidelityBlock_(keywords, sourceNote, isDaily){
  var kw = String(keywords || '').trim();
  var hasNote = !!(sourceNote && String(sourceNote).trim());
  if(!kw && !hasNote) return '';
  var lines = [
    '',
    '[입력 충실도 — 최우선]',
    'topic·angle은 아래 사용자 입력·참고 메모의 **핵심 키워드·의도·소재**를 중심으로 만드세요.',
    '- 입력과 **다른 주제·질환·부위·케이스**로 바꾸지 마세요',
    '- 후킹·질문형·SEO는 입력 범위 안에서만 다듬기',
    '- 기존 카드 주제와 겹치지만 않으면 됨 (겹침만 피하고 **소재는 입력 우선**)'
  ];
  if(kw){
    var preview = kw.length > 480 ? kw.slice(0, 480) + '…' : kw;
    lines.splice(2, 0, '사용자 입력 원문: 「' + preview + '」');
  }
  if(isDaily) lines.push('- 사진·메모의 장면·핵심을 topic·angle에 반영. 담백·관찰 위주, 과한 감성 금지');
  else if(hasNote) lines.push('- 참고 메모의 테크닉·관점·용어를 topic·angle에 반영');
  return '\n' + lines.join('\n');
}

function appendDraftReferenceToPrompt_(prompt, draft, catId){
  var ref = getDraftReferenceText_(draft);
  if(!ref) return prompt;
  if(catId == null && draft && draft.id) catId = getCatIdFromDraftId_(draft.id);
  var via = draft.youtubeAnalysis ? '키워드·메모 + YouTube 분석' : '키워드·메모';
  var userAdded = isUserAddedDraftId_(draft && draft.id);
  var tail;
  if(isExpertCourseCategory(catId)){
    tail = '\n위 참고·영상·사진·주제·각도 **범위 안에서만** 작성하세요. **영상·사진에 보이는 시연과 일치하는** 테크닉·원리 설명만 쓰고, 무관하게 **확장·일반화·다른 부위·케이스로 넓히지 마세요**. 원리 설명(draft)이 본문의 중심이 되게 하세요.';
  } else if(userAdded){
    tail = '\n위 내용은 사용자가 「추가」에 입력한 **원문**입니다. 주제 「' + (draft.topic || '') + '」·각도 「' + (draft.angle || '') + '」도 이 입력에서 나온 것입니다.\n' +
      '**제목·후킹·목차·본문이 입력에서 크게 벗어나지 않게** 작성하세요. 입력에 없는 질환·부위·케이스·주장·소재를 새로 붙이지 말고, 표현만 읽기 쉽게 다듬으며 카테고리·PSP 흐름에 맞게 풀어쓰세요.';
  } else {
    tail = '\n위 내용의 테크닉·개념·시연 장면을 topic·본문에 반영하세요. 입력·메모와 무관한 새 소재로 확장하지 마세요.';
  }
  return prompt + '\n\n[작성자 참고 — ' + via + ']\n' + ref + tail;
}

async function analyzeYoutubeWithGemini_(url, catId){
  var gasUrl = getPlannerGasUrl_();
  if(!gasUrl || location.protocol === 'file:'){
    throw new Error('유튜브 분석은 웹 배포 페이지에서 서버(GAS) 연결이 필요해요.');
  }
  var cat = CATEGORIES[catId];
  var res = await fetch(gasUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: plannerGasRequestBody_({
      action: 'plannerAnalyzeYoutube',
      url: url,
      catId: catId,
      catName: cat ? cat.name : ''
    })
  });
  var data = await res.json();
  applyPlannerServerCaps_(data);
  if(isPlannerAuthError_(data)){
    throw new Error(data.message || '플래너 동기화 토큰이 필요합니다.');
  }
  if(data.result !== 'success' || !data.analysis){
    throw new Error(data.message || '유튜브 분석에 실패했어요');
  }
  return String(data.analysis).trim();
}

async function ensureDraftYoutubeAnalysis_(draft, catId){
  if(!draft || (draft.youtubeAnalysis && String(draft.youtubeAnalysis).trim())) return draft.youtubeAnalysis || '';
  if(!isGeminiYoutubeAvailable_()) return '';
  var urls = draft.youtubeUrls && draft.youtubeUrls.length
    ? draft.youtubeUrls
    : extractYoutubeUrlsFromText_(draft.sourceNote || '');
  if(!urls.length) return '';
  var analysis = await analyzeYoutubeWithGemini_(urls[0], catId);
  draft.youtubeAnalysis = analysis;
  draft.youtubeUrls = [urls[0]];
  return analysis;
}

async function analyzeRefImagesForMemo_(images, catId){
  var list = normalizeRefImages_(images);
  if(!list.length) return '';
  var isDaily = isDailyShareCategory(catId);
  var isExpert = isExpertCourseCategory(catId);
  var countNote = list.length > 1 ? ('첨부 사진 ' + list.length + '장을 순서대로 보고 ') : '첨부 사진을 보고 ';
  var prompt = isDaily
    ? (countNote + '장면·분위기·몸감각·핵심 포인트를 한국어로 분석하세요. 아래 형식을 지켜 짧고 읽기 쉽게 쓰고, 보이지 않는 사실은 추측하지 마세요.\n\n[사진에서 보이는 장면]\n- 1~3개\n\n[눈에 띄는 요소]\n- 1~3개\n\n[글에 활용할 포인트]\n- 담백한 관찰·느낌 중심 1~3개\n\n과장·진단 단정·감성 수사는 금지합니다. 분석 내용만 출력하세요.')
    : (isExpert
      ? (countNote + '강의·실습 캡처 내용을 한국어로 분석하세요. 아래 형식을 지켜 짧고 읽기 쉽게 쓰고, 사진에 없는 내용을 추측하지 마세요.\n\n[사진에서 보이는 장면]\n- 1~3개\n\n[테크닉·손 위치]\n- 1~4개\n\n[핵심 포인트·주의사항]\n- 1~4개\n\n분석 내용만 출력하세요.')
      : (countNote + '참고 영상/사진 캡처를 한국어로 분석하세요. 아래 형식을 지켜 짧고 읽기 쉽게 쓰고, 사진에 없는 내용을 추측하지 마세요.\n\n[사진에서 보이는 장면]\n- 1~3개\n\n[자세·부위·동작]\n- 1~4개\n\n[글에 활용할 핵심 포인트]\n- 1~4개\n\n진단을 단정하지 말고 분석 내용만 출력하세요.'));
  var text = await callClaudePlanner_(prompt, { image: list, maxTokens: 1200 });
  return String(text || '').trim();
}
async function generateTopicFromKeywords_(catId, keywords, imagePayload, sourceNote, youtubeAnalysis){
  var cat = CATEGORIES[catId];
  if(!cat) throw new Error('카테고리를 찾을 수 없어요');
  var isDaily = isDailyShareCategory(catId);
  var images = normalizeRefImages_(imagePayload);
  var avoidTopics = (cat.drafts || []).map(function(d){ return d && d.topic ? d.topic : ''; }).filter(Boolean).slice(0, 40);
  var imgNote = '';
  if(images.length){
    imgNote = isDaily
      ? '\n[첨부 사진' + (images.length > 1 ? ' ' + images.length + '장' : '') + '] 장면·관찰·오늘의 핵심 한 가지를 topic·angle에 반영. 몸·날씨 맥락이 보이면 가벼운 근골격계 시선 한 스푼. 교육·세미나 사진이면 강의 톤 말고 담백한 관찰 나눔 각도로.'
      : '\n[첨부 참고 사진' + (images.length > 1 ? ' ' + images.length + '장' : '') + '] 사진에 보이는 자세·부위·상황을 topic·angle에 반영하세요.';
  }
  var noteBlock = '';
  if(sourceNote && String(sourceNote).trim()){
    noteBlock = '\n[참고 메모 — 영상·테크닉·링크 등]\n' + String(sourceNote).trim();
    if(!youtubeAnalysis) noteBlock += '\n(AI는 영상 파일을 직접 볼 수 없습니다. 메모·링크 설명을 바탕으로 topic·angle을 만드세요.)';
  }
  if(youtubeAnalysis && String(youtubeAnalysis).trim()){
    noteBlock += '\n\n[YouTube 영상 분석 — Gemini]\n' + String(youtubeAnalysis).trim();
  }
  var kwLine = keywords
    ? ('입력 (키워드·아이디어·문장): ' + keywords)
    : (isDaily && images.length ? '입력 (키워드·아이디어·문장): (없음 — 사진·메모만 참고)' : (sourceNote ? '입력 (키워드·아이디어·문장): (없음 — 참고 메모만)' : '입력 (키워드·아이디어·문장): '));
  var topicGuide = isDaily
    ? ('일상 공유용 주제 1개. **입력·사진·메모의 장면·핵심**을 중심으로 (다른 일상 소재로 바꾸지 마세요).\n' +
       '- topic: 담백한 제목 한 줄 (15~32자, 질문 금지·짧은 감탄·장면). 입력 키워드·장면 반영\n' +
       '- angle: 어떤 톤으로 쓸지 한 줄 — **관찰 + 핵심 한 가지 + (선택) 짧은 감탄·철학**. 몸·날씨 맥락이 보이면 근골격계 시선 한 스푼 (강의·임상 톤 금지)\n')
    : (isExpertCourseCategory(catId)
      ? ('전문가 과정 **강연·교육 영상·실습 공유**용 주제 1개.\n' +
         '- topic: ' + getExpertCourseTopicAudienceLine_(catId) + ' (15~40자, 과장·낚시 금지)\n' +
         '- angle: **다룰 테크닉/개념 + 핵심 포인트 1~3개**가 드러나는 각도 한 줄\n' +
         '  (예: "경축 평가 순서 — 강의에서 시연한 손 위치와 주의 포인트")\n' +
         (noteBlock ? '- **참고 메모·영상 분석 범위 안**에서만 topic·angle을 잡을 것. 없는 내용·연관 질환·다른 부위로 확장 금지.\n' : ''))
      : ('입력한 키워드·아이디어·문장을 **중심 소재**로 블로그·SNS 주제 1개를 만드세요. 입력에서 벗어난 새 소재로 바꾸지 마세요.\n' +
         '- topic: 한국어 제목 한 줄 (15~36자, **호기심·궁금증을 자극하는 후킹**·질문형 권장). **입력 핵심 키워드가 드러나게**\n' +
         '- angle: 입력·메모의 관점·테크닉·메커니즘을 한 줄로 (입력에 없는 새 각도 금지)\n'));
  var fidelityBlock = buildTopicGenFidelityBlock_(keywords, sourceNote, isDaily);
  var identityBlock = buildProgramIdentityPromptBlock_(catId);
  var prompt =
'당신은 "브랜딩 플래너"입니다.\n' +
buildBrandContextForPrompt_(catId, null) + '\n\n' +
(identityBlock ? identityBlock + '\n\n' : '') +
'카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
'독자: ' + getProgramAudienceLine_(catId) + ' (카테고리 기본 독자 — 별도 선택 없음)\n' +
kwLine + noteBlock + imgNote + '\n\n' + topicGuide + fidelityBlock + '\n' +
buildTopicBrandJsonGuide_(catId) + '\n' +
'기존 주제와 겹치지 않게:\n' + avoidTopics.map(function(t){ return ' - ' + t; }).join('\n') + '\n\n' +
'JSON만 출력:\n{"topic":"...","angle":"...","series":"...","step":"...","pillar":"...","rationale":"..."}';
  var text = await callClaudePlanner_(prompt, { image: images.length ? images : null, maxTokens: 900 });
  var obj = parsePlannerAiJsonObject_(text);
  if(!obj.topic) throw new Error('topic이 비어 있어요');
  var out = { topic: String(obj.topic).trim(), angle: String(obj.angle || getProgramAudienceLine_(catId) + ' 관점의 콘텐츠').trim() };
  applyTopicFieldsToDraft_(out, obj, catId);
  return out;
}

async function generateArticleFlowProposals_(catId, keywords, imagePayload, sourceNote, youtubeAnalysis, prevFlows){
  var cat = CATEGORIES[catId];
  if(!cat) throw new Error('카테고리를 찾을 수 없어요');
  var isDaily = isDailyShareCategory(catId);
  var isExpert = isExpertCourseCategory(catId);
  var images = normalizeRefImages_(imagePayload);
  var memoOnly = stripKeywordsFromSourceNote_(sourceNote, keywords);
  var hasPhotoAnalysis = /\[사진에서 보이는 장면\]|\[글에 활용할|\[테크닉·손 위치\]|\[자세·부위·동작\]|사진 분석/i.test(memoOnly || String(sourceNote || ''));
  // 분석 메모가 있으면 사진 base64는 보내지 않음 (용량·토큰·실패율↓). 없을 때만 이미지 첨부.
  var sendImages = images.length > 0 && !hasPhotoAnalysis;
  var imgNote = '';
  if(hasPhotoAnalysis && images.length){
    imgNote = '\n[첨부 사진] ' + images.length + '장 — 바이너리는 생략. 아래 사진 분석·메모를 기준으로 반영하세요.';
  } else if(images.length){
    imgNote = isDaily
      ? '\n[첨부 사진' + (images.length > 1 ? ' ' + images.length + '장' : '') + '] 장면·관찰·핵심을 각 제안에 반영. 교육·세미나 사진이면 강의 톤 말고 담백한 관찰 나눔 각도도 포함.'
      : '\n[첨부 참고 사진' + (images.length > 1 ? ' ' + images.length + '장' : '') + '] 사진에 보이는 자세·부위·상황을 각 제안에 반영하세요.';
  }
  var noteBlock = '';
  if(memoOnly){
    noteBlock = '\n[참고 메모 · 사진/영상 분석 — 반드시 반영]\n' + memoOnly;
    if(!youtubeAnalysis) noteBlock += '\n(AI는 영상 파일을 직접 볼 수 없습니다. 메모·링크·분석 설명을 바탕으로 제안하세요.)';
  }
  if(youtubeAnalysis && String(youtubeAnalysis).trim()){
    noteBlock += '\n\n[YouTube 영상 분석 — Gemini]\n' + String(youtubeAnalysis).trim();
  }
  var kwLine = keywords
    ? ('입력 (키워드·아이디어·문장): ' + keywords)
    : (images.length || memoOnly ? '입력 (키워드·아이디어·문장): (없음 — 사진·메모만 참고)' : '입력: ');
  var flowStructureGuide = isDaily
    ? ('각 제안은 **일상 공유(쓰레드)** 용입니다. steps는 반드시 3단계:\n' +
       '  ① 한 줄 훅·장면  ② 담백한 관찰·핵심 한 가지  ③ 가벼운 마무리(공감 한 스푼)\n' +
       '강의·세미나 사진이면 전문 설명 톤이 아닌 **관찰 나눔** 각도도 1개 이상 포함.')
    : (isExpert
      ? ('각 제안은 **전문가 동료 공유**용입니다. (' + getExpertCourseTopicAudienceLine_(catId) + ')\n' +
         'steps는 반드시 3단계:\n' +
         '  ① 영상·사진 맥락  ② 시연·핵심 포인트  ③ 원리 설명 방향\n' +
         '참고·영상·사진 **범위 안**에서만. 없는 내용으로 확장 금지.')
      : (isHeiljagyaeCategory(catId)
        ? ('각 제안은 **힐자계 아파트너 게시판**용입니다. steps는 반드시 3단계:\n' +
           '  ① 문제 제기(이웃 공감)  ② 셀프 케어 동작  ③ 원리 설명 방향')
        : ('각 제안은 **일반인 블로그**용입니다. steps는 반드시 3단계:\n' +
           '  ① 문제 제기(공감 장면)  ② 셀프 케어 동작  ③ 원리 설명 방향')));
  var prevBlock = '';
  if(prevFlows && prevFlows.length){
    prevBlock = '\n\n[이전 제안 — 다른 각도로 다시]\n' + prevFlows.map(function(f, i){
      return (i + 1) + ') ' + f.title + ' / ' + f.angle;
    }).join('\n') + '\n위와 **겹치지 않는** 새 각도 3가지를 제안하세요.';
  }
  var fidelityBlock = buildTopicGenFidelityBlock_(keywords, memoOnly, isDaily);
  var identityBlock = buildProgramIdentityPromptBlock_(catId);
  var promptGuides = buildFlowProposalPromptGuides_(catId);
  var prompt =
'당신은 "브랜딩 플래너"입니다.\n' +
buildBrandContextForPrompt_(catId, null) + '\n\n' +
(identityBlock ? identityBlock + '\n\n' : '') +
(promptGuides ? promptGuides + '\n\n' : '') +
'카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
'독자: ' + getProgramAudienceLine_(catId) + '\n' +
kwLine + noteBlock + imgNote + '\n\n' +
'[과제]\n' +
'아래 4가지를 **모두** 반영해, 서로 다른 각도의 글 흐름을 **정확히 3가지** 제안하세요.\n' +
'1) 선택한 카테고리 컨셉·독자\n' +
'2) 키워드·아이디어\n' +
'3) 사진/영상 분석·참고 메모\n' +
'4) 위 공통 기본·블로그·인스타(해당 시) 작성 지침(프롬프트)\n' +
'단순 요약이 아니라 「이렇게 쓰면 좋겠다」는 **기획안** 수준으로.\n' +
flowStructureGuide + fidelityBlock + prevBlock + '\n\n' +
'[각 flow 필드]\n' +
'- title: 글 제목 방향 한 줄 (15~36자, 과장·낚시 금지)\n' +
'- angle: 이 흐름의 핵심 각도 한 줄\n' +
'- steps: 위 3단계 전개를 **문장**으로 (배열 3개)\n\n' +
'설명 없이 JSON만 출력:\n{"flows":[{"title":"실제제목1","angle":"각도1","steps":["1단계","2단계","3단계"]},{"title":"실제제목2","angle":"각도2","steps":["1단계","2단계","3단계"]},{"title":"실제제목3","angle":"각도3","steps":["1단계","2단계","3단계"]}]}';

  async function callFlowAi_(promptText, withImages){
    return callClaudePlanner_(promptText, {
      image: withImages && images.length ? images : null,
      maxTokens: 3200,
      timeoutMs: 90000
    });
  }

  var text = '';
  try {
    text = await callFlowAi_(prompt, sendImages);
  } catch(firstErr){
    var firstMsg = String((firstErr && firstErr.message) || firstErr || '');
    // 사진 용량·이미지 오류면 분석 메모만으로 재시도
    if(sendImages && (memoOnly || keywords) && /사진 용량|too large|image|이미지|payload|요청 내용이 너무/i.test(firstMsg)){
      text = await callFlowAi_(prompt + '\n\n(사진은 용량·전송 문제로 생략했습니다. 위 사진/영상 분석·메모만으로 3가지 흐름을 만드세요.)', false);
    } else {
      throw firstErr;
    }
  }

  var flows = [];
  try {
    flows = parseArticleFlowProposalsFromText_(text);
  } catch(parseErr){
    flows = [];
  }
  if(flows.length < 3){
    var retryPrompt = prompt +
      '\n\n[재시도] 이전 응답이 파싱되지 않았거나 flows가 3개 미만이었습니다.\n' +
      '다른 설명 없이 flows 배열에 실제 제목·각도·steps 3개짜리 객체 3개만 JSON으로 출력하세요.';
    try {
      text = await callFlowAi_(retryPrompt, false);
      flows = parseArticleFlowProposalsFromText_(text);
    } catch(retryErr){
      if(!flows.length) throw retryErr;
    }
  }
  var normalized = flows.slice(0, 3).map(function(f, i){ return normalizeFlowProposal_(f, i); })
    .filter(function(f){ return f && isUsableFlowTitle_(f.title); });
  if(normalized.length < 3){
    throw new Error('글 흐름 제안이 3개가 아니에요. 키워드·분석 내용을 조금 다듬고 다시 시도해 주세요.');
  }
  return normalized;
}

async function fetchFlowProposalsForNewItem_(){
  if(!isPlannerAiAvailable_()) return;
  if(state.newItem.imageAnalyzing) return;
  if(!newItemHasFlowSource_()) return;
  var keywords = (state.newItem.topic || '').trim();
  var refNote = (state.newItem.refNote || '').trim();
  var sourceNote = buildDraftSourceNote_(keywords, refNote);
  var prevFlows = (state.newItem.flowProposals || []).slice();
  state.newItem.flowProposalsLoading = true;
  renderMain();
  var youtubeAnalysis = state.newItem.cachedYoutubeAnalysis || '';
  var youtubeUrls = extractYoutubeUrlsFromText_(sourceNote);
  var urlNow = youtubeUrls[0] || '';
  if(state.newItem._cachedFlowYoutubeUrl && urlNow && state.newItem._cachedFlowYoutubeUrl !== urlNow){
    state.newItem.cachedYoutubeAnalysis = '';
    youtubeAnalysis = '';
  }
  state.newItem._cachedFlowYoutubeUrl = urlNow;
  var flowEstSec = FLOW_PROPOSAL_ESTIMATE_SEC + (youtubeUrls.length && !youtubeAnalysis ? 18 : 0);
  startButtonsCountdownBySelector_('.btn-flow-regen, #btn-add-draft-submit', {
    estimateSec: flowEstSec,
    busyLabel: '제안 중'
  });
  try {
    if(youtubeUrls.length && isGeminiYoutubeAvailable_() && !youtubeAnalysis){
      if(typeof setAppToast === 'function') setAppToast('유튜브 영상을 분석한 뒤 글 흐름을 제안하고 있어요…', { duration: 3200, variant: 'ok' });
      try {
        youtubeAnalysis = await analyzeYoutubeWithGemini_(youtubeUrls[0], state.newItem.catId);
        state.newItem.cachedYoutubeAnalysis = youtubeAnalysis;
      } catch(ytErr){
        var ytMsg = (ytErr && ytErr.message) ? ytErr.message : String(ytErr);
        if(typeof setAppToast === 'function') setAppToast('유튜브 분석 실패 — 메모·사진만으로 흐름을 제안할게요.\n' + ytMsg, { duration: 7000, variant: 'err' });
      }
    }
    var flows = await generateArticleFlowProposals_(state.newItem.catId, keywords, state.newItem.refImages, sourceNote, youtubeAnalysis, prevFlows);
    state.newItem.flowProposals = flows;
    state.newItem.selectedFlowIdx = 0;
    state.newItem.flowProposalsReady = true;
    if(typeof setAppToast === 'function') setAppToast('글 흐름 3가지를 제안했어요. 하나를 고르고 필요하면 수정한 뒤 초안을 만들어 주세요.', { duration: 4200, variant: 'ok' });
  } finally {
    stopButtonsCountdownBySelector_('.btn-flow-regen, #btn-add-draft-submit');
    state.newItem.flowProposalsLoading = false;
    renderMain();
  }
}

window.regenerateFlowProposals = async function(){
  if(state.newItem.imageAnalyzing){
    if(typeof setAppToast === 'function') setAppToast('사진 분석이 끝날 때까지 잠시만 기다려 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  if(!newItemHasFlowSource_()){
    if(typeof setAppToast === 'function') setAppToast('키워드·아이디어, 참고 메모 또는 사진을 먼저 추가해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  if(!isPlannerAiAvailable_()){ openApiModal(); return; }
  try {
    await fetchFlowProposalsForNewItem_();
  } catch(e){
    var msg = (e && e.message) ? e.message : String(e);
    if(/JSON|파싱|Unexpected|찾지 못/.test(msg)){
      msg = 'AI 응답을 글 흐름 형식으로 읽지 못했어요. 다시 한 번 「글의 흐름 만들기」를 눌러 주세요.\n(' + msg + ')';
    }
    if(typeof setAppToast === 'function') setAppToast('글 흐름 제안 실패\n' + msg, { duration: 7500, variant: 'err' });
    else alert(msg);
  }
};

window.selectNewItemFlow = function(idx){
  state.newItem.selectedFlowIdx = parseInt(idx, 10) || 0;
  document.querySelectorAll('.add-flow-card').forEach(function(card, i){
    var selected = i === state.newItem.selectedFlowIdx;
    card.classList.toggle('selected', selected);
    var radio = card.querySelector('.add-flow-radio');
    if(radio) radio.checked = selected;
  });
};

window.updateNewItemFlowField = function(idx, field, value){
  var flows = state.newItem.flowProposals || [];
  var i = parseInt(idx, 10) || 0;
  if(!flows[i]) return;
  if(field === 'title' || field === 'angle') flows[i][field] = value;
};

window.updateNewItemFlowSteps = function(idx, value){
  var flows = state.newItem.flowProposals || [];
  var i = parseInt(idx, 10) || 0;
  if(!flows[i]) return;
  flows[i].steps = parseFlowStepsText_(value);
};

const REF_IMAGE_MAX_UPLOAD_BYTES = 12 * 1024 * 1024;
const REF_IMAGE_MAX_DIM = 2048;

function clearRefImageFromDraft_(draftId){
  if(!draftId) return;
  CATEGORIES.forEach(function(cat){
    var d = cat.drafts.find(function(x){ return x.id === draftId; });
    if(!d) return;
    if(d.refImage) delete d.refImage;
    if(d.refImages) delete d.refImages;
  });
}

function canvasToRefImagePayload_(canvas, fileName, mime, quality){
  var dataUrl = canvas.toDataURL(mime, quality);
  var m = String(dataUrl).match(/^data:([^;]+);base64,(.+)$/);
  if(!m) return null;
  return { mediaType: m[1], data: m[2], name: fileName };
}

function readImageFileAsRefPayload_(file){
  return new Promise(function(resolve, reject){
    var reader = new FileReader();
    reader.onload = function(){
      var dataUrl = reader.result || '';
      var m = String(dataUrl).match(/^data:([^;]+);base64,(.+)$/);
      if(!m) reject(new Error('사진을 읽지 못했어요'));
      else resolve({ mediaType: m[1], data: m[2], name: file.name });
    };
    reader.onerror = function(){ reject(new Error('사진을 읽지 못했어요')); };
    reader.readAsDataURL(file);
  });
}

async function prepareRefImageFromFile_(file){
  if(file.size > REF_IMAGE_MAX_UPLOAD_BYTES){
    throw new Error('사진은 ' + Math.round(REF_IMAGE_MAX_UPLOAD_BYTES / 1024 / 1024) + 'MB 이하로 올려 주세요.');
  }
  if(file.size <= 3 * 1024 * 1024){
    return readImageFileAsRefPayload_(file);
  }
  var blobUrl = URL.createObjectURL(file);
  try {
    var img = await new Promise(function(resolve, reject){
      var im = new Image();
      im.onload = function(){ resolve(im); };
      im.onerror = function(){ reject(new Error('사진을 불러오지 못했어요')); };
      im.src = blobUrl;
    });
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    var scale = Math.min(1, REF_IMAGE_MAX_DIM / Math.max(w, h, 1));
    var canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(w * scale));
    canvas.height = Math.max(1, Math.round(h * scale));
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    var mime = 'image/jpeg';
    var quality = 0.88;
    var payload = canvasToRefImagePayload_(canvas, file.name, mime, quality);
    while(payload && payload.data.length > 4 * 1024 * 1024 && quality > 0.52){
      quality -= 0.08;
      payload = canvasToRefImagePayload_(canvas, file.name, mime, quality);
    }
    if(!payload) throw new Error('사진 압축에 실패했어요');
    return payload;
  } finally {
    URL.revokeObjectURL(blobUrl);
  }
}

window.onNewItemImage = async function(input){
  var files = input && input.files ? Array.from(input.files) : [];
  if(!files.length){
    state.newItem.refImages = [];
    state.newItem.refImage = null;
    state.newItem.imageAnalyzing = false;
    resetNewItemFlowProposals_();
    renderMain();
    return;
  }
  var maxFiles = 10;
  if(files.length > maxFiles){
    alert('사진은 최대 ' + maxFiles + '장까지 선택할 수 있어요.');
    input.value = '';
    return;
  }
  state.newItem.imageAnalyzing = true;
  resetNewItemFlowProposals_();
  try {
    var images = [];
    for(var i = 0; i < files.length; i++){
      images.push(await prepareRefImageFromFile_(files[i]));
    }
    state.newItem.refImages = images;
    state.newItem.refImage = images[0] || null;
    renderMain();
    if(isPlannerAiAvailable_()){
      if(typeof setAppToast === 'function') setAppToast('사진 ' + images.length + '장 분석 중…', { duration: 3200, variant: 'ok' });
      var analysis = await analyzeRefImagesForMemo_(images, state.newItem.catId);
      var prevMemo = String(state.newItem.refNote || '').trim();
      // 기존 손글씨 메모는 유지하고, 분석 결과를 이어 붙임
      if(prevMemo && !/\[사진에서 보이는 장면\]/.test(prevMemo)){
        state.newItem.refNote = prevMemo + '\n\n' + analysis;
      } else {
        state.newItem.refNote = analysis;
      }
    } else {
      if(typeof setAppToast === 'function') setAppToast('사진은 저장됐어요. AI 메모 자동 작성은 API 키 설정 후 다시 선택해 주세요.', { duration: 5200, variant: 'err' });
      else openApiModal();
    }
  } catch(e){
    var msg = (e && e.message) ? e.message : String(e);
    state.newItem.refImages = [];
    state.newItem.refImage = null;
    if(typeof setAppToast === 'function') setAppToast('사진 처리 실패\n' + msg, { duration: 6500, variant: 'err' });
    else alert(msg);
    if(input) input.value = '';
  } finally {
    state.newItem.imageAnalyzing = false;
    renderMain();
    if(isPlannerAiAvailable_() && state.newItem.refImages && state.newItem.refImages.length && typeof setAppToast === 'function'){
      setAppToast('사진 분석을 정리했어요. 내용을 확인한 뒤 「글의 흐름 만들기」를 눌러 주세요.', { duration: 5200, variant: 'ok' });
    }
  }
};

var newItemFlowInvalidateTimer_ = null;
function invalidateNewItemFlowsFromInput_(){
  if(!(state.newItem.flowProposalsReady || (state.newItem.flowProposals || []).length)) return;
  clearTimeout(newItemFlowInvalidateTimer_);
  newItemFlowInvalidateTimer_ = setTimeout(function(){
    newItemFlowInvalidateTimer_ = null;
    var activeId = null;
    var sel = null;
    var ae = document.activeElement;
    if(ae && (ae.id === 'new-item-topic-input' || ae.id === 'new-item-ref-note-input')){
      activeId = ae.id;
      try { sel = ae.selectionStart; } catch(e0){}
    }
    resetNewItemFlowProposals_();
    renderMain();
    if(activeId){
      var el = document.getElementById(activeId);
      if(el){
        try {
          el.focus();
          if(sel != null) el.setSelectionRange(sel, sel);
        } catch(e1){}
      }
    }
  }, 400);
}
window.onNewItemTopicInput_ = function(el){
  state.newItem.topic = el ? el.value : '';
  invalidateNewItemFlowsFromInput_();
};
window.onNewItemRefNoteInput_ = function(el){
  state.newItem.refNote = el ? el.value : '';
  invalidateNewItemFlowsFromInput_();
};

function renderAddFormFlowSectionHTML_(){
  var flows = state.newItem.flowProposals || [];
  var selIdx = typeof state.newItem.selectedFlowIdx === 'number' ? state.newItem.selectedFlowIdx : 0;
  var loading = !!state.newItem.flowProposalsLoading;
  var ready = !!state.newItem.flowProposalsReady && flows.length > 0;
  var isDaily = isDailyShareCategory(state.newItem.catId);
  var isExpert = isExpertCourseCategory(state.newItem.catId);
  var stepHint = isDaily
    ? '① 한 줄 훅 ② 관찰·핵심 ③ 마무리'
    : (isExpert ? '① 영상·사진 맥락 ② 시연 포인트 ③ 원리 설명' : '① 문제 제기 ② 셀프 케어 ③ 원리 설명');
  var header = '<div class="add-flow-header"><div class="form-label" style="margin-bottom:0;">글 흐름 제안 (3가지)</div>' +
    '<span style="font-size:11px;color:#9CA3AF;">' + stepHint + '</span></div>';
  if(loading){
    return '<div class="add-flow-section">' + header +
      '<div class="add-flow-loading">사진·영상·메모를 보고 글 흐름 3가지를 제안하고 있어요…</div></div>';
  }
  if(!ready) return '';
  var cards = flows.map(function(flow, i){
    var selected = i === selIdx;
    return '<label class="add-flow-card' + (selected ? ' selected' : '') + '" data-flow-index="' + i + '">' +
      '<div class="add-flow-card-head">' +
      '<input type="radio" name="new-item-flow-pick" class="add-flow-radio" value="' + i + '"' + (selected ? ' checked' : '') + ' onchange="selectNewItemFlow(' + i + ')" />' +
      '<div class="add-flow-fields">' +
      '<textarea class="form-input add-flow-title-input" id="new-item-flow-title-' + i + '" rows="2" placeholder="제목 방향" oninput="updateNewItemFlowField(' + i + ',\'title\',this.value);autoGrowTextarea_(this)" onclick="event.stopPropagation();">' + escapeHtml(flow.title || '') + '</textarea>' +
      '<textarea class="form-input add-flow-angle-input" id="new-item-flow-angle-' + i + '" rows="2" placeholder="부제 · 핵심 각도" oninput="updateNewItemFlowField(' + i + ',\'angle\',this.value);autoGrowTextarea_(this)" onclick="event.stopPropagation();">' + escapeHtml(flow.angle || '') + '</textarea>' +
      '<textarea class="form-input add-flow-steps-input" id="new-item-flow-steps-' + i + '" rows="4" placeholder="글 전개 3단계" oninput="updateNewItemFlowSteps(' + i + ',this.value);autoGrowTextarea_(this)" onclick="event.stopPropagation();">' + escapeHtml(flowStepsToText_(flow.steps)) + '</textarea>' +
      '</div></div></label>';
  }).join('');
  return '<div class="add-flow-section">' + header +
    '<p class="add-flow-guide">하나를 고르고 제목·부제·전개 순서를 수정할 수 있어요. 참고영상 메모·키워드 아이디어·카테고리 컨셉을 함께 반영한 흐름입니다.</p>' +
    cards + '</div>';
}

function renderAddForm(){
  const catId = state.newItem.catId;
  const cat = CATEGORIES[catId] || CATEGORIES[0];
  const isDaily = isDailyShareCategory(state.newItem.catId);
  const isExpert = isExpertCourseCategory(state.newItem.catId);
  const hasPhoto = newItemHasRefImages_();
  const analyzing = !!state.newItem.imageAnalyzing;
  const catOpts = ADD_FORM_CAT_ORDER
    .map((i) => CATEGORIES[i] ? `<option value="${i}"${state.newItem.catId===i?' selected':''}>${CATEGORIES[i].name} · ${CATEGORIES[i].audience}</option>` : '')
    .filter(Boolean)
    .join('');
  const imgNames = (state.newItem.refImages || []).map(function(img){ return img && img.name ? img.name : ''; }).filter(Boolean);
  const imgHint = analyzing
    ? '<span style="font-size:11px;color:#D97706;">사진 ' + imgNames.length + '장 분석 중… 참고 메모에 자동으로 채워집니다.</span>'
    : (hasPhoto
      ? '<span style="font-size:11px;color:#0F766E;">참고 사진 ' + imgNames.length + '장: ' + escapeHtml(imgNames.join(', ')) + (isDaily ? ' — 담백·관찰 톤으로 글을 씁니다' : '') + '</span>'
      : (isDaily
        ? '<span style="font-size:11px;color:#9CA3AF;">여러 장 선택 가능. 올리면 AI가 참고 메모를 채워 드려요.</span>'
        : '<span style="font-size:11px;color:#9CA3AF;">여러 장 선택 가능 · 최대 12MB(자동 압축). 올리면 AI가 참고영상 메모를 채워요.</span>'));
  const addIntro = isDaily
    ? '「일상 공유」에 올릴 <strong>생활 일기·느낌</strong> 주제를 만듭니다. 사진만 올려도 되고, 키워드와 함께 써도 돼요.'
    : (isExpert
      ? '교육·강의 때 촬영한 <strong>영상 링크</strong> 또는 <strong>실습·시연 사진</strong>을 올리고, 그 내용에 맞춰 동료에게 공유할 주제를 만듭니다. 글은 영상·사진·메모 범위 안에서만 쓰여요.'
      : '추가한 주제는 <strong>선택한 카테고리 탭</strong>의 <strong>「기타 주제」</strong> 그룹에 카드로 생깁니다. (하위 목표가 없는 탭은 전체 목록 맨 아래)');
  const kwLabel = isDaily ? '키워드 · 아이디어 (선택)' : (isExpert ? '테크닉 · 개념' : '키워드 · 아이디어');
  const kwPlaceholder = isDaily
    ? '키워드, 짧은 문장, 떠오른 장면을 자유롭게 적어 주세요 (비우고 사진만 가능)'
    : (isExpert
      ? '예: 어깨 관절 가동술 — 강의에서 시연한 접근'
      : '키워드, 짧은 문장, 여러 아이디어를 자유롭게 적어 주세요');
  const kwHint = isDaily
    ? '비우면 <strong>사진만</strong>으로 주제·일상 글을 만듭니다. 적은 내용도 <strong>입력·사진에서 크게 벗어나지 않고</strong> 반영해요.'
    : (isExpert
      ? '다룰 <strong>테크닉/개념</strong>을 한 줄로. 핵심 포인트·시연 내용은 아래 메모에 — <strong>영상·강의에서 말한 것만</strong> 적어 주세요.'
      : '적은 키워드·문장도 <strong>입력한 내용에서 크게 벗어나지 않고</strong> 주제·초안을 만듭니다.');
  const refNoteLabel = hasPhoto ? '사진 분석 내용 · 참고 메모' : (isDaily ? '참고 메모 (선택)' : (isExpert ? '핵심 포인트 · 영상 메모' : '참고 영상 · 메모 (선택)'));
  const refNotePlaceholder = isDaily
    ? '영상 링크, 오늘의 장면, 떠오른 설명을 자유롭게…'
    : (isExpert
      ? '핵심 포인트 1~3개, 영상 링크, 시연 타임스탬프, 평가·동작 요령…'
      : '영상 링크, 테크닉 이름, 동작 요령, 타임스탬프(예: 2:30~), 자막·핵심 메모…');
  const refNoteHint = isDaily
    ? '키워드와 함께 쓰거나, 메모만으로도 주제를 만들 수 있어요. 초안 작성 때도 그대로 전달됩니다.'
    : (isExpert
      ? '공개 <strong>유튜브 URL</strong>이 있으면 서버(Gemini)가 영상을 분석해요. GAS 스크립트 속성 <code style="font-size:10px;">GEMINI_API_KEY</code> 필요. 비공개 영상은 자막·메모를 붙여 주세요.'
      : '공개 유튜브 URL → 서버(Gemini) 분석. 그 외는 <strong>링크·메모</strong>가 초안까지 전달돼요.');
  const flowsReady = !!state.newItem.flowProposalsReady && (state.newItem.flowProposals || []).length > 0;
  const flowLoading = !!state.newItem.flowProposalsLoading;
  const btnLabel = analyzing ? '사진 분석 중…' : (flowLoading ? '글 흐름 만드는 중…' : (flowsReady ? '선택한 흐름으로 초안 만들기' : '글의 흐름 만들기'));
  const submitDisabled = analyzing || flowLoading;
  const flowSectionHtml = renderAddFormFlowSectionHTML_();
  const regenBtnHtml = flowsReady
    ? '<button type="button" class="btn-flow-regen" onclick="regenerateFlowProposals()" ' + (analyzing || flowLoading ? 'disabled' : '') + '>흐름 다시 제안</button>'
    : '';
  const actionButtonHtml = '<button type="button" class="btn-submit" id="btn-add-draft-submit" onclick="runNewItemFlowAction()" ' + (submitDisabled ? 'disabled' : '') + '>' + btnLabel + '</button>';
  return `<div class="add-form-layout"><div class="add-form">
    <div class="form-title">새 주제 추가</div>
    <p style="font-size:12px;color:#6B7280;line-height:1.55;margin-bottom:12px;">${addIntro}</p>
    <div class="form-field">
      <label class="form-label">카테고리</label>
      <select class="form-select" onchange="setNewCat(this.value)">${catOpts}</select>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">독자: <strong>${getProgramAudienceLine_(catId)}</strong> (카테고리에 맞게 자동)</div>
    </div>
    <div class="form-field">
      <label class="form-label">${kwLabel}</label>
      <textarea id="new-item-topic-input" class="form-input form-textarea" rows="6" oninput="onNewItemTopicInput_(this)" placeholder="${kwPlaceholder}">${escapeHtml(state.newItem.topic)}</textarea>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">${kwHint}</div>
    </div>
    <div class="form-field">
      <label class="form-label">${refNoteLabel}</label>
      <textarea id="new-item-ref-note-input" class="form-input form-textarea${hasPhoto ? ' image-analysis-textarea' : ''}" rows="${hasPhoto ? '9' : '5'}" oninput="onNewItemRefNoteInput_(this)" placeholder="${refNotePlaceholder}" ${analyzing ? 'disabled' : ''}>${escapeHtml(state.newItem.refNote || '')}</textarea>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">${refNoteHint} 사진 선택 시 AI 분석 결과가 여기에 들어가며 직접 수정할 수 있어요.</div>
    </div>
    <div class="form-field">
      <label class="form-label">참고 사진${isDaily ? ' (일상 공유에 추천)' : ' (선택)'}</label>
      <input class="form-input" type="file" accept="image/*" multiple onchange="onNewItemImage(this)" style="padding:8px;" />
      <div style="margin-top:4px;">${imgHint}</div>
    </div>
    ${flowsReady ? '' : actionButtonHtml}
  </div>
  ${flowSectionHtml ? `<div class="add-flow-outside">${flowSectionHtml}${regenBtnHtml}${flowsReady ? actionButtonHtml : ''}</div>` : ''}
  </div>`;
}
function scrollTextareaCaretIntoView_(ta){
  if(!ta || ta.tagName !== 'TEXTAREA') return;
  var pos = typeof ta.selectionStart === 'number' ? ta.selectionStart : ta.value.length;
  var cs = window.getComputedStyle(ta);
  var mirror = document.createElement('div');
  var mirrorStyle = ['boxSizing','width','paddingTop','paddingRight','paddingBottom','paddingLeft',
    'borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth',
    'fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textIndent','whiteSpace','wordWrap','overflowWrap'];
  mirrorStyle.forEach(function(k){ mirror.style[k] = cs[k]; });
  mirror.style.position = 'absolute';
  mirror.style.visibility = 'hidden';
  mirror.style.top = '0';
  mirror.style.left = '-9999px';
  mirror.style.whiteSpace = 'pre-wrap';
  mirror.style.wordWrap = 'break-word';
  mirror.style.overflowWrap = 'break-word';
  mirror.style.width = ta.clientWidth + 'px';
  mirror.style.overflow = 'hidden';
  var before = document.createTextNode(ta.value.substring(0, pos));
  var marker = document.createElement('span');
  marker.textContent = '\u200b';
  mirror.appendChild(before);
  mirror.appendChild(marker);
  document.body.appendChild(mirror);
  var caretTop = marker.offsetTop;
  var caretH = marker.offsetHeight || (parseFloat(cs.lineHeight) || 20);
  document.body.removeChild(mirror);
  var padTop = parseFloat(cs.paddingTop) || 0;
  var padBot = parseFloat(cs.paddingBottom) || 0;
  var viewTop = ta.scrollTop;
  var viewBot = viewTop + ta.clientHeight - padTop - padBot;
  var caretBot = caretTop + caretH;
  if(caretTop < viewTop + padTop){
    ta.scrollTop = Math.max(0, caretTop - padTop - 6);
  } else if(caretBot > viewBot){
    ta.scrollTop = caretBot - ta.clientHeight + padTop + padBot + 6;
  }
}
function bindNewItemTopicInput_(){
  var el = document.getElementById('new-item-topic-input');
  if(!el || el._caretScrollBound) return;
  el._caretScrollBound = true;
  var sync = function(){ scrollTextareaCaretIntoView_(el); };
  ['keyup','select','input'].forEach(function(ev){
    el.addEventListener(ev, function(){
      requestAnimationFrame(function(){ requestAnimationFrame(sync); });
    });
  });
}
function bindNewItemRefNoteInput_(){
  var el = document.getElementById('new-item-ref-note-input');
  if(!el || el._caretScrollBound) return;
  el._caretScrollBound = true;
  var sync = function(){ scrollTextareaCaretIntoView_(el); };
  ['keyup','select','input'].forEach(function(ev){
    el.addEventListener(ev, function(){
      requestAnimationFrame(function(){ requestAnimationFrame(sync); });
    });
  });
}
function bindNewItemFlowInputs_(){
  var flows = state.newItem.flowProposals || [];
  flows.forEach(function(flow, i){
    ['title', 'angle', 'steps'].forEach(function(kind){
      var el = document.getElementById('new-item-flow-' + kind + '-' + i);
      if(!el || el._caretScrollBound) return;
      el._caretScrollBound = true;
      if(el.tagName !== 'TEXTAREA') return;
      autoGrowTextarea_(el);
      var sync = function(){ scrollTextareaCaretIntoView_(el); };
      ['keyup','select','input'].forEach(function(ev){
        el.addEventListener(ev, function(){
          requestAnimationFrame(function(){ requestAnimationFrame(sync); });
        });
      });
    });
  });
}
function setNewCat(v){
  state.newItem.catId = parseInt(v, 10);
  resetNewItemFlowProposals_();
  renderMain();
}

window.runNewItemFlowAction = async function(){
  var ready = !!state.newItem.flowProposalsReady && !!getSelectedNewItemFlow_();
  if(ready){
    await window.addDraft();
    return;
  }
  await window.regenerateFlowProposals();
};

window.addDraft = async function(){
  if(state.newItem.imageAnalyzing){
    if(typeof setAppToast === 'function') setAppToast('사진 분석이 끝날 때까지 잠시만 기다려 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  if(state.newItem.flowProposalsLoading){
    if(typeof setAppToast === 'function') setAppToast('글 흐름 제안이 끝날 때까지 잠시만 기다려 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  var keywords = (state.newItem.topic || '').trim();
  var refNote = (state.newItem.refNote || '').trim();
  var sourceNote = buildDraftSourceNote_(keywords, refNote);
  var isDaily = isDailyShareCategory(state.newItem.catId);
  var hasPhoto = newItemHasRefImages_();
  var hasMedia = newItemHasMediaSource_();
  var selectedFlow = getSelectedNewItemFlow_();
  var hasFlow = !!state.newItem.flowProposalsReady && !!selectedFlow;
  if(!sourceNote && !(isDaily && hasPhoto)){
    if(typeof setAppToast === 'function') setAppToast(isDaily ? '키워드·메모를 입력하거나 사진을 올려 주세요.' : '키워드 또는 참고 메모를 입력해 주세요.', { duration: 3500, variant: 'err' });
    else alert(isDaily ? '키워드·메모 또는 사진이 필요합니다' : '키워드 또는 참고 메모를 입력해주세요');
    return;
  }
  if(!hasFlow){
    if(typeof setAppToast === 'function') setAppToast('먼저 「글의 흐름 만들기」를 눌러 흐름을 받고 하나를 선택해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  if(!String(selectedFlow.title || '').trim()){
    if(typeof setAppToast === 'function') setAppToast('선택한 흐름의 제목을 입력해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  if(!state.apiKey){ openApiModal(); return; }
  var youtubeUrls = extractYoutubeUrlsFromText_(sourceNote);
  if(youtubeUrls.length && !isGeminiYoutubeAvailable_()){
    if(typeof setAppToast === 'function'){
      setAppToast('유튜브 URL이 있어요.\nApps Script 스크립트 속성에 GEMINI_API_KEY를 넣고 배포를 새로 해 주세요.', { duration: 6000, variant: 'ok' });
    }
  }
  var btn = document.getElementById('btn-add-draft-submit');
  var youtubeAnalysis = state.newItem.cachedYoutubeAnalysis || '';
  var addEstSec = hasFlow ? ADD_DRAFT_FULL_ESTIMATE_SEC : ADD_DRAFT_TOPIC_ESTIMATE_SEC;
  if(youtubeUrls.length && isGeminiYoutubeAvailable_() && !youtubeAnalysis && !hasMedia) addEstSec += 15;
  if(btn){
    startButtonCountdown_(btn, {
      estimateSec: addEstSec,
      busyLabel: hasFlow ? '초안 생성 중' : '주제 생성 중'
    });
  }
  if(typeof setAppToast === 'function') setAppToast(
    hasFlow ? '선택한 글 흐름으로 주제 카드를 만들고 초안을 준비하고 있어요…' :
    (youtubeUrls.length && isGeminiYoutubeAvailable_() && !youtubeAnalysis ? '공개 유튜브 영상을 분석한 뒤 주제를 만들고 있어요…' :
    (isDaily && hasPhoto ? '사진을 보고 주제·일상 글을 만들고 있어요…' : '주제 제목·각도를 만들고 있어요…')),
    { duration: 3200, variant: 'ok' }
  );
  try {
    if(!hasMedia && youtubeUrls.length && isGeminiYoutubeAvailable_() && !youtubeAnalysis){
      try {
        youtubeAnalysis = await analyzeYoutubeWithGemini_(youtubeUrls[0], state.newItem.catId);
      } catch(ytErr){
        var ytMsg = (ytErr && ytErr.message) ? ytErr.message : String(ytErr);
        var ytToast = '유튜브 분석 실패 — 메모만으로 주제를 만들게요.';
        if(ytMsg) ytToast += '\n' + ytMsg;
        if(typeof setAppToast === 'function') setAppToast(ytToast, { duration: /할당량|quota|limit/i.test(ytMsg) ? 12000 : 7000, variant: 'err' });
      }
    }
    var gen;
    if(hasFlow){
      var selected = selectedFlow;
      gen = {
        topic: String(selected.title || '').trim(),
        angle: String(selected.angle || '').trim() || (CATEGORIES[state.newItem.catId].audience + ' 관점'),
        series: getDefaultSeriesForCat_(state.newItem.catId),
        pillar: getDefaultPillarForCat_(state.newItem.catId),
        rationale: (selected.steps || []).join(' → ')
      };
    } else {
      gen = await generateTopicFromKeywords_(state.newItem.catId, keywords, state.newItem.refImages, sourceNote, youtubeAnalysis);
    }
    var cat = CATEGORIES[state.newItem.catId];
    var id = 'd' + state.newItem.catId + '-c' + Date.now();
    var draft = { id: id, topic: gen.topic, angle: gen.angle, createdAt: new Date().toISOString() };
    if(isDaily) draft.shareMonth = getCurrentShareMonthKey_();
    applyTopicFieldsToDraft_(draft, gen, state.newItem.catId);
    if(hasFlow){
      var picked = selectedFlow;
      draft.articleFlow = {
        title: String(picked.title || '').trim(),
        angle: String(picked.angle || '').trim(),
        steps: (picked.steps || []).slice()
      };
    }
    assignUserAddedDraftToMisc_(draft, state.newItem.catId);
    if(sourceNote) draft.sourceNote = sourceNote;
    if(hasFlow && youtubeAnalysis){
      draft.youtubeAnalysis = youtubeAnalysis;
      if(youtubeUrls.length) draft.youtubeUrls = [youtubeUrls[0]];
    } else if(youtubeAnalysis){
      draft.youtubeAnalysis = youtubeAnalysis;
      draft.youtubeUrls = [youtubeUrls[0]];
    }
    var refImages = normalizeRefImages_(state.newItem.refImages);
    if(refImages.length){
      draft.refImages = refImages.map(function(img){
        return { mediaType: img.mediaType, data: img.data, name: img.name || '' };
      });
      draft.refImage = {
        mediaType: refImages[0].mediaType,
        data: refImages[0].data,
        name: refImages[0].name || ''
      };
    }
    cat.drafts.push(draft);
    var savedCatId = state.newItem.catId;
    state.newItem = createEmptyNewItem_(savedCatId);
    state.showAdd = false;
    document.getElementById('add-toggle-btn').textContent = '추가';
    state.currentCat = cat.id;
    renderTabs();
    renderMain();
    save();
    var openTab = isThreadCategory(cat.id) ? 'thread' : (isHeiljagyaeCategory(cat.id) ? 'community' : 'blog');
    var genLabel = openTab === 'blog' ? '블로그 초안' : (openTab === 'thread' ? '일상 글' : '게시판·이미지 초안');
    if(btn) stopButtonCountdown_(btn);
    if(typeof setAppToast === 'function') {
      var toastMsg = '「' + gen.topic + '」\n' + genLabel + '을 만들고 있어요…';
      if(youtubeAnalysis) toastMsg += '\n유튜브 분석 내용이 반영됐어요.';
      setAppToast(toastMsg, { duration: 5200, variant: 'ok' });
    }
    await window.enqueueDraftGeneration(cat.id, id, { openDetailOnComplete: true, openDetailTab: openTab });
  } catch(e){
    var msg = (e && e.message) ? e.message : String(e);
    if(typeof setAppToast === 'function') setAppToast('주제 생성 실패\n' + msg, { duration: 7000, variant: 'err' });
    else alert(msg);
  } finally {
    if(btn) stopButtonCountdown_(btn);
  }
};

window.refreshTopicsForCat = async function(catId){
  if(!state.apiKey){ openApiModal(); return; }
  const cat = CATEGORIES[catId];
  if(!cat) return;
  const list = (cat.drafts || []).filter(function(d){ return d && d.id; });
  if(list.length === 0){
    if(typeof setAppToast === 'function') setAppToast('이 카테고리에 리프레쉬할 주제가 없어요.', { duration: 3200 });
    return;
  }
  if(typeof setAppToast === 'function') setAppToast('「' + cat.name + '」 주제를 리프레쉬하고 있어요…', { duration: 2600 });

  const avoidTopics = (cat.drafts || []).map(function(d){ return d && d.topic ? d.topic : ''; }).filter(Boolean).slice(0, 80);
  const ids = list.map(function(d){ return d.id; });

  const prompt =
`당신은 "브랜딩 플래너"입니다.
${buildBrandContextForPrompt_(catId, null)}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}

아래 ID 목록 각각에 대해 topic·angle·series·step·pillar·rationale을 새로 만들어 주세요.
- topic: 한국어 한 줄(15~32자, **호기심·궁금증을 자극하는 후킹**·질문형 권장)
- angle: 이 주제를 어떤 관점으로 풀지 한 줄(신뢰/오해해소/실천팁/메커니즘 등)
${buildTopicBrandJsonGuide_(catId)}

[중복 금지]
아래 기존 topic들과 최대한 겹치지 않게:
${avoidTopics.map(t=>' - '+t).join('\n')}

[출력]
반드시 JSON 배열만 출력:
[
  {"id":"${ids[0] || 'dX-0'}","topic":"...","angle":"...","series":"...","step":"...","pillar":"...","rationale":"..."}
]

ID는 반드시 아래 목록에서만 사용:
${ids.join(', ')}`;

  try{
    const text = await callClaudePlanner_(prompt, { maxTokens: 1400 });
    const raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    const arr = JSON.parse(raw);
    if(!Array.isArray(arr)) throw new Error('형식이 올바르지 않아요 (JSON 배열 필요)');

    const map = {};
    arr.forEach(function(x){
      if(!x || !x.id) return;
      map[String(x.id)] = x;
    });

    let changed = 0;
    (cat.drafts || []).forEach(function(d){
      if(!d || !d.id) return;
      const u = map[d.id];
      if(!u) return;
      if(u.topic) d.topic = String(u.topic).trim();
      if(u.angle) d.angle = String(u.angle).trim();
      applyTopicFieldsToDraft_(d, u, catId);
      changed++;
    });

    if(changed > 0){
      if(state.selectedId){
        const cur = cat.drafts.find(function(d){ return d.id === state.selectedId; });
        if(cur){
          const ttl = document.getElementById('sheet-title');
          if(ttl) ttl.textContent = cur.topic;
        }
      }
      renderTabs();
      renderMain();
      save({ driveImmediate: true });
      if(typeof setAppToast === 'function') setAppToast('주제를 리프레쉬했어요.', { duration: 4200, variant: 'ok' });
    } else {
      if(typeof setAppToast === 'function') setAppToast('바뀐 주제가 없어요. 다시 한 번 눌러주세요.', { duration: 3200 });
    }
  } catch(e){
    const msg = String((e && e.message) ? e.message : e);
    if(typeof setAppToast === 'function') setAppToast('주제 리프레쉬에 실패했어요.\n' + msg, { duration: 6500, variant: 'err' });
  }
};

window.deleteDraft = function(catId, draftId){
  var cat = CATEGORIES[catId];
  if(!cat || !draftId) return;
  var d = (cat.drafts || []).find(function(x){ return x && x.id === draftId; });
  if(!d){
    if(typeof setAppToast === 'function') setAppToast('주제를 찾을 수 없어요.', { duration: 3200 });
    return;
  }
  var t0 = d.topic || '주제';
  var short = t0.length > 28 ? t0.slice(0, 28) + '…' : t0;
  var hasExtra = draftHasContent(d) || draftHasAnyPublish_(draftId);
  var msg = hasExtra
    ? '「' + short + '」와 작성된 초안·발행 정보를 삭제합니다.\n되돌릴 수 없어요. 계속할까요?'
    : '「' + short + '」 주제를 목록에서 삭제할까요?';
  if(!confirm(msg)) return;

  cat.drafts = (cat.drafts || []).filter(function(x){ return !x || x.id !== draftId; });
  if(!state.deletedDraftIds) state.deletedDraftIds = {};
  state.deletedDraftIds[draftId] = new Date().toISOString();
  if(state.pinnedDraftIds && state.pinnedDraftIds[draftId]) delete state.pinnedDraftIds[draftId];
  delete state.published[draftId];
  delete state.generatedOnly[draftId];
  if(typeof instaBgByDraft !== 'undefined') delete instaBgByDraft[draftId];
  if(typeof threadsBgByDraft !== 'undefined') delete threadsBgByDraft[draftId];

  if(state.selectedId === draftId){
    closeSheetUiOnly_();
    clearOpenDetailHash_();
  }

  save({ driveImmediate: true, gasImmediate: true });
  renderMain();
  if(state.planWorkshopMode === 'topic') refreshTopicWorkshop_();
  if(typeof setAppToast === 'function') setAppToast('「' + short + '」을(를) 삭제했어요. 서버에도 반영 중…', { duration: 3600, variant: 'ok' });
};

window.refreshTopicsForDraft = async function(catId, draftId){
  if(!state.apiKey){ openApiModal(); return; }
  const cat = CATEGORIES[catId];
  if(!cat || !draftId) return;
  const d = (cat.drafts || []).find(function(x){ return x && x.id === draftId; });
  if(!d){
    if(typeof setAppToast === 'function') setAppToast('주제를 찾을 수 없어요.', { duration: 3200 });
    return;
  }
  if(typeof setAppToast === 'function'){
    const t0 = d.topic || '주제';
    const short = t0.length > 26 ? t0.slice(0, 26) + '…' : t0;
    setAppToast('「' + short + '」 주제를 리프레쉬하고 있어요…', { duration: 2600 });
  }

  var startedWait = !(state.plannerAiWait && state.plannerAiWait.regenDraftId === draftId);
  if(startedWait){
    startPlannerAiWait_({ estimateSec: TOPIC_REGEN_ESTIMATE_SEC, busyLabel: '재생성 중', regenDraftId: draftId });
  }

  const avoidTopics = (cat.drafts || [])
    .map(function(x){ return x && x.topic ? x.topic : ''; })
    .filter(Boolean)
    .slice(0, 80);

  const prompt =
`당신은 "브랜딩 플래너"입니다.
${buildBrandContextForPrompt_(catId, d)}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}

아래 ID 한 건에 대해 topic·angle·series·step·pillar·rationale을 새로 만들어 주세요.
- topic: 한국어 한 줄(15~32자, **호기심·궁금증을 자극하는 후킹**·질문형 권장)
- angle: 이 주제를 어떤 관점으로 풀지 한 줄(신뢰/오해해소/실천팁/메커니즘 등)
${buildTopicBrandJsonGuide_(catId)}

[중복 금지]
아래 기존 topic들과 최대한 겹치지 않게:
${avoidTopics.map(t=>' - '+t).join('\n')}

[출력]
반드시 JSON 배열만 출력 (원소 1개):
[
  {"id":"${draftId}","topic":"...","angle":"...","series":"...","step":"...","pillar":"...","rationale":"..."}
]`;

  try{
    const text = await callClaudePlanner_(prompt, { maxTokens: 800 });
    const raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    const arr = JSON.parse(raw);
    if(!Array.isArray(arr) || !arr[0]) throw new Error('형식이 올바르지 않아요 (JSON 배열 1개 필요)');
    const u = arr[0];
    if(!u || String(u.id) !== String(draftId)) throw new Error('응답 ID가 일치하지 않아요');

    const nt = String(u.topic || '').trim();
    const na = String(u.angle || '').trim();
    if(nt) d.topic = nt;
    if(na) d.angle = na;
    applyTopicFieldsToDraft_(d, u, catId);
    if(!nt && !na && !u.series && !u.rationale){
      if(typeof setAppToast === 'function') setAppToast('바뀐 주제가 없어요. 다시 한 번 눌러주세요.', { duration: 3200 });
      return;
    }

    if(state.selectedId === draftId){
      const ttl = document.getElementById('sheet-title');
      if(ttl) ttl.textContent = d.topic;
    }
    renderTabs();
    renderMain();
    save({ driveImmediate: true });
    if(typeof setAppToast === 'function') setAppToast('이 주제를 리프레쉬했어요.', { duration: 4200, variant: 'ok' });
  } catch(e){
    const msg = String((e && e.message) ? e.message : e);
    if(typeof setAppToast === 'function') setAppToast('주제 리프레쉬에 실패했어요.\n' + msg, { duration: 6500, variant: 'err' });
  } finally {
    if(startedWait) stopPlannerAiWait_();
  }
};

// ── 알림 · 딥링크 · 매일 8:30 자동 초안 ──
const DAILY_AUTO_HOUR = 8;
const DAILY_AUTO_MINUTE = 30;
const DAILY_AUTO_LAST_KEY = 'ht_daily_auto_last';
const DAILY_AUTO_ENABLED_KEY = 'ht_daily_auto_enabled';
const AUTO_TOPIC_REPLENISH_ENABLED_KEY = 'ht_auto_topic_replenish_enabled';
var dailyAutoTimer = null;

function isDailyAutoEnabled_(){
  try {
    var v = localStorage.getItem(DAILY_AUTO_ENABLED_KEY);
    if(v === '1') return true;
    return false;
  } catch(e){ return false; }
}
function setDailyAutoEnabled_(on){
  try { localStorage.setItem(DAILY_AUTO_ENABLED_KEY, on ? '1' : '0'); } catch(e){}
}
function isAutoTopicReplenishEnabled_(){
  try {
    return localStorage.getItem(AUTO_TOPIC_REPLENISH_ENABLED_KEY) === '1';
  } catch(e){ return false; }
}
function getSeoulMinutesNow_(){
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var h = 0, m = 0;
    parts.forEach(function(p){
      if(p.type === 'hour') h = parseInt(p.value, 10);
      if(p.type === 'minute') m = parseInt(p.value, 10);
    });
    return h * 60 + m;
  } catch(e2){
    var d = new Date(Date.now() + 9 * 60 * 60 * 1000);
    return d.getUTCHours() * 60 + d.getUTCMinutes();
  }
}
function getSeoulDateKey_(fromDate){
  if(fromDate){
    try {
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(fromDate);
    } catch(e2){}
  }
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  } catch(e3){
    var d = new Date(Date.now() + 9 * 60 * 60 * 1000);
    return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
  }
}
function dailyAutoAlreadyRanToday_(){
  try { return localStorage.getItem(DAILY_AUTO_LAST_KEY) === getSeoulDateKey_(); } catch(e){ return false; }
}
function markDailyAutoRanToday_(){
  try { localStorage.setItem(DAILY_AUTO_LAST_KEY, getSeoulDateKey_()); } catch(e){}
}
function msUntilNextDailyAuto_(){
  var target = DAILY_AUTO_HOUR * 60 + DAILY_AUTO_MINUTE;
  var now = getSeoulMinutesNow_();
  var diffMin = target - now;
  if(diffMin <= 0) diffMin += 24 * 60;
  return diffMin * 60 * 1000 + 1500;
}
function scheduleDailyAutoDraft_(){
  if(dailyAutoTimer) clearTimeout(dailyAutoTimer);
  if(!isDailyAutoEnabled_()) return;
  dailyAutoTimer = setTimeout(function(){
    dailyAutoTimer = null;
    maybeRunDailyAutoDraft_('schedule');
    scheduleDailyAutoDraft_();
  }, msUntilNextDailyAuto_());
}
function withDetailHashSyncLock_(fn){
  detailHashSyncLock_ = true;
  try { fn(); } finally { detailHashSyncLock_ = false; }
}
function clearOpenDetailHash_(){
  try {
    if(location.hash && /^#open\//.test(location.hash)){
      withDetailHashSyncLock_(function(){
        history.replaceState(null, '', location.pathname + (location.search || ''));
      });
    }
  } catch(e){}
}
function normalizeSheetTabForCategory_(tab, catId){
  tab = String(tab || '').toLowerCase();
  if(isThreadCategory(catId)) return tab === 'thread' ? 'thread' : '';
  if(isHeiljagyaeCategory(catId)) return (tab === 'community' || tab === 'images') ? tab : '';
  if(isBlogInstaCategory(catId)) return (tab === 'blog' || tab === 'insta' || tab === 'threads' || tab === 'images') ? tab : '';
  return '';
}
function setOpenDetailHash_(draftId, catId, tab){
  try {
    var h = 'open/' + encodeURIComponent(draftId) + '/' + catId;
    var safeTab = normalizeSheetTabForCategory_(tab, catId);
    if(safeTab) h += '/' + safeTab;
    withDetailHashSyncLock_(function(){
      if(location.hash === '#' + h) return;
      location.hash = h;
    });
  } catch(e){}
}
function closeSheetUiOnly_(){
  releaseModalFocusTrap_();
  resetBottomSheet_(document.getElementById('detail-sheet'));
  document.getElementById('detail-sheet').classList.remove('open');
  state.selectedId = null;
  state.selectedCatId = null;
  setTimeout(function(){
    document.getElementById('detail-overlay').classList.remove('open');
    unlockBodyScroll_();
    scheduleAppToastLift_();
  }, 280);
}
function onPlannerHashChange_(){
  if(detailHashSyncLock_) return;
  var h = (location.hash || '').replace(/^#/, '');
  var m = h.match(/^open\/([^/]+)\/(\d+)(?:\/([a-z]+))?$/);
  if(!m){
    var ov = document.getElementById('detail-overlay');
    if(ov && ov.classList.contains('open')) closeSheetUiOnly_();
    return;
  }
  var draftId = decodeURIComponent(m[1]);
  var catId = parseInt(m[2], 10);
  var tab = normalizeSheetTabForCategory_(m[3], catId) || undefined;
  if(state.selectedId === draftId && document.getElementById('detail-overlay').classList.contains('open')) return;
  if(catId != null && state.currentCat !== catId){
    state.currentCat = catId;
    renderTabs();
  }
  renderMain();
  openDetail(draftId, catId, tab, { skipHash: true });
}
function openDetailFromDeepLink_(draftId, catId, tab){
  if(catId != null && state.currentCat !== catId){
    state.currentCat = catId;
    renderTabs();
  }
  renderMain();
  openDetail(draftId, catId, tab);
}
function openNextPublishRecommendationFromEntry_(fallbackDraftId, fallbackCatId){
  var rec = getNextPublishRecommendation();
  if(rec && rec.draft && rec.draft.id){
    openDetailFromDeepLink_(rec.draft.id, rec.cat.id);
    return true;
  }
  if(fallbackDraftId && fallbackCatId != null && !draftIsPublished_(fallbackDraftId)){
    openDetailFromDeepLink_(fallbackDraftId, fallbackCatId);
    return true;
  }
  try {
    clearOpenDetailHash_();
  } catch(e){}
  renderMain();
  return false;
}
function consumeDeepLinkFromHash_(){
  var h = (location.hash || '').replace(/^#/, '');
  var m = h.match(/^open\/([^/]+)\/(\d+)(?:\/([a-z]+))?$/);
  if(!m) return;
  var draftId = decodeURIComponent(m[1]);
  var catId = parseInt(m[2], 10);
  var tab = normalizeSheetTabForCategory_(m[3], catId);
  if(tab){
    openDetailFromDeepLink_(draftId, catId, tab);
    return;
  }
  if(draftIsPublished_(draftId)){
    openNextPublishRecommendationFromEntry_(draftId, catId);
    return;
  }
  openDetailFromDeepLink_(draftId, catId);
}
function focusPlannerAndOpenDraft_(draftId, catId){
  try { window.focus(); } catch(e){}
  openDetailFromDeepLink_(draftId, catId);
}
function tryNotifyDraftDone(topic, ok, draftId, catId, isDaily){
  try {
    if(typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    var title = ok
      ? (isDaily ? '오늘의 발행 초안 완료' : '초안 생성 완료')
      : (isDaily ? '오늘의 발행 초안 실패' : '초안 생성 실패');
    var payload = { draftId: draftId, catId: catId };
    var opts = {
      body: topic,
      tag: 'ht-draft-' + String(draftId),
      data: payload,
      requireInteraction: !!ok && !!isDaily
    };
    if(document.hidden && navigator.serviceWorker){
      navigator.serviceWorker.ready.then(function(reg){
        return reg.showNotification(title, opts);
      }).catch(function(){
        var n = new Notification(title, opts);
        n.onclick = function(){ n.close(); focusPlannerAndOpenDraft_(draftId, catId); };
      });
      return;
    }
    var n = new Notification(title, opts);
    n.onclick = function(){
      n.close();
      focusPlannerAndOpenDraft_(draftId, catId);
    };
  } catch (e) { }
}
var dailyAutoRunning = false;
function serverDailyAutoRanToday_(){
  try {
    var raw = localStorage.getItem(SK);
    if(!raw) return false;
    var s = JSON.parse(raw);
    var auto = s && s.plannerLastAuto;
    if(!auto || !auto.at) return false;
    var d = new Date(auto.at);
    return getSeoulDateKey_() === getSeoulDateKey_(d);
  } catch(e){ return false; }
}
async function maybeRunDailyAutoDraft_(reason){
  if(!isDailyAutoEnabled_()) return;
  if(dailyAutoRunning || genPendingCount > 0 || genActiveJob) return;
  if(serverDailyAutoRanToday_()) return;
  if(!state.apiKey) return;
  if(dailyAutoAlreadyRanToday_()) return;
  var target = DAILY_AUTO_HOUR * 60 + DAILY_AUTO_MINUTE;
  if(getSeoulMinutesNow_() < target && reason !== 'schedule') return;
  var rec = getNextPublishRecommendation();
  if(!rec || !rec.draft || !rec.draft.id) return;
  if(draftHasContent(rec.draft)) {
    markDailyAutoRanToday_();
    return;
  }
  dailyAutoRunning = true;
  try {
    if(typeof setAppToast === 'function'){
      setAppToast('오전 8:30 · 「다음 발행 추천」 초안을 백그라운드에서 만들고 있어요.', { duration: 4200, variant: 'ok' });
    }
    await window.enqueueDraftGeneration(rec.cat.id, rec.draft.id, { dailyAuto: true });
    markDailyAutoRanToday_();
  } catch(e){
    console.warn('[매일 자동 초안]', e);
  } finally {
    dailyAutoRunning = false;
  }
}
function buildSheetTabsHTML(tab){
  const cid = state.selectedCatId;
  if(isThreadCategory(cid)){
    return '';
  }
  if(isHeiljagyaeCategory(cid)){
    return `<div class="sheet-tabs-scroll"><div class="sheet-tabs">
    <button type="button" class="sheet-tab${tab==='community'?' active':''}" onclick="switchTab('community')">게시판</button>
    <button type="button" class="sheet-tab${tab==='images'?' active':''}" onclick="switchTab('images')">이미지 (2)</button>
  </div></div>`;
  }
  return `<div class="sheet-tabs-scroll"><div class="sheet-tabs">
    <button type="button" class="sheet-tab${tab==='images'?' active':''}" onclick="switchTab('images')">이미지 (2)</button>
    <button type="button" class="sheet-tab${tab==='blog'?' active':''}" onclick="switchTab('blog')">블로그</button>
    <button type="button" class="sheet-tab${tab==='insta'?' active':''}" onclick="switchTab('insta')">인스타</button>
    <button type="button" class="sheet-tab${tab==='threads'?' active':''}" onclick="switchTab('threads')">쓰레드</button>
  </div></div>`;
}
function composeSheetTabLayout_(tab, titleHtml, restHtml){
  return (titleHtml || '') + buildSheetTabsHTML(tab) + (restHtml || '');
}
function scrollSheetBodyToStart_(){
  var body = document.getElementById('sheet-body');
  if(!body) return;
  requestAnimationFrame(function(){
    body.scrollTop = 0;
    scheduleWorkshopTextareaGrow_(body);
  });
}

function normalizeImagesBlock(raw){
  if(!raw || typeof raw !== 'object') return null;
  return {
    gptVisuals: Array.isArray(raw.gptVisuals) ? raw.gptVisuals : [],
  };
}

/** 블로그·인스타: 썸네일 1:1 + 본문 2장. 예전 5장·인포그래픽 초안 호환 */
function trimBlogInstaImages_(gptVisuals){
  var list = (gptVisuals || []).filter(function(x){ return x && x.prompt; });
  if(list.length <= 2) return list;
  function isThumb(x){
    return x.role === 'thumbnail' ||
      (/썸네일|thumbnail|①/i.test(String(x.title || '')) &&
        !/②|본문|동작|시연|셀프|body/i.test(String(x.title || '')));
  }
  function isBody(x){
    return x.role === 'body' ||
      /②|본문|동작|시연|셀프|body|stretch|exercise|self/i.test(String(x.title || ''));
  }
  var thumb = list.find(isThumb);
  var body = list.find(function(x){ return isBody(x) && x !== thumb; });
  if(thumb && body) return [thumb, body];
  if(thumb){
    var rest = list.filter(function(x){ return x !== thumb; });
    var bodyAlt = rest.find(isBody) || rest[0];
    if(bodyAlt) return [thumb, bodyAlt];
  }
  var self = list.find(isBody);
  var scene = list.find(function(x){
    return /썸네일|thumbnail|공감|일상|클로즈|close|cover/i.test(String(x.title || ''));
  });
  if(scene && self && scene !== self) return [scene, self];
  if(list.length >= 5) return [list[0], list[list.length - 1]].filter(Boolean);
  return list.slice(0, 2);
}

/** 이미지 탭·저장·복사에 쓰는 정규화 목록 (2장, 썸네일+본문) */
function getDisplayGptVisuals_(gptVisuals, catId){
  var raw = (gptVisuals || []).filter(function(x){ return x && x.prompt; });
  var cap = getImageSlotCount(catId) || 2;
  return trimBlogInstaImages_(raw).slice(0, cap);
}

function normalizeContentImages_(content, catId){
  if(!content || !content.images || !content.images.gptVisuals) return content;
  content.images.gptVisuals = getDisplayGptVisuals_(content.images.gptVisuals, catId);
  enrichImageOverlays_(content, catId);
  return content;
}

function getCommunityProblemText_(c){
  if(!c) return '';
  if(c.problem && String(c.problem).trim()) return String(c.problem).trim();
  var parts = [];
  if(c.empathyLead && String(c.empathyLead).trim()) parts.push(String(c.empathyLead).trim());
  if(c.empathyBullets && c.empathyBullets.length){
    c.empathyBullets.forEach(function(b){
      var t = String(b || '').replace(/^[\s•]+/, '').trim();
      if(t) parts.push(t);
    });
  }
  return parts.join('\n');
}

function normalizeCommunityBlock(raw){
  if(!raw || typeof raw !== 'object') return null;
  var problem = raw.problem != null ? String(raw.problem).trim() : '';
  if(!problem) problem = getCommunityProblemText_(raw);
  return {
    title: raw.title != null ? String(raw.title) : '',
    problem: problem,
    empathyLead: raw.empathyLead != null ? String(raw.empathyLead) : '',
    empathyBullets: Array.isArray(raw.empathyBullets) ? raw.empathyBullets.filter(Boolean).slice(0, 3) : [],
    explanation: raw.explanation != null ? String(raw.explanation) : '',
    selfCare: raw.selfCare != null ? String(raw.selfCare) : '',
  };
}

function normalizeThreadBlock(raw){
  if(!raw || typeof raw !== 'object') return null;
  var topicTitle = raw.topicTitle != null ? String(raw.topicTitle).trim() : '';
  var summary = raw.summary != null ? String(raw.summary).trim() : (raw.body != null ? String(raw.body).trim() : '');
  var posts = Array.isArray(raw.posts) ? raw.posts.map(function(p){ return String(p).trim(); }).filter(Boolean) : [];
  if(!summary && posts.length){
    summary = posts.join(' ');
  }
  if(!summary) return null;
  return { topicTitle: topicTitle, summary: summary };
}

function getThreadPlainText(th){
  if(!th || !th.summary) return '';
  return (th.topicTitle ? th.topicTitle + '\n\n' : '') + th.summary;
}

function formatCommunityPostText(c){
  if(!c) return '';
  const co = normalizeCommunityBlock(c) || c;
  return [
    (co.title || '').trim(),
    '',
    COMMUNITY_FIXED_GREETING,
    '',
    ensureProseParagraphBreaks_(getCommunityProblemText_(co)),
    '',
    (co.selfCare || '').trim(),
    '',
    ensureProseParagraphBreaks_(co.explanation || ''),
    '',
    COMMUNITY_FIXED_CLOSING
  ].join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function isStructuredGeneralBlog_(b){
  if(!b) return false;
  return !!(b.problem || b.selfCare || b.explanation);
}
function blogUsesStructuredGeneralFormat_(catId, b){
  return isGeneralAudienceCategory(catId) || isStructuredGeneralBlog_(b);
}
function getGeneralBlogProblemText_(b){
  if(!b) return '';
  if(b.problem && String(b.problem).trim()) return String(b.problem).trim();
  if(b.hook && String(b.hook).trim()) return String(b.hook).trim();
  return '';
}
function normalizeBlogBlock(raw, catId){
  if(!raw || typeof raw !== 'object') return null;
  if(blogUsesStructuredGeneralFormat_(catId, raw)){
    var problem = raw.problem != null ? String(raw.problem).trim() : '';
    if(!problem) problem = getGeneralBlogProblemText_(raw);
    return {
      title: raw.title != null ? String(raw.title).trim() : '',
      problem: problem,
      selfCare: raw.selfCare != null ? String(raw.selfCare).trim() : '',
      explanation: raw.explanation != null ? String(raw.explanation).trim() : '',
      cta: raw.cta != null ? String(raw.cta).trim() : '',
      hashtags: Array.isArray(raw.hashtags) ? raw.hashtags.filter(Boolean) : [],
      hook: raw.hook != null ? String(raw.hook) : '',
      outline: Array.isArray(raw.outline) ? raw.outline : [],
      draft: raw.draft != null ? String(raw.draft) : ''
    };
  }
  return {
    title: raw.title != null ? String(raw.title) : '',
    hook: raw.hook != null ? String(raw.hook) : '',
    outline: Array.isArray(raw.outline) ? raw.outline : [],
    draft: raw.draft != null ? String(raw.draft) : '',
    cta: raw.cta != null ? String(raw.cta) : '',
    hashtags: Array.isArray(raw.hashtags) ? raw.hashtags.filter(Boolean) : []
  };
}
function formatGeneralBlogPostText(b){
  if(!b) return '';
  var tags = (b.hashtags || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
  return [
    (b.title || '').trim(),
    '',
    ensureProseParagraphBreaks_(getGeneralBlogProblemText_(b)),
    '',
    (b.selfCare || '').trim(),
    '',
    ensureProseParagraphBreaks_(b.explanation || ''),
    '',
    ensureProseParagraphBreaks_(b.cta || ''),
    tags
  ].filter(function(p, i, arr){
    if(i === 0) return true;
    return String(p || '').trim();
  }).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
function blogHasMinimumContent_(catId, b){
  if(!b || !String(b.title || '').trim()) return false;
  if(blogUsesStructuredGeneralFormat_(catId, b)){
    return !!(getGeneralBlogProblemText_(b) || String(b.selfCare || '').trim());
  }
  return !!String(b.draft || '').trim();
}

function buildImagePromptGuide(topic, angle, customGuide, catId){
  const t = String(topic || '').trim();
  const a = String(angle || '').trim();
  const g = String(customGuide || '').trim();
  const id = parseInt(catId, 10);
  const fixed = getCatImageThumbnailFixed_(id);
  const band = CAT_IMAGE_BAND_COLOR_EN[id] || CAT_IMAGE_BAND_COLOR_EN[1];
  const scene = CAT_IMAGE_THUMBNAIL_SCENE_EN[id] || CAT_IMAGE_THUMBNAIL_SCENE_EN[1];
  const pillar = CAT_DEFAULT_PILLAR[id] || '';
  const isExpert = isExpertCourseCategory(id);
  const bodyHint = isExpert
    ? 'blog.outline·draft·참고 메모의 테크닉·시연과 **정확히 일치**'
    : 'blog.selfCare와 **동일한** 셀프 동작·자세·초·회·분';
  return `
[이미지 2장 — 주제 맞춤 생성 규칙]
이번 초안 주제: "${t}"
작성 각도: "${a}"
${pillar ? '프로그램 톤: ' + pillar : ''}

**정확히 2개** gptVisuals만: ① 1:1 썸네일 ② 본문 보조. 대표·인포그래픽 단독 컷은 만들지 마세요.

각 prompt는 **영문 한 덩어리** (90~200 단어). 한 줄 요약·불릿 금지.
**이미지 안에 한글·영문 글자 생성 금지** — overlay 필드에만 기록.

■ ① 썸네일 1:1 (role: thumbnail)
- 비율 1:1. 상단 20%·하단 22%는 **단색 밴드**(글자 없음) — 후처리 시 한글 삽입용 여백
- overlayFixedLine1: "${fixed.brand}"
- overlayFixedLine2: "${fixed.program}"
- overlayHook: blog.title과 동일한 후킹 한 줄
- 중앙 58% 비주얼: ${scene}
- 밴드 색: ${band}
- editorial documentary, natural light, slight film grain, visible skin texture
- **금지**: 크리미 베이지 인포그래픽, sage/cream medical illustration, 3D 해부, AI 매끈 피부, readable text

■ ② 본문 (${isExpert ? '교육·시연 동작' : '셀프케어 동작'}, role: body)
- ${bodyHint}
- Korean home floor or clinic/studio, East Asian adult, modest clothing, top or side view
- photorealistic editorial, no text overlay, no logos

${g ? '[카테고리별 이미지 생성 지침]\n' + g : ''}
`;
}

function buildHeiljagyaeImagePromptGuide(topic, angle, customGuide){
  const t = String(topic || '').trim();
  const a = String(angle || '').trim();
  const g = String(customGuide || '').trim();
  const fixed = getCatImageThumbnailFixed_(7);
  const band = CAT_IMAGE_BAND_COLOR_EN[7];
  const scene = CAT_IMAGE_THUMBNAIL_SCENE_EN[7];
  return `
[이미지 2장 — 아파트너 게시글용]
이번 주제: "${t}"
작성 각도: "${a}"

**정확히 2개** gptVisuals: ① 1:1 썸네일 ② 본문 셀프 동작.
각 prompt는 **영문 한 덩어리** (90~200 단어). 이미지 안 글자 생성 금지.

■ ① 썸네일 1:1 (role: thumbnail)
- 상단 20%·하단 22% 단색 밴드(글자 없음). overlayFixedLine1: "${fixed.brand}", overlayFixedLine2: "${fixed.program}", overlayHook: community.title 후킹
- 중앙: ${scene}
- 밴드: ${band}
- photorealistic editorial, 광고·설득 톤 금지

■ ② 본문 셀프 동작 (role: body)
- community.selfCare와 **동일** 동작·자세·초·회·분
- 한국 아파트 바닥 또는 요가 매트, 부드러운 자연광

${g ? '[카테고리별 이미지 생성 지침]\n' + g : ''}
`;
}

function buildImageTabBody(content){
  const im = content.images;
  const imgCap = getImageSlotCount(state.selectedCatId) || 2;
  if(!im){
    return `<p class="empty-note" style="padding:0;">이 초안에는 이미지 추천이 없어요. 초안을 다시 생성하면 함께 만들어져요.</p>
      <button type="button" class="btn-gen-big" onclick="genContent(event)" style="width:100%;margin-top:12px;">초안·이미지 다시 생성</button>`;
  }
  var rawGpt = (im.gptVisuals || []).filter(function(s){ return s && s.prompt; });
  const gpt = getDisplayGptVisuals_(rawGpt, state.selectedCatId);

  let html = '';

  if(isHeiljagyaeCategory(state.selectedCatId)){
    html += '<div class="img-section-title">ChatGPT 이미지 프롬프트 (2장 · 아파트너용)</div>';
    html += '<p style="font-size:12px;color:#6B7280;margin:0 0 14px;line-height:1.55;">① 1:1 썸네일(상·하 여백 + 고정·후킹 멘트) · ② 게시글 selfCare와 같은 동작 장면.</p>';
  } else {
    html += '<div class="img-section-title">ChatGPT 이미지 프롬프트 (2장)</div>';
    html += '<p style="font-size:12px;color:#6B7280;margin:0 0 14px;line-height:1.55;">① 1:1 썸네일(피드 커버·상·하 여백) · ② 본문 셀프케어·시연 동작. 한글 멘트는 기록용(이미지 안에 생성하지 않음).</p>';
  }
  if(gpt.length === 0){
    html += '<p class="empty-note" style="padding:12px 0;">프롬프트가 없습니다. 재생성해 주세요.</p>';
  } else {
    gpt.forEach(function(item, i){
      const title = item.title || ('시안 ' + (i + 1));
      const p = item.prompt || '';
      const dp = encodeURIComponent(p);
      const isThumb = isGptVisualThumbnail_(item, i, gpt);
      html += '<div class="img-tool-card">';
      html += '<div class="img-tool-title">' + escapeHtml(title) + '</div>';
      if(isThumb){
        html += '<div style="margin:0 0 10px;padding:10px 12px;background:#F9FAFB;border-radius:10px;border:1px solid #E5E7EB;">';
        html += '<div style="font-size:11px;color:#6B7280;margin-bottom:8px;line-height:1.5;">썸네일 한글 멘트 (ChatGPT 이미지 안에 넣지 않음)</div>';
        html += '<label style="display:block;font-size:11px;color:#374151;margin:0 0 4px;">상단 고정 1줄</label>';
        html += '<input type="text" class="sheet-edit" id="sheet-image-overlay-l1-' + i + '" data-image-index="' + i + '" data-overlay-field="overlayFixedLine1" value="' + escapeHtml(item.overlayFixedLine1 || '') + '" style="width:100%;margin-bottom:8px;padding:8px 10px;font-size:13px;border:1px solid #E5E7EB;border-radius:8px;box-sizing:border-box;">';
        html += '<label style="display:block;font-size:11px;color:#374151;margin:0 0 4px;">상단 고정 2줄</label>';
        html += '<input type="text" class="sheet-edit" id="sheet-image-overlay-l2-' + i + '" data-image-index="' + i + '" data-overlay-field="overlayFixedLine2" value="' + escapeHtml(item.overlayFixedLine2 || '') + '" style="width:100%;margin-bottom:8px;padding:8px 10px;font-size:13px;border:1px solid #E5E7EB;border-radius:8px;box-sizing:border-box;">';
        html += '<label style="display:block;font-size:11px;color:#374151;margin:0 0 4px;">하단 후킹</label>';
        html += '<input type="text" class="sheet-edit" id="sheet-image-overlay-hook-' + i + '" data-image-index="' + i + '" data-overlay-field="overlayHook" value="' + escapeHtml(item.overlayHook || '') + '" style="width:100%;padding:8px 10px;font-size:13px;border:1px solid #E5E7EB;border-radius:8px;box-sizing:border-box;">';
        html += '</div>';
      }
      html += '<textarea class="sheet-edit" id="sheet-image-prompt-' + i + '" data-image-index="' + i + '" rows="7">' + escapeHtml(p) + '</textarea>';
      html += '<div class="img-tool-actions">';
      html += '<button type="button" class="img-tool-main-btn gpt" data-p="' + dp + '" onclick="copyOpenImageToolFromField(this,' + i + ')">ChatGPT 열기 · 프롬프트 복사</button>';
      html += '<button type="button" class="img-tool-copy-btn" onclick="copyImagePromptField(' + i + ')">복사만</button>';
      html += '</div></div>';
    });
    if(gpt.length < imgCap){
      html += '<p class="empty-note" style="padding:8px 0 0;">' + imgCap + '장 중 ' + gpt.length + '장만 있습니다. 필요하면 재생성해 주세요.</p>';
    }
  }

  html += '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">프롬프트를 수정한 뒤 <strong>발행완료</strong>를 누르면 최종본이 저장돼요.</p>';
  html += '<div class="img-tool-hint">웹 브라우저는 보안상 다른 사이트 입력창에 자동으로 글을 넣을 수 없어요. 버튼을 누르면 <strong>프롬프트가 클립보드에 복사</strong>된 뒤 ChatGPT가 열립니다. 채팅 입력란에 <strong>Ctrl+V</strong>로 붙여넣기 하세요.<br/><br/>같은 프로젝트·채팅방에서 이미지를 모으려면 상단 <strong>API 키 설정</strong> 모달에서 <strong>ChatGPT 이미지 프로젝트 열기 주소</strong>에 주소창 URL을 저장하세요. <button type="button" onclick="openApiModal()" style="margin-top:6px;background:#F3F4F6;border:none;border-radius:8px;padding:6px 12px;font-size:11px;cursor:pointer;font-family:inherit;">주소 저장하기</button></div>';

  return html;
}

window.copyOpenImageToolFromField = function(btn, index){
  var el = document.getElementById('sheet-image-prompt-' + index);
  var prompt = el ? String(el.value || '').trim() : '';
  if(!prompt) return;
  var url = getChatgptOpenUrl();
  var label = btn.textContent;
  navigator.clipboard.writeText(prompt).then(function(){
    window.open(url, '_blank', 'noopener,noreferrer');
    btn.textContent = '복사 후 이동함';
    setTimeout(function(){ btn.textContent = label; }, 2200);
  }).catch(function(){
    window.open(url, '_blank', 'noopener,noreferrer');
    window.prompt('프롬프트를 복사해 주세요 (Ctrl+C 후 확인):', prompt);
  });
};

window.copyImagePromptField = function(index){
  var el = document.getElementById('sheet-image-prompt-' + index);
  var prompt = el ? String(el.value || '').trim() : '';
  if(!prompt) return;
  navigator.clipboard.writeText(prompt).then(function(){
    setAppToast('프롬프트를 복사했어요.', { duration: 2000, variant: 'ok' });
  }).catch(function(){
    window.prompt('복사할 프롬프트:', prompt);
  });
};

window.copyOpenImageTool = function(btn){
  var raw = btn.getAttribute('data-p');
  var prompt = raw ? decodeURIComponent(raw) : '';
  if(!prompt) return;
  var url = getChatgptOpenUrl();
  var label = btn.textContent;
  navigator.clipboard.writeText(prompt).then(function(){
    window.open(url, '_blank', 'noopener,noreferrer');
    btn.textContent = '복사 후 이동함';
    setTimeout(function(){ btn.textContent = label; }, 2200);
  }).catch(function(){
    window.open(url, '_blank', 'noopener,noreferrer');
    window.prompt('프롬프트를 복사해 주세요 (Ctrl+C 후 확인):', prompt);
  });
};

window.copyPromptOnly = function(btn){
  var raw = btn.getAttribute('data-p');
  var prompt = raw ? decodeURIComponent(raw) : '';
  if(!prompt) return;
  var label = btn.textContent;
  navigator.clipboard.writeText(prompt).then(function(){
    btn.textContent = '복사됨';
    setTimeout(function(){ btn.textContent = label; }, 1500);
  }).catch(function(){
    window.prompt('복사할 프롬프트:', prompt);
  });
};

window.cp = function(btn, text){
  navigator.clipboard.writeText(text.replace(/\\n/g,'\n'));
  btn.textContent='복사됨'; btn.classList.add('copied');
  setTimeout(()=>{ btn.textContent='복사'; btn.classList.remove('copied'); }, 1500);
};

// planner-detail-sheet.js — 브랜딩 플래너 detail
// ── Detail sheet ──
function openDetail(draftId, catId, tab, opts) {
  opts = opts || {};
  const cat = CATEGORIES[catId];
  const draft = cat.drafts.find(d=>d.id===draftId);
  if(!draft) return;
  state.selectedId = draftId;
  state.selectedCatId = catId;
  state.activeTab = isThreadCategory(catId) ? 'thread' : (isHeiljagyaeCategory(catId) ? 'community' : 'blog');
  if(tab !== undefined && tab !== null && tab !== ''){
    state.activeTab = normalizeSheetTabForCategory_(tab, catId) || state.activeTab;
  }
  document.getElementById('sheet-title').textContent = draft.topic;
  const pub = state.published[draftId];
  const content = pub?.content || state.generatedOnly[draftId];
  if(content){
    var beforeLen = (content.images && content.images.gptVisuals) ? content.images.gptVisuals.length : 0;
    normalizeContentImages_(content, catId);
    var afterLen = (content.images && content.images.gptVisuals) ? content.images.gptVisuals.length : 0;
    if(beforeLen > afterLen) persistDraftContent_(draftId, content);
    renderSheetContent(content);
  }
  else { renderSheetEmpty(draft, cat); }
  document.getElementById('detail-overlay').classList.add('open');
  lockBodyScroll_();
  setTimeout(function(){
    var sheetEl = document.getElementById('detail-sheet');
    sheetEl.classList.add('open');
    settleBottomSheet_(sheetEl);
    scheduleAppToastLift_();
    trapFocusIn_(sheetEl);
    scrollSheetBodyToStart_();
  }, 10);
  setTimeout(scrollSheetBodyToStart_, 360);
  if(!opts.skipHash){
    setOpenDetailHash_(draftId, catId, state.activeTab);
  }
}

function buildDraftReferencePreviewHTML_(draft, opts){
  opts = opts || {};
  if(!draft) return '';
  var catId = opts.catId != null ? opts.catId : getCatIdFromDraftId_(draft.id);
  var userAdded = isUserAddedDraftId_(draft.id);
  var isDaily = isDailyShareCategory(catId);
  var sourceLabel = userAdded
    ? '추가에서 작성한 내용'
    : (isDaily ? '참고 메모' : '참고 메모 (영상·테크닉)');
  var parts = [];
  if(draft.sourceNote){
    parts.push('<div class="sheet-add-source-preview" style="margin-bottom:12px;padding:12px 14px;background:#F0FDFA;border:1px solid #CCFBF1;border-radius:10px;">' +
      '<div style="font-size:10px;font-weight:700;color:#0F766E;letter-spacing:.6px;margin-bottom:6px;">' + escapeHtml(sourceLabel) + '</div>' +
      '<div style="font-size:12px;color:#374151;line-height:1.65;white-space:pre-wrap;max-height:140px;overflow-y:auto;">' + escapeHtml(draft.sourceNote) + '</div></div>');
  }
  if(draft.youtubeAnalysis){
    parts.push('<div style="margin-bottom:12px;padding:12px 14px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;">' +
      '<div style="font-size:10px;font-weight:700;color:#1D4ED8;letter-spacing:.6px;margin-bottom:6px;">YouTube 분석</div>' +
      '<div style="font-size:12px;color:#374151;line-height:1.65;white-space:pre-wrap;max-height:120px;overflow-y:auto;">' + escapeHtml(draft.youtubeAnalysis) + '</div></div>');
  }
  var refImgs = getDraftRefImages_(draft);
  if(refImgs.length){
    parts.push('<div style="margin-bottom:12px;padding:10px 14px;background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;">' +
      '<div style="font-size:10px;font-weight:700;color:#B45309;letter-spacing:.6px;margin-bottom:4px;">참고 사진 ' + refImgs.length + '장</div>' +
      '<div style="font-size:11px;color:#6B7280;">초안·이미지 프롬프트는 이 사진·영상 분석에 맞춰 작성됩니다.</div></div>');
  }
  if(!parts.length) return '';
  return '<div style="margin-bottom:4px;">' + parts.join('') + '</div>';
}

function renderSheetEmpty(draft, cat) {
  const genLine = isDailyShareCategory(cat.id)
    ? 'AI가 <strong>담백한 관찰 + 공감 한 스푼</strong> 톤으로<br><strong>한 줄 + 3~7문장</strong>을 써요. 핵심 한 가지를 분명히, 과한 감성은 피해요'
    : isHeiljagyaeCategory(cat.id)
    ? 'AI가 <strong>아파트너 게시판 글</strong>과 <strong>추천 이미지 프롬프트 2개</strong>만<br>만들어드려요'
    : isGeneralAudienceCategory(cat.id)
    ? 'AI가 <strong>블로그(문제 제기·셀프 케어·원리 설명)</strong>와 이미지 프롬프트 <strong>2장</strong>을 만들어드려요.<br>블로그 <strong>발행완료</strong> 후 인스타·쓰레드 초안이 <strong>동시에</strong> 만들어져요'
    : isExpertCourseCategory(cat.id)
    ? '교육·강의 <strong>영상 링크</strong> 또는 <strong>실습 사진</strong>을 먼저 올리면, AI가 그에 맞춰<br><strong>영상·사진 맥락 → 시연 포인트 → 원리 설명</strong> 글과 이미지 프롬프트 <strong>2장</strong>을 만들어요.<br>블로그 <strong>발행완료</strong> 후 인스타·쓰레드 초안이 <strong>동시에</strong> 만들어져요'
    : 'AI가 <strong>블로그</strong>와 이미지 프롬프트 <strong>2장</strong>을 만들어드려요.<br>블로그 <strong>발행완료</strong> 후 인스타·쓰레드 초안이 <strong>동시에</strong> 만들어져요';
  const sourceNoteHtml = buildDraftReferencePreviewHTML_(draft, { catId: cat.id });
  const ytAnalysisHtml = draft.youtubeAnalysis
    ? `<div style="margin-bottom:16px;padding:12px 14px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;">
        <div style="font-size:10px;font-weight:700;color:#1D4ED8;letter-spacing:.6px;margin-bottom:6px;">YouTube 분석 (Gemini)</div>
        <div style="font-size:12px;color:#374151;line-height:1.65;white-space:pre-wrap;max-height:160px;overflow-y:auto;">${escapeHtml(draft.youtubeAnalysis)}</div>
      </div>`
    : '';
  document.getElementById('sheet-body').innerHTML =
    buildDraftBrandBlockHTML_(draft, cat.id, true) +
    `${sourceNoteHtml}${ytAnalysisHtml}` +
    `<div style="background:#F8F7F4;border-radius:12px;padding:28px 20px;text-align:center;" class="sheet-gen-cta">
      <div style="font-size:14px;color:#6B7280;line-height:1.7;margin-bottom:20px;">${genLine}</div>
      <button onclick="genContent(event)" style="background:linear-gradient(135deg,#2DD4BF,#0EA5E9);color:#fff;border:none;border-radius:12px;padding:13px 28px;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">초안 생성하기</button>
    </div>`;
  setSheetActionsHtml_('');
  scheduleWorkshopTextareaGrow_(document.getElementById('sheet-body'));
  scrollSheetBodyToStart_();
}


function renderSheetContent(content) {
  const tab = state.activeTab;
  var focusSnap = captureTextFieldFocus_();
  if(focusSnap && content){
    content = JSON.parse(JSON.stringify(content));
    applySheetEditsForTab_(content, tab);
  }
  const tabsHTML = buildSheetTabsHTML(tab);
  var sheetCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
  var sheetCat = CATEGORIES[sheetCatId];
  var sheetDraft = sheetCat && state.selectedId ? sheetCat.drafts.find(function(d){ return d.id === state.selectedId; }) : null;
  var addSourceHtml = buildDraftReferencePreviewHTML_(sheetDraft, { catId: sheetCatId });

  let bodyHTML = '';
  if(tab==='images'){
    bodyHTML = tabsHTML + addSourceHtml + buildImageTabBody(content);
  } else if(tab==='thread'){
    const th = normalizeThreadBlock(content.thread);
    if(!th || !th.summary){
      bodyHTML = tabsHTML + addSourceHtml + `<p class="empty-note" style="padding:12px 0;">일상 공유 초안이 없어요. 아래에서 다시 생성해 주세요.</p>
        <button type="button" class="btn-gen-big" onclick="genContent(event)" style="width:100%;margin-top:8px;">초안 다시 생성</button>`;
    } else {
      bodyHTML = tabsHTML + addSourceHtml +
        sheetFullCopyBar_() +
        sheetEditField_('오늘의 한 줄', 'sheet-thread-title', th.topicTitle || '', { rows: 2, title: true, regen: 'thread.topicTitle', copy: true }) +
        sheetEditField_('본문 (일상 나눔)', 'sheet-thread-summary', th.summary || '', { rows: 10, regen: 'thread.summary', copy: true, paragraphs: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정하거나 <strong>재생성</strong>으로 다시 만들 수 있어요. <strong>발행완료</strong>를 누르면 최종본이 저장돼요.</p>';
    }
  } else if(tab==='blog'){
    const blogCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    const b = normalizeBlogBlock(content.blog, blogCatId) || content.blog || {};
    if(blogUsesStructuredGeneralFormat_(blogCatId, b)){
      bodyHTML = composeSheetTabLayout_(tab,
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true, regen: 'blog.title', copy: true }),
        addSourceHtml + sheetFullCopyBar_() +
        sheetEditField_('문제 제기', 'sheet-blog-problem', getGeneralBlogProblemText_(b), { rows: 5, help: '공감 질문 → 일상에서 바로 풀 수 있다는 한 줄까지', regen: 'blog.problem', copy: true, paragraphs: true }) +
        sheetEditField_('셀프 케어', 'sheet-blog-selfcare', b.selfCare || '', { rows: 8, help: '👉 로 시작 · 동작·초·회·분을 앞쪽에 · 단계 사이 빈 줄', regen: 'blog.selfCare', copy: true, stepPreview: true }) +
        sheetEditField_('원리 설명', 'sheet-blog-explanation', b.explanation || '', { rows: 6, regen: 'blog.explanation', copy: true, paragraphs: true }) +
        sheetEditField_('마무리 CTA', 'sheet-blog-cta', b.cta, { rows: 3, regen: 'blog.cta', copy: true, paragraphs: true }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분', regen: 'blog.hashtags', copy: true, copyHashtags: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정하거나 <strong>재생성</strong>으로 그 부분만 다시 만들 수 있어요. <strong>발행완료</strong>를 누르면 블로그가 저장·복사되고 앱으로 이동해요. 인스타 캡션은 그동안 백그라운드에서 만들어져요.</p>'
      );
    } else if(isExpertCourseCategory(blogCatId)){
      var expertDraft = sheetDraft;
      var expertRefHtml = addSourceHtml;
      bodyHTML = composeSheetTabLayout_(tab,
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true, regen: 'blog.title', copy: true }),
        sheetFullCopyBar_() +
        expertRefHtml +
        sheetEditField_('영상·사진 맥락', 'sheet-blog-hook', b.hook, { rows: 4, help: '이번 영상·사진에서 다룬 장면·상황', regen: 'blog.hook', copy: true, paragraphs: true }) +
        sheetEditField_('시연·핵심 포인트', 'sheet-blog-outline', (b.outline || []).join('\n'), { rows: 5, help: '손 위치·동작·주의사항 — 한 줄에 하나씩', regen: 'blog.outline', copy: true }) +
        sheetEditField_('원리 설명', 'sheet-blog-draft', b.draft, { rows: 12, help: '본문의 중심. 왜 이렇게 하는지·짧은 메커니즘', regen: 'blog.draft', copy: true, paragraphs: true }) +
        sheetEditField_('마무리', 'sheet-blog-cta', b.cta, { rows: 3, regen: 'blog.cta', copy: true, paragraphs: true }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분 · 3~5개 권장', regen: 'blog.hashtags', copy: true, copyHashtags: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정하거나 <strong>재생성</strong>으로 그 부분만 다시 만들 수 있어요. 다듬은 뒤 <strong>발행완료</strong>를 누르면 저장·복사돼요.</p>'
      );
    } else {
      bodyHTML = composeSheetTabLayout_(tab,
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true, regen: 'blog.title', copy: true }),
        addSourceHtml + sheetFullCopyBar_() +
        sheetEditField_('후킹 오프닝', 'sheet-blog-hook', b.hook, { rows: 4, regen: 'blog.hook', copy: true, paragraphs: true }) +
        sheetEditField_('목차 구성', 'sheet-blog-outline', (b.outline || []).join('\n'), { rows: 5, help: '한 줄에 소제목 하나씩', regen: 'blog.outline', copy: true }) +
        sheetEditField_('본문 초안', 'sheet-blog-draft', b.draft, { rows: 14, regen: 'blog.draft', copy: true, paragraphs: true }) +
        sheetEditField_('마무리 CTA', 'sheet-blog-cta', b.cta, { rows: 3, regen: 'blog.cta', copy: true, paragraphs: true }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분', regen: 'blog.hashtags', copy: true, copyHashtags: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정하거나 <strong>재생성</strong>으로 그 부분만 다시 만들 수 있어요. 다듬은 뒤 <strong>발행완료</strong>를 누르면 블로그가 저장·복사되고 앱으로 이동해요.</p>'
      );
    }
  } else if(tab==='insta'){
    const ig = content.insta;
    if(shouldShowInstaPending_(content, state.selectedId)){
      bodyHTML = tabsHTML + buildInstaPendingBox_(content, state.selectedId);
    } else if(!ig || (!ig.hook && !ig.caption && !(ig.hashtags && ig.hashtags.length))){
      bodyHTML = tabsHTML +
        '<div class="sheet-insta-pending"><strong>인스타 캡션은 아직 없어요.</strong><br>블로그 탭에서 <strong>발행완료</strong>를 누르거나, 블로그 초안이 있으면 하단 <strong>재생성</strong>으로 만들 수 있어요.</div>';
    } else {
      var instaCaption = String(ig.caption || '').trim() || getInstaCaptionBodyMerged_(ig);
      bodyHTML = composeSheetTabLayout_(tab,
        sheetEditField_('첫 줄 후킹', 'sheet-insta-hook', ig.hook, { rows: 2, title: true, regen: 'insta.hook', copy: true }),
        addSourceHtml + sheetFullCopyBar_() +
        sheetEditField_('캡션 (짧은 본문)', 'sheet-insta-caption', instaCaption, { rows: 10, regen: 'insta.caption', copy: true, paragraphs: true }) +
        sheetEditField_('해시태그', 'sheet-insta-hashtags', (ig.hashtags || []).map(function(h){ return String(h).replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분', regen: 'insta.hashtags', copy: true, copyHashtags: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정하거나 <strong>재생성</strong>으로 그 부분만 다시 만들 수 있어요. <strong>발행완료</strong>를 누르면 저장·복사 후 인스타 앱으로 이동해요.</p>'
      );
    }
  } else if(tab==='threads'){
    var ths = content.threads;
    if(shouldShowThreadsPending_(content, state.selectedId)){
      bodyHTML = tabsHTML + buildThreadsPendingBox_(content, state.selectedId);
    } else if(!ths || !getThreadsBodyText_(ths)){
      bodyHTML = tabsHTML +
        '<div class="sheet-insta-pending"><strong>쓰레드 글은 아직 없어요.</strong><br>블로그 탭에서 <strong>발행완료</strong>를 누르면 인스타·쓰레드 초안이 함께 만들어져요. 또는 블로그 글이 있으면 하단 <strong>재생성</strong>으로 만들 수 있어요.</div>';
    } else {
      bodyHTML = tabsHTML + addSourceHtml +
        sheetFullCopyBar_() +
        sheetEditField_('본문 (게시글)', 'sheet-threads-body', getThreadsBodyText_(ths), { rows: 5, regen: 'threads.body', copy: true, help: '통념 뒤집기·궁금증 훅 한 줄. 해설은 넣지 마세요.', paragraphs: true }) +
        sheetEditField_('댓글 (재게시)', 'sheet-threads-comment', getThreadsCommentText_(ths), { rows: 12, regen: 'threads.comment', copy: true, help: '본문에 대한 해설·근거·과정·철학. 게시 후 본인 댓글(재게시)로 올리세요.', paragraphs: true }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">먼저 <strong>본문</strong>을 게시한 뒤, <strong>댓글</strong> 박스 내용을 본인 댓글(재게시)로 붙여넣으세요. <strong>발행완료</strong>는 본문을 복사·저장합니다.</p>';
    }
  } else if(tab==='community'){
    const co = content.community;
    if(!co){
      bodyHTML = tabsHTML + `<p class="empty-note" style="padding:12px 0;">커뮤니티 초안이 없어요. 초안을 다시 생성하면 함께 만들어져요.</p>
        <button type="button" class="btn-gen-big" onclick="genContent(event)" style="width:100%;margin-top:8px;">초안 다시 생성</button>`;
    } else {
      const coNorm = normalizeCommunityBlock(co);
      const problemText = getCommunityProblemText_(coNorm);
      bodyHTML = composeSheetTabLayout_(tab,
        sheetEditField_('제목', 'sheet-community-title', coNorm.title || '', { rows: 2, title: true, regen: 'community.title', copy: true }),
        addSourceHtml + sheetFullCopyBar_() +
        `<div class="cb"><div class="cb-label">인사말 (고정)</div>
          <div class="cb-box" style="white-space:pre-wrap;color:#6B7280;font-size:13px;line-height:1.65;">${escapeHtml(COMMUNITY_FIXED_GREETING)}</div></div>
        ${sheetEditField_('문제 제기', 'sheet-community-problem', problemText, { rows: 5, help: '공감 질문 → 일상에서 바로 풀 수 있다는 한 줄까지, 자연스러운 문장으로', regen: 'community.problem', copy: true, paragraphs: true })}
        ${sheetEditField_('셀프 케어 (해결책)', 'sheet-community-selfcare', coNorm.selfCare || '', { rows: 8, help: '👉 로 시작 · 동작·초·회·분을 앞쪽에 · 단계 사이 빈 줄', regen: 'community.selfCare', copy: true, stepPreview: true })}
        ${sheetEditField_('원리 설명', 'sheet-community-explanation', coNorm.explanation || '', { rows: 6, regen: 'community.explanation', copy: true, paragraphs: true })}
        <div class="cb"><div class="cb-label">마무리 (고정)</div>
          <div class="cb-box" style="white-space:pre-wrap;color:#6B7280;font-size:13px;line-height:1.65;">${escapeHtml(COMMUNITY_FIXED_CLOSING)}</div></div>
        <p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 눌러 바로 수정하거나 <strong>재생성</strong>으로 그 부분만 다시 만들 수 있어요. <strong>발행완료</strong>를 누르면 게시판 최종본이 저장돼요. 상단 <strong>전체 복사</strong>는 인사말·마무리까지 포함해 복사돼요.</p>`
      );
    }
  } else {
    bodyHTML = tabsHTML + '<p class="empty-note">탭을 선택해 주세요.</p>';
  }

  document.getElementById('sheet-body').innerHTML = bodyHTML;
  var pubKey = getPublishKeyForTab_(tab, state.selectedCatId);
  var tabSaved = pubKey && state.published[state.selectedId]?.tabPublished?.[pubKey];
  var pubLabel = tabSaved ? '저장됨' : '발행완료';
  var pubStyle = tabSaved ? ' style="background:#F0FDF4;color:#16A34A;border:1px solid #BBF7D0;"' : '';
  setSheetActionsHtml_(
    '<button type="button" class="btn-regen" onclick="genContent(event)">재생성</button>' +
    '<button type="button" class="btn-sheet-close-action" onclick="closeSheet()">닫기</button>' +
    '<button type="button" class="btn-pub"' + pubStyle + ' onclick="onSheetPublishComplete()">' + pubLabel + '</button>'
  );
  restoreTextFieldFocus_(focusSnap);
  scheduleWorkshopTextareaGrow_(document.getElementById('sheet-body'));
  renderAllSelfCareStepPreviews_();
  scrollSheetBodyToStart_();
}

window.getFullCopy = function(){
  const content = state.published[state.selectedId]?.content || state.generatedOnly[state.selectedId];
  if(!content) return '';
  let t = '';
  const b = content.blog;
  if(b && b.title){
    var blogCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    t = blogUsesStructuredGeneralFormat_(blogCatId, b)
      ? '[블로그]\n' + formatGeneralBlogPostText(b)
      : '[블로그]\n제목: ' + b.title + '\n\n' + b.hook + '\n\n' + b.draft + '\n\n' + b.cta + '\n\n' + (b.hashtags||[]).map(h=>'#'+h).join(' ');
  }
  const th = normalizeThreadBlock(content.thread);
  if(th && th.summary){
    t += (t ? '\n\n' : '') + '[일상 공유]\n' + getThreadPlainText(th);
  }
  const ig = content.insta;
  if(ig){
    t += `\n\n[인스타]\n` + getInstaFullPasteText_(ig);
  }
  const com = content.community;
  if(com){
    t += '\n\n[힐자계 커뮤니티 게시판]\n' + formatCommunityPostText(com);
  }
  const im = content.images;
  if(im){
    var imgCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    var imgText = getImagePromptTextForData_(content, imgCatId);
    if(imgText) t += '\n\n[ChatGPT 이미지 프롬프트 · ' + getDisplayGptVisuals_(im.gptVisuals, imgCatId).length + '장]\n' + imgText;
  }
  return t;
};

function getSheetGoButtonHTML(tab){
  if(tab === 'blog') return `<button type="button" class="btn-sheet-link" onclick="openExternalNaverBlog()">블로그 가기</button>`;
  if(tab === 'insta') return `<button type="button" class="btn-sheet-link" onclick="openExternalInstagram()">인스타 가기</button>`;
  if(tab === 'community') return `<button type="button" class="btn-sheet-link" onclick="openApartnerApp()">아파트너 열기</button>`;
  if(tab === 'thread' || tab === 'threads') return `<button type="button" class="btn-sheet-link" onclick="openExternalThreads()">Threads 가기</button>`;
  return '';
}

function getTabCopyText(tab, content){
  if(!content) return '';
  if(tab === 'blog'){
    const b = content.blog;
    if(!b) return '';
    var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    if(blogUsesStructuredGeneralFormat_(catId, b)) return formatGeneralBlogPostText(b);
    const outline = (b.outline || []).map(function(o, i){ return (i + 1) + '. ' + o; }).join('\n');
    return '[블로그]\n제목: ' + b.title + '\n\n' + (b.hook || '') + '\n\n' + outline + '\n\n' + (b.draft || '') + '\n\n' + (b.cta || '') + '\n\n' + (b.hashtags || []).map(function(h){ return '#' + h; }).join(' ');
  }
  if(tab === 'insta'){
    const ig = content.insta;
    if(!ig) return '';
    return '[인스타]\n' + getInstaFullPasteText_(ig);
  }
  if(tab === 'threads'){
    const ths = content.threads;
    if(!ths || !getThreadsBodyText_(ths)) return '';
    return getThreadsFullPasteText_(ths);
  }
  if(tab === 'community'){
    const c = content.community;
    if(!c) return '';
    return formatCommunityPostText(c);
  }
  if(tab === 'thread'){
    const th = normalizeThreadBlock(content.thread);
    if(!th || !th.summary) return '';
    return getThreadPlainText(th);
  }
  if(tab === 'images'){
    var imgCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    var imgCopy = getImagePromptTextForData_(content, imgCatId);
    return imgCopy ? '[ChatGPT 이미지 프롬프트]\n' + imgCopy : '';
  }
  return '';
}

window.copyCurrentTab = function(btn){
  const content = state.published[state.selectedId]?.content || state.generatedOnly[state.selectedId];
  const text = getTabCopyText(state.activeTab, content);
  if(!text){
    alert('이 탭에 복사할 내용이 없어요.');
    return;
  }
  const label = btn ? btn.textContent : '';
  navigator.clipboard.writeText(text).then(function(){
    if(btn){ btn.textContent = '복사됨'; setTimeout(function(){ btn.textContent = label || '복사'; }, 1600); }
  }).catch(function(){
    alert('클립보드 복사에 실패했어요. 브라우저에서 권한을 허용했는지 확인해 주세요.');
  });
};

window.openExternalNaverBlog = function(){
  const u = EXT_NAVER_BLOG;
  if(!isPhoneOrTablet()){
    window.open(u, '_blank', 'noopener,noreferrer');
    return;
  }
  if(isAndroidDevice()){
    window.location.href = 'intent://blog.naver.com/allenjoy#Intent;scheme=https;package=com.nhn.android.blog;S.browser_fallback_url=' + encodeURIComponent(u) + ';end';
    return;
  }
  if(isIOSLikeDevice()){
    openNaverBlogAppOnIOS_();
    return;
  }
  const naverApp = 'naversearchapp://inappbrowser?url=' + encodeURIComponent(u) + '&target=new&version=6';
  window.location.href = naverApp;
  setTimeout(function(){
    if(document.hidden) return;
    window.location.href = u;
  }, 450);
  setTimeout(function(){
    if(document.hidden) return;
    window.open(u, '_blank', 'noopener,noreferrer');
  }, 1100);
};

function buildBlogPasteTextForPublish_(b, catId){
  if(!b) return '';
  if(blogUsesStructuredGeneralFormat_(catId, b)) return formatGeneralBlogPostText(b);
  var outline = (b.outline || []).map(function(o, i){ return (i + 1) + '. ' + o; }).join('\n');
  var tags = (b.hashtags || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
  if(isExpertCourseCategory(catId)){
    var expertParts = [b.title, b.hook, outline, b.draft, b.cta];
    if(tags) expertParts.push(tags);
    return expertParts.filter(function(p){ return String(p || '').trim(); }).join('\n\n');
  }
  var parts = [b.title, b.hook, outline, b.draft, b.cta];
  if(tags) parts.push(tags);
  return parts.filter(function(p){ return String(p || '').trim(); }).join('\n\n');
}

function ensureNotifyForInstaBg_(){
  try {
    if(typeof Notification === 'undefined') return;
    if(Notification.permission !== 'default') return;
    if(localStorage.getItem('ht_notif_insta_prompt_done')) return;
    localStorage.setItem('ht_notif_insta_prompt_done', '1');
    if(typeof setAppToast === 'function'){
      setAppToast('블로그 앱에 있는 동안 인스타 캡션 완료 알림을 받으려면\n곧 뜨는 창에서 허용을 눌러 주세요.', { duration: 5200, variant: 'ok' });
    }
    setTimeout(function(){
      try { Notification.requestPermission(); } catch(e){}
    }, 700);
  } catch(e){}
}

function copyAndOpenNaverBlog_(text){
  var open = function(){ openExternalNaverBlog(); };
  if(!text){ open(); return; }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(open).catch(open);
  } else {
    open();
  }
}

function copyAndOpenInstagram_(text){
  var open = function(){ openExternalInstagramForPost_(); };
  if(!text){ open(); return; }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(open).catch(open);
  } else {
    open();
  }
}

function copyTextOnly_(text, done){
  if(!text){
    if(done) done(false);
    return;
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      if(done) done(true);
    }).catch(function(){
      window.prompt('복사할 내용:', text);
      if(done) done(true);
    });
    return;
  }
  window.prompt('복사할 내용:', text);
  if(done) done(true);
}

window.openExternalInstagramForPost_ = function(){
  const u = EXT_INSTAGRAM_WEB;
  if(!isPhoneOrTablet()){
    window.open(u, '_blank', 'noopener,noreferrer');
    return;
  }
  if(isAndroidDevice()){
    window.location.href =
      'intent:#Intent;package=com.instagram.android;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;end';
    setTimeout(function(){
      if(document.hidden) return;
      window.location.href =
        'intent://www.instagram.com/#Intent;scheme=https;package=com.instagram.android;S.browser_fallback_url=' +
        encodeURIComponent(u) + ';end';
    }, 450);
    setTimeout(function(){
      if(document.hidden) return;
      window.open(u, '_blank', 'noopener,noreferrer');
    }, 1100);
    return;
  }
  if(isIOSLikeDevice()){
    window.location.href = 'instagram://camera';
    setTimeout(function(){
      if(document.hidden) return;
      window.location.href = 'instagram://app';
    }, 400);
    setTimeout(function(){
      if(document.hidden) return;
      window.location.href = u;
    }, 900);
    setTimeout(function(){
      if(document.hidden) return;
      window.open(u, '_blank', 'noopener,noreferrer');
    }, 1400);
    return;
  }
  openExternalInstagram();
};

function tryNotifyInstaReady_(topic, draftId, catId, ok, errMsg){
  ok = ok !== false;
  try {
    if(typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    var title = ok ? '인스타 캡션 준비됐어요' : '인스타 캡션 생성 실패';
    var body = ok ? String(topic || '인스타') : String(errMsg || topic || '다시 시도해 주세요');
    var opts = {
      body: body,
      tag: 'ht-insta-' + String(draftId),
      data: { draftId: draftId, catId: catId, tab: 'insta' },
      requireInteraction: !!ok
    };
    var onClick = function(){
      focusPlannerAndOpenDraft_(draftId, catId);
      showInstaContentWhenReady_(draftId, catId);
    };
    if(document.hidden && navigator.serviceWorker){
      navigator.serviceWorker.ready.then(function(reg){
        return reg.showNotification(title, opts);
      }).catch(function(){
        var n = new Notification(title, opts);
        n.onclick = function(){ n.close(); onClick(); };
      });
      return;
    }
    var n = new Notification(title, opts);
    n.onclick = function(){ n.close(); onClick(); };
  } catch(e){}
}


// planner-detail-insta.js — 브랜딩 플래너 detail
var instaBgByDraft = {};
var instaBgDoneWhileHidden_ = {};
const INSTA_BG_ESTIMATE_MS = 45000;
const INSTA_BG_TIMEOUT_MS = 90000;
const INSTA_PENDING_RESTART_WINDOW_MS = 30 * 60 * 1000;

function getInstaBgJob_(draftId){
  var job = instaBgByDraft[draftId];
  if(!job) return null;
  if(job === true) return { startedMs: Date.now(), endMs: Date.now() + INSTA_BG_ESTIMATE_MS };
  return job;
}
function setInstaPendingMeta_(content, draftId, catId, topic, startedMs, endMs){
  if(!content) return;
  content.instaPending = true;
  content.instaPendingStartedAt = startedMs;
  content.instaPendingEndMs = endMs;
  content.instaPendingTopic = topic || '';
  content.instaPendingCatId = catId;
}
function clearInstaPendingMeta_(content){
  if(!content) return;
  delete content.instaPending;
  delete content.instaPendingStartedAt;
  delete content.instaPendingEndMs;
  delete content.instaPendingTopic;
  delete content.instaPendingCatId;
}
function getInstaPendingEndMs_(content, draftId){
  var job = getInstaBgJob_(draftId);
  if(job && job.endMs) return job.endMs;
  var endMs = parseInt(content && content.instaPendingEndMs, 10);
  if(endMs) return endMs;
  var startedMs = parseInt(content && content.instaPendingStartedAt, 10);
  return startedMs ? startedMs + INSTA_BG_ESTIMATE_MS : Date.now() + INSTA_BG_ESTIMATE_MS;
}
function getInstaPendingCountdownText_(content, draftId){
  var activeJob = !!getInstaBgJob_(draftId);
  var leftSec = (getInstaPendingEndMs_(content, draftId) - Date.now()) / 1000;
  if(leftSec > 0) return '예상 남은 시간 약 ' + formatRoughCountdown(leftSec);
  if(activeJob) return '예상 시간을 지나 마무리 중이에요';
  return '브라우저 복귀 후 생성 상태를 다시 확인하고 있어요';
}
function buildInstaPendingBox_(content, draftId){
  var endMs = getInstaPendingEndMs_(content, draftId);
  return '<div class="sheet-insta-pending">' +
    '<strong>인스타 캡션을 만들고 있어요…</strong><br>' +
    '<span class="sheet-insta-pending-countdown" id="insta-pending-countdown" data-end-ms="' + endMs + '">' +
    escapeHtml(getInstaPendingCountdownText_(content, draftId)) +
    '</span><br>' +
    '블로그 앱에서 글을 올리는 동안 백그라운드에서 생성합니다. 완료되면 이 글의 인스타 탭으로 바로 보여드려요.</div>';
}
function updateInstaPendingCountdown_(){
  var el = document.getElementById('insta-pending-countdown');
  if(!el || !state.selectedId) return;
  var content = getDraftContent_(state.selectedId);
  if(!content || !content.instaPending) return;
  el.textContent = getInstaPendingCountdownText_(content, state.selectedId);
}

function instaContentReady_(content){
  var ig = content && content.insta;
  return !!(ig && (ig.hook || ig.caption || (ig.hashtags && ig.hashtags.length)));
}
function shouldShowInstaPending_(content, draftId){
  if(instaContentReady_(content)) return false;
  return !!(content && (content.instaPending || instaBgByDraft[draftId]));
}
function getSheetThreadsBodyFromDom_(){
  var el = document.getElementById('sheet-threads-body');
  return el ? String(el.value || '').trim() : '';
}
function getSheetThreadsCommentFromDom_(){
  var el = document.getElementById('sheet-threads-comment');
  return el ? String(el.value || '').trim() : '';
}
function getSheetThreadsTextFromDom_(){
  return getSheetThreadsBodyFromDom_();
}

function hasThreadsDraftText_(content, draftId){
  if(threadsContentReady_(content)) return true;
  if(state.selectedId === draftId && state.activeTab === 'threads' && getSheetThreadsTextFromDom_()) return true;
  return false;
}

function syncThreadsDraftFromDom_(content, draftId){
  if(!content || state.selectedId !== draftId || state.activeTab !== 'threads') return content;
  var bodyText = getSheetThreadsBodyFromDom_();
  var commentText = getSheetThreadsCommentFromDom_();
  if(!bodyText && !commentText) return content;
  if(!content.threads) content.threads = { body: '', comment: '', text: '' };
  content.threads.body = bodyText;
  content.threads.comment = commentText;
  content.threads.text = bodyText;
  clearThreadsPendingMeta_(content);
  return content;
}

function threadsContentReady_(content){
  return !!getThreadsSnsPlainText_(content && content.threads);
}
function shouldShowThreadsPending_(content, draftId){
  if(hasThreadsDraftText_(content, draftId)) return false;
  return !!(content && (content.threadsPending || threadsBgByDraft[draftId]));
}
function refreshSheetIfViewingDraft_(draftId, catId, tab){
  if(state.selectedId !== draftId) return;
  if(isSheetEditFocused_()) return;
  var content = getDraftContent_(draftId);
  if(!content) return;
  var ov = document.getElementById('detail-overlay');
  if(!ov || !ov.classList.contains('open')) return;
  state.selectedCatId = catId;
  if(tab) state.activeTab = tab;
  if(tab) setOpenDetailHash_(draftId, catId, tab);
  renderSheetContent(content);
}

function showInstaContentWhenReady_(draftId, catId){
  var content = getDraftContent_(draftId);
  if(!content || !instaContentReady_(content)) return;
  delete instaBgByDraft[draftId];
  var ov = document.getElementById('detail-overlay');
  var sheetOpen = ov && ov.classList.contains('open');
  if(sheetOpen && state.selectedId === draftId && isSheetEditFocused_()) return;
  state.selectedCatId = catId;
  state.activeTab = 'insta';
  setOpenDetailHash_(draftId, catId, 'insta');
  if(sheetOpen && state.selectedId === draftId){
    renderSheetContent(content);
    return;
  }
  if(state.selectedId === draftId){
    openDetail(draftId, catId, 'insta');
  }
}

function onReturnFromBackgroundForInsta_(){
  var keys = Object.keys(instaBgDoneWhileHidden_);
  if(keys.length){
    keys.forEach(function(did){
      var topic = instaBgDoneWhileHidden_[did];
      var catId = getCatIdFromDraftId_(did);
      delete instaBgDoneWhileHidden_[did];
      showInstaContentWhenReady_(did, catId);
      if(typeof setAppToast === 'function'){
        setAppToast('인스타 캡션 준비됐어요.\n«' + (topic || '') + '»', { duration: 6500, variant: 'ok' });
      }
    });
  }
  var tKeys = Object.keys(threadsBgDoneWhileHidden_);
  if(tKeys.length){
    tKeys.forEach(function(did){
      var topic = threadsBgDoneWhileHidden_[did];
      var catId = getCatIdFromDraftId_(did);
      delete threadsBgDoneWhileHidden_[did];
      showThreadsContentWhenReady_(did, catId);
      if(typeof setAppToast === 'function'){
        setAppToast('쓰레드 글 준비됐어요.\n«' + (topic || '') + '»', { duration: 6500, variant: 'ok' });
      }
    });
  }
  if(Object.keys(instaBgByDraft).length || Object.keys(threadsBgByDraft).length){
    updateGenIndicator();
  }
  renderTabs();
  renderMain();
}

function enqueueInstaFromBlog_(draftId, catId, topic, blog, opts){
  opts = opts || {};
  var retryCount = opts.retryCount || 0;
  if(instaBgByDraft[draftId]) return;
  if(!state.apiKey) return;
  var startedMs = Date.now();
  var endMs = startedMs + INSTA_BG_ESTIMATE_MS;
  instaBgByDraft[draftId] = { startedMs: startedMs, endMs: endMs, topic: topic || '', catId: catId };
  beginGenIndicator();
  var blogSnapshot = JSON.parse(JSON.stringify(blog || {}));
  var label = String(topic || '인스타');
  if(label.length > 34) label = label.slice(0, 34) + '…';
  genActiveJob = { topic: label, endMs: endMs, kind: 'insta' };
  updateGenIndicator();
  var pendingContent = getDraftContent_(draftId);
  if(pendingContent){
    setInstaPendingMeta_(pendingContent, draftId, catId, topic, startedMs, endMs);
    persistDraftContent_(draftId, pendingContent);
    if(state.selectedId === draftId){
      var ovPending = document.getElementById('detail-overlay');
      if(ovPending && ovPending.classList.contains('open')){
        renderSheetContent(pendingContent);
      }
    }
  }

  (async function(){
    try {
      var insta = await generateInstaFromBlog_(catId, blogSnapshot, topic);
      var content = getDraftContent_(draftId);
      if(content){
        content.insta = insta;
        clearInstaPendingMeta_(content);
        persistDraftContent_(draftId, content);
      }
      delete instaBgByDraft[draftId];
      renderTabs();
      renderMain();
      showInstaContentWhenReady_(draftId, catId);
      refreshSheetIfViewingDraft_(draftId, catId, 'insta');
      tryNotifyInstaReady_(topic, draftId, catId, true);
      if(document.hidden){
        instaBgDoneWhileHidden_[draftId] = topic || '';
      } else {
        setAppToast('인스타 캡션 준비됐어요.\n«' + (topic || '') + '»', { duration: 6500, variant: 'ok' });
      }
    } catch(err){
      console.warn('[인스타 백그라운드]', err);
      var msg = (err && err.message) ? err.message : String(err);
      var retryable = /응답 시간이|Failed to fetch|NetworkError|Load failed|network/i.test(msg);
      var shouldRetry = !opts.resume && retryCount < 1 && retryable;
      var failContent = getDraftContent_(draftId);
      if(failContent){
        if(document.hidden || shouldRetry){
          var retryStartMs = Date.now();
          setInstaPendingMeta_(failContent, draftId, catId, topic, retryStartMs, retryStartMs + INSTA_BG_ESTIMATE_MS);
        } else {
          clearInstaPendingMeta_(failContent);
        }
        persistDraftContent_(draftId, failContent);
        if(state.selectedId === draftId){
          var ovFail = document.getElementById('detail-overlay');
          if(ovFail && ovFail.classList.contains('open')){
            renderSheetContent(failContent);
          }
        }
      }
      if(!shouldRetry && !document.hidden){
        tryNotifyInstaReady_(topic, draftId, catId, false, msg);
      }
      if(shouldRetry){
        setTimeout(function(){
          enqueueInstaFromBlog_(draftId, catId, topic, blogSnapshot, { resume: true, retryCount: retryCount + 1 });
        }, 1200);
        if(!document.hidden){
          setAppToast('인스타 캡션 생성이 끊겨 다시 시도하고 있어요.', { duration: 5000, variant: 'ok' });
        }
      } else if(!document.hidden){
        setAppToast((opts.resume ? '중단됐던 인스타 캡션 재시도가 실패했어요.\n' : '인스타 캡션 생성에 실패했어요.\n') + msg, { duration: 9000, variant: 'err' });
      }
    } finally {
      delete instaBgByDraft[draftId];
      genActiveJob = null;
      endGenIndicator();
    }
  })();
}

function reconcileInstaPendingJobs_(reason){
  if(!state.apiKey || genActiveJob || genPendingCount > 0) return false;
  var now = Date.now();
  var candidates = [];
  (CATEGORIES || []).forEach(function(cat){
    (cat.drafts || []).forEach(function(d){
      var content = getDraftContent_(d.id);
      if(!content || !content.instaPending || content.insta || !content.blog || instaBgByDraft[d.id]) return;
      var startedMs = parseInt(content.instaPendingStartedAt, 10) || 0;
      if(startedMs && now - startedMs > INSTA_PENDING_RESTART_WINDOW_MS){
        clearInstaPendingMeta_(content);
        persistDraftContent_(d.id, content);
        return;
      }
      candidates.push({
        draftId: d.id,
        catId: cat.id,
        topic: d.topic || content.instaPendingTopic || '',
        blog: content.blog,
        startedMs: startedMs
      });
    });
  });
  if(!candidates.length) return false;
  candidates.sort(function(a, b){
    if(a.draftId === state.selectedId) return -1;
    if(b.draftId === state.selectedId) return 1;
    return (b.startedMs || 0) - (a.startedMs || 0);
  });
  var job = candidates[0];
  enqueueInstaFromBlog_(job.draftId, job.catId, job.topic, job.blog, { resume: true });
  if(state.selectedId === job.draftId){
    state.selectedCatId = job.catId;
    state.activeTab = 'insta';
    setOpenDetailHash_(job.draftId, job.catId, 'insta');
    var content = getDraftContent_(job.draftId);
    var ov = document.getElementById('detail-overlay');
    if(content && ov && ov.classList.contains('open')) renderSheetContent(content);
  }
  if(reason && reason !== 'load' && typeof setAppToast === 'function'){
    setAppToast('중단됐던 인스타 캡션 생성을 다시 이어서 시작했어요.', { duration: 4500, variant: 'ok' });
  }
  return true;
}


// planner-detail-threads.js — 브랜딩 플래너 detail
var threadsBgByDraft = {};
var threadsBgDoneWhileHidden_ = {};
const THREADS_BG_ESTIMATE_MS = 40000;
const THREADS_BG_TIMEOUT_MS = 90000;
const THREADS_PENDING_RESTART_WINDOW_MS = 30 * 60 * 1000;

function getThreadsBgJob_(draftId){
  var job = threadsBgByDraft[draftId];
  if(!job) return null;
  if(job === true) return { startedMs: Date.now(), endMs: Date.now() + THREADS_BG_ESTIMATE_MS };
  return job;
}
function setThreadsPendingMeta_(content, draftId, catId, topic, startedMs, endMs){
  if(!content) return;
  content.threadsPending = true;
  content.threadsPendingStartedAt = startedMs;
  content.threadsPendingEndMs = endMs;
  content.threadsPendingTopic = topic || '';
  content.threadsPendingCatId = catId;
}
function clearThreadsPendingMeta_(content){
  if(!content) return;
  delete content.threadsPending;
  delete content.threadsPendingStartedAt;
  delete content.threadsPendingEndMs;
  delete content.threadsPendingTopic;
  delete content.threadsPendingCatId;
}
function getThreadsPendingEndMs_(content, draftId){
  var job = getThreadsBgJob_(draftId);
  if(job && job.endMs) return job.endMs;
  var endMs = parseInt(content && content.threadsPendingEndMs, 10);
  if(endMs) return endMs;
  var startedMs = parseInt(content && content.threadsPendingStartedAt, 10);
  return startedMs ? startedMs + THREADS_BG_ESTIMATE_MS : Date.now() + THREADS_BG_ESTIMATE_MS;
}
function getThreadsPendingCountdownText_(content, draftId){
  var activeJob = !!getThreadsBgJob_(draftId);
  var leftSec = (getThreadsPendingEndMs_(content, draftId) - Date.now()) / 1000;
  if(leftSec > 0) return '예상 남은 시간 약 ' + formatRoughCountdown(leftSec);
  if(activeJob) return '예상 시간을 지나 마무리 중이에요';
  return '브라우저 복귀 후 생성 상태를 다시 확인하고 있어요';
}
function buildThreadsPendingBox_(content, draftId){
  var endMs = getThreadsPendingEndMs_(content, draftId);
  return '<div class="sheet-insta-pending">' +
    '<strong>쓰레드 글을 만들고 있어요…</strong><br>' +
    '<span class="sheet-insta-pending-countdown" id="threads-pending-countdown" data-end-ms="' + endMs + '">' +
    escapeHtml(getThreadsPendingCountdownText_(content, draftId)) +
    '</span><br>' +
    '블로그 발행 후 인스타·쓰레드 초안을 동시에 만들고 있어요. 완료되면 이 글의 쓰레드 탭으로 바로 보여드려요.</div>';
}
function updateThreadsPendingCountdown_(){
  var el = document.getElementById('threads-pending-countdown');
  if(!el || !state.selectedId) return;
  var content = getDraftContent_(state.selectedId);
  if(!content || !content.threadsPending) return;
  el.textContent = getThreadsPendingCountdownText_(content, state.selectedId);
}
function normalizeThreadsSnsBlock_(raw){
  if(!raw || typeof raw !== 'object') return null;
  var body = String(raw.body != null ? raw.body : '').trim();
  var comment = String(raw.comment != null ? raw.comment : '').trim();
  var legacyText = String(raw.text != null ? raw.text : raw.summary || '').trim();
  if(!body && legacyText) body = legacyText;
  if(!body && !comment) return null;
  return { body: body, comment: comment, text: body };
}
function getThreadsBodyText_(ths){
  if(!ths) return '';
  return String(ths.body != null ? ths.body : ths.text || '').trim();
}
function getThreadsCommentText_(ths){
  if(!ths) return '';
  return String(ths.comment || '').trim();
}
function getThreadsSnsPlainText_(ths){
  return getThreadsBodyText_(ths);
}
function getThreadsFullPasteText_(ths){
  var body = getThreadsBodyText_(ths);
  var comment = getThreadsCommentText_(ths);
  if(!body && !comment) return '';
  var parts = [];
  if(body) parts.push('[본문 · 게시]\n' + body);
  if(comment) parts.push('[댓글 · 재게시]\n' + comment);
  return parts.join('\n\n');
}
function buildInstaSourceText_(ig){
  if(!ig) return '';
  var tags = (ig.hashtags || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
  return (
    '후킹: ' + (ig.hook || '') + '\n\n' +
    '캡션:\n' + getInstaCaptionBodyMerged_(ig) + '\n\n' +
    (tags ? '해시태그: ' + tags : '')
  ).trim();
}
function showThreadsContentWhenReady_(draftId, catId){
  var content = getDraftContent_(draftId);
  if(!content || !threadsContentReady_(content)) return;
  delete threadsBgByDraft[draftId];
  var ov = document.getElementById('detail-overlay');
  var sheetOpen = ov && ov.classList.contains('open');
  if(sheetOpen && state.selectedId === draftId && isSheetEditFocused_()) return;
  state.selectedCatId = catId;
  state.activeTab = 'threads';
  setOpenDetailHash_(draftId, catId, 'threads');
  if(sheetOpen && state.selectedId === draftId){
    renderSheetContent(content);
    return;
  }
  if(state.selectedId === draftId){
    openDetail(draftId, catId, 'threads');
  }
}
function tryNotifyThreadsReady_(topic, draftId, catId, ok, errMsg){
  ok = ok !== false;
  try {
    if(typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
    var title = ok ? '쓰레드 글 준비됐어요' : '쓰레드 글 생성 실패';
    var body = ok ? String(topic || '쓰레드') : String(errMsg || topic || '다시 시도해 주세요');
    var opts = {
      body: body,
      tag: 'ht-threads-' + String(draftId),
      data: { draftId: draftId, catId: catId, tab: 'threads' },
      requireInteraction: !!ok
    };
    var onClick = function(){
      focusPlannerAndOpenDraft_(draftId, catId);
      showThreadsContentWhenReady_(draftId, catId);
    };
    if(document.hidden && navigator.serviceWorker){
      navigator.serviceWorker.ready.then(function(reg){
        return reg.showNotification(title, opts);
      }).catch(function(){
        var n = new Notification(title, opts);
        n.onclick = function(){ n.close(); onClick(); };
      });
      return;
    }
    var n = new Notification(title, opts);
    n.onclick = function(){ n.close(); onClick(); };
  } catch(e){}
}
async function generateThreadsFromBlog_(catId, blog, topic){
  var threadsGuide = getCatPromptForGeneration_(catId, 'threads') || DEFAULT_THREADS_SNS_PROMPT;
  var baseInfo = getBasePrompt();
  var expertScope = isExpertCourseCategory(catId)
    ? '\n- 전문가 과정: 블로그·참고·영상 범위 **밖** 내용 추가 금지. 본문 훅·댓글 해설 모두 블로그 근거 안에서.\n'
    : '';
  var generalHint = isGeneralAudienceCategory(catId)
    ? '\n- 일반인 글: 블로그 **문제 제기→원리 설명**에서 통념 하나를 골라 본문 훅으로, 원리·셀프케어 맥락은 댓글에서.\n'
    : '';
  var prompt = baseInfo + '\n\n' +
    '카테고리: ' + (CATEGORIES[catId] ? CATEGORIES[catId].name : '') + '\n' +
    '주제: "' + (topic || '') + '"\n\n' +
    '[쓰레드 작성 지침]\n' + threadsGuide + expertScope + generalHint + '\n' +
    '아래 **블로그 글**을 인스타처럼 요약하지 말고, **본문(훅)+댓글(해설)** 2단으로 **새로** 작성하세요.\n\n' +
    'JSON만:\n{"threads":{"body":"본문(게시글 — 궁금증·통념 뒤집기 한 줄)","comment":"댓글(재게시용 — 해설·근거·과정·철학)"}}\n\n' +
    '[블로그 원문]\n' + buildBlogSourceText_(blog, catId);

  var text = await callClaudePlanner_(prompt, { maxTokens: 2800, timeoutMs: THREADS_BG_TIMEOUT_MS });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var parsed = JSON.parse(raw);
  var block = parsed.threads || parsed;
  return normalizeThreadsSnsBlock_(block);
}
function enqueueThreadsFromBlog_(draftId, catId, topic, blog, opts){
  opts = opts || {};
  var retryCount = opts.retryCount || 0;
  if(threadsBgByDraft[draftId]) return;
  var existing = getDraftContent_(draftId);
  if(hasThreadsDraftText_(existing, draftId) && !opts.force) return;
  if(!state.apiKey) return;
  var startedMs = Date.now();
  var endMs = startedMs + THREADS_BG_ESTIMATE_MS;
  threadsBgByDraft[draftId] = { startedMs: startedMs, endMs: endMs, topic: topic || '', catId: catId };
  beginGenIndicator();
  var blogSnapshot = JSON.parse(JSON.stringify(blog || {}));
  var label = String(topic || '쓰레드');
  if(label.length > 34) label = label.slice(0, 34) + '…';
  genActiveJob = { topic: label, endMs: endMs, kind: 'threads' };
  updateGenIndicator();
  var pendingContent = getDraftContent_(draftId);
  if(pendingContent){
    setThreadsPendingMeta_(pendingContent, draftId, catId, topic, startedMs, endMs);
    persistDraftContent_(draftId, pendingContent);
    if(state.selectedId === draftId){
      var ovPending = document.getElementById('detail-overlay');
      if(ovPending && ovPending.classList.contains('open')){
        renderSheetContent(pendingContent);
      }
    }
  }

  (async function(){
    try {
      var threads = await generateThreadsFromBlog_(catId, blogSnapshot, topic);
      var content = getDraftContent_(draftId);
      if(content){
        content.threads = threads;
        clearThreadsPendingMeta_(content);
        persistDraftContent_(draftId, content);
      }
      delete threadsBgByDraft[draftId];
      renderTabs();
      renderMain();
      showThreadsContentWhenReady_(draftId, catId);
      refreshSheetIfViewingDraft_(draftId, catId, 'threads');
      tryNotifyThreadsReady_(topic, draftId, catId, true);
      if(document.hidden){
        threadsBgDoneWhileHidden_[draftId] = topic || '';
      } else {
        setAppToast('쓰레드 글 준비됐어요.\n«' + (topic || '') + '»', { duration: 6500, variant: 'ok' });
      }
    } catch(err){
      console.warn('[쓰레드 백그라운드]', err);
      var msg = (err && err.message) ? err.message : String(err);
      var retryable = /응답 시간이|Failed to fetch|NetworkError|Load failed|network/i.test(msg);
      var shouldRetry = !opts.resume && retryCount < 1 && retryable;
      var failContent = getDraftContent_(draftId);
      if(failContent){
        if(document.hidden || shouldRetry){
          var retryStartMs = Date.now();
          setThreadsPendingMeta_(failContent, draftId, catId, topic, retryStartMs, retryStartMs + THREADS_BG_ESTIMATE_MS);
        } else {
          clearThreadsPendingMeta_(failContent);
        }
        persistDraftContent_(draftId, failContent);
        if(state.selectedId === draftId){
          var ovFail = document.getElementById('detail-overlay');
          if(ovFail && ovFail.classList.contains('open')){
            renderSheetContent(failContent);
          }
        }
      }
      if(!shouldRetry && !document.hidden){
        tryNotifyThreadsReady_(topic, draftId, catId, false, msg);
      }
      if(shouldRetry){
        setTimeout(function(){
          enqueueThreadsFromBlog_(draftId, catId, topic, blogSnapshot, { resume: true, retryCount: retryCount + 1 });
        }, 1200);
        if(!document.hidden){
          setAppToast('쓰레드 글 생성이 끊겨 다시 시도하고 있어요.', { duration: 5000, variant: 'ok' });
        }
      } else if(!document.hidden){
        setAppToast((opts.resume ? '중단됐던 쓰레드 생성 재시도가 실패했어요.\n' : '쓰레드 글 생성에 실패했어요.\n') + msg, { duration: 9000, variant: 'err' });
      }
    } finally {
      delete threadsBgByDraft[draftId];
      genActiveJob = null;
      endGenIndicator();
    }
  })();
}
function reconcileThreadsPendingJobs_(reason){
  if(!state.apiKey || genActiveJob || genPendingCount > 0) return false;
  var now = Date.now();
  var candidates = [];
  (CATEGORIES || []).forEach(function(cat){
    if(!isBlogInstaCategory(cat.id)) return;
    (cat.drafts || []).forEach(function(d){
      var content = getDraftContent_(d.id);
      if(!content || !content.threadsPending || hasThreadsDraftText_(content, d.id) || !content.blog || threadsBgByDraft[d.id]) return;
      var startedMs = parseInt(content.threadsPendingStartedAt, 10) || 0;
      if(startedMs && now - startedMs > THREADS_PENDING_RESTART_WINDOW_MS){
        clearThreadsPendingMeta_(content);
        persistDraftContent_(d.id, content);
        return;
      }
      candidates.push({
        draftId: d.id,
        catId: cat.id,
        topic: d.topic || content.threadsPendingTopic || '',
        blog: content.blog,
        startedMs: startedMs
      });
    });
  });
  if(!candidates.length) return false;
  candidates.sort(function(a, b){
    if(a.draftId === state.selectedId) return -1;
    if(b.draftId === state.selectedId) return 1;
    return (b.startedMs || 0) - (a.startedMs || 0);
  });
  var job = candidates[0];
  enqueueThreadsFromBlog_(job.draftId, job.catId, job.topic, job.blog, { resume: true });
  if(state.selectedId === job.draftId){
    state.selectedCatId = job.catId;
    state.activeTab = 'threads';
    setOpenDetailHash_(job.draftId, job.catId, 'threads');
    var content = getDraftContent_(job.draftId);
    var ov = document.getElementById('detail-overlay');
    if(content && ov && ov.classList.contains('open')) renderSheetContent(content);
  }
  if(reason && reason !== 'load' && typeof setAppToast === 'function'){
    setAppToast('중단됐던 쓰레드 글 생성을 다시 이어서 시작했어요.', { duration: 4500, variant: 'ok' });
  }
  return true;
}


// planner-detail-actions.js — 브랜딩 플래너 detail
function copyAndOpenThreads_(text){
  var open = function(){ openExternalThreads(); };
  if(!text){ open(); return; }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(open).catch(open);
  } else {
    open();
  }
}

function copyAndOpenApartner_(text){
  var open = function(){ openApartnerApp(); };
  if(!text){ open(); return; }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(open).catch(open);
  } else {
    open();
  }
}

window.openExternalInstagram = function(){
  const u = EXT_INSTAGRAM_WEB;
  const user = getInstagramUsernameFromExt_();
  if(!isPhoneOrTablet()){
    window.open(u, '_blank', 'noopener,noreferrer');
    return;
  }
  if(isAndroidDevice()){
    const profileU = 'https://www.instagram.com/' + user.replace(/^@/, '') + '/';
    window.location.href =
      'intent://www.instagram.com/' +
      user.replace(/^@/, '') +
      '/#Intent;scheme=https;package=com.instagram.android;S.browser_fallback_url=' +
      encodeURIComponent(profileU) +
      ';end';
    setTimeout(function(){
      if(document.hidden) return;
      window.open(u, '_blank', 'noopener,noreferrer');
    }, 900);
    return;
  }
  window.location.href = 'instagram://user?username=' + encodeURIComponent(user);
  setTimeout(function(){
    if(document.hidden) return;
    window.location.href = u;
  }, 450);
  setTimeout(function(){
    if(document.hidden) return;
    window.open(u, '_blank', 'noopener,noreferrer');
  }, 1100);
};

window.openExternalThreads = function(){
  const u = EXT_THREADS;
  const uname = getThreadsProfileUsername();
  const threadsNet = 'https://www.threads.net/@' + encodeURIComponent(uname);
  if(!isPhoneOrTablet()){
    window.open(u, '_blank', 'noopener,noreferrer');
    return;
  }
  if(isIOSLikeDevice()){
    window.location.href = 'barcelona://user?username=' + encodeURIComponent(uname);
    setTimeout(function(){
      if(document.hidden) return;
      window.location.href = threadsNet;
    }, 450);
    setTimeout(function(){
      if(document.hidden) return;
      window.open(u, '_blank', 'noopener,noreferrer');
    }, 1100);
    return;
  }
  window.location.href = 'intent:#Intent;action=android.intent.action.VIEW;data=' + encodeURIComponent(u) + ';package=com.instagram.barcelona;S.browser_fallback_url=' + encodeURIComponent(u) + ';end';
  setTimeout(function(){
    if(document.hidden) return;
    window.open(u, '_blank', 'noopener,noreferrer');
  }, 900);
};

window.openApartnerApp = function(){
  if(!isPhoneOrTablet()){
    window.open(APARTNER_WEB, '_blank', 'noopener,noreferrer');
    return;
  }
  window.location.href = 'apartner://';
  setTimeout(function(){
    if(document.hidden) return;
    if(isAndroidDevice()){
      window.open(APARTNER_PLAY_STORE, '_blank', 'noopener,noreferrer');
    } else {
      window.open(APARTNER_IOS_STORE, '_blank', 'noopener,noreferrer');
    }
  }, 900);
};

function wrapLinesForCanvas(ctx, text, maxWidth, maxLines){
  const out = [];
  const t = String(text || '').replace(/\r\n/g, '\n');
  const paragraphs = t.split('\n');
  for(let pi = 0; pi < paragraphs.length; pi++){
    let line = '';
    const para = paragraphs[pi];
    for(let i = 0; i < para.length; i++){
      const ch = para[i];
      const test = line + ch;
      if(ctx.measureText(test).width > maxWidth && line){
        out.push(line);
        line = ch;
      } else {
        line = test;
      }
    }
    if(line) out.push(line);
    if(pi < paragraphs.length - 1) out.push('');
  }
  let lines = out;
  if(maxLines && lines.length > maxLines){
    lines = lines.slice(0, maxLines);
    const last = lines[maxLines - 1];
    lines[maxLines - 1] = last.length > 1 ? last.slice(0, -1) + '…' : '…';
  }
  return lines.length ? lines : [''];
}

function fillRoundRectCanvas(ctx, x, y, w, h, r){
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
  ctx.fill();
}

function drawCarouselSlideOnCanvas(ctx, W, H, slide){
  ctx.fillStyle = '#FAFAF9';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#E8E8E8';
  ctx.lineWidth = 3;
  ctx.strokeRect(1.5, 1.5, W - 3, H - 3);
  const pad = 56;
  const badgeText = 'S' + (slide.slide != null ? slide.slide : '');
  ctx.font = '800 30px "Noto Sans KR",sans-serif';
  const bw = Math.min(ctx.measureText(badgeText).width + 40, W - pad * 2);
  ctx.fillStyle = '#F59E0B';
  fillRoundRectCanvas(ctx, pad, pad, bw, 48, 10);
  ctx.fillStyle = '#fff';
  ctx.fillText(badgeText, pad + 20, pad + 33);
  ctx.fillStyle = '#111827';
  ctx.font = '800 42px "Noto Sans KR",sans-serif';
  const titleLines = wrapLinesForCanvas(ctx, slide.title || '', W - pad * 2, 4);
  let y = pad + 120;
  titleLines.forEach(function(line){
    ctx.fillText(line, pad, y);
    y += 52;
  });
  ctx.fillStyle = '#4B5563';
  ctx.font = '500 30px "Noto Sans KR",sans-serif';
  const bodyMaxY = H - 52;
  const bodyLines = wrapLinesForCanvas(ctx, slide.content || '', W - pad * 2, 0);
  const lh = 44;
  for(let bi = 0; bi < bodyLines.length; bi++){
    if(y + lh > bodyMaxY){
      ctx.fillText('…', pad, y);
      break;
    }
    ctx.fillText(bodyLines[bi], pad, y);
    y += lh;
  }
  ctx.fillStyle = '#9CA3AF';
  ctx.font = '500 22px "Noto Sans KR",sans-serif';
  ctx.fillText('미카닥 박준규 · @dr.park_dc.pt', pad, H - 28);
}

window.downloadInstaCarouselPngs = async function(btn){
  const content = state.published[state.selectedId]?.content || state.generatedOnly[state.selectedId];
  const ig = content && content.insta;
  const list = ig && ig.carousel;
  if(!list || !list.length){
    alert('캐러셀 데이터가 없어요.');
    return;
  }
  if(btn){ btn.disabled = true; btn.textContent = '생성 중…'; }
  try { await document.fonts.ready; } catch(e){}
  const W = 1080;
  const H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  for(let i = 0; i < list.length; i++){
    const slide = list[i];
    drawCarouselSlideOnCanvas(ctx, W, H, slide);
    await new Promise(function(resolve){
      canvas.toBlob(function(blob){
        if(!blob){
          resolve();
          return;
        }
        const a = document.createElement('a');
        const sid = slide.slide != null ? slide.slide : (i + 1);
        a.href = URL.createObjectURL(blob);
        a.download = '캐러셀-S' + sid + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
        setTimeout(resolve, 400);
      }, 'image/png', 0.95);
    });
  }
  if(btn){
    btn.disabled = false;
    btn.textContent = '캐러셀 슬라이드 PNG로 저장 (' + list.length + '장)';
  }
};

function cb(label, innerHTML, copyText){
  return `<div class="cb"><div class="cb-label">${label} <button class="copy-btn" onclick="cp(this,\`${esc(copyText)}\`)">복사</button></div>${innerHTML}</div>`;
}

function sheetEditField_(label, id, value, opts){
  opts = opts || {};
  var rows = opts.rows || 4;
  var cls = 'sheet-edit' + (opts.title ? ' sheet-edit-title' : '');
  var help = opts.help ? '<div class="publish-field-help" style="margin:4px 0 6px;">' + escapeHtml(opts.help) + '</div>' : '';
  var wrapCls = 'cb' + (opts.title ? ' sheet-title-anchor' : '');
  var tools = '';
  if(opts.regen || opts.copy){
    tools = '<span class="sheet-field-tools">';
    if(opts.regen){
      tools += '<button type="button" class="sheet-field-btn sheet-field-regen" onclick="regenSheetField_(\'' + opts.regen + '\', this)">재생성</button>';
    }
    if(opts.copy){
      tools += '<button type="button" class="sheet-field-btn sheet-field-copy" onclick="copySheetField_(\'' + id + '\', this' + (opts.copyHashtags ? ', true' : '') + ')">복사</button>';
    }
    tools += '</span>';
  }
  var oninput = 'autoGrowTextarea_(this)' + (opts.stepPreview ? ';renderSelfCareStepsPreview_(this)' : '');
  var previewAttr = opts.stepPreview ? ' data-selfcare-preview="1"' : '';
  var previewHost = opts.stepPreview ? '<div class="selfcare-steps" data-steps-for="' + id + '"></div>' : '';
  var displayValue = opts.paragraphs ? ensureProseParagraphBreaks_(value) : (value || '');
  return '<div class="' + wrapCls + '"><div class="cb-label">' + escapeHtml(label) + tools + '</div>' + help +
    '<textarea class="' + cls + '" id="' + id + '" rows="' + rows + '"' + previewAttr + ' oninput="' + oninput + '">' + escapeHtml(displayValue) + '</textarea>' + previewHost + '</div>';
}

/**
 * 긴 산문 가독성: 문단(문장) 사이에 빈 줄.
 * 이미 문단 구분·목록·셀프케어(👉)가 있으면 손대지 않음.
 */
function ensureProseParagraphBreaks_(text){
  var t = String(text || '').replace(/\r\n/g, '\n').trim();
  if(!t) return '';
  if(/(^|\n)\s*👉/.test(t)) return t.replace(/\n{3,}/g, '\n\n');
  if(/(^|\n)\s*(?:[-•*]|\d+[.)])\s/.test(t)) return t.replace(/\n{3,}/g, '\n\n');
  if(/\n[ \t]*\n/.test(t)) return t.replace(/\n{3,}/g, '\n\n');
  if(t.indexOf('\n') !== -1){
    var lines = t.split(/\n+/).map(function(l){ return l.trim(); }).filter(Boolean);
    if(lines.length >= 2){
      var avg = lines.reduce(function(s, l){ return s + l.length; }, 0) / lines.length;
      if(avg >= 24) return lines.join('\n\n');
    }
    return t;
  }
  if(t.length < 72) return t;
  var sentences = splitProseSentences_(t);
  if(sentences.length < 2) return t;
  return sentences.join('\n\n');
}
function splitProseSentences_(text){
  var t = String(text || '').trim();
  if(!t) return [];
  var parts = [];
  var buf = '';
  for(var i = 0; i < t.length; i++){
    var ch = t.charAt(i);
    buf += ch;
    var end = /[.!?。？！]/.test(ch);
    var next = t.charAt(i + 1);
    if(end && (!next || /\s/.test(next))){
      var s = buf.trim();
      if(s) parts.push(s);
      buf = '';
      while(i + 1 < t.length && /\s/.test(t.charAt(i + 1))) i++;
    }
  }
  var rest = buf.trim();
  if(rest) parts.push(rest);
  return parts.length ? parts : [t];
}

/* ── 구분 박스: 박스별 복사·재생성 + 상단 전체 복사 + 셀프 케어 단계 미리보기 ── */
function sheetFullCopyBar_(){
  return '<div class="sheet-fullcopy-bar">' +
    '<button type="button" class="sheet-fullcopy-btn" onclick="copyWholeTab_(this)">전체 복사</button>' +
    '<span class="sheet-fullcopy-hint">구분된 내용을 한 줄씩 띄워 복사해요</span></div>';
}

window.copySheetField_ = function(id, btn, isHashtags){
  var el = document.getElementById(id);
  if(!el) return;
  var text = String(el.value || '');
  if(isHashtags){
    text = text.split(/[\s,#]+/).map(function(t){ return t.replace(/^#/, '').trim(); })
      .filter(Boolean).map(function(t){ return '#' + t; }).join(' ');
  }
  text = text.trim();
  if(!text){ setAppToast('복사할 내용이 없어요.', { duration: 2600, variant: 'err' }); return; }
  navigator.clipboard.writeText(text);
  var label = btn ? btn.textContent : '';
  if(btn){
    btn.textContent = '복사됨'; btn.classList.add('copied');
    setTimeout(function(){ btn.textContent = label || '복사'; btn.classList.remove('copied'); }, 1500);
  }
};

window.copyWholeTab_ = function(btn){
  var draftId = state.selectedId;
  var content = getDraftContent_(draftId);
  if(!content){ setAppToast('복사할 내용이 없어요.', { duration: 3000, variant: 'err' }); return; }
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var tab = state.activeTab;
  var clone = JSON.parse(JSON.stringify(content));
  applySheetEditsForTab_(clone, tab);
  var text = '';
  if(tab === 'blog') text = buildBlogPasteTextForPublish_(clone.blog, catId);
  else if(tab === 'community') text = formatCommunityPostText(clone.community);
  else if(tab === 'insta') text = getInstaFullPasteText_(clone.insta);
  else if(tab === 'threads') text = getThreadsFullPasteText_(clone.threads);
  else if(tab === 'thread') text = getThreadPlainText(normalizeThreadBlock(clone.thread));
  else text = getTabCopyText(tab, clone);
  text = String(text || '').trim();
  if(!text){ setAppToast('복사할 내용이 없어요.', { duration: 3000, variant: 'err' }); return; }
  navigator.clipboard.writeText(text);
  var label = btn ? btn.textContent : '';
  if(btn){
    btn.textContent = '복사됨'; btn.classList.add('copied');
    setTimeout(function(){ btn.textContent = label || '전체 복사'; btn.classList.remove('copied'); }, 1600);
  }
};

var SHEET_FIELD_META_ = {
  'blog.title':       { block: 'blog', label: '제목', instr: '증상명과 지역/브랜드 키워드가 자연스럽게 들어간, 검색·AI 인용에 강한 제목 한 줄.' },
  'blog.problem':     { block: 'blog', label: '문제 제기', instr: '공감 질문으로 시작해 "일상에서 바로 풀 수 있다"는 한 줄까지. 독자의 상황을 구체적으로 그려 주세요.' },
  'blog.selfCare':    { block: 'blog', label: '셀프 케어', step: true, instr: '집에서 따라 할 수 있는 셀프 케어를 단계별로. 각 단계는 새 줄에서 "👉"로 시작하고 동작·초/회/세트를 앞쪽에 명시하세요. 단계와 단계 사이에는 빈 줄을 넣으세요.' },
  'blog.explanation': { block: 'blog', label: '원리 설명', instr: '왜 그런지 해부학적·기능적 원리를 쉬운 말로, 단정적인 인과 문장으로 설명하세요.' },
  'blog.cta':         { block: 'blog', label: '마무리 CTA', instr: '전문가 상담·프로필 페이지로 부드럽게 안내하는 마무리 2~3문장.' },
  'blog.hashtags':    { block: 'blog', label: '해시태그', array: true, instr: '증상·지역·브랜드와 관련된 해시태그 5~8개.' },
  'blog.hook':        { block: 'blog', label: '영상·사진 맥락', instr: '이번 영상·사진에서 다룬 장면·상황을 짧게 정리하세요.' },
  'blog.outline':     { block: 'blog', label: '시연·핵심 포인트', arrayLines: true, instr: '손 위치·동작·주의사항 등 핵심 포인트를 한 줄에 하나씩.' },
  'blog.draft':       { block: 'blog', label: '원리 설명(본문)', instr: '본문의 중심. 왜 이렇게 하는지 짧은 메커니즘을 포함해 설명하세요.' },
  'community.title':       { block: 'community', label: '제목', instr: '입주민이 클릭하고 싶은, 증상·상황이 드러나는 제목 한 줄.' },
  'community.problem':     { block: 'community', label: '문제 제기', instr: '공감 질문 → 일상에서 바로 풀 수 있다는 한 줄까지, 자연스러운 문장으로.' },
  'community.selfCare':    { block: 'community', label: '셀프 케어', step: true, instr: '집에서 따라 할 수 있는 셀프 케어를 단계별로. 각 단계는 새 줄에서 "👉"로 시작하고 동작·초/회/세트를 앞쪽에 명시하세요. 단계 사이에는 빈 줄을 넣으세요.' },
  'community.explanation': { block: 'community', label: '원리 설명', instr: '왜 그런지 원리를 쉬운 말로, 단정적인 인과 문장으로 설명하세요.' },
  'insta.hook':     { block: 'insta', label: '첫 줄 후킹', instr: '스크롤을 멈추게 하는 인스타 첫 줄 후킹 한 문장.' },
  'insta.caption':  { block: 'insta', label: '캡션', instr: '인스타 톤의 짧은 캡션 본문. 문단은 짧게, 이모지는 절제해서.' },
  'insta.hashtags': { block: 'insta', label: '해시태그', array: true, instr: '증상·지역·브랜드와 관련된 해시태그 8~12개.' },
  'threads.body':    { block: 'threads', label: '본문 (게시글)', instr: '통념 뒤집기·궁금증 훅 한 줄(1~3문장). 교과서 vs 전문가, 쉬운 비유. 해설·근거는 쓰지 마세요.' },
  'threads.comment': { block: 'threads', label: '댓글 (재게시)', instr: '본문의 물음·반전에 대한 해설·근거·과정·철학. 블로그 원리 설명 축을 압축. 본문과 같은 문장 반복 금지.' },
  'thread.topicTitle': { block: 'thread', label: '오늘의 한 줄', threadNorm: true, instr: '담백한 관찰·장면 한 줄. 짧은 감탄 가능. 따뜻한 위로·과한 감성 금지.' },
  'thread.summary':    { block: 'thread', label: '본문 (일상 나눔)', threadNorm: true, instr: '관찰 → 핵심 한 가지 → (선택) 짧은 감탄·철학 1문장. 담백·구어체. 과한 감성·설교 금지.' }
};

function fieldValueToString_(meta, block){
  if(!block) return '';
  if(meta.array) return (block[fieldKeyOf_(meta)] || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
  if(meta.arrayLines) return (block[fieldKeyOf_(meta)] || []).join('\n');
  var key = fieldKeyOf_(meta);
  if(meta.block === 'threads' && key === 'body') return getThreadsBodyText_(block);
  if(meta.block === 'threads' && key === 'comment') return getThreadsCommentText_(block);
  return String(block[key] || '');
}
function fieldKeyOf_(meta){ return meta.__field; }

function buildSheetFieldReference_(meta, block){
  var lines = [];
  Object.keys(SHEET_FIELD_META_).forEach(function(k){
    var m = SHEET_FIELD_META_[k];
    if(m.block !== meta.block) return;
    var field = k.split('.')[1];
    if(field === meta.__field) return;
    var v = block[field];
    if(m.array) v = (v || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
    else if(m.arrayLines) v = (v || []).join('\n');
    else v = String(v || '');
    v = String(v).trim();
    if(v) lines.push('■ ' + m.label + ':\n' + v);
  });
  return lines.join('\n\n') || '(없음)';
}

window.regenSheetField_ = async function(key, btn){
  var meta = SHEET_FIELD_META_[key];
  if(!meta) return;
  meta.__field = key.split('.')[1];
  if(!state.apiKey){ openApiModal(); return; }
  var draftId = state.selectedId;
  if(!draftId){ setAppToast('먼저 초안 카드를 선택해 주세요.', { duration: 3000, variant: 'err' }); return; }
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var content = getDraftContent_(draftId);
  if(!content){ setAppToast('먼저 초안을 생성해 주세요.', { duration: 3500, variant: 'err' }); return; }
  applySheetEditsForTab_(content, state.activeTab);
  var block = content[meta.block] || (content[meta.block] = {});
  var cat = CATEGORIES[catId];
  var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });

  var brand = buildBrandContextForPrompt_(catId, draft);
  var brief = draft ? buildDraftBriefPromptLines_(draft, catId) : '';
  var currentValue = fieldValueToString_(meta, block).trim();
  var reference = buildSheetFieldReference_(meta, block);
  var sourceRef = '';
  if(meta.block === 'insta' && content.blog){
    var blogSrc = buildBlogPasteTextForPublish_(content.blog, catId);
    if(blogSrc) sourceRef = '[원본 블로그 글 — 이 내용을 인스타 톤으로 옮기는 것이 목적]\n' + blogSrc;
  } else if(meta.block === 'threads' && content.blog){
    var blogSrc = buildBlogSourceText_(content.blog, catId);
    if(blogSrc) sourceRef = '[원본 블로그 글 — 본문 훅+댓글 해설로 새로 쓰는 것이 목적. 인스타 요약 금지]\n' + blogSrc;
  }
  var outputGuide = meta.array
    ? 'JSON만 출력하세요: {"value": ["태그1", "태그2", ...]}  (# 없이 단어만)'
    : meta.arrayLines
      ? 'JSON만 출력하세요: {"value": ["줄1", "줄2", ...]}'
      : 'JSON만 출력하세요: {"value": "다시 쓴 내용"}';
  var prompt = [
    brand, '',
    draft ? '주제: ' + draft.topic : '',
    brief, '',
    sourceRef ? sourceRef + '\n' : '',
    '[현재 글의 다른 부분 — 참고용, 여기는 수정하지 마세요]',
    reference, '',
    '[다시 쓸 부분: 「' + meta.label + '」]',
    '작성 지침: ' + meta.instr,
    '사용자가 방금 수정한 현재 「' + meta.label + '」 내용:',
    (currentValue || '(비어 있음)'), '',
    '위 참고 내용·주제·글 작성 핵심과 자연스럽게 이어지도록 「' + meta.label + '」만 다시 써 주세요. 사용자가 이미 적어 둔 방향·정보·표현은 최대한 살려 다듬는 방향으로 개선하세요. 다른 부분은 절대 출력하지 마세요.',
    outputGuide
  ].filter(function(l){ return l != null; }).join('\n');

  var origHtml = btn ? btn.innerHTML : '';
  if(btn){
    startButtonCountdown_(btn, { estimateSec: SHEET_FIELD_REGEN_ESTIMATE_SEC, busyLabel: '재생성 중', idleText: '재생성' });
  }
  try {
    var text = await callClaudePlanner_(prompt, { maxTokens: 1800 });
    var obj = parsePlannerAiJsonObject_(text);
    var val = obj.value;
    if(meta.array){
      var arr = Array.isArray(val) ? val : String(val || '').split(/[\s,#]+/);
      block[meta.__field] = arr.map(function(t){ return String(t).replace(/^#/, '').trim(); }).filter(Boolean);
    } else if(meta.arrayLines){
      var arr2 = Array.isArray(val) ? val : String(val || '').split('\n');
      block[meta.__field] = arr2.map(function(s){ return String(s).replace(/^\d+[.)]\s*/, '').trim(); }).filter(Boolean);
    } else {
      block[meta.__field] = String(val || '').trim();
    }
    content[meta.block] = block;
    if(meta.block === 'threads' && meta.__field === 'body') block.text = block.body || '';
    if(meta.threadNorm){ content.thread = normalizeThreadBlock(block) || block; }
    if(key === 'blog.title' || key === 'community.title'){
      syncThumbnailOverlayHook_(content, catId);
    }
    persistDraftContent_(draftId, content);
    renderSheetContent(content);
    setAppToast('「' + meta.label + '」을 다시 생성했어요.', { duration: 3000, variant: 'ok' });
  } catch(e){
    setAppToast('재생성에 실패했어요: ' + ((e && e.message) || String(e)), { duration: 6000, variant: 'err' });
    if(btn) stopButtonCountdown_(btn);
  } finally {
    if(btn && document.body.contains(btn)) stopButtonCountdown_(btn);
  }
};

function parseSelfCareSteps_(text){
  var t = String(text || '').trim();
  if(!t) return [];
  var blocks = t.split(/\n\s*\n/).map(function(s){ return s.trim(); }).filter(Boolean);
  if(blocks.length >= 2) return blocks;
  var markerRe = /^(👉|✅|▶|Step\s*\d+|\d+[.)]|[①②③④⑤⑥⑦⑧⑨⑩]|[-·•])/i;
  var steps = [];
  var cur = '';
  t.split('\n').forEach(function(ln){
    var isMarker = markerRe.test(ln.trim());
    if(isMarker && cur.trim()){ steps.push(cur.trim()); cur = ln; }
    else if(isMarker){ cur = ln; }
    else { cur += (cur ? '\n' : '') + ln; }
  });
  if(cur.trim()) steps.push(cur.trim());
  return steps.length ? steps : [t];
}

function renderSelfCareStepsPreview_(ta){
  if(!ta) return;
  var host = document.querySelector('[data-steps-for="' + ta.id + '"]');
  if(!host) return;
  var raw = String(ta.value || '').trim();
  var steps = parseSelfCareSteps_(raw);
  if(!raw || steps.length <= 1){ host.innerHTML = ''; return; }
  var stripRe = /^(👉|✅|▶|Step\s*\d+[.:)]?|\d+[.)]|[①②③④⑤⑥⑦⑧⑨⑩]|[-·•])\s*/i;
  host.innerHTML = '<div class="selfcare-steps-title">따라하기 미리보기</div>' +
    steps.map(function(s, i){
      var body = escapeHtml(s.replace(stripRe, '')).replace(/\n/g, '<br/>');
      return '<div class="selfcare-step"><span class="selfcare-step-no">' + (i + 1) + '</span>' +
        '<div class="selfcare-step-body">' + body + '</div></div>';
    }).join('');
}

function renderAllSelfCareStepPreviews_(){
  document.querySelectorAll('textarea[data-selfcare-preview="1"]').forEach(function(ta){
    renderSelfCareStepsPreview_(ta);
  });
}

function getDraftContent_(draftId){
  if(!draftId) return null;
  if(state.published[draftId] && state.published[draftId].content) return state.published[draftId].content;
  if(state.generatedOnly[draftId]) return state.generatedOnly[draftId];
  return null;
}

function persistDraftContent_(draftId, content){
  if(!state.published[draftId]) state.published[draftId] = {};
  state.published[draftId].content = content;
  state.generatedOnly[draftId] = content;
  save({ driveImmediate: true, gasImmediate: true });
}

function readSheetBlogEdits_(){
  function v(id){ var el = document.getElementById(id); return el ? String(el.value || '').trim() : ''; }
  if(!document.getElementById('sheet-blog-title')) return null;
  var tags = v('sheet-blog-hashtags').split(/[\s,#]+/).map(function(t){ return t.replace(/^#/, '').trim(); }).filter(Boolean);
  if(document.getElementById('sheet-blog-problem')){
    return {
      title: v('sheet-blog-title'),
      problem: v('sheet-blog-problem'),
      selfCare: v('sheet-blog-selfcare'),
      explanation: v('sheet-blog-explanation'),
      cta: v('sheet-blog-cta'),
      hashtags: tags
    };
  }
  var outline = v('sheet-blog-outline').split('\n').map(function(s){ return s.replace(/^\d+\.\s*/, '').trim(); }).filter(Boolean);
  return {
    title: v('sheet-blog-title'),
    hook: v('sheet-blog-hook'),
    outline: outline,
    draft: v('sheet-blog-draft'),
    cta: v('sheet-blog-cta'),
    hashtags: tags
  };
}

function applySheetBlogEdits_(content){
  if(!content || !content.blog) return content;
  var edits = readSheetBlogEdits_();
  if(!edits) return content;
  var prevTitle = String(content.blog.title || '').trim();
  Object.assign(content.blog, edits);
  var nextTitle = String(content.blog.title || '').trim();
  if(nextTitle && nextTitle !== prevTitle){
    var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    syncThumbnailOverlayHook_(content, catId);
  }
  return content;
}

function readSheetInstaEdits_(){
  if(!document.getElementById('sheet-insta-hook')) return null;
  function v(id){ var el = document.getElementById(id); return el ? String(el.value || '').trim() : ''; }
  var tags = v('sheet-insta-hashtags').split(/[\s,#]+/).map(function(t){ return t.replace(/^#/, '').trim(); }).filter(Boolean);
  return {
    hook: v('sheet-insta-hook'),
    caption: v('sheet-insta-caption'),
    carousel: [],
    hashtags: tags
  };
}

function applySheetInstaEdits_(content){
  if(!content) return content;
  var edits = readSheetInstaEdits_();
  if(!edits) return content;
  if(!content.insta) content.insta = { hook: '', caption: '', carousel: [], hashtags: [] };
  Object.assign(content.insta, edits);
  content.insta.carousel = [];
  return content;
}

function applySheetThreadsEdits_(content){
  if(!content) return content;
  var bodyEl = document.getElementById('sheet-threads-body');
  var commentEl = document.getElementById('sheet-threads-comment');
  if(!bodyEl && !commentEl) return content;
  if(!content.threads) content.threads = { body: '', comment: '', text: '' };
  if(bodyEl) content.threads.body = String(bodyEl.value || '').trim();
  if(commentEl) content.threads.comment = String(commentEl.value || '').trim();
  content.threads.text = content.threads.body || '';
  return content;
}

function applySheetImageEdits_(content){
  if(!content || !content.images) return content;
  var nodes = document.querySelectorAll('[data-image-index]');
  if(!nodes.length) return content;
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
  var gpt = getDisplayGptVisuals_(content.images.gptVisuals, catId).map(function(item){
    return Object.assign({}, item);
  });
  nodes.forEach(function(el){
    var idx = parseInt(el.getAttribute('data-image-index'), 10);
    if(isNaN(idx) || !gpt[idx]) return;
    var overlayField = el.getAttribute('data-overlay-field');
    if(overlayField){
      gpt[idx][overlayField] = String(el.value || '').trim();
      return;
    }
    if(el.id && el.id.indexOf('sheet-image-prompt-') === 0){
      gpt[idx].prompt = String(el.value || '').trim();
    }
  });
  content.images.gptVisuals = gpt;
  return content;
}

function applySheetThreadEdits_(content){
  if(!content) return content;
  var titleEl = document.getElementById('sheet-thread-title');
  var bodyEl = document.getElementById('sheet-thread-summary');
  if(!titleEl && !bodyEl) return content;
  var th = normalizeThreadBlock(content.thread) || { topicTitle: '', summary: '' };
  if(titleEl) th.topicTitle = String(titleEl.value || '').trim();
  if(bodyEl) th.summary = String(bodyEl.value || '').trim();
  content.thread = th;
  return content;
}

function readSheetCommunityEdits_(){
  if(!document.getElementById('sheet-community-title')) return null;
  function v(id){ var el = document.getElementById(id); return el ? String(el.value || '').trim() : ''; }
  return {
    title: v('sheet-community-title'),
    problem: v('sheet-community-problem'),
    selfCare: v('sheet-community-selfcare'),
    explanation: v('sheet-community-explanation'),
  };
}

function applySheetCommunityEdits_(content){
  if(!content) return content;
  var edits = readSheetCommunityEdits_();
  if(!edits) return content;
  if(!content.community) content.community = {};
  var prevTitle = String(content.community.title || '').trim();
  content.community.title = edits.title;
  content.community.problem = edits.problem;
  content.community.selfCare = edits.selfCare;
  content.community.explanation = edits.explanation;
  var nextTitle = String(content.community.title || '').trim();
  if(nextTitle && nextTitle !== prevTitle){
    var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    syncThumbnailOverlayHook_(content, catId);
  }
  return content;
}

function applySheetEditsForTab_(content, tab){
  if(!content) return content;
  if(tab === 'blog') return applySheetBlogEdits_(content);
  if(tab === 'insta') return applySheetInstaEdits_(content);
  if(tab === 'threads') return applySheetThreadsEdits_(content);
  if(tab === 'images') return applySheetImageEdits_(content);
  if(tab === 'thread') return applySheetThreadEdits_(content);
  if(tab === 'community') return applySheetCommunityEdits_(content);
  return content;
}

function getPublishKeyForTab_(tab, catId){
  if(tab === 'images') return 'image';
  if(tab === 'blog') return 'blog';
  if(tab === 'insta') return 'insta';
  if(tab === 'threads') return 'threads';
  if(tab === 'community') return 'community';
  if(tab === 'thread') return 'thread';
  return null;
}

function buildFinalTextForKey_(content, catId, key){
  if(!content) return '';
  if(key === 'blog') return content.blog ? getTabCopyText('blog', content) : '';
  if(key === 'insta') return content.insta ? getInstaFullPasteText_(content.insta) : '';
  if(key === 'threads') return content.threads ? getThreadsFullPasteText_(content.threads) : '';
  if(key === 'image') return getImagePromptTextForData_(content, catId);
  if(key === 'community') return content.community ? formatCommunityPostText(content.community) : '';
  if(key === 'thread'){
    var th = normalizeThreadBlock(content.thread);
    return th && th.summary ? getThreadPlainText(th) : '';
  }
  return '';
}

function commitSheetTabPublish_(draftId, catId, tab){
  var content = getDraftContent_(draftId);
  if(!content) throw new Error('초안이 없어요.');
  applySheetEditsForTab_(content, tab);
  var key = getPublishKeyForTab_(tab, catId);
  if(!key) throw new Error('이 탭은 저장할 수 없어요.');
  var tabText = buildFinalTextForKey_(content, catId, key).trim();
  if(!tabText) throw new Error('저장할 내용을 입력해 주세요.');

  var cat = CATEGORIES[catId];
  var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
  if(!state.published[draftId]) state.published[draftId] = {};
  var pub = state.published[draftId];
  var wasFirstPublish = !pub.date;

  var today = new Date().toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
  if(!pub.date) pub.date = today;
  pub.savedAt = new Date().toISOString();
  pub.catId = catId;
  pub.topic = draft ? draft.topic : '';
  pub.content = content;
  if(!pub.tabPublished) pub.tabPublished = {};
  pub.tabPublished[key] = pub.savedAt;

  pub.finalTexts = Object.assign({}, pub.finalTexts || {});
  pub.finalTexts[key] = tabText;
  pub.finalText = buildCombinedFinalText_(pub.finalTexts);
  pub.promptData = buildPublishedPromptData_(draft, catId, content, pub.finalTexts);

  state.generatedOnly[draftId] = content;
  save({ driveImmediate: true, gasImmediate: true });

  return { wasFirstPublish: wasFirstPublish, catId: catId, key: key };
}

async function afterTabPublishSaved_(result, draftId){
  var catId = result.catId;
  var draft = CATEGORIES[catId] && CATEGORIES[catId].drafts.find(function(d){ return d.id === draftId; });
  if(result.wasFirstPublish && isAutoTopicReplenishEnabled_()){
    await ensureMinimumPendingDraftsAfterPublish_(catId, draft, (state.published[draftId] && state.published[draftId].finalText) || '');
  }
  if(shouldRefinePromptsAfterPublish_(catId)){
    setAppToast('발행 ' + countPublishedInCat_(catId) + '건 · 프롬프트 분석 중…', { duration: 5000, variant: 'ok' });
    try {
      await refineCategoryPromptsFromPublished_(catId);
    } catch(err){
      console.warn('[프롬프트 개선]', err);
      setAppToast('프롬프트 자동 개선에 실패했어요.\n' + ((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    }
  }
}

function buildBlogSourceText_(b, catId){
  if(!b) return '';
  if(blogUsesStructuredGeneralFormat_(catId, b)){
    return (
      '제목: ' + (b.title || '') + '\n\n' +
      '문제 제기:\n' + getGeneralBlogProblemText_(b) + '\n\n' +
      '셀프 케어:\n' + (b.selfCare || '') + '\n\n' +
      '원리 설명:\n' + (b.explanation || '') + '\n\n' +
      '마무리 CTA:\n' + (b.cta || '')
    ).trim();
  }
  var outline = (b.outline || []).map(function(o, i){ return (i + 1) + '. ' + o; }).join('\n');
  var tags = (b.hashtags || []).map(function(h){ return '#' + String(h).replace(/^#/, ''); }).join(' ');
  if(isExpertCourseCategory(catId)){
    return (
      '제목: ' + (b.title || '') + '\n\n' +
      '영상·사진 맥락:\n' + (b.hook || '') + '\n\n' +
      '시연·핵심 포인트:\n' + outline + '\n\n' +
      '원리 설명:\n' + (b.draft || '') + '\n\n' +
      '마무리:\n' + (b.cta || '') + '\n\n' +
      (tags ? '해시태그: ' + tags : '')
    ).trim();
  }
  return (
    '제목: ' + (b.title || '') + '\n\n' +
    '후킹 오프닝:\n' + (b.hook || '') + '\n\n' +
    '목차:\n' + outline + '\n\n' +
    '본문:\n' + (b.draft || '') + '\n\n' +
    '마무리 CTA:\n' + (b.cta || '') + '\n\n' +
    (tags ? '해시태그: ' + tags : '')
  ).trim();
}

function normalizeInstaBlock_(ig){
  if(!ig || typeof ig !== 'object') return null;
  if(!Array.isArray(ig.carousel)) ig.carousel = [];
  ig.carousel = [];
  if(!Array.isArray(ig.hashtags)) ig.hashtags = [];
  ig.hook = String(ig.hook || '').trim();
  ig.caption = String(ig.caption || '').trim();
  return ig;
}

async function generateInstaFromBlog_(catId, blog, topic){
  var instaGuide = getCatPromptForGeneration_(catId, 'insta');
  var baseInfo = getBasePrompt();
  var expertScope = isExpertCourseCategory(catId)
    ? '\n- 전문가 과정: 블로그에 없는 내용을 **새로 추가하지 말고**, 블로그·참고·영상·사진 범위 안에서만 압축하세요. **원리 설명** 한 줄이 드러나게.\n'
    : '';
  var generalHint = isGeneralAudienceCategory(catId)
    ? '\n- 일반인 글: 블로그의 **문제 제기→셀프 케어→원리** 흐름을 유지하되, 캡션은 **셀프 케어 핵심 1개**에 집중하세요.\n'
    : '';
  var expertHint = isExpertCourseCategory(catId)
    ? '\n- 전문가 글: **영상·사진 맥락 → 시연 포인트 → 원리** 흐름. 캡션은 시연 포인트 2~3개 + 원리 한두 문장.\n'
    : '';
  var prompt = baseInfo + '\n\n' +
    '카테고리: ' + (CATEGORIES[catId] ? CATEGORIES[catId].name : '') + '\n' +
    '주제: "' + (topic || '') + '"\n\n' +
    '[인스타 작성 지침]\n' + instaGuide + '\n\n' +
    '아래는 **확정·수정된 블로그 글**입니다. 블로그 전체를 옮기지 말고, **현장 리포트** 톤의 짧은 인스타 한 포스트로 만드세요.\n' + expertScope + generalHint + expertHint + '\n' +
    '요구사항:\n' +
    '- hook: 블로그 제목·후킹에서 **기억에 남는 한 줄** (이모지 1개 전후, 25자 내외 권장)\n' +
    '- caption: **"오늘 ○○ 했더니 △△"** 현장·시연·결과 중심. 공감 한 줄 → 핵심 포인트 **2~3개만**(번호 또는 •) → 변화·포인트 1개 → 짧은 CTA. hook 제외 **180~380자** 목표\n' +
    '- 과정·철학·통념 뒤집기는 인스타가 아니라 쓰레드용 — 인스타는 **결과·장면**에 집중\n' +
    '- 블로그 700자대 본문·목차 전체 나열 금지. 읽고 나서도 떠오르는 **한 가지 메시지**에 집중\n' +
    '- carousel: 반드시 빈 배열 []\n' +
    '- hashtags: 8~10개 (# 없이)\n\n' +
    'JSON만:\n{"insta":{"hook":"...","caption":"...","carousel":[],"hashtags":["t1","t2"]}}\n\n' +
    '[블로그 원문]\n' + buildBlogSourceText_(blog, catId);

  var text = await callClaudePlanner_(prompt, { maxTokens: 2200, timeoutMs: INSTA_BG_TIMEOUT_MS });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var parsed = JSON.parse(raw);
  var ig = parsed.insta || parsed;
  return normalizeInstaBlock_(ig);
}

window.onSheetPublishComplete = async function(){
  var draftId = state.selectedId;
  if(!draftId){
    setAppToast('먼저 초안 카드를 선택해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var tab = state.activeTab;
  var pubBtn = document.querySelector('.sheet-actions .btn-pub');
  var key = getPublishKeyForTab_(tab, catId);
  var tabSaved = !!(key && state.published[draftId] && state.published[draftId].tabPublished && state.published[draftId].tabPublished[key]);

  if(tabSaved){
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장·복사 중…'; }
    try {
      var quickResult = commitSheetTabPublish_(draftId, catId, tab);
      var quickContent = getDraftContent_(draftId);
      var quickText = buildFinalTextForKey_(quickContent, catId, quickResult.key);
      renderSheetContent(quickContent);
      renderTabs();
      renderMain();
      copyTextOnly_(quickText, function(){
        setAppToast('수정본 저장 후 복사했어요.', { duration: 3600, variant: 'ok' });
      });
    } catch(err){
      setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  if(tab === 'blog' && isBlogInstaCategory(catId)){
    if(!state.apiKey){
      openApiModal();
      return;
    }
    var content = getDraftContent_(draftId);
    if(!content || !content.blog){
      setAppToast('블로그 초안이 없어요. 먼저 초안을 생성해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    applySheetBlogEdits_(content);
    if(!blogHasMinimumContent_(catId, content.blog)){
      setAppToast('제목과 문제 제기·셀프 케어(또는 본문)를 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var saveResult = commitSheetTabPublish_(draftId, catId, 'blog');
      var cat = CATEGORIES[catId];
      var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
      content = getDraftContent_(draftId);
      ensureNotifyForInstaBg_();
      state.activeTab = 'insta';
      setOpenDetailHash_(draftId, catId, 'insta');
      enqueueInstaFromBlog_(draftId, catId, draft ? draft.topic : '', content.blog);
      enqueueThreadsFromBlog_(draftId, catId, draft ? draft.topic : '', content.blog);
      renderSheetContent(getDraftContent_(draftId) || content);
      renderTabs();
      renderMain();
      copyAndOpenNaverBlog_(buildBlogPasteTextForPublish_(content.blog, catId));
      afterTabPublishSaved_(saveResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('블로그 저장 · 복사 · 앱 이동\n돌아오면 인스타·쓰레드 탭을 확인해 주세요.', { duration: 5500, variant: 'ok' });
    } catch(err){
      console.warn('[블로그 발행]', err);
      setAppToast(((err && err.message) || String(err)), { duration: 9000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  if(tab === 'insta' && isBlogInstaCategory(catId)){
    var igContent = getDraftContent_(draftId);
    if(igContent && instaContentReady_(igContent)){
      clearInstaPendingMeta_(igContent);
      delete instaBgByDraft[draftId];
      persistDraftContent_(draftId, igContent);
    }
    if(shouldShowInstaPending_(igContent, draftId)){
      setAppToast('인스타 캡션을 만들고 있어요.\n블로그 앱에서 글을 올린 뒤, 잠시 후 인스타 탭을 확인해 주세요.', { duration: 5000, variant: 'ok' });
      return;
    }
    if(!igContent || !igContent.insta){
      setAppToast('인스타 캡션이 없어요.\n블로그 탭에서 발행완료를 먼저 눌러 주세요.', { duration: 4500, variant: 'err' });
      return;
    }
    applySheetInstaEdits_(igContent);
    if(!igContent.insta.hook && !igContent.insta.caption){
      setAppToast('후킹 또는 캡션을 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(!state.apiKey){
      openApiModal();
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var instaResult = commitSheetTabPublish_(draftId, catId, 'insta');
      renderSheetContent(getDraftContent_(draftId) || igContent);
      renderTabs();
      renderMain();
      copyAndOpenInstagram_(igContent && igContent.insta ? getInstaFullPasteText_(igContent.insta) : '');
      afterTabPublishSaved_(instaResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('인스타 저장 · 복사 · 앱 이동', { duration: 4500, variant: 'ok' });
    } catch(err){
      setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  if(tab === 'threads' && isBlogInstaCategory(catId)){
    var thContent = getDraftContent_(draftId);
    if(thContent) syncThreadsDraftFromDom_(thContent, draftId);
    if(hasThreadsDraftText_(thContent, draftId)){
      clearThreadsPendingMeta_(thContent);
      delete threadsBgByDraft[draftId];
      persistDraftContent_(draftId, thContent);
    }
    if(shouldShowThreadsPending_(thContent, draftId)){
      setAppToast('쓰레드 글을 만들고 있어요.\n블로그 발행 후 잠시 뒤 쓰레드 탭을 확인해 주세요.', { duration: 5000, variant: 'ok' });
      return;
    }
    if(!thContent || !getThreadsBodyText_(thContent.threads)){
      setAppToast('쓰레드 글이 없어요.\n블로그 탭에서 발행완료를 먼저 눌러 주세요.', { duration: 4500, variant: 'err' });
      return;
    }
    applySheetThreadsEdits_(thContent);
    if(!getThreadsBodyText_(thContent.threads)){
      setAppToast('쓰레드 본문(게시글)을 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var threadsResult = commitSheetTabPublish_(draftId, catId, 'threads');
      var savedTh = getDraftContent_(draftId);
      copyAndOpenThreads_(savedTh && savedTh.threads ? getThreadsBodyText_(savedTh.threads) : '');
      closeSheet();
      renderTabs();
      renderMain();
      afterTabPublishSaved_(threadsResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('쓰레드 본문 저장 · 복사 · 앱 이동\n게시 후 댓글(재게시)란에 «댓글» 박스 내용을 붙여넣으세요.', { duration: 6500, variant: 'ok' });
    } catch(err){
      setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  if(tab === 'thread' && isDailyShareCategory(catId)){
    var dContent = getDraftContent_(draftId);
    if(!dContent){
      setAppToast('초안이 없어요. 먼저 초안을 생성해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    applySheetThreadEdits_(dContent);
    var thBlock = normalizeThreadBlock(dContent.thread);
    if(!thBlock || !thBlock.summary){
      setAppToast('일상 공유 본문을 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var dailyResult = commitSheetTabPublish_(draftId, catId, 'thread');
      var savedDaily = getDraftContent_(draftId);
      var thSaved = normalizeThreadBlock(savedDaily && savedDaily.thread);
      copyAndOpenThreads_(thSaved && thSaved.summary ? getThreadPlainText(thSaved) : '');
      closeSheet();
      renderTabs();
      renderMain();
      afterTabPublishSaved_(dailyResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('일상 공유 저장 · 복사 · 앱 이동\n글 입력란에 붙여넣기 하세요.', { duration: 5500, variant: 'ok' });
    } catch(err){
      setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  if(tab === 'community' && isHeiljagyaeCategory(catId)){
    var hjContent = getDraftContent_(draftId);
    if(!hjContent || !hjContent.community){
      setAppToast('게시판 초안이 없어요. 먼저 초안을 생성해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    applySheetCommunityEdits_(hjContent);
    if(!hjContent.community.title && !hjContent.community.problem){
      setAppToast('제목 또는 문제 제기를 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var commResult = commitSheetTabPublish_(draftId, catId, 'community');
      var savedHj = getDraftContent_(draftId);
      copyAndOpenApartner_(savedHj && savedHj.community ? formatCommunityPostText(savedHj.community) : '');
      closeSheet();
      renderTabs();
      renderMain();
      afterTabPublishSaved_(commResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('게시판 저장 · 복사 · 아파트너 이동\n글 입력란에 붙여넣기 하세요.', { duration: 5500, variant: 'ok' });
    } catch(err){
      setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    } finally {
      if(pubBtn) pubBtn.disabled = false;
    }
    return;
  }

  var content2 = getDraftContent_(draftId);
  if(!content2){
    setAppToast('초안이 없어요. 먼저 초안을 생성해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  if(!key){
    setAppToast('이 탭에서는 발행완료를 사용할 수 없어요.', { duration: 4000, variant: 'err' });
    return;
  }
  if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
  try {
    var result = commitSheetTabPublish_(draftId, catId, tab);
    renderSheetContent(getDraftContent_(draftId));
    renderTabs();
    renderMain();
    await afterTabPublishSaved_(result, draftId);
    var tabNames = { image: '이미지', community: '게시판', thread: '일상 공유', threads: '쓰레드' };
    setAppToast('「' + (tabNames[result.key] || result.key) + '」최종본이 저장됐어요.', { duration: 4200, variant: 'ok' });
  } catch(err){
    setAppToast(((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
  } finally {
    if(pubBtn) pubBtn.disabled = false;
  }
};

// planner-detail-ui.js — 브랜딩 플래너 detail
window.copyCommunityFullPost_ = function(btn){
  var edits = readSheetCommunityEdits_();
  if(!edits){ setAppToast('복사할 내용이 없어요.', { duration: 3000, variant: 'err' }); return; }
  cp(btn, formatCommunityPostText(edits));
};
window.copyBlogFullPost_ = function(btn){
  var edits = readSheetBlogEdits_();
  if(!edits){ setAppToast('복사할 내용이 없어요.', { duration: 3000, variant: 'err' }); return; }
  cp(btn, formatGeneralBlogPostText(edits));
};
window.switchTab = function(t){
  if(isThreadCategory(state.selectedCatId) && t !== 'thread') return;
  if(isHeiljagyaeCategory(state.selectedCatId) && t !== 'community' && t !== 'images') return;
  if(isBlogInstaCategory(state.selectedCatId)){
    if(t === 'community' || t === 'thread') t = 'blog';
    if(t !== 'blog' && t !== 'insta' && t !== 'threads' && t !== 'images') return;
  }
  if(state.activeTab !== t){
    var c0 = getDraftContent_(state.selectedId);
    if(c0){
      applySheetEditsForTab_(c0, state.activeTab);
      persistDraftContent_(state.selectedId, c0);
    }
  }
  state.activeTab = t;
  const content = getDraftContent_(state.selectedId);
  if(content) renderSheetContent(content);
  if(state.selectedId && state.selectedCatId != null){
    setOpenDetailHash_(state.selectedId, state.selectedCatId, t);
  }
};

function sheetCloseActionsPrefix_(){
  return '';
}
function setSheetActionsHtml_(inner){
  document.getElementById('sheet-actions').innerHTML = inner || '';
  scheduleAppToastLift_();
}
function closeSheet(){
  var wasOpen = document.getElementById('detail-overlay').classList.contains('open');
  closeSheetUiOnly_();
  if(wasOpen) clearOpenDetailHash_();
}
function closeDetail(e){ if(e.target===document.getElementById('detail-overlay')) closeSheet(); }

// planner-detail-publish.js — 브랜딩 플래너 detail
function getCatIdFromDraftId_(draftId){
  var m = String(draftId || '').match(/^d(\d+)-/);
  return m ? parseInt(m[1], 10) : (state.selectedCatId != null ? state.selectedCatId : 0);
}

function buildFinalPublishDefault_(draftId, catId){
  var pub = state.published[draftId];
  if(pub && pub.finalText) return String(pub.finalText);
  var content = (pub && pub.content) || state.generatedOnly[draftId];
  if(!content) return '';
  if(isDailyShareCategory(catId)){
    var th = normalizeThreadBlock(content.thread);
    return th && th.summary ? getThreadPlainText(th) : '';
  }
  if(isHeiljagyaeCategory(catId)){
    return content.community ? formatCommunityPostText(content.community) : '';
  }
  var tab = state.activeTab;
  if(tab === 'insta' && content.insta) return getTabCopyText('insta', content);
  if(tab === 'threads' && content.threads) return getTabCopyText('threads', content);
  if(tab === 'blog' && content.blog) return getTabCopyText('blog', content);
  var parts = [];
  if(content.blog && content.blog.title) parts.push(getTabCopyText('blog', content));
  if(content.insta) parts.push(getTabCopyText('insta', content));
  if(content.threads && getThreadsSnsPlainText_(content.threads)) parts.push(getTabCopyText('threads', content));
  return parts.join('\n\n---\n\n');
}

function getImagePromptTextForData_(content, catId){
  var im = content && content.images;
  if(!im || !im.gptVisuals) return '';
  var list = getDisplayGptVisuals_(im.gptVisuals || [], catId);
  return list.map(function(x, i){
    var lines = [(i + 1) + '. ' + (x.title || '이미지')];
    if(x.overlayFixedLine1) lines.push('상단 고정 1: ' + x.overlayFixedLine1);
    if(x.overlayFixedLine2) lines.push('상단 고정 2: ' + x.overlayFixedLine2);
    if(x.overlayHook) lines.push('하단 후킹: ' + x.overlayHook);
    lines.push(x.prompt || '');
    return lines.join('\n');
  }).filter(Boolean).join('\n\n');
}

function buildPublishedPromptData_(draft, catId, content, finalTexts){
  finalTexts = finalTexts || {};
  var data = {};
  var topic = draft && draft.topic ? draft.topic : '';
  if(content && content.blog){
    data.blog = { topic: topic, generated: getTabCopyText('blog', content), finalText: finalTexts.blog || '' };
  }
  if(content && content.insta){
    data.insta = { topic: topic, generated: getTabCopyText('insta', content), finalText: finalTexts.insta || '' };
  }
  if(content && content.threads && getThreadsSnsPlainText_(content.threads)){
    data.threads = { topic: topic, generated: getThreadsSnsPlainText_(content.threads), finalText: finalTexts.threads || '' };
  }
  var imageText = getImagePromptTextForData_(content, catId);
  if(imageText){
    data.image = { topic: topic, generated: imageText, finalText: finalTexts.image || '' };
  }
  if(content && content.community){
    data.community = { topic: topic, generated: formatCommunityPostText(content.community), finalText: finalTexts.community || '' };
  }
  var th = content ? normalizeThreadBlock(content.thread) : null;
  if(th && th.summary){
    data.thread = { topic: topic, generated: getThreadPlainText(th), finalText: finalTexts.thread || '' };
  }
  return data;
}

function getPromptDataText_(promptData, key){
  var item = promptData && promptData[key];
  if(!item) return '';
  return String(item.finalText || item.generated || '').trim();
}

function getLastPublishedPromptSamples_(catId, limit){
  limit = limit || PROMPT_REFINE_SAMPLE_COUNT;
  var cat = CATEGORIES[catId];
  if(!cat) return [];
  var rows = [];
  cat.drafts.forEach(function(d){
    var p = state.published[d.id];
    if(!p || !p.date) return;
    var content = p.content || state.generatedOnly[d.id];
    var promptData = p.promptData || buildPublishedPromptData_(d, catId, content, p.finalTexts || {});
    var hasData = ['blog','insta','threads','image','community','thread'].some(function(key){
      return getPromptDataText_(promptData, key).length >= 20;
    });
    if(!hasData) return;
    rows.push({
      topic: d.topic,
      date: p.date,
      savedAt: p.savedAt || '',
      promptData: promptData
    });
  });
  rows.sort(function(a, b){ return (b.savedAt || '').localeCompare(a.savedAt || ''); });
  return rows.slice(0, limit);
}

function formatPromptDataSamplesBlock_(samples, promptTypes){
  return samples.map(function(s, i){
    var parts = ['--- 발행본 ' + (i + 1) + ' · ' + s.topic + ' (' + s.date + ') ---'];
    promptTypes.forEach(function(key){
      var val = getPromptDataText_(s.promptData, key);
      if(val) parts.push('[' + key + ' 데이터]\n' + val.slice(0, key === 'image' ? 2400 : 3500));
    });
    return parts.join('\n\n');
  }).join('\n\n');
}

function buildCombinedFinalText_(finalTexts){
  var labels = { blog: '블로그', insta: '인스타', threads: '쓰레드', image: '이미지 생성 프롬프트', community: '게시판', thread: '일상 공유' };
  return Object.keys(finalTexts || {}).map(function(key){
    return '[' + (labels[key] || key) + ']\n' + finalTexts[key];
  }).join('\n\n---\n\n');
}

function parseCombinedFinalText_(text){
  var out = {};
  var raw = String(text || '').trim();
  if(!raw) return out;
  var labels = { '블로그': 'blog', '인스타': 'insta', '쓰레드': 'threads', '이미지 생성 프롬프트': 'image', '게시판': 'community', '일상 공유': 'thread' };
  var blocks = raw.split(/\n\n---\n\n/);
  var parsedAny = false;
  blocks.forEach(function(block){
    var m = String(block).match(/^\[([^\]]+)\]\n([\s\S]*)$/);
    if(!m) return;
    var key = labels[m[1].trim()];
    var val = m[2].trim();
    if(key && val){
      out[key] = val;
      parsedAny = true;
    }
  });
  return parsedAny ? out : null;
}

function getLegacyPublishPrimaryKey_(catId){
  if(isDailyShareCategory(catId)) return 'thread';
  if(isHeiljagyaeCategory(catId)) return 'community';
  return 'blog';
}

function inferFinalTextsFromPromptData_(promptData){
  var out = {};
  if(!promptData || typeof promptData !== 'object') return out;
  ['blog', 'insta', 'threads', 'image', 'community', 'thread'].forEach(function(key){
    var item = promptData[key];
    if(!item) return;
    var val = String(item.finalText || '').trim();
    if(!val) val = String(item.generated || '').trim();
    if(val.length >= 10) out[key] = val;
  });
  return out;
}

/** 구 발행 모달 데이터(pub.date·finalText만 있고 tabPublished 없음) → 탭별 발행 상태 복원 */
function migrateLegacyPublishTabPublished_(){
  var pubs = state.published;
  if(!pubs || typeof pubs !== 'object') return false;
  var changed = false;
  Object.keys(pubs).forEach(function(draftId){
    var pub = pubs[draftId];
    if(!pub) return;
    var catId = pub.catId != null ? pub.catId : getCatIdFromDraftId_(draftId);
    var requiredKeys = getRequiredPublishKeysForCat_(catId);
    if(!requiredKeys.length) return;
    if(draftIsFullyPublished_(draftId, catId)) return;
    if(!pub.date && !(pub.finalText || '').trim() && (!pub.finalTexts || !Object.keys(pub.finalTexts).length)) return;

    var stamp = pub.savedAt || (pub.date ? String(pub.date) : '') || new Date().toISOString();
    var finalTexts = Object.assign({}, pub.finalTexts || {});

    if((pub.finalText || '').trim()){
      var parsed = parseCombinedFinalText_(pub.finalText);
      if(parsed === null){
        var primary = getLegacyPublishPrimaryKey_(catId);
        if(!finalTexts[primary]) finalTexts[primary] = String(pub.finalText).trim();
      } else {
        Object.keys(parsed).forEach(function(k){
          if(!finalTexts[k] && parsed[k]) finalTexts[k] = parsed[k];
        });
      }
    }

    var fromPrompt = inferFinalTextsFromPromptData_(pub.promptData);
    Object.keys(fromPrompt).forEach(function(k){
      if(!finalTexts[k]) finalTexts[k] = fromPrompt[k];
    });

    if(!pub.tabPublished) pub.tabPublished = {};
    requiredKeys.forEach(function(key){
      if(pub.tabPublished[key]) return;
      var val = finalTexts[key] ? String(finalTexts[key]).trim() : '';
      if(val.length < 10) return;
      pub.tabPublished[key] = stamp;
      changed = true;
    });

    var prevJson = JSON.stringify(pub.finalTexts || {});
    var nextJson = JSON.stringify(finalTexts);
    if(prevJson !== nextJson){
      pub.finalTexts = finalTexts;
      pub.finalText = buildCombinedFinalText_(finalTexts);
      changed = true;
    } else if(Object.keys(finalTexts).length && !(pub.finalText || '').trim()){
      pub.finalText = buildCombinedFinalText_(finalTexts);
      changed = true;
    }

    if(!pub.promptData && Object.keys(finalTexts).length){
      var cat = CATEGORIES[catId];
      var draft = cat && (cat.drafts || []).find(function(d){ return d && d.id === draftId; });
      var content = pub.content || state.generatedOnly[draftId];
      if(content){
        pub.promptData = buildPublishedPromptData_(draft, catId, content, finalTexts);
        changed = true;
      }
    }

    if(pub.catId == null && catId != null){
      pub.catId = catId;
      changed = true;
    }
  });
  return changed;
}

function countPublishedInCat_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return 0;
  return cat.drafts.filter(function(d){
    return d && d.id && draftIsFullyPublished_(d.id, catId);
  }).length;
}

function getLastPublishedSamples_(catId, limit){
  limit = limit || 5;
  var cat = CATEGORIES[catId];
  if(!cat) return [];
  var rows = [];
  cat.drafts.forEach(function(d){
    var p = state.published[d.id];
    if(!p || !p.date) return;
    var text = (p.finalText || '').trim();
    if(!text) text = buildFinalPublishDefault_(d.id, catId).trim();
    if(text.length < 40) return;
    rows.push({
      topic: d.topic,
      date: p.date,
      savedAt: p.savedAt || '',
      finalText: text.slice(0, 3500)
    });
  });
  rows.sort(function(a, b){ return (b.savedAt || '').localeCompare(a.savedAt || ''); });
  return rows.slice(0, limit);
}

function shouldRefinePromptsAfterPublish_(catId){
  var n = countPublishedInCat_(catId);
  if(n < PROMPT_REFINE_EVERY_PUBLISH || n % PROMPT_REFINE_EVERY_PUBLISH !== 0) return false;
  if(!state.promptRefineMilestones) state.promptRefineMilestones = {};
  if(state.promptRefineMilestones[String(catId)] === n) return false;
  return getLastPublishedPromptSamples_(catId, PROMPT_REFINE_SAMPLE_COUNT).length >= PROMPT_REFINE_SAMPLE_COUNT;
}

function normalizeTopicKey_(topic){
  return String(topic || '').replace(/\s+/g, '').toLowerCase();
}

function makeExtraDraftId_(catId, offset){
  var base = Date.now() + (offset || 0);
  var id = 'd' + catId + '-c' + base;
  var cat = CATEGORIES[catId];
  while(cat && cat.drafts && cat.drafts.some(function(d){ return d && d.id === id; })){
    base++;
    id = 'd' + catId + '-c' + base;
  }
  return id;
}

async function generateRelatedTopicsAfterPublish_(catId, sourceDraft, finalText, count){
  var cat = CATEGORIES[catId];
  if(!cat) return [];
  var avoidTopics = (cat.drafts || [])
    .map(function(d){ return d && d.topic ? d.topic : ''; })
    .filter(Boolean)
    .slice(0, 80);
  var categoryGuide = isDailyShareCategory(catId)
    ? '일상 공유용입니다. 생활·계절·감정·몸 느낌 중심. 필요하면 날씨·습도·가벼운 움직임 등 근골격계 전문가 시선을 살짝 넣은 후속 소재로 만드세요.'
    : (isHeiljagyaeCategory(catId)
      ? '힐자계 입주민용 아파트너 게시글입니다. 동네 일상 공감과 부담 없는 셀프 케어로 이어지는 후속 소재로 만드세요.'
      : '블로그·인스타용입니다. 방금 발행한 글에서 자연스럽게 이어지는 후속, 심화, 오해 해소, 실천 팁 소재로 만드세요.');
  var prompt =
'당신은 "브랜딩 플래너"입니다.\n' +
buildBrandContextForPrompt_(catId, sourceDraft) + '\n\n' +
'이 카테고리에 생성된 주제 카드가 최소 ' + MIN_TOPICS_PER_CAT + '개 유지되도록, 방금 발행한 글과 연관된 새 주제를 만듭니다.\n\n' +
'카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
'독자: ' + getProgramAudienceLine_(catId) + '\n' +
'방금 발행한 주제: ' + ((sourceDraft && sourceDraft.topic) || '') + '\n' +
'방금 발행한 각도: ' + ((sourceDraft && sourceDraft.angle) || '') + '\n' +
'작성 방향: ' + categoryGuide + '\n\n' +
'[방금 발행한 최종본 일부]\n' + String(finalText || '').slice(0, 3200) + '\n\n' +
'[이미 있는 주제 — 중복 금지]\n' + avoidTopics.map(function(t){ return ' - ' + t; }).join('\n') + '\n\n' +
'[요청]\n' +
'- 새 주제 정확히 ' + count + '개\n' +
'- topic: 한국어 제목 한 줄. 기존 주제와 표현·핵심 소재가 겹치지 않게\n' +
'- angle: 이 주제를 어떤 관점으로 풀지 한 줄\n' +
buildTopicBrandJsonGuide_(catId) +
'- 방금 발행한 글을 본 독자가 다음으로 궁금해할 만한 **시리즈 순서**를 이어가세요\n\n' +
'JSON 배열만 출력:\n' +
'[\n' +
'  {"topic":"...","angle":"...","series":"...","step":"...","pillar":"...","rationale":"..."}\n' +
']';
  var text = await callClaudePlanner_(prompt, { maxTokens: Math.max(800, count * 320) });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var start = raw.indexOf('[');
  var end = raw.lastIndexOf(']');
  if(start < 0 || end <= start) throw new Error('관련 주제 JSON을 찾지 못했어요');
  var arr = JSON.parse(raw.slice(start, end + 1));
  if(!Array.isArray(arr)) throw new Error('관련 주제 응답 형식이 올바르지 않아요');
  var seen = {};
  avoidTopics.forEach(function(t){ seen[normalizeTopicKey_(t)] = true; });
  var out = [];
  arr.forEach(function(x){
    if(!x || !x.topic) return;
    var topic = String(x.topic || '').trim();
    var key = normalizeTopicKey_(topic);
    if(!topic || seen[key]) return;
    seen[key] = true;
    out.push({
      topic: topic,
      angle: String(x.angle || '발행본과 이어지는 후속 콘텐츠').trim(),
      series: String(x.series || '').trim(),
      step: String(x.step || '').trim(),
      pillar: String(x.pillar || '').trim(),
      rationale: String(x.rationale || '').trim()
    });
  });
  return out.slice(0, count);
}

async function ensureMinimumPendingDraftsAfterPublish_(catId, sourceDraft, finalText){
  var cat = CATEGORIES[catId];
  if(!cat) return;
  if(minDraftReplenishRunningByCat[catId]) return;
  var missing = MIN_TOPICS_PER_CAT - countTopicsInCat_(catId);
  if(missing <= 0) return;
  if(!state.apiKey){
    setAppToast('생성된 주제가 ' + MIN_TOPICS_PER_CAT + '개보다 적어요.\nAPI 키를 설정하면 발행본과 이어지는 새 주제를 자동으로 채울 수 있어요.', { duration: 7000, variant: 'err' });
    return;
  }

  minDraftReplenishRunningByCat[catId] = true;
  setAppToast('발행본과 이어지는 새 주제 ' + missing + '건을 만들고 초안을 채우는 중이에요…', { duration: 5200, variant: 'ok' });

  var created = [];
  try {
    var topics = await generateRelatedTopicsAfterPublish_(catId, sourceDraft, finalText, missing);
    topics.forEach(function(t, i){
      var draft = { id: makeExtraDraftId_(catId, i), topic: t.topic, angle: t.angle };
      applyTopicFieldsToDraft_(draft, t, catId);
      cat.drafts.push(draft);
      created.push(draft);
    });
    if(!created.length) throw new Error('새로 추가할 관련 주제가 없어요');
    renderTabs();
    renderMain();
    save({ driveImmediate: true, gasImmediate: true });
  } catch(e){
    setAppToast('관련 주제 생성에 실패했어요.\n' + ((e && e.message) || String(e)), { duration: 8000, variant: 'err' });
    return;
  } finally {
    minDraftReplenishRunningByCat[catId] = false;
  }

  var okCount = 0;
  var failCount = 0;
  for(var i = 0; i < created.length; i++){
    if(draftHasContent(created[i])) continue;
    var ok = await window.enqueueDraftGeneration(catId, created[i].id, { batch: true });
    if(ok) okCount++;
    else failCount++;
  }
  renderTabs();
  renderMain();
  if(okCount > 0){
    setAppToast('새 주제 ' + created.length + '건 · AI 초안 ' + okCount + '건을 채웠어요.\n이 탭 주제 ' + countTopicsInCat_(catId) + '개를 유지합니다.', { duration: 7500, variant: 'ok' });
  } else if(failCount > 0){
    setAppToast('새 주제는 추가했지만 초안 생성에 실패했어요.\n카드에서 다시 생성해 주세요.', { duration: 8000, variant: 'err' });
  } else if(created.length > 0){
    setAppToast('새 주제 ' + created.length + '건을 추가했어요.\n이 탭 주제 ' + countTopicsInCat_(catId) + '개입니다.', { duration: 5500, variant: 'ok' });
  }
}

function getReplenishSeedForCat_(catId){
  var samples = getLastPublishedSamples_(catId, 1);
  if(samples.length){
    return {
      draft: { topic: samples[0].topic || '', angle: '최근 발행본과 이어지는 후속 주제' },
      finalText: samples[0].finalText || ''
    };
  }
  var cat = CATEGORIES[catId];
  var seed = cat && (cat.drafts || []).find(function(d){ return d && d.topic; });
  return {
    draft: seed || { topic: cat ? cat.name : '', angle: cat ? (cat.sub || cat.audience || '') : '' },
    finalText: ''
  };
}

async function runMinimumPendingDraftsForCat_(catId, reason, force){
  if(isOpsManualCategory(catId)) return;
  if(!force && !isAutoTopicReplenishEnabled_()) return;
  if(!state.apiKey){
    if(force) openApiModal();
    return;
  }
  if(state.showAdd && !force) return;
  if(genBatchRunning || genPendingCount > 0 || genActiveJob){
    if(force) setAppToast('이미 초안을 만들고 있어요. 끝난 뒤 다시 눌러 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return;
  if(countTopicsInCat_(catId) >= MIN_TOPICS_PER_CAT){
    if(force) setAppToast('이미 주제가 ' + MIN_TOPICS_PER_CAT + '개 이상 있어요.', { duration: 3500, variant: 'ok' });
    return;
  }
  if(minDraftReplenishRunningByCat[catId]) return;
  var now = Date.now();
  if(!force && minDraftReplenishLastAttemptByCat[catId] && now - minDraftReplenishLastAttemptByCat[catId] < MIN_DRAFT_REPLENISH_COOLDOWN_MS) return;
  minDraftReplenishLastAttemptByCat[catId] = now;
  try {
    var seed = getReplenishSeedForCat_(catId);
    await ensureMinimumPendingDraftsAfterPublish_(catId, seed.draft, seed.finalText);
  } catch(e){
    console.warn('[주제 자동 보충]', reason || '', e);
    if(force) setAppToast('주제 5개 채우기에 실패했어요.\n' + ((e && e.message) || String(e)), { duration: 8000, variant: 'err' });
  }
}

function scheduleMinimumPendingDraftsForCat_(catId, reason){
  if(isOpsManualCategory(catId)) return;
  if(!isAutoTopicReplenishEnabled_()) return;
  if(minDraftReplenishTimerByCat[catId]) clearTimeout(minDraftReplenishTimerByCat[catId]);
  minDraftReplenishTimerByCat[catId] = setTimeout(function(){
    minDraftReplenishTimerByCat[catId] = null;
    runMinimumPendingDraftsForCat_(catId, reason, false);
  }, reason === 'load' ? 1200 : 500);
}

window.fillPendingDraftsForCurrentCat = async function(){
  await runMinimumPendingDraftsForCat_(state.currentCat, 'manual', true);
  renderTabs();
  renderMain();
};

async function refineCategoryPromptsFromPublished_(catId){
  if(!state.apiKey) return;
  var cat = CATEGORIES[catId];
  if(!cat) return;
  var samples = getLastPublishedPromptSamples_(catId, PROMPT_REFINE_SAMPLE_COUNT);
  if(samples.length < PROMPT_REFINE_SAMPLE_COUNT) return;

  if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
  if(!state.prompts.categories[catId]) state.prompts.categories[catId] = {};
  var curBlog = getCatPrompt(catId, 'blog');
  var curInsta = getCatPrompt(catId, 'insta');
  var curThreads = getCatPrompt(catId, 'threads');
  var curCommunity = getCatPrompt(catId, 'community');
  var curThread = getCatPrompt(catId, 'thread');
  var curImage = getCatPrompt(catId, 'image');

  var promptTypes = [];
  if(isDailyShareCategory(catId)) promptTypes.push('thread');
  else if(isHeiljagyaeCategory(catId)) { promptTypes.push('community'); promptTypes.push('image'); }
  else { promptTypes.push('blog'); promptTypes.push('insta'); promptTypes.push('threads'); promptTypes.push('image'); }

  var sampleBlock = formatPromptDataSamplesBlock_(samples, promptTypes);

  var prompt = '당신은 콘텐츠 전략가입니다.\n' +
    '카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
    '최근 실제 발행(게시) 데이터 ' + samples.length + '개를 분석해, 아래 **현재 작성 지침**을 개선하세요.\n' +
    '데이터는 블로그용·인스타용·이미지 생성용처럼 탭별로 분리되어 있습니다. 각 지침은 해당 탭 데이터만 우선 반영하세요.\n\n' +
    '[현재 지침]\n' +
    (promptTypes.indexOf('blog') >= 0 ? 'blog:\n' + curBlog + '\n\n' : '') +
    (promptTypes.indexOf('insta') >= 0 ? 'insta:\n' + curInsta + '\n\n' : '') +
    (promptTypes.indexOf('threads') >= 0 ? 'threads:\n' + curThreads + '\n\n' : '') +
    (promptTypes.indexOf('community') >= 0 ? 'community:\n' + curCommunity + '\n\n' : '') +
    (promptTypes.indexOf('thread') >= 0 ? 'thread:\n' + curThread + '\n\n' : '') +
    (promptTypes.indexOf('image') >= 0 ? 'image:\n' + curImage + '\n\n' : '') +
    '[탭별 발행 데이터]\n' + sampleBlock + '\n\n' +
    '[요청]\n' +
    '- 공통으로 드러난 **톤·문장 길이·구조·잘 된 표현·피할 패턴**을 반영\n' +
    '- blog는 블로그 데이터, insta는 인스타 데이터, threads는 쓰레드 데이터, image는 이미지 프롬프트 데이터 기준으로 각각 개선\n' +
    '- image는 ① 1:1 썸네일(role thumbnail·상하 여백·overlay) + ② 본문 동작 구조를 유지한 채 구도·색감·인물·장소·금지 요소를 구체화\n' +
    '- image 지침에서 크리미 sage/cream 인포그래픽·medical illustration 복귀 금지\n' +
    '- 기존 지침을 통째로 갈아엎지 말고, 발행 데이터 스타일에 맞게 보강·구체화\n' +
    '- 변경이 거의 없으면 해당 키는 빈 문자열 ""\n\n' +
    'JSON만:\n{\n' +
    '"summary":"한국어 3~6문장. 무엇을 반영했는지",\n' +
    '"blog":"개선된 blog 지침 전문 또는 \"\"",\n' +
    '"insta":"개선된 insta 지침 전문 또는 \"\"",\n' +
    '"threads":"개선된 threads 지침 전문 또는 \"\"",\n' +
    '"community":"개선된 community 지침 전문 또는 \"\"",\n' +
    '"thread":"개선된 thread 지침 전문 또는 \"\"",\n' +
    '"image":"개선된 image 지침 전문 또는 \"\""\n}';

  var text = await callClaudePlanner_(prompt, { maxTokens: 3200 });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var start = raw.indexOf('{');
  var end = raw.lastIndexOf('}');
  if(start < 0 || end <= start) throw new Error('프롬프트 개선 JSON을 찾지 못했어요');
  var obj = JSON.parse(raw.slice(start, end + 1));

  var changed = [];
  ['blog', 'insta', 'threads', 'community', 'thread', 'image'].forEach(function(key){
    if(promptTypes.indexOf(key) < 0) return;
    var next = obj[key] != null ? String(obj[key]).trim() : '';
    if(next.length < 20) return;
    state.prompts.categories[catId][key] = next;
    changed.push(key);
  });

  if(!state.promptRefineMilestones) state.promptRefineMilestones = {};
  state.promptRefineMilestones[String(catId)] = countPublishedInCat_(catId);
  save({ driveImmediate: true, gasImmediate: true });

  var summary = obj.summary ? String(obj.summary).trim() : '발행본 스타일을 반영했습니다.';
  var keysLabel = { blog: '블로그', insta: '인스타', threads: '쓰레드', community: '아파트너', thread: '일상 공유', image: '이미지' };
  var changedKr = changed.map(function(k){ return keysLabel[k] || k; }).join(', ');
  setAppToast(
    '「' + cat.name + '」프롬프트 개선 완료\n' + summary + (changedKr ? '\n반영: ' + changedKr : '') + '\n\n프롬프트 메뉴에서 확인할 수 있어요.',
    { duration: 10000, variant: 'ok' }
  );
}

function openPromptModal(catId) {
  var cid = catId !== undefined ? catId : state.currentCat;
  if(isOpsManualCategory(cid)){
    if(typeof setAppToast === 'function') setAppToast('지점·브랜딩 탭은 콘텐츠 프롬프트가 없어요. 다른 프로그램 탭에서 열어 주세요.', { duration: 3800, variant: 'err' });
    return;
  }
  state.editingCatId = cid;
  state.promptTab = isThreadCategory(state.editingCatId) ? 'thread' : (isHeiljagyaeCategory(state.editingCatId) ? 'community' : 'blog');
  renderPromptModal();
  document.getElementById('prompt-modal-overlay').classList.add('open');
  lockBodyScroll_();
  setTimeout(function(){
    var pmEl = document.getElementById('prompt-modal');
    pmEl.classList.add('open');
    settleBottomSheet_(pmEl);
    scheduleAppToastLift_();
    trapFocusIn_(pmEl);
  }, 10);
}

function renderPromptModal() {
  const cat = CATEGORIES[state.editingCatId];
  if(!cat || isOpsManualCategory(state.editingCatId)){
    state.editingCatId = getPromptModalCatIds_()[0] || 0;
  }
  const editCat = CATEGORIES[state.editingCatId];
  document.getElementById('prompt-modal-title').textContent = editCat.name + ' 프롬프트';

  const modalCatIds = getPromptModalCatIds_();
  const catTabs = modalCatIds.map(function(i){
    var c = CATEGORIES[i];
    return '<button class="cat-tab' + (state.editingCatId === i ? ' active' : '') + '" onclick="switchPromptCat(' + i + ')" style="color:' + (state.editingCatId === i ? c.color : '#6B6B6B') + ';border-bottom-color:' + (state.editingCatId === i ? c.color : 'transparent') + ';font-size:11px;padding:8px 10px;">' +
      c.name +
    '</button>';
  }).join('');

  const channelTabs = getPromptChannelTabDefsForCat_(state.editingCatId);
  var validTabIds = channelTabs.map(function(t){ return t.id; });
  if(validTabIds.indexOf(state.promptTab) < 0) state.promptTab = channelTabs[0].id;
  const pt = state.promptTab;
  const threadCat = isDailyShareCategory(state.editingCatId);
  const heiljCat = isHeiljagyaeCategory(state.editingCatId);
  const blogInstaCat = isBlogInstaCategory(state.editingCatId);
  const promptTypes = getPromptTypesForCat_(state.editingCatId);
  const resetAllTypesLabel = promptTypes.map(getPromptTypeLabelKr_).join(' · ');

  const blogVal = getCatPrompt(state.editingCatId, 'blog');
  const instaVal = getCatPrompt(state.editingCatId, 'insta');
  const threadsVal = getCatPrompt(state.editingCatId, 'threads');
  const communityVal = getCatPrompt(state.editingCatId, 'community');
  const threadVal = getCatPrompt(state.editingCatId, 'thread');
  const imageVal = getCatPrompt(state.editingCatId, 'image');
  const baseVal = getBasePrompt();
  const brandProfileVal = escapeHtml(getProgramBrandProfile_(state.editingCatId));
  const strategyGuideVal = escapeHtml(getProgramStrategyGuide_(state.editingCatId));

  const channelTabBtns = channelTabs.map(function(t){
    return '<button class="prompt-tab' + (pt === t.id ? ' active' : '') + '" onclick="switchPromptTab(\'' + t.id + '\')">' + t.label + '</button>';
  }).join('');

  document.getElementById('prompt-modal-body').innerHTML = `
    <div class="prompt-modal-cat-scroll">
      <div class="cat-tabs-wrap" style="background:#F8F7F4;border-top:none;border-bottom:1px solid #E5E7EB;">
        <div class="cat-tabs" style="padding:0 8px;">${catTabs}</div>
      </div>
    </div>

    <div class="prompt-identity-section">
      <div class="prompt-section-label prompt-identity-label">
        <span>프로그램 정체성</span>
        <div class="prompt-identity-tools">
          <button type="button" class="prompt-identity-btn" onclick="regenerateProgramIdentityFromPrompt_('brandProfile', event)">브랜딩 재생성</button>
          <button type="button" class="prompt-identity-btn subtle" onclick="openProgramPlanWorkshopFromPrompt_()">기획 워크숍</button>
        </div>
      </div>
      <textarea class="prompt-textarea prompt-identity-textarea" id="pt-brand-profile" rows="4" placeholder="이 프로그램의 특징·독자·강점·피할 표현…">${brandProfileVal}</textarea>
      <details class="prompt-identity-details">
        <summary class="prompt-identity-summary">생성 기준·기획 의도</summary>
        <textarea class="prompt-textarea prompt-identity-textarea" id="pt-strategy-guide" rows="6" placeholder="기준: …&#10;&#10;의도: …">${strategyGuideVal}</textarea>
        <div class="prompt-identity-tools inline">
          <button type="button" class="prompt-identity-btn" onclick="regenerateProgramIdentityFromPrompt_('strategyGuide', event)">기준·의도 재생성</button>
        </div>
      </details>
      <div class="prompt-hint">주제·초안 생성 시 <strong>채널 지침과 함께</strong> AI에 전달됩니다. 기획 워크숍과 같은 내용이에요.</div>
    </div>

    ${promptTypes.length ? `
    <div class="prompt-cat-reset-bar">
      <span class="prompt-cat-reset-hint">이 프로그램: ${resetAllTypesLabel}</span>
      ${promptResetAllBtnHtml_(state.editingCatId)}
    </div>` : ''}

    <div class="prompt-tabs-scroll">
      <div class="prompt-tabs">${channelTabBtns}</div>
    </div>

    ${blogInstaCat && pt==='blog' ? `
    <div class="prompt-section">
      <div class="prompt-section-label">
        블로그 작성 지침
        ${promptResetBtnHtml_(state.editingCatId, 'blog')}
      </div>
      <textarea class="prompt-textarea" id="pt-blog" placeholder="블로그 글쓰기 스타일, 톤, 구조, 주의사항 등을 자유롭게 입력하세요...">${blogVal}</textarea>
      <div class="prompt-hint">${isGeneralAudienceCategory(state.editingCatId) ? '일반인 블로그: <strong>문제 제기 → 셀프 케어(👉) → 원리 설명</strong> 순. AI가 필드별로 나눠 작성하고, 시트 탭에서 각각 수정할 수 있어요.' : '예: "제목에 호기심을 자극하는 질문·숫자를 넣고, 네이버 SEO를 고려해…" — 이 지침이 Claude에게 전달돼 글쓰기 방향을 잡아요.'}</div>
    </div>` : ''}

${blogInstaCat && pt==='insta' ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    인스타 작성 지침
    ${promptResetBtnHtml_(state.editingCatId, 'insta')}
  </div>
  <textarea class="prompt-textarea" id="pt-insta" placeholder="한 포스트 캡션 톤, 줄바꿈·불릿 스타일, 해시태그 전략 등을 입력하세요. (캐러셀 다장 구성은 사용하지 않습니다.)">${instaVal}</textarea>
  <div class="prompt-hint">예: "첫 줄에서 멈추게 만드는 짧은 질문을 써주세요. 캐러셀은 문제→원인→해결 순으로..."</div>
</div>` : ''}

${blogInstaCat && pt==='threads' ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    쓰레드 작성 지침
    ${promptResetBtnHtml_(state.editingCatId, 'threads')}
  </div>
  <textarea class="prompt-textarea" id="pt-threads" placeholder="Threads 톤, 구어체, 줄바꿈 리듬, 금지 표현 등을 입력하세요.">${escapeHtml(threadsVal)}</textarea>
  <div class="prompt-hint">블로그 발행 후 자동 생성됩니다. 본문=통념 뒤집기 훅, 댓글=해설·근거·과정·철학(재게시용).</div>
</div>` : ''}

${pt==='thread' && threadCat ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    일상 공유 작성 지침
    ${promptResetBtnHtml_(state.editingCatId, 'thread')}
  </div>
  <textarea class="prompt-textarea" id="pt-thread" style="min-height:200px;" placeholder="일기 톤, 계절·사진·교육장면은 생활 나눔으로, 금지 사항 등...">${escapeHtml(threadVal)}</textarea>
  <div class="prompt-hint">일기 톤 + 날씨·몸·감정에 가벼운 근골격계 시선(1~2문장). 전문 강의·임상 설명·독자 질문은 피하세요.</div>
</div>` : ''}

${pt==='community' && heiljCat ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    아파트너(힐자계) 게시판 지침
    ${promptResetBtnHtml_(state.editingCatId, 'community')}
  </div>
  <textarea class="prompt-textarea" id="pt-community" style="min-height:200px;" placeholder="아파트 게시판 톤, 고정 형식, 금지 사항 등...">${escapeHtml(communityVal)}</textarea>
  <div class="prompt-hint">옆집 이웃 톤·문제 제기→👉 해결책(동작 앞쪽)→원리 설명. 불릿 없이 자연스러운 문장. 계절은 각도에 맞을 때만. 이미지 2장.</div>
</div>` : ''}

${pt==='image' && (blogInstaCat || heiljCat) ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    이미지 생성 지침
    ${promptResetBtnHtml_(state.editingCatId, 'image')}
  </div>
  <textarea class="prompt-textarea" id="pt-image" style="min-height:200px;" placeholder="이미지 생성용 프롬프트 톤, 구도, 색감, 금지 요소, 2장 역할 등을 입력하세요...">${escapeHtml(imageVal)}</textarea>
  <div class="prompt-hint">① 1:1 썸네일(상·하 여백·overlay) + ② 본문 동작 구조. 발행 데이터 기준 ${PROMPT_REFINE_EVERY_PUBLISH}건마다 자동 개선됩니다.</div>
</div>` : ''}

${pt==='base' ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    공통 기본 설정 (모든 카테고리에 적용)
    ${promptResetBtnHtml_(state.editingCatId, 'base')}
  </div>
  <textarea class="prompt-textarea" id="pt-base" style="min-height:320px;" placeholder="미카닥 박준규 소개, PSP 임상 프로토콜, 채널 정보 등...">${baseVal}</textarea>
  <div class="prompt-hint">미카닥 박준규 프로필 PSP 건강 가이드·<a href="${PROFILE_BRAND_URL}" target="_blank" rel="noopener">drpark PSP</a>와 동기화된 임상 뼈대(PAR·Position 등)가 포함돼요. 「기본값으로」를 누르면 최신 요약이 다시 들어갑니다.</div>
</div>` : ''}
`;
  bindPromptTextareaAutosave_();
  bindPromptIdentityAutosave_();
  updatePromptResetButtons_();
}

function bindPromptIdentityAutosave_(){
  var bp = document.getElementById('pt-brand-profile');
  var sg = document.getElementById('pt-strategy-guide');
  if(bp && !bp.__htIdentityAutosave){
    bp.__htIdentityAutosave = true;
    bp.addEventListener('input', function(){
      saveProgramBrandProfileDirect_(state.editingCatId, bp.value);
    });
  }
  if(sg && !sg.__htIdentityAutosave){
    sg.__htIdentityAutosave = true;
    sg.addEventListener('input', function(){
      saveProgramStrategyGuideDirect_(state.editingCatId, sg.value);
    });
  }
}
window.openProgramPlanWorkshopFromPrompt_ = function(){
  flushPromptCloudSave_();
  state.currentCat = state.editingCatId;
  document.getElementById('prompt-modal-overlay').classList.remove('open');
  openProgramPlanWorkshop_();
};
window.regenerateProgramIdentityFromPrompt_ = async function(mode, ev){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = state.editingCatId;
  if(catId == null || isOpsManualCategory(catId)) return;
  var btn = ev && ev.target ? ev.target.closest('button') : null;
  plannerAiBusy = true;
  if(btn) startButtonCountdown_(btn, { estimateSec: 28, busyLabel: '재생성 중', idleText: btn.textContent });
  try {
    await suggestProgramFoundationWithAI_(catId, mode || 'brandProfile');
    commitProgramIdentityFromPending_(catId);
    renderPromptModal();
    if(typeof setAppToast === 'function'){
      setAppToast(mode === 'strategyGuide' ? '생성 기준·기획 의도를 다시 제안했어요.' : '프로그램 브랜딩 요소를 다시 제안했어요.', { duration: 3600, variant: 'ok' });
    }
  } catch(e){
    if(typeof setAppToast === 'function') setAppToast('재생성 실패\n' + ((e && e.message) || e), { duration: 6500, variant: 'err' });
  } finally {
    plannerAiBusy = false;
    if(btn) stopButtonCountdown_(btn);
  }
};

function flushPromptCloudSave_(){
  if(promptCloudSaveTimer){
    clearTimeout(promptCloudSaveTimer);
    promptCloudSaveTimer = null;
  }
  autoSaveCurrentEdit();
  save({ driveImmediate: true, gasImmediate: true });
}

function schedulePromptCloudSave_(){
  clearTimeout(promptCloudSaveTimer);
  promptCloudSaveTimer = setTimeout(function(){
    promptCloudSaveTimer = null;
    autoSaveCurrentEdit();
    save({ driveImmediate: true, gasImmediate: true });
  }, 1600);
}

function bindPromptTextareaAutosave_(){
  ['pt-blog', 'pt-insta', 'pt-threads', 'pt-community', 'pt-thread', 'pt-image', 'pt-base'].forEach(function(id){
    var el = document.getElementById(id);
    if(!el || el.__htPromptAutosave) return;
    el.__htPromptAutosave = true;
    el.addEventListener('input', function(){
      updatePromptResetButtons_();
      schedulePromptCloudSave_();
    });
  });
}

window.switchPromptCat = function(i) {
  if(isOpsManualCategory(i)) return;
  flushPromptCloudSave_();
  sanitizeCatPromptKeys_(state.editingCatId);
  state.editingCatId = i;
  var tabs = getPromptChannelTabDefsForCat_(i);
  if(tabs.length && tabs.map(function(t){ return t.id; }).indexOf(state.promptTab) < 0){
    state.promptTab = tabs[0].id;
  }
  renderPromptModal();
};
window.switchPromptTab = function(t) {
flushPromptCloudSave_();
state.promptTab = t;
renderPromptModal();
};

function autoSaveCurrentEdit() {
if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
if(!state.prompts.categories[state.editingCatId]) state.prompts.categories[state.editingCatId] = {};
const blogEl = document.getElementById('pt-blog');
const instaEl = document.getElementById('pt-insta');
const threadsEl = document.getElementById('pt-threads');
const communityEl = document.getElementById('pt-community');
const threadEl = document.getElementById('pt-thread');
const imageEl = document.getElementById('pt-image');
const baseEl = document.getElementById('pt-base');
if(blogEl) state.prompts.categories[state.editingCatId].blog = blogEl.value;
if(instaEl) state.prompts.categories[state.editingCatId].insta = instaEl.value;
if(threadsEl) state.prompts.categories[state.editingCatId].threads = threadsEl.value;
if(communityEl) state.prompts.categories[state.editingCatId].community = communityEl.value;
if(threadEl) state.prompts.categories[state.editingCatId].thread = threadEl.value;
if(imageEl) state.prompts.categories[state.editingCatId].image = imageEl.value;
if(baseEl) state.prompts.base = baseEl.value;
}

window.resetPrompt = function(type) {
  if(isPromptAtDefault_(state.editingCatId, type, true)){
    if(typeof setAppToast === 'function') setAppToast('이미 기본값과 같아요.', { duration: 2800, variant: 'ok' });
    return;
  }
  if(!confirm('이 항목을 기본값으로 되돌릴까요?')) return;
  if(type === 'base'){
    if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
    state.prompts.base = DEFAULT_PROMPTS.base;
  } else {
    var def = getDefaultCatPrompt_(state.editingCatId, type);
    if(!def){
      if(typeof setAppToast === 'function') setAppToast('이 프로그램에는 「' + getPromptTypeLabelKr_(type) + '」 기본값이 없어요.', { duration: 3500, variant: 'err' });
      return;
    }
    if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
    if(!state.prompts.categories[state.editingCatId]) state.prompts.categories[state.editingCatId] = {};
    state.prompts.categories[state.editingCatId][type] = def;
    sanitizeCatPromptKeys_(state.editingCatId);
  }
  renderPromptModal();
  flushPromptCloudSave_();
};

window.resetAllPromptsForCat = function(){
  var catId = state.editingCatId;
  if(isOpsManualCategory(catId)) return;
  var types = getPromptTypesForCat_(catId);
  if(!types.length) return;
  if(isCatPromptsAllDefault_(catId, true)){
    if(typeof setAppToast === 'function') setAppToast('이 프로그램 프롬프트가 모두 기본값이에요.', { duration: 2800, variant: 'ok' });
    return;
  }
  var cat = CATEGORIES[catId];
  var labelStr = types.map(getPromptTypeLabelKr_).join(' · ');
  if(!confirm('「' + cat.name + '」의\n' + labelStr + '\n\n위 지침을 모두 기본값으로 되돌릴까요?\n(공통 기본은 변경되지 않습니다)')) return;
  if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
  if(!state.prompts.categories[catId]) state.prompts.categories[catId] = {};
  types.forEach(function(t){
    var def = getDefaultCatPrompt_(catId, t);
    if(def) state.prompts.categories[catId][t] = def;
    else delete state.prompts.categories[catId][t];
  });
  sanitizeCatPromptKeys_(catId);
  renderPromptModal();
  flushPromptCloudSave_();
  if(typeof setAppToast === 'function'){
    setAppToast('「' + cat.name + '」프롬프트 ' + types.length + '개를 기본값으로 되돌렸어요.', { duration: 3800, variant: 'ok' });
  }
};

function savePrompts() {
autoSaveCurrentEdit();
save({ driveImmediate: true, gasImmediate: true });
closePromptModal();
const btn = document.querySelector('.btn-save-prompt');
if(btn){ btn.textContent='저장됨'; setTimeout(()=>{ btn.textContent='저장하기'; },1200); }
if(typeof setAppToast === 'function'){
  var hint = hasDriveConnection_() ? '프롬프트를 저장했어요.\nDrive·서버에 반영 중이에요.' : '프롬프트를 저장했어요.\n서버에 반영 중이에요.';
  setAppToast(hint, { duration: 4200, variant: 'ok' });
}
}

function closePromptModal(e) {
if(e && e.target !== document.getElementById('prompt-modal-overlay')) return;
resetBottomSheet_(document.getElementById('prompt-modal'));
document.getElementById('prompt-modal').classList.remove('open');
releaseModalFocusTrap_();
setTimeout(function(){
  document.getElementById('prompt-modal-overlay').classList.remove('open');
  unlockBodyScroll_();
  scheduleAppToastLift_();
  restoreDetailFocusTrapIfOpen_();
}, 280);
}

var genPendingCount = 0;
var genActiveJob = null;
var genUiTimer = null;
var genBatchRunning = false;
var genBatchState = null;

function estimateDraftMs(catId) {
  if (isThreadCategory(catId)) return 45000;
  if (isHeiljagyaeCategory(catId)) return 70000;
  return 65000;
}

function formatRoughCountdown(sec) {
  sec = Math.max(0, Math.floor(sec));
  if (sec <= 0) return '마무리 중';
  if (sec < 60) return sec + '초';
  var m = Math.floor(sec / 60);
  var s = sec % 60;
  if (s === 0) return m + '분';
  return m + '분 ' + s + '초';
}

function ensureGenUiTimer() {
  if (genUiTimer) return;
  genUiTimer = setInterval(function () {
    updateGenIndicator();
  }, 400);
}

function stopGenUiTimer() {
  if (genUiTimer) {
    clearInterval(genUiTimer);
    genUiTimer = null;
  }
}

function beginGenIndicator() {
  genPendingCount++;
  ensureGenUiTimer();
  updateGenIndicator();
}
function endGenIndicator() {
  genPendingCount = Math.max(0, genPendingCount - 1);
  updateGenIndicator();
  if (genPendingCount === 0 && !genActiveJob) stopGenUiTimer();
}
function updateGenIndicator() {
  var focusSnap = captureTextFieldFocus_();
  updateInstaPendingCountdown_();
  updateThreadsPendingCountdown_();
  var el = document.getElementById('gen-status-bar');
  var nav = document.querySelector('.sticky-cat-nav');
  var busy = genPendingCount > 0 || genActiveJob;
  if (!el) {
    if(nav) nav.classList.toggle('gen-busy', busy);
    restoreTextFieldFocus_(focusSnap);
    return;
  }
  if (!busy) {
    el.classList.remove('show');
    if(nav) nav.classList.remove('gen-busy');
    stopGenUiTimer();
    var regenBtnIdle = document.querySelector('.sheet-actions .btn-regen');
    if(regenBtnIdle){ regenBtnIdle.disabled = false; regenBtnIdle.textContent = '재생성'; }
    restoreTextFieldFocus_(focusSnap);
    return;
  }
  el.classList.add('show');
  if(nav) nav.classList.add('gen-busy');
  var parts = [];
  if (genActiveJob && genActiveJob.topic !== undefined) {
    var t = genActiveJob.topic || '주제';
    if (t.length > 36) t = t.slice(0, 36) + '…';
    var leftSec = (genActiveJob.endMs - Date.now()) / 1000;
    parts.push('「' + t + '」');
    parts.push('남은 시간 약 ' + formatRoughCountdown(leftSec));
  } else if (genPendingCount > 0) {
    var queueAhead = genActiveJob ? Math.max(0, genPendingCount - 1) : genPendingCount;
    if(queueAhead > 0){
      var estCatId = (genActiveJob && genActiveJob.catId != null) ? genActiveJob.catId : (state.selectedCatId != null ? state.selectedCatId : state.currentCat);
      var waitSec = Math.ceil(queueAhead * estimateDraftMs(estCatId) / 1000);
      parts.push('대기 예상 약 ' + formatRoughCountdown(waitSec));
    } else {
      parts.push('순서 대기 중');
    }
  }
  if (genBatchState && genBatchState.total > 0) {
    parts.push('일괄 ' + genBatchState.done + '/' + genBatchState.total);
    if (genBatchState.catName) parts.push(genBatchState.catName);
  }
  if (genPendingCount > 1) {
    parts.push('요청 ' + genPendingCount + '건');
  }
  var prefix = '초안 작성 중';
  if(genActiveJob && genActiveJob.kind === 'insta') prefix = '인스타 캡션 작성 중';
  else if(genActiveJob && genActiveJob.kind === 'threads') prefix = '쓰레드 글 작성 중';
  var nextText = prefix + ' · ' + parts.join(' · ');
  if(el.textContent !== nextText) el.textContent = nextText;
  var regenBtn = document.querySelector('.sheet-actions .btn-regen');
  if(regenBtn){
    var selId = state.selectedId;
    if(genActiveJob && genActiveJob.draftId === selId && (!genActiveJob.kind || genActiveJob.kind === 'draft')){
      var leftR = (genActiveJob.endMs - Date.now()) / 1000;
      regenBtn.disabled = true;
      regenBtn.textContent = buttonCountdownText_('재생성 중', leftR);
    } else if(genPendingCount > 0 && !genBatchRunning){
      regenBtn.disabled = true;
      if(genActiveJob && genActiveJob.draftId !== selId){
        var qAhead = Math.max(0, genPendingCount - 1);
        if(qAhead > 0){
          var qCat = state.selectedCatId != null ? state.selectedCatId : state.currentCat;
          regenBtn.textContent = '재생성 중 · 대기 ' + formatRoughCountdown(Math.ceil(qAhead * estimateDraftMs(qCat) / 1000));
        } else {
          regenBtn.textContent = '재생성 중 · 대기 중';
        }
      } else {
        regenBtn.textContent = '재생성 중 · 대기 중';
      }
    } else {
      regenBtn.disabled = false;
      regenBtn.textContent = '재생성';
    }
  }
  document.querySelectorAll('.btn-gen-big, .sheet-gen-cta button').forEach(function(genBtn){
    if(!genBtn || !genBtn.getAttribute('onclick') || genBtn.getAttribute('onclick').indexOf('genContent') < 0) return;
    if(genActiveJob && genActiveJob.draftId === selId && (!genActiveJob.kind || genActiveJob.kind === 'draft')){
      var leftG = (genActiveJob.endMs - Date.now()) / 1000;
      if(!genBtn.getAttribute('data-planner-idle')) genBtn.setAttribute('data-planner-idle', genBtn.textContent);
      genBtn.disabled = true;
      genBtn.textContent = buttonCountdownText_(genBtn.classList.contains('btn-gen-big') ? '재생성 중' : '생성 중', leftG);
    } else if(!busy){
      if(genBtn.getAttribute('data-planner-idle')){
        genBtn.textContent = genBtn.getAttribute('data-planner-idle');
        genBtn.removeAttribute('data-planner-idle');
      }
      genBtn.disabled = false;
    }
  });
  restoreTextFieldFocus_(focusSnap);
}

function getMissingDraftsForCat_(catId){
  var cat = CATEGORIES[catId];
  if(!cat || !cat.drafts) return [];
  return cat.drafts.filter(function(d){ return d && d.id && !draftHasContent(d); });
}

window.genAllMissingForCurrentCat = async function(forceRegen){
  var catId = state.currentCat;
  var cat = CATEGORIES[catId];
  if(!cat) return;
  if(!state.apiKey){ openApiModal(); return; }
  if(genBatchRunning || genPendingCount > 0 || genActiveJob){
    setAppToast('이미 초안을 만들고 있어요. 끝난 뒤 다시 시도해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  var pending = forceRegen
    ? cat.drafts.filter(function(d){ return d && d.id; })
    : getMissingDraftsForCat_(catId);
  if(pending.length === 0){
    setAppToast(forceRegen ? '생성할 주제가 없어요.' : '「' + cat.name + '」 미작성 주제가 없어요.\n이미 전부 초안이 있어요.', { duration: 4500, variant: 'ok' });
    return;
  }
  var estMin = Math.max(1, Math.ceil(pending.length * estimateDraftMs(catId) / 60000));
  var msg = '「' + cat.name + '」 ' + pending.length + '건을 순서대로 만듭니다.\n' +
    '대략 ' + estMin + '분 이상 걸릴 수 있어요. 이 탭·브라우저를 닫지 마세요.\n\n계속할까요?';
  if(!confirm(msg)) return;

  genBatchRunning = true;
  genBatchState = { total: pending.length, done: 0, catName: cat.name, ok: 0, fail: 0 };
  setAppToast('「' + cat.name + '」 미작성 ' + pending.length + '건 생성을 시작했어요…', { duration: 5000, variant: 'ok' });
  renderMain();

  var okCount = 0;
  var failCount = 0;
  for(var i = 0; i < pending.length; i++){
    var d = pending[i];
    var ok = await window.enqueueDraftGeneration(catId, d.id, { batch: true });
    if(ok) okCount++; else failCount++;
    genBatchState.done = i + 1;
    updateGenIndicator();
    renderMain();
  }

  genBatchRunning = false;
  genBatchState = null;
  updateGenIndicator();
  renderMain();
  setAppToast(
    '「' + cat.name + '」 일괄 생성 끝\n성공 ' + okCount + '건' +
    (failCount ? '\n실패 ' + failCount + '건 — 해당 카드에서 재생성해 주세요' : ''),
    { duration: 7500, variant: failCount ? 'err' : 'ok' }
  );
};

window.enqueueDraftGeneration = async function(jobCatId, jobDraftId, opts){
opts = opts || {};
if(!state.apiKey){
  if(!opts.dailyAuto && !opts.batch) openApiModal();
  return false;
}
var cat0 = CATEGORIES[jobCatId];
if(!cat0){
  if(!opts.dailyAuto && !opts.batch && typeof setAppToast === 'function') setAppToast('카테고리를 찾을 수 없어요.', { duration: 4000, variant: 'err' });
  return false;
}
var draft0 = cat0.drafts.find(function(d){ return d.id === jobDraftId; });
if(!draft0){
  if(!opts.dailyAuto && !opts.batch && typeof setAppToast === 'function') setAppToast('선택된 초안을 찾을 수 없어요. 카드를 다시 눌러 주세요.', { duration: 4000, variant: 'err' });
  return false;
}
if(state.selectedId === jobDraftId){
  flushDraftBrandFieldsFromDom_();
  save({ skipDriveUpload: !!(opts.batch || opts.dailyAuto), skipGasPush: !!(opts.batch || opts.dailyAuto) });
}
var jobTopic = draft0.topic;

if(opts.userInitiated){
  setAppToast('백그라운드에서 초안을 만들고 있어요.\n다른 카드나 브라우저 탭에서도 순서대로 처리되며, 완료되면 알려드릴게요.', { duration: 3000 });
  closeSheet();
}
beginGenIndicator();

async function runDraftJob() {
var catId = jobCatId;
var cat = CATEGORIES[catId];
var draft = cat.drafts.find(function(d){ return d.id === jobDraftId; });
if(!draft) throw new Error('초안을 찾을 수 없어요');

genActiveJob = { topic: draft.topic || '', endMs: Date.now() + estimateDraftMs(catId), draftId: jobDraftId, catId: catId };
updateGenIndicator();
try {

const blogGuide = getCatPromptForGeneration_(catId, 'blog');
const communityGuide = getCatPromptForGeneration_(catId, 'community');
const threadGuide = getCatPromptForGeneration_(catId, 'thread');
const imageGuide = getCatPromptForGeneration_(catId, 'image');
const baseInfo = getBasePrompt();
const brandBlock = buildBrandContextForPrompt_(catId, draft);
const briefPromptLines = buildDraftBriefPromptLines_(draft, catId);
const imagePromptGuide = buildImagePromptGuide(draft.topic, draft.angle, imageGuide, catId);

const imgJsonTail = buildImageGptVisualsJsonExample_(catId);

let prompt;
if(isDailyShareCategory(catId)){
  var dailyCtxBlock = buildDailyShareContextBlock_();
  prompt = `${baseInfo}

${brandBlock}
${dailyCtxBlock ? '\n\n' + dailyCtxBlock : ''}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}
주제: "${draft.topic}"
${briefPromptLines}

[일상 공유 작성 지침]
${threadGuide}

이 카테고리는 **담백한 생활 나눔 한 덩어리**만 만듭니다. 핵심 메시지 하나 + 장면·관찰, 짧은 감탄·철학 1문장으로 공감 한 스푼. 몸·날씨 이야기엔 **근골격계 전문가 시선 1~2문장**만. 강의·임상·홍보·과한 감성 톤 금지. 응답 JSON에는 **thread 키 하나만** 넣으세요.

2026년 5~6월 — 주제·각도·사진에 맞을 때만 계절·날씨를 자연스럽게. JSON만 출력:
{
  "thread": {
    "topicTitle": "오늘의 한 줄 (평서·짧은 감탄·장면 — 질문형·독자에게 묻는 말 금지)",
    "summary": "topicTitle에 이어지는 연속 본문. 3~7문장. 관찰 → 핵심 한 가지 → (선택) 짧은 감탄·철학 1문장. 담백·구어체. 몸·날씨 맥락이 맞을 때만 가벼운 전문가 시선 1~2문장(강의 톤 금지). 억지 공감·질문·과한 감성 없음. 번호·불릿 금지."
  }
}

thread.summary는 **하나의 문자열**만.`;
} else if(isHeiljagyaeCategory(catId)){
  const hjImgGuide = buildHeiljagyaeImagePromptGuide(draft.topic, draft.angle, imageGuide);
  const heiljagyaeImgJsonTail = buildImageGptVisualsJsonExample_(7);
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}
주제: "${draft.topic}"
${briefPromptLines}

[힐자계 아파트너 게시판 작성 지침]
${communityGuide}

${hjImgGuide}

이 카테고리는 **아파트너 게시판용 community**와 **추천 이미지 영문 프롬프트 2개(images.gptVisuals)** 만 만듭니다. blog, insta, thread 키는 JSON에 넣지 마세요.

2026년 5~6월 봄·초여름 — 주제·각도에 맞을 때만 계절감(산책·냉방·꽃가루·붓기 등)을 자연스럽게. JSON만 출력:
{
"community": {
"title": "🌿 질문형·공감형 한 줄",
"problem": "문제 제기 2~4문장. 불릿·번호 없이 자연스럽게. 문장(문단) 사이 빈 줄. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스",
"selfCare": "👉 로 시작. 동작·자세·초·회·분을 앞쪽에. '시원한 지점에서 멈추기' 뉘앙스",
"explanation": "원리 설명 2~5문장. 문단 사이 빈 줄. 왜 도움이 되는지+비유+복잡하지 않다는 마무리. 옆집 이웃 톤"
},
${heiljagyaeImgJsonTail}
}

community에는 인사말·고정 마무리 넣지 말 것. 글 흐름은 **문제 제기 → selfCare(해결책) → explanation(원리)** 순. selfCare는 👉로 시작.

반드시 images.gptVisuals는 **정확히 2개**. 각 prompt는 완성된 영문 한 덩어리. ①번은 role thumbnail + overlay 필드. 예시 영문은 그대로 복사하지 말고 주제·각도·selfCare에 맞게 새로 쓸 것.`;
} else if(isGeneralAudienceCategory(catId)){
  const hubCtaHint = getSymptomHubCtaHintForTopic_(draft.topic);
  const generalImgJsonTail = buildImageGptVisualsJsonExample_(catId);
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}
주제: "${draft.topic}"
${briefPromptLines}

[블로그 작성 지침]
${blogGuide}

${imagePromptGuide}

이 카테고리는 **blog(3단 구조)**와 **images(2장)** 만 만듭니다. insta, notebookLM, community, thread 키는 JSON에 넣지 마세요.

2026년 봄/초여름 — 주제·각도에 맞을 때만 계절감을 자연스럽게. JSON만 응답:
{
"blog": {
"title": "호기심·질문형 한 줄. 증상형이면 증상+지역·프로그램 키워드를 자연스럽게 (35자 내외, 과장 금지)",
"problem": "문제 제기 2~4문장. 불릿·번호 없이. 문장(문단) 사이 빈 줄. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스",
"selfCare": "👉 로 시작. 동작·자세·초·회·분을 앞쪽에. '시원한 지점에서 멈추기' 뉘앙스",
"explanation": "맨 앞 2~3문장 TL;DR(핵심 결론) → 원리 설명+GEO 구조. 문단 사이 빈 줄. 왜 도움이 되는지+비유+복잡하지 않다는 마무리",
"cta": "마무리 행동 유도 (미카닥 박준규·블로그/상담·증상 허브 URL 자연스럽게 언급)",
"hashtags": ["태그1","태그2","태그3","태그4","태그5","태그6"]
},
${generalImgJsonTail}
}

글 흐름은 **문제 제기 → selfCare → explanation** 순. selfCare는 👉로 시작. "N단계 —" 표기 금지.

[증상 허브 CTA 참고] ${hubCtaHint}

반드시 images.gptVisuals는 **정확히 2개**. ②번 동작은 blog.selfCare와 일치. ①번은 role thumbnail + overlay 필드 포함.`;
} else if(isExpertCourseCategory(catId)){
  const expertImgJsonTail = buildImageGptVisualsJsonExample_(catId, { expert: true });
  const refHint = getDraftReferenceText_(draft)
    ? '**[작성자 참고]의 영상 분석·사진 메모가 글의 유일한 근거**입니다. 그 범위 안에서만 작성하세요.'
    : '참고 메모·영상 분석이 없습니다. 주제·각도 범위 안에서만 **짧게** 쓰고, 억지로 채우지 마세요.';
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${getProgramAudienceLine_(catId)}
주제: "${draft.topic}"
${briefPromptLines}

[작성 전제 — 매우 중요]
이 글은 교육·강의 때 **촬영한 영상** 또는 **실습·시연 사진**을 공유하며, 그 내용에 맞춰 쓰는 글입니다.
${refHint}

[블로그 작성 지침]
${blogGuide}

${imagePromptGuide}

이 카테고리는 **blog**와 **images(2장)** 만 만듭니다. insta, notebookLM, community, thread 키는 JSON에 넣지 마세요.

글 흐름: **영상·사진 맥락(hook) → 시연·핵심 포인트(outline) → 원리 설명(draft, 본문 중심)**

JSON만 응답:
{
"blog": {
"title": "현장에서 궁금해할 테크닉·질문 한 줄 (35자 내외, 과장·낚시 금지)",
"hook": "이번 영상·사진에서 다룬 장면·맥락 2~3문장",
"outline": ["시연·테크닉 포인트1","포인트2","주의사항"],
"draft": "650~1,000자. 테크닉형은 원리·메커니즘·현장 적용, 연수 후기형은 실제 질문·역할의 경계·달라진 관점. 참고·영상·사진 범위 안만",
"cta": "수강·등록 유도 금지. 가벼운 마무리",
"hashtags": ["태그1","태그2","태그3"]
},
${expertImgJsonTail}
}

반드시 images.gptVisuals는 **정확히 2개**. ②번은 blog.outline·draft의 시연·테크닉과 일치. ①번은 role thumbnail + overlay 필드 포함.`;
} else {
  throw new Error('이 카테고리는 자동 초안 생성을 지원하지 않아요.');
}

var prevYoutubeAnalysis = draft.youtubeAnalysis || '';
try {
  await ensureDraftYoutubeAnalysis_(draft, catId);
  if(draft.youtubeAnalysis && draft.youtubeAnalysis !== prevYoutubeAnalysis) save();
} catch(ytGenErr){
  console.warn('[유튜브 분석]', ytGenErr);
}

prompt = appendDraftReferenceToPrompt_(prompt, draft, catId);
if(isUserAddedDraftId_(draft.id) && getDraftReferenceText_(draft)){
  prompt += '\n\n[추가 입력 충실도]\n이 초안은 「추가」로 만든 주제입니다. 블로그/쓰레드/게시판 **제목·본문의 핵심 메시지**가 위 [작성자 참고]와 주제·각도에서 **벗어나지 않게** 하세요.';
}

var draftRefImages = getDraftRefImages_(draft);
if(draftRefImages.length){
  if(isDailyShareCategory(catId)){
    prompt += '\n\n[첨부 사진' + (draftRefImages.length > 1 ? ' ' + draftRefImages.length + '장' : '') + '] 사진 장면·분위기를 본문에 녹이세요. 교육·강의·세미나·클리닉·전문가 모임 사진이면 **전문 설명 금지** — "오늘 여기 다녀왔는데", "피곤하지만 좋았다" 같은 **일기·생활 나눔**만. 진단·처방·효과 단정 금지.';
  } else {
    prompt += '\n\n[첨부 참고 사진' + (draftRefImages.length > 1 ? ' ' + draftRefImages.length + '장' : '') + '] 사진에 보이는 자세·부위·상황을 topic·본문에 반영하세요. 과장·단정적 진단 표현은 피하세요.';
  }
}

prompt += '\n\n[출력 형식 — 필수]\n응답 전체는 JSON 객체 하나만. 서문·설명·「네」「알겠습니다」금지. 첫 문자 { 마지막 문자 }.';

const content = await callClaudePlannerForDraftJson_(prompt, {
  maxTokens: isThreadCategory(catId) ? 2048 : (isHeiljagyaeCategory(catId) ? 4096 : 4800),
  image: draftRefImages.length ? draftRefImages : null
});
if(!content || typeof content !== 'object' || content._array){
  throw new Error('AI가 올바른 초안 JSON 객체를 주지 않았어요. 다시 시도해 주세요.');
}
if(!hasUsableAiDraftContent_(content) && !content.blog && !content.thread && !content.community && !content.images){
  throw new Error('초안 본문이 비어 있어요. 다시 시도해 주세요.');
}
content.thread = normalizeThreadBlock(content.thread);
if(isThreadCategory(catId)){
  content.community = null;
  delete content.blog;
  delete content.insta;
  delete content.images;
} else if(isHeiljagyaeCategory(catId)){
  content.community = normalizeCommunityBlock(content.community);
  content.images = normalizeImagesBlock(content.images);
  normalizeContentImages_(content, catId);
  delete content.blog;
  delete content.insta;
  delete content.thread;
} else {
  content.images = normalizeImagesBlock(content.images);
  delete content.community;
  delete content.thread;
  if(content.blog) content.blog = normalizeBlogBlock(content.blog, catId);
  normalizeContentImages_(content, catId);
  delete content.insta;
  delete content.threads;
}

if(!state.published[jobDraftId]) state.published[jobDraftId]={};
state.published[jobDraftId].content = content;
state.generatedOnly[jobDraftId] = content;
clearRefImageFromDraft_(jobDraftId);
save({ driveImmediate: true, gasImmediate: true });
var nextTab = isThreadCategory(catId) ? 'thread' : (isHeiljagyaeCategory(catId) ? 'community' : 'blog');
var ov = document.getElementById('detail-overlay');
if(ov && ov.classList.contains('open') && state.selectedId === jobDraftId && state.selectedCatId === jobCatId){
  var stayTab = normalizeSheetTabForCategory_(state.activeTab, jobCatId) || nextTab;
  state.activeTab = stayTab;
  setOpenDetailHash_(jobDraftId, jobCatId, stayTab);
  renderSheetContent(content);
}
renderTabs();
renderMain();
} finally {
  genActiveJob = null;
  updateGenIndicator();
}
}

try {
  if (navigator.locks && navigator.locks.request) {
    await navigator.locks.request('ht-planner-draft-queue', function(){ return runDraftJob(); });
  } else {
    await runDraftJob();
  }
  if(opts.openDetailOnComplete){
    var detailTab = opts.openDetailTab || (isThreadCategory(jobCatId) ? 'thread' : (isHeiljagyaeCategory(jobCatId) ? 'community' : 'blog'));
    openDetail(jobDraftId, jobCatId, detailTab);
  } else if(opts.dailyAuto){
    setAppToast('오늘의 발행 초안 완료\n«' + jobTopic + '»\n알림을 누르면 바로 열어요.', { duration: 7500, variant: 'ok' });
  } else if(!opts.batch){
    setAppToast('초안 생성 완료\n«' + jobTopic + '»', { duration: 6500, variant: 'ok' });
  }
  if(!opts.batch && !opts.openDetailOnComplete) tryNotifyDraftDone(jobTopic, true, jobDraftId, jobCatId, !!opts.dailyAuto);
  return true;
} catch (e) {
  var errMsg = (e && e.message) ? e.message : String(e);
  if(!opts.dailyAuto && !opts.batch){
    setAppToast('초안 생성에 실패했어요.\n' + errMsg + '\n\n같은 화면에서 다시 시도해 주세요.', { duration: 9000, variant: 'err' });
  }
  if(!opts.batch) tryNotifyDraftDone(jobTopic, false, jobDraftId, jobCatId, !!opts.dailyAuto);
  return false;
} finally {
  endGenIndicator();
}
};

window.genContent = async function(ev){
  if(!state.selectedId){
    if(typeof setAppToast === 'function') setAppToast('먼저 초안 카드를 선택해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  var clickBtn = ev && ev.target && ev.target.closest ? ev.target.closest('button') : null;
  var draftId = state.selectedId;
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var tab = state.activeTab;

  if(isBlogInstaCategory(catId) && tab === 'insta'){
    if(!state.apiKey){
      openApiModal();
      return;
    }
    if(instaBgByDraft[draftId]){
      setAppToast('인스타 캡션을 만들고 있어요.\n잠시만 기다려 주세요.', { duration: 4500, variant: 'ok' });
      return;
    }
    var igContent = getDraftContent_(draftId);
    if(!igContent || !igContent.blog || !blogHasMinimumContent_(catId, igContent.blog)){
      setAppToast('블로그 초안이 없어요.\n블로그·이미지 탭에서 먼저 초안을 생성해 주세요.', { duration: 5000, variant: 'err' });
      return;
    }
    var cat = CATEGORIES[catId];
    var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
    if(clickBtn) startButtonCountdown_(clickBtn, { estimateSec: Math.ceil(INSTA_BG_ESTIMATE_MS / 1000), busyLabel: '재생성 중', idleText: clickBtn.textContent });
    enqueueInstaFromBlog_(draftId, catId, draft ? draft.topic : '', igContent.blog);
    setAppToast('블로그 글 기준으로 인스타 캡션을 다시 만들고 있어요…', { duration: 5000, variant: 'ok' });
    return;
  }

  if(isBlogInstaCategory(catId) && tab === 'threads'){
    if(!state.apiKey){
      openApiModal();
      return;
    }
    if(threadsBgByDraft[draftId]){
      setAppToast('쓰레드 글을 만들고 있어요.\n잠시만 기다려 주세요.', { duration: 4500, variant: 'ok' });
      return;
    }
    var thBlogContent = getDraftContent_(draftId);
    if(!thBlogContent || !thBlogContent.blog){
      setAppToast('블로그 글이 없어요.\n블로그 탭에서 초안을 먼저 만들어 주세요.', { duration: 5000, variant: 'err' });
      return;
    }
    var catTh = CATEGORIES[catId];
    var draftTh = catTh && catTh.drafts.find(function(d){ return d.id === draftId; });
    if(clickBtn) startButtonCountdown_(clickBtn, { estimateSec: Math.ceil(THREADS_BG_ESTIMATE_MS / 1000), busyLabel: '재생성 중', idleText: clickBtn.textContent });
    enqueueThreadsFromBlog_(draftId, catId, draftTh ? draftTh.topic : '', thBlogContent.blog, { force: true });
    setAppToast('블로그 글 기준으로 쓰레드(본문+댓글)를 다시 만들고 있어요…', { duration: 5000, variant: 'ok' });
    return;
  }

  var estSec = Math.ceil(estimateDraftMs(catId) / 1000);
  if(clickBtn && !clickBtn.classList.contains('btn-regen')){
    var busyLabel = clickBtn.classList.contains('btn-gen-big') ? '재생성 중' : '생성 중';
    startButtonCountdown_(clickBtn, { estimateSec: estSec, busyLabel: busyLabel, idleText: clickBtn.textContent });
  }
  try {
    await window.enqueueDraftGeneration(catId, draftId, { userInitiated: true });
  } finally {
    if(clickBtn && !clickBtn.classList.contains('btn-regen')) stopButtonCountdown_(clickBtn);
  }
};