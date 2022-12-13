<template>
  <div class="w-full">
    <input-auth
      icon="icon-username"
      placeholder="Tên tài khoản"
      :value="accountInput"
      class="!mt-0"
      @change="changeUsername"
    />
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
    account: {
      type: String,
      default: ''
    },
    messageError: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      accountInput: ''
    }
  },
  watch: {
    accountInput: {
      handler () {
        this.$emit('change', this.accountInput)
      }
    }
  },
  created () {
    this.accountInput = this.account
  },
  methods: {
    changeUsername (accountInput) {
      this.accountInput = accountInput
    }
  }
}
</script>
