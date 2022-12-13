<template>
  <div
    class="relative"
  >
    <button
      class="absolute right-3 top-3 border-0 bg-[#1C1C1E] text-[#F1F1F1]"
    >
      <svg-icon
        name="icon-close"
      />
    </button>
    <div
      class="w-full flex justify-content mb-3"
    >
      <svg-icon
        name="logo-comic-login"
      />
    </div>
    <div
      class="flex justify-around"
    >
      <div class="w-full">
        <input
          type="text"
          placeholder="Tên đăng nhập"
          class="w-full rounded-full p-2 border-0 my-2"
        >
        <div
          class="relative w-full my-2"
        >
          <input
            type="password"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  name: "RequireLogin",
  components: {
    SvgIcon
  }
}
</script>
