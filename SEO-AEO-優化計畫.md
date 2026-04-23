# 全自動股票管理表 — SEO / AEO 優化計畫

> 分析日期：2026-04-15  
> 網站：https://94lanyu.github.io/  
> 技術棧：VuePress 2.0 + vuepress-theme-hope

---

## 現況快照

| 項目 | 狀態 |
|------|------|
| Google Search Console 驗證 | ✅ 已完成 |
| Sitemap 自動生成 | ✅ 已完成 |
| Google Tag Manager | ✅ 已完成 |
| 首頁 FAQPage Schema | ✅ 已完成（6 筆） |
| 首頁 WebApplication Schema | ✅ 已完成 |
| BreadcrumbList Schema（主題自動） | ✅ 已完成 |
| llms.txt | ✅ 已完成 |
| 內頁 meta description | ✅ 已完成（第 2 週） |
| HowTo Schema | ✅ 已完成（第 1 週） |
| FAQ 頁面個別 Schema | ✅ 已完成（第 3 週，QAPage 自動注入） |
| Open Graph / Twitter Card | ✅ 已完成（第 1 週） |
| 圖片 alt text | ✅ 已完成（第 2 週） |
| Sitemap priority | ✅ 已完成（第 4 週，extendsPage 自動設定） |
| 圖片壓縮（Core Web Vitals） | ✅ 已完成（第 4 週，GIF→WebP，logo.ico 3KB） |
| FAQ URL 關鍵字化 | ✅ 已完成（長期規劃，client-side redirect HTML stub） |

---

## Todo List（依影響力排序）

---

### T-01｜HowTo Schema — 首頁「3 步驟立即使用」

**優先級**：🔴 最高  
**影響**：Google AI Overview、Perplexity 最優先引用的 Schema 類型  
**難度**：低（只改 config.ts）

**做什麼**

在 `src/.vuepress/config.ts` 的 `head` 陣列加入 HowTo JSON-LD：

```typescript
['script', { type: 'application/ld+json' }, JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "如何開始使用全自動股票管理表",
  "description": "只需 3 個步驟，即可用 Google 試算表自動管理你的台股投資組合，免下載、免安裝",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "填寫免費試用表單",
      "text": "點擊「免費試用」按鈕，填寫表單取得試用版連結",
      "url": "https://94lanyu.github.io/#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "複製管理表到自己的 Google 雲端硬碟",
      "text": "開啟試用連結後，點選「建立副本」複製一份到自己的帳號",
      "url": "https://94lanyu.github.io/#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "啟用並授權",
      "text": "開啟試算表後，依照指示啟用應用程式腳本並授權，系統即可自動更新股價、計算損益、產生圖表",
      "url": "https://94lanyu.github.io/#step-3"
    }
  ]
})]
```

**如何測試**

