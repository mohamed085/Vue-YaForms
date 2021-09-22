import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      isAdmin: null,
      token: null,
      name: null,
      image: null,
    };
  },
  mutations,
  actions,
  getters
};