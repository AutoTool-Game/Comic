<template>
  <div class="w-full">
    <div class="w-full">
      <input-auth
        icon="icon-code-qr"
        placeholder="Mã xác thực"
        :value="codeOtp"
        class="!mt-0"
        @change="changeCodeOtp"
      />
      <input-auth
        icon="icon-password"
        placeholder="Mật khẩu"
        type="password"
        :max-length="20"
        :value="password"
        @change="changePassword"
      />
      <input-auth
        icon="icon-password"
        placeholder="Nhập lại mật khẩu"
        type="password"
        :max-length="20"
        :value="passwordAgain"
        @change="changePasswordAgain"
      />
      <div class="flex justify-center mt-4 text-default">
        Bạn chưa nhận được mã OTP?
        <span
          class="mx-1 text-orange-573 font-bold cursor-pointer"
          @click="resentOTP"
          v-text="'Gửi lại mã OTP'"
        />
      </div>
    </div>
    <label-error-auth :message-error="messageError" />
  </div>
</template>

<script>
export default {
  components: {
    LabelErrorAuth: () => import('~/components/common/items/LabelErrorAuth'),
    InputAuth: () => import('~/components/common/items/InputAuth')
  },
  props: {
    fromData: {
      type: Object,
      default: () => {
        return {
          codeOtp: '',
          password: '',
          passwordAgain: ''
        }
      }
    },
    messageError: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      codeOtp: '',
      passwordAgain: '',
      password: ''
    }
  },
  methods: {
    resentOTP () {
      //
      this.codeOtp = ''
      this.$emit('resentOTP')
    },
    changeCodeOtp (codeOtp) {
      this.codeOtp = codeOtp
    },
    changePassword (password) {
      this.password = password
    },
    changePasswordAgain (passwordAgain) {
      this.passwordAgain = passwordAgain
    }
  }
}
</script>
