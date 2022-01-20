import { createApp } from 'vue';
import RootApp from './App.vue';
import router from './router';
import store from './store';
import { globalRegister } from '@/global';
import 'element-plus/theme-chalk/base.css';

const app = createApp(RootApp);

app.use(globalRegister).use(store).use(router).mount('#app');
