import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      innerWidth: 1024
    }
  },
  computed: {
    ...mapGetters([
      'isDeviceWeb'
    ]),
    nameComponent () {
      return this.isDeviceWeb ? 'DesktopComponent' : 'MobileComponent'
    }
  }
}
