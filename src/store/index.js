import Vue from 'vue'
import Vuex from 'vuex'

import MainModule from "./modules/main/index"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main: MainModule
  }
})
