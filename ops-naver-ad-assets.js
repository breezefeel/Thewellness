/**
 * 네이버 파워링크 반응형 소재용 애셋 정리본.
 * - 제목: 최대 15자 · 설명: 20~45자 (플래너/네이버 권장)
 * - 치료·완치·한번에해결·과장 문구는 제외·완화
 */
var OPS_NAVER_AD_ASSET_SEED = {
  version: 'assets-2026-09-09',
  titleMax: 15,
  descMin: 20,
  descMax: 45,
  /** 원본에서 정리·중복제거·한도 맞춤한 목록 */
  inventory: [
    { type: 'title', text: '1:1 리:얼 움직임', note: '브랜드' },
    { type: 'title', text: '패시브 스트레칭', note: '프로그램' },
    { type: 'title', text: '자세교정 맞춤운동', note: '프로그램' },
    { type: 'title', text: '기능운동 1:1 맞춤', note: '프로그램' },
    { type: 'title', text: '사무직 스트레칭', note: '타깃' },
    { type: 'title', text: '바른 자세 교정', note: '증상' },
    { type: 'title', text: '거북목 움직임관리', note: '증상' },
    { type: 'title', text: '허리통증 맞춤운동', note: '증상' },
    { type: 'title', text: '약해진 허리 강화', note: '증상' },
    { type: 'title', text: '코어 근육 강화', note: '증상' },
    { type: 'title', text: '중년 재활 운동', note: '타깃' },
    { type: 'title', text: '1:1 맞춤 운동', note: '전환' },
    { type: 'title', text: '예약제 1:1 프로그램', note: '전환' },
    { type: 'title', text: '진짜 움직임을 찾다', note: '브랜드' },
    { type: 'title', text: '리얼무브먼트', note: '브랜드' },
    { type: 'title', text: '말린 어깨 펴기', note: '증상' },
    { type: 'title', text: 'O다리 X다리 교정', note: '증상' },
    { type: 'title', text: '스마트한 몸 관리', note: '브랜드' },
    { type: 'title', text: '잘못된 습관 교정', note: '습관' },
    { type: 'title', text: '평일 저녁 가능', note: '운영' },
    { type: 'desc', text: '근골격 움직임 전문가와 1:1 리:얼 프로그램. 예약 후 방문하세요.', note: '공통' },
    { type: 'desc', text: '의료행위가 아닌 운동 웰니스입니다. 상담으로 시작하세요.', note: '면책' },
    { type: 'desc', text: '리:얼은 편해지는 움직임, Re Alignment는 몸의 정렬입니다.', note: '브랜드' },
    { type: 'desc', text: '체형·자세·기능운동을 1:1로 안내합니다. 사전 예약제입니다.', note: '공통' },
    { type: 'desc', text: '패시브 스트레칭과 기능운동으로 움직임부터 다시 맞춰 드립니다.', note: '프로그램' },
    { type: 'desc', text: '운동이 처음인 중년분도 부담 없이 맞춰 도와드립니다.', note: '타깃' },
    { type: 'desc', text: '사무직 뻐근함·거북목·라운드숄더 움직임 관리를 상담하세요.', note: '증상' },
    { type: 'desc', text: '개인 1:1 맞춤 자세·체형 근육 강화 프로그램을 운영합니다.', note: '전환' },
    { type: 'desc', text: '물리치료·카이로 배경의 원장이 안전한 운동을 도와드립니다.', note: '전문성' },
    { type: 'desc', text: '일상 속 불편함, 리얼무브먼트에서 움직임으로 풀어 보세요.', note: '전환' }
  ],
  /** 검수·톤 리스크로 제외한 원문(참고) */
  excluded: [
    { text: '라운드 숄더, 거북목, 척추측만증 자세 교정까지 한번에 해결하세요', reason: '한번에 해결 과장' },
    { text: '라운드숄더/거북목/척추측만증/자세 교정까지 한번에 해결하세요', reason: '한번에 해결 과장' },
    { text: '전문가의 분석 + 체계적인 관리 = 드라마틱한 변화', reason: '드라마틱 과장' },
    { text: '더 이상 고통받지 마세요', reason: '과장·공포 톤' },
    { text: '원인부터 확실하게 잡습니다', reason: '단정·치료 암시' },
    { text: '무료 상담 서비스 진행 중', reason: '실제 운영과 불일치 가능' },
    { text: '뭉친 근육 싹 풀어준다!', reason: '치료·보장 톤' },
    { text: '차원이 다른 시원함', reason: '과장' },
    { text: '차원이 다른 자세교정', reason: '과장' },
    { text: '날개달린 듯 가벼워진 어깨', reason: '과장' },
    { text: '곧고 바른 다리 만들기, 꿈이 아닙니다. 현실입니다.', reason: '과장·보장' }
  ]
};
