<template>
  <div class="slide-box">
    <slick
      ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
    >
      <div
        v-for="(item, index) in listVideo"
        :key="index"
        class="relative"
      >
        <video
          id="player"
          controls
          preload="metadata"
          muted
          class="w-full min-h-screen player"
        >
          <source
            :src="item.video"
            type="video/mp4"
          >
        </video>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'
// import SvgIcon from "~/components/common/items/SvgIcon";

import { comicMixin } from '~/mixins/comicMixin';
import 'slick-carousel/slick/slick.css';
import 'plyr/dist/plyr.css';
export default {
  components: {
    Slick,
    // SvgIcon,
  },
  mixins: [comicMixin],
  data () {
    return {
      listVideo: [
        {
          'id': 247,
          'name': 'Hải quỳ và cua con',
          'count_view': 11,
          'price': 0,
          'duration': 40,
          "video": "https://1123e14a0.vws.vegacdn.vn/static/cmi_comic_video/0/0/0/0/247_1.mp4?v=1",
          "image": "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_video/0/0/0/0/247.jpg?v=1&time=1665845403&w=360&h=360",
          "permission": {
            "read": 1
          }
        },
        {
          "id": 248,
          "name": "Hành trình nguy hiểm của chó săn và lạc đà",
          "count_view": "7",
          "price": 0,
          "duration": 109,
          "video": "https://1123e14a0.vws.vegacdn.vn/static/cmi_comic_video/0/0/0/0/248_1.mp4?v=1",
          "image": "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_video/0/0/0/0/248.jpg?v=1&time=1665845395&w=360&h=360",
          "permission": {
            "read": 1
          }
        },
        {
          "id": 249,
          "name": "Thiệp chúc mừng bằng lá cây",
          "count_view": "16",
          "price": 0,
          "duration": 89,
          "video": "https://1123e14a0.vws.vegacdn.vn/static/cmi_comic_video/0/0/0/0/249_1.mp4?v=1",
          "image": "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_video/0/0/0/0/249.jpg?v=1&time=1665845388&w=360&h=360",
          "permission": {
            "read": 1
          }
        }
      ],
      slickOptions: {
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
      }
    }
  },
  created() {},
  mounted() {
    this.setupPlyr();
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {},
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      const videos = document.querySelectorAll('video');

      Array.prototype.forEach.call(videos, function (video) {
        const position = video.getAttribute('data-position');
        // const position = $(video).attr('data-position');
        video.currentTime = Math.floor(position);
        video.pause();
      });

      if (typeof document.getElementsByClassName('slick-item')[currentSlide + 2] === 'undefined') {
        // this.nextVideo(document.getElementsByClassName('slick-item')[currentSlide + 1].attributes['data-id'].value);
      }
    },
  },
}
</script>
