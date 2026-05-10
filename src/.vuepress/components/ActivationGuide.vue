<template>
  <div class="ag">

    <!-- ── Intro ── -->
    <div class="ag__intro">
      <p class="ag__subtitle">
        很多人在「授權」這步卡關，這份指南會帶你走完每個步驟，包括那個 Google 警告畫面。
      </p>
    </div>

    <!-- ── Timeline ── -->
    <div class="ag__timeline">

      <!-- Phase 1 — 已完成 -->
      <div class="ag__phase ag__phase--done">
        <div class="ag__track">
          <div class="ag__dot ag__dot--done">🗒️</div>
          <div class="ag__connector"></div>
        </div>
        <div class="ag__card ag__card--done">
          <span class="ag__tag ag__tag--done">✓ 已完成</span>
          <h3 class="ag__card-title">填寫免費試用申請表單</h3>
          <p class="ag__card-text">送出後系統會立即寄出含有試算表連結的 Email，快去 Gmail 收信！</p>
          <div class="ag__here-badge">← 你現在在這裡</div>
        </div>
      </div>

      <!-- Phase 2 — 收信 -->
      <div class="ag__phase">
        <div class="ag__track">
          <div class="ag__dot">📬</div>
          <div class="ag__connector"></div>
        </div>
        <div class="ag__card">
          <span class="ag__tag">Step 2</span>
          <h3 class="ag__card-title">收到 Email，建立屬於自己的副本</h3>
          <p class="ag__card-text">
            確認後，懶魚會寄一封 Email 到你的 Gmail，裡面有一個<strong>專屬連結</strong>。
            點連結後選「建立副本」，就會在你的雲端硬碟建立一份專屬的管理表。
          </p>

          <div class="ag__email-mock" aria-label="Email 示意圖">
            <div class="ag__email-bar">
              <span class="ag__win-dot" style="background:#FF5F57"></span>
              <span class="ag__win-dot" style="background:#FFBD2E"></span>
              <span class="ag__win-dot" style="background:#28CA41"></span>
              <span class="ag__email-sender">【全自動股票管理表】申請試用</span>
            </div>
            <div class="ag__email-body">
              <p class="ag__email-greeting">申請【台股訂閱版】試用成功</p>
              <p class="ag__email-info">台股訂閱版-複製連結</p>
              <div class="ag__email-link">→ 點此連結建立並按下建立副本</div>
            </div>
          </div>

          <div class="ag__tip">
            <strong>💡 小提醒</strong>：請確認登入的是你填寫申請表時使用的 Gmail 帳號
          </div>
        </div>
      </div>

      <!-- Phase 3 — 啟用授權 -->
      <div class="ag__phase ag__phase--activate">
        <div class="ag__track">
          <div class="ag__dot ag__dot--highlight">⚡</div>
        </div>
        <div class="ag__card ag__card--highlight">
          <span class="ag__tag ag__tag--highlight">Step 3 · 最容易卡關的地方</span>
          <h3 class="ag__card-title">啟用並授權試算表</h3>
          <p class="ag__card-text">
            建立副本後，試算表還需要完成一次「授權」，才能自動抓取股價、計算損益。
            以下是完整六個步驟，逐一做就沒問題！
          </p>

          <div class="ag__substeps">

            <!-- Sub 1 -->
            <div class="ag__sub">
              <div class="ag__sub-num">1</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">找到「儀表板」分頁，點「更新儀表板」</p>
                <p class="ag__sub-desc">在試算表底部的分頁列找到「儀表板」頁，點畫面上的綠色按鈕。</p>
                <img class="ag__img" src="/images/啟用步驟/啟用步驟_0更新儀表板.jpg" alt="點選更新儀表板按鈕示意圖" loading="lazy" />
              </div>
            </div>

            <!-- Sub 2 -->
            <div class="ag__sub">
              <div class="ag__sub-num">2</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">彈出「需要授權」提示 → 點「確認」</p>
                <p class="ag__sub-desc">Google 跳出視窗說試算表需要授權，直接點「確認」繼續即可。</p>
                <img class="ag__img ag__img--narrow" src="/images/啟用步驟/啟用步驟_1需要授權.jpg" alt="需要授權提示視窗示意圖" loading="lazy" />
              </div>
            </div>

            <!-- Sub 3 -->
            <div class="ag__sub">
              <div class="ag__sub-num">3</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">選擇你的 Google 帳號</p>
                <p class="ag__sub-desc">在帳號選擇畫面，選你用來複製試算表的那個 Google 帳號。</p>
                <img class="ag__img ag__img--narrow" src="/images/啟用步驟/啟用步驟_2選擇自己的Google帳號.jpg" alt="選擇 Google 帳號示意圖" loading="lazy" />
              </div>
            </div>

            <!-- Sub 4 — Warning -->
            <div class="ag__sub ag__sub--warn">
              <div class="ag__sub-num ag__sub-num--warn">4</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">出現「未驗證應用程式」警告</p>
                <p class="ag__sub-desc">
                  點「<strong>進階</strong>」→ 接著再點「<strong>前往全自動股票管理表（不安全）</strong>」
                </p>

                <details class="ag__why">
                  <summary class="ag__why-summary">
                    <span>🔒 為什麼會出現這個警告？這安全嗎？</span>
                    <span class="ag__why-arrow">▾</span>
                  </summary>
                  <div class="ag__why-body">
                    <p>
                      這是 Google 對「個人開發者 Apps Script」顯示的<strong>標準警告</strong>，
                      不代表試算表真的不安全。
                    </p>
                    <p>
                      通過 Google「已驗證」審查必須支付費用並提交申請，這份工具是個人開發、
                      尚未走這個流程，所以才出現此警告。目前已有大量用戶使用，
                      程式碼也經過社群檢核，可以放心授權。
                    </p>
                    <a href="/faq/Google未驗證應用程式警告說明" class="ag__why-link">閱讀完整說明 →</a>
                  </div>
                </details>
                <div class="ag__img-row">
                  <img class="ag__img ag__img--medium" src="/images/啟用步驟/啟用步驟_3選擇進階.jpg" alt="點選進階示意圖" loading="lazy" />
                  <img class="ag__img ag__img--medium" src="/images/啟用步驟/啟用步驟_4前往.jpg" alt="點選前往管理表示意圖" loading="lazy" />
                </div>
              </div>
            </div>

            <!-- Sub 5 -->
            <div class="ag__sub">
              <div class="ag__sub-num">5</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">點「允許」</p>
                <p class="ag__sub-desc">允許試算表存取你的 Google 帳號，它才能執行自動取價、損益計算等功能。</p>
                <img class="ag__img ag__img--tall" src="/images/啟用步驟/啟用步驟_5允許.jpg" alt="點選允許示意圖" loading="lazy" />
              </div>
            </div>

            <!-- Sub 6 — Final -->
            <div class="ag__sub ag__sub--final">
              <div class="ag__sub-num ag__sub-num--final">6</div>
              <div class="ag__sub-body">
                <p class="ag__sub-title">回試算表，再點一次「更新儀表板」</p>
                <p class="ag__sub-desc">
                  授權完成後，<strong>一定要再點一次「更新儀表板」</strong>，
                  看到「<strong>啟用成功</strong>」的提示，才算真正啟動！
                </p>
                <div class="ag__notice">
                  ⚠️ 很多人在授權後以為結束了，但還要再按一次按鈕，管理表才會真正動起來！
                </div>
                <img class="ag__img" src="/images/啟用步驟/啟用步驟_7指令碼執行完成.jpg" alt="指令碼執行完成示意圖" loading="lazy" />
                <img class="ag__img ag__img--narrow" src="/images/啟用步驟/啟用步驟_6成功.jpg" alt="啟用成功示意圖" loading="lazy" />
              </div>
            </div>

          </div><!-- /substeps -->
        </div>
      </div>

    </div><!-- /timeline -->

    <!-- ── Help Footer ── -->
    <div class="ag__help">
      <h3 class="ag__help-title">🎬 看影片教學</h3>
      <div class="ag__help-video">
        <iframe
          src="https://www.youtube.com/embed/e2Xh9q0CgO8?si=8wQgyNFPTdXRRifP"
          title="啟用示範影片"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// Pure display component — no props needed
