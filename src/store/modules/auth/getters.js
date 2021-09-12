export default {
  isAdmin(state) {
    return state.isAdmin;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    if (state.token) {
      return true;
    } else {
      return false;
    }
  }
};