---
title: 指南
icon: lightbulb
description: 【全自動股票管理表】是一份自動化的試算表(無須手動操作，試算表會自動更新資料)，只要將交易正確的紀錄下來，就能讓試算表整理資料並以各種圖表或數據呈現在你的眼前
next: feature/
---

## 簡介

這是一份==自動化==的試算表 ( 無須手動操作，試算表會自動更新資料 )
只要將交易正確的紀錄下來，就能讓試算表協助整理資料並以各種直覺的圖表或數據呈現在你的眼前拉~

::: center
【 _台股訂閱版_ | 全自動股票管理表 】
:::
![](/images/台股訂閱版/儀表板.gif)

::: warning 因為是 Google 的雲端試算表，因此必須綁定 Google 帳號才能使用
:::

## 免費試用

_台股訂閱版_ 提供三個月的免費試用時間，喜歡再訂閱！

## 簡單 3 步驟立即使用

1. [填寫免費試用表單(點我) ](https://forms.gle/Qfh7kG7sCcBeNbcg7)
2. 在 Gmail 信箱收信，透過信件內連結複製屬於自己的試算表 → 建立副本 ( 複製一份自己的 )

    ::: details 信件示意圖
    ![](/images/啟用步驟/試用表單信件.jpg)
    :::

3. 啟用並授權

    ::: tip
    參考 [開始使用 > 第一次使用 > 1. 啟用並授權](#第一次使用)
    :::


## 開始使用

#### 第一次使用

1. 啟用並授權

    ::: details 啟用示意圖
    1. 在試算表內點選【儀表版】分頁的按鈕 ➡ <Badge>更新儀表板</Badge>
        ![](/images/啟用步驟/啟用步驟_0更新儀表板.jpg)
    2. 需要授權 ➡ 點選 __「確認」__
        ![](/images/啟用步驟/啟用步驟_1需要授權.jpg =300x)
    3. 選擇帳戶 ➡ 選擇自己的 Google 帳戶
        ![](/images/啟用步驟/啟用步驟_2選擇自己的Google帳號.jpg =300x)
    4. 未經 Google 驗證[^first] ➡ 點選 __「進階」__ ➡ 點選 __「前往AppScript | 全自動股票管理表(不安全)」__
        ![](/images/啟用步驟/啟用步驟_3選擇進階.jpg =330x) ![](/images/啟用步驟/啟用步驟_4前往.jpg =330x)
    5. 存取您的 Google 帳戶 ➡ 點選按鈕 <Badge type="tip">允許</Badge>
        ![](/images/啟用步驟/啟用步驟_5允許.jpg =x400)
    6. 再次點選【儀表版】分頁的按鈕 ➡ <Badge>更新儀表板</Badge> 並顯示「==指令碼 執行完成==」字樣
        ![](/images/啟用步驟/啟用步驟_7指令碼執行完成.jpg)
    7. 試算表 ➡ 顯示「啟用成功」
        ![](/images/啟用步驟/啟用步驟_6成功.jpg =300x)
    :::

   <iframe src="https://www.youtube.com/embed/e2Xh9q0CgO8?si=8wQgyNFPTdXRRifP" title="啟用示範影片" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2. 第一次需要設定券商的手續費折數優惠以及進位方式

    ::: info 因為每間券商的手續費優惠有所不同，這些差異也會影響交易成本
    :::

    ::: tip 資金的紀錄
    參考 [頁面 > 券商與分類](sheets/券商與分類.md)
    :::


#### 紀錄每一次交易

::: tip 開始記錄
參考 [頁面 > 交易紀錄](sheets/交易紀錄.md)
:::

## 訂閱

> 訂閱即可延長使用期限。使用期限快要到期時，會寄送提醒的通知信件

- [台股訂閱版](https://stockportfolio.cashier.ecpay.com.tw/product/000000000402451)
- [商城連結](https://stockportfolio.cashier.ecpay.com.tw/)
    ::: info 商城有所有版本
    :::

### 付款方式

<!-- @include: include/付款方式.md -->

### 付款完成

除了==續訂閱==之外，付款完成待懶魚確定訂單後，會發送通知信件到指定的 Gmail 信箱
::: tip 信件內會有複製用的連結 ( 使用連結建立副本 )
複製之後的步驟可參考[開始使用](#開始使用)
:::

### 台股訂閱版費用

<!-- @include: include/訂閱費用.md -->

## 推薦獎勵

- 可藉由推薦親友使用而獲得額外的訂閱月數
- 每一位訂閱者可於 [推薦人登錄網址](https://script.google.com/macros/s/AKfycbzBgRgWiEL7ylt_IFzUcGVB0s0wxL7igBb6U8iGVMqshGiH2xoyid2G7Nz4iQRrU2sE/exec) 登錄並填寫一位推薦人
- 推薦人可獲得 3 個月的訂閱月數 ( 等值 600 元 )
- 訂閱者可獲得 1 個月的訂閱月數

::: warning 注意事項
- 每位訂閱者僅可登錄一位推薦人
- 登錄成功後將無法更改
- 登錄限訂閱者==首次訂閱成功的 10 天之內==
:::

#### 註釋

[^first]: 未經 Google 驗證

    ::: note 為了使試算表能更加方便、自動化，有寫入一些程式碼做輔助

    ex.「抓取現價」「一鍵更新」「收費版的自動記錄並圖表化」等
    
    這些功能會需要相應的授權才能使用，若不授權基本上沒辦法使用

    此範本已有眾多的人在使用，程式碼也有經過眾人的建議和檢核請放心使用

    ::: danger 如果仍有疑慮的話，請勿使用此範本
    :::