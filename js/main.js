const app = document.getElementById("app");
const babyNickname = CONFIG.babyNickname || "우리 아기";

function renderSecretPage() {
  app.innerHTML = `
    <section class="page secret-page secret-reveal-page">
      <div class="secret-scene">
        <div class="secret-ribbon-label">
          <span class="ribbon-text">Coming Soon</span>
        </div>

        <div class="secret-gift-wrap">
          <div class="secret-question-burst" aria-hidden="true">
            <span class="secret-question sq1">?</span>
            <span class="secret-question sq2">?</span>
            <span class="secret-question sq3">?</span>
            <span class="secret-question sq4">?</span>
            <span class="secret-question sq5">?</span>
            <span class="secret-question sq6">?</span>
          </div>

          <div class="secret-gift-box" aria-hidden="true">
            <div class="secret-gift-lid">
              <span class="secret-gift-lid-ribbon"></span>
            </div>

            <div class="secret-gift-body">
              <span class="secret-gift-ribbon vertical"></span>
              <span class="secret-gift-ribbon horizontal"></span>
            </div>
          </div>
        </div>

        <div class="secret-message-text">
          <span class="secret-mini-heart">🤍</span>
          <p>아직 ${babyNickname}의 성별은 비밀이에요</p>
          <span class="secret-mini-heart">🤍</span>
        </div>

        <p class="secret-sub-message">
          공개 시간이 되면 이 페이지가 바뀔 예정이에요.
        </p>
      </div>
    </section>
  `;
}

