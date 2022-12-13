<template>
  <div class="w-full">
    <form class="w-full">
      <input-auth
        icon="icon-username"
        :placeholder="labelAccount"
        :value="username"
        class="!mt-0"
        @change="changeUsername"
      />
      <input-auth
        icon="icon-password"
        placeholder="Nhập mật khẩu"
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
    </form>
    <div class="w-full mt-4 flex">
      <div
        class="w-6 h-6 mr-2-5 cursor-pointer"
        @click="isAgreePolicy=!isAgreePolicy"
      >
        <svg-icon
          :name="isAgreePolicy?'icon-confirm-active':'icon-confirm'"
          class="w-full h-full"
        />
      </div>
      <div class="text-[#F1F1F1] text-sm">
        Tôi đồng ý với các
        <a
          class="mx-1 text-[#FFB340]"
          href="#"
          target="_blank"
        >
          điều khoản
        </a>
        sử dụng
      </div>
    </div>
    <label-error-auth :message-error="messageError" />
    <btn-auth
      label="Đăng ký"
      :is-loading="isLoading"
      class="submit-register rounded-full p-2 w-full"
    />
    <div class="w-full my-3 text-[#F1F1F1] text-center">
      Bạn đã có tài khoản?
      <span
        class="mx-1 text-[#FFB340] text-sm"
        @click="changeAuthType(nameAuth.LOGIN)"
        v-text="'Đăng nhập'"
      />
    </div>
    <auth-login-fast />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import authMixin from '~/mixins/authMixin'

import SvgIcon from "~/components/common/items/SvgIcon";
import InputAuth from "~/components/common/items/InputAuth";
import AuthLoginFast from "~/components/mobile/auth/AuthLoginFast";
import BtnAuth from "~/components/common/items/BtnAuth";
import LabelErrorAuth from "~/components/common/items/LabelErrorAuth";
import {authTypes} from "~/configs/common";
export default {
  components: {
    InputAuth,
    BtnAuth,
    LabelErrorAuth,
    AuthLoginFast,
    SvgIcon,
  },
  mixins: [authMixin],
  data () {
    return {
      phoneMail: '',
      passwordAgain: '',
      isAgreePolicy: true
    }
  },
  computed: {
    ...mapGetters('dialog', {
      isShowDialogAuth: 'isShowDialogAuth'
    }),
    isDisabledSubmit () {
      return this.username.length === 0 ||
        this.phoneMail.length === 0 ||
        this.password.length === 0 ||
        this.passwordAgain.length === 0
    },
    labelAccount () {
      return this.isDeviceWeb ? 'Tên tài khoản / Email / Số điện thoại' : 'Tên tài khoản / Email / SĐT'
    },
    nameAuth () {
      return authTypes;
    },
  },
  methods: {
    changePhoneMail (phoneMail) {
      this.phoneMail = phoneMail
    },
    changePasswordAgain (passwordAgain) {
      this.passwordAgain = passwordAgain
    },
  }
}
</script>
