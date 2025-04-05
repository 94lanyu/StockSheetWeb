import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    bundler: viteBundler(),
    base: "/",
    lang: "zh-TW",
    title: "全自動股票管理表",
    description: "自動化股票管理excel(Google試算表)，免下載，複製立即可用。免費試用、簡單股票記帳、股票管理表、自動更新股價、股票儀表版",

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
