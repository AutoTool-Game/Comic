<template>
  <div class="container-input-auth mt-3 sm:mt-4 border-all-neutral-aaa">
    <div class="flex flex-1">
      <input
        v-model="field"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxLength"
        autocomplete="new-password"
        class="input-auth border-red-400"
      >
    </div>
    <div class="w-6 h-6 mr-2 sm:mr-5">
      <svg-icon
        :name="icon"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  components: {
    SvgIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    maxLength: {
      type: Number,
      default: 40
    }
  },
  data () {
    return {
      field: ''
    }
  },
  watch: {
    field: {
      handler () {
        this.$emit('change', this.field)
      }
    }
  },
  mounted () {
    this.field = this.value
  }
}
</script>
