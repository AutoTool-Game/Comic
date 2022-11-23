<template>
  <div class="">
    <header-library
      title="Tủ truyện"
      height-cate="h-[100px]"
    />
    <library-index />
  </div>
</template>

<script>
import HeaderLibrary from "~/components/mobile/headers/HeaderLibrary";
import LibraryIndex from "~/components/mobile/libraries/LibraryIndex";
export default {
  name: "LibraryPage",
  components: {
    HeaderLibrary,
    LibraryIndex,
  }
}
</script>
