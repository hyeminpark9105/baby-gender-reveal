const app = document.getElementById("app");

function renderSecretPage() {
  app.innerHTML = `
    <section class="page secret-page">
      <div class="card">
        <p class="eyebrow">Gender Reveal</p>

        <h1>두근두근...</h1>

        <p class="message">
          아직 우리 아기의 성별은 비밀이에요 🤍
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
    <section class="page girl-page">
      <div class="card">
        <p class="eyebrow">Gender Reveal</p>

        <h1>It's a Girl!</h1>

        <p class="emoji">🎀💕👶</p>

        <p class="message">
          우리 아기는 사랑스러운 공주님이에요
        </p>

        <p class="sub-message">
          따뜻한 축복으로 함께 맞이해주세요.
        </p>
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

renderPage();