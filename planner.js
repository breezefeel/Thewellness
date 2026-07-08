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
  { id:1, icon:"", name:"리:얼 Movement",   color:"#7AF0C8", audience:"일반인",
    sub:"Re-Alignment Movement Center — 패시브 스트레칭 · 기능운동 · 자세교정",
    drafts:[
      {id:"d1-0", topic:"스트레칭을 매일 해도 왜 몸이 안 풀릴까요?",           angle:"패시브 스트레칭의 올바른 방법과 잘못된 습관 교정"},
      {id:"d1-1", topic:"운동 전 5분, 이것만 하면 부상이 없습니다",            angle:"기능적 워밍업 루틴 — 관절 가동성 + 신경계 활성화"},
      {id:"d1-2", topic:"바른 자세, 오래 유지하면 오히려 독이 되는 이유",      angle:"정적 자세의 한계와 동적 자세 교정 개념 소개"},
      {id:"d1-3", topic:"앉아서 일하는 당신을 위한 3분 루틴",                  angle:"재택·사무직을 위한 척추-고관절 기능운동 시퀀스"},
      {id:"d1-4", topic:"걷기만 해도 자세가 교정된다, 가능한 이야기일까요?",   angle:"보행 패턴과 자세 교정의 연관성, 올바른 걷기 방법"},
    ]},
  { id:2, icon:"", name:"얼굴 관리",       color:"#F0C87A", audience:"일반인",
    sub:"얼굴 교정 · 작은얼굴",
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
  { id:5, icon:"", name:"리:얼 Movement 전문가 과정", color:"#7AB8F0", audience:"전문가",
    sub:"Re-Alignment Movement Center · 전문가 교육",
    drafts:[
      {id:"d5-0", topic:"패시브 스트레칭을 언제, 어떻게 써야 하는가?",          angle:"억제-이완 테크닉의 원리와 임상 적용 타이밍"},
      {id:"d5-1", topic:"기능운동, 치료의 끝이 아닌 연결이다",                  angle:"도수치료 후 기능운동으로의 전환 — 리:얼 Movement 접근 철학"},
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
const CAT_TAB_NAV_ROWS = [[0, 1, 2, 7], [3, 5, 4, 6, 8]];
const CAT_TAB_SHORT = {
  0: '도수치료',
  1: '리:얼 움직임',
  2: 'Re:Al 뷰티',
  7: '힐자계',
  3: 'CMT 과정',
  5: 'Re:Al 과정',
  4: 'IFC 과정',
  6: '일상 공유',
  8: '지점·브랜딩'
};
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
function opsBranchItem_(id, text, hint){
  return { id: id, text: text, hint: hint || '' };
}
function buildOpsGuideForItem_(item, branchId){
  var byId = item && item.id ? String(item.id) : '';
  var text = String(item && item.text || '').trim();
  var hint = String(item && item.hint || '').trim();
  if(!text) return null;
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
      '3) 소개글에 "병원 연계 + 운동·재활 병행" 톤 반영',
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
    var place = [
      '무엇을 하나요: 네이버 플레이스 기본 정보·소개글·사진을 지점 톤에 맞춰 정비합니다.',
      '어떻게 하나요:',
      '1) 지점 기본정보(상호/카테고리/전화/영업시간) 정확도 확인',
      '2) 소개글 첫 문장에 포지셔닝 반영(병원 연계 + 운동·재활 병행)',
      '3) 사진 6~10장 등록(외관/내부/프로그램 흐름/상담 공간)',
      '4) 링크(프로필·블로그·예약 경로) 점검',
      '5) 수정 후 모바일/PC 노출 화면 캡처 저장',
      '제안: 소개글은 "누구를 돕는지 + 어떤 방식인지 + 어디서 이용 가능한지" 3문장 구조로 유지하세요.',
      '함께 기획/검토: 약수/작전 소개글을 완전히 같게 갈지, 상권 특성에 맞춰 첫 문장만 다르게 갈지 결정합니다.'
    ].join('\n');
    return { short: place, full: place, long: true };
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
  } else if(text.indexOf('플레이스') >= 0){
    how = '플레이스 기본 정보(영업시간·전화·카테고리)를 먼저 고정하고, 소개글은 병원 연계+운동·재활 병행 포지셔닝 한 문장으로 통일합니다.';
    suggest = '사진은 외관/내부/프로그램 흐름 순으로 6~10장 구성하고, 첫 3장은 브랜드 톤이 보이는 이미지로 배치하세요.';
  } else if(text.indexOf('블로그') >= 0){
    how = '주제별 카테고리를 먼저 나눈 뒤, 각 글 말미 CTA를 증상 허브 링크로 통일합니다. 글 구조는 문제 제기 → 셀프 케어 → 원리 설명 순서로 고정합니다.';
    suggest = '운영 부담을 줄이려면 주 1회 고정 발행일을 정하고, 같은 주제에서 제목만 바꾼 변형 글 2개를 미리 준비하세요.';
  } else if(text.indexOf('심의') >= 0 || text.indexOf('의료법') >= 0){
    how = '금지 표현/권장 표현 체크리스트를 먼저 만들고, 프로필·플래너·블로그 문구를 한 번에 대조해 같은 톤으로 맞춥니다.';
    suggest = '검토 시 "병원 우선 신호 안내 + 운동·재활 병행" 문장이 빠지지 않았는지 최종 확인 항목으로 넣어 주세요.';
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
  var intent = '병원 우선 신호는 명확히 안내하되, 기본 메시지는 운동·재활 프로그램 병행 관점이 드러나도록 정렬합니다.';
  var todo = '해야 할 일\n1) 기준 문장 확정\n2) 채널별 문장 확정\n3) 금지/권장 표현 확인\n4) 반영 위치 체크\n5) 반영 완료 로그 기록';
  var proposals = '제안 문장\n- 마스터 포지셔닝 1문장: 미카닥 박준규는 근골격계 문제를 병원 연계와 운동·재활 프로그램 병행 관점에서 안내합니다.\n- 프로필용: 병원 진료가 필요한 신호는 먼저 안내하고, 적신호를 제외하면 현재 상태에 맞는 운동·재활 프로그램을 병행하도록 돕습니다.\n- 블로그용: 증상 이해를 돕는 일반 정보와 함께 병원 우선 신호를 구분하고, 일상에서 병행 가능한 운동·재활 방향을 제시합니다.\n- 상담 결과/CTA용: 병원 우선 신호를 제외하면, 평가·상담을 통해 지금 가능한 운동·재활 프로그램부터 함께 시작해 보세요.\n- 플래너 프롬프트용: 병원 우선 신호를 분리 안내하고, 기본 톤은 운동·재활 프로그램 병행 관점으로 작성한다.';
  var placement = '반영 위치 가이드\n- 프로필: 홈/FAQ/증상 가이드/결과\n- 플래너: base prompt, 의료법·GEO 문구\n- 상담: 결과 카드/CTA/문진 후 안내\n- 블로그: 본문 말미 CTA + 허브 링크';

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
    proposals = '제안 문장\n- 소개글 첫 문장: 병원 우선 신호를 안내하고, 적신호를 제외하면 운동·재활 프로그램 병행을 제안합니다.';
    placement = '반영 위치 가이드\n- Google Business Profile 소개글\n- 지점별 Q&A/리뷰 답변 템플릿';
  } else if(byId === 'ops-g-9'){
    purpose = '블로그 시리즈를 운영 가능한 구조로 정리하고 허브 링크 CTA를 표준화합니다.';
    intent = '주제 누적과 상담 전환이 동시에 일어나도록 글 구조를 고정합니다.';
    todo = '해야 할 일\n1) 카테고리 3개 고정\n2) 주간 주제 1개 확정\n3) 문제→셀프케어→원리 구조 유지\n4) CTA 허브 링크 삽입\n5) 발행 후 반응 메모';
    proposals = '제안 문장\n- CTA: 병원 우선 신호를 제외하면, 평가·상담을 통해 현재 가능한 운동·재활 프로그램 병행 방향을 안내해 드립니다.';
    placement = '반영 위치 가이드\n- 블로그 본문 마지막 단락\n- 블로그 템플릿/자동 프롬프트';
  } else if(byId === 'ops-y-6' || byId === 'ops-j-6'){
    purpose = '네이버 플레이스 정보를 지점 운영 현실에 맞게 정비합니다.';
    intent = '검색 유입 후 방문/문의로 이어지는 신뢰 흐름을 만듭니다.';
    todo = '해야 할 일\n1) 기본 정보 정확도 확인\n2) 소개글 문장 통일\n3) 사진 업데이트\n4) 링크/문의 경로 점검\n5) 모바일 화면 확인';
    proposals = '제안 문장\n- 플레이스 소개글: 병원 진료가 필요한 경우를 먼저 안내하고, 그 외에는 운동·재활 프로그램 병행을 제안합니다.';
    placement = '반영 위치 가이드\n- 네이버 플레이스 소개글\n- 프로필/블로그 지점 안내 문구';
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
    proposals = '제안 문장 세트\n[마스터 포지셔닝]\n미카닥 박준규는 근골격계 문제를 병원 연계와 운동·재활 프로그램 병행 관점에서 안내합니다.\n\n[프로필용]\n병원 진료가 필요한 신호는 먼저 안내하고, 적신호를 제외하면 현재 상태에 맞는 운동·재활 프로그램 병행 방향을 제안합니다.\n\n[블로그용]\n증상 이해를 돕는 일반 정보와 함께 병원 우선 신호를 구분하고, 일상에서 병행 가능한 운동·재활 프로그램을 안내합니다.\n\n[상담 결과/CTA용]\n병원 우선 신호를 제외하면, 평가·상담을 통해 지금 가능한 운동·재활 프로그램부터 함께 시작해 보세요.\n\n[플래너 프롬프트용]\n병원 우선 신호를 분리 안내하고, 기본 톤은 운동·재활 프로그램 병행 관점으로 작성한다.\n\n[금지/권장]\n금지: 완치, 진단 확정, 처방, 수술 대신\n권장: 병원 진료 권유 + 운동·재활 병행 안내';
    placement = '반영 체크 로그\n- 프로필 홈/FAQ/결과\n- 증상 허브 프로그램 안내 블록\n- 플래너 base prompt/의료법·GEO 규칙\n- 상담 결과 카드/CTA';
  }

  var brief = opsPurposeIntent_(purpose, intent);
  function opsPurposeIntent_(p, i){ return '목적: ' + p + '\n의도: ' + i; }
  var proposalItems = [];
  if(byId === 'ops-g-1'){
    proposalItems = [
      { id:'master', title:'마스터 포지셔닝 1문장',
        brief: opsPurposeIntent_('전 채널의 기준이 되는 핵심 1문장을 확정합니다.', '근골격계·병원 연계·운동·재활 병행이 한 문장에 담기게 합니다.'),
        text: opsProposalWithReason_('미카닥 박준규는 근골격계 문제를 병원 연계와 운동·재활 프로그램 병행 관점에서 안내합니다.', '마스터 문장은 이후 채널별 문장 톤·방향의 기준이 됩니다.') },
      { id:'profile', title:'프로필용 문장',
        brief: opsPurposeIntent_('프로필·FAQ·증상 허브에 쓸 고객-facing 문장을 만듭니다.', '병원 우선 신호 안내와 운동·재활 병행이 자연스럽게 이어지게 합니다.'),
        text: opsProposalWithReason_('병원 진료가 필요한 신호는 먼저 안내하고, 적신호를 제외하면 현재 상태에 맞는 운동·재활 프로그램 병행 방향을 제안합니다.', '프로필·FAQ는 고객이 가장 먼저 읽는 구간이라 병원 안내와 병행 제안이 함께 드러나야 합니다.') },
      { id:'blog', title:'블로그용 문장',
        brief: opsPurposeIntent_('블로그 본문·말미 CTA에 쓸 문장을 만듭니다.', '정보 제공 톤을 유지하면서 병원 우선 신호와 병행 프로그램을 구분해 안내합니다.'),
        text: opsProposalWithReason_('증상 이해를 돕는 일반 정보와 함께 병원 우선 신호를 구분하고, 일상에서 병행 가능한 운동·재활 프로그램을 안내합니다.', '일반 정보 톤을 유지하면서 상담 연결로 자연스럽게 이어져야 합니다.') },
      { id:'cta', title:'상담 결과/CTA 문장',
        brief: opsPurposeIntent_('상담 결과 카드·문진 후 안내에 쓸 전환 문장을 만듭니다.', '평가·상담 후 다음 행동(프로그램 시작)으로 이어지게 합니다.'),
        text: opsProposalWithReason_('병원 우선 신호를 제외하면, 평가·상담을 통해 지금 가능한 운동·재활 프로그램부터 함께 시작해 보세요.', '상담 직후 다음 행동을 명확히 안내해 전환률을 높입니다.') },
      { id:'prompt', title:'플래너 프롬프트용 기준 문장',
        brief: opsPurposeIntent_('플래너 AI 프롬프트·의료법·GEO 규칙의 기준 문장을 만듭니다.', '자동 생성 콘텐츠가 같은 톤·경계를 지키게 합니다.'),
        text: opsProposalWithReason_('병원 우선 신호를 분리 안내하고, 기본 톤은 운동·재활 프로그램 병행 관점으로 작성한다.', 'AI 생성 콘텐츠가 같은 경계·톤을 지키도록 프롬프트에 고정합니다.') },
      { id:'lexicon', title:'금지/권장 표현',
        brief: opsPurposeIntent_('채널 공통으로 쓰지 않을 표현과 권장 표현을 정리합니다.', '의료법·광고 심의 리스크를 줄이면서 메시지 일관성을 유지합니다.'),
        text: opsProposalWithReason_('금지: 완치, 진단 확정, 처방, 수술 대신\n권장: 병원 진료 권유 + 운동·재활 병행 안내', '팀 전체가 같은 표현 경계를 쓰면 의료법·광고 심의 리스크를 줄일 수 있습니다.') }
    ];
  } else {
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
  var rv = om.review[itemId];
  var proposalsDone = !(rv.proposalItems || []).length || (rv.proposalItems || []).every(function(p){ return !!p.done; });
  var placementsDone = !(rv.placementChecks || []).length || (rv.placementChecks || []).every(function(c){ return !!c.done; });
  if(proposalsDone && placementsDone) om.checked[itemId] = true;
  else delete om.checked[itemId];
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
    opsBranchItem_('ops-g-1', '포지셔닝 문장 확정 — 근골격계 전문가 · 병원 연계 · 운동·재활 프로그램 병행'),
    opsBranchItem_('ops-g-2', '의료법 준수 문구·면책 — 프로필·블로그·상담 결과·플래너 프롬프트 동기화'),
    opsBranchItem_('ops-g-3', '저자 박스 템플릿 — 이름·자격·한 줄 전문 분야 (블로그·발행본 하단)'),
    opsBranchItem_('ops-g-4', '프로필 증상 허브 5개 — 허리·목·어깨·무릎·골반 (내용·딥링크·JSON-LD 점검)', buildSymptomHubLinksBlock_()),
    opsBranchItem_('ops-g-5', '프로필 FAQ + JSON-LD 반영·점검'),
    opsBranchItem_('ops-g-6', 'Bing Webmaster Tools — 사이트맵 제출 (ChatGPT 검색 대응)'),
    opsBranchItem_('ops-g-7', 'Google Business Profile 점검 (지점별)'),
    opsBranchItem_('ops-g-8', '월간 AI 인용 점검표 — 5엔진×핵심 키워드 수동 검색'),
    opsBranchItem_('ops-g-9', '네이버 블로그 시리즈·카테고리·지점 안내 글 구조 정리', buildBlogHubCtaSamples_()),
    opsBranchItem_('ops-g-10', '인스타·Threads 프로필·링크·하이라이트 정비'),
    opsBranchItem_('ops-g-11', '강사용·프로필·플래너 URL·동기화·배포 버전 점검'),
    opsBranchItem_('ops-g-12', 'Drive·서버 동기화·백업 주기 확인')
  ]},
  { id: 'ops-y-pre', branch: 'yaksu', phase: '1. 사전 준비', items: [
    opsBranchItem_('ops-y-1', '지점명·슬로건·프로그램 라인(기능운동·P-스트레칭·작은얼굴) 확정'),
    opsBranchItem_('ops-y-2', '의료·광고 문구 심의 — 병원 진료 권유 + 운동 프로그램 명시'),
    opsBranchItem_('ops-y-3', '상권·경쟁·키워드 조사 (약수·중구·필라테스·재활)'),
    opsBranchItem_('ops-y-4', '임대·인테리어·동선·치료실·운동 공간 계획'),
    opsBranchItem_('ops-y-5', '가격·이용권·프로그램 표 초안')
  ]},
  { id: 'ops-y-online', branch: 'yaksu', phase: '2. 온라인 채널', items: [
    opsBranchItem_('ops-y-6', '네이버 플레이스 등록·사진·영업시간·소개글'),
    opsBranchItem_('ops-y-7', '네이버 블로그 지점 위치 안내 글·지도 링크'),
    opsBranchItem_('ops-y-8', '프로필·홈페이지 약수 링크·문구 반영'),
    opsBranchItem_('ops-y-9', '지역×증상 롱테일 키워드 3개 · 프로필 허브·블로그 연결',
      '예: 약수 허리통증 · 약수 필라테스 허리 · 중구 재활\n글 말미 CTA에 허브 링크 1개:\n' + buildSymptomHubLinksBlock_()),
    opsBranchItem_('ops-y-10', '리뷰 유도 SOP — 증상 키워드 포함 후기 요청')
  ]},
  { id: 'ops-y-open', branch: 'yaksu', phase: '3. 오픈·운영', items: [
    opsBranchItem_('ops-y-11', '오프라인 안내판·명함·상담지·동의서'),
    opsBranchItem_('ops-y-12', '강사·스태프 온보딩 — PSP·병원 연계 안내 스크립트'),
    opsBranchItem_('ops-y-13', '오픈 이벤트·지역 홍보 (입주민·직장인)'),
    opsBranchItem_('ops-y-14', '오픈 4주 후 GEO·플레이스·리뷰 점검')
  ]},
  { id: 'ops-j-pre', branch: 'jakjeon', phase: '1. 사전 준비', items: [
    opsBranchItem_('ops-j-1', '지점명·슬로건·프로그램 라인(80분·50분·기능운동) 확정'),
    opsBranchItem_('ops-j-2', '의료·광고 문구 심의 — 병원 진료 권유 + 운동 프로그램 명시'),
    opsBranchItem_('ops-j-3', '상권·경쟁·키워드 조사 (작전·인천·재활·필라테스)'),
    opsBranchItem_('ops-j-4', '임대·인테리어·동선 계획'),
    opsBranchItem_('ops-j-5', '가격·이용권·프로그램 표 초안')
  ]},
  { id: 'ops-j-online', branch: 'jakjeon', phase: '2. 온라인 채널', items: [
    opsBranchItem_('ops-j-6', '네이버 플레이스 등록·사진·영업시간·소개글'),
    opsBranchItem_('ops-j-7', '네이버 블로그 작전 위치 안내 글·지도 링크'),
    opsBranchItem_('ops-j-8', '프로필·홈페이지 작전 링크·문구 반영'),
    opsBranchItem_('ops-j-9', '지역×증상 롱테일 키워드 3개 · 프로필 허브·블로그 연결',
      '예: 작전 허리통증 · 인천 필라테스 · 작전 재활\n글 말미 CTA에 허브 링크 1개:\n' + buildSymptomHubLinksBlock_()),
    opsBranchItem_('ops-j-10', '리뷰 유도 SOP — 증상 키워드 포함 후기 요청')
  ]},
  { id: 'ops-j-open', branch: 'jakjeon', phase: '3. 오픈·운영', items: [
    opsBranchItem_('ops-j-11', '오프라인 안내판·명함·상담지·동의서'),
    opsBranchItem_('ops-j-12', '강사·스태프 온보딩 — PSP·병원 연계 안내 스크립트'),
    opsBranchItem_('ops-j-13', '오픈 이벤트·지역 홍보'),
    opsBranchItem_('ops-j-14', '오픈 4주 후 GEO·플레이스·리뷰 점검')
  ]},
  { id: 'ops-n-plan', branch: 'new', phase: '1. 후보·기획', items: [
    opsBranchItem_('ops-n-1', '가상 지점명·지역 후보 2~3곳 메모'),
    opsBranchItem_('ops-n-2', '타깃 고객·프로그램 믹스 (병원 연계 vs 웰니스 비중)'),
    opsBranchItem_('ops-n-3', '상권 조사·경쟁 센터·임대료 범위'),
    opsBranchItem_('ops-n-4', '법인·계약·보험·소음·주차 등 리스크 체크'),
    opsBranchItem_('ops-n-5', '브랜드 톤·슬로건·약수/작전과 차별점')
  ]},
  { id: 'ops-n-brand', branch: 'new', phase: '2. 브랜딩·채널', items: [
    opsBranchItem_('ops-n-6', '플레이스·블로그·프로필용 지점 소개 초안'),
    opsBranchItem_('ops-n-7', '지역×증상 SEO 키워드 5개 선정',
      '허브 딥링크 참고:\n' + buildSymptomHubLinksBlock_()),
    opsBranchItem_('ops-n-8', '오픈 전 콘텐츠 4편 주제 (플래너에서 작성)'),
    opsBranchItem_('ops-n-9', '인테리어·사진 컨셉 10컷 리스트'),
    opsBranchItem_('ops-n-10', '의료법·광고 문구 초안 검토')
  ]},
  { id: 'ops-n-open', branch: 'new', phase: '3. 오픈 로드맵', items: [
    opsBranchItem_('ops-n-11', '약수·작전 체크리스트 복제 → 일정에 맞게 조정'),
    opsBranchItem_('ops-n-12', '오픈 D-30 / D-7 / D-day 할 일 캘린더'),
    opsBranchItem_('ops-n-13', '강사 채용·교육 일정'),
    opsBranchItem_('ops-n-14', '오픈 후 4주 GEO·리뷰·플레이스 점검')
  ]}
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
const SUBGOAL_MISC_ID = 'misc';
const SUBGOAL_MISC_LABEL = '기타 주제';
const PENDING_SUBGOAL_SS_KEY = 'ht_pending_subgoal_plan';
const PENDING_YEAR_SS_KEY = 'ht_pending_year_plan';
const SUBGOAL_PLAN_GEN_ESTIMATE_SEC = 55;
const YEAR_PLAN_GEN_ESTIMATE_SEC = 40;
const TOPIC_FIVE_ESTIMATE_SEC = 25;
const TOPIC_ONE_ESTIMATE_SEC = 14;
const TOPICS_BATCH_ESTIMATE_SEC = 55;
const TOPIC_REGEN_ESTIMATE_SEC = 20;
var plannerWaitUiTimer_ = null;

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
function isAnyPlannerWaitActive_(){
  return !!(state.yearPlanGenerating || state.subGoalPlanGenerating || state.plannerAiWait);
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
    var cdShort = formatCountdownShort_(getCountdownSec_(w.startedAt, w.estimateSec));
    if(w.statusElId){
      var sel = document.getElementById(w.statusElId);
      if(sel) sel.textContent = (w.label ? w.label + ' · ' : '') + cdShort;
    }
    if(w.btnSelector){
      document.querySelectorAll(w.btnSelector).forEach(function(btnW){
        if(!btnW.getAttribute('data-planner-idle')) btnW.setAttribute('data-planner-idle', btnW.textContent);
        btnW.disabled = true;
        btnW.textContent = cdShort;
      });
    }
    if(w.regenDraftId){
      var rb2 = document.querySelector('.ws-item-btn[data-regen-draft="' + w.regenDraftId + '"]');
      if(rb2){ rb2.disabled = true; rb2.textContent = cdShort; rb2.classList.add('generating'); }
      var mini2 = document.querySelector('.draft-card-refresh-mini[data-regen-draft="' + w.regenDraftId + '"]');
      if(mini2){ mini2.disabled = true; mini2.textContent = cdShort; }
    }
  }
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
const DAILY_SHARE_MASTER_BRIDGE = '일상 공유는 PSP·통증 설교가 아니라, 미카닥 박준규라는 사람의 신뢰·공감·20년 임상의 온기를 보여 주는 레이어. 1년 마스터 브랜드(왜·신뢰)와 직접 연결하지 않고 「이 사람은 진짜」로 기억되게 한다.';
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
- 일상 공유: 강의·홍보 없이 **믿을 만한 사람** — 공감·온기

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
  { id: 'season', label: '계절·날씨', note: '장마·더위·꽃가루… 몸 느낌 가볍게' },
  { id: 'body', label: '몸 컨디션', note: '피곤·뻐근함·가벼운 움직임' },
  { id: 'travel', label: '여행·이동', note: '다녀온 날·이동 후 컨디션' },
  { id: 'rest', label: '쉬는 날·감사', note: '커피·여유·소소한 기쁨' }
];

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
function sanitizeYearPlanObj_(plan){
  if(!plan) return plan;
  if(plan.intent != null) plan.intent = sanitizePersonalBrandText_(plan.intent);
  (plan.periods || []).forEach(sanitizeYearPeriodFields_);
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
※ 일반인에게는 「의료인」보다 **근골격계 전문가**·**왜를 설명하는 사람** 으로 기억되게. Doctor/닥터는 헤드라인·슬로gan 주어로 쓰지 않음.
※ 콘텐츠·기획·1년 브랜드 기획의 중심은 **개인 브랜드 '미카닥 박준규'**뿐입니다. 클리닉·병원·기관명은 intent·분기 주제·브랜딩 목표에 쓰지 마세요.
상세 PSP·프로그램 로드맵: ${PROFILE_BRAND_URL}

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
  return { intent: intent, themes: themes };
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
  var lines = ['[일상 공유 · 이번 달 테마]', DAILY_SHARE_MASTER_BRIDGE];
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
  save({ skipDriveUpload: true, skipGasPush: true });
};
window.toggleDailySharePanel_ = function(forceOpen){
  if(forceOpen === true) state.dailyShareCollapsed = false;
  else state.dailyShareCollapsed = state.dailyShareCollapsed === false;
  renderMain();
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
function getProgramPlanMeta_(catId){
  var pending = state.pendingSubGoalPlan;
  if(pending && pending.catId === catId && pending.plan){
    return {
      intent: String(pending.plan.intent || '').trim(),
      steps: (pending.plan.steps || []).map(function(s){
        return { id: s.id, title: s.title, summary: s.summary || '', rationale: s.rationale || '', pinned: !!s.pinned };
      })
    };
  }
  var plan = getSubGoalPlan_(catId);
  if(!plan) return { intent: '', steps: [] };
  return {
    intent: String(plan.intent || '').trim(),
    steps: (plan.steps || []).map(function(s){
      return { id: s.id, title: s.title, summary: s.summary || '', rationale: s.rationale || '', pinned: !!s.pinned };
    })
  };
}
function buildProgramPlanContextBlock_(catId, stepId){
  var cat = CATEGORIES[catId];
  var meta = getProgramPlanMeta_(catId);
  var outcome = getCategoryThreeMonthOutcome_(catId);
  var lines = ['[프로그램 기획 · ' + (cat ? cat.name + ' (' + cat.audience + ')' : '') + ']'];
  if(outcome) lines.push('3개월 후 독자: ' + outcome);
  if(meta.intent) lines.push('프로그램 기획 의도(하위 목표 순서·이유): ' + meta.intent);
  else lines.push('(프로그램 기획 의도 미작성 — 기획 워크숍에서 자세히 적어 주세요)');
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
        '<span class="planner-setup-step-label">② 사진·키워드로 주제 추가</span>' +
        '<button type="button" class="setup-step-btn" onclick="openAddForm_()">추가</button>' +
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
  return !!(p && p.catId === catId && p.plan && p.plan.steps && p.plan.steps.length && isPendingSubGoalPlanDirty_(catId));
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
    return pa.step - pb.step;
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
  if(state.pendingSubGoalPlan && state.pendingSubGoalPlan.catId === catId && hasSubGoalPlan_(catId)){
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
function countStepsNeedingTopics_(catId){
  var plan = getEffectiveSubGoalPlan_(catId);
  if(!plan || !plan.steps || !plan.steps.length) return 0;
  return plan.steps.filter(function(s){ return stepNeedsMoreTopics_(catId, String(s.id)); }).length;
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
    createdAt: new Date().toISOString()
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
    if(p && p.catId != null && p.plan && p.plan.steps && p.plan.steps.length){
      state.pendingSubGoalPlan = p;
    }
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
function getDraftRoadmapStepId_(draft, catId, draftIndex){
  var plan = getSubGoalPlan_(catId);
  if(!plan || !draft) return null;
  var meta = getDraftBrandMeta_(draft, catId, draftIndex);
  var miscLabel = getSubGoalMiscLabel_(plan);
  if(meta.series === miscLabel) return SUBGOAL_MISC_ID;
  for(var j = 0; j < plan.steps.length; j++){
    if(plan.steps[j].title === meta.series) return String(plan.steps[j].id);
  }
  var ov = state.draftBrandOverrides && state.draftBrandOverrides[draft.id];
  var stored = (ov && ov.roadmapStepId) || draft.roadmapStepId;
  if(stored){
    stored = String(stored);
    if(stored === SUBGOAL_MISC_ID) return SUBGOAL_MISC_ID;
    for(var i = 0; i < plan.steps.length; i++){
      if(String(plan.steps[i].id) === stored) return stored;
    }
  }
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
function isUnassignedDraftForSubGoal_(draft){
  if(!draft || !draft.id) return false;
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
  return '<span class="planner-clamp-text' + (extraClass ? ' ' + extraClass : '') + '" data-clamp="' + lines + '" title="클릭하면 전체 보기" role="button" tabindex="0" aria-expanded="false">' + escapeHtml(t) + '</span>';
}
function bindPlannerMainClickDelegation_(){
  if(document._plannerStepClickBound) return;
  document._plannerStepClickBound = true;
  document.addEventListener('click', function(ev){
    var clamp = ev.target.closest('.planner-clamp-text');
    if(clamp){
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
  if(collapsed){
    var topUnpub = getFirstUnpublishedDraftInStep_(drafts);
    if(!topUnpub) return '';
    return '<div class="subgoal-step-cards collapsed-preview">' +
      draftCardHTML(topUnpub, cat, false, cat.drafts.indexOf(topUnpub), true) +
    '</div>';
  }
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
    var pub = draftIsPublished_(d.id) ? '발행완료' : (draftHasContent(d) ? '초안있음' : '미작성');
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
window.fillAllStepTopicsWithAI_ = async function(catId, opts){
  opts = opts || {};
  catId = catId != null ? catId : state.currentCat;
  if(plannerAiBusy && !opts.silent) return { filled: 0, steps: 0 };
  if(!state.apiKey){
    if(!opts.silent) openApiModal();
    return { filled: 0, steps: 0 };
  }
  var plan = getEffectiveSubGoalPlan_(catId);
  var cat = CATEGORIES[catId];
  if(!plan || !cat || !plan.steps.length) return { filled: 0, steps: 0 };
  var needs = plan.steps.filter(function(s){
    return stepNeedsMoreTopics_(catId, String(s.id));
  });
  if(!needs.length) return { filled: 0, steps: 0 };
  if(!opts.silent && typeof setAppToast === 'function'){
    setAppToast('부족한 ' + needs.length + '개 단계에 주제를 채우고 있어요…', { duration: 4500, variant: 'ok' });
  }
  if(!opts.silent && document.querySelector('.btn-fill-all-topics')){
    startPlannerAiWait_({
      estimateSec: TOPICS_BATCH_ESTIMATE_SEC,
      btnSelector: '.btn-fill-all-topics',
      btnIdleText: '채우기'
    });
  }
  plannerAiBusy = true;
  var totalApplied = 0;
  try {
    var stepsBlock = plan.steps.map(function(s){
      var ex = getDraftsForSubGoalStep_(catId, String(s.id));
      var filled = countFilledTopicSlots_(catId, String(s.id));
      var pinned = ex.filter(function(d){ return state.pinnedDraftIds && state.pinnedDraftIds[d.id]; }).map(function(d){ return d.topic; });
      return 'stepId "' + s.id + '": ' + s.title + ' — ' + (s.summary || '') +
        ' · 현재 ' + filled + '/5' +
        (pinned.length ? ' · 고정: ' + pinned.join(', ') : '');
    }).join('\n');
    var prompt =
buildTopicPlanPromptPrefix_(catId, null) + '\n\n' +
'[하위 목표별 현황]\n' + stepsBlock + '\n\n' +
'각 stepId마다 주제 5개. 각 topic·angle은 해당 단계 의도(rationale)와 분기별·프로그램 의도에 맞게.\n' +
'JSON만: {"topicsByStep":{"1":[{"topic":"…","angle":"…"},…5개],"2":[…]}}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 4500 });
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var obj = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
    var byStep = obj.topicsByStep || {};
    needs.forEach(function(step){
      var sid = String(step.id);
      var topics = byStep[sid] || byStep[step.id];
      if(topics && topics.length){
        var merged = mergeAiTopicsToStepSlots_(catId, sid, topics);
        totalApplied += applyTopicsArrayToStep_(catId, sid, merged);
      }
    });
    for(var i = 0; i < needs.length; i++){
      var sid2 = String(needs[i].id);
      if(stepNeedsMoreTopics_(catId, sid2)){
        await suggestFiveTopicsForStep_(sid2, { silent: true });
      }
    }
    save({ driveImmediate: true });
    renderMain();
    if(document.getElementById('plan-workshop-overlay').classList.contains('open')) refreshPlanWorkshopModal_();
    if(!opts.silent && typeof setAppToast === 'function'){
      setAppToast('단계별 주제를 채웠어요.', { duration: 4000, variant: 'ok' });
    }
    return { filled: totalApplied, steps: needs.length };
  } catch(e){
    if(!opts.silent && typeof setAppToast === 'function'){
      setAppToast('주제 일괄 채우기 실패\n' + ((e && e.message) || e), { duration: 6000, variant: 'err' });
    }
    return { filled: 0, steps: needs.length, error: e };
  } finally {
    if(!opts.silent && document.querySelector('.btn-fill-all-topics')) stopPlannerAiWait_();
    plannerAiBusy = false;
  }
};
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
  var brief = getDraftWritingBrief_(draft, catId);
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
  (cat.drafts || []).forEach(function(d, di){
    if(!d || !d.id) return;
    var sid = getDraftRoadmapStepId_(d, catId, di);
    var title = getSubGoalStepTitle_(plan, sid);
    var meta = getDraftBrandMeta_(d, catId, di);
    if(sid === SUBGOAL_MISC_ID){
      if(meta.series !== miscLabel){
        var miscDrafts = getDraftsForSubGoalStep_(catId, SUBGOAL_MISC_ID, { live: true });
        var order = miscDrafts.indexOf(d) >= 0 ? miscDrafts.indexOf(d) + 1 : miscDrafts.length + 1;
        applyDraftRoadmapAssignment_(d, catId, SUBGOAL_MISC_ID, miscLabel, order, Math.max(miscDrafts.length, order));
      }
      return;
    }
    if(meta.series !== title){
      var slot = getDraftStepParts_(d, catId, di).step;
      if(slot < 1 || slot > 5) slot = firstEmptyStepSlot_(catId, sid) || 1;
      applyDraftRoadmapAssignment_(d, catId, sid, title, slot, 5);
    }
  });
}
function isPendingSubGoalPlanSameAsApplied_(catId){
  catId = catId != null ? catId : state.currentCat;
  if(!hasSubGoalPlan_(catId)) return false;
  var p = state.pendingSubGoalPlan;
  if(!p || p.catId !== catId || !p.plan) return false;
  if((p.deleteIds || []).length) return false;
  var applied = getSubGoalPlan_(catId);
  if(String(p.plan.intent || '').trim() !== String(applied.intent || '').trim()) return false;
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
  if(!p || p.catId !== catId || !p.plan) return false;
  if(hasSubGoalPlan_(catId)) return !isPendingSubGoalPlanSameAsApplied_(catId);
  return !!(p.plan.steps && p.plan.steps.length);
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
  if(mode === 'program') return !!(state.subGoalPlanGenerating && state.subGoalPlanGenerating.catId === state.currentCat);
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
  root.querySelectorAll('textarea.ws-grow-textarea, textarea.ws-item-summary, textarea.sheet-edit').forEach(function(ta){
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
  if(state.subGoalPlanGenerating && state.subGoalPlanGenerating.catId === state.currentCat){
    return renderWsGeneratingHTML_('분기별 목표에 맞는 <strong>3개월 단계별 하위 목표</strong>를 설계하고 있어요.', SUBGOAL_PLAN_GEN_ESTIMATE_SEC, state.subGoalPlanGenerating);
  }
  var p = state.pendingSubGoalPlan;
  if(!p || p.catId !== state.currentCat){
    var outcomeHint = getCategoryThreeMonthOutcome_(state.currentCat);
    return '<div class="ws-year-cta ' + getPlanTierClass_('program') + '" data-plan-tier="2">' +
      '<p class="ws-intro">분기별 <strong>마스터 목표</strong>를 이 프로그램의 <strong>3개월 여정</strong>으로 풀어 보세요.</p>' +
      (outcomeHint ? '<p class="ws-intro-ref ws-program-outcome">3개월 후 독자: ' + escapeHtml(outcomeHint) + '</p>' : '') +
      '<p class="ws-intro-ref">주제 5개는 각 하위 목표마다 따로 기획합니다.</p>' +
    '</div>';
  }
  var intent = (p.plan && p.plan.intent) ? String(p.plan.intent).trim() : '';
  var programOutcome = getCategoryThreeMonthOutcome_(state.currentCat);
  var html = '<p class="ws-intro">분기별 <strong>마스터 목표</strong> → 이 프로그램 <strong>3개월 여정</strong>. 하위 목표·의도만 정하고, 주제는 단계별로 따로 기획해요.</p>' +
    (programOutcome ? '<p class="ws-intro-ref ws-program-outcome">3개월 후 독자: ' + escapeHtml(programOutcome) + '</p>' : '') +
    '<p class="ws-intro-ref">PSP·PAR·프로그램 구조: <a href="' + PROFILE_BRAND_URL + '" target="_blank" rel="noopener">미카닥 박준규 프로필 PSP 가이드</a></p>' +
    renderIntentRefBlockHTML_('분기별 목표·의도 (하위 목표 기획 시 참고)', buildMainGoalContextBlock_()) +
    '<div class="ws-intent-block">' +
      '<label class="ws-intent-label">프로그램 기획 의도 · 하위 목표 순서를 이렇게 잡은 이유 (3~5문장)</label>' +
      '<textarea class="ws-intent-input ws-grow-textarea" rows="4" placeholder="분기별 마스터 목표·의도에 맞춰, 이 프로그램 3개월에 독자가 어떻게 변하는지·왜 이 순서인지" oninput="updatePendingPlanIntent_(this.value);autoGrowTextarea_(this)">' + escapeHtml(intent) + '</textarea>' +
    '</div>' +
    '<div class="ws-items ws-items-full">';
  (p.plan.steps || []).forEach(function(step, idx){
    html += renderProgramStepCardHTML_(step, idx);
  });
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
  var allPinned = p && p.plan && p.plan.steps && p.plan.steps.length && stats.pinned >= stats.total;
  return '<button type="button" class="modal-btn ws-btn-ai' + (allPinned ? ' is-disabled' : '') + '" id="btn-program-regen"' +
    (allPinned ? ' disabled title="재생성할 단계의 고정을 해제해 주세요"' : '') +
    ' onclick="regenerateProgramWorkshop_()">재생성</button>';
}
function renderProgramFillTopicsBtnHTML_(catId){
  var n = countStepsNeedingTopics_(catId);
  if(!n) return '';
  return '<button type="button" class="modal-btn ws-btn-ai btn-fill-all-topics"' +
    plannerFnClickAttr_('fillAllStepTopicsWithAI_', catId) + '>부족한 주제 ' + n + '단계 채우기</button>';
}
function renderProgramWorkshopFooterHTML_(){
  var p = state.pendingSubGoalPlan;
  var catId = state.currentCat;
  var html = '';
  if(state.subGoalPlanGenerating && state.subGoalPlanGenerating.catId === catId) return html;
  var fillBtn = renderProgramFillTopicsBtnHTML_(catId);
  if(p && p.catId === catId){
    var applyStP = getSubGoalPlanApplyBtnState_(catId);
    html += '<div class="ws-actions">' +
      renderProgramRegenBtnHTML_() +
      fillBtn +
      renderPlanApplyBtnHTML_(applyStP) +
      '<button type="button" class="modal-btn-ghost" onclick="discardPendingSubGoalPlan_()">취소</button>' +
    '</div>';
  } else {
    html += '<div class="ws-actions">' + renderProgramRegenBtnHTML_() + fillBtn + '</div>';
  }
  return html;
}
function isPendingSubGoalPlanStructureSameAsApplied_(catId){
  catId = catId != null ? catId : state.currentCat;
  var p = state.pendingSubGoalPlan;
  if(!p || p.catId !== catId || !p.plan || !hasSubGoalPlan_(catId)) return false;
  if((p.deleteIds || []).length) return false;
  var applied = getSubGoalPlan_(catId);
  if(String(p.plan.intent || '').trim() !== String(applied.intent || '').trim()) return false;
  return subGoalStepsMatchForCompare_(p.plan.steps, applied.steps);
}
function ensurePendingSubGoalPlanFromCurrent_(catId){
  catId = catId != null ? catId : state.currentCat;
  if(state.pendingSubGoalPlan && state.pendingSubGoalPlan.catId === catId){
    if(isPendingSubGoalPlanStructureSameAsApplied_(catId)){
      reconcileSubGoalDraftSteps_(catId);
      state.pendingSubGoalPlan.assignments = buildSubGoalAssignmentsFromDrafts_(catId);
      persistPendingSubGoalPlan_();
      bumpPlanWorkshopApplyBtn_();
    }
    return;
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
  if(state.subGoalPlanGenerating && state.subGoalPlanGenerating.catId === catId){
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
  else state.subGoalPlanGenerating = { catId: catId, startedAt: Date.now(), estimateSec: est };
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
  p.plan.steps.forEach(function(s, i){ s.id = String(i + 1); });
  var idMap = {};
  oldIds.forEach(function(oldId, j){
    if(j === stepIdx) return;
    var newIdx = j < stepIdx ? j : j - 1;
    idMap[oldId] = String(newIdx + 1);
  });
  p.assignments = (p.assignments || []).map(function(a){
    if(String(a.stepId || '') === rid){
      return { draftId: a.draftId, stepId: SUBGOAL_MISC_ID, order: a.order };
    }
    var newSid = idMap[String(a.stepId || '')];
    return newSid ? { draftId: a.draftId, stepId: newSid, order: a.order } : a;
  });
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
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = raw.indexOf('{'); var end = raw.lastIndexOf('}');
    var obj = JSON.parse(raw.slice(start, end + 1));
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
    intent: p.intent || ''
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
  state.branding.subGoalPlans[String(catId)] = {
    steps: (payload.plan.steps || []).map(function(s){
      return {
        id: String(s.id),
        title: s.title || '',
        summary: s.summary || '',
        rationale: s.rationale || '',
        pinned: !!s.pinned
      };
    }),
    miscLabel: payload.plan.miscLabel || SUBGOAL_MISC_LABEL,
    intent: payload.plan.intent ? String(payload.plan.intent).trim() : ''
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
  reconcileSubGoalDraftSteps_(catId);
  resetSubGoalCollapseDefaults_(catId);
  return { moved: moved, added: added, deleted: deleted };
}
function afterSubGoalPlanCommitted_(catId){
  var activeId = getActiveSubGoalStepId_(catId);
  setTimeout(function(){
    var plan = getSubGoalPlan_(catId);
    var firstNeed = plan && plan.steps.find(function(s){
      return stepNeedsMoreTopics_(catId, String(s.id));
    });
    var targetId = firstNeed ? String(firstNeed.id) : activeId;
    if(targetId && state.apiKey){
      if(confirm('하위 목표별 주제 5개를 기획할까요?')){
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
    setAppToast('하위 목표를 적용했어요.\n배치 ' + result.moved + ' · 삭제 ' + result.deleted, { duration: 5000, variant: 'ok' });
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
  var delCount = (p.deleteIds || []).filter(function(id){ return id && !draftIsPublished_(id); }).length;
  var isEdit = hasSubGoalPlan_(p.catId);
  var msg = (isEdit ? '수정 사항을 적용할까요?' : 'AI 제안을 적용할까요?') + '\n' +
    (p.plan.steps ? p.plan.steps.length + '단계 로드맵' : '');
  var assignCount = (p.assignments || []).length;
  if(assignCount) msg += ' · 기존 주제 배치 ' + assignCount + '건';
  if(delCount) msg += ' · 삭제 ' + delCount + '건(발행 완료는 유지)';
  msg += '\n\n주제 5개는 각 하위 목표에서 따로 기획합니다.';
  if(!confirm(msg)) return;
  commitPendingSubGoalPlan_();
};
window.regenerateProgramWorkshop_ = async function(){
  if(!state.apiKey){ openApiModal(); return; }
  if(plannerAiBusy) return;
  var catId = state.currentCat;
  var cat = CATEGORIES[catId];
  if(!cat) return;
  if(!getCurrentMainGoal_()){
    if(typeof setAppToast === 'function') setAppToast('먼저 분기별 목표를 설정해 주세요.', { duration: 4500, variant: 'err' });
    openPlanWorkshop_('year');
    return;
  }
  ensurePendingSubGoalPlanFromCurrent_(catId);
  var p = state.pendingSubGoalPlan;
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
'[요청] 분기별 **마스터 목표**·의도를 이 **프로그램 3개월 여정**으로 풀어 3~5개 하위 목표(단계)로 나누세요.\n' +
'※ 마스터 브랜드(미카닥 박준규·왜·PSP)는 유지하되, 독자·프로그램에 맞게 구체화. 글 한 편 주제가 아니라 단계별 로드맵입니다.\n' +
'- intent: 프로그램 전체 기획 의도 3~5문장(분기별 목표 의도와 어떻게 연결되는지·독자 변화·왜 이 순서인지)\n' +
'- 각 step.rationale: 그 단계 의도 2~4문장(역할·독자가 얻을 것·앞뒤 단계 연결)\n' +
'기존 주제가 있으면 assignments로 단계에 배치.\n' +
'발행완료는 deleteIds 제외.\n' +
'JSON만:\n' +
'{"intent":"…",\n' +
'"steps":[{"id":"1","title":"1단계 · …","summary":"한 줄","rationale":"…"}],\n' +
'"assignments":[{"draftId":"…","stepId":"1","order":1}],\n' +
'"deleteIds":[]}';
      var textInit = await callClaudePlanner_(promptInit, { maxTokens: 4500 });
      var rawInit = textInit.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
      var startInit = rawInit.indexOf('{');
      var endInit = rawInit.lastIndexOf('}');
      if(startInit < 0 || endInit <= startInit) throw new Error('JSON을 찾지 못했어요');
      var objInit = JSON.parse(rawInit.slice(startInit, endInit + 1));
      if(!objInit.steps || !objInit.steps.length) throw new Error('하위 목표(steps)가 없어요');
      state.pendingSubGoalPlan = {
        catId: catId,
        plan: {
          steps: objInit.steps.map(function(s, i){
            return {
              id: String(s.id != null ? s.id : (i + 1)),
              title: s.title || '',
              summary: s.summary || '',
              rationale: s.rationale || '',
              pinned: false
            };
          }),
          miscLabel: SUBGOAL_MISC_LABEL,
          intent: objInit.intent ? String(objInit.intent).trim() : ''
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
  if(stats.pinned >= stats.total){
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
'프로그램 기획 의도(참고·유지): ' + (p.plan.intent || '') + '\n\n' +
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
'프로그램 기획 의도(반드시 반영): ' + (p.plan.intent || '') + '\n\n' +
'[현재 단계별 수정 내용 참고]\n' + stepsBlock + '\n\n' +
'3~5개 하위 목표(단계) 전체를 새로 제안하세요. 주제 5개는 단계에서 따로 기획합니다.\n' +
'JSON: {"intent":"…","steps":[{"id":"1","title":"1단계 · …","summary":"…","rationale":"…"}]}';
    }
    var text = await callClaudePlanner_(prompt, { maxTokens: isPartial ? 2200 : 4500 });
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = raw.indexOf('{');
    var end = raw.lastIndexOf('}');
    if(start < 0 || end <= start) throw new Error('JSON을 찾지 못했어요');
    var obj = JSON.parse(raw.slice(start, end + 1));
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
            id: String(s.id != null ? s.id : (i + 1)),
            title: s.title || '',
            summary: s.summary || '',
            rationale: s.rationale || '',
            pinned: !!pinnedByTitle[title] || (sameCount && !!pinnedByIndex[i])
          };
        });
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
window.runProgramSetupWithAI_ = function(){
  openPlanWorkshop_('program');
  if(!state.pendingSubGoalPlan && !state.subGoalPlanGenerating) generateSubGoalRoadmapWithAI_();
};
function renderMainGoalPanelHTML_(){
  var plan = getYearPlan_();
  var collapsed = state.mainGoalCollapsed !== false;
  var current = plan.periods[0] || {};
  var goalText = current.goal || getBranding_().message || '분기별 목표를 설정해 주세요.';
  var rangeLabel = formatPeriodRangeLabel_(current.start, current.end) || getBranding_().quarterLabel;
  var html = renderYearWorkshopStripHTML_() +
    '<div class="planner-layer main-goal-layer ' + getPlanTierClass_('year') + (collapsed ? ' collapsed' : '') + '" data-plan-tier="1">' +
    '<div class="planner-layer-head">' +
      '<div class="planner-layer-kicker">분기별 목표 · ' + escapeHtml(rangeLabel) + '</div>' +
      '<div class="planner-layer-actions">' +
        '<button type="button" class="layer-btn subtle" onclick="toggleMainGoalPanel_()" aria-expanded="' + (!collapsed) + '">' + (collapsed ? '펼치기' : '접기') + '</button>' +
      '</div>' +
    '</div>';
  if(collapsed){
    html += '<div class="planner-layer-compact">' + escapeHtml(goalText) + '</div>';
  } else {
    var ymeta = getYearPlanMeta_();
    html += '<div class="main-goal-north-star">' + escapeHtml(MASTER_BRAND_NORTH_STAR) + '</div>';
    html += '<details class="ws-ref-block main-goal-profile-ref">' +
      '<summary class="ws-ref-summary">미카닥 박준규 · 약력·색깔 참고</summary>' +
      '<div class="ws-ref-body">' + escapeHtml(PERSONAL_BRAND_PROFILE) + '</div>' +
    '</details>';
    html += '<div class="main-goal-current">' + escapeHtml(goalText) + '</div>';
    if(ymeta.intent){
      html += '<div class="main-goal-intent"><span class="main-goal-intent-label">기획 의도</span>' + escapeHtml(ymeta.intent) + '</div>';
    }
    if(ymeta.currentRationale){
      html += '<div class="main-goal-intent period"><span class="main-goal-intent-label">현재 분기 의도</span>' + escapeHtml(ymeta.currentRationale) + '</div>';
    }
    html += '<div class="year-period-timeline">';
    plan.periods.forEach(function(p, idx){
      var lbl = formatPeriodRangeLabel_(p.start, p.end);
      html += '<div class="year-period-row ' + getQuarterToneClass_(idx) + (idx === 0 ? ' current' : '') + '">' +
        '<span class="year-period-label">' + escapeHtml(lbl) + (idx === 0 ? ' · 지금' : '') + '</span>' +
        '<span class="year-period-goal">' + escapeHtml(p.goal || '(목표 미설정)') + '</span>' +
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
function renderDailySharePanelHTML_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  var plan = getDailySharePlan_();
  var collapsed = state.dailyShareCollapsed !== false;
  var drafts = getVisibleDraftsInMain_(catId);
  var pubCount = drafts.filter(function(d){ return draftIsPublished_(d.id); }).length;
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
    html += '<p class="daily-share-intro">강의·홍보 없이 <strong>생활 일기·공감</strong> 톤. 사진만 올려도 주제를 만들 수 있어요.</p>';
    html += '<p class="daily-share-bridge">' + escapeHtml(DAILY_SHARE_MASTER_BRIDGE) + '</p>';
    html += '<div class="ws-intent-block daily-intent-block">' +
      '<label class="ws-intent-label">이번 달 일상 나눔 방향 (선택)</label>' +
      '<textarea class="ws-intent-input ws-grow-textarea daily-intent-input" rows="2" placeholder="예: 봄 산책·컨디션, 여유·공감 톤 — PSP 설교 없이 「믿을 만한 사람」으로" oninput="updateDailyShareIntent_(this.value);autoGrowTextarea_(this)">' + escapeHtml(plan.intent || '') + '</textarea>' +
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
      '<span class="daily-draft-title">일상 글 주제</span>' +
      '<span class="daily-draft-stats">발행 ' + pubCount + '/' + drafts.length + '</span>' +
    '</div>' +
    '<div class="subgoal-step-cards daily-draft-cards">';
  if(drafts.length){
    drafts.forEach(function(d){
      html += draftCardHTML(d, cat, false, cat.drafts.indexOf(d), false);
    });
  } else {
    html += '<div class="subgoal-step-topics empty">우측 상단 <strong>추가</strong>에서 사진·키워드로 주제를 만들어 보세요.</div>';
  }
  html += '</div></div></div>';
  return html;
}
function renderProgramRoadmapHTML_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return '';
  var plan = getEffectiveSubGoalPlan_(catId);
  var pendingPreview = usePendingProgramPreview_(catId);
  var activeId = plan ? getActiveSubGoalStepId_(catId) : null;
  var strip = renderPlanWorkshopStripHTML_(catId);
  var isGenerating = state.subGoalPlanGenerating && state.subGoalPlanGenerating.catId === catId;
  var needTopicSteps = countStepsNeedingTopics_(catId);
  var html = strip + '<div class="planner-layer program-layer ' + getPlanTierClass_('program') + (isGenerating ? ' is-generating' : '') + (pendingPreview ? ' pending-preview' : '') + '" data-plan-tier="2">' +
    '<div class="planner-layer-head">' +
      '<div class="planner-layer-kicker">' + escapeHtml(cat.name) + ' · ' + escapeHtml(cat.audience) + '</div>' +
      '<div class="planner-layer-actions">' +
        (needTopicSteps > 0 && plan && plan.steps.length
          ? '<button type="button" class="layer-btn primary-plan btn-fill-all-topics"' + plannerFnClickAttr_('fillAllStepTopicsWithAI_', catId) + '>부족한 주제 ' + needTopicSteps + '단계 AI 채우기</button>'
          : '') +
      '</div>' +
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
          '<textarea id="draft-brand-writing-brief" class="draft-brand-writing-brief" rows="8" placeholder="분기·단계 맥락, 글의 필요성, 풀어가는 순서 등 초안 작성에 필요한 핵심을 적어 주세요." onchange="saveDraftBrandFields_()" oninput="autoGrowTextarea_(this)">' + escapeHtml(brief) + '</textarea>' +
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
    if(!state.draftBrandOverrides) state.draftBrandOverrides = {};
    state.draftBrandOverrides[draftId] = {
      series: draft.series || '',
      step: draft.step || '',
      pillar: draft.pillar || '',
      rationale: draft.rationale || '',
      writingBrief: draft.writingBrief || ''
    };
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
  var missing = countMissingInSubGoalStep_(catId, stepId);
  var needSteps = countStepsNeedingTopics_(catId);
  var html = '<div class="ws-actions">' +
    renderTopicRegenBtnHTML_(catId, stepId);
  if(needSteps > 0){
    html += '<button type="button" class="modal-btn ws-btn-ai btn-fill-all-topics"' +
      plannerFnClickAttr_('fillAllStepTopicsWithAI_', catId) + '>전체 ' + needSteps + '단계 주제 채우기</button>';
  }
  if(missing > 0){
    html += '<button type="button" class="modal-btn"' + plannerFnClickAttr_('genAllMissingForSubGoalStep_', stepId) + '>미작성 ' + missing + '건 초안 생성</button>';
  }
  html += '<button type="button" class="modal-btn-ghost" onclick="requestClosePlanWorkshop_()">닫기</button>' +
  '</div>';
  return html;
}
window.updateTopicDraftField_ = function(draftId, field, value){
  var catId = state.currentCat;
  var cat = CATEGORIES[catId];
  if(!cat || !draftId) return;
  var d = (cat.drafts || []).find(function(x){ return x && x.id === draftId; });
  if(!d) return;
  d[field] = field === 'rationale' ? stripTopicRationaleStepPrefix_(String(value || '').trim()) : String(value || '').trim();
  save({ driveImmediate: true });
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
    ? '수정한 의도를 반영해 주제를 다시 제안할까요?'
    : (unpinnedSlots.length === 1 ? '1개를 재생성 하시겠습니까?' : '고정된 주제 외 ' + unpinnedSlots.length + '개를 재생성 하시겠습니까?');
  if(!confirm(confirmMsg)) return;
  plannerAiBusy = true;
  startPlannerAiWait_({
    estimateSec: TOPIC_FIVE_ESTIMATE_SEC,
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
'JSON: {"topics":[{"topic":"…","angle":"…","rationale":"…"},…]}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 1800 });
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = raw.indexOf('{');
    var end = raw.lastIndexOf('}');
    if(start < 0 || end <= start) throw new Error('JSON을 찾지 못했어요');
    var obj = JSON.parse(raw.slice(start, end + 1));
    var merged = mergeAiTopicsToStepSlots_(catId, stepId, obj.topics || []);
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
    var text = await callClaudePlanner_(prompt, { maxTokens: 1800 });
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = raw.indexOf('{');
    var end = raw.lastIndexOf('}');
    if(start < 0 || end <= start) throw new Error('JSON을 찾지 못했어요');
    var obj = JSON.parse(raw.slice(start, end + 1));
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
    btnSelector: '.topic-slot-ai-btn[data-ai-slot="' + String(stepId) + '-' + slotIndex + '"]',
    btnIdleText: 'AI 추천'
  });
  var catId = state.currentCat;
  var plan = getSubGoalPlan_(catId);
  var slotNum = parseInt(slotIndex, 10) + 1;
  try {
    var prompt = buildTopicPlanPromptPrefix_(catId, stepId) + '\n\n주제 1개(슬롯 ' + slotNum + '). 단계·프로그램·분기별 목표 의도에 맞게. rationale에 "N단계 —" 표기 금지.\nJSON: {"topic":"…","angle":"…","rationale":"…"}';
    var text = await callClaudePlanner_(prompt, { maxTokens: 600 });
    var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
    var start = raw.indexOf('{');
    var end = raw.lastIndexOf('}');
    if(start < 0 || end <= start) throw new Error('JSON을 찾지 못했어요');
    var obj = JSON.parse(raw.slice(start, end + 1));
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
const PLANNER_SYNC_TOKEN_KEY = 'ht_planner_sync_token';

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

function plannerGasRequestBody_(obj){
  obj = Object.assign({}, obj || {});
  var token = getPlannerSyncToken_();
  if(token) obj.plannerToken = token;
  return JSON.stringify(obj);
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
  newItem: { date:'', topic:'', catId:0, refImages:[], refImage:null, refNote:'', imageAnalyzing:false },
  apiKey: '',
  geminiYoutubeEnabled: false,
  plannerAuthRequired: false,
  chatgptOpenUrl: '',
  selectedId: null,
  activeTab: 'blog',
  prompts: null, // null이면 DEFAULT_PROMPTS 사용
  promptTab: 'blog',
  editingCatId: 0,
  promptRefineMilestones: {}, // catId → 마지막 반영한 발행 N건 (3, 6, …)
  publishModalDraftId: null,
  publishModalCatId: null,
  branding: null,
  collapsedSubGoalSteps: {},
  pendingSubGoalPlan: null,
  pendingYearPlan: null,
  planWorkshopMode: null,
  yearPlanGenerating: null,
  subGoalPlanGenerating: null,
  mainGoalCollapsed: true,
  dailyShareCollapsed: false,
  topicEditStepId: null,
  pinnedDraftIds: {},
  plannerSetupDismissed: false,
  legacyDraftsOpen: false,
  publishRecCurrentTabOnly: false,
  syncRationalesOnBrandSave: true,
  draftBrandOverrides: {},
  deletedDraftIds: {},
  opsManual: null,
};

var minDraftReplenishRunningByCat = {};
var minDraftReplenishLastAttemptByCat = {};
var minDraftReplenishTimerByCat = {};
const MIN_DRAFT_REPLENISH_COOLDOWN_MS = 90 * 1000;

function getPrompts() {
  return state.prompts || JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
}
function getCatPrompt(catId, type) {
  const catPrompts = getPrompts().categories[catId] || {};
  const cur = catPrompts[type];
  if(cur !== undefined && cur !== null && String(cur).length > 0) return cur;
  if(type === 'notebookLM' && !isThreadCategory(catId) && !isHeiljagyaeCategory(catId)) {
    const legacy = catPrompts.community;
    if(legacy !== undefined && legacy !== null && String(legacy).length > 0) return legacy;
  }
  return DEFAULT_PROMPTS.categories[catId]?.[type] || '';
}
function isDailyShareCategory(catId){ return catId === 6; }
function isOpsManualCategory(catId){ return catId === 8; }
function isThreadCategory(catId){ return isDailyShareCategory(catId); }
function isHeiljagyaeCategory(catId){ return catId === 7; }
function isGeneralAudienceCategory(catId){ return catId === 0 || catId === 1 || catId === 2; }
/** CMT·IFC·Re:Al Movement 전문가 과정 — 강연·영상 공유 톤 */
function isExpertCourseCategory(catId){ return catId === 3 || catId === 4 || catId === 5; }
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
  if(document.getElementById('drive-modal-overlay').classList.contains('open')){
    closeDriveModal();
    return true;
  }
  if(document.getElementById('publish-modal-overlay').classList.contains('open')){
    closePublishModal();
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
const NOTEBOOKLM_URL = 'https://notebooklm.google.com/';

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
1. **문제 제기** (problem): 일상 장면에서 공감되는 불편·궁금증을 **자연스러운 문장 2~4개**로. 불릿·번호 나열 금지. 마지막 문장에서 **짧은 시간·일상 공간으로 해결 가능**하다는 뉘앙스로 이어지기.
2. **해결책 제시** (selfCare): **👉 로 시작**. 동작·자세·**초·회·분** 숫자를 앞쪽에 배치해 핵심이 먼저 보이게. "지금 바로 해보세요" 같은 가벼운 멘트 OK. "아 시원하다" 지점에서 멈추라는 뉘앙스.
3. **원리 설명** (explanation): 동작 **뒤에** 왜 도움이 되는지 **2~5문장**. 정의 한 줄 + **비유 한 줄**(쿠션 털기, 고양이 기지개 등) + 복잡하지 않다·도구 필요 없다는 마무리.

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

const DEFAULT_DAILY_SHARE_PROMPT = `**일상 공유** 탭용 글입니다. Threads·인스타 등에 올리는 **생활 일기·오늘의 한마디** 톤으로 써 주세요.

[주제 축]
- 일상·쉬는 시간, **계절·날씨**, 몸 컨디션·가벼운 건강, **여행·이동**, 최근 이슈에 대한 **느낌**(논쟁·설교 금지), 감사·여유

[근골격계 전문가의 시선 — 가볍게]
- 글의 뼈대는 **일기·생활 나눔**. DC·PT·근골격계 전문가가 **옆에서 한 줄 덧붙이듯**만 녹입니다.
- 날씨·습도·기온·활동량·피로·뻐근함·무거움·기분·철학·감정 이야기할 때, 주제와 맞으면 **짧은 이유·연결 한두 문장** (예: "비 오는 날 몸이 납덩이처럼 무거울 때" → 습도가 높으면 더 무겁게 느껴질 수 있다 / 이럴수록 가벼운 움직임이 기분도 살아나는 경우가 많다).
- **한 줄 공감 → 가벼운 몸·움직임 이유 → 여유로운 마무리** 흐름이 자연스럽게. 강의·진단·치료 권유·"꼭 하세요"·용어·PSP 나열 금지.

[사진이 있을 때]
- 교육·세미나·클리닉 사진이어도 **전문 강의·치료 설명 톤 금지** — "오늘 다녀왔는데", "피곤하지만 좋았다" 같은 **일기·생활 나눔**만 (몸·날씨 맥락이 보이면 위 시선을 살짝)

[절대 피할 것]
- **억지 공감 유도**, **독자에게 던지는 질문**("~하신 적 있나요?", "~하지 않으세요?", "~할 때 있죠?" 등)
- 소제목·번호·강의록·임상 설명·홍보·"결론부터" 멘트

[이렇게 써 주세요]
- **topicTitle**: 오늘의 한 줄 **평서·감탄·장면 묘사** (질문형·설문형 금지)
- **summary**: topicTitle에 이어지는 **연속 본문**. 관찰·느낌·여유를 말하듯. 이모지 0~1개
- **3~7문장**, 번호·불릿 없이 한 덩어리. 전문가 시선은 **본문 1~2문장** 이내로 은은하게`;

const DEFAULT_NOTEBOOKLM_PROMPT = `Google **NotebookLM**에 소스로 붙여 넣으면, 오디오 오버뷰·강의 카드·영상 대본 등으로 확장할 수 있는 **질문·답변 중심 텍스트**를 만듭니다.

[역할]
- 블로그 본문을 요약하는 것이 아니라, **한 주제를 강의·스크립트로 펼칠 때 나올 만한 질문**을 촘촘히 만들고, 각 답은 **정의 → 왜 중요한지 → 실천/주의 한 줄**이 듣는 사람에게 바로 전달되게 씁니다.
- 답변은 **150~400자** 정도(한국어 기준). 한 문단으로 읽히게. 불필요한 소제목 번호 나열은 피하고, 말로 설명하듯 자연스럽게.

[질문 구성 가이드]
- 첫 2~3개: "이게 뭔가요?", "왜 나에게 중요한가요?", "흔한 오해는?" 같은 **입문·동기** 질문
- 중간: 원리·메커니즘·일상과의 연결 **심화** 질문 3~4개
- 마지막: "오늘부터 뭐부터 하면 되나요?", "언제 전문가를 보나요?" 같은 **실천·안전** 질문 1~2개
- 카테고리(도수·운동·얼굴·교육)에 맞는 용어 깊이를 조절할 것.

[금지]
- 상업적 예약·센터 직접 홍보 문구, 과장·낚시 제목식 문장
- "첫째 둘째 셋째" 식 **발표 자료 목차만 덩어리로** 나열 (내용은 풀어서)`;

const DEFAULT_THREADS_SNS_PROMPT = `당신은 의료/건강 콘텐츠를 **Threads(쓰레드) 스타일**로 변환하는 전문가입니다.

[말투]
- 격식체(~습니다) → 구어체(~임, ~거임, ~됨)
- 설명하는 말투 → 혼잣말처럼 툭 던지는 말투
- 전문가가 동료한테 말하는 느낌

[구조]
- 첫 줄: 반전 or 의문 → 짧게 끊기
- 중간: 핵심 근거 1~3줄 (→ 로 흐름 연결 가능)
- 마지막: 임상 경험 기반 한 줄 결론

[형식]
- 문장은 최대 1~2줄
- 줄바꿈으로 리듬 만들기
- 이모지 최대 1~2개, 자연스러운 위치에
- 해시태그 없음
- 불릿(•), 볼드, 헤더 없음

[금지]
- "~하세요" 같은 지시형
- 리스트 나열
- 과한 설명
- 인스타 해시태그·불릿·번호 목록을 그대로 옮기기`;

const DEFAULT_BLOG_INSTA_IMAGE_PROMPT = `이미지 생성 프롬프트는 블로그·인스타 본문과 같은 주제 흐름을 시각화합니다.
- 정확히 2장: ① 전문 설명 보조(도식·인포그래픽·부드러운 medical illustration), ② 셀프케어 동작(본문의 동작과 정확히 일치)
- 영문 한 덩어리 프롬프트, 80~200단어, 한 줄 요약·불릿 금지
- Korean domestic visual language, warm beige·sage·cream palette, soft daylight, no text overlay, no logo, no watermark
- 사람은 East Asian adult, modest everyday clothing, 자연스러운 피부와 자세`;

const DEFAULT_EXPERT_COURSE_SCOPE_RULE = `[범위·집중 — 최우선]
- 이 글은 **교육·강의 때 촬영한 영상** 또는 **실습·시연 사진**을 공유하면서, 그 장면에 맞춰 쓰는 글입니다.
- [작성자 참고]의 YouTube 분석·사진 메모·참고 메모가 **소스의 전부**입니다. 영상·사진에 없는 내용은 쓰지 마세요.
- **써도 되는 것**: 영상·사진에서 보이는 테크닉/동작, 시연·손 위치·주의사항, 그에 대한 **원리 설명**(왜 이렇게 하는지·짧은 메커니즘).
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

${MEDICAL_COMPLIANCE_RULE}

${GEO_CONTENT_STRUCTURE_RULE}

[글 흐름 — 반드시 이 순서·필드]
1. **문제 제기** (problem): 일상 장면에서 공감되는 불편·궁금증 2~4문장. 불릿·번호 나열 금지. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스.
2. **셀프 케어** (selfCare): **👉 로 시작**. 동작·자세·**초·회·분**을 앞쪽에. "아 시원하다" 지점에서 멈추라는 뉘앙스. 무리·재통증 주의 한 줄. 통증이 심하면 병원 먼저 한 줄.
3. **원리 설명** (explanation): **맨 앞 2~3문장 TL;DR(핵심 결론)** → 동작 **뒤에** 왜 도움이 되는지 + GEO 구조. 비유 한 줄. 병원 치료가 필요한 경우와 **프로그램 병행**이 맞는 경우를 구분.

[형식]
- title: 호기심·질문형 한 줄 (35자 내외, 네이버 SEO 고려, 과장 금지)
- problem / selfCare / explanation: 위 순서대로 각각 별도 필드. "N단계 —" 같은 순서 표기 금지
- cta: 병원 상담 또는 Re:Al·프로그램 상담 중 맥락에 맞게 (과장·즉시 예약 압박 금지). 주제와 맞는 증상 허브 URL 1개 포함 권장 — 허리 ?hub=back · 목 ?hub=neck · 어깨 ?hub=shoulder · 무릎 ?hub=knee · 골반 ?hub=pelvis (기본 ${PROFILE_BRAND_URL})
- hashtags: 6~8개 (# 없이)`;

const DEFAULT_EXPERT_COURSE_BLOG_PROMPT = `물리치료사·트레이너 등 **움직임 전문가**를 독자로 하는 SNS·블로그 글입니다.

**주 사용 방식**: 교육·강의 때 진행한 **영상 링크** 또는 **실습·시연 사진**을 첨부하고, 그 내용에 맞춰 **원리 설명** 중심으로 글을 씁니다.

${DEFAULT_EXPERT_COURSE_SCOPE_RULE}

[역할]
- 독자: PT, 트레이너, 움직임에 관심 있는 현장 전문가
- 글의 중심은 **원리 설명**(왜 이렇게 하는지)이며, 영상·사진에서 본 시연을 복기하는 톤

[글 흐름 — 반드시 이 순서]
1. **영상·사진 맥락** (hook): 이번 영상·사진에서 다룬 장면·상황 2~3문장
2. **시연·핵심 포인트** (outline): 손 위치·동작·주의사항 등 2~3개
3. **원리 설명** (draft): 위 시연을 바탕으로 왜 그런지·짧은 메커니즘·현장 적용 (350~500자, **본문의 중심**)

[톤 & 스타일]
- 과장·낚시·"꼭 해야 한다" 압박 금지. **내용으로 말하는** 느낌
- 전문 용어는 쓰되, **한 줄 정도 풀어서** 설명
- 강의 중 실제로 하는 **말하듯** 자연스럽게
- 해시태그 **최소화**(3~5개)

[형식 — JSON 필드]
- title: 현장에서 궁금해할 테크닉·질문 한 줄 (35자 내외)
- hook: 영상·사진 맥락 (위 1번)
- outline: 시연·핵심 포인트 배열 (위 2번)
- draft: **원리 설명** 본문 (위 3번, 참고·영상·사진 범위 안만)
- cta: 수강·등록 유도 금지. 가벼운 마무리
- hashtags: 3~5개`;

const DEFAULT_EXPERT_COURSE_INSTA_PROMPT = `전문가 과정 **강연·영상·사진 공유**용 인스타 캡션입니다. 블로그보다 짧고 밀도 있게.

${DEFAULT_EXPERT_COURSE_SCOPE_RULE}

[역할·독자]
- PT, 트레이너, 움직임 전문가 동료에게 말하듯
- 공유한 **영상·사진에서 다룬 테크닉**과 **원리 한 줄**이 드러나게

[구성]
- 영상·사진 맥락 한 줄 → 시연·핵심 포인트 2~3개 → **원리 설명** 한두 문장
- 참고 메모·영상 분석·블로그 원문 **범위 안**에서만

[톤]
- 과장 없이, 내용으로 말하기. 전문 용어는 한 줄 풀어쓰기
- 강의 말투처럼 자연스럽게

[형식]
- hook: 기억에 남는 한 줄 (25자 내외)
- caption: hook 제외 **200~400자**. 수강·등록 유도 금지
- hashtags: **4~6개** 이내, 전문 키워드 위주`;

const DEFAULT_EXPERT_COURSE_IMAGE_PROMPT = `전문가 과정·강연 공유용 이미지 생성 프롬프트입니다.
- 참고 메모·영상·본문에 나온 테크닉·동작만 시각화. 참고에 없는 부위·동작·평가로 확장 금지
- 정확히 2장: ① 전문 설명 보조(도식·인포그래픽·부드러운 medical illustration), ② **교육·시연 동작**(본문·참고 메모의 테크닉·평가 동작과 일치)
- 영문 한 덩어리, 80~200단어. Korean clinic or seminar room, East Asian adult professional, modest clothing
- warm beige·sage palette, soft daylight, no text overlay, no logo`;

const DEFAULT_HEILJAGYAE_IMAGE_PROMPT = `아파트너 게시글용 이미지 생성 프롬프트입니다.
- 정확히 2장: ① 단지·동네에서 공감되는 일상 한 컷, ② 게시글 selfCare와 동일한 셀프 동작
- 한국 아파트 복도·엘리베이터·거실·요가매트 등 입주민에게 익숙한 공간
- Photorealistic editorial, warm beige·sage·cream palette, soft daylight, no text overlay, no logo, no watermark
- 광고 느낌보다 옆집 이웃의 생활감·가벼운 컨디션 회복 분위기`;

// ── 기본 프롬프트 (카테고리별 블로그/인스타/NotebookLM 등) ──
const DEFAULT_PROMPTS = {
  base: `당신은 '미카닥 박준규'의 전담 콘텐츠 기획자입니다.
브랜드 주체: 미카닥 박준규 (미국 DC·한국 PT, 20년+ 근골격계·비수술 전문가)
${BLOG_CONTENT_VOICE_RULE}
${MEDICAL_COMPLIANCE_RULE}
진료·교육: 도수치료, Re:Al Movement, 얼굴관리, CMT/IFC 전문가 교육
인스타: @dr.park_dc.pt` + DEFAULT_PSP_CLINICAL_FRAMEWORK,
  categories: {
    0: { // 도수치료
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[도수치료 맥락] PSP·PAR 순서를 환자 언어로: 평가(증상·통증 질)→연부·관절 이해→Passive(P-ROM)→생활습관. problem에 공감·왜 아픈지 가볍게, selfCare는 집에서 할 수 있는 동작.`,
      insta: `캐러셀(여러 장 슬라이드) 없이 **한 포스트 캡션**으로 끝내세요. 첫 줄 후킹에 이어, 본문 캡션 안에 통증→원인→해결 흐름의 **핵심 포인트**를 번호(1. 2.) 또는 • 불릿으로 넣어 한 번에 읽히게 하세요.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    1: { // 리:얼 Movement
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[Movement 맥락] P-ROM·PAR·Position 1→2→3을 환자 언어로. '왜 이 동작인지'·호흡·긴장 조절·초·회·분·무리 금지.`,
      insta: `캐러셀 없이 **한 포스트 캡션**에 동작·포인트·주의사항을 단계적으로 적습니다. 마지막에 저장·팔로우 유도 문장을 캡션 끝에 자연스럽게 넣으세요.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    2: { // 얼굴 관리
      blog: `${DEFAULT_BLOG_TITLE_HOOK_RULE}\n${DEFAULT_GENERAL_AUDIENCE_BLOG_FLOW}\n\n[얼굴·뷰티 맥락] 20~40대 여성 독자. 과학적 근거는 가볍게, 공감과 희망. selfCare는 부담 없는 가벼운 동작·습관.`,
      insta: `캐러셀 없이 **한 포스트 캡션**으로 스토리텔링하세요. "이런 고민 있으신가요?"에 이어 문제→원인→해결→CTA를 캡션 안에서 줄바꿈으로 구분해 읽기 쉽게.`,
      image: DEFAULT_BLOG_INSTA_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    3: { // CMT 전문가
      blog: DEFAULT_EXPERT_COURSE_BLOG_PROMPT + `\n\n[CMT 맥락]\n- PSP 용어는 **참고·영상에서 다룬 범위** 안에서만. 무관한 평가·중재 전체 흐름으로 확장 금지\n- 촉진·관절가동술 등 **이번 강의 테크닉** 중심. 짧은 원리 설명은 괜찮으나 별도 케이스·부위로 넓히지 말 것`,
      insta: DEFAULT_EXPERT_COURSE_INSTA_PROMPT + `\n\n[CMT] 이번 강의·영상의 테크닉·포인트만. PSP는 참고 범위 안에서만.`,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    4: { // IFC 얼굴교육
      blog: DEFAULT_EXPERT_COURSE_BLOG_PROMPT + `\n\n[IFC 맥락]\n- 구조적 접근은 **참고·영상에서 다룬 범위** 안에서만. 무관한 경추·교합·전신 이야기로 확장 금지\n- 이번 강의·시연의 테크닉·평가 포인트 중심`,
      insta: DEFAULT_EXPERT_COURSE_INSTA_PROMPT + `\n\n[IFC] 이번 강의·영상의 테크닉·포인트만.`,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
    },
    5: { // 리:얼 Movement 전문가
      blog: DEFAULT_EXPERT_COURSE_BLOG_PROMPT + `\n\n[Re:Al Movement 맥락]\n- Movement·P-A-R 등은 **참고·영상에서 다룬 내용** 안에서만 연결\n- 참고에 없는 평가·운동 처방·다른 부위로 확장 금지`,
      insta: DEFAULT_EXPERT_COURSE_INSTA_PROMPT + `\n\n[Re:Al] 이번 강의·영상의 테크닉·포인트만.`,
      image: DEFAULT_EXPERT_COURSE_IMAGE_PROMPT,
      notebookLM: DEFAULT_NOTEBOOKLM_PROMPT,
      threads: DEFAULT_THREADS_SNS_PROMPT
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
  function attempt(){
    var el = document.getElementById(snap.id);
    if(!el || !isEditableTextField_(el) || !document.contains(el)) return;
    try {
      if(document.activeElement !== el) el.focus({ preventScroll: true });
      if(snap.start != null && typeof el.setSelectionRange === 'function'){
        var len = (el.value || '').length;
        var s = Math.min(snap.start, len);
        var e = Math.min(snap.end != null ? snap.end : s, len);
        el.setSelectionRange(s, e);
      }
      if(snap.scrollTop != null) el.scrollTop = snap.scrollTop;
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
  var pubOverlay = document.getElementById('publish-modal-overlay');
  if(pubOverlay && pubOverlay.classList.contains('open')){
    var pubFooter = pubOverlay.querySelector('.prompt-modal-footer');
    if(pubFooter){
      var ru = pubFooter.getBoundingClientRect();
      if(ru.height > 0) rects.push(ru);
    }
  }
  return rects;
}

function updateAppToastLift_(){
  var el = document.getElementById('app-toast');
  if(!el) return;
  var focusSnap = captureTextFieldFocus_();
  if(!el.classList.contains('show')){
    el.style.bottom = '';
    restoreTextFieldFocus_(focusSnap);
    return;
  }
  if(focusSnap){
    restoreTextFieldFocus_(focusSnap);
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
  var focusSnap = captureTextFieldFocus_();
  updateAppToastLift_();
  requestAnimationFrame(function(){
    updateAppToastLift_();
    requestAnimationFrame(function(){
      updateAppToastLift_();
      restoreTextFieldFocus_(focusSnap);
    });
  });
  setTimeout(function(){
    updateAppToastLift_();
    restoreTextFieldFocus_(focusSnap);
  }, 320);
}

function setAppToast(message, options) {
  options = options || {};
  var duration = options.duration !== undefined ? options.duration : 4200;
  var variant = options.variant || '';
  var el = document.getElementById('app-toast');
  if (!el) return;
  var focusSnap = captureTextFieldFocus_();
  clearTimeout(appToastTimer);
  el.classList.remove('app-toast--ok', 'app-toast--err');
  if (variant === 'ok') el.classList.add('app-toast--ok');
  else if (variant === 'err') el.classList.add('app-toast--err');
  el.textContent = message;
  el.classList.add('show');
  restoreTextFieldFocus_(focusSnap);
  scheduleAppToastLift_();
  if (duration > 0) appToastTimer = setTimeout(function(){
    var hideFocusSnap = captureTextFieldFocus_();
    el.classList.remove('show');
    if(!hideFocusSnap) el.style.bottom = '';
    restoreTextFieldFocus_(hideFocusSnap);
  }, duration);
}

function getPlannerGasUrl_(){
  try {
    var u = (localStorage.getItem('ht_planner_gas_url') || '').trim();
    if(u) return u;
  } catch(e){}
  return PLANNER_GAS_URL;
}
function getPersistPayload(){
  var dailyLast = '';
  try { dailyLast = localStorage.getItem('ht_daily_auto_last') || ''; } catch(e0){}
  var payload = {
    published: state.published,
    generatedOnly: state.generatedOnly,
    localSavedAt: state.localSavedAt,
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
  return payload;
}
function getLocalStoragePayload(){
  return Object.assign({}, getPersistPayload(), { apiKey: state.apiKey || '' });
}
function schedulePlannerGasPush_(immediate){
  if(!getPlannerGasUrl_() || location.protocol === 'file:') return;
  clearTimeout(plannerGasPushTimer);
  plannerGasPushTimer = null;
  var run = function(){
    plannerGasPushNow_().catch(function(err){ console.warn('[서버 동기화]', err); });
  };
  if(immediate) run();
  else plannerGasPushTimer = setTimeout(run, 2500);
}
async function plannerPullRemoteIntoStateCore_(){
  var body = getPersistPayload();
  var fpBefore = plannerSyncFingerprint_(body);
  var remote = null;

  var url = getPlannerGasUrl_();
  if(url && location.protocol !== 'file:'){
    try {
      var pull = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: plannerGasRequestBody_({ action: 'plannerSyncPull' })
      });
      var pullData = await pull.json();
      applyPlannerServerCaps_(pullData);
      if(pullData.result === 'success' && pullData.payload){
        remote = pullData.payload;
      }
    } catch(pullErr){
      console.warn('[서버 동기화 pull]', pullErr);
    }
  }

  if(hasDriveValidToken_()){
    try {
      var token = await getDriveAccessToken({ forcePrompt: false });
      var out = await driveDownloadCloudPayload_(token);
      if(out.data){
        remote = remote ? mergePlannerPayloads_(remote, out.data) : out.data;
      }
    } catch(driveErr){
      console.warn('[Drive 동기화 pull]', driveErr);
    }
  }

  if(!remote) return false;
  var merged = mergePlannerPayloads_(body, remote);
  if(plannerSyncFingerprint_(body) === plannerSyncFingerprint_(merged)) return false;
  applyPersistPayload(merged);
  return true;
}
async function plannerPullRemoteIntoState_(){
  return withPlannerSyncMutex_(function(){ return plannerPullRemoteIntoStateCore_(); });
}
async function plannerGasPushNow_(){
  var url = getPlannerGasUrl_();
  if(!url) return;
  return withPlannerSyncMutex_(async function(){
  try {
    await plannerPullRemoteIntoStateCore_();
    var body = getPersistPayload();
    body.savedAt = new Date().toISOString();
    var r = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: plannerGasRequestBody_({ action: 'plannerSyncPush', payload: body })
    });
    if(!r.ok) throw new Error('HTTP ' + r.status);
    var data;
    try {
      data = await r.json();
    } catch(parseErr) {
      throw new Error('서버 응답 형식 오류');
    }
    if(data.result === 'conflict' && data.payload){
      var promptsBefore = promptsFingerprint_(state.prompts);
      var localDeleted = Object.assign({}, state.deletedDraftIds || {});
      var merged = mergePlannerPayloads_(getPersistPayload(), data.payload);
      merged.deletedDraftIds = Object.assign({}, merged.deletedDraftIds || {}, localDeleted);
      applyPersistPayload(merged);
      save({ skipDriveUpload: true, skipGasPush: true });
      if(data.payload.plannerLastAuto && typeof handleServerPlannerAuto_ === 'function'){
        handleServerPlannerAuto_(data.payload);
      }
      renderTabs();
      renderMain();
      if(typeof setAppToast === 'function' && promptsBefore !== promptsFingerprint_(state.prompts)){
        setAppToast('서버 데이터와 합쳐 반영했어요.', { duration: 4200, variant: 'ok' });
      }
      schedulePlannerGasPush_(true);
      return;
    }
    if(data.result !== 'success' && data.result !== 'conflict'){
      if(isPlannerAuthError_(data)) notifyPlannerAuthError_(data);
      throw new Error(data.message || '서버 백업 실패');
    }
  } catch(err) {
    console.warn('[GAS push]', err);
    if(typeof setAppToast === 'function'){
      setAppToast('서버 백업에 실패했어요. 이 기기 저장은 유지됩니다.', { duration: 5000, variant: 'err' });
    }
  }
  });
}
function getPayloadSavedMs_(payload){
  if(!payload) return 0;
  return parseIsoMs_(payload.savedAt || payload.localSavedAt);
}

function filterDeletedFromExtraDraftsByCat_(byCat, deleted){
  if(!byCat || typeof byCat !== 'object') return byCat || {};
  var out = {};
  Object.keys(byCat).forEach(function(k){
    out[k] = (byCat[k] || []).filter(function(d){ return d && d.id && !(deleted && deleted[d.id]); });
  });
  return out;
}
function mergeExtraDraftsByCat_(a, b, deletedIds){
  var deleted = deletedIds || {};
  a = filterDeletedFromExtraDraftsByCat_(a, deleted);
  b = filterDeletedFromExtraDraftsByCat_(b, deleted);
  var out = {};
  function addFrom(src){
    Object.keys(src || {}).forEach(function(k){
      if(!out[k]) out[k] = [];
      (src[k] || []).forEach(function(d){
        if(!d || !d.id || deleted[d.id]) return;
        var ix = out[k].findIndex(function(x){ return x.id === d.id; });
        if(ix === -1) out[k].push(Object.assign({}, d));
        else out[k][ix] = Object.assign({}, out[k][ix], d);
      });
    });
  }
  addFrom(a);
  addFrom(b);
  return out;
}
function mergePublishedMaps_(a, b, preferB){
  var out = {};
  function put(id, entry, fromB){
    if(!entry) return;
    if(!out[id]){ out[id] = entry; return; }
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
  var out = Object.assign({}, a || {});
  Object.keys(b || {}).forEach(function(id){
    if(!Object.prototype.hasOwnProperty.call(out, id) || preferB) out[id] = b[id];
  });
  return out;
}
/** 두 기기·Drive·서버 payload를 합침 — 주제(extraDrafts)는 항상 합집합, 발행·초안은 더 최신 쪽 우선 */
function mergePlannerPayloads_(local, remote){
  if(!remote) return local || {};
  if(!local) return Object.assign({}, remote);
  var localMs = getPayloadSavedMs_(local);
  var remoteMs = getPayloadSavedMs_(remote);
  var preferRemote = remoteMs >= localMs;
  var out = Object.assign({}, preferRemote ? remote : local, {
    published: mergePublishedMaps_(local.published, remote.published, preferRemote),
    generatedOnly: mergeGeneratedMaps_(local.generatedOnly, remote.generatedOnly, preferRemote),
    extraDraftsByCat: mergeExtraDraftsByCat_(local.extraDraftsByCat, remote.extraDraftsByCat, Object.assign({}, remote.deletedDraftIds || {}, local.deletedDraftIds || {})),
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
    if(preferRemote){
      out.branding.categoryGoals = Object.assign({}, (local.branding && local.branding.categoryGoals) || {}, (remote.branding && remote.branding.categoryGoals) || {});
      out.branding.seriesGoals = Object.assign({}, (local.branding && local.branding.seriesGoals) || {}, (remote.branding && remote.branding.seriesGoals) || {});
      out.branding.subGoalPlans = Object.assign({}, (local.branding && local.branding.subGoalPlans) || {}, (remote.branding && remote.branding.subGoalPlans) || {});
      if(remote.branding && remote.branding.yearPlan) out.branding.yearPlan = remote.branding.yearPlan;
      else if(local.branding && local.branding.yearPlan) out.branding.yearPlan = local.branding.yearPlan;
      if(remote.branding && remote.branding.dailySharePlan) out.branding.dailySharePlan = remote.branding.dailySharePlan;
      else if(local.branding && local.branding.dailySharePlan) out.branding.dailySharePlan = local.branding.dailySharePlan;
    } else {
      out.branding.categoryGoals = Object.assign({}, (remote.branding && remote.branding.categoryGoals) || {}, (local.branding && local.branding.categoryGoals) || {});
      out.branding.seriesGoals = Object.assign({}, (remote.branding && remote.branding.seriesGoals) || {}, (local.branding && local.branding.seriesGoals) || {});
      out.branding.subGoalPlans = Object.assign({}, (remote.branding && remote.branding.subGoalPlans) || {}, (local.branding && local.branding.subGoalPlans) || {});
      if(local.branding && local.branding.yearPlan) out.branding.yearPlan = local.branding.yearPlan;
      else if(remote.branding && remote.branding.yearPlan) out.branding.yearPlan = remote.branding.yearPlan;
      if(local.branding && local.branding.dailySharePlan) out.branding.dailySharePlan = local.branding.dailySharePlan;
      else if(remote.branding && remote.branding.dailySharePlan) out.branding.dailySharePlan = remote.branding.dailySharePlan;
    }
  }
  out.pinnedDraftIds = Object.assign({}, remote.pinnedDraftIds || {}, local.pinnedDraftIds || {});
  out.publishRecCurrentTabOnly = preferRemote ? !!remote.publishRecCurrentTabOnly : !!local.publishRecCurrentTabOnly;
  if(remote.syncRationalesOnBrandSave != null || local.syncRationalesOnBrandSave != null){
    out.syncRationalesOnBrandSave = preferRemote
      ? remote.syncRationalesOnBrandSave !== false
      : local.syncRationalesOnBrandSave !== false;
  }
  out.draftBrandOverrides = Object.assign({}, remote.draftBrandOverrides || {}, local.draftBrandOverrides || {});
  out.opsManual = mergeOpsManual_(local.opsManual, remote.opsManual, preferRemote);
  var mergedMs = Math.max(localMs, remoteMs, Date.now());
  out.savedAt = new Date(mergedMs).toISOString();
  out.localSavedAt = out.savedAt;
  delete out.apiKey;
  return out;
}
function mergeOpsManual_(local, remote, preferRemote){
  if(!local || typeof local !== 'object') return remote && typeof remote === 'object' ? remote : null;
  if(!remote || typeof remote !== 'object') return local;
  var base = preferRemote ? remote : local;
  var other = preferRemote ? local : remote;
  return {
    activeBranch: base.activeBranch || other.activeBranch || 'global',
    checked: Object.assign({}, other.checked || {}, base.checked || {}),
    notes: Object.assign({}, other.notes || {}, base.notes || {}),
    collapsed: Object.assign({}, other.collapsed || {}, base.collapsed || {}),
    newBranchMeta: Object.assign({}, other.newBranchMeta || {}, base.newBranchMeta || {})
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
    var ids = [];
    var byCat = payload.extraDraftsByCat || {};
    Object.keys(byCat).sort().forEach(function(k){
      (byCat[k] || []).forEach(function(d){ if(d && d.id) ids.push(d.id); });
    });
    return JSON.stringify({
      extra: ids.sort(),
      pub: Object.keys(payload.published || {}).sort(),
      gen: Object.keys(payload.generatedOnly || {}).sort(),
      del: Object.keys(payload.deletedDraftIds || {}).sort(),
      brand: brandingFingerprint_(payload.branding),
      ops: payload.opsManual ? JSON.stringify(payload.opsManual) : ''
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
function withPlannerSyncMutex_(fn){
  var run = _plannerSyncMutexTail.then(fn, fn);
  _plannerSyncMutexTail = run.catch(function(){});
  return run;
}
async function syncAllSourcesIfNewer_(reason){
  return withPlannerSyncMutex_(function(){ return syncAllSourcesIfNewerCore_(reason); });
}
async function syncAllSourcesIfNewerCore_(reason){
  var localPayload = getPersistPayload();
  var localMs = getPayloadSavedMs_(localPayload);
  var remote = null;
  var remoteMs = 0;
  var remoteSource = '';

  if(hasDriveValidToken_()){
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
      var r = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: plannerGasRequestBody_({ action: 'plannerSyncPull' })
      });
      var data = await r.json();
      applyPlannerServerCaps_(data);
      if(data.result === 'success' && data.payload){
        var ms2 = getPayloadSavedMs_(data.payload);
        if(!remote){
          remote = data.payload;
          remoteMs = ms2;
          remoteSource = '서버';
        } else if(ms2 >= remoteMs){
          remote = mergePlannerPayloads_(data.payload, remote);
          remoteMs = getPayloadSavedMs_(remote);
          remoteSource = remoteSource === 'Drive' ? 'Drive·서버' : '서버';
        } else {
          remote = mergePlannerPayloads_(remote, data.payload);
          remoteMs = getPayloadSavedMs_(remote);
          remoteSource = remoteSource === 'Drive' ? 'Drive·서버' : '서버';
        }
      }
    } catch(e1){
      console.warn('[동기화 서버]', reason || '', e1);
    }
  }

  if(!remote) return false;

  var merged = mergePlannerPayloads_(localPayload, remote);
  var fpBefore = plannerSyncFingerprint_(localPayload);
  var fpAfter = plannerSyncFingerprint_(merged);
  var remoteNewer = remoteMs > localMs + 1500;
  if(fpBefore === fpAfter && !remoteNewer) return false;

  var promptsBefore = promptsFingerprint_(state.prompts);
  applyPersistPayload(merged);
  try {
    if(merged.dailyAutoLast) localStorage.setItem('ht_daily_auto_last', merged.dailyAutoLast);
  } catch(e2){}
  save({ skipDriveUpload: false, skipGasPush: false, driveImmediate: false, gasImmediate: true });
  updateApiBadge();
  renderTabs();
  renderMain();
  updateDriveButtonState();

  var promptsChanged = promptsBefore !== promptsFingerprint_(state.prompts);
  var topicsAdded = fpBefore !== fpAfter;
  if(merged.plannerLastAuto && merged.plannerLastAuto.draftId != null){
    handleServerPlannerAuto_(merged);
    setTimeout(function(){
      openNextPublishRecommendationFromEntry_(merged.plannerLastAuto.draftId, merged.plannerLastAuto.catId);
    }, 400);
  } else if(typeof setAppToast === 'function' && (topicsAdded || remoteNewer)){
    var msg = (remoteSource || '클라우드') + ' 데이터를 합쳐 반영했어요.';
    if(topicsAdded) msg += '\n다른 기기에서 만든 주제가 있으면 함께 불러왔어요.';
    if(promptsChanged) msg += '\n프롬프트 설정도 반영됐어요.';
    setAppToast(msg, { duration: 4500, variant: 'ok' });
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
        roadmapStepId: d.roadmapStepId || '',
        sourceNote: d.sourceNote || '',
        youtubeAnalysis: d.youtubeAnalysis || '',
        youtubeUrls: d.youtubeUrls || []
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
        roadmapStepId: d.roadmapStepId || '',
        sourceNote: d.sourceNote || '',
        youtubeAnalysis: d.youtubeAnalysis || '',
        youtubeUrls: d.youtubeUrls || []
      });
    });
  });
  purgeDeletedDraftsFromCatalog_();
}
function applyPersistPayload(s){
  if(!s) return;
  var prevDeleted = state.deletedDraftIds || {};
  state.published = s.published || {};
  state.generatedOnly = s.generatedOnly || {};
  state.localSavedAt = s.localSavedAt || '';
  state.chatgptOpenUrl = s.chatgptOpenUrl || '';
  state.prompts = s.prompts !== undefined ? s.prompts : null;
  state.promptRefineMilestones = s.promptRefineMilestones || {};
  state.branding = s.branding && typeof s.branding === 'object' ? s.branding : null;
  state.draftBrandOverrides = s.draftBrandOverrides && typeof s.draftBrandOverrides === 'object' ? s.draftBrandOverrides : {};
  if(s.publishRecCurrentTabOnly != null) state.publishRecCurrentTabOnly = !!s.publishRecCurrentTabOnly;
  if(s.syncRationalesOnBrandSave != null) state.syncRationalesOnBrandSave = s.syncRationalesOnBrandSave !== false;
  state.deletedDraftIds = Object.assign({}, s.deletedDraftIds || {}, prevDeleted);
  state.pinnedDraftIds = s.pinnedDraftIds && typeof s.pinnedDraftIds === 'object' ? s.pinnedDraftIds : {};
  if(s.plannerSetupDismissed) state.plannerSetupDismissed = true;
  if(s.opsManual && typeof s.opsManual === 'object') state.opsManual = s.opsManual;
  mergeExtraDrafts(s.extraDraftsByCat);
  purgeDeletedDraftsFromCatalog_();
  applyBuiltinDraftBrandSeeds_();
  restorePendingSubGoalPlan_();
  restorePendingYearPlan_();
  if(sanitizeBrandingClinicRefs_()) save({ skipDriveUpload: true, skipGasPush: true });
  if(ensureYearPlanMigrated_()) save({ skipDriveUpload: true, skipGasPush: true });
}

function save(opts) {
  var o = opts || {};
  state.localSavedAt = new Date().toISOString();
  var payload = JSON.stringify(getLocalStoragePayload());
  var ok = false;
  try {
    localStorage.setItem(SK, payload);
    ok = true;
  } catch (e0) {
    try {
      localStorage.setItem(SK, payload);
      ok = true;
    } catch (e1) {
      if (typeof setAppToast === 'function') {
        setAppToast('이 기기에 저장하지 못했어요.\n저장 공간이 부족하거나 브라우저가 비공개 모드일 수 있어요.', { duration: 6500, variant: 'err' });
      } else {
        alert('저장에 실패했습니다.');
      }
    }
  }
  if (ok) {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      try {
        if (!sessionStorage.getItem('ht_offline_save_hint')) {
          sessionStorage.setItem('ht_offline_save_hint', '1');
          if (typeof setAppToast === 'function') {
            setAppToast('오프라인 상태예요.\n이 기기에는 저장됐고, Drive는 인터넷에 연결되면 자동으로 다시 올라가요.', { duration: 4800, variant: 'ok' });
          }
        }
      } catch (e2) {}
    }
    if(!o.skipDriveUpload) scheduleDriveUpload(!!o.driveImmediate);
    if(!o.skipGasPush) schedulePlannerGasPush_(!!o.gasImmediate);
  }
}

// ── Google Drive (앱 데이터 폴더, 단일 JSON) ──
const DRIVE_SYNC_FILENAME = 'planner-sync-v1.json';
const DRIVE_CONNECTED_KEY = 'ht_drive_connected';
const DRIVE_LAST_SYNC_KEY = 'ht_drive_last_sync_ok';
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
      return Promise.reject(new Error('Drive 로그인이 필요해요. Drive 버튼을 눌러 주세요.'));
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
    return Promise.reject(new Error('Drive 로그인이 필요해요. 상단 Drive 버튼을 눌러 주세요.'));
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
  return withPlannerSyncMutex_(async function(){
  await plannerPullRemoteIntoStateCore_();
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
    throw new Error('Drive 로그인이 만료됐어요. 상단 Drive 버튼을 눌러 다시 연결해 주세요.');
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
  try { localStorage.setItem(DRIVE_LAST_SYNC_KEY, new Date().toISOString()); } catch(e){}
  updateDriveButtonState();
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
    throw new Error('Drive 로그인이 만료됐어요. 상단 Drive 버튼을 눌러 다시 연결해 주세요.');
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
    applyPersistPayload(s);
    if(s.apiKey) state.apiKey = s.apiKey;
  }
  else applyBuiltinDraftBrandSeeds_();
} catch(e){
  applyBuiltinDraftBrandSeeds_();
}

// ── Init ──
window.onload = () => {
  if(readCachedDriveToken_()) hideDriveOAuthBusy_();
  var oauthHashEarly = readDriveOAuthHash_();
  var pendingOAuth = oauthHashEarly.indexOf('access_token=') !== -1 || oauthHashEarly.indexOf('error=') !== -1;
  if(!pendingOAuth && !readCachedDriveToken_()) hideDriveOAuthBusy_();
  checkDriveOAuthStuck_();
  var oauthReturned = consumeDriveOAuthRedirect_();
  if(readCachedDriveToken_()) hideDriveOAuthBusy_();
  if(!oauthReturned) checkDriveOAuthFailedReturn_();
  if(state.apiKey){ document.getElementById('api-modal').classList.remove('open'); updateApiBadge(); }
  else { trapFocusIn_(document.querySelector('#api-modal .modal-box')); }
  refreshPlannerServerCaps_();
  updateDriveButtonState();
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
  if('serviceWorker' in navigator && location.protocol !== 'file:'){
    navigator.serviceWorker.register('planner-sw.js').catch(function(e){ console.warn('[SW]', e); });
  }
  driveGsiWarmup_();
  driveSilentWarmup_();
  startDriveTokenRefreshLoop_();
  syncAllSourcesIfNewer_('load');
  if(!oauthReturned) consumeDeepLinkFromHash_();
  else setTimeout(function(){ consumeDeepLinkFromHash_(); }, 300);
  setTimeout(function(){
    reconcileInstaPendingJobs_('load');
    reconcileThreadsPendingJobs_('load');
  }, 600);
  scheduleDailyAutoDraft_();
  setInterval(function(){ maybeRunDailyAutoDraft_('interval'); }, 2 * 60 * 1000);
  setTimeout(function(){ maybeRunDailyAutoDraft_('load'); }, 4000);
  var onToastViewportChange_ = function(){ scheduleAppToastLift_(); };
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
    syncAllSourcesIfNewer_('online');
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

function applyPlannerServerCaps_(data){
  if(!data) return;
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
    var r = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: plannerGasRequestBody_({ action: 'plannerSyncPull' })
    });
    var data = await r.json();
    if(isPlannerAuthError_(data)){
      notifyPlannerAuthError_(data);
      updateGeminiServerStatusUI_();
      return;
    }
    applyPlannerServerCaps_(data);
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
  if(!v && !state.apiKey){ errEl.textContent = 'Claude API 키를 입력해 주세요'; return; }
  if(v) state.apiKey = v;
  const nu = normalizeChatgptOpenUrl(urlIn);
  if(nu === '__invalid__'){
    errEl.textContent = 'ChatGPT 주소는 chatgpt.com 또는 chat.openai.com 만 허용됩니다';
    return;
  }
  state.chatgptOpenUrl = nu === '' ? '' : nu;
  var syncTokEl = document.getElementById('planner-sync-token');
  if(syncTokEl) setPlannerSyncToken_(syncTokEl.value);
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
  document.getElementById('api-input').value = state.apiKey;
  document.getElementById('api-input').type = 'password';
  var toggleBtn = document.getElementById('api-key-toggle');
  if(toggleBtn) toggleBtn.textContent = '보기';
  const uEl = document.getElementById('chatgpt-open-url');
  if(uEl) uEl.value = state.chatgptOpenUrl || DEFAULT_CHATGPT_IMAGE_PROJECT_URL;
  var syncTokEl = document.getElementById('planner-sync-token');
  if(syncTokEl) syncTokEl.value = getPlannerSyncToken_();
  updateGeminiServerStatusUI_();
  refreshPlannerServerCaps_();
  document.getElementById('api-modal').classList.add('open');
  trapFocusIn_(document.querySelector('#api-modal .modal-box'));
}
function updateApiBadge() {
  document.getElementById('api-dot').className = 'api-dot' + (state.apiKey ? ' on' : '');
  var label = 'API 키 설정';
  if(state.apiKey){
    label = isGeminiYoutubeAvailable_() ? 'API · 유튜브' : 'API';
  }
  document.getElementById('api-status').textContent = label;
}

// ── Tabs ──
function getSortedCatTabOrder() {
  return CAT_TAB_NAV_ROWS[0].concat(CAT_TAB_NAV_ROWS[1]);
}

function renderTabs() {
  function cellHTML(idx) {
    const c = CATEGORIES[idx];
    const label = CAT_TAB_SHORT[idx] || c.name;
    const active = countUnpublishedTopicsForCat_(idx);
    const pendingPlan = state.pendingSubGoalPlan && state.pendingSubGoalPlan.catId === idx;
    return (
      '<button type="button" class="cat-tab' +
      (state.currentCat === idx ? ' active' : '') +
      (pendingPlan ? ' has-pending-plan' : '') +
      '" onclick="selectCat(' +
      idx +
      ')"' + (pendingPlan ? ' title="AI 하위 목표 제안 대기 중"' : '') + '><span class="cat-tab-label">' +
      label +
      '</span><span class="cat-tab-badge" title="화면에 보이는 진행 중 주제 수 (발행 완료 제외)">' +
      active +
      '</span></button>'
    );
  }
  var html = '';
  CAT_TAB_NAV_ROWS.forEach(function(row){
    row.forEach(function(idx){ html += cellHTML(idx); });
  });
  document.getElementById('cat-tabs-grid').innerHTML = html;
}

function selectCat(i) {
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
function draftIsPublished_(draftId) {
  return !!(draftId && state.published[draftId] && state.published[draftId].date);
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
    state.opsManual = { activeBranch: 'global', checked: {}, notes: {}, collapsed: {}, review: {}, newBranchMeta: { name: '', area: '', note: '' } };
  }
  if(!state.opsManual.checked) state.opsManual.checked = {};
  if(!state.opsManual.notes) state.opsManual.notes = {};
  if(!state.opsManual.collapsed) state.opsManual.collapsed = {};
  if(!state.opsManual.review) state.opsManual.review = {};
  if(!state.opsManual.newBranchMeta) state.opsManual.newBranchMeta = { name: '', area: '', note: '' };
  if(!OPS_BRANCH_IDS.includes(state.opsManual.activeBranch)) state.opsManual.activeBranch = 'global';
  return state.opsManual;
}
function getOpsSectionsForBranch_(branchId){
  return OPS_MANUAL_SECTIONS.filter(function(sec){ return sec.branch === branchId; });
}
function countOpsManualUnchecked_(catIdx){
  if(!isOpsManualCategory(catIdx)) return 0;
  var om = getOpsManualState_();
  var unchecked = 0;
  OPS_MANUAL_SECTIONS.forEach(function(sec){
    (sec.items || []).forEach(function(it){
      if(!om.checked[it.id]) unchecked++;
    });
  });
  return unchecked;
}
function countOpsManualProgress_(branchId){
  var om = getOpsManualState_();
  var total = 0;
  var done = 0;
  getOpsSectionsForBranch_(branchId).forEach(function(sec){
    (sec.items || []).forEach(function(it){
      total++;
      if(om.checked[it.id]) done++;
    });
  });
  return { done: done, total: total };
}
function renderOpsManualMainHTML_(){
  var om = getOpsManualState_();
  var branch = om.activeBranch;
  var prog = countOpsManualProgress_(branch);
  var branchTabs = OPS_BRANCH_IDS.map(function(bid){
    var p = countOpsManualProgress_(bid);
    var pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    return '<button type="button" class="ops-branch-tab' + (branch === bid ? ' active' : '') + '" onclick="selectOpsBranch_(\'' + bid + '\')">' +
      '<span class="ops-branch-tab-label">' + escapeHtml(OPS_BRANCH_LABELS[bid] || bid) + '</span>' +
      '<span class="ops-branch-tab-prog">' + p.done + '/' + p.total + ' · ' + pct + '%</span>' +
    '</button>';
  }).join('');
  var intro = '<div class="ops-manual-intro">' +
    '<div class="ops-manual-title">브랜딩·지점 오픈 메뉴얼</div>' +
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
      var checked = !!om.checked[it.id];
      var note = om.notes[it.id] || '';
      var review = ensureOpsReviewState_(it, branch) || { open: false, fields: {}, pinned: {} };
      var reviewOpen = !!review.open;
      var field = review.fields || {};
      var proposalItems = review.proposalItems || [];
      var checks = review.placementChecks || [];
      var proposalHtml = proposalItems.map(function(p){
        return '<div class="ops-review-proposal' + (p.done ? ' done' : '') + '">' +
          '<div class="ops-review-proposal-head">' +
            '<label class="ops-review-proposal-check">' +
              '<input type="checkbox"' + (p.done ? ' checked' : '') + ' onchange="toggleOpsReviewProposalDone_(\'' + it.id + '\', \'' + p.id + '\', this.checked)" />' +
              '<span class="ops-review-label">' + escapeHtml(p.title || '제안 문장') + '</span>' +
            '</label>' +
            '<button type="button" class="ops-review-pin' + (p.pinned ? ' active' : '') + '" onclick="toggleOpsReviewProposalPin_(\'' + it.id + '\', \'' + p.id + '\')">' + (p.pinned ? '고정됨' : '고정') + '</button>' +
          '</div>' +
          '<div class="ops-review-field">' +
            '<span class="ops-review-sublabel">목적 의도 알려주기</span>' +
            '<textarea class="ops-review-input ops-grow-textarea" rows="1" oninput="autoGrowTextarea_(this)" onchange="setOpsReviewProposalBrief_(\'' + it.id + '\', \'' + p.id + '\', this.value)">' + escapeHtml(p.brief || '') + '</textarea>' +
          '</div>' +
          '<div class="ops-review-field">' +
            '<span class="ops-review-sublabel">제안 문장과 그 이유</span>' +
            '<textarea class="ops-review-input ops-grow-textarea" rows="1" oninput="autoGrowTextarea_(this)" onchange="setOpsReviewProposalText_(\'' + it.id + '\', \'' + p.id + '\', this.value)">' + escapeHtml(p.text || '') + '</textarea>' +
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
      var reviewHtml = '<div class="ops-review-wrap">' +
        '<button type="button" class="ops-review-btn" onclick="toggleOpsReview_(\'' + it.id + '\')">함께 검토</button>' +
        '<div class="ops-review-panel' + (reviewOpen ? ' open' : '') + '">' +
          '<div class="ops-review-group"><div class="ops-review-group-title">제안 문장 <span class="ops-review-group-hint">항목별로 기획·완료</span>' + proposalProgress + '</div>' + proposalHtml + '</div>' +
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
        (it.hint ? '<div class="ops-check-hint">' + escapeHtml(it.hint) + '</div>' : '') +
        reviewHtml +
        '<textarea class="ops-check-note ops-grow-textarea" rows="1" placeholder="메모·링크·담당·완료일" oninput="autoGrowTextarea_(this)" onchange="setOpsNote_(\'' + it.id + '\', this.value)">' + escapeHtml(note) + '</textarea>' +
      '</li>';
    }).join('');
    return '<details class="ops-section' + (collapsed ? '' : ' open') + '" id="ops-sec-' + sec.id + '"' + (collapsed ? '' : ' open') + '>' +
      '<summary class="ops-section-summary" onclick="toggleOpsSection_(\'' + sec.id + '\'); return false;">' +
        '<span class="ops-section-phase">' + escapeHtml(sec.phase) + '</span>' +
        '<span class="ops-section-count">' + (sec.items || []).filter(function(it){ return om.checked[it.id]; }).length + '/' + (sec.items || []).length + '</span>' +
      '</summary>' +
      '<ol class="ops-check-list">' + itemsHtml + '</ol>' +
    '</details>';
  }).join('');
  return '<div class="ops-manual-wrap">' + intro + newMeta +
    '<div class="ops-branch-tabs" role="tablist">' + branchTabs + '</div>' +
    '<div class="ops-sections">' + sections + '</div>' +
    '<p class="ops-manual-foot">체크·메모는 이 기기·Drive·서버 동기화에 저장됩니다. 약수·작전도 새로 시작하는 지점과 같은 항목으로 정리해 두었습니다.</p>' +
  '</div>';
}
function selectOpsBranch_(branchId){
  if(!OPS_BRANCH_IDS.includes(branchId)) return;
  var om = getOpsManualState_();
  om.activeBranch = branchId;
  save({ skipDriveUpload: false });
  renderTabs();
  renderMain();
}
window.selectOpsBranch_ = selectOpsBranch_;
function toggleOpsCheck_(itemId, checked){
  var om = getOpsManualState_();
  if(checked) om.checked[itemId] = true;
  else delete om.checked[itemId];
  save({ skipDriveUpload: false });
  renderTabs();
  renderMain();
}
window.toggleOpsCheck_ = toggleOpsCheck_;
function setOpsNote_(itemId, note){
  var om = getOpsManualState_();
  note = String(note || '').trim();
  if(note) om.notes[itemId] = note;
  else delete om.notes[itemId];
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
function toggleOpsReview_(itemId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  om.review[itemId].open = !om.review[itemId].open;
  save({ skipDriveUpload: true, skipGasPush: true });
  renderMain();
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
function regenOpsReview_(itemId, branchId){
  var om = getOpsManualState_();
  if(!om.review || !om.review[itemId]) return;
  var item = null;
  OPS_MANUAL_SECTIONS.forEach(function(sec){
    (sec.items || []).forEach(function(it){
      if(!item && it.id === itemId) item = it;
    });
  });
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
  renderMain();
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

  if(state.showAdd){ mc.innerHTML = renderAddForm(); bindNewItemTopicInput_(); bindNewItemRefNoteInput_(); return; }

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
  const color = cat.color;
  const brandMeta = getDraftBrandMeta_(d, cat.id, draftIndex);
  const audienceBadge = String(cat.audience || '').includes('전문가') ? '전문가' : (String(cat.audience || '').includes('일반') ? '일반인' : cat.audience);
  const createdDateLabel = getDraftCreatedDateLabel_(d);
  const badges = [
    `<span class="badge badge-aud">${escapeHtml(audienceBadge)}</span>`,
    isRec && d.recType==='related' ? '<span class="badge badge-rec">관련</span>' : '',
    compactInSeries && brandMeta.step ? '<span class="badge badge-step">' + escapeHtml(brandMeta.step) + '</span>' : '',
    hasDraft ? '<span class="badge badge-gen">초안있음</span>' : '',
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
    <div class="card-topic">${plannerClampTextHTML_(d.topic, { lines: 2 })}</div>
    <div class="card-angle">${plannerClampTextHTML_(d.angle, { lines: 3 })}</div>
    ${brandMeta.rationale ? '<div class="card-rationale">' + plannerClampTextHTML_(stripTopicRationaleStepPrefix_(brandMeta.rationale), { lines: 2 }) + '</div>' : ''}
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
function getDraftRefImages_(draft){
  if(!draft) return [];
  if(Array.isArray(draft.refImages) && draft.refImages.length) return draft.refImages.filter(function(img){ return img && img.data; });
  return (draft.refImage && draft.refImage.data) ? [draft.refImage] : [];
}

const CLAUDE_PLANNER_MODEL = 'claude-sonnet-4-6';

async function callClaudePlanner_(prompt, options){
  options = options || {};
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
  if(isDaily) lines.push('- 사진·메모의 장면·느낌을 topic·angle에 직접 반영');
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
    ? (countNote + '장면·분위기·느낌·등장 요소를 한국어 참고 메모로 정리하세요. 3~8문장, 불릿 없이. 과장·진단 단정 금지. 메모 본문만 출력.')
    : (isExpert
      ? (countNote + '강의·실습 캡처 내용을 한국어 참고영상 메모로 정리하세요. 테크닉·손 위치·핵심 포인트 3~10문장. 메모 본문만 출력.')
      : (countNote + '참고 영상/사진 캡처를 한국어 참고영상 메모로 정리하세요. 자세·부위·동작·상황·핵심 포인트 3~10문장. 메모 본문만 출력.'));
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
      ? '\n[첨부 사진' + (images.length > 1 ? ' ' + images.length + '장' : '') + '] 장면·분위기·오늘의 느낌을 topic·angle에 반영. 몸·날씨 맥락이 보이면 가벼운 근골격계 시선 한 스푼. 교육·세미나 사진이면 일기·생활 나눔 각도로.'
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
    ? ('일상 공유용 주제 1개. **입력·사진·메모의 장면·느낌**을 중심으로 (다른 일상 소재로 바꾸지 마세요).\n' +
       '- topic: 일기 제목 한 줄 (15~32자, 질문·감탄·오늘의 장면). 입력 키워드·장면 반영\n' +
       '- angle: 어떤 느낌으로 쓸지 한 줄. 날씨·피로·움직임 등 **근골격계 전문가 시선 한 스푼** 가능 (강의·임상 톤 금지)\n')
    : (isExpertCourseCategory(catId)
      ? ('전문가 과정 **강연·교육 영상·실습 공유**용 주제 1개.\n' +
         '- topic: PT·트레이너 동료에게 건네는 한 줄 (15~40자, 과장·낚시 금지)\n' +
         '- angle: **다룰 테크닉/개념 + 핵심 포인트 1~3개**가 드러나는 각도 한 줄\n' +
         '  (예: "어깨 관절 가동술 — 강의에서 시연한 접근 각도와 손 위치 포인트")\n' +
         (noteBlock ? '- **참고 메모·영상 분석 범위 안**에서만 topic·angle을 잡을 것. 없는 내용·연관 질환·다른 부위로 확장 금지.\n' : ''))
      : ('입력한 키워드·아이디어·문장을 **중심 소재**로 블로그·SNS 주제 1개를 만드세요. 입력에서 벗어난 새 소재로 바꾸지 마세요.\n' +
         '- topic: 한국어 제목 한 줄 (15~36자, **호기심·궁금증을 자극하는 후킹**·질문형 권장). **입력 핵심 키워드가 드러나게**\n' +
         '- angle: 입력·메모의 관점·테크닉·메커니즘을 한 줄로 (입력에 없는 새 각도 금지)\n'));
  var fidelityBlock = buildTopicGenFidelityBlock_(keywords, sourceNote, isDaily);
  var prompt =
'당신은 "브랜딩 플래너"입니다.\n' +
buildBrandContextForPrompt_(catId, null) + '\n\n' +
'카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
'독자: ' + cat.audience + ' (카테고리 기본 독자 — 별도 선택 없음)\n' +
kwLine + noteBlock + imgNote + '\n\n' + topicGuide + fidelityBlock + '\n' +
buildTopicBrandJsonGuide_(catId) + '\n' +
'기존 주제와 겹치지 않게:\n' + avoidTopics.map(function(t){ return ' - ' + t; }).join('\n') + '\n\n' +
'JSON만 출력:\n{"topic":"...","angle":"...","series":"...","step":"...","pillar":"...","rationale":"..."}';
  var text = await callClaudePlanner_(prompt, { image: images.length ? images : null, maxTokens: 900 });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var start = raw.indexOf('{');
  var end = raw.lastIndexOf('}');
  if(start < 0 || end <= start) throw new Error('AI 응답에서 주제 JSON을 찾지 못했어요');
  var obj = JSON.parse(raw.slice(start, end + 1));
  if(!obj.topic) throw new Error('topic이 비어 있어요');
  var out = { topic: String(obj.topic).trim(), angle: String(obj.angle || cat.audience + ' 관점의 콘텐츠').trim() };
  applyTopicFieldsToDraft_(out, obj, catId);
  return out;
}

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
  try {
    var images = [];
    for(var i = 0; i < files.length; i++){
      images.push(await prepareRefImageFromFile_(files[i]));
    }
    state.newItem.refImages = images;
    state.newItem.refImage = images[0] || null;
    renderMain();
    if(state.apiKey){
      if(typeof setAppToast === 'function') setAppToast('사진 ' + images.length + '장 분석 중…', { duration: 3200, variant: 'ok' });
      state.newItem.refNote = await analyzeRefImagesForMemo_(images, state.newItem.catId);
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
  }
};

function renderAddForm(){
  const cat = CATEGORIES[state.newItem.catId] || CATEGORIES[0];
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
      ? '<span style="font-size:11px;color:#0F766E;">참고 사진 ' + imgNames.length + '장: ' + escapeHtml(imgNames.join(', ')) + (isDaily ? ' — 일기 톤으로 글을 씁니다' : '') + '</span>'
      : (isDaily
        ? '<span style="font-size:11px;color:#9CA3AF;">여러 장 선택 가능. 올리면 AI가 참고 메모를 채워 드려요.</span>'
        : '<span style="font-size:11px;color:#9CA3AF;">여러 장 선택 가능 · 최대 12MB(자동 압축). 올리면 AI가 참고영상 메모를 채워요.</span>'));
  const addIntro = isDaily
    ? '「일상 공유」에 올릴 <strong>생활 일기·느낌</strong> 주제를 만듭니다. 사진만 올려도 되고, 키워드와 함께 써도 돼요.'
    : (isExpert
      ? '교육·강의 때 촬영한 <strong>영상 링크</strong> 또는 <strong>실습·시연 사진</strong>을 올리고, 그 내용에 맞춰 동료에게 공유할 주제를 만듭니다. 글은 영상·사진·메모 범위 안에서만 쓰여요.'
      : '추가한 주제는 <strong>선택한 카테고리 탭</strong>의 「전체 초안」 목록 맨 아래에 카드로 생깁니다.');
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
  const refNoteLabel = isDaily ? '참고 메모 (선택)' : (isExpert ? '핵심 포인트 · 영상 메모' : '참고 영상 · 메모 (선택)');
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
  const btnLabel = isDaily && hasPhoto ? '사진으로 일상 글 추가' : (isDaily ? '주제 추가 · 일상 글 만들기' : '키워드로 주제 만들기');
  return `<div class="add-form">
    <div class="form-title">새 주제 추가</div>
    <p style="font-size:12px;color:#6B7280;line-height:1.55;margin-bottom:12px;">${addIntro}</p>
    <div class="form-field">
      <label class="form-label">카테고리</label>
      <select class="form-select" onchange="setNewCat(this.value)">${catOpts}</select>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">독자: <strong>${cat.audience}</strong> (카테고리에 맞게 자동)</div>
    </div>
    <div class="form-field">
      <label class="form-label">${kwLabel}</label>
      <textarea id="new-item-topic-input" class="form-input form-textarea" rows="6" oninput="state.newItem.topic=this.value" placeholder="${kwPlaceholder}">${escapeHtml(state.newItem.topic)}</textarea>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">${kwHint}</div>
    </div>
    <div class="form-field">
      <label class="form-label">${refNoteLabel}</label>
      <textarea id="new-item-ref-note-input" class="form-input form-textarea" rows="5" oninput="state.newItem.refNote=this.value" placeholder="${refNotePlaceholder}" ${analyzing ? 'disabled' : ''}>${escapeHtml(state.newItem.refNote || '')}</textarea>
      <div style="font-size:11px;color:#9CA3AF;margin-top:4px;">${refNoteHint} 사진 선택 시 AI 분석 결과가 여기에 들어가며 직접 수정할 수 있어요.</div>
    </div>
    <div class="form-field">
      <label class="form-label">참고 사진${isDaily ? ' (일상 공유에 추천)' : ' (선택)'}</label>
      <input class="form-input" type="file" accept="image/*" multiple onchange="onNewItemImage(this)" style="padding:8px;" />
      <div style="margin-top:4px;">${imgHint}</div>
    </div>
    <button type="button" class="btn-submit" id="btn-add-draft-submit" onclick="addDraft()" ${analyzing ? 'disabled' : ''}>${analyzing ? '사진 분석 중…' : btnLabel}</button>
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
  ['click','keyup','keydown','select','input','focus','touchend'].forEach(function(ev){
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
  ['click','keyup','keydown','select','input','focus','touchend'].forEach(function(ev){
    el.addEventListener(ev, function(){
      requestAnimationFrame(function(){ requestAnimationFrame(sync); });
    });
  });
}
function setNewCat(v){ state.newItem.catId=parseInt(v,10); renderMain(); }

window.addDraft = async function(){
  if(state.newItem.imageAnalyzing){
    if(typeof setAppToast === 'function') setAppToast('사진 분석이 끝날 때까지 잠시만 기다려 주세요.', { duration: 3200, variant: 'err' });
    return;
  }
  var keywords = (state.newItem.topic || '').trim();
  var refNote = (state.newItem.refNote || '').trim();
  var sourceNote = buildDraftSourceNote_(keywords, refNote);
  var isDaily = isDailyShareCategory(state.newItem.catId);
  var hasPhoto = newItemHasRefImages_();
  if(!sourceNote && !(isDaily && hasPhoto)){
    if(typeof setAppToast === 'function') setAppToast(isDaily ? '키워드·메모를 입력하거나 사진을 올려 주세요.' : '키워드 또는 참고 메모를 입력해 주세요.', { duration: 3500, variant: 'err' });
    else alert(isDaily ? '키워드·메모 또는 사진이 필요합니다' : '키워드 또는 참고 메모를 입력해주세요');
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
  var youtubeAnalysis = '';
  if(btn){ btn.disabled = true; btn.textContent = isDaily && hasPhoto ? '일상 글 준비 중…' : (youtubeUrls.length && isGeminiYoutubeAvailable_() ? '유튜브 분석 중…' : '주제 생성 중…'); }
  if(typeof setAppToast === 'function') setAppToast(
    youtubeUrls.length && isGeminiYoutubeAvailable_() ? '공개 유튜브 영상을 분석한 뒤 주제를 만들고 있어요…' :
    (isDaily && hasPhoto ? '사진을 보고 주제·일상 글을 만들고 있어요…' : '주제 제목·각도를 만들고 있어요…'),
    { duration: 3200, variant: 'ok' }
  );
  try {
    if(youtubeUrls.length && isGeminiYoutubeAvailable_()){
      try {
        youtubeAnalysis = await analyzeYoutubeWithGemini_(youtubeUrls[0], state.newItem.catId);
      } catch(ytErr){
        var ytMsg = (ytErr && ytErr.message) ? ytErr.message : String(ytErr);
        var ytToast = '유튜브 분석 실패 — 메모만으로 주제를 만들게요.';
        if(ytMsg) ytToast += '\n' + ytMsg;
        if(typeof setAppToast === 'function') setAppToast(ytToast, { duration: /할당량|quota|limit/i.test(ytMsg) ? 12000 : 7000, variant: 'err' });
      }
    }
    if(btn) btn.textContent = '주제 생성 중…';
    var gen = await generateTopicFromKeywords_(state.newItem.catId, keywords, state.newItem.refImages, sourceNote, youtubeAnalysis);
    var cat = CATEGORIES[state.newItem.catId];
    var id = 'd' + state.newItem.catId + '-c' + Date.now();
    var draft = { id: id, topic: gen.topic, angle: gen.angle, createdAt: new Date().toISOString() };
    applyTopicFieldsToDraft_(draft, gen, state.newItem.catId);
    if(sourceNote) draft.sourceNote = sourceNote;
    if(youtubeAnalysis){
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
    state.newItem = { date:'', topic:'', catId: savedCatId, refImages: [], refImage: null, refNote: '', imageAnalyzing: false };
    state.showAdd = false;
    document.getElementById('add-toggle-btn').textContent = '추가';
    state.currentCat = cat.id;
    renderTabs();
    renderMain();
    save();
    var openTab = isThreadCategory(cat.id) ? 'thread' : (isHeiljagyaeCategory(cat.id) ? 'community' : 'blog');
    var genLabel = openTab === 'blog' ? '블로그 초안' : (openTab === 'thread' ? '일상 글' : '게시판·이미지 초안');
    if(btn) btn.textContent = genLabel + ' 작성 중…';
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
    if(btn){
      var isD = isDailyShareCategory(state.newItem.catId);
      var hp = newItemHasRefImages_();
      btn.textContent = isD && hp ? '사진으로 일상 글 추가' : (isD ? '주제 추가 · 일상 글 만들기' : '키워드로 주제 만들기');
      btn.disabled = false;
    }
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
독자: ${cat.audience}

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
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': state.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: CLAUDE_PLANNER_MODEL,
        max_tokens: 1400,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    if(!res.ok) throw new Error((data.error && data.error.message) ? data.error.message : ('HTTP ' + res.status));
    const text = (data.content || []).filter(b=>b.type==='text').map(b=>b.text).join('');
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
  var hasExtra = draftHasContent(d) || draftIsPublished_(draftId);
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
    startPlannerAiWait_({ estimateSec: TOPIC_REGEN_ESTIMATE_SEC, regenDraftId: draftId });
  }

  const avoidTopics = (cat.drafts || [])
    .map(function(x){ return x && x.topic ? x.topic : ''; })
    .filter(Boolean)
    .slice(0, 80);

  const prompt =
`당신은 "브랜딩 플래너"입니다.
${buildBrandContextForPrompt_(catId, d)}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}

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
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': state.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: CLAUDE_PLANNER_MODEL,
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    if(!res.ok) throw new Error((data.error && data.error.message) ? data.error.message : ('HTTP ' + res.status));
    const text = (data.content || []).filter(b=>b.type==='text').map(b=>b.text).join('');
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
    if(v === '0') return false;
    return true;
  } catch(e){ return true; }
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


// planner-detail-normalize.js — 브랜딩 플래너 detail
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

function normalizeImagesBlock(raw){
  if(!raw || typeof raw !== 'object') return null;
  return {
    gptVisuals: Array.isArray(raw.gptVisuals) ? raw.gptVisuals : [],
  };
}

/** 블로그 탭: 예전 5장 초안이면 ③·④에 해당하는 항목 우선 */
function trimBlogInstaImages_(gptVisuals){
  var list = (gptVisuals || []).filter(function(x){ return x && x.prompt; });
  if(list.length <= 2) return list;
  var pro = list.find(function(x){
    return /전문|설명|보조|③|infographic|illustration/i.test(String(x.title || ''));
  });
  var self = list.find(function(x){
    return /셀프|케어|동작|④|stretch|exercise|self/i.test(String(x.title || ''));
  });
  if(pro && self) return [pro, self];
  if(list.length >= 5) return [list[2], list[3]].filter(Boolean);
  return list.slice(0, 2);
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
    getCommunityProblemText_(co),
    '',
    (co.selfCare || '').trim(),
    '',
    (co.explanation || '').trim(),
    '',
    COMMUNITY_FIXED_CLOSING
  ].join('\n');
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
    getGeneralBlogProblemText_(b),
    '',
    (b.selfCare || '').trim(),
    '',
    (b.explanation || '').trim(),
    '',
    (b.cta || '').trim(),
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

function normalizeNotebookLMBlock(raw){
  if(!raw || typeof raw !== 'object') return null;
  const qaIn = Array.isArray(raw.qa) ? raw.qa : (Array.isArray(raw.qaPairs) ? raw.qaPairs : []);
  const qa = qaIn.map(function(x){
    const q = x && (x.question != null ? x.question : x.q);
    const a = x && (x.answer != null ? x.answer : x.a);
    return { q: q != null ? String(q).trim() : '', a: a != null ? String(a).trim() : '' };
  }).filter(function(x){ return x.q || x.a; });
  const chapters = Array.isArray(raw.chapterTitles) ? raw.chapterTitles.map(function(x){ return String(x).trim(); }).filter(Boolean) : [];
  const oneLine = raw.oneLineForSource != null ? String(raw.oneLineForSource).trim() : '';
  const videoIntro = raw.videoIntroScript != null ? String(raw.videoIntroScript).trim() : '';
  if(!qa.length && !oneLine && !chapters.length && !videoIntro) return null;
  return {
    oneLineForSource: oneLine,
    qa: qa,
    chapterTitles: chapters,
    videoIntroScript: videoIntro
  };
}

function formatNotebookLMExportText(nl){
  if(!nl) return '';
  const lines = [];
  lines.push('━ NotebookLM 소스용 ━');
  if(nl.oneLineForSource) lines.push('[' + nl.oneLineForSource + ']');
  lines.push('');
  lines.push('【질문·답변】');
  (nl.qa || []).forEach(function(pair, i){
    lines.push('');
    lines.push('Q' + (i + 1) + '. ' + pair.q);
    lines.push('A' + (i + 1) + '. ' + pair.a);
  });
  if(nl.chapterTitles && nl.chapterTitles.length){
    lines.push('');
    lines.push('【강의·모듈 제목 후보】');
    nl.chapterTitles.forEach(function(t, i){ lines.push((i + 1) + '. ' + t); });
  }
  if(nl.videoIntroScript){
    lines.push('');
    lines.push('【영상 오프닝 스크립트】');
    lines.push(nl.videoIntroScript);
  }
  lines.push('');
  lines.push('→ NotebookLM에 붙여넣은 뒤 오디오 오버뷰·카드·영상 대본을 생성하세요.');
  return lines.join('\n');
}

function buildImagePromptGuide(topic, angle, customGuide){
  const t = String(topic || '').trim();
  const a = String(angle || '').trim();
  const g = String(customGuide || '').trim();
  return `
[이미지 2장 — 주제 맞춤 생성 규칙]
이번 초안 주제: "${t}"
작성 각도: "${a}"

**정확히 2개** gptVisuals만. 대표·공감·마무리 정물 등은 만들지 마세요.

각 prompt는 **영문 한 덩어리** (90~200 단어). 한 줄 요약·불릿 금지.

■ ① 전문 설명 보조
- clean soft medical illustration 또는 minimal infographic
- 주제에 맞는 단순 단면·화살표·ROM·근막·림프 흐름 등 (과장·고어·읽을 수 있는 라벨 금지)
- sage green, cream white, soft palette, non-graphic educational tone

■ ② 셀프케어 동작
- **블로그·인스타 본문**에 나온 셀프 스트레칭·동작과 **동일한** 자세·부위
- Korean home wood floor or studio yoga mat, East Asian adult, modest clothing, top or side view, soft natural light
- 동작·초·회·분이 본문에 있으면 영문 프롬프트에 구체적으로

■ 공통
Korean domestic visual language, warm beige sage cream, soft daylight, no text overlay, no logos, no watermarks.

${g ? '[카테고리별 이미지 생성 지침]\n' + g : ''}
`;
}

function buildHeiljagyaeImagePromptGuide(topic, angle, customGuide){
  const t = String(topic || '').trim();
  const a = String(angle || '').trim();
  const g = String(customGuide || '').trim();
  return `
[이미지 2장 — 아파트너 게시글용 추천 프롬프트]
이번 주제: "${t}"
작성 각도: "${a}"

■ 역할 (정확히 2개만)
① **단지·동네에서 공감되는 일상 한 컷**: 아파트 복도·창가·엘리베이터 앞 등 익숙한 공간, 한국인 입주민 연령대, 편한 복장, 주제와 연결된 가벼운 피로·스트레칭 분위기. 광고·설득 느낌 금지.
② **게시글 selfCare와 동일한 셀프 동작 한 장면**: 동작·자세·초·회·분을 영문 프롬프트에 구체적으로. 한국 아파트 바닥 또는 요가 매트, 부드러운 자연광.

■ 공통 (두 프롬프트 모두에 녹이기)
Photorealistic editorial, **Korean apartment / local wellness** authenticity, warm beige sage cream palette, soft daylight, no text overlay, no logos, no watermarks. East Asian adults, modest everyday clothing, natural skin — not Western stock-photo glam.

각 gptVisuals.prompt는 **영문 한 덩어리** (역할당 약 80~200 단어). 한 줄 요약·불릿 금지.

${g ? '[카테고리별 이미지 생성 지침]\n' + g : ''}
`;
}

function buildImageTabBody(content){
  const im = content.images;
  const imgCap = getImageSlotCount(state.selectedCatId) || 2;
  if(!im){
    return `<p class="empty-note" style="padding:0;">이 초안에는 이미지 추천이 없어요. 초안을 다시 생성하면 함께 만들어져요.</p>
      <button type="button" class="btn-gen-big" onclick="genContent()" style="width:100%;margin-top:12px;">초안·이미지 다시 생성</button>`;
  }
  var rawGpt = (im.gptVisuals || []).filter(function(s){ return s && s.prompt; });
  const gpt = isHeiljagyaeCategory(state.selectedCatId)
    ? rawGpt.slice(0, imgCap)
    : trimBlogInstaImages_(rawGpt).slice(0, imgCap);

  let html = '';

  if(isHeiljagyaeCategory(state.selectedCatId)){
    html += '<div class="img-section-title">ChatGPT 이미지 프롬프트 (2장 · 아파트너용)</div>';
    html += '<p style="font-size:12px;color:#6B7280;margin:0 0 14px;line-height:1.55;">① 동네에서 공감되는 일상 컷 · ② 게시글 셀프 케어와 같은 동작 장면.</p>';
  } else {
    html += '<div class="img-section-title">ChatGPT 이미지 프롬프트 (2장)</div>';
    html += '<p style="font-size:12px;color:#6B7280;margin:0 0 14px;line-height:1.55;">① 전문 설명 보조(도식·인포) · ② 셀프케어 동작(블로그·인스타 본문과 동일 동작).</p>';
  }
  if(gpt.length === 0){
    html += '<p class="empty-note" style="padding:12px 0;">프롬프트가 없습니다. 재생성해 주세요.</p>';
  } else {
    gpt.forEach(function(item, i){
      const title = item.title || ('시안 ' + (i + 1));
      const p = item.prompt || '';
      const dp = encodeURIComponent(p);
      html += '<div class="img-tool-card">';
      html += '<div class="img-tool-title">' + escapeHtml(title) + '</div>';
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
  if(content){ renderSheetContent(content); }
  else { renderSheetEmpty(draft, cat); }
  document.getElementById('detail-overlay').classList.add('open');
  lockBodyScroll_();
  setTimeout(function(){
    var sheetEl = document.getElementById('detail-sheet');
    sheetEl.classList.add('open');
    settleBottomSheet_(sheetEl);
    scheduleAppToastLift_();
    trapFocusIn_(sheetEl);
  }, 10);
  if(!opts.skipHash){
    setOpenDetailHash_(draftId, catId, state.activeTab);
  }
}

function buildDraftReferencePreviewHTML_(draft){
  if(!draft) return '';
  var parts = [];
  if(draft.sourceNote){
    parts.push('<div style="margin-bottom:12px;padding:12px 14px;background:#F0FDFA;border:1px solid #CCFBF1;border-radius:10px;">' +
      '<div style="font-size:10px;font-weight:700;color:#0F766E;letter-spacing:.6px;margin-bottom:6px;">참고 메모 (영상·테크닉)</div>' +
      '<div style="font-size:12px;color:#374151;line-height:1.65;white-space:pre-wrap;max-height:100px;overflow-y:auto;">' + escapeHtml(draft.sourceNote) + '</div></div>');
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
    ? 'AI가 <strong>일상 일기·생활 나눔</strong> 톤으로<br><strong>한 줄 + 3~7문장</strong>을 써요. 몸·날씨·감정 이야기엔 <strong>가벼운 전문가 시선</strong>이 더해질 수 있어요'
    : isHeiljagyaeCategory(cat.id)
    ? 'AI가 <strong>아파트너 게시판 글</strong>과 <strong>추천 이미지 프롬프트 2개</strong>만<br>만들어드려요'
    : isGeneralAudienceCategory(cat.id)
    ? 'AI가 <strong>블로그(문제 제기·셀프 케어·원리 설명)</strong>와 이미지 프롬프트 <strong>2장</strong>을 만들어드려요.<br>인스타는 블로그 <strong>발행완료</strong> 후, 쓰레드는 인스타 <strong>발행완료</strong> 후 생성돼요'
    : isExpertCourseCategory(cat.id)
    ? '교육·강의 <strong>영상 링크</strong> 또는 <strong>실습 사진</strong>을 먼저 올리면, AI가 그에 맞춰<br><strong>영상·사진 맥락 → 시연 포인트 → 원리 설명</strong> 글과 이미지 프롬프트 <strong>2장</strong>을 만들어요'
    : 'AI가 <strong>블로그</strong>와 이미지 프롬프트 <strong>2장</strong>을 만들어드려요.<br>인스타는 블로그 <strong>발행완료</strong> 후, 쓰레드는 인스타 <strong>발행완료</strong> 후 생성돼요';
  const sourceNoteHtml = draft.sourceNote
    ? `<div style="margin-bottom:16px;padding:12px 14px;background:#F0FDFA;border:1px solid #CCFBF1;border-radius:10px;">
        <div style="font-size:10px;font-weight:700;color:#0F766E;letter-spacing:.6px;margin-bottom:6px;">참고 메모 (영상·테크닉)</div>
        <div style="font-size:12px;color:#374151;line-height:1.65;white-space:pre-wrap;max-height:120px;overflow-y:auto;">${escapeHtml(draft.sourceNote)}</div>
      </div>`
    : '';
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
      <button onclick="genContent()" style="background:linear-gradient(135deg,#2DD4BF,#0EA5E9);color:#fff;border:none;border-radius:12px;padding:13px 28px;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">초안 생성하기</button>
    </div>`;
  setSheetActionsHtml_('');
}


function renderSheetContent(content) {
  const tab = state.activeTab;
  var focusSnap = captureTextFieldFocus_();
  if(focusSnap && content){
    content = JSON.parse(JSON.stringify(content));
    applySheetEditsForTab_(content, tab);
  }
  const tabsHTML = buildSheetTabsHTML(tab);

  let bodyHTML = '';
  if(tab==='images'){
    bodyHTML = tabsHTML + buildImageTabBody(content);
  } else if(tab==='thread'){
    const th = normalizeThreadBlock(content.thread);
    if(!th || !th.summary){
      bodyHTML = tabsHTML + `<p class="empty-note" style="padding:12px 0;">일상 공유 초안이 없어요. 아래에서 다시 생성해 주세요.</p>
        <button type="button" class="btn-gen-big" onclick="genContent()" style="width:100%;margin-top:8px;">초안 다시 생성</button>`;
    } else {
      const fullThread = getThreadPlainText(th);
      bodyHTML = tabsHTML +
        sheetEditField_('오늘의 한 줄', 'sheet-thread-title', th.topicTitle || '', { rows: 2, title: true }) +
        sheetEditField_('본문 (일상 나눔)', 'sheet-thread-summary', th.summary || '', { rows: 10 }) +
        cb('전체 복사 (SNS 붙여넣기용)', `<div class="cb-box" style="white-space:pre-wrap;font-size:12px;line-height:1.65;max-height:220px;overflow-y:auto;">${escapeHtml(fullThread)}</div>`, fullThread) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">수정한 뒤 <strong>발행완료</strong>를 누르면 최종본이 저장돼요.</p>';
    }
  } else if(tab==='blog'){
    const blogCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
    const b = normalizeBlogBlock(content.blog, blogCatId) || content.blog || {};
    if(blogUsesStructuredGeneralFormat_(blogCatId, b)){
      const fullBlog = formatGeneralBlogPostText(b);
      bodyHTML = tabsHTML +
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true }) +
        sheetEditField_('문제 제기', 'sheet-blog-problem', getGeneralBlogProblemText_(b), { rows: 5, help: '공감 질문 → 일상에서 바로 풀 수 있다는 한 줄까지' }) +
        sheetEditField_('셀프 케어', 'sheet-blog-selfcare', b.selfCare || '', { rows: 8, help: '👉 로 시작 · 동작·초·회·분을 앞쪽에' }) +
        sheetEditField_('원리 설명', 'sheet-blog-explanation', b.explanation || '', { rows: 6 }) +
        sheetEditField_('마무리 CTA', 'sheet-blog-cta', b.cta, { rows: 3 }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분' }) +
        '<div class="cb"><div class="cb-label">블로그 붙여넣기 (전체) <button class="copy-btn" onclick="copyBlogFullPost_(this)">복사</button></div>' +
          '<div class="cb-box" id="sheet-blog-full-preview" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:240px;overflow-y:auto;">' + escapeHtml(fullBlog) + '</div></div>' +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 수정한 뒤 <strong>발행완료</strong>를 누르면 블로그가 저장·복사되고 앱으로 이동해요. 인스타 캡션은 그동안 백그라운드에서 만들어져요.</p>';
    } else if(isExpertCourseCategory(blogCatId)){
      var expertCat = CATEGORIES[blogCatId];
      var expertDraft = expertCat && state.selectedId ? expertCat.drafts.find(function(d){ return d.id === state.selectedId; }) : null;
      var expertRefHtml = buildDraftReferencePreviewHTML_(expertDraft);
      var expertFullBlog = buildBlogPasteTextForPublish_(b, blogCatId);
      bodyHTML = tabsHTML + expertRefHtml +
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true }) +
        sheetEditField_('영상·사진 맥락', 'sheet-blog-hook', b.hook, { rows: 4, help: '이번 영상·사진에서 다룬 장면·상황' }) +
        sheetEditField_('시연·핵심 포인트', 'sheet-blog-outline', (b.outline || []).join('\n'), { rows: 5, help: '손 위치·동작·주의사항 — 한 줄에 하나씩' }) +
        sheetEditField_('원리 설명', 'sheet-blog-draft', b.draft, { rows: 12, help: '본문의 중심. 왜 이렇게 하는지·짧은 메커니즘' }) +
        sheetEditField_('마무리', 'sheet-blog-cta', b.cta, { rows: 3 }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분 · 3~5개 권장' }) +
        '<div class="cb"><div class="cb-label">블로그 붙여넣기 (전체) <button class="copy-btn" onclick="copyBlogFullPost_(this)">복사</button></div>' +
          '<div class="cb-box" id="sheet-blog-full-preview" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:240px;overflow-y:auto;">' + escapeHtml(expertFullBlog) + '</div></div>' +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">영상·사진 내용에 맞게 다듬은 뒤 <strong>발행완료</strong>를 누르면 저장·복사돼요.</p>';
    } else {
      bodyHTML = tabsHTML +
        sheetEditField_('제목', 'sheet-blog-title', b.title, { rows: 2, title: true }) +
        sheetEditField_('후킹 오프닝', 'sheet-blog-hook', b.hook, { rows: 4 }) +
        sheetEditField_('목차 구성', 'sheet-blog-outline', (b.outline || []).join('\n'), { rows: 5, help: '한 줄에 소제목 하나씩' }) +
        sheetEditField_('본문 초안', 'sheet-blog-draft', b.draft, { rows: 14 }) +
        sheetEditField_('마무리 CTA', 'sheet-blog-cta', b.cta, { rows: 3 }) +
        sheetEditField_('해시태그', 'sheet-blog-hashtags', (b.hashtags || []).map(function(h){ return h.replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분' }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">글을 다듬은 뒤 <strong>발행완료</strong>를 누르면 블로그가 저장·복사되고 앱으로 이동해요. 인스타 캡션은 그동안 백그라운드에서 만들어져요.</p>';
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
      bodyHTML = tabsHTML +
        sheetEditField_('첫 줄 후킹', 'sheet-insta-hook', ig.hook, { rows: 2, title: true }) +
        sheetEditField_('캡션 (짧은 본문)', 'sheet-insta-caption', instaCaption, { rows: 10 }) +
        sheetEditField_('해시태그', 'sheet-insta-hashtags', (ig.hashtags || []).map(function(h){ return String(h).replace(/^#/, ''); }).join(' '), { rows: 2, help: '# 없이 띄어쓰기로 구분' }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">수정한 뒤 <strong>발행완료</strong>를 누르면 저장·복사 후 인스타 앱으로 이동해요. 쓰레드 글은 그동안 백그라운드에서 만들어져요. <strong>재생성</strong>은 블로그 글 기준으로 인스타만 다시 만듭니다.</p>';
    }
  } else if(tab==='threads'){
    var ths = content.threads;
    if(shouldShowThreadsPending_(content, state.selectedId)){
      bodyHTML = tabsHTML + buildThreadsPendingBox_(content, state.selectedId);
    } else if(!ths || !String(ths.text || '').trim()){
      bodyHTML = tabsHTML +
        '<div class="sheet-insta-pending"><strong>쓰레드 글은 아직 없어요.</strong><br>인스타 탭에서 <strong>발행완료</strong>를 누르거나, 인스타 캡션이 있으면 하단 <strong>재생성</strong>으로 만들 수 있어요.</div>';
    } else {
      bodyHTML = tabsHTML +
        sheetEditField_('쓰레드 본문', 'sheet-threads-body', ths.text || '', { rows: 14 }) +
        '<p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">수정한 뒤 <strong>발행완료</strong>를 누르면 저장·복사 후 Threads 앱으로 이동해요. <strong>재생성</strong>은 인스타 캡션 기준으로 쓰레드만 다시 만듭니다.</p>';
    }
  } else if(tab==='notebooklm'){
    const nl = content.notebookLM;
    if(!nl){
      bodyHTML = tabsHTML + `<p class="empty-note" style="padding:12px 0;">노트북 LM용 Q&A 초안이 없어요. 초안을 다시 생성하면 함께 만들어져요.</p>
        <button type="button" class="btn-gen-big" onclick="genContent()" style="width:100%;margin-top:8px;">초안 다시 생성</button>`;
    } else {
      const exportText = formatNotebookLMExportText(nl);
      const qaHtml = (nl.qa && nl.qa.length)
        ? nl.qa.map(function(pair, i){
            return `<div class="cb" style="margin-bottom:14px;border:1px solid #E5E7EB;border-radius:12px;padding:12px 14px;background:#FAFAF9;">
              <div class="cb-label" style="margin-bottom:6px;">Q${i + 1}</div>
              <div style="font-weight:700;color:#1A1A1A;margin-bottom:8px;line-height:1.5;">${escapeHtml(pair.q)}</div>
              <div class="cb-label" style="margin-bottom:6px;">A${i + 1} <button class="copy-btn" onclick="cp(this,\`${esc(pair.a)}\`)">복사</button></div>
              <div class="cb-box" style="white-space:pre-wrap;line-height:1.75;font-size:13px;">${escapeHtml(pair.a)}</div>
            </div>`;
          }).join('')
        : '<p class="empty-note" style="padding:8px 0;">질문·답변 항목이 비어 있어요.</p>';
      const chaptersHtml = (nl.chapterTitles && nl.chapterTitles.length)
        ? `<div class="cb"><div class="cb-label">강의·모듈 제목 후보 <button class="copy-btn" onclick="cp(this,\`${esc(nl.chapterTitles.join('\n'))}\`)">복사</button></div>
          <div class="cb-box" style="white-space:pre-wrap;line-height:1.65;">${nl.chapterTitles.map(function(t, i){ return escapeHtml((i + 1) + '. ' + t); }).join('<br/>')}</div></div>`
        : '';
      const introHtml = nl.videoIntroScript
        ? cb('영상 오프닝 스크립트', `<div class="cb-box" style="white-space:pre-wrap;line-height:1.75;">${escapeHtml(nl.videoIntroScript)}</div>`, nl.videoIntroScript)
        : '';
      bodyHTML = tabsHTML + `
        <p class="empty-note" style="padding:4px 0 12px;font-size:12px;color:#6B7280;line-height:1.65;">② 여기서 정리된 심층 Q&A를 복사 → ③ <strong>NotebookLM</strong>에 소스로 붙여 넣으면 강의 자료·오디오 오버뷰·영상용 스크립트를 만들기 좋아요.</p>
        ${nl.oneLineForSource ? cb('소스 한 줄 제목', `<div class="cb-box cb-title">${escapeHtml(nl.oneLineForSource)}</div>`, nl.oneLineForSource) : ''}
        <div class="cb"><div class="cb-label">질문과 답변 <button class="copy-btn" onclick="cp(this,\`${esc(exportText)}\`)">전체 복사</button></div>${qaHtml}</div>
        ${chaptersHtml}
        ${introHtml}
        ${cb('NotebookLM 붙여넣기용 (전체)', `<div class="cb-box" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:260px;overflow-y:auto;">${escapeHtml(exportText)}</div>`, exportText)}`;
    }
  } else if(tab==='community'){
    const co = content.community;
    if(!co){
      bodyHTML = tabsHTML + `<p class="empty-note" style="padding:12px 0;">커뮤니티 초안이 없어요. 초안을 다시 생성하면 함께 만들어져요.</p>
        <button type="button" class="btn-gen-big" onclick="genContent()" style="width:100%;margin-top:8px;">초안 다시 생성</button>`;
    } else {
      const coNorm = normalizeCommunityBlock(co);
      const problemText = getCommunityProblemText_(coNorm);
      const fullPost = formatCommunityPostText(coNorm);
      bodyHTML = tabsHTML + `
        ${sheetEditField_('제목', 'sheet-community-title', coNorm.title || '', { rows: 2, title: true })}
        <div class="cb"><div class="cb-label">인사말 (고정)</div>
          <div class="cb-box" style="white-space:pre-wrap;color:#6B7280;font-size:13px;line-height:1.65;">${escapeHtml(COMMUNITY_FIXED_GREETING)}</div></div>
        ${sheetEditField_('문제 제기', 'sheet-community-problem', problemText, { rows: 5, help: '공감 질문 → 일상에서 바로 풀 수 있다는 한 줄까지, 자연스러운 문장으로' })}
        ${sheetEditField_('셀프 케어 (해결책)', 'sheet-community-selfcare', coNorm.selfCare || '', { rows: 8, help: '👉 로 시작 · 동작·초·회·분을 앞쪽에' })}
        ${sheetEditField_('원리 설명', 'sheet-community-explanation', coNorm.explanation || '', { rows: 6 })}
        <div class="cb"><div class="cb-label">마무리 (고정)</div>
          <div class="cb-box" style="white-space:pre-wrap;color:#6B7280;font-size:13px;line-height:1.65;">${escapeHtml(COMMUNITY_FIXED_CLOSING)}</div></div>
        <div class="cb"><div class="cb-label">게시판 붙여넣기 (전체) <button class="copy-btn" onclick="copyCommunityFullPost_(this)">복사</button></div>
          <div class="cb-box" id="sheet-community-full-preview" style="white-space:pre-wrap;font-size:12px;line-height:1.7;max-height:240px;overflow-y:auto;">${escapeHtml(fullPost)}</div></div>
        <p class="empty-note" style="padding:8px 0 0;font-size:11px;color:#9CA3AF;line-height:1.55;">각 박스를 눌러 바로 수정할 수 있어요. <strong>발행완료</strong>를 누르면 게시판 최종본이 저장돼요.</p>`;
    }
  } else {
    bodyHTML = tabsHTML + '<p class="empty-note">탭을 선택해 주세요.</p>';
  }

  var sheetCatId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(state.selectedId);
  var sheetCat = CATEGORIES[sheetCatId];
  var sheetDraft = sheetCat && sheetCat.drafts.find(function(d){ return d.id === state.selectedId; });
  var brandSheetHTML = sheetDraft ? buildDraftBrandBlockHTML_(sheetDraft, sheetCatId, true) : '';
  document.getElementById('sheet-body').innerHTML = brandSheetHTML + bodyHTML;
  var pubKey = getPublishKeyForTab_(tab, state.selectedCatId);
  var tabSaved = pubKey && state.published[state.selectedId]?.tabPublished?.[pubKey];
  var pubLabel = tabSaved ? '저장됨' : '발행완료';
  var pubStyle = tabSaved ? ' style="background:#F0FDF4;color:#16A34A;border:1px solid #BBF7D0;"' : '';
  setSheetActionsHtml_(
    '<button type="button" class="btn-regen" onclick="genContent()">재생성</button>' +
    '<button type="button" class="btn-sheet-close-action" onclick="closeSheet()">닫기</button>' +
    '<button type="button" class="btn-pub"' + pubStyle + ' onclick="onSheetPublishComplete()">' + pubLabel + '</button>'
  );
  restoreTextFieldFocus_(focusSnap);
  scheduleWorkshopTextareaGrow_(document.getElementById('sheet-body'));
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
    const nImg = getImageSlotCount(state.selectedCatId) || (im.gptVisuals || []).length;
    t += '\n\n[ChatGPT 이미지 프롬프트 · ' + nImg + '장]';
    (im.gptVisuals || []).forEach(function(x, i){
      if(x && x.prompt){ t += '\n' + (i + 1) + '. ' + (x.title || '') + '\n' + x.prompt; }
    });
  }
  return t;
};

function getSheetGoButtonHTML(tab){
  if(tab === 'blog') return `<button type="button" class="btn-sheet-link" onclick="openExternalNaverBlog()">블로그 가기</button>`;
  if(tab === 'insta') return `<button type="button" class="btn-sheet-link" onclick="openExternalInstagram()">인스타 가기</button>`;
  if(tab === 'community') return `<button type="button" class="btn-sheet-link" onclick="openApartnerApp()">아파트너 열기</button>`;
  if(tab === 'notebooklm') return `<button type="button" class="btn-sheet-link" onclick="openNotebookLM()">NotebookLM 열기</button>`;
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
    if(!ths || !ths.text) return '';
    return String(ths.text).trim();
  }
  if(tab === 'community'){
    const c = content.community;
    if(!c) return '';
    return formatCommunityPostText(c);
  }
  if(tab === 'notebooklm'){
    const n = content.notebookLM;
    if(!n) return '';
    return formatNotebookLMExportText(n);
  }
  if(tab === 'thread'){
    const th = normalizeThreadBlock(content.thread);
    if(!th || !th.summary) return '';
    return getThreadPlainText(th);
  }
  if(tab === 'images'){
    const im = content.images;
    if(!im || !im.gptVisuals) return '';
    let t = '[ChatGPT 이미지 프롬프트]\n';
    (im.gptVisuals || []).forEach(function(x, i){
      if(x && x.prompt) t += '\n' + (i + 1) + '. ' + (x.title || '') + '\n' + x.prompt + '\n';
    });
    return t.trim();
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
function getSheetThreadsTextFromDom_(){
  var el = document.getElementById('sheet-threads-body');
  return el ? String(el.value || '').trim() : '';
}

function hasThreadsDraftText_(content, draftId){
  if(threadsContentReady_(content)) return true;
  if(state.selectedId === draftId && state.activeTab === 'threads' && getSheetThreadsTextFromDom_()) return true;
  return false;
}

function syncThreadsDraftFromDom_(content, draftId){
  if(!content || state.selectedId !== draftId || state.activeTab !== 'threads') return content;
  var domText = getSheetThreadsTextFromDom_();
  if(!domText) return content;
  if(!content.threads) content.threads = { text: '' };
  content.threads.text = domText;
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
    '인스타 앱에서 올리는 동안 백그라운드에서 생성합니다. 완료되면 이 글의 쓰레드 탭으로 바로 보여드려요.</div>';
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
  var text = String(raw.text != null ? raw.text : raw.body || raw.summary || '').trim();
  if(!text) return null;
  return { text: text };
}
function getThreadsSnsPlainText_(ths){
  return ths && ths.text ? String(ths.text).trim() : '';
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
async function generateThreadsFromInsta_(catId, insta, topic){
  var threadsGuide = getCatPrompt(catId, 'threads') || DEFAULT_THREADS_SNS_PROMPT;
  var baseInfo = getBasePrompt();
  var prompt = baseInfo + '\n\n' +
    '카테고리: ' + (CATEGORIES[catId] ? CATEGORIES[catId].name : '') + '\n' +
    '주제: "' + (topic || '') + '"\n\n' +
    '[쓰레드 변환 지침]\n' + threadsGuide + '\n\n' +
    '아래는 **확정·수정된 인스타 캡션**입니다. 인스타 형식(해시태그·불릿·번호)을 그대로 옮기지 말고, 위 규칙대로 **Threads 한 포스트**로만 변환하세요.\n\n' +
    'JSON만:\n{"threads":{"text":"쓰레드 본문 전체(줄바꿈 포함)"}}\n\n' +
    '[인스타 원문]\n' + buildInstaSourceText_(insta);

  var text = await callClaudePlanner_(prompt, { maxTokens: 2000, timeoutMs: THREADS_BG_TIMEOUT_MS });
  var raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
  var parsed = JSON.parse(raw);
  var block = parsed.threads || parsed;
  return normalizeThreadsSnsBlock_(block);
}
function enqueueThreadsFromInsta_(draftId, catId, topic, insta, opts){
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
  var instaSnapshot = JSON.parse(JSON.stringify(insta || {}));
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
      var threads = await generateThreadsFromInsta_(catId, instaSnapshot, topic);
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
          enqueueThreadsFromInsta_(draftId, catId, topic, instaSnapshot, { resume: true, retryCount: retryCount + 1 });
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
      if(!content || !content.threadsPending || hasThreadsDraftText_(content, d.id) || !content.insta || threadsBgByDraft[d.id]) return;
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
        insta: content.insta,
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
  enqueueThreadsFromInsta_(job.draftId, job.catId, job.topic, job.insta, { resume: true });
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

window.openNotebookLM = function(){
  const u = NOTEBOOKLM_URL;
  if(!isPhoneOrTablet()){
    window.open(u, '_blank', 'noopener,noreferrer');
    return;
  }
  if(isIOSLikeDevice()){
    window.location.href = 'googlechromes://notebooklm.google.com/';
    setTimeout(function(){
      if(document.hidden) return;
      window.location.href = u;
    }, 450);
    setTimeout(function(){
      if(document.hidden) return;
      window.open(u, '_blank', 'noopener,noreferrer');
    }, 1100);
    return;
  }
  window.location.href = 'intent://notebooklm.google.com/#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=' + encodeURIComponent(u) + ';end';
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
  return '<div class="cb"><div class="cb-label">' + escapeHtml(label) + '</div>' + help +
    '<textarea class="' + cls + '" id="' + id + '" rows="' + rows + '" oninput="autoGrowTextarea_(this)">' + escapeHtml(value || '') + '</textarea></div>';
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
  Object.assign(content.blog, edits);
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
  if(!bodyEl) return content;
  if(!content.threads) content.threads = { text: '' };
  content.threads.text = String(bodyEl.value || '').trim();
  return content;
}

function applySheetImageEdits_(content){
  if(!content || !content.images) return content;
  var nodes = document.querySelectorAll('[data-image-index]');
  if(!nodes.length) return content;
  var gpt = content.images.gptVisuals || [];
  nodes.forEach(function(el){
    var idx = parseInt(el.getAttribute('data-image-index'), 10);
    if(isNaN(idx) || !gpt[idx]) return;
    gpt[idx].prompt = String(el.value || '').trim();
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
  content.community.title = edits.title;
  content.community.problem = edits.problem;
  content.community.selfCare = edits.selfCare;
  content.community.explanation = edits.explanation;
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
  if(key === 'threads') return content.threads ? getThreadsSnsPlainText_(content.threads) : '';
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
  var instaGuide = getCatPrompt(catId, 'insta');
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
    '아래는 **확정·수정된 블로그 글**입니다. 블로그 전체를 옮기지 말고, **핵심과 후킹만** 짧은 인스타 한 포스트로 만드세요.\n' + expertScope + generalHint + expertHint + '\n' +
    '요구사항:\n' +
    '- hook: 블로그 제목·후킹에서 **기억에 남는 한 줄** (이모지 1개 전후, 25자 내외 권장)\n' +
    '- caption: 공감 한 줄 → 핵심 포인트 **2~3개만**(번호 또는 •) → 실천 팁 1개 → 짧은 CTA. hook 제외 **180~380자** 목표\n' +
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
      renderSheetContent(getDraftContent_(draftId) || content);
      renderTabs();
      renderMain();
      copyAndOpenNaverBlog_(buildBlogPasteTextForPublish_(content.blog, catId));
      afterTabPublishSaved_(saveResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('블로그 저장 · 복사 · 앱 이동\n돌아오면 이 글의 인스타 탭을 바로 보여드려요.', { duration: 5500, variant: 'ok' });
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
      var catIg = CATEGORIES[catId];
      var draftIg = catIg && catIg.drafts.find(function(d){ return d.id === draftId; });
      var savedContent = getDraftContent_(draftId);
      state.activeTab = 'threads';
      setOpenDetailHash_(draftId, catId, 'threads');
      if(savedContent && savedContent.insta){
        enqueueThreadsFromInsta_(draftId, catId, draftIg ? draftIg.topic : '', savedContent.insta);
      }
      renderSheetContent(getDraftContent_(draftId) || savedContent);
      renderTabs();
      renderMain();
      copyAndOpenInstagram_(savedContent && savedContent.insta ? getInstaFullPasteText_(savedContent.insta) : '');
      afterTabPublishSaved_(instaResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('인스타 저장 · 복사 · 앱 이동\n돌아오면 이 글의 쓰레드 탭을 바로 보여드려요.', { duration: 5500, variant: 'ok' });
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
      setAppToast('쓰레드 글을 만들고 있어요.\n인스타 앱에서 올린 뒤, 잠시 후 쓰레드 탭을 확인해 주세요.', { duration: 5000, variant: 'ok' });
      return;
    }
    if(!thContent || !getThreadsSnsPlainText_(thContent.threads)){
      setAppToast('쓰레드 글이 없어요.\n인스타 탭에서 발행완료를 먼저 눌러 주세요.', { duration: 4500, variant: 'err' });
      return;
    }
    applySheetThreadsEdits_(thContent);
    if(!getThreadsSnsPlainText_(thContent.threads)){
      setAppToast('쓰레드 본문을 입력해 주세요.', { duration: 4000, variant: 'err' });
      return;
    }
    if(pubBtn){ pubBtn.disabled = true; pubBtn.textContent = '저장 중…'; }
    try {
      var threadsResult = commitSheetTabPublish_(draftId, catId, 'threads');
      var savedTh = getDraftContent_(draftId);
      copyAndOpenThreads_(savedTh && savedTh.threads ? getThreadsSnsPlainText_(savedTh.threads) : '');
      closeSheet();
      renderTabs();
      renderMain();
      afterTabPublishSaved_(threadsResult, draftId).catch(function(e){ console.warn('[발행 후속]', e); });
      setAppToast('쓰레드 저장 · 복사 · 앱 이동\n글 입력란에 붙여넣기 하세요.', { duration: 5500, variant: 'ok' });
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
    if(t === 'notebooklm' || t === 'community' || t === 'thread') t = 'blog';
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
  var list = isHeiljagyaeCategory(catId)
    ? (im.gptVisuals || []).filter(function(x){ return x && x.prompt; })
    : trimBlogInstaImages_(im.gptVisuals || []);
  return list.map(function(x, i){
    return (i + 1) + '. ' + (x.title || '이미지') + '\n' + (x.prompt || '');
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

function getPublishFieldConfigs_(catId, content, activeTab){
  activeTab = activeTab != null ? activeTab : state.activeTab;
  var imageField = { key: 'image', label: '이미지 생성 프롬프트', help: 'ChatGPT 이미지 생성에 사용한 최종 프롬프트를 저장합니다.', placeholder: '이미지 생성에 사용한 프롬프트를 붙여넣기', small: true };

  if(activeTab === 'images'){
    return [imageField];
  }
  if(activeTab === 'blog' && isBlogInstaCategory(catId)){
    return [{ key: 'blog', label: '블로그 최종본', help: '네이버 블로그 등에 실제로 올린 글을 저장합니다.', placeholder: '블로그에 실제로 올린 글을 붙여넣기' }];
  }
  if(activeTab === 'insta' && isBlogInstaCategory(catId)){
    return [{ key: 'insta', label: '인스타 최종본', help: '인스타 캡션으로 실제로 올린 글을 저장합니다.', placeholder: '인스타에 실제로 올린 캡션을 붙여넣기' }];
  }
  if(activeTab === 'threads' && isBlogInstaCategory(catId)){
    return [{ key: 'threads', label: '쓰레드 최종본', help: 'Threads에 실제로 올린 글을 저장합니다.', placeholder: 'Threads에 실제로 올린 글을 붙여넣기' }];
  }
  if(activeTab === 'community' && isHeiljagyaeCategory(catId)){
    return [{ key: 'community', label: '게시판 최종본', help: '아파트너 게시판에 실제로 올린 글을 저장합니다.', placeholder: '실제로 올린 게시판 글을 붙여넣기' }];
  }
  if(activeTab === 'thread' && isDailyShareCategory(catId)){
    return [{ key: 'thread', label: '일상 공유 최종본', help: 'Threads·인스타 등에 실제로 올린 생활 나눔 글을 붙여 넣으세요.', placeholder: '실제로 올린 일상 공유 글을 붙여넣기' }];
  }

  if(isDailyShareCategory(catId)){
    return [{ key: 'thread', label: '일상 공유 최종본', help: 'Threads·인스타 등에 실제로 올린 생활 나눔 글을 붙여 넣으세요.', placeholder: '실제로 올린 일상 공유 글을 붙여넣기' }];
  }
  if(isHeiljagyaeCategory(catId)){
    return [
      { key: 'community', label: '게시판 최종본', help: '아파트너 게시판에 실제로 올린 글을 저장합니다.', placeholder: '실제로 올린 게시판 글을 붙여넣기' },
      imageField
    ];
  }
  return [
    { key: 'blog', label: '블로그 최종본', help: '네이버 블로그 등에 실제로 올린 글을 저장합니다.', placeholder: '블로그에 실제로 올린 글을 붙여넣기' },
    { key: 'insta', label: '인스타 최종본', help: '인스타 캡션으로 실제로 올린 글을 저장합니다.', placeholder: '인스타에 실제로 올린 캡션을 붙여넣기' },
    { key: 'threads', label: '쓰레드 최종본', help: 'Threads에 실제로 올린 글을 저장합니다.', placeholder: 'Threads에 실제로 올린 글을 붙여넣기' },
    imageField
  ];
}

function getLegacyPublishKey_(catId){
  if(isDailyShareCategory(catId)) return 'thread';
  if(isHeiljagyaeCategory(catId)) return 'community';
  return state.activeTab === 'insta' ? 'insta' : (state.activeTab === 'images' ? 'image' : 'blog');
}

function getSavedPublishFieldText_(pub, key, catId){
  if(!pub) return '';
  if(pub.finalTexts && pub.finalTexts[key]) return String(pub.finalTexts[key]);
  if(pub.promptData && pub.promptData[key] && pub.promptData[key].finalText) return String(pub.promptData[key].finalText);
  if(pub.finalText && key === getLegacyPublishKey_(catId)) return String(pub.finalText);
  return '';
}

function renderPublishFinalFields_(draftId, catId, content, isEdit){
  var pub = state.published[draftId] || {};
  var activeTab = state.publishModalActiveTab != null ? state.publishModalActiveTab : state.activeTab;
  var fields = getPublishFieldConfigs_(catId, content, activeTab);
  var html = fields.map(function(f){
    var value = isEdit ? getSavedPublishFieldText_(pub, f.key, catId) : '';
    if(!value && f.key === 'image' && content){
      value = getImagePromptTextForData_(content, catId);
    }
    return '<div class="publish-field-section">' +
      '<label class="form-label" for="publish-final-' + f.key + '">' + escapeHtml(f.label) + '</label>' +
      (f.help ? '<div class="publish-field-help">' + escapeHtml(f.help) + '</div>' : '') +
      '<textarea class="publish-final-textarea' + (f.small ? ' small' : '') + '" id="publish-final-' + f.key + '" data-publish-key="' + f.key + '" placeholder="' + escapeHtml(f.placeholder || '') + '">' + escapeHtml(value) + '</textarea>' +
    '</div>';
  }).join('');
  var wrap = document.getElementById('publish-fields-wrap');
  if(wrap) wrap.innerHTML = html;
}

function collectPublishFinalTexts_(){
  var out = {};
  var nodes = document.querySelectorAll('[data-publish-key]');
  nodes.forEach(function(el){
    var key = el.getAttribute('data-publish-key');
    var val = (el.value || '').trim();
    if(key && val) out[key] = val;
  });
  return out;
}

function buildCombinedFinalText_(finalTexts){
  var labels = { blog: '블로그', insta: '인스타', threads: '쓰레드', image: '이미지 생성 프롬프트', community: '게시판', thread: '일상 공유' };
  return Object.keys(finalTexts || {}).map(function(key){
    return '[' + (labels[key] || key) + ']\n' + finalTexts[key];
  }).join('\n\n---\n\n');
}

function countPublishedInCat_(catId){
  var cat = CATEGORIES[catId];
  if(!cat) return 0;
  return cat.drafts.filter(function(d){
    return d && d.id && state.published[d.id] && state.published[d.id].date;
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
'독자: ' + cat.audience + '\n' +
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

window.openPublishModal = function(){
  var draftId = state.selectedId;
  if(!draftId){
    setAppToast('먼저 초안 카드를 선택해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  var catId = state.selectedCatId != null ? state.selectedCatId : getCatIdFromDraftId_(draftId);
  var cat = CATEGORIES[catId];
  var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
  var content = state.published[draftId]?.content || state.generatedOnly[draftId];
  if(!content){
    setAppToast('초안이 없어요. 먼저 초안을 생성해 주세요.', { duration: 4000, variant: 'err' });
    return;
  }
  state.publishModalDraftId = draftId;
  state.publishModalCatId = catId;
  state.publishModalActiveTab = state.activeTab;
  var pub = state.published[draftId];
  var isEdit = !!(pub && pub.date);
  var fromImages = state.activeTab === 'images';
  document.getElementById('publish-modal-title').textContent = fromImages
    ? '이미지 생성 프롬프트'
    : (isEdit ? '발행본 수정' : '발행 완료 · 최종본 저장');
  document.getElementById('publish-modal-meta').innerHTML = fromImages
    ? ''
    : '<strong>' + escapeHtml(cat ? cat.name : '') + '</strong> · ' + escapeHtml(draft ? draft.topic : '') +
      '<br><span style="color:#9CA3AF;">현재 탭(' + escapeHtml(state.activeTab === 'blog' ? '블로그' : state.activeTab === 'insta' ? '인스타' : state.activeTab === 'threads' ? '쓰레드' : state.activeTab === 'community' ? '게시판' : state.activeTab === 'thread' ? '일상 공유' : '이미지') + ')에 맞는 최종본을 저장합니다.</span>';
  document.getElementById('publish-modal-meta').style.display = fromImages ? 'none' : '';
  renderPublishFinalFields_(draftId, catId, content, isEdit);
  document.getElementById('btn-publish-save').textContent = isEdit ? '저장' : '발행 저장';
  var refineNote = document.getElementById('publish-refine-note');
  refineNote.classList.remove('show');
  refineNote.textContent = '';
  var nextN = countPublishedInCat_(catId) + (isEdit ? 0 : 1);
  if(!isEdit && nextN % PROMPT_REFINE_EVERY_PUBLISH === 0){
    refineNote.textContent = '저장 후 「' + (cat ? cat.name : '') + '」 발행 ' + nextN + '건이 되면, 최근 발행본 ' + PROMPT_REFINE_SAMPLE_COUNT + '개를 분석해 프롬프트를 자동 개선합니다.';
    refineNote.classList.add('show');
  }
  document.getElementById('publish-modal-overlay').classList.add('open');
  lockBodyScroll_();
  setTimeout(function(){
    var pubEl = document.getElementById('publish-modal');
    pubEl.classList.add('open');
    settleBottomSheet_(pubEl);
    scheduleAppToastLift_();
    trapFocusIn_(pubEl);
  }, 10);
};

window.closePublishModal = function(e){
  if(e && e.target !== document.getElementById('publish-modal-overlay')) return;
  resetBottomSheet_(document.getElementById('publish-modal'));
  document.getElementById('publish-modal').classList.remove('open');
  releaseModalFocusTrap_();
  setTimeout(function(){
    document.getElementById('publish-modal-overlay').classList.remove('open');
    unlockBodyScroll_();
    scheduleAppToastLift_();
    restoreDetailFocusTrapIfOpen_();
  }, 280);
};

window.confirmPublishFinal = async function(){
  var draftId = state.publishModalDraftId;
  var catId = state.publishModalCatId;
  if(draftId == null || catId == null) return;
  var finalTexts = collectPublishFinalTexts_();
  var existingPub = state.published[draftId] || {};
  if(existingPub.finalTexts){
    finalTexts = Object.assign({}, existingPub.finalTexts, finalTexts);
  }
  var text = buildCombinedFinalText_(finalTexts);
  if(!text){
    setAppToast('최종본 글을 하나 이상 입력해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
  var btn = document.getElementById('btn-publish-save');
  if(btn){ btn.disabled = true; btn.textContent = '저장 중…'; }
  var today = new Date().toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
  var cat = CATEGORIES[catId];
  var draft = cat && cat.drafts.find(function(d){ return d.id === draftId; });
  if(!state.published[draftId]) state.published[draftId] = {};
  var wasPublished = !!state.published[draftId].date;
  state.published[draftId].date = today;
  state.published[draftId].savedAt = new Date().toISOString();
  state.published[draftId].finalText = text;
  state.published[draftId].finalTexts = finalTexts;
  state.published[draftId].catId = catId;
  state.published[draftId].topic = draft ? draft.topic : '';
  if(!state.published[draftId].content && state.generatedOnly[draftId]){
    state.published[draftId].content = state.generatedOnly[draftId];
  }
  state.published[draftId].promptData = buildPublishedPromptData_(draft, catId, state.published[draftId].content, finalTexts);
  delete state.generatedOnly[draftId];
  save({ driveImmediate: true, gasImmediate: true });
  closePublishModal();
  closeSheet();
  renderTabs();
  renderMain();
  if(btn){ btn.disabled = false; btn.textContent = '발행 저장'; }
  setAppToast('발행본이 저장됐어요.', { duration: 4200, variant: 'ok' });

  if(!wasPublished && isAutoTopicReplenishEnabled_()){
    await ensureMinimumPendingDraftsAfterPublish_(catId, draft, text);
  }

  if(!wasPublished && shouldRefinePromptsAfterPublish_(catId)){
    setAppToast('발행 ' + countPublishedInCat_(catId) + '건 · 프롬프트 분석 중…', { duration: 5000, variant: 'ok' });
    try {
      await refineCategoryPromptsFromPublished_(catId);
    } catch(err){
      console.warn('[프롬프트 개선]', err);
      setAppToast('프롬프트 자동 개선에 실패했어요.\n' + ((err && err.message) || String(err)), { duration: 8000, variant: 'err' });
    }
  }
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
  var curCommunity = getCatPrompt(catId, 'community');
  var curThread = getCatPrompt(catId, 'thread');
  var curImage = getCatPrompt(catId, 'image');

  var promptTypes = [];
  if(isDailyShareCategory(catId)) promptTypes.push('thread');
  else if(isHeiljagyaeCategory(catId)) { promptTypes.push('community'); promptTypes.push('image'); }
  else { promptTypes.push('blog'); promptTypes.push('insta'); promptTypes.push('image'); }

  var sampleBlock = formatPromptDataSamplesBlock_(samples, promptTypes);

  var prompt = '당신은 콘텐츠 전략가입니다.\n' +
    '카테고리: ' + cat.name + ' (' + (cat.sub || '') + ')\n' +
    '최근 실제 발행(게시) 데이터 ' + samples.length + '개를 분석해, 아래 **현재 작성 지침**을 개선하세요.\n' +
    '데이터는 블로그용·인스타용·이미지 생성용처럼 탭별로 분리되어 있습니다. 각 지침은 해당 탭 데이터만 우선 반영하세요.\n\n' +
    '[현재 지침]\n' +
    (promptTypes.indexOf('blog') >= 0 ? 'blog:\n' + curBlog + '\n\n' : '') +
    (promptTypes.indexOf('insta') >= 0 ? 'insta:\n' + curInsta + '\n\n' : '') +
    (promptTypes.indexOf('community') >= 0 ? 'community:\n' + curCommunity + '\n\n' : '') +
    (promptTypes.indexOf('thread') >= 0 ? 'thread:\n' + curThread + '\n\n' : '') +
    (promptTypes.indexOf('image') >= 0 ? 'image:\n' + curImage + '\n\n' : '') +
    '[탭별 발행 데이터]\n' + sampleBlock + '\n\n' +
    '[요청]\n' +
    '- 공통으로 드러난 **톤·문장 길이·구조·잘 된 표현·피할 패턴**을 반영\n' +
    '- blog는 블로그 데이터, insta는 인스타 데이터, image는 이미지 프롬프트 데이터 기준으로 각각 개선\n' +
    '- image는 구도·색감·인물·장소·금지 요소·2장 역할이 더 선명해지도록 개선\n' +
    '- 기존 지침을 통째로 갈아엎지 말고, 발행 데이터 스타일에 맞게 보강·구체화\n' +
    '- 변경이 거의 없으면 해당 키는 빈 문자열 ""\n\n' +
    'JSON만:\n{\n' +
    '"summary":"한국어 3~6문장. 무엇을 반영했는지",\n' +
    '"blog":"개선된 blog 지침 전문 또는 \"\"",\n' +
    '"insta":"개선된 insta 지침 전문 또는 \"\"",\n' +
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
  ['blog', 'insta', 'community', 'thread', 'image'].forEach(function(key){
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
  var keysLabel = { blog: '블로그', insta: '인스타', community: '아파트너', thread: '일상 공유', image: '이미지' };
  var changedKr = changed.map(function(k){ return keysLabel[k] || k; }).join(', ');
  setAppToast(
    '「' + cat.name + '」프롬프트 개선 완료\n' + summary + (changedKr ? '\n반영: ' + changedKr : '') + '\n\n프롬프트 메뉴에서 확인할 수 있어요.',
    { duration: 10000, variant: 'ok' }
  );
}

function markPub(){ onSheetPublishComplete(); }

function openPromptModal(catId) {
  state.editingCatId = catId !== undefined ? catId : state.currentCat;
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
  document.getElementById('prompt-modal-title').textContent = cat.name + ' 프롬프트';

  const catTabs = CATEGORIES.map((c,i)=>`
    <button class="cat-tab${state.editingCatId===i?' active':''}" onclick="switchPromptCat(${i})" style="color:${state.editingCatId===i?c.color:'#6B6B6B'};border-bottom-color:${state.editingCatId===i?c.color:'transparent'};font-size:11px;padding:8px 10px;">
      ${c.name}
    </button>`).join('');

  const blogVal = getCatPrompt(state.editingCatId, 'blog');
  const instaVal = getCatPrompt(state.editingCatId, 'insta');
  const communityVal = getCatPrompt(state.editingCatId, 'community');
  const threadVal = getCatPrompt(state.editingCatId, 'thread');
  const imageVal = getCatPrompt(state.editingCatId, 'image');
  const baseVal = getBasePrompt();
  const pt = state.promptTab;
  const threadCat = isThreadCategory(state.editingCatId);
  const heiljCat = isHeiljagyaeCategory(state.editingCatId);

  document.getElementById('prompt-modal-body').innerHTML = `
    <div class="prompt-modal-cat-scroll">
      <div class="cat-tabs-wrap" style="background:#F8F7F4;border-top:none;border-bottom:1px solid #E5E7EB;">
        <div class="cat-tabs" style="padding:0 8px;">${catTabs}</div>
      </div>
    </div>

    <div class="prompt-tabs-scroll">
      <div class="prompt-tabs">
        ${threadCat ? `
        <button class="prompt-tab${pt==='thread'?' active':''}" onclick="switchPromptTab('thread')">일상 공유</button>
        <button class="prompt-tab${pt==='base'?' active':''}" onclick="switchPromptTab('base')">공통 기본</button>
        ` : heiljCat ? `
        <button class="prompt-tab${pt==='community'?' active':''}" onclick="switchPromptTab('community')">아파트너 게시판</button>
        <button class="prompt-tab${pt==='image'?' active':''}" onclick="switchPromptTab('image')">이미지</button>
        <button class="prompt-tab${pt==='base'?' active':''}" onclick="switchPromptTab('base')">공통 기본</button>
        ` : `
        <button class="prompt-tab${pt==='blog'?' active':''}" onclick="switchPromptTab('blog')">블로그</button>
        <button class="prompt-tab${pt==='insta'?' active':''}" onclick="switchPromptTab('insta')">인스타</button>
        <button class="prompt-tab${pt==='image'?' active':''}" onclick="switchPromptTab('image')">이미지</button>
        <button class="prompt-tab${pt==='base'?' active':''}" onclick="switchPromptTab('base')">공통 기본</button>
        `}
      </div>
    </div>

    ${!threadCat && !heiljCat && pt==='blog' ? `
    <div class="prompt-section">
      <div class="prompt-section-label">
        블로그 작성 지침
        <button class="prompt-reset-btn" onclick="resetPrompt('blog')">기본값으로</button>
      </div>
      <textarea class="prompt-textarea" id="pt-blog" placeholder="블로그 글쓰기 스타일, 톤, 구조, 주의사항 등을 자유롭게 입력하세요...">${blogVal}</textarea>
      <div class="prompt-hint">${isGeneralAudienceCategory(state.editingCatId) ? '일반인 블로그: <strong>문제 제기 → 셀프 케어(👉) → 원리 설명</strong> 순. AI가 필드별로 나눠 작성하고, 발행 화면에서 각각 수정할 수 있어요.' : '예: "제목에 호기심을 자극하는 질문·숫자를 넣고, 네이버 SEO를 고려해…" — 이 지침이 Claude에게 전달돼 글쓰기 방향을 잡아요.'}</div>
    </div>` : ''}

${!threadCat && !heiljCat && pt==='insta' ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    인스타 작성 지침
    <button class="prompt-reset-btn" onclick="resetPrompt('insta')">기본값으로</button>
  </div>
  <textarea class="prompt-textarea" id="pt-insta" placeholder="한 포스트 캡션 톤, 줄바꿈·불릿 스타일, 해시태그 전략 등을 입력하세요. (캐러셀 다장 구성은 사용하지 않습니다.)">${instaVal}</textarea>
  <div class="prompt-hint">예: "첫 줄에서 멈추게 만드는 짧은 질문을 써주세요. 캐러셀은 문제→원인→해결 순으로..."</div>
</div>` : ''}

${pt==='thread' && threadCat ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    일상 공유 작성 지침
    <button class="prompt-reset-btn" onclick="resetPrompt('thread')">기본값으로</button>
  </div>
  <textarea class="prompt-textarea" id="pt-thread" style="min-height:200px;" placeholder="일기 톤, 계절·사진·교육장면은 생활 나눔으로, 금지 사항 등...">${escapeHtml(threadVal)}</textarea>
  <div class="prompt-hint">일기 톤 + 날씨·몸·감정에 가벼운 근골격계 시선(1~2문장). 전문 강의·임상 설명·독자 질문은 피하세요.</div>
</div>` : ''}

${pt==='community' && heiljCat ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    아파트너(힐자계) 게시판 지침
    <button class="prompt-reset-btn" onclick="resetPrompt('community')">기본값으로</button>
  </div>
  <textarea class="prompt-textarea" id="pt-community" style="min-height:200px;" placeholder="아파트 게시판 톤, 고정 형식, 금지 사항 등...">${escapeHtml(communityVal)}</textarea>
  <div class="prompt-hint">옆집 이웃 톤·문제 제기→👉 해결책(동작 앞쪽)→원리 설명. 불릿 없이 자연스러운 문장. 계절은 각도에 맞을 때만. 이미지 2장.</div>
</div>` : ''}

${pt==='image' && !threadCat ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    이미지 생성 지침
    <button class="prompt-reset-btn" onclick="resetPrompt('image')">기본값으로</button>
  </div>
  <textarea class="prompt-textarea" id="pt-image" style="min-height:200px;" placeholder="이미지 생성용 프롬프트 톤, 구도, 색감, 금지 요소, 2장 역할 등을 입력하세요...">${escapeHtml(imageVal)}</textarea>
  <div class="prompt-hint">이미지 탭의 ChatGPT 프롬프트 생성 규칙입니다. 발행 데이터의 이미지 프롬프트를 기준으로 ${PROMPT_REFINE_EVERY_PUBLISH}건마다 자동 개선됩니다.</div>
</div>` : ''}

${pt==='base' ? `
<div class="prompt-section">
  <div class="prompt-section-label">
    공통 기본 설정 (모든 카테고리에 적용)
    <button class="prompt-reset-btn" onclick="resetPrompt('base')">기본값으로</button>
  </div>
  <textarea class="prompt-textarea" id="pt-base" style="min-height:320px;" placeholder="미카닥 박준규 소개, PSP 임상 프로토콜, 채널 정보 등...">${baseVal}</textarea>
  <div class="prompt-hint">미카닥 박준규 프로필 PSP 건강 가이드·<a href="${PROFILE_BRAND_URL}" target="_blank" rel="noopener">drpark PSP</a>와 동기화된 임상 뼈대(PAR·Position 등)가 포함돼요. 「기본값으로」를 누르면 최신 요약이 다시 들어갑니다.</div>
</div>` : ''}
`;
  bindPromptTextareaAutosave_();
}

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
  ['pt-blog', 'pt-insta', 'pt-community', 'pt-thread', 'pt-image', 'pt-base'].forEach(function(id){
    var el = document.getElementById(id);
    if(!el || el.__htPromptAutosave) return;
    el.__htPromptAutosave = true;
    el.addEventListener('input', schedulePromptCloudSave_);
  });
}

window.switchPromptCat = function(i) {
flushPromptCloudSave_();
state.editingCatId = i;
if(isThreadCategory(i) && (state.promptTab === 'community' || state.promptTab === 'blog' || state.promptTab === 'insta' || state.promptTab === 'image' || state.promptTab === 'notebooklm')) state.promptTab = 'thread';
if(isHeiljagyaeCategory(i) && (state.promptTab === 'thread' || state.promptTab === 'blog' || state.promptTab === 'insta' || state.promptTab === 'notebooklm')) state.promptTab = 'community';
if(isBlogInstaCategory(i) && (state.promptTab === 'thread' || state.promptTab === 'community' || state.promptTab === 'notebooklm')) state.promptTab = 'blog';
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
const communityEl = document.getElementById('pt-community');
const notebookLMEl = document.getElementById('pt-notebooklm');
const threadEl = document.getElementById('pt-thread');
const imageEl = document.getElementById('pt-image');
const baseEl = document.getElementById('pt-base');
if(blogEl) state.prompts.categories[state.editingCatId].blog = blogEl.value;
if(instaEl) state.prompts.categories[state.editingCatId].insta = instaEl.value;
if(communityEl) state.prompts.categories[state.editingCatId].community = communityEl.value;
if(notebookLMEl) state.prompts.categories[state.editingCatId].notebookLM = notebookLMEl.value;
if(threadEl) state.prompts.categories[state.editingCatId].thread = threadEl.value;
if(imageEl) state.prompts.categories[state.editingCatId].image = imageEl.value;
if(baseEl) state.prompts.base = baseEl.value;
}

window.resetPrompt = function(type) {
if(!confirm('이 항목을 기본값으로 되돌릴까요?')) return;
if(!state.prompts) state.prompts = JSON.parse(JSON.stringify(DEFAULT_PROMPTS));
if(type==='base') { state.prompts.base = DEFAULT_PROMPTS.base; }
else {
if(!state.prompts.categories[state.editingCatId]) state.prompts.categories[state.editingCatId]={};
state.prompts.categories[state.editingCatId][type] = DEFAULT_PROMPTS.categories[state.editingCatId][type];
}
renderPromptModal();
flushPromptCloudSave_();
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
      regenBtn.textContent = formatCountdownShort_(leftR);
    } else if(genPendingCount > 0 && !genBatchRunning){
      regenBtn.disabled = true;
      if(genActiveJob && genActiveJob.draftId !== selId){
        var qAhead = Math.max(0, genPendingCount - 1);
        if(qAhead > 0){
          var qCat = state.selectedCatId != null ? state.selectedCatId : state.currentCat;
          regenBtn.textContent = '대기 ' + formatRoughCountdown(Math.ceil(qAhead * estimateDraftMs(qCat) / 1000));
        } else {
          regenBtn.textContent = '대기 중';
        }
      } else {
        regenBtn.textContent = '대기 중';
      }
    } else {
      regenBtn.disabled = false;
      regenBtn.textContent = '재생성';
    }
  }
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

const blogGuide = getCatPrompt(catId, 'blog');
const communityGuide = getCatPrompt(catId, 'community');
const threadGuide = getCatPrompt(catId, 'thread');
const imageGuide = getCatPrompt(catId, 'image');
const baseInfo = getBasePrompt();
const brandBlock = buildBrandContextForPrompt_(catId, draft);
const briefPromptLines = buildDraftBriefPromptLines_(draft, catId);
const imagePromptGuide = buildImagePromptGuide(draft.topic, draft.angle, imageGuide);

const imgJsonTail = `
"images": {
"gptVisuals": [
{"title":"① 전문 설명 보조","prompt":"영문 단일 문자열. 위 [이미지 2장] 규칙·① 역할. Minimal clean infographic or soft medical illustration matching topic; sage and cream palette; no readable text labels."},
{"title":"② 셀프케어 동작","prompt":"영문 단일 문자열. Same self-care stretch or exercise as in blog 본문. Korean home floor or studio mat, East Asian adult, modest clothing, top or side view, soft natural light — spell out exact pose."}
]
}
}`;

let prompt;
if(isDailyShareCategory(catId)){
  var dailyCtxBlock = buildDailyShareContextBlock_();
  prompt = `${baseInfo}

${brandBlock}
${dailyCtxBlock ? '\n\n' + dailyCtxBlock : ''}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}
주제: "${draft.topic}"
${briefPromptLines}

[일상 공유 작성 지침]
${threadGuide}

이 카테고리는 **일상 일기·생활 나눔 한 덩어리**만 만듭니다. 감정·철학·날씨·몸 이야기에는 **근골격계 전문가 시선을 1~2문장** 은은하게. 강의·임상·홍보 톤 금지. 응답 JSON에는 **thread 키 하나만** 넣으세요.

2026년 5~6월 — 주제·각도·사진에 맞을 때만 계절·날씨를 자연스럽게. JSON만 출력:
{
  "thread": {
    "topicTitle": "오늘의 한 줄 (평서·감탄·장면 — 질문형·독자에게 묻는 말 금지)",
    "summary": "topicTitle에 이어지는 연속 본문. 3~7문장. 관찰·느낌·일기 톤. 주제에 맞을 때만 습도·피로·가벼운 움직임·몸 감각을 한두 문장 가볍게 연결(전문 강의 톤 금지). 억지 공감·질문 없음. 구어체. 번호·불릿 금지."
  }
}

thread.summary는 **하나의 문자열**만.`;
} else if(isHeiljagyaeCategory(catId)){
  const hjImgGuide = buildHeiljagyaeImagePromptGuide(draft.topic, draft.angle, imageGuide);
  const heiljagyaeImgJsonTail = `
"images": {
"gptVisuals": [
{"title":"① 동네·단지 공감 일상 컷","prompt":"영문 단일 문자열. 위 [이미지 2장] 규칙·① 역할. Korean apartment hallway or elevator lobby slice-of-life, soft daylight, warm beige sage tones, relatable fatigue or gentle stretch mood, photorealistic editorial, no text, no logos — 주제에 맞게 새로 작성."},
{"title":"② 게시글 selfCare와 같은 셀프 동작","prompt":"영문 단일 문자열. 아래 community.selfCare에 적힌 동작·자세·초·회·분과 정확히 일치. Korean home wood floor or yoga mat, top or side view, soft natural light, East Asian adult modest clothing, relaxing pose — 구체적으로 서술."}
]
}
}`;
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}
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
"problem": "문제 제기 2~4문장. 불릿·번호 없이 자연스럽게. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스",
"selfCare": "👉 로 시작. 동작·자세·초·회·분을 앞쪽에. '시원한 지점에서 멈추기' 뉘앙스",
"explanation": "원리 설명 2~5문장. 왜 도움이 되는지+비유+복잡하지 않다는 마무리. 옆집 이웃 톤"
},
${heiljagyaeImgJsonTail}
}

community에는 인사말·고정 마무리 넣지 말 것. 글 흐름은 **문제 제기 → selfCare(해결책) → explanation(원리)** 순. selfCare는 👉로 시작.

반드시 images.gptVisuals는 **정확히 2개**. 각 prompt는 완성된 영문 한 덩어리. 예시 영문은 그대로 복사하지 말고 주제·각도·selfCare에 맞게 새로 쓸 것.`;
} else if(isGeneralAudienceCategory(catId)){
  const hubCtaHint = getSymptomHubCtaHintForTopic_(draft.topic);
  const generalImgJsonTail = `
"images": {
"gptVisuals": [
{"title":"① 전문 설명 보조","prompt":"영문 단일 문자열. 위 [이미지 2장] 규칙·① 역할. Minimal clean infographic or soft medical illustration matching topic; sage and cream palette; no readable text labels."},
{"title":"② 셀프케어 동작","prompt":"영문 단일 문자열. 아래 blog.selfCare에 적힌 동작·자세·초·회·분과 정확히 일치. Korean home floor or studio mat, top or side view, soft natural light, East Asian adult modest clothing — 구체적으로 서술."}
]
}
}`;
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}
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
"problem": "문제 제기 2~4문장. 불릿·번호 없이. 마지막에 짧은 시간·일상 공간으로 해결 가능하다는 뉘앙스",
"selfCare": "👉 로 시작. 동작·자세·초·회·분을 앞쪽에. '시원한 지점에서 멈추기' 뉘앙스",
"explanation": "맨 앞 2~3문장 TL;DR(핵심 결론) → 원리 설명+GEO 구조. 왜 도움이 되는지+비유+복잡하지 않다는 마무리",
"cta": "마무리 행동 유도 (미카닥 박준규·블로그/상담·증상 허브 URL 자연스럽게 언급)",
"hashtags": ["태그1","태그2","태그3","태그4","태그5","태그6"]
},
${generalImgJsonTail}
}

글 흐름은 **문제 제기 → selfCare → explanation** 순. selfCare는 👉로 시작. "N단계 —" 표기 금지.

[증상 허브 CTA 참고] ${hubCtaHint}

반드시 images.gptVisuals는 **정확히 2개**. ②번 동작은 blog.selfCare와 일치.`;
} else if(isExpertCourseCategory(catId)){
  const expertImgJsonTail = `
"images": {
"gptVisuals": [
{"title":"① 전문 설명 보조","prompt":"영문 단일 문자열. 위 [이미지 2장] 규칙·① 역할. Minimal clean infographic or soft medical illustration matching topic; sage and cream palette; no readable text labels."},
{"title":"② 교육·시연 동작","prompt":"영문 단일 문자열. 아래 blog.outline·draft·참고 메모의 시연·테크닉과 정확히 일치. Clinical or studio setting, hands-on demonstration pose, East Asian practitioner modest attire, soft natural light — 구체적으로 서술."}
]
}
}`;
  const refHint = getDraftReferenceText_(draft)
    ? '**[작성자 참고]의 영상 분석·사진 메모가 글의 유일한 근거**입니다. 그 범위 안에서만 작성하세요.'
    : '참고 메모·영상 분석이 없습니다. 주제·각도 범위 안에서만 **짧게** 쓰고, 억지로 채우지 마세요.';
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}
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
"draft": "원리 설명 중심 350~500자. 왜 이렇게 하는지·짧은 메커니즘·현장 적용. 참고·영상·사진 범위 안만",
"cta": "수강·등록 유도 금지. 가벼운 마무리",
"hashtags": ["태그1","태그2","태그3"]
},
${expertImgJsonTail}
}

반드시 images.gptVisuals는 **정확히 2개**. ②번은 blog.outline·draft의 시연·테크닉과 일치.`;
} else {
  const hubCtaHintLegacy = getSymptomHubCtaHintForTopic_(draft.topic);
  prompt = `${baseInfo}

${brandBlock}

카테고리: ${cat.name} (${cat.sub})
독자: ${cat.audience}
주제: "${draft.topic}"
${briefPromptLines}

[블로그 작성 지침]
${blogGuide}

${imagePromptGuide}

이 카테고리는 **blog**와 **images(2장)** 만 만듭니다. insta, notebookLM, community, thread 키는 JSON에 넣지 마세요. 인스타는 사용자가 블로그 확정 후 별도로 만듭니다.

2026년 봄/초여름 트렌드 반영. JSON만 응답 (다른 텍스트 없이):
{
"blog": {
"title": "호기심·궁금증을 자극하는 후킹 제목 (35자 이내, 질문·숫자·흔한 오해·반전 활용, 과장 금지)",
"hook": "공감→문제제기→해결암시 흐름의 오프닝 2~3문장",
"outline": ["소제목1","소제목2","소제목3","소제목4"],
"draft": "본문 초안 700~900자. 따뜻하고 전문적인 미카닥 박준규 톤(설명하는 전문가). 실제 임상 경험 느낌. Doctor·닥터·원장님 호칭 금지. 단락 구분 포함.",
"cta": "마무리 행동 유도 (미카닥 박준규·블로그/상담·증상 허브 URL 자연스럽게 언급)",
"hashtags": ["태그1","태그2","태그3","태그4","태그5","태그6"]
},
${imgJsonTail}
}

[증상 허브 CTA 참고] ${hubCtaHintLegacy}

반드시 images.gptVisuals는 **정확히 2개**(① 전문 설명 보조, ② 셀프케어 동작). ②번 동작은 blog 본문의 셀프 팁과 일치. 각 prompt는 완성된 영문 한 덩어리.`;
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

const res = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'x-api-key': state.apiKey,
  'anthropic-version': '2023-06-01',
  'anthropic-dangerous-direct-browser-access': 'true'
},
body: JSON.stringify({
  model: CLAUDE_PLANNER_MODEL,
  max_tokens: isThreadCategory(catId) ? 2048 : (isHeiljagyaeCategory(catId) ? 4096 : 4800),
  messages: [{ role: 'user', content: buildClaudeMessageContent_(prompt, draftRefImages.length ? draftRefImages : null) }]
})
});
const data = await res.json();
if(!res.ok) throw new Error((data.error && data.error.message) ? data.error.message : ('HTTP ' + res.status));
if(data.error) throw new Error(data.error.message);
const text = (data.content || []).filter(b=>b.type==='text').map(b=>b.text).join('');
let raw = text.replace(/^```json\s*/i, '').replace(/```\s*$/g, '').trim();
const content = JSON.parse(raw);
content.thread = normalizeThreadBlock(content.thread);
if(isThreadCategory(catId)){
  content.community = null;
  delete content.blog;
  delete content.insta;
  delete content.images;
} else if(isHeiljagyaeCategory(catId)){
  content.community = normalizeCommunityBlock(content.community);
  const im = normalizeImagesBlock(content.images);
  if(im && im.gptVisuals && im.gptVisuals.length > 2){
    im.gptVisuals = im.gptVisuals.slice(0, 2);
  }
  content.images = im;
  delete content.blog;
  delete content.insta;
  delete content.thread;
} else {
  content.images = normalizeImagesBlock(content.images);
  delete content.notebookLM;
  delete content.community;
  delete content.thread;
  if(content.blog) content.blog = normalizeBlogBlock(content.blog, catId);
  if(content.images && content.images.gptVisuals){
    content.images.gptVisuals = trimBlogInstaImages_(content.images.gptVisuals);
  }
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

window.genContent = async function(){
  if(!state.selectedId){
    if(typeof setAppToast === 'function') setAppToast('먼저 초안 카드를 선택해 주세요.', { duration: 3500, variant: 'err' });
    return;
  }
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
    var thIgContent = getDraftContent_(draftId);
    if(!thIgContent || !thIgContent.insta){
      setAppToast('인스타 캡션이 없어요.\n인스타 탭에서 발행완료를 먼저 누르거나 인스타를 만들어 주세요.', { duration: 5000, variant: 'err' });
      return;
    }
    var catTh = CATEGORIES[catId];
    var draftTh = catTh && catTh.drafts.find(function(d){ return d.id === draftId; });
    enqueueThreadsFromInsta_(draftId, catId, draftTh ? draftTh.topic : '', thIgContent.insta);
    setAppToast('인스타 캡션 기준으로 쓰레드 글을 다시 만들고 있어요…', { duration: 5000, variant: 'ok' });
    return;
  }

  await window.enqueueDraftGeneration(catId, draftId, { userInitiated: true });
};
