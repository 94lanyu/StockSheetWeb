import { defineClientConfig } from '@vuepress/client';
import { onMounted, onUnmounted } from 'vue';
import MascotHome from './components/MascotHome.vue';
import FreeTrialButton from './components/FreeTrialButton.vue';
import SubscribeButton from './components/SubscribeButton.vue';
import Mascot404 from './components/Mascot404.vue';

export default defineClientConfig({
    layouts: {
        NotFound: Mascot404,
    },

    enhance({ app }) {
        app.component('MascotHome', MascotHome);
        // 注冊成全域元件，navbarLayout.end 才看得到
        app.component('FreeTrial', FreeTrialButton);
        app.component('Subscribe', SubscribeButton);
    },
    setup() {
        let sidebarHandler: (() => void) | null = null;

        onMounted(() => {
            // GTM noscript
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-MTHMCMQT';
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';
            const noscript = document.createElement('noscript');
            noscript.appendChild(iframe);
            document.body.insertBefore(noscript, document.body.firstChild);

            // Sidebar / footer 重疊修正：動態縮短 sidebar bottom 避免被 footer 蓋住
            sidebarHandler = () => {
                const sidebar = document.querySelector<HTMLElement>('.vp-sidebar');
                const footer = document.querySelector<HTMLElement>('.vp-footer-wrapper');
                if (!sidebar || !footer) return;
                const footerTop = footer.getBoundingClientRect().top;
                sidebar.style.bottom = footerTop < window.innerHeight
                    ? `${window.innerHeight - footerTop}px`
                    : '0';
            };

            window.addEventListener('scroll', sidebarHandler, { passive: true });
            window.addEventListener('resize', sidebarHandler, { passive: true });
            sidebarHandler();
        });

        onUnmounted(() => {
            if (sidebarHandler) {
                window.removeEventListener('scroll', sidebarHandler);
                window.removeEventListener('resize', sidebarHandler);
                sidebarHandler = null;
            }
        });
    },
});
