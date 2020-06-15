import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'
import tagsbar from './modules/tagsbar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters,
  mutations: {

  },
  actions: {

  },
  modules: {
    permission,
    user,
    app,
    tagsbar
  }
})
