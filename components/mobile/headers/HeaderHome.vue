<template>
  <div class="fixed-header">
    <div id="header-bg" class="header-bg w-full"></div>
    <div class="header py-2 px-3">
      <div class="header-top flex justify-between mb-3">
        <div class="header-top-left w-1/4">
          <nuxt-link
            to="/"
            class="logo-header"
          >
            <svg-icon
              name="logo"
              class="w-[80px]"
            />
          </nuxt-link>
        </div>
        <div class="header-top-right w-3/4 flex justify-end text-center">
          <nuxt-link
            to="/search"
          >
            <svg-icon
              name="icon-search"
              class="w-[24px] mx-2"
            />
          </nuxt-link>
          <svg-icon
            name="icon-bars"
            class="w-[24px] mx-2"
          />
        </div>
      </div>
      <div class="header-main mt-4 mb-3">
        <div class="toggle-menu rounded-full flex justify-between border-solid border-2 border-black mx-auto">
          <nuxt-link
            to="/"
            class="toggle-menu-active text-center py-1 rounded-full font-bold"
          >
            Thiếu nhi
          </nuxt-link>
          <nuxt-link
            to="/home/other"
            class="tab-other text-center py-1 rounded-full font-bold"
          >
            Khác
          </nuxt-link>
        </div>
      </div>
      <div class="slide-box">
        <vue-slick-carousel v-bind="settings" @init="onInitSetting" data="2">
          <img src="~/assets/images/banners/banner-default.jpg" alt="" class="rounded-lg px-1">
          <img src="~/assets/images/banners/banner-default-1.jpg" alt="" class="rounded-lg px-1">
          <img src="~/assets/images/banners/banner-default-2.jpg" alt="" class="rounded-lg px-1">
          <img src="~/assets/images/banners/banner-default-3.jpg" alt="" class="rounded-lg px-1">
          <img src="~/assets/images/banners/banner-default-4.jpg" alt="" class="rounded-lg px-1">
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import SvgIcon from '~/components/common/items/SvgIcon';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: "HeaderHome",
  components: {
    SvgIcon,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dot-home',
        autoplay: true,
        slidesToShow: 1,
      },
    }
  },
  methods: {
    onInitSetting() {
      console.log(this);
    }
  },
}
</script>

