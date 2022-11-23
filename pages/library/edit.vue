<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/LibraryEdit'),
    MobileComponent: () => import('@/components/mobile/pages/LibraryEdit')
  },
  mixins: [
    pageMixin
  ],
}
</script>
