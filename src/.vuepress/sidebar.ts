import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/guide/": [
        // {
        //     // 功能與分頁的順序透過 Front matter YAML 的參數 order: 2 來調整
        //     text: "指南",
        //     icon: "lightbulb",
        //     prefix: "",
        //     link: "guide/",
        //     children: "structure",
        // },
        {
            // 自訂功能與分頁的順序
            text: "指南",
            icon: "lightbulb",
            prefix: "",
            // link: "guide/",
            collapsible: true,
            children: [
                "",
                // needs
                // {
                //     text: "需求",
                //     icon: "flag",
                //     link: "needs",
                // },
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
            prefix: "version/",
            collapsible: true,
            children: "structure",
        },
        // {
        //     text: "案例",
        //     icon: "laptop-code",
        //     prefix: "demo/",
        //     link: "demo/",
        //     children: "structure",
        // },
        // "slides", // 幻燈片
    ],
    // "/guide/version/": [
    //     {
    //         text: "版本",
    //         icon: "file-pen",
    //         prefix: "",
    //         collapsible: false,
    //         children: [
    //             "",
    //             "台股訂閱版",
    //             "美股收費版",
    //             "客製化",
    //         ],
    //     },
    // ],
    // "/purchase/": [
    //     {
    //         text: "購買",
    //         children: ["", "台股", "美股"],
    //     },
    // ],
});
