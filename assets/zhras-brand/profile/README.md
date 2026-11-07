# ZHRAS SNS 프로필 사진 (PNG, 1080 x 1080)

확정 로고를 **정사각형 1080px PNG**로 만든 프로필용 이미지. 대부분의 SNS는 정사각형 이미지를 올리면 원형으로 잘라 표시하므로, 로고는 원 안쪽(중심에서 반지름 500px 이내, 실제 최대 456px)에 들어오도록 크기·여백을 맞췄다.

| 로고 | Aqua 배경 `#2A93AE` | Deep Ocean 배경 `#0B3F57` | 흰 배경 |
|------|----------------------|----------------------------|---------|
| **엠블럼** (권장) | `zhras-profile-emblem-aqua.png` | `zhras-profile-emblem-deep.png` | `zhras-profile-emblem-white.png` |
| 세로형 | `zhras-profile-vertical-aqua.png` | `…-vertical-deep.png` | `…-vertical-white.png` |
| 가로형 | `zhras-profile-horizontal-aqua.png` | `…-horizontal-deep.png` | `…-horizontal-white.png` |

`preview-circle-crop.png` — 원형으로 잘렸을 때 240 / 110 / 48px 표시 모습.

## 사용 안내

- **프로필 사진에는 엠블럼을 권장한다.** 48px까지 줄어도 형태가 선명하다.
- 세로형·가로형은 `ZHRAS`는 110px에서도 읽히지만, **`SMART RAS EQUIPMENT EXPERT` 태그라인과 슬로건은 작은 표시 크기(약 200px 이하)에서 읽히지 않는다.** 이 두 형태는 큰 프로필 화면이나 커버/배너 대용으로 적합하다.
- 흰 배경판은 흰색 페이지에서 원 테두리가 사라져 보일 수 있다. 밝은 화면에는 흰 배경, 어두운 화면/브랜드 통일감에는 Aqua 또는 Deep Ocean을 권장.
- 배경이 이미지에 포함된 불투명 PNG라 투명 배경이 아니다(프로필은 투명을 지원하지 않는 곳이 많음). 투명 로고는 `../final/`.
- 플랫폼별 정확한 권장 해상도는 바뀔 수 있어 이 작업에서 확인하지 않았다. 1080px 정사각형이면 보통 자동 축소되지만, 올리기 전에 해당 SNS의 현재 안내를 확인할 것.
- 중문 버전은 보류 상태라 포함하지 않았다.
