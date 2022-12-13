export default {
  showLoading ({ commit }, show = true) {
    commit('SHOW_LOADING', show)
  },
  changePropertiesDialog ({ commit }, payload) {
    commit('CHANGE_PROPERTIES_DIALOG', payload)
  },
  changeAuthType ({ commit }, type) {
    commit('CHANGE_AUTH_TYPE', type)
  },
  toggleSidebar ({ commit }, value = -1) {
    commit('TOGGLE_SIDEBAR', value)
  }
}
