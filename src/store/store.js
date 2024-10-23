import { createStore } from 'vuex';

export default createStore({
  state: {
    isLightTheme: true,
  },
  mutations: {
    toggleTheme(state) {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});