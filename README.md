# 호서 LMS 체크 (아이폰 Safari)

호서대 LMS(learn.hoseo.ac.kr) 화면 오른쪽 아래에 파란 버튼을 띄우고, 누르면 **이번 주 할 일 · 과목 · 동영상 출석 · 공지**를 한 화면에 보여 주는 스크립트입니다.
학교에서 만든 것이 아닌 개인용 비공식 도구입니다.

- 이미 로그인한 LMS 화면 안에서 LMS 페이지를 읽기만 합니다. 비밀번호를 다루지 않습니다.
- 읽은 정보는 내 아이폰 Safari에만 저장되고 다른 곳으로 보내지 않습니다.
- 학교 서버 부담을 줄이려고 처음 열 때와 새로고침 버튼을 누를 때만 LMS를 읽습니다.

## 설치

1. App Store에서 **Userscripts**(무료, 개발자 Justin Wasack)를 설치합니다.
2. **파일** 앱에서 `Userscripts` 폴더를 만들고, Userscripts 앱 → **Set Userscripts Directory**로 그 폴더를 고릅니다.
3. **설정 → 앱 → Safari → 확장 프로그램 → Userscripts**를 켜고, learn.hoseo.ac.kr을 **허용**합니다.
4. 아이폰 **Safari**로 아래 주소를 엽니다.
   ```
   https://raw.githubusercontent.com/selfhiam/Iphone_hoseo_LMS_checker/main/hoseo-lms-check.user.js
   ```
   주소창 왼쪽 **가가**(또는 퍼즐 모양) → **Userscripts** → **Tap to install** → **Install**
   (파일로 받았다면 `hoseo-lms-check.user.js`를 `Userscripts` 폴더에 넣어도 됩니다)
5. Safari로 learn.hoseo.ac.kr에 로그인하면 오른쪽 아래에 파란 버튼이 생깁니다. 안 보이면 가가 → Userscripts → **허용** 후 새로고침합니다.

### 홈 화면 아이콘 (선택)

Safari의 '홈 화면에 추가'로 만든 아이콘에서는 확장이 동작하지 않습니다. **단축어** 앱으로 만듭니다.

1. 단축어 앱 → **+** → **URL 열기** ('웹 페이지 보기'는 안 됩니다)
2. URL에 `x-safari-https://learn.hoseo.ac.kr/my/?lmscheck` 입력
3. 이름을 정하고 공유 버튼 → **홈 화면에 추가**

이 아이콘으로 열면 오른쪽 위 ✕를 눌렀을 때 Safari 탭이 닫힙니다.

## 업데이트

할 일 화면의 **설정 → 업데이트 → 업데이트 확인**을 누르면 새 버전이 있는지 알려 줍니다. (하루에 한 번은 저절로 확인합니다)

새 버전이 있으면 LMS 화면에서:

1. 가가(또는 퍼즐 모양) → **Userscripts**
2. 위쪽 **구름 모양 버튼** → **Check Updates** → hoseo-lms-check 옆 **Update**
3. LMS 화면 새로고침

## 파일

| 파일 | 설명 |
|---|---|
| `hoseo-lms-check.user.js` | 스크립트 본체 (설치하는 파일) |
| `hoseo-lms-check.meta.js` | 새 버전 번호만 들어 있는 파일 (업데이트 확인용) |
