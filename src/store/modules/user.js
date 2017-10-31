import { SET_USER } from "../mutation_types";

const state = {
  user: "",
};

const getters = {
  getUser() {
    return state.user;
  },
};

const actions = {
  setUser({ commit }, user) {
    commit(SET_USER, user);
  },
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
