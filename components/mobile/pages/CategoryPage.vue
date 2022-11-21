<template>
  <div>
    <header-category />
    <main-category />
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  components: {
    HeaderCategory: () => import('@/components/mobile/headers/HeaderCategory'),
    MainCategory: () => import('@/components/mobile/categories/MainCategory'),
  }
}
</script>
