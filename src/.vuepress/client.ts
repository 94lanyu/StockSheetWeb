import { defineClientConfig } from '@vuepress/client';
import { onMounted } from 'vue';
import MascotHome from './components/MascotHome.vue';

export default defineClientConfig({
    enhance({ app }) {
        app.component('MascotHome', MascotHome);
    },
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
