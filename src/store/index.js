import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Lemmy Kilmiester' },
    categories: ['Heavy Metal', 'Rock n Roll', 'Thrash Metal', 'Hard Rock']
  },
  mutations: {},
  actions: {},
  modules: {},
});
