<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/ChartPage'),
    MobileComponent: () => import('@/components/mobile/pages/ChartPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
