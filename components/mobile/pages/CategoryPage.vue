<template>
  <div>
    <header-category
      title="Thiếu nhi"
      height-cate="h-[100px]"
    />
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
