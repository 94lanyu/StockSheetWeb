import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://94lanyu.github.io",

    author: {
        name: "懶魚",
        url: "",
    },

    // logo: "/logo.svg",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

    // navbar
    navbar,

    // sidebar
    sidebar,

    // footer: "默認頁尾",

    // displayFooter: true,

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    // 添加自定義類型的本地化配置
    blogLocales: {
        fqa: "常見問題",
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
                    key: "fqa",
                    filter: ({filePathRelative}) => 
                        filePathRelative ? filePathRelative.startsWith("fqa/") : false,
                    path: "/fqa/",
                    layout: "BlogType",
                    frontmatter: () => ({
                        title: "常見問題",
                        sidebar: true
                    }),
                },
            ]
        },

        // 啟用SEO
        seo: {
            customHead: head => {
                head.push(
                    [
                        "script",
                        {},
                        `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-MTHMCMQT');
                        `,
                    ]
                );
            }
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