</script>

<style lang="scss" scoped>
/* ============================================================
 * ActivationGuide — 對齊全站 mascot 設計系統
 * 核心原則：
 *   1. 只用全站 token（--mint / --paper / --card / --ink ...）
 *   2. dark mode 由 token 自動傳遞，不再各別 hardcode
 *   3. 所有 sub-step 用同一組 padding，確保編號圓圈對齊
 * ============================================================ */

.ag {
  max-width: 100%;
  margin: 2rem 0;
  font-family: var(--font-sans, inherit);
  color: var(--ink-soft);
}

/* ── Intro ─────────────────────────────────────────────── */
.ag__intro    { padding: 0 0 1.25rem; }
.ag__subtitle {
  color: var(--fg-2);
  font-size: 15px;
  line-height: 1.85;
  margin: 0;
}

/* ── Timeline layout ───────────────────────────────────── */
.ag__timeline { display: flex; flex-direction: column; }

.ag__phase {
  display: grid;
  grid-template-columns: 52px 1fr;
  column-gap: 14px;
}

.ag__track {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2px;
}

.ag__dot {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--mint);
  background: var(--card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 0 var(--mint-600);

  &--done {
    background: var(--hairline-soft);
    border-color: var(--hairline);
    box-shadow: none;
    filter: grayscale(.4);
    opacity: .85;
  }

  &--highlight {
    background: var(--mint-ink);
    border-color: var(--mint-ink);
    color: var(--mint-100);
    box-shadow: 0 2px 0 rgba(0, 0, 0, .25);
    animation: ag-pulse 2.4s ease-in-out infinite;
  }
}

