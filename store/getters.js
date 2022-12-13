export default {
  //
  isDeviceWeb: state => state.isDeviceWeb,
  layoutName: state => state.isDeviceWeb ? 'layout-web' : 'layout-wap',
}
