<template>
  <nuxt-link
    :comic="comic"
    to=""
  >
    <img
      :src="comic.thumb"
       alt=""
      class="w-[132px] rounded-xl"
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
    }
  }
}
</script>
