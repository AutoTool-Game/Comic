<template>
  <div
    :class="classParent"
    class="w-full h-10 sm:h-12 rounded-full grid-center"
    @click="$emit('click')"
  >
    <svg-icon
      v-if="isLoading"
      name="icon-loading-white"
      class="w-6 h-6 animate-spin-loading"
    />
    <span
      v-else
      class="text-sm-14-16 sm:text-base-16-19 uppercase text-white-default font-medium"
      v-text="label"
    />
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  components: {
    SvgIcon
  },
  props: {
    isDisable: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    classParent: {
      type: String,
      default: ''
    }
  },
}
</script>
