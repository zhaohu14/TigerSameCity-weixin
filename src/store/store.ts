import { createStore } from 'vuex';

interface State {
  count: number;
  userInfo: object,
  isLogin: boolean
}

const store = createStore({
  state(): State {
    return {
      count: 0,
      userInfo: {
        userName: ''
      },
      isLogin: false
    };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
    updataIsLogin(state: State, b: boolean) {
      state.isLogin = b
    },
    updataUserInfo(state: State, userInfo: object) {
      state.userInfo = userInfo
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  getters: {
    count(state: State) {
      return state.count;
    },
    userInfo(state: State) {
      return state.userInfo
    },
    isLogin(state: State) {
      return state.isLogin
    }
  },
});

export default store;
