<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/SearchResultPage'),
    MobileComponent: () => import('@/components/mobile/pages/SearchResultPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
