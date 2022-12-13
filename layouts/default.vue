<template>
  <component
    :is="layoutName"
    class="w-full min-h-screen bg-white-default flex flex-col"
  >
    <nuxt />
  </component>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "LayoutDefault",
  components: {
    LayoutWap: () => import('@/components/mobile/layouts/TheLayout'),
  },
  computed: {
    ...mapGetters({
      layoutName: 'layoutName'
    }),
    isDeviceDesktop () {
      return this.innerWidth >= 1024
    }
  },
  watch: {
    isDeviceDesktop: {
      handler () {
        this.changeDevice(this.isDeviceDesktop)
      }
    }
  },
  mounted () {
    this.onPageMounted()
    this.innerWidth = window.innerWidth
    window.addEventListener('resize', this.changeInnerWidth)
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  },
  methods: {
    ...mapActions({
      changeDevice: 'changeDevice',
      changeProperties: 'changeProperties',
      onPageMounted: 'onPageMounted'
    }),
    changeInnerWidth () {
      this.innerWidth = window.innerWidth
      const marginItem = parseInt(window.getComputedStyle(document.documentElement)
        .getPropertyValue('--fm-carousel-margin-right'))
      this.changeProperties({
        marginItem
      })
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>
