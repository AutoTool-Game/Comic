<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/ComicSlugPage'),
    MobileComponent: () => import('@/components/mobile/pages/ComicSlugPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