1. `pnpm build` 後檢查 `src/.vuepress/dist/index.html` 是否含有 `HowTo` JSON-LD
2. 上線後貼入 [Google 複合式搜尋結果測試](https://search.google.com/test/rich-results) → URL 輸入首頁 → 確認出現「操作說明」結果
3. 在 Google Search Console → 「強化功能」→ 確認「操作說明」無錯誤

---

### T-02｜Open Graph + Twitter Card meta tags

**優先級**：🔴 最高  
**影響**：PTT、Dcard、LINE 群分享時出現預覽圖，直接影響社群轉換率  
**難度**：低

**做什麼**

在 `src/.vuepress/config.ts` 的 `head` 陣列加入：

```typescript
// Open Graph
['meta', { property: 'og:type', content: 'website' }],
['meta', { property: 'og:site_name', content: '全自動股票管理表' }],
['meta', { property: 'og:title', content: '全自動股票管理表 — 台股自動更新股價、損益計算、投資組合管理' }],
['meta', { property: 'og:description', content: '只需填入交易紀錄，自動更新台股成交價、計算損益與手續費、生成視覺化圖表。免費試用，無需下載。' }],
['meta', { property: 'og:image', content: 'https://94lanyu.github.io/images/台股訂閱版/儀表板.gif' }],
['meta', { property: 'og:image:width', content: '1200' }],
['meta', { property: 'og:image:height', content: '630' }],
['meta', { property: 'og:url', content: 'https://94lanyu.github.io/' }],
['meta', { property: 'og:locale', content: 'zh_TW' }],
// Twitter Card
['meta', { name: 'twitter:card', content: 'summary_large_image' }],
['meta', { name: 'twitter:title', content: '全自動股票管理表 — 台股自動更新股價、損益計算' }],
['meta', { name: 'twitter:description', content: '只需填入交易紀錄，自動更新台股成交價、計算損益。免費試用。' }],
['meta', { name: 'twitter:image', content: 'https://94lanyu.github.io/images/台股訂閱版/儀表板.gif' }],
```

**注意**：OG image 建議製作一張靜態 1200x630 JPG（非 GIF），GIF 預覽在 LINE/Facebook 相容性差。

**如何測試**

1. 上線後至 [Facebook 分享偵錯工具](https://developers.facebook.com/tools/debug/) 貼入首頁 URL → 確認出現標題、描述、縮圖
2. [Twitter Card Validator](https://cards-dev.twitter.com/validator) 貼入首頁 URL 測試
3. LINE 直接在群組貼上 URL，確認顯示預覽卡片
4. 用瀏覽器開發者工具 → Elements → 搜尋 `og:image` 確認 meta 存在

---

### T-03｜所有內頁補充 meta description

**優先級**：🔴 最高  
**影響**：直接影響 Google 搜尋結果的點擊率（CTR），估計提升 20-40%  
**難度**：中（逐頁撰寫）

**需要處理的頁面（優先順序）**

1. `/guide/version/台股訂閱版.md`
2. `/guide/version/美股收費版.md`
3. `/guide/` (使用指南首頁)
4. `/guide/feature/自動更新股票成交價.md`
5. `/guide/feature/多種視覺化圖表.md`
6. `/guide/feature/自動化計算.md`
7. 其餘 feature 和 sheets 頁面
8. `/faq/` 列表頁

**撰寫格式**（每頁 frontmatter）

```yaml
---
description: "台股訂閱版支援自動更新成交價、損益計算、多種圖表視覺化，方案 600 元/3 個月起，複製即用無需下載。立即免費試用一個月。"
---
```

**撰寫原則**

- 長度：120–155 字元（含空格）
- 必含：核心關鍵字 + 具體數字或差異點 + 行動呼籲
- 不要重複 title 的文字

**如何測試**

1. Build 後在 dist 對應 HTML 找 `<meta name="description"` 確認內容
2. 上線後用 [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) 免費版爬取全站，匯出「Meta Description」欄位確認無空白
3. Google Search Console → 「搜尋外觀」→ 確認無「說明過短」警告
4. 2-4 週後在 GSC「成效」觀察 CTR 是否上升

---

### T-04｜各 FAQ 文章頁加入個別 Schema

**優先級**：🟠 高  
**影響**：讓 AI 搜尋引擎（Perplexity、Google AI Overview）知道每篇文章是「問答」並直接引用答案  
**難度**：中（需為每篇 FAQ 補充 frontmatter 並建立 layout）

**方案 A（快速）：在每篇 FAQ Markdown 直接嵌入 JSON-LD**

在文章末尾加入 HTML 區塊：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "現金股利如何在股票管理表中記錄？",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "在「現金股利」分頁中，填入除息日、每股股利金額與持股數量，系統會自動計算總股利收入並納入總損益計算。"
    }
  }
}
</script>
```

**方案 B（長期）：透過 VuePress layout 自動注入**

在 frontmatter 加入欄位，客製化 layout 讀取後自動生成 schema，避免 35 篇逐一手改。

**每篇 FAQ 同時補充 Article Schema**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "現金股利如何記錄",
  "author": { "@type": "Person", "name": "懶魚" },
  "datePublished": "2021-05-19",
  "dateModified": "2024-09-17",
  "publisher": {
    "@type": "Organization",
    "name": "全自動股票管理表",
    "url": "https://94lanyu.github.io/"
  }
}
</script>
```

