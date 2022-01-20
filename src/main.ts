import { createApp } from 'vue';
import RootApp from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/theme-chalk/base.css';
import 'normalize.css';
import './assets/css/index.less';

import { globalRegister } from '@/global';

const app = createApp(RootApp);

app.use(globalRegister).use(store).use(router).mount('#app');