function renderGirlPage() {
  app.innerHTML = `
    <section class="page girl-page girl-reveal-page">
      <div class="girl-scene gift-scene">
        <div class="gift-box-stage" aria-hidden="true">
          <div class="gift-lid">
            <span class="gift-lid-ribbon"></span>
          </div>

          <div class="gift-box-body">
            <span class="gift-box-ribbon vertical"></span>
            <span class="gift-box-ribbon horizontal"></span>
          </div>
        </div>

        <div class="girl-reveal-content">
          <div class="ribbon-label">
            <span class="ribbon-text">축하합니다</span>
          </div>

          <div class="girl-hero">
            <div class="heart-burst" aria-hidden="true">
              <span class="heart h1">♥</span>
              <span class="heart h2">♥</span>
              <span class="heart h3">♥</span>
              <span class="heart h4">♥</span>
              <span class="heart h5">♥</span>
              <span class="heart h6">♥</span>
              <span class="heart h7">♥</span>
              <span class="heart h8">♥</span>
              <span class="heart h9">♥</span>
              <span class="heart h10">♥</span>
            </div>

            <img
              class="girl-side-item girl-dress"
              src="images/girl-dress.png"
              alt="여아 드레스"
            />

            <img
              class="girl-baby-img"
              src="images/baby-girl.png"
              alt="여자 아기 일러스트"
            />

            <img
              class="girl-side-item teddy-bear"
              src="images/teddy-bear.png"
              alt="곰돌이 인형"
            />
          </div>

          <div class="girl-message-text">
            <span class="mini-heart">💕</span>
            <p>공주님이 찾아왔어요!</p>
            <span class="mini-heart">💕</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBoyPage() {
  app.innerHTML = `
    <section class="page boy-page boy-reveal-page">
      <div class="boy-scene gift-scene">
        <div class="gift-box-stage" aria-hidden="true">
          <div class="gift-lid boy-gift-lid">
            <span class="gift-lid-ribbon"></span>
          </div>

          <div class="gift-box-body boy-gift-body">
            <span class="gift-box-ribbon vertical"></span>
            <span class="gift-box-ribbon horizontal"></span>
          </div>
        </div>

        <div class="boy-reveal-content">
          <div class="ribbon-label boy-ribbon-label">
            <span class="ribbon-text">축하합니다</span>
          </div>

          <div class="boy-hero">
            <div class="boy-heart-burst" aria-hidden="true">
              <span class="boy-heart bh1">♥</span>
              <span class="boy-heart bh2">♥</span>
              <span class="boy-heart bh3">♥</span>
              <span class="boy-heart bh4">♥</span>
              <span class="boy-heart bh5">♥</span>
              <span class="boy-heart bh6">♥</span>
              <span class="boy-heart bh7">♥</span>
              <span class="boy-heart bh8">♥</span>
              <span class="boy-heart bh9">♥</span>
              <span class="boy-heart bh10">♥</span>
            </div>

            <img
              class="boy-side-item boy-shoes"
              src="images/boy-shoes.png"
              alt="남자아기 운동화"
            />

            <img
              class="boy-baby-img"
              src="images/baby-boy.png"
              alt="남자 아기 일러스트"
            />

            <img
              class="boy-side-item toy-car"
              src="images/toy-car.png"
              alt="자동차 장난감"
            />
          </div>

          <div class="boy-message-text">
            <span class="boy-mini-heart">💙</span>
            <p>왕자님이 찾아왔어요!</p>
            <span class="boy-mini-heart">💙</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPage() {
  if (!window.CONFIG && typeof CONFIG === "undefined") {
    app.innerHTML = `
      <section class="page secret-page">
        <div class="card">
          <h1>설정 파일을 찾을 수 없어요</h1>
          <p class="sub-message">
            js/config.js 파일이 index.html보다 먼저 연결되어 있는지 확인해주세요.
          </p>
        </div>
      </section>
    `;
    return;
  }

  if (CONFIG.gender === "girl") {
    renderGirlPage();
    return;
  }

  if (CONFIG.gender === "boy") {
    renderBoyPage();
    return;
  }

  renderSecretPage();
}

// renderPage();
function playIntroOverlay() {
  const messageLines = [
    "두근두근...",
    `${babyNickname}는 딸일까요, 아들일까요?`
  ];

  const overlay = document.createElement("div");
  overlay.className = "intro-overlay";

  const questionLayer = document.createElement("div");
  questionLayer.className = "question-layer";

const questionCount = 20;

for (let i = 0; i < questionCount; i++) {
  const question = document.createElement("span");
  question.className = "question-mark";
  question.textContent = "?";

  const size = 26 + Math.random() * 70;
  const left = Math.random() * 100;
  const top = Math.random() * 100;

  // 숫자가 작을수록 더 빠르게 움직입니다.
  const duration = 2.7 + Math.random() * 3.7;

  // 처음부터 제각각 움직이도록 음수 delay를 줍니다.
  const delay = Math.random() * -5;

  // 움직임 범위를 더 크게 확대합니다.
  // const moveX = -60 + Math.random() * 140;
  // const moveY = -70 + Math.random() * 160;
  const moveX = -18 + Math.random() * 36;
  const moveY = -24 + Math.random() * 48;

  // const rotateStart = -30 + Math.random() * 60;
  // const rotateMid = -45 + Math.random() * 90;
  // const rotateEnd = rotateStart + 60 + Math.random() * 120;
  const rotateStart = -6 + Math.random() * 12;
  const rotateMid = -10 + Math.random() * 20;
  const rotateEnd = rotateStart + (-10 + Math.random() * 20);

  question.style.left = `${left}%`;
  question.style.top = `${top}%`;
  question.style.fontSize = `${size}px`;

  // 기존보다 훨씬 선명하게 보이도록 opacity를 높입니다.
  question.style.opacity = `${0.72 + Math.random() * 0.24}`;

  question.style.setProperty("--duration", `${duration}s`);
  question.style.setProperty("--delay", `${delay}s`);
  question.style.setProperty("--move-x", `${moveX}px`);
  question.style.setProperty("--move-y", `${moveY}px`);
  question.style.setProperty("--rotate-start", `${rotateStart}deg`);
  question.style.setProperty("--rotate-mid", `${rotateMid}deg`);
  question.style.setProperty("--rotate-end", `${rotateEnd}deg`);

  questionLayer.appendChild(question);
}

  const introMessage = document.createElement("p");
  introMessage.className = "intro-message";

  messageLines.forEach((line, lineIndex) => {
    const lineElement = document.createElement("span");
    lineElement.className = "intro-line";

    [...line].forEach((char, charIndex) => {
      const span = document.createElement("span");
      span.className = "char";

      const globalIndex =
        messageLines.slice(0, lineIndex).join("").length + charIndex + lineIndex;

      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay = `${globalIndex * 0.075}s`;

      lineElement.appendChild(span);
    });

    introMessage.appendChild(lineElement);
  });

  overlay.appendChild(questionLayer);
  overlay.appendChild(introMessage);
  document.body.appendChild(overlay);

  const totalCharacters = messageLines.join("").length;
  const typingDuration = totalCharacters * 75;
  const readingDelay = 900;
  const fadeDelay = typingDuration + readingDelay;

  setTimeout(() => {
    overlay.classList.add("is-hidden");
  }, fadeDelay);

  setTimeout(() => {
    document.body.classList.add("intro-finished");
    overlay.remove();
  }, fadeDelay + 1000);
}

renderPage();
playIntroOverlay();