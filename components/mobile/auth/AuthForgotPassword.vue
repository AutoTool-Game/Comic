<template>
  <div class="w-full">
    <div class="w-full">
      <auth-input-account
        v-if="step===stepTypes.INPUT_ACCOUNT"
        :account="account"
        :message-error="messageError"
        @change="changeAccount"
      />
      <auth-select-method-otp
        v-if="step===stepTypes.SELECT_METHOD_OTP"
        :type-input="typeInput"
        :message-error="messageError"
        :info-account-otp="infoAccountOtp"
        @changeTypeInput="changeTypeInput"
      />
      <auth-confirm-otp-password
        v-if="step===stepTypes.CONFIRM_OTP_PASSWORD"
        :message-error="messageError"
        :form-data="fromData"
        @change="changeDataConfirm"
      />
      <btn-auth
        :is-disable="isDisabledSubmit"
        :is-loading="isLoading"
        :label="labelButton"
        class="submit-register rounded-full p-2 w-full"
      />
    </div>
  </div>
</template>

<script>
import authMixin from '~/mixins/authMixin'
import BtnAuth from "~/components/common/items/BtnAuth";
export default {
  components: {
    AuthInputAccount: () => import('~/components/mobile/auth/AuthInputAccount'),
    AuthConfirmOtpPassword: () => import('~/components/mobile/auth/AuthConfirmOtpPassword'),
    AuthSelectMethodOtp: () => import('~/components/mobile/auth/AuthSelectMethodOtp'),
    BtnAuth
  },
  mixins: [authMixin],
  data () {
    return {
      account: '',
      step: 'INPUT_ACCOUNT', // INPUT_ACCOUNT,SELECT_METHOD_OTP,CONFIRM_OTP_PASSWORD
      typeInput: 1,
      infoAccountOtp: {
        AccountId: 13733189,
        FullName: 'Vi Nguyen',
        Email: 'vinguyen.dev@gmail.com',
        Mobile: '*******611',
        typeInput: '1',
        Social: null
      },
      stepTypes: {
        INPUT_ACCOUNT: 'INPUT_ACCOUNT',
        SELECT_METHOD_OTP: 'SELECT_METHOD_OTP',
        CONFIRM_OTP_PASSWORD: 'CONFIRM_OTP_PASSWORD'
      },
      fromData: {
        codeOtp: '',
        password: '',
        passwordAgain: ''
      },
      accountCode: ''
    }
  },
  computed: {
    isDisabledSubmit () {
      switch (this.step) {
        case this.stepTypes.INPUT_ACCOUNT:
          return this.account.length === 0
        case this.stepTypes.CONFIRM_OTP_PASSWORD:
          return this.fromData.codeOtp.length === 0 ||
            this.fromData.password.length === 0 ||
            this.fromData.passwordAgain.length === 0
        default:
          return false
      }
    },
    labelButton () {
      if (this.step === this.stepTypes.CONFIRM_OTP_PASSWORD) {
        return 'XÁC NHẬN MẬT KHẨU MỚI'
      }
      return 'TIẾP THEO'
    }
  },
  watch: {
    account: {
      handler () {
        this.messageError = ''
      }
    }
  },
  methods: {
    changeAccount (account) {
      this.account = account
    },
    changeTypeInput (type) {
      this.typeInput = type
    },
    onValidate () {
      if (this.fromData.password.length < 6 || this.fromData.password.length > 20) {
        this.messageError = 'Mật khẩu phải có độ dài từ 6 đến 20 ký tự'
      }
      if (this.fromData.passwordAgain !== this.fromData.password) {
        this.messageError = 'Mật khẩu nhập lại không đúng'
      }
    },
    changeDataConfirm (payload) {
      this.fromData = {
        ...this.fromData,
        ...payload
      }
    },
  }
}
</script>
