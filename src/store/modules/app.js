const app = {
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLL (state, val) {
      state.isCollapse = val
    }
  },
  actions: {
    generateColl ({ commit }, val) {
      commit('SET_COLL', val)
    }
  }
}

export default {
  namespaced: true,
  ...app
}
