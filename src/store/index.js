import { createStore } from "vuex";

export default createStore({
  state: {
    page: "HomeMenu",
    isAuthenticated: false,
  },
  mutations: {
    setPage(state, payload) {
      state.page = payload;
    },
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
  },
  getters: {
    paginaAtual: (state) => state.page,
    isAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    login({ commit }) {
      // Lógica de login
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      // Lógica de logout
      commit('setAuthentication', false);
    },
  },
});
