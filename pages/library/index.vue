<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/LibraryPage'),
    MobileComponent: () => import('@/components/mobile/pages/LibraryPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
