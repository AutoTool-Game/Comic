<template>
  <div>
    <header-search />
    <search-result-main />
  </div>
</template>

<script>
import HeaderSearch from "~/components/mobile/headers/HeaderSearch";
import SearchResultMain from "~/components/mobile/searchs/SearchResultMain";
export default {
  name: "SearchPage",
  components: {
    HeaderSearch,
    SearchResultMain,
  }
}
</script>
