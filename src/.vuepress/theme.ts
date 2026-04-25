import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://94lanyu.github.io",

    author: {
        name: "懶魚",
        url: "https://94lanyu.github.io/LanYu.html",
    },

    logo: "/logo.webp",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

    // 關掉 hope 預設的 copyright 列（下方自訂 footer 已有版權資訊，避免重複）
    copyright: "",

    // navbar
    navbar,

    // nav 配置：logo + links 靠左、右側放 FreeTrial / Outlook / Search
    // 對齊 mascot 設計（logo 旁邊緊跟著 links，最右側才是按鈕群）
    navbarLayout: {
        start: ["Brand", "Links"],
        center: [],
        end: ["Language", "Repo", "FreeTrial", "Subscribe", "Outlook", "Search"],
    },

    // sidebar
    sidebar,

    footer: `
      <div class="mf-wrap">
        <div class="mf-col mf-brand">
          <div class="mf-logo">
            <img src="/mascot/logo.webp" alt="懶魚" />
            <b>懶魚 LanYu</b>
          </div>
          <div class="mf-tag">只需做好交易紀錄，<br />其餘的都幫你搞定 ～ ✨</div>
        </div>
        <div class="mf-col">
          <h4>產品</h4>
          <a href="/guide/version/台股訂閱版.html">台股訂閱版</a>
          <a href="/guide/version/美股收費版.html">美股收費版</a>
          <a href="/guide/version/客製化.html">客製化版本</a>
        </div>
        <div class="mf-col">
          <h4>資源</h4>
          <a href="/guide/">使用指南</a>
          <a href="/faq/">常見問題</a>
          <a href="/LanYu.html">懶魚の介紹</a>
        </div>
        <div class="mf-col">
          <h4>聯絡</h4>
          <a href="mailto:94lanyu@gmail.com">94lanyu@gmail.com</a>
          <a href="https://www.facebook.com/kevin.lazy.fish" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
      <address class="mf-legal">
        <span>© 2026 懶魚 LanYu · 全自動股票管理表</span>
        <span>作者：懶魚&nbsp;&nbsp;Email：<a href="mailto:94lanyu@gmail.com">94lanyu@gmail.com</a></span>
      </address>
    `,

    displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    print: false,

    metaLocales: {
        prev: "上一篇",
        next: "下一篇",
        toc: "本頁目錄",
        category: "分類",
        tag: "標籤",
    },

    paginationLocales: {
        prev: "上一頁",
        next: "下一頁",
        navigate: "跳轉到",
        action: "前往",
        errorText: "請輸入 1 到 $page 之間的頁碼！",
    },

    // 添加自定義類型的本地化配置
    blogLocales: {
        article: "文章",
        articleList: "文章列表",
        category: "分類",
        tag: "標籤",
        timeline: "時間軸",
        timelineTitle: "昨日不在",
        all: "全部",
        intro: "個人介紹",
        star: "星標",
        empty: "$text 為空",
        faq: "常見問題",
    },

    blog: {
        name: '懶魚',
        avatar: "/images/懶魚大頭貼.jpg",
        // roundAvatar: true, // 頭像裁剪成圓形
        description: '懶惰是我前進的動力', // 介紹自己的一句話 or 座右銘
        intro: '/Contact', // 個人介紹頁面的 path
        medias: {Gmail: 'mailto:94lanyu@gmail.com', Facebook: 'https://www.facebook.com/kevin.lazy.fish'},
        timeline: '由此上而下',
    },

    plugins: {
        readingTime: false,
        // You should generate and use your own comment service
        // comment: {
        //   provider: "Giscus",
        //   repo: "vuepress-theme-hope/giscus-discussions",
        //   repoId: "R_kgDOG_Pt2A",
        //   category: "Announcements",
        //   categoryId: "DIC_kwDOG_Pt2M4COD69",
        // },
        blog: { // 文章列表
            // 指定首頁和分類頁面的路徑和布局
            hotReload: true,  // 在開發模式下是否啟用熱重載
            
            // 排除 demo 目錄下的所有文件
            filter: ({ filePathRelative }) => {
                if (!filePathRelative) return false;
                // 排除 demo 目錄下的所有文件
                return !filePathRelative.startsWith("demo/");
            },
            
            // 使用 type 配置定義常見問題類型
            type: [
                {
                    key: "faq",
                    filter: ({filePathRelative}) => 
                        filePathRelative ? filePathRelative.startsWith("faq/") : false,
                    path: "/faq/",
                    layout: "BlogType",
                    frontmatter: () => ({
                        title: "常見問題",
                        description: "全自動股票管理表常見問題解答，涵蓋股價更新、損益計算、交易紀錄填寫、儀表板操作等 30+ 篇實用教學。",
                        sidebar: true,
                        sitemap: { priority: 0.7, changefreq: 'weekly' },
                    }),
                },
            ]
        },

        components: {
            components: [
                "VidStack"
            ]
        },

        // 啟用SEO插件 (GTM 已在 config.ts 配置)
        seo: {
            // config.title 改為 "懶魚" 以達到 "xxx | 懶魚" 的 title 格式，
            // 但 og:site_name 需保持品牌名稱
            ogp: (ogp) => ({
                ...ogp,
                'og:site_name': '全自動股票管理表',
            }),
        },

        // 啟用sitemap
        sitemap: {
            excludePaths: [
                "/404.html",
                "/demo/",
                "/demo/disable.html",
                "/demo/encrypt.html",
                "/demo/markdown.html",
                "/demo/page.html",
                "/demo/slides.html"
            ],
        },

        // 啟用icon
        icon: {
            assets: "fontawesome-with-brands",
        },
    },

    // markdown增強功能
    markdown: {
        // 啟用的功能
        align: true, // 啟用自定義對齊
        attrs: true, // 啟用屬性支持
        chartjs: true, // 啟用圖表支持 (原來的chart改為chartjs)
        codeTabs: true, // 啟用代碼分組支持 (原來的codetabs改為codeTabs)
        component: true, // 在 Markdown 中使用組件
        demo: true, // 代碼演示
        // echarts: true, // ECharts 圖表，ECharts 功能更強大但也更重，而 Chart.js 更輕量。根據您的數據可視化需求，您可以選擇其中一個。
        figure: true, // 圖片 Figure 支持
        // flowchart: true, // 流程圖支持，這兩個庫都可以用於創建流程圖，您可能不需要同時使用兩者。Mermaid 功能更豐富，可以創建多種類型的圖表。
        gfm: true, // GFM 支持
        imgLazyload: true, // 圖片懶加載
        imgMark: true, // 圖片標記
        imgSize: true, // 圖片尺寸
        include: true, // 導入文件支持
        math: true, // 數學公式支持 (原來的katex改為math)
        mark: true, // 標記支持
        mermaid: true, // Mermaid 圖表
        playground: {
            presets: ["ts", "vue"],
        }, // 交互演示
        // presentation: {
        //     plugins: ["highlight", "math", "search", "notes", "zoom"],
        // }, // 幻燈片
        stylize: [
            {
                matcher: "台股訂閱版",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: { type:"tip", text: "台股訂閱版"},
                            content: "",
                        };
                },
            },
            {
                matcher: "Recommended",
                replacer: ({tag}) => {
                    if (tag === "em")
                        return {
                            tag: "Badge",
                            attrs: {type: "tip"},
                            content: "Recommended",
                        };
                },
            },
        ], // 自定義標記
        sub: true, // 下標
        sup: true, // 上標
        tabs: true, // 標籤頁
        vPre: true, // v-pre 容器
        vuePlayground: true, // Vue 交互演示
    },
});
