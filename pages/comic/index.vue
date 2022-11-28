<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/ComicPage'),
    MobileComponent: () => import('@/components/mobile/pages/ComicPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
