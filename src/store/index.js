import { createStore } from "vuex";

export default createStore({
  state: {
    page: "HomeMenu",
  },
  mutations: {
    setPage(state, payload) {
      state.page = payload;
    },
  },
  getters: {
    paginaAtual: (state) => state.page,
  },
});
