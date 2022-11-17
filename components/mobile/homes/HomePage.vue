<template>
  <div>
    <header-home />
    <content-home />
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components: {
    HeaderHome: () => import('@/components/mobile/headers/HeaderHome'),
    ContentHome: () => import('@/components/mobile/homes/ContentHome'),
  }
}
</script>
