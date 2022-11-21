<template>
  <component
    :is="nameComponent"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  name: "category",
  components: {
    DesktopComponent: () => import('@/components/desktop/pages/CategoryPage'),
    MobileComponent: () => import('@/components/mobile/pages/CategoryPage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
