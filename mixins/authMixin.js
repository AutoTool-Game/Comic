import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      messageError: '',
      isLoading: false
    }
  },
  mounted () {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    changeUsername(username) {
      this.username = username
    },
    changePassword(password) {
      this.password = password
    },
    handleKeydown() {
      //
    },
    ...mapActions('dialog', {
      changePropertiesDialog: 'changePropertiesDialog',
      changeAuthType: 'changeAuthType'
    }),
    ...mapActions({
      changeAccountInfo: 'changeAccountInfo',
      changeOwnerPackage: 'changeOwnerPackage',
    }),
    closeDialogAuth() {
      this.changePropertiesDialog({
        isShowDialogAuth: false,
        isShowDialog: false
      })
    },
  }
}
