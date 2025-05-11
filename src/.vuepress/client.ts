import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
    onMounted() {
        // 建立 iframe 元素
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MTHMCMQT';
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';

        // 建立 noscript 並包住 iframe
        const noscript = document.createElement('noscript');
        noscript.appendChild(iframe);

        // 插入到 <body> 一開始的位置
        document.body.insertBefore(noscript, document.body.firstChild);
    },
});
