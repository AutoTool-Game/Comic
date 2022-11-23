<template>
  <div>
    <header-category
      title="Bảng xếp hạng"
      :show-list-cate=false
      height-cate="h-[70px]"
    />
    <main-chart />
  </div>
</template>

<script>
export default {
  name: "ChartPage",
  components: {
    HeaderCategory: () => import('@/components/mobile/headers/HeaderCategory'),
    MainChart: () => import('@/components/mobile/charts/MainChart'),
  }
}
</script>
