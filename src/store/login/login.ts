import { Module } from 'vuex';
import { ILoginState } from './interface';
import { IRootState } from '../interface';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    };
  },
  getters: {},
  mutations: {},
  actions: {
    accountLogAction({ commit }, payload: any) {
      console.log('执行登录', payload);
    }
  }
};

export default loginModule;
