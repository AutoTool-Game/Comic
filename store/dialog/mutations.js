export default {
  SHOW_LOADING (state, show) {
    state.loading = show
  },
  CHANGE_PROPERTIES_DIALOG (state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      state[key] = value
    })
  },
  CHANGE_AUTH_TYPE (state, type) {
    state.authType = type
  },
  TOGGLE_SIDEBAR (state, value) {
    if (value === -1) {
      state.isShowSidebar = !state.isShowSidebar
    } else {
      state.isShowSidebar = value
    }
  }
}
