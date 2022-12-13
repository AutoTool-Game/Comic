<template>
  <div class="layout-desktop">
    <slot />
    <the-auth v-if="!isLoading" />
  </div>
</template>

<script>

export default {
  components: {
    TheAuth: () => import('~/components/mobile/auth/TheAuth'),
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  }
}
</script>
