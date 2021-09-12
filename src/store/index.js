import Vue from 'vue'
import Vuex from 'vuex'

import MainModule from "./modules/main/index"
import authModule from './modules/auth/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main: MainModule,
    auth: authModule,
  }
})