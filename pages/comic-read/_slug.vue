<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/ComicReadPage'),
    MobileComponent: () => import('@/components/mobile/pages/ComicReadPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
