const user = {
  state: {
    roles: []
  },
  mutations: {
    SET_ROLES (state, roles) {
      state.roles = roles
    }
  },
  actions: {
    generateRoles ({ commit }, roles) {
      return new Promise(resolve => {
        commit('SET_ROLES', roles)
        resolve(roles)
      })
    }
  }
}

export default {
  namespaced: true,
  ...user
}
