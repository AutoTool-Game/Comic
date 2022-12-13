<template>
  <div class="w-full min-h-4 sm:min-h-5 mt-4">
    <p
      v-if="messageError"
      class="text-sm-14-16 sm:text-base-16-19 text-red-default text-center"
      v-text="messageError"
    />
  </div>
</template>

<script>
export default {
  props: {
    messageError: {
      type: String,
      default: ''
    }
  }
}
</script>
