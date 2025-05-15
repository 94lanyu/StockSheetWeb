---
home: true
icon: home
title: 全自動股票管理表 - 股票記帳、投資組合管理與自動更新
description: 自動股票管理表，輕鬆記錄股票交易、管理投資組合、即時股價更新，提供免費試用。讓你的投資管理變得更簡單，立即體驗！
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
    background-attachment: fixed
heroImage: /images/台股訂閱版/儀表板.gif
heroText: 全自動股票管理表 | 懶魚程式
heroFullScreen: true
tagline: 只需做好交易紀錄，其餘的都幫你搞定～✨
actions:
    -   text: 🧭 免費試用
        link: https://forms.gle/RsfJdnReB1pzahQM6
        type: primary
    -   text: 💡 使用指南
        link: /guide/
        type: secondary
    -   text: 🪀 試算表預覽
        link: https://docs.google.com/spreadsheets/d/1oZ4oUaYMRnmP2WEBYk84qAB6HXxxgZ4Qripa3J69Aa0/edit?usp=sharing
    -   text: 🛍️ 訂閱
        link: https://stockportfolio.cashier.ecpay.com.tw/product/000000000402451


highlights:
    -   header: 簡單 3 步驟立即使用
        description: 3 分鐘即可建立屬於自己的股票管理試算表
        image: /assets/image/box.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
        highlights:
#            -   title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
            -   title: 步驟1. 填寫免費試用表單
                link: https://docs.google.com/spreadsheets/d/
            -   title: 步驟2. 在 Gmail 信箱收信，透過信件內連結複製屬於自己的試算表
            -   title: 步驟3. 啟用並授權

    -   header: 讓這些功能替你輕鬆管理股票
        #        image: /assets/image/markdown.svg
        image: https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
        bgImageStyle:
            background-repeat: repeat
            background-size: initial
        features:
            -   title: 自動更新股票成交價
                icon: cloud-arrow-down
                details: 開啟試算表後會自動更新股票最新成交價(非即時)，並以新的成交價做各種後續計算
                link: guide/feature/自動更新股票成交價.md
                
            -   title: 多種視覺化圖表
                icon: chart-column
                details: 輕鬆享受多種圖表化的數據，持股比例、賺賠一目了然，且無須動手，當股票價格有變動時圖表會自動更新
                link: guide/feature/多種視覺化圖表.md
                
            -   title: 自動化計算
                icon: calculator
                details: 自動計算多項數據，交易成本(交易稅、手續費)、各項報酬率(已實現損益、未實現損益)等等
                link: guide/feature/自動化計算.md
                
            -   title: 自動記錄投資變化
                icon: chart-line
                details: 每周五盤後，會將當下的成本、市值、未實現損益等記錄下來。當時間拉長，可以觀察到自己投資的曲線變化！
                link: guide/feature/自動記錄投資變化.md
                
            -   title: 輕鬆管理多家券商
                icon: landmark
                details: 靈活的設計，可以同時管理不同的券商並依照券商不同的折讓手續費各別設定，還能看各券商.分類的占比圖
                link: guide/feature/輕鬆管理多家券商.md
                
            -   title: 一鍵更新
                icon: arrow-pointer
                details: 操作簡單，每次紀錄完新的交易資料後，只需按一次「更新儀表板」按鈕，便可更新各項數據及圖表
                link: guide/feature/一鍵更新.md
                
            -   title: 多種百分比圖
                icon: chart-pie
                details: 持股 / 產業 / 現金 / 券商 or 分類
                link: guide/feature/多種百分比圖.md
                
            -   title: 切換資料範圍的區間
                icon: timeline
                details: 可設定儀表板的資料範圍區間，方便查詢過去的績效損益
                link: guide/feature/切換資料範圍的區間.md

    -   header: 頁面
        description: 強大的功能與多個分頁能滿足多種需求
        image: /assets/image/layout.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
        highlights:
            -   title: 儀表板
                icon: object-group
                details: 股票管理表的主頁，包含多種圖表及數據，而且全都自動更新
                link: guide/sheets/儀表板.md

            -   title: 交易紀錄
                icon: clipboard-list
                details: 紀錄的主要頁面，分為手動輸入區與自動生成區
                link: guide/sheets/交易紀錄.md

            -   title: 現金股利
                icon: money-bill
                details: 包含現金股利的紀錄與報酬率的計算，設有存股計畫的區塊
                link: guide/sheets/現金股利.md

            -   title: 觀察
                icon: person-chalkboard
                details: 可將觀察中的股票名單記錄在這裡，價格會有醒目的顏色提醒
                link: guide/sheets/觀察.md

            -   title: 更多
                icon: ellipsis
                details: 持股與歷史、統計、券商與分類、股票代號、自動記錄
                link: guide/sheets/

    -   header: 新功能
        image: /assets/image/features.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
        features:
            -   title: 更全面的儀表板
                icon: desktop
                details: 新增許多數字面板與比較值，使用上更加直覺
