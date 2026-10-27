# 브랜딩 플래너

## 원고 가져오기

로그인한 뒤 **원고 가져오기**에서 JSON을 붙여 넣거나 `.json` / `.md` 파일을 고릅니다. `.md` 파일은 같은 JSON 배열을 `` ```json `` 코드 블록으로 감싸도 됩니다. 미리보기에서 체크한 글만 저장합니다.

저장은 평소 초안과 같은 경로(`draft:` · `generated:` · `published:` → Supabase `planner_entities`)를 탑니다. 가져온 글은 초안입니다. `scheduledDate`가 있어도 예약하거나 발행하지 않고, 목록에 보일 날짜로만 씁니다. 같은 프로그램의 같은 주제는 한 카드에 채널별로 모입니다. 주제·채널·제목이 같은 글, 그 칸에 이미 다른 글이 있는 경우는 건너뛰고 이유를 보여 줍니다.

`program`은 `도수치료`, `리얼 무브먼트`, `리얼 페이스`, `CMT`, `IFC`, `Re:Al`, `기타` 중 하나입니다. `channel`은 `blog`, `instagram`, `threads`, `sonsik` 중 하나입니다. 소식의 `account`가 네이버·카카오·당근이면 그 칸에 들어갑니다. `collab`는 선택입니다. 인스타 계정 배열이며 `@`는 없어도 됩니다. 가져온 초안의 메모와 목록 카드에 `초대 @계정`으로 보여서, 발행하지 않은 채로 누구를 초대할지 알 수 있습니다. `hookType`과 `sourceLinks`도 그대로 받습니다.

본문·제목·주제에 `교정`, `한 번에`, `끝내기`, `페이스리프트`, `펴는`, `완치`가 있으면 경고만 표시하고, 체크하면 가져올 수 있습니다. 주제·프로그램·채널·제목·본문이 없거나 값이 잘못되면 가져오지 않습니다. `collab`가 배열이나 계정 문자열이 아니면 그 글은 건너뜁니다. 형식이 아닌 계정만 빼고 나머지는 가져옵니다.

예시 파일은 `samples/draft-import.sample.json` 입니다.

```json
[
  {
    "topic": "목이 뻐근할 때 먼저 볼 것",
    "program": "도수치료",
    "channel": "blog",
    "account": "dr.park_dc.pt",
    "title": "같은 의자인데 목이 편한 앉기",
    "body": "살만 느껴지면 좌골이 앞으로 빠진 상태예요.",
    "hookType": "공감 질문",
    "sourceLinks": ["https://example.com/neck"],
    "collab": ["dr.face_ifc", "@re.al_movement_official"],
    "scheduledDate": "2026-11-03"
  }
]
```