**如何測試**

1. 選一篇 FAQ 改好後 build，用 Google 複合式搜尋結果測試工具測試該頁 URL
2. 確認出現「問與答」結果類型
3. 在 GSC「強化功能」觀察「問與答」是否無錯誤

---

### T-05｜FAQ URL 改為關鍵字 Slug

**優先級**：🟠 高  
**影響**：35 個 FAQ 頁面的搜尋排名上限，URL 是最強的頁面主題信號之一  
**難度**：高（需同時處理舊 URL 重定向，GitHub Pages 重定向需要特別處理）

**現況 vs 目標**

| 現在 | 建議 |
|------|------|
| `/faq/2021-05-19.html` | `/faq/現金股利如何記錄.html` |
| `/faq/2021-05-20.html` | `/faq/股票股利如何記錄.html` |
| `/faq/2022-11-01.html` | `/faq/交易紀錄填寫方式.html` |
| `/faq/2024-09-19.html` | `/faq/多家券商如何管理.html` |

**實作步驟**

1. 先整理 35 篇文章的對應關鍵字 slug（建議參考文章 frontmatter `title`）
2. 將 Markdown 檔案重新命名（VuePress 用檔名當 URL）
3. 在 `src/.vuepress/public/_redirects` 或透過 GitHub Actions 設定 301 redirect
   - GitHub Pages 不原生支援 301，需用 `meta refresh` 或 JS redirect 作為降級方案
   - 最佳方案：改用 Cloudflare Pages 部署（支援 `_redirects` 規則）
4. 更新所有站內指向舊 URL 的內部連結

**✅ 實作完成（2026-04-16）**

- 32 個 MD 檔案以 `git mv` 重新命名為關鍵字 slug
- 5 個 FAQ 間交叉連結已同步更新
- 32 個 HTML redirect stub 建立於 `src/.vuepress/public/faq/`
  - 採 `meta http-equiv="refresh"` + JS `location.replace()` 雙重 redirect
  - GitHub Pages 不支援 server-side 301，使用 client-side redirect 替代
  - 含 `<link rel="canonical">` 指向新 URL，避免 Google 收錄舊頁面

**如何測試**

1. Build 後確認新 URL 的 HTML 存在於 `dist/faq/` 目錄（中文檔名）
2. 確認 `dist/faq/2021-05-19.html` 存在（redirect stub）並含 meta refresh
3. 送出新 sitemap 到 GSC 後，2-4 週內觀察新 URL 是否被收錄
4. 用 [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools)（免費）確認舊 URL 的外部連結流量轉移情況

---

### T-06｜圖片 alt text 補全

**優先級**：🟡 中高  
**影響**：Google Image Search、多模態 AI 理解頁面、無障礙評分  
**難度**：低（逐一補充）

**需要處理的圖片**

優先處理以下已確認缺少 alt 的圖片：

- `logo.jpg` → `alt="全自動股票管理表 Logo"`
- `images/台股訂閱版/儀表板.gif` → `alt="全自動股票管理表儀表板 — 顯示台股持倉、未實現損益、圓餅圖與走勢圖"`
- 其他功能截圖：搜尋所有 `![]` 補充 alt

**搜尋缺漏 alt 的指令**

```bash
grep -r "!\[\]" src/ --include="*.md"
```

**alt 撰寫原則**

- 描述圖片實際內容，非重複周圍文字
- 包含 1-2 個自然出現的關鍵字
- 功能截圖：說明畫面展示的功能名稱
- 長度 < 125 字元

