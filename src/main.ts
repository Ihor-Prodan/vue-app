import { createApp } from 'vue';
import './assets/input.css';

import App from './App.vue';
import router from './router';
import pinia from './pinia/pinia';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

configure({
  generateMessage: localize({ en: {} }),
  validateOnInput: true,
});

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
