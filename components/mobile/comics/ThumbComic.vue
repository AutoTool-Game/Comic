<template>
  <nuxt-link
    :comic="comic"
    to=""
  >
    <img
      :src="comic.thumb"
       alt=""
      class="rounded-xl"
      :class="classParent"
    >
  </nuxt-link>
</template>

<script>
export default {
  name: "ThumbComic",
  props: {
    comic: {
      type: Object,
      required: true,
    },
    classParent: {
      type: String,
      default: 'w-[132px]'
    }
  }
}
</script>
