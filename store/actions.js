export default {
  changeDevice ({ commit }, value) {
    commit('CHANGE_DEVICE', value)
  },
  changeProperties ({ commit }, payload) {
    commit('CHANGE_PROPERTIES', payload)
  },
  onPageMounted ({ commit }) {
    commit('ON_PAGE_MOUNTED')
  }
}
