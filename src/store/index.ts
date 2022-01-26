import { createStore } from 'vuex';
import { IRootState } from './interface';
import login from './login/login';

export default createStore<IRootState>({
  state: () => ({
    name: 'qmj'
  }),
  mutations: {},
  actions: {},
  modules: {
    login
  }
});
