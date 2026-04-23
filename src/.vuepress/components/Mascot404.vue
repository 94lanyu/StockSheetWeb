<template>
  <div class="nf-page">
    <div class="mascot-blob yellow b1"></div>
    <div class="mascot-blob pink b2"></div>

    <nav class="nf-nav">
      <RouterLink to="/" class="nf-logo">
        <img src="/logo.webp" alt="懶魚" />
        <span>懶魚</span>
      </RouterLink>
    </nav>

    <div class="nf-wrap">
      <div class="card-404">
        <div class="mascot-404">
          <div class="ring"></div>
          <img src="/mascot/logo_no_bg.png" alt="懶魚" />
          <div class="speech">咦？</div>
        </div>

        <div class="big-404">404</div>

        <h1 class="oops">這裡<span class="hl">沒有魚。</span></h1>
        <p class="oops-sub">你找的這一頁我翻遍整條河也找不到。<br />可能是連結過期、或我把它搬家忘記跟你說了。</p>

        <div class="nf-actions">
          <button class="pillbtn mint" @click="goBack">← 回上一頁</button>
          <RouterLink to="/" class="pillbtn ghost">🏠 回首頁</RouterLink>
          <RouterLink to="/faq/" class="pillbtn ghost">🔍 常見問題</RouterLink>
        </div>

        <div class="suggestions">
          <h4>💡 或許你想找的是：</h4>
          <ul>
            <li>
              <RouterLink to="/guide/">使用指南 · 快速入門</RouterLink>
              <span class="tt">/guide</span>
            </li>
            <li>
              <RouterLink to="/guide/sheets/儀表板.html">儀表板怎麼看</RouterLink>
              <span class="tt">/guide/sheets</span>
            </li>
            <li>
              <RouterLink to="/faq/">常見問題</RouterLink>
              <span class="tt">/faq</span>
            </li>
            <li>
              <a href="https://forms.gle/RsfJdnReB1pzahQM6" target="_blank" rel="noopener">免費試用申請</a>
              <span class="tt">免費試用</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nf-bottom">
      還是找不到？<a href="mailto:94lanyu@gmail.com">寫信告訴我</a>，我會修。
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.nf-page {
  min-height: 100vh;
  background: var(--paper, #FFF8F0);
  color: var(--ink-soft, #3C3430);
  font-family: var(--font-sans);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
}

// blobs
.mascot-blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(40px);
  opacity: .45;
  z-index: 0;
  pointer-events: none;
  &.yellow { background: var(--yellow-100, #FFF1C2); }
  &.pink   { background: var(--coral-100, #FFE2DC); }
}
.b1 { top: -100px; left: 20%; width: 400px; height: 400px; }
.b2 { bottom: -60px; right: 10%; width: 340px; height: 340px; }

// minimal nav
.nf-nav {
  padding: 20px 28px;
  position: relative;
  z-index: 2;
}
.nf-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: var(--ink-soft, #3C3430);

  img {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, .08);
  }
}

// center wrap
.nf-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 40px;
  position: relative;
  z-index: 1;
}

// main card
.card-404 {
  background: var(--card, #fff);
  border-radius: 32px;
  box-shadow: 0 6px 0 var(--hairline, #E6DDD4), 0 20px 60px -20px rgba(0, 0, 0, .12);
  max-width: 680px;
  width: 100%;
  padding: 48px 48px 44px;
  text-align: center;
}

// mascot
.mascot-404 {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 24px;

  .ring {
    position: absolute;
    inset: 0;
    background: var(--coral, #FF9B8A);
    border-radius: 50%;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    animation: nf-dizzy 3s ease-in-out infinite;
  }

  .speech {
    position: absolute;
    top: -10px;
    right: -28px;
    background: var(--card, #fff);
    padding: 8px 14px;
    border-radius: 20px 20px 4px 20px;
    font-size: 13px;
    font-weight: 600;
    color: var(--ink-soft, #3C3430);
    box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
    white-space: nowrap;
    animation: nf-bob 3s ease-in-out infinite;
  }
}

@keyframes nf-dizzy {
  0%,  100% { transform: rotate(-8deg) translateY(0); }
  25%       { transform: rotate(4deg)  translateY(-4px); }
  50%       { transform: rotate(-2deg) translateY(2px); }
  75%       { transform: rotate(8deg)  translateY(-4px); }
}

@keyframes nf-bob {
  0%,  100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

// 404 number
.big-404 {
  font-family: var(--font-mono, ui-monospace, monospace);
  font-size: clamp(80px, 14vw, 140px);
  color: var(--yellow, #FFE066);
  font-weight: 700;
  line-height: .9;
  letter-spacing: -0.04em;
  margin: 0 0 16px;
  display: inline-block;
  text-shadow: 4px 4px 0 var(--coral, #FF9B8A), 8px 8px 0 var(--mint, #7FCEC0);
}

// headline
.oops {
  font-size: clamp(26px, 3.6vw, 38px);
  color: var(--ink, #2A2420);
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.015em;

  .hl {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: -4px;
      right: -4px;
      bottom: 4px;
      height: 12px;
      background: var(--yellow, #FFE066);
      z-index: -1;
      border-radius: 4px;
      transform: rotate(-1deg);
    }
  }
}

.oops-sub {
  font-size: 15px;
  color: var(--fg-2, #6B5D56);
  line-height: 1.7;
  margin: 0 auto 24px;
  max-width: 460px;
}

// action buttons
.nf-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

// buttons (reuse pillbtn from global scope — not scoped)
:deep(.pillbtn) { text-decoration: none; }

// suggestions
.suggestions {
  background: var(--yellow-100, #FFF1C2);
  border-radius: 18px;
  padding: 20px 24px;
  text-align: left;

  h4 {
    margin: 0 0 10px;
    font-size: 13px;
    color: var(--yellow-ink, #806300);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    color: var(--ink-soft, #3C3430);

    li {
      padding: 6px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dashed rgba(128, 99, 0, .2);

      &:last-child { border-bottom: 0; }

      a {
        color: var(--ink, #2A2420);
        font-weight: 600;
        text-decoration: none;
        &:hover { color: var(--yellow-ink, #806300); }
      }
    }
  }

  .tt {
    font-size: 11px;
    color: var(--fg-3, #8A7F77);
    font-family: var(--font-mono, ui-monospace, monospace);
    flex-shrink: 0;
  }
}

// bottom note
.nf-bottom {
  padding: 16px 28px 28px;
  text-align: center;
  color: var(--fg-3, #8A7F77);
  font-size: 13px;
  position: relative;
  z-index: 1;

  a {
    color: var(--ink-soft, #3C3430);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

// RWD
@media (max-width: 640px) {
  .card-404 { padding: 32px 24px 28px; border-radius: 24px; }
  .mascot-404 { width: 160px; height: 160px; margin-bottom: 18px; }
  .mascot-404 .speech { top: -4px; right: -10px; font-size: 11px; }
  .big-404 { text-shadow: 3px 3px 0 var(--coral, #FF9B8A), 6px 6px 0 var(--mint, #7FCEC0); }
  .oops { font-size: 24px; }
  .oops-sub { font-size: 14px; }
  .suggestions { padding: 16px 18px; border-radius: 14px; }
  .suggestions ul li { flex-wrap: wrap; font-size: 13px; }
  .nf-actions { gap: 8px; }
  .nf-logo span { font-size: 16px; }
}
</style>
