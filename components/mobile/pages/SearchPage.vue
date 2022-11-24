<template>
  <div>
    <header-search />
    <search-main />
  </div>
</template>

<script>
import HeaderSearch from "~/components/mobile/headers/HeaderSearch";
import SearchMain from "~/components/mobile/searchs/SearchMain";
export default {
  name: "SearchPage",
  components: {
    HeaderSearch,
    SearchMain
  }

}
</script>
