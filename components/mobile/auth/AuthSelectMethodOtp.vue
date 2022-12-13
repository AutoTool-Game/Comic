<template>
  <div class="w-full">
    <p
      class="text-sm px-5 text-center"
      v-text="'Chọn phương thức nhận mã OTP để lấy lại mật khẩu'"
    />
    <div class="w-full flex flex-col mt-3">
      <div
        v-if="infoAccountOtp.Mobile"
        class="w-max flex-row-center cursor-pointer"
        @click="changeTypeInput(1)"
      >
        <div class="w-4 h-4 sm:w-6 sm:h-6 mr-2">
          <svg-icon
            :name="typeInput===1?'icon-confirm-active':'icon-confirm'"
            class="w-full h-full"
          />
        </div>
        <span
          class="text-sm"
          v-text="infoAccountOtp.Mobile"
        />
      </div>
      <div
        v-if="infoAccountOtp.Email"
        class="w-max flex cursor-pointer"
        @click="changeTypeInput(2)"
      >
        <div class="w-4 h-4 sm:w-6 sm:h-6 mr-2">
          <svg-icon
            :name="typeInput===2?'icon-confirm-active':'icon-confirm'"
            class="w-full h-full"
          />
        </div>
        <span
          class="text-sm"
          v-text="infoAccountOtp.Email"
        />
      </div>
    </div>
    <label-error-auth :message-error="messageError" />
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  components: {
    LabelErrorAuth: () => import('~/components/common/items/LabelErrorAuth'),
    SvgIcon
  },
  props: {
    infoAccountOtp: {
      type: Object,
      default: () => {
        return {
          AccountId: 7119945,
          FullName: 'Vũ Toàn',
          Email: 'toanvd@vega.com.vn',
          Mobile: '*******460',
          typeInput: '1',
          Social: null
        }
      }
    },
    typeInput: {
      type: Number,
      default: 1 // 1:SMS, 2:Email
    },
    messageError: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeTypeInput (type) {
      this.$emit('changeTypeInput', type)
    }
  }
}
</script>
