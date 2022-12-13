export default {
  CHANGE_DEVICE (state, value) {
    state.isDeviceWeb = value
  },
  CHANGE_PROPERTIES (state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      state[key] = value
    })
  },
  ON_PAGE_MOUNTED (state) {
    state.isMounted = true
  }
}