**如何測試**

1. Build 後在 dist HTML 搜尋 `alt=""` 確認無空白 alt（`grep -r 'alt=""' dist/`）
2. 用 [WAVE Accessibility Checker](https://wave.webaim.org/) 輸入網址 → 確認「Missing alternative text」歸零
3. Google PageSpeed Insights 「無障礙」分項分數應提升

---

### T-07｜首頁 Title 去除重複品牌名

**優先級**：🟡 中高  
**影響**：改善 Title 的關鍵字密度與可讀性，避免 Google 自行改寫標題  
**難度**：低

**現況**

```
全自動股票管理表 - 股票記帳、投資組合管理與自動更新 | 全自動股票管理表
```

「全自動股票管理表」重複出現兩次，浪費了 title 的最後空間。

**建議改為**

```
全自動股票管理表 — 台股自動更新股價、損益計算、投資組合管理 | 懶魚
```

修改位置：`src/.vuepress/config.ts` 中的 `title` 和首頁的 page title。

**如何測試**

1. Build 後在 `dist/index.html` 確認 `<title>` 標籤內容
2. 上線後在 Google 搜尋 `site:94lanyu.github.io` 確認顯示的 title 符合期望
3. 若 2 週後 Google 仍自行改寫 title，代表頁面 H1 和 title 落差過大，需一起調整 H1

---

### T-08｜E-E-A-T 強化 — 作者頁與 Person Schema

**優先級**：🟡 中高  
**影響**：AI 搜尋引擎（Perplexity、Gemini）判斷是否引用來源的核心依據  
**難度**：中

**需要做的事**

1. **`LanYu.md` 加入 Person Schema**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "懶魚",
  "email": "94lanyu@gmail.com",
  "url": "https://94lanyu.github.io/LanYu.html",
  "sameAs": [
    "https://github.com/94lanyu",
    "（YouTube 頻道 URL 若有的話）"
  ],
  "knowsAbout": ["台股投資", "Google Sheets", "股票管理", "投資組合分析"]
}
</script>
```

2. **作者頁內容補充**
   - 加入「使用這份管理表投資台股 X 年的心得」等親身經歷描述
   - 加入具體的使用數據（例如：「目前有 X 位用戶在使用」）
   - 加入外部連結驗證身份（GitHub、社群帳號）

3. **每篇 FAQ 文章的 frontmatter 確認 author 欄位存在**

**如何測試**

1. 用 Google 複合式搜尋結果測試工具測試 LanYu.html
2. 在 Perplexity 搜尋「全自動股票管理表」，觀察是否引用你的網站
3. 長期指標：GSC 「搜尋外觀」的品牌關鍵字點擊率

---

### T-09｜Sitemap 補充 priority 與修正 changefreq

**優先級**：🟢 中  
**影響**：引導 Googlebot 爬取優先順序，改善爬取預算效率  
**難度**：低（修改 theme.ts 的 sitemap 設定）

**建議設定**

在 `src/.vuepress/theme.ts` 的 sitemap plugin 設定中加入自訂：

```typescript
sitemap: {
  excludePaths: ["/404.html", "/demo/"],
  // 為不同路徑指定不同的 changefreq
  // vuepress-theme-hope 的 sitemap plugin 支援 modifyTimeGetter
}
```

**手動方式**：Build 後後處理 `sitemap.xml`，或使用 CI/CD 腳本替換。

**目標 priority 分布**

| 路徑 | priority | changefreq |
|------|---------|-----------|
| `/` | 1.0 | weekly |
| `/guide/version/*` | 0.9 | weekly |
| `/guide/feature/*` | 0.8 | monthly |
| `/guide/sheets/*` | 0.7 | monthly |
| `/faq/` | 0.7 | weekly |
| `/faq/*` | 0.5 | yearly |
| `/LanYu.html` | 0.4 | monthly |

**如何測試**

1. Build 後打開 `dist/sitemap.xml` 確認 priority 值
2. 到 Google Search Console → Sitemap → 重新提交 sitemap
3. 用 [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) 確認格式正確

---

### T-10｜圖片壓縮 — Core Web Vitals

**優先級**：🟢 中  
**影響**：LCP（最大內容繪製）是直接排名因子，影響行動裝置用戶體驗  
**難度**：中

**需要處理的問題檔案**

| 檔案 | 現況大小 | 目標大小 | 處理方式 |
|------|---------|---------|---------|
| `logo.png` | 527 KB | < 20 KB | 壓縮 + 改用 WebP |
| `logo.ico` | 270 KB | < 5 KB | 只保留 16x16 + 32x32 |
| `logo.jpg` | 111 KB | < 30 KB | 壓縮至 80% 品質 |
| `儀表板.gif` | 未知 | 換格式 | 改用 WebP animated 或 MP4 autoplay |

**建議工具**

- 圖片壓縮：[Squoosh](https://squoosh.app/)（免費，支援 WebP 輸出）
- GIF 轉 WebP：`cwebp -q 75 input.gif -o output.webp`
- ICO 重製：只需 16x16 和 32x32 版本

**如何測試**

1. [Google PageSpeed Insights](https://pagespeed.web.dev/) 輸入首頁 URL → 確認「LCP」< 2.5 秒
2. 確認「使用有效率的圖片格式」警告消失
3. [WebPageTest](https://www.webpagetest.org/) 模擬台灣 4G 連線測試載入速度

---

## 測試驗收 Checklist

每個任務完成後，依序確認以下項目：

### Build 階段驗收

```bash
pnpm build
# 然後檢查 dist/ 目錄
grep -r "HowTo" src/.vuepress/dist/index.html      # T-01
grep -r "og:image" src/.vuepress/dist/index.html   # T-02
grep -r 'alt=""' src/.vuepress/dist/ | wc -l       # T-06（應為 0）
cat src/.vuepress/dist/sitemap.xml | grep priority  # T-09
```

### 上線後工具驗證

| 工具 | 用途 | 對應任務 |
|------|------|---------|
| [Google 複合式搜尋結果測試](https://search.google.com/test/rich-results) | 確認 HowTo、FAQ、Article schema | T-01、T-04 |
| [Facebook 分享偵錯工具](https://developers.facebook.com/tools/debug/) | 確認 OG 預覽 | T-02 |
| [Google PageSpeed Insights](https://pagespeed.web.dev/) | LCP、CLS、圖片 | T-10 |
| [WAVE Accessibility Checker](https://wave.webaim.org/) | alt text 完整性 | T-06 |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) 免費版 | 全站 meta description 覆蓋率 | T-03 |
| [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html) | Sitemap 格式正確 | T-09 |
| Google Search Console → 強化功能 | HowTo、FAQ 錯誤 | T-01、T-04 |
| Google Search Console → 索引 → 頁面 | 新 FAQ URL 被收錄 | T-05 |

### 長期追蹤指標（上線 4 週後）

- GSC「成效」→ 點擊率（CTR）是否提升（對應 T-03）
- GSC「強化功能」→ 操作說明（HowTo）出現（對應 T-01）
- GSC「搜尋外觀」→ 問與答出現（對應 T-04）
- Perplexity 搜尋「台股管理表」、「股票記帳 Google 試算表」→ 是否被引用

---

## 建議執行順序

```
第 1 週：T-01（HowTo Schema）+ T-02（Open Graph）+ T-07（Title 修正）
第 2 週：T-03（meta description，從版本頁開始）+ T-06（alt text）
第 3 週：T-04（FAQ Schema）+ T-08（Person Schema）
第 4 週：T-09（Sitemap）+ T-10（圖片壓縮）
長期規劃：T-05 ✅（FAQ URL slug，已完成，client-side redirect stub）
```
