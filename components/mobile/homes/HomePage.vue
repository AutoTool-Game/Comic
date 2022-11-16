<template>
  <header-home />
</template>

<script>

export default {
  name: "HomePage",
  components: {
    HeaderHome: () => import('@/components/mobile/headers/HeaderHome'),
  }
}
</script>
