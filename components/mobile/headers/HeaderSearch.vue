<template>
  <div class="header flex justify-between px-2 mt-4 mb-5">
    <div class="search-box w-4/5">
      <form
        id="top-search-form"
        action="/search/result"
        class="relative"
      >
        <div>
          <input
            type="text"
            name="q"
            class="search-page"
            placeholder="Nhập từ khóa tìm kiếm"
            required
            autocomplete="off"
          >
        </div>
      </form>
    </div>
    <nuxt-link
      class="close-search w-1/5"
      to="/"
    >
      Đóng
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch"
}
</script>
