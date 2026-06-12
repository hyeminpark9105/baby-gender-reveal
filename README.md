# 🎀💙 젠더리빌 웹카드

아기의 성별을 귀엽게 공개할 수 있는 무료 웹카드입니다.

GitHub 계정이 있으면 이 저장소를 **Fork**해서 사용할 수 있고,
`js/config.js` 파일에서 **태명과 성별만 바꾸면** 사용할 수 있습니다.

---

## 어떤 화면이 있나요?

이 웹카드는 3가지 화면을 지원합니다.

| 설정값      | 의미         |
| -------- | ---------- |
| `secret` | 성별 공개 전 화면 |
| `girl`   | 여자아이 공개 화면 |
| `boy`    | 남자아이 공개 화면 |

<table>
  <tr>
    <td align="center">
      <img width="180" alt="인트로 화면" src="https://github.com/user-attachments/assets/f07ea8ba-d356-441b-b277-40d52854c6bd" />
      <br />
      <sub>인트로 화면(공통)</sub>
    </td>
    <td align="center">
      <img width="180" alt="성별 공개 전 화면" src="https://github.com/user-attachments/assets/3d533784-423e-4f75-bbb5-93d759338137" />
      <br />
      <sub>성별 공개 전 화면</sub>
    </td>
    <td align="center">
      <img width="180" alt="여자아이 화면" src="https://github.com/user-attachments/assets/b9e64fdc-6f35-46a3-b6a0-e0ed5a0c9a35" />
      <br />
      <sub>여자아이 화면</sub>
    </td>
    <td align="center">
      <img width="180" alt="남자아이 화면" src="https://github.com/user-attachments/assets/ee04e234-8aa9-4794-bd64-531ffc8add6b" />
      <br />
      <sub>남자아이 화면</sub>
    </td>
  </tr>
</table>

---

## 사용 방법

### 1. GitHub 계정 만들기

GitHub 계정이 없다면 먼저 GitHub에 가입해주세요.

---

### 2. 이 저장소 Fork하기

GitHub 계정으로 로그인 한 후, 이 저장소 오른쪽 위에 있는 **Fork** 버튼을 누릅니다.

```text
Fork → Create fork
```

그러면 이 웹카드가 내 GitHub 계정으로 복사됩니다.

<img width="200" alt="Fork 버튼" src="https://github.com/user-attachments/assets/ee04e234-8aa9-4794-bd64-531ffc8add6b" />

---

### 3. 설정 파일 열기

Fork한 저장소에서 아래 파일을 찾아 엽니다.

```text
js/config.js
```

파일 안에는 아래와 비슷한 코드가 있습니다.

```javascript
const CONFIG = {
  gender: "secret",
  babyNickname: "튼튼이"
};
```

---

### 4. 태명 바꾸기

`babyNickname` 부분에 원하는 태명을 적어주세요.

예를 들어 태명이 `복덩이`라면 이렇게 바꿉니다.

```javascript
const CONFIG = {
  gender: "secret",
  babyNickname: "복덩이"
};
```

---

### 5. 화면 상태 바꾸기

`gender` 값을 바꾸면 화면이 달라집니다.

성별 공개 전 화면으로 쓰고 싶다면:

```javascript
const CONFIG = {
  gender: "secret",
  babyNickname: "복덩이"
};
```

여자아이 공개 화면으로 쓰고 싶다면:

```javascript
const CONFIG = {
  gender: "girl",
  babyNickname: "복덩이"
};
```

남자아이 공개 화면으로 쓰고 싶다면:

```javascript
const CONFIG = {
  gender: "boy",
  babyNickname: "복덩이"
};
```

수정 후에는 GitHub 화면에서 **Commit changes** 버튼을 눌러 저장합니다.

---

### 6. GitHub Pages로 배포하기

이제 웹카드 주소를 만들 차례입니다.

Fork한 저장소에서 아래 순서로 들어갑니다.

```text
Settings → Pages
```

그리고 아래처럼 설정합니다. 

```text
Source: Deploy from a branch
Branch: main 
Folder: /root
```

설정 후 **Save** 버튼을 누릅니다.

잠시 기다리면 아래와 비슷한 주소가 만들어집니다.

```text
https://내아이디.github.io/저장소이름/
```

이 주소가 완성된 젠더리빌 웹카드 링크입니다.
가족이나 지인에게 이 링크를 공유하면 됩니다.

---

## 공개 전에는 어떻게 쓰나요?

처음에는 `secret`으로 설정해두면 됩니다.

```javascript
const CONFIG = {
  gender: "secret",
  babyNickname: "복덩이"
};
```

성별을 공개하고 싶은 시간이 되면 `gender` 값만 바꿔주세요.

여자아이일 경우:

```javascript
gender: "girl"
```

남자아이일 경우:

```javascript
gender: "boy"
```

---

## 개인정보 주의

GitHub Pages로 만든 페이지는 인터넷에 공개될 수 있습니다.

아래 정보는 넣지 않는 것을 추천합니다.

* 실명
* 주소
* 전화번호
* 병원명
* 초음파 원본 사진
* 가족 얼굴 사진
* 정확한 출산 예정일

태명, 성별 정도만 사용하는 것을 추천합니다.

---

## 참고

이 웹카드는 HTML, CSS, JavaScript만 사용하는 정적 페이지입니다.

별도의 서버나 로그인 기능은 없습니다.
개인적인 용도로 자유롭게 사용하셔도 됩니다.
