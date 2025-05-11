import { defineClientConfig } from '@vuepress/client';
import { onMounted, h } from 'vue';

export default defineClientConfig({
    setup() {
        onMounted(() => {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MTHMCMQT';
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';

            const noscript = document.createElement('noscript');
            noscript.appendChild(iframe);

            document.body.insertBefore(noscript, document.body.firstChild);
        });
    },
});
