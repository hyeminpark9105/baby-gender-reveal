const app = document.getElementById("app");
const babyNickname = CONFIG.babyNickname || "우리 아기";

function renderSecretPage() {
  app.innerHTML = `
    <section class="page secret-page">
      <div class="card">
        <p class="eyebrow">Gender Reveal</p>

        <h1>두근두근...</h1>

        <p class="message">
          아직 ${babyNickname}의 성별은 비밀이에요 🤍
        </p>

        <p class="sub-message">
          공개 시간이 되면 이 페이지가 바뀔 예정이에요.
        </p>

        <div class="button-row">
          <span class="pill pink">Girl?</span>
          <span class="pill blue">Boy?</span>
        </div>
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
    <section class="page boy-page">
      <div class="card">
        <p class="eyebrow">Gender Reveal</p>

        <h1>It's a Boy!</h1>

        <p class="emoji">🧸💙👶</p>

        <p class="message">
          우리 아기는 사랑스러운 왕자님이에요
        </p>

        <p class="sub-message">
          따뜻한 축복으로 함께 맞이해주세요.
        </p>
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