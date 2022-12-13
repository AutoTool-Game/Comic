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
        placeholder="Mật khẩu"
        type="password"
        :max-length="20"
        :value="password"
        @change="changePassword"
      />
    </form>
    <label-error-auth :message-error="messageError" />
    <btn-auth
      label="Đăng nhập"
      :is-disable="isDisabledSubmit"
      :is-loading="isLoading"
      class="submit-login rounded-full p-2 w-full"
    />
    <div class="w-full my-3 sm:mt-6 flex justify-between">
      <span
        class="text-[#FFB340] text-sm font-normal"
        @click="changeAuthType(nameAuth.FORGOT_PASSWORD)"
        v-text="'Quên mật khẩu?'"
      />
      <span
        class="text-[#FFB340] text-sm font-normal"
        @click="changeAuthType(nameAuth.REGISTER)"
        v-text="'Đăng ký ngay'"
      />
    </div>
    <auth-login-fast />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import authMixin from '~/mixins/authMixin'
import { authTypes } from '~/configs/common'

import InputAuth from "~/components/common/items/InputAuth";
import AuthLoginFast from "~/components/mobile/auth/AuthLoginFast";
import BtnAuth from "~/components/common/items/BtnAuth";
import LabelErrorAuth from "~/components/common/items/LabelErrorAuth";
export default {
  components: {
    InputAuth,
    BtnAuth,
    LabelErrorAuth,
    AuthLoginFast,
  },
  mixins: [authMixin],
  computed: {
    isDisabledSubmit () {
      return this.username.length === 0 || this.password.length === 0
    },
    ...mapGetters('dialog', {
      isShowDialogAuth: 'isShowDialogAuth'
    }),
    labelAccount () {
      return this.isDeviceWeb ? 'Tên tài khoản / Email / Số điện thoại' : 'Tên tài khoản / Email / SĐT'
    },
    nameAuth () {
      return authTypes;
    },
  },
}
</script>
