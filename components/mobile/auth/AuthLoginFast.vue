<template>
  <div class="w-full flex flex-col items-center">
    <div class="my-3 w-full text-[#828282] text-sm flex justify-between">
      <svg-icon name="icon-cross-bar"/>
      <span v-text="'Đăng nhập nhanh'"/>
      <svg-icon name="icon-cross-bar"/>
    </div>
    <div class="w-full flex my-3 justify-center">
      <div
        class="w-10 h-10 mr-4"
      >
        <svg-icon
          name="icon-login-facebook"
          class="w-full h-full"
        />
      </div>
      <div
        class="w-10 h-10"
      >
        <svg-icon
          name="icon-login-google"
          class="w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { keyStores } from '~/configs/common'
import SvgIcon from "~/components/common/items/SvgIcon";

export default {
  components: {
    SvgIcon
  },
  //
  methods: {
    // onLoginGoogle () {
    //   localStorage.setItem(keyStores.redirectAfterLogin, this.getCurrentRouterObj())
    //   this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
    // },
    getCurrentRouterObj () {
      const routerObj = {
        name: this.$route.name,
        params: this.$route.params,
        query: this.$route.query
      }
      return JSON.stringify(routerObj)
    },
    // onLoginFacebook () {
    //   localStorage.setItem(keyStores.redirectAfterLogin, this.getCurrentRouterObj())
    //   this.$auth.loginWith('facebook', {
    //     params: {}
    //   })
    // }
  }
}
</script>
