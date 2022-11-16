<template>
  <component
    :is="nameComponent"
  />
</template>

<script>

import pageMixin from '~/mixins/pageMixin'

export default {
  name: 'IndexPage',
  components: {
    DesktopComponent: () => import('@/components/desktop/homes/HomePage'),
    MobileComponent: () => import('@/components/mobile/homes/HomePage')
  },
  mixins: [
    pageMixin
  ],
}
</script>
