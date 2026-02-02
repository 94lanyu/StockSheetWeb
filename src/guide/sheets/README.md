---
title: 分頁
icon: copy
prev: ../feature/切換資料範圍的區間
---

在 _台股訂閱版_ 有許多的分頁，這裡依照這些功能頁面分別介紹

- [儀表板](/guide/sheets/儀表板.md)
- [交易紀錄](/guide/sheets/交易紀錄.md)
- [現金股利](/guide/sheets/現金股利.md)
- [觀察](/guide/sheets/觀察.md)
- [持股與歷史](/guide/sheets/持股與歷史.md)
- [統計](/guide/sheets/統計.md)
- [券商與分類](/guide/sheets/券商與分類.md)
- [股票代號](/guide/sheets/股票代號.md)
- [自動記錄](/guide/sheets/自動記錄.md)
- [融資券](/guide/sheets/融資券.md)

雖然這些頁面是分開的，但其實不少頁面彼此是相互關聯的
其中儀表板是最複雜的，資料源來自多個分頁

```mermaid
---
title: 關聯舉例
---
flowchart TB
    subgraph 股票代號
    代號與股價
    end
    subgraph 交易紀錄
    支出與收入
    end
    subgraph 持股
    持股計算結果
    end
    subgraph 歷史
    歷史計算結果
    end
    subgraph 儀表板
    已實現損益
    未實現損益
    end
    持股 --> 未實現損益
    歷史 --> 已實現損益
    股票代號 --> 交易紀錄
    交易紀錄 --> 持股
    交易紀錄 --> 歷史
```
