<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/ComicVideoPage'),
    MobileComponent: () => import('@/components/mobile/pages/ComicVideoPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
