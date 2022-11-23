<template>
  <div>
    <header-edit-library
      title="Sửa tủ truyện"
      height-cate="h-[100px]"
    />
    <library-edit />
  </div>
</template>

<script>
import HeaderEditLibrary from "~/components/mobile/headers/HeaderEditLibrary";
import LibraryEdit from "~/components/mobile/libraries/LibraryEdit";
export default {
  name: "LibraryPage",
  components: {
    HeaderEditLibrary,
    LibraryEdit,
  }
}
</script>