#                link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

            -   title: 圖表的下拉選單
                icon: caret-down
                details: 圖表多了靈活切換數據的選項，可依自己需求選擇顯示的項目 / 順序 / 數量
#                link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

            -   title: 資金 / 現金比例
                icon: money-bill-trend-up
                details: 投入資金與現金的比例，也將現金新增至自動記錄的走勢圖，方便觀察
#                link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

            -   title: 新的取價結構
                icon: search
                details: 新設計的架構可將網路取價的失敗機率降至最低
#                link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

            -   title: 更精準的計算
                icon: dollar-sign
                details: 新增 1 元價差的設定
#                link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

            -   title: 推薦機制 ( 額外 )
                icon: users
                details: 可藉由推薦親友使用，獲得推薦獎勵的訂閱月數，延長使用期限
#                link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

    -   header: 國際版
        image: /assets/image/blog.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
        highlights:
            -   title: 跨市場總覽
                icon: globe
                details: 同步多個國際版，將其整合在一起，方便整體瀏覽
                link: guide/version/客製化.md#跨市場總覽

            -   title: 美股收費版
                icon: earth-america
                details: 新增美金匯率，以美金為計算基準，由美股網站取得股票價位
                link: guide/version/美股收費版.md#

            -   title: 歐股收費版
                icon: earth-europe
                details: 新增歐元匯率，以歐元為計算基準，由歐股網站取得股票價位
                link: guide/version/客製化.md#歐股版

            -   title: 港股收費版
                icon: earth-asia
                details: 新增港幣匯率，以港幣計算基準，由港股網站取得股票價位
                link: guide/version/客製化.md#港股版

    -   header: 客製化
        description: 依照客戶需求，提供建議並為其設計的個人版本
        image: /assets/image/advanced.svg
        bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
        bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
        highlights:
            -   title: 客製定期定額
                icon: clock
                details: 為定期定額做一個分類，有專屬圖表和表格可以看累積獲利(含股利)
                link: https://docs.google.com/spreadsheets/d/18TDyDReB4vEgJgcDCWeA71RysxmdheVs2fnc7iCXxpM/edit?usp=drive_link

            -   title: 客製融資版
                icon: hand-holding-dollar
                details: 新增融資分頁，專門計算融資券的投資績效
                link: https://docs.google.com/spreadsheets/d/1xchDAPaoqISGEw6uwcGmrZcVukjBy4EJXaxI9pk1Q34/edit?usp=drive_link

            -   title: 客製權證版
                icon: money-check-dollar
                details: 新增權證代號，可手動輸入權證價格並自動帶入計算
                link: https://docs.google.com/spreadsheets/d/1uIzjgipsAJl9ZEB5jUdOiloLhx0bZAXobWcNnhS5vok/edit?usp=drive_link

            -   title: 美股客製版
                icon: earth-america
                details: 新增換匯的功能頁面，紀錄美金的交易歷程
                link: https://docs.google.com/spreadsheets/d/1EBKH4YmPUx2S4DkFYjbA7vO6vndHGUhzIisQV2ZuSPA/edit?usp=drive_link

copyright: false
#footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope
---
