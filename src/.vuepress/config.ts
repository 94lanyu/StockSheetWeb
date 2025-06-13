import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    bundler: viteBundler(),
    base: "/",
    lang: "zh-TW",
    title: "全自動股票管理表",
    description: "自動化股票管理excel(Google試算表)，免下載，複製立即可用。免費試用、簡單股票記帳、股票管理表、自動更新股價、股票儀表版",

    head: [
        // 網站圖標 favicon.ico
        ['link', {rel: 'icon', href: '/logo.ico'}],
        // Google Console search html 擁有全驗證
        // ['meta', {name: 'google-site-verification', content: 'AdvLMReW9RFoWDOXEAm_koqL82b1ZwwKxlgrhaQtRnQ'}],
        // Google Tag Manager 埋 code
        ['script', {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTHMCMQT');`]
    ],

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
