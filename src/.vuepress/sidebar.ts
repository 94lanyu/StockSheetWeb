import { sidebar } from "vuepress-theme-hope";

// 版本頁的絕對連結（供 /guide/ sidebar 跨區段引用）
const versionItems = [
    { text: "版本總覽",   link: "/version/" },
    { text: "台股訂閱版", link: "/version/台股訂閱版.html" },
    { text: "美股收費版", link: "/version/美股收費版.html" },
    { text: "客製化",     link: "/version/客製化.html" },
];

// 指南頁的絕對連結（供 /version/ sidebar 跨區段引用）
const guideItems = [
    { text: "指南", link: "/guide/" },
    {
        text: "功能",
        icon: "book",
        collapsible: true,
        children: [
            { text: "功能總覽",           link: "/guide/feature/" },
            { text: "多種視覺化圖表",     link: "/guide/feature/多種視覺化圖表.html" },
            { text: "自動更新股票成交價",  link: "/guide/feature/自動更新股票成交價.html" },
            { text: "自動化計算",          link: "/guide/feature/自動化計算.html" },
            { text: "自動記錄投資變化",    link: "/guide/feature/自動記錄投資變化.html" },
            { text: "輕鬆管理多家券商",    link: "/guide/feature/輕鬆管理多家券商.html" },
            { text: "一鍵更新",            link: "/guide/feature/一鍵更新.html" },
            { text: "多種百分比圖",        link: "/guide/feature/多種百分比圖.html" },
            { text: "切換資料範圍的區間",  link: "/guide/feature/切換資料範圍的區間.html" },
        ],
    },
    {
        text: "分頁",
        icon: "copy",
        collapsible: true,
        children: [
            { text: "分頁總覽",   link: "/guide/sheets/" },
            { text: "儀表板",     link: "/guide/sheets/儀表板.html" },
            { text: "交易紀錄",   link: "/guide/sheets/交易紀錄.html" },
            { text: "現金股利",   link: "/guide/sheets/現金股利.html" },
            { text: "觀察",       link: "/guide/sheets/觀察.html" },
            { text: "持股與歷史", link: "/guide/sheets/持股與歷史.html" },
            { text: "統計",       link: "/guide/sheets/統計.html" },
            { text: "券商與分類", link: "/guide/sheets/券商與分類.html" },
            { text: "股票代號",   link: "/guide/sheets/股票代號.html" },
            { text: "自動記錄",   link: "/guide/sheets/自動記錄.html" },
            { text: "融資券",     link: "/guide/sheets/融資券.html" },
        ],
    },
];

export default sidebar({
    "/guide/": [
        {
            text: "指南",
            icon: "lightbulb",
            prefix: "",
            collapsible: true,
            children: [
                "",
                {
                    text: "功能",
                    icon: "book",
                    prefix: "feature/",
                    collapsible: true,
                    children: [
                        "",
                        "多種視覺化圖表",
                        "自動更新股票成交價",
                        "自動化計算",
                        "自動記錄投資變化",
                        "輕鬆管理多家券商",
                        "一鍵更新",
                        "多種百分比圖",
                        "切換資料範圍的區間",
                    ],
                },
                {
                    text: "分頁",
                    icon: "copy",
                    prefix: "sheets/",
                    collapsible: true,
                    children: [
                        "",
                        "儀表板",
                        "交易紀錄",
                        "現金股利",
                        "觀察",
                        "持股與歷史",
                        "統計",
                        "券商與分類",
                        "股票代號",
                        "自動記錄",
                        "融資券",
                    ],
                },
            ],
        },
        {
            text: "版本",
            icon: "file-pen",
            collapsible: true,
            children: versionItems,
        },
    ],
    "/version/": [
        {
            text: "指南",
            icon: "lightbulb",
            collapsible: true,
            children: guideItems,
        },
        {
            text: "版本",
            icon: "file-pen",
            prefix: "",
            collapsible: true,
            children: "structure",
        },
    ],
});
