<template>
  <div class="w-full min-h-4 sm:min-h-5 mt-4">
    <p
      v-if="messageError"
      class="text-sm sm:text-base text-red text-center"
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
