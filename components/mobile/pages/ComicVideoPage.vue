<template>
  <div>
    <header-comic-video />
    <video-index />
  </div>
</template>

<script>
import HeaderComicVideo from "~/components/mobile/headers/HeaderComicVideo";
import VideoIndex from "~/components/mobile/comic-videos/VideoIndex";
export default {
  name: "ComicVideoPage",
  components: {
    HeaderComicVideo,
    VideoIndex
  }
}
</script>
