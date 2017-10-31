import { SET_LOADING } from "../mutation_types";

// initial state
const state = {
  isLoading: false,
};

// getters
const getters = {
  getLoading() {
    return state.isLoading;
  },
};

// actions
const actions = {
  setLoading({ commit }, bool) {
    commit(SET_LOADING, bool);
  },
};

// mutations
const mutations = {
  [SET_LOADING](state, bool) {
    state.isLoading = bool;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
