import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    bundler: viteBundler(),
    base: "/",
    lang: "zh-TW",
    title: "懶魚",
    description: "自動化股票管理excel(Google試算表)，免下載，複製立即可用。免費試用、簡單股票記帳、股票管理表、自動更新股價、股票儀表版",

    head: [
        // 網站圖標 favicon.ico
        ['link', {rel: 'icon', href: '/logo.ico'}],
        // Mascot 風格字體 (Noto Sans TC + Roboto Mono)
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap'}],
        // Google Console search html 擁有全驗證
        ['meta', {name: 'google-site-verification', content: 'AdvLMReW9RFoWDOXEAm_koqL82b1ZwwKxlgrhaQtRnQ'}],
        // Google Tag Manager 埋 code
        ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTHMCMQT');`],
        // Structured Data - WebApplication
        ['script', {type: 'application/ld+json'}, `{
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "全自動股票管理表",
              "url": "https://94lanyu.github.io/",
              "description": "基於 Google Sheets 的台股管理工具，開啟即自動更新股票成交價、計算損益、產生視覺化圖表，提供免費試用，另有美股、歐股、港股額外版本。",
              "image": "https://94lanyu.github.io/images/台股訂閱版/儀表板.webp",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "TWD",
                "description": "台股訂閱版，可免費試用，正式使用採訂閱制付費"
              },
              "author": {
                "@type": "Person",
                "name": "懶魚",
                "email": "94lanyu@gmail.com",
                "url": "https://94lanyu.github.io/LanYu.html"
              },
              "featureList": [
                "自動更新股票成交價",
                "自動化計算交易稅與手續費",
                "計算已實現與未實現損益",
                "多種視覺化圖表",
                "每週自動記錄投資變化",
                "管理多家券商",
                "觀察清單",
                "現金股利管理",
                "主版本支援台股",
                "另提供美股、歐股、港股額外版本"
              ]
            }`],
        // Structured Data - HowTo (T-01)
        ['script', {type: 'application/ld+json'}, JSON.stringify({
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
        })],
        // Open Graph — 僅補充 SEO plugin 未自動生成的項目 (T-02)
        // og:type / og:site_name / og:title / og:description / og:url / og:locale
        // 已由 theme.ts 的 SEO plugin 逐頁生成，不在此重複
        ['meta', {property: 'og:image', content: 'https://94lanyu.github.io/images/台股訂閱版/儀表板.webp'}],
        ['meta', {property: 'og:image:width', content: '1200'}],
        ['meta', {property: 'og:image:height', content: '630'}],
        // Twitter Card (T-02)
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:title', content: '全自動股票管理表 — 台股自動更新股價、損益計算'}],
        ['meta', {name: 'twitter:description', content: '只需填入交易紀錄，自動更新台股成交價、計算損益。免費試用。'}],
        ['meta', {name: 'twitter:image', content: 'https://94lanyu.github.io/images/台股訂閱版/儀表板.webp'}],
        // Structured Data - FAQPage
        ['script', {type: 'application/ld+json'}, `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "全自動股票管理表是什麼？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "全自動股票管理表是一套基於 Google Sheets 的股票管理工具。只需輸入交易紀錄，系統即可自動更新股票成交價、計算已實現與未實現損益、產生視覺化圖表，不需任何程式設計背景即可使用。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "全自動股票管理表支援台股自動更新股價嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "是的，開啟試算表後會自動更新台股最新成交價（非即時），並以最新成交價自動計算各項損益、更新圖表數據，無需手動操作。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "如何開始使用全自動股票管理表？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "只需 3 個步驟：步驟 1，填寫免費試用表單；步驟 2，在 Gmail 信箱收信，透過信件內連結複製屬於自己的試算表；步驟 3，啟用並授權即可開始使用。整個流程約 3 分鐘完成。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "全自動股票管理表是免費的嗎？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "提供免費試用方案，填寫申請表單後即可取得。完整功能版本（台股訂閱版）採訂閱制付費，另有美股、歐股、港股收費版本，以及依個人需求設計的客製版本。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "全自動股票管理表有哪些主要功能？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "主要功能包括：自動更新股票成交價、自動計算交易稅與手續費、計算已實現損益與未實現損益、多種視覺化圖表（持股比例、賺賠分析、產業分布）、每週五自動記錄投資走勢、管理多家券商並各別設定折讓手續費、觀察清單（含顏色提醒）、現金股利管理與存股計畫。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "全自動股票管理表支援哪些股市？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "主版本支援台股，另提供美股、歐股、港股的收費版本。也提供跨市場總覽功能，可將多個版本整合在一起，方便整體瀏覽不同市場的投資組合。"
                  }
                }
              ]
        }`],
    ],

    theme,

    extendsPage: (page) => {
        // T-09：依路徑設定 sitemap priority / changefreq
        const rel = page.filePathRelative;
        if (rel) {
            if (rel === 'README.md') {
                page.frontmatter.sitemap = { priority: 1.0, changefreq: 'weekly' };
            } else if (rel.startsWith('version/')) {
                page.frontmatter.sitemap = { priority: 0.9, changefreq: 'weekly' };
            } else if (rel.startsWith('guide/feature/')) {
                page.frontmatter.sitemap = { priority: 0.8, changefreq: 'monthly' };
            } else if (rel.startsWith('guide/')) {
                page.frontmatter.sitemap = { priority: 0.7, changefreq: 'monthly' };
            } else if (rel.startsWith('faq/')) {
                page.frontmatter.sitemap = { priority: 0.5, changefreq: 'yearly' };
            } else if (rel === 'LanYu.md') {
                page.frontmatter.sitemap = { priority: 0.4, changefreq: 'monthly' };
            }
        }

        // T-04：為所有 FAQ 頁面自動注入 QAPage Schema
        // 使用 page.title（從 H1 取得），而非 page.frontmatter.title（FAQ 頁沒有設此欄位）
        if (!page.filePathRelative?.startsWith('faq/')) return;
        const title = page.title;
        const description = page.frontmatter.description as string | undefined;
        if (!title) return;

        // 從頁面原始 Markdown 提取純文字作為答案，比僅用 description 更完整
        const rawContent = (page.content as string) || '';
        // 先去除 YAML frontmatter（--- ... ---）
        const contentBody = rawContent.replace(/^---[\s\S]*?---\s*\n?/, '');
        const answerText = contentBody
            .replace(/^#+\s+.*/gm, '')              // 移除標題列
            .replace(/!\[[^\]]*\]\([^)]*\)/g, '')   // 移除圖片
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 連結 → 純文字
            .replace(/\*\*([^*]+)\*\*/g, '$1')       // 移除粗體標記
            .replace(/==([^=]+)==/g, '$1')            // 移除 mark 標記
            .replace(/:::[\w\s]*\n/g, '')             // 移除 admonition 開標籤
            .replace(/:::/g, '')                       // 移除 admonition 結標籤
            .replace(/^[-*+]\s+/gm, '')               // 移除列表符號
            .replace(/`([^`]+)`/g, '$1')              // 移除 inline code 標記
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 600) || description || '';

        const existingHead = (page.frontmatter.head as unknown[] | undefined) || [];
        page.frontmatter.head = [
            ...existingHead,
            ['script', {type: 'application/ld+json'}, JSON.stringify({
                "@context": "https://schema.org",
                "@type": "QAPage",
                "mainEntity": {
                    "@type": "Question",
                    "name": title,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answerText
                    }
                }
            })],
        ];
    },

    // Enable it with pwa
    // shouldPrefetch: false,
});
