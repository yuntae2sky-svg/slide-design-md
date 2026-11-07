# ZHRAS 로고 — 고해상 PNG

로고(가로형·세로형)와 엠블럼을 각각 따로 쓸 수 있는 고해상도 PNG. `svg/`에는 같은 로고의 벡터 원본(어떤 크기로도 다시 뽑을 수 있음).

## 파일 (`png/`)

| | 해상도 (px) | 투명 배경 | 용도 |
|---|---|---|---|
| `zhras-emblem-color.png` | 4096 × 4096 | ✅ | 엠블럼 — 밝은/흰 배경용 (투톤) |
| `zhras-emblem-white.png` | 4096 × 4096 | ✅ | 엠블럼 — 어두운 배경·Aqua 배경용 (흰색) |
| `zhras-emblem-aqua.png` | 4096 × 4096 | ❌ Aqua 배경 포함 | 엠블럼 — 배경이 있는 패널형 |
| `zhras-logo-horizontal-color.png` | 6000 × 1576 | ✅ | 가로형 — 밝은 배경용 |
| `zhras-logo-horizontal-white.png` | 6000 × 1576 | ✅ | 가로형 — 어두운/Aqua 배경용 |
| `zhras-logo-horizontal-aqua.png` | 6000 × 2061 | ❌ Aqua 배경 포함 | 가로형 — 패널형 |
| `zhras-logo-vertical-color.png` | 4500 × 3147 | ✅ | 세로형(슬로건 포함) — 밝은 배경용 |
| `zhras-logo-vertical-white.png` | 4500 × 3147 | ✅ | 세로형 — 어두운/Aqua 배경용 |
| `zhras-logo-vertical-aqua.png` | 4500 × 3338 | ❌ Aqua 배경 포함 | 세로형 — 패널형 |

- **color**: 글자 Deep Ocean `#0B3F57`, 태그라인 `#136F8A`, 엠블럼은 시안→Aqua Deep 그라데이션. **밝은 배경 전용.**
- **white**: 흰색 글자·엠블럼. **밝은 배경 위에서는 거의 보이지 않으므로** Aqua `#2A93AE`, Deep Ocean `#0B3F57` 같은 어두운 배경 위에서만 쓴다.
- **aqua**: Aqua `#2A93AE` 배경이 이미지에 포함된 버전. 다른 배경 위에 올리지 않는다.
- 가로형은 엠블럼이 엠블럼 높이의 7.5% 위로, 3% 오른쪽(글자쪽)으로 옮겨진 확정 위치.
- 세로형에만 슬로건(Sustainable Aquaculture Solution)이 들어 있다. 중문 버전은 보류 상태라 없다.

## 사용 주의

- 최소 크기: 슬라이드/인쇄에서 가로형 ≥ 4.0in(100 mm), 세로형 ≥ 3.5in(70 mm). 그보다 작게 쓸 때는 로고를 줄이지 말고 **엠블럼 단독**을 쓴다(엠블럼은 24 px / 8 mm 이상).
- 흰 글자 대비: Aqua 배경의 흰색 글자는 3.57:1이라 큰 워드마크는 충분하지만 **작은 태그라인은 접근성 기준(4.5:1)에 못 미친다.** 작게 쓸 곳은 배경을 `#1B7F9B`(4.61:1)로.
- 로고를 늘리거나 색을 바꾸거나 효과(그림자 등)를 넣지 않는다.
- 영상에서 복원한 로고로 공식 원본 파일이 아니다. `ZHRAS` 상표 중복 여부는 확인하지 못했다(KIPRIS 등에서 확인).
- 서체(Michroma, Share Tech Mono, Inter)는 SIL OFL이며 글자는 윤곽선으로 변환되어 있다.

## 이력

이 폴더는 이전 로고 폴더(`assets/zhras-logo/`, `assets/zhras-brand/`: 시안, 변형, 탐색 기록, 브랜드 가이드, SNS 프로필, 중문 시안 등)를 모두 삭제하고 새로 만든 것이다. 이전 파일은 git 기록(커밋 `d656b55` 시점의 `main`)에서 복구할 수 있다.
