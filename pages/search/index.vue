<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/SearchPage'),
    MobileComponent: () => import('@/components/mobile/pages/SearchPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