@keyframes ag-pulse {
  0%, 100% { outline: 0 solid rgba(127, 206, 192, .35); }
  50%      { outline: 8px solid rgba(127, 206, 192, .12); }
}

.ag__connector {
  width: 2px;
  flex: 1;
  min-height: 20px;
  background: var(--mint);
  opacity: .45;
  margin: 6px 0;
}

/* ── Cards ─────────────────────────────────────────────── */
.ag__card {
  background: var(--card);
  border: 1.5px solid var(--hairline);
  border-radius: 18px;
  padding: 18px 22px;
  margin-bottom: 14px;
  box-shadow: var(--mascot-shadow-card);

  &--done {
    background: var(--hairline-soft);
    border-color: var(--hairline);
    box-shadow: none;

    .ag__card-title { color: var(--fg-3); }
    .ag__card-text  { color: var(--fg-3); }
  }

  &--highlight {
    border: 2px solid var(--mint);
    box-shadow: 0 4px 0 var(--mint-600);
  }
}

.ag__tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--fg-3);
  margin-bottom: 6px;

  &--done    { color: var(--fg-3); }
  &--highlight {
    color: var(--mint-ink);
    background: var(--mint-100);
    border-radius: 999px;
    padding: 3px 10px;
    letter-spacing: .04em;
  }
}

.ag__card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 6px;
  line-height: 1.45;
}

.ag__card-text {
  font-size: 15px;
  color: var(--ink-soft);
  line-height: 1.85;
  margin: 0 0 10px;

  strong { color: var(--mint-ink); }

  &:last-child { margin-bottom: 0; }
}

/* 「你現在在這裡」用全站 active 色（黃）保持一致語言 */
.ag__here-badge {
  display: inline-block;
  background: var(--yellow);
  color: var(--ink);
  padding: 3px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 6px;
  box-shadow: 0 2px 0 var(--yellow-600);
}

/* ── Email mock ────────────────────────────────────────── */
.ag__email-mock {
  border: 1px solid var(--hairline);
  border-radius: 12px;
  overflow: hidden;
  margin: 12px 0;
  font-size: 14px;
  background: var(--card);
}

.ag__email-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  background: var(--hairline-soft);
  padding: 8px 12px;
  border-bottom: 1px solid var(--hairline);
}

.ag__win-dot { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }

.ag__email-sender {
  margin-left: 5px;
  color: var(--fg-2);
  font-size: 12px;
}

.ag__email-body { padding: 14px; background: var(--card); }

.ag__email-greeting {
  margin: 0 0 4px;
  font-weight: 600;
  color: var(--ink);
}

.ag__email-info {
  margin: 0 0 10px;
  color: var(--fg-2);
  font-size: 13px;
}

/* email link 用 hardcoded mint-ink 文字確保 dark mode 也讀得到 */
.ag__email-link {
  display: inline-block;
  background: var(--mint);
  color: #1A4A42;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
}

.ag__tip {
  background: var(--mint-100);
  border-left: 3px solid var(--mint);
  border-radius: 0 8px 8px 0;
  padding: 10px 13px;
  font-size: 14px;
  color: var(--mint-ink);
  margin-top: 4px;

  strong { font-weight: 700; }
}

/* ── Sub-steps ─────────────────────────────────────────────
 * 對齊修正：所有 sub 共用 padding: 12px 14px，編號圓圈起點一致
 * ──────────────────────────────────────────────────────── */
.ag__substeps {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ag__sub {
  display: grid;
  grid-template-columns: 34px 1fr;
  column-gap: 12px;
  padding: 12px 14px;
  align-items: start;
  border-radius: 12px;
  border: 1px solid transparent;
  background: transparent;

  &--warn {
    background: var(--yellow-100);
    border-color: var(--yellow-600);

    .ag__sub-title { color: var(--yellow-ink); }
  }

  &--final {
    background: var(--mint-100);
    border-color: var(--mint);
  }
}

.ag__sub-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--mint);
  color: #1A4A42;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 1px;
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  box-shadow: 0 2px 0 var(--mint-600);

  &--warn {
    background: var(--yellow);
    color: var(--yellow-ink);
    box-shadow: 0 2px 0 var(--yellow-600);
  }
  &--final {
    background: var(--mint-ink);
    color: var(--mint-100);
    box-shadow: 0 2px 0 rgba(0, 0, 0, .25);
  }
}

