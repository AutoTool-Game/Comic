<template>
  <div>
    <header-category />
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  components: {
    HeaderCategory: () => import('@/components/mobile/headers/HeaderCategory'),
  }
}
</script>
