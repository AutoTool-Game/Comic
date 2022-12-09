<template>
  <div id="fixed-header-home" class="fixed-header">
    <div class="header-overlay"></div>
    <div
      id="filter-overlay"
      class="filter-overlay"
      @click="closeFilterOverlay()"
    ></div>
    <div class="mobile-menu">
      <div class="user-login my-5">
        <div class="login-button-menu flex">
          <button class="btn-login mx-auto">Đăng nhập</button>
        </div>
        <div class="main-menu my-5">
          <nuxt-link
            v-for="(item, index) in mobile_menu"
            :key="index"
            :to="item[1]"
            :class="item[0]"
          >
            <div class="w-1/4">
              <svg-icon
                :name="item[2]"
                class="mx-auto"
              />
            </div>
            <span class="w-1/2 text-base" v-text="item[3]"></span>
            <div class="w-1/4">
              <svg-icon
                :name="item[4]"
                class="mx-auto"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="header-bg" class="header-bg w-full" :style="headerBg"></div>
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
            @click="showMainMenuLeft"
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
        <vue-slick-carousel
          v-bind="settings"
          @afterChange="swipeSlick"
        >
          <img
            v-for="(item, index) in listSlick"
            :key="index"
            :src="item"
            class="rounded-xl"
          >
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import SvgIcon from '~/components/common/items/SvgIcon';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: "HeaderHome",
  components: {
    SvgIcon,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        lazyLoad: 'ondemand',
        dotsClass: 'slick-dot-home',
        autoplay: true,
        slidesToShow: 1,
        centerPadding: '10px',
        speed: 1000
      },
      listSlick: [
        `${process.env.BASE_URL}/banners/banner-default-1.jpg`,
        `${process.env.BASE_URL}/banners/banner-default-2.jpg`,
        `${process.env.BASE_URL}/banners/banner-default-3.jpg`,
        `${process.env.BASE_URL}/banners/banner-default-4.jpg`,
      ],
      headerBg: '',
      mobile_menu: [
        [
          'text-[#FFB340] flex justify-between py-3',
          '/',
          'icon-home-active',
          'Trang chủ',
          'icon-more-active',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-audio-comic',
          'Truyện kiểu mới',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-tu-sach',
          'Tủ truyện',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-setting',
          'Cài đặt App',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-logout',
          'Đăng xuất',
          '',
        ],
      ],
    }
  },
  mounted () {
    this.headerBg = 'background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 100%), url("' + this.listSlick[0] + '");';
  },
  methods: {
    swipeSlick(slider) {
      this.headerBg = 'background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000000 100%), url("' + this.listSlick[slider] + '");';
    },
    showMainMenuLeft() {
      document.body.classList.add('show-mobile-menu');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    closeFilterOverlay()
    {
      document.getElementById('filter-overlay').style = 'display: none';
      document.body.classList.remove('show-mobile-menu');
    },
  },
}
</script>