.ag__sub-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

/* 用 `.ag .ag__sub-title` 把 specificity 提到 (0,3,0)，
   壓過全站 `.vp-page:not(:has(.mascot-page)) p` (0,2,1) 對 line-height/margin 的設定 */
.ag .ag__sub-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
  /* 讓 title 第一行垂直中心對齊 34px num 圓圈中心；多行時自然撐高、不影響行距 */
  min-height: 34px;
  display: flex;
  align-items: center;
}

.ag__sub-desc {
  font-size: 14px;
  color: var(--ink-soft);
  margin: 0 0 6px;
  line-height: 1.7;

  strong { color: var(--mint-ink); font-weight: 700; }
}

/* ── Why box (details) ─────────────────────────────────── */
.ag__why {
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;

  &[open] {
    border: 1px solid var(--coral);
    background: var(--card);

    .ag__why-summary { border-radius: 10px 10px 0 0; }
    .ag__why-arrow   { transform: rotate(180deg); }
  }
}

/* 注意：刻意保留 coral 紅，與外層 --warn 黃底形成對比，避免框線糊掉 */
.ag__why-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  background: var(--coral-100);
  padding: 9px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #8F3A2F;
  list-style: none;
  user-select: none;

  &::-webkit-details-marker { display: none; }
  &::marker                  { display: none; }
}

.ag__why-arrow {
  flex-shrink: 0;
  transition: transform .2s ease;
}

.ag__why-body {
  padding: 14px;
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.75;

  p {
    margin: 0 0 8px;
    strong { color: var(--mint-ink); font-weight: 700; }
  }
}

.ag__why-link {
  display: inline-block;
  color: var(--mint-ink);
  font-weight: 700;
  text-decoration: underline;
  font-size: 13px;

  &:hover { color: var(--coral-600); }
}

/* ── Notice & success badge ────────────────────────────── */
.ag__notice {
  background: var(--coral-100);
  border-left: 3px solid var(--coral-600);
  border-radius: 0 8px 8px 0;
  padding: 10px 13px;
  font-size: 13px;
  color: #8F3A2F;
  font-weight: 600;
  margin: 8px 0;
  line-height: 1.65;
}

/* ── Help footer ───────────────────────────────────────── */
.ag__help {
  background: var(--mint-100);
  border-radius: 18px;
  padding: 22px 24px;
  margin-top: 24px;
}

.ag__help-title {
  font-size: 17px;
  font-weight: 800;
  color: var(--mint-ink);
  margin: 0 0 4px;
}

.ag__help-video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin: 14px 0 12px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--ink);

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}

.ag__help-contact {
  font-size: 14px;
  color: var(--fg-2);
  margin: 0;

  a {
    color: var(--mint-ink);
    font-weight: 700;
    text-decoration: underline;

    &:hover { color: var(--coral-600); }
  }
}

/* ── Step images ─ 用 modifier class 統一管理大小 ────── */
.ag__img {
  display: block;
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid var(--hairline);
  background: var(--card);

  &--narrow { max-width: 320px; }
  &--medium { max-width: 360px; }
  &--tall   { max-width: 260px; }   /* portrait 圖：限寬度，高度跟著比例自動 */

  & + & { margin-top: 8px; }
}

.ag__img-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;

  .ag__img { margin-top: 0; }
}

/* ── Dark mode 修正 ─────────────────────────────────────
 * 關鍵：site 用 [data-theme="dark"]，不是 .dark
 * 大部份顏色靠 token 自動切換，這裡只處理硬寫的色
 * ──────────────────────────────────────────────────────── */
:global(html[data-theme="dark"]) {
  .ag__sub--warn .ag__sub-title { color: var(--yellow); }
  .ag__sub-num--warn            { color: #2A2018; }   /* 黃底配深字，dark mode 也要保證對比 */
  .ag__why-summary              { color: #FFB59E; }   /* 保留紅色，與外層黃底對比 */
  .ag__why[open]                { border-color: var(--coral-600); }
  .ag__notice                   { color: #FFB59E; }
  .ag__email-link               { background: var(--mint); color: #0E2A26; }
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 580px) {
  .ag__phase { grid-template-columns: 40px 1fr; column-gap: 10px; }
  .ag__dot   { width: 36px; height: 36px; font-size: 1rem; }
  .ag__card  { padding: 16px; }
  .ag__sub   { padding: 10px 12px; column-gap: 10px; }

  .ag__img-row {
    .ag__img,
    .ag__img--medium { max-width: 100%; }
  }
}
</style>
