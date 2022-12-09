<template>
  <div class="w-full fixed top-0 left-0 z-50 p-2">
    <div class="flex justify-around">
      <div class="w-2-10">
        <nuxt-link
          to="/"
        >
          <svg-icon
            name="icon-back"
            class="mx-auto"
          />
        </nuxt-link>
      </div>
      <div class="w-6-10 text-lg text-[#F1F1F1] text-center">
        Truyện kiểu mới
      </div>
      <div class="w-2-10 flex justify-around">
        <nuxt-link
          to="/search"
        >
          <svg-icon
            name="icon-search"
            class="mx-2"
          />
        </nuxt-link>
        <nuxt-link
          to="/"
        >
          <svg-icon
            name="icon-home"
            class="mx-2"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  name: "HeaderComicVideo",
  components: {
    SvgIcon
  }
}
</script>
