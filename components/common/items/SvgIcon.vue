<template>
  <img
    :src="source"
    :alt="name"
    class="cursor-pointer"
    @click="$emit('click')"
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    source () {
      return `${process.env.BASE_URL}/svgs/${this.name}.svg`
    }
  }
}
</script>
