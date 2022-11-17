<template>
  <div class="main">
    <div class="flex justify-between px-3 mt-4">
      <nuxt-link
        to=""
      >
        <div class="w-full">
          <svg-icon
            name="icon-category"
            class="w-[69px]"
          />
        </div>
        <div class="w-full text-white text-center text-xs font-normal">Danh mục</div>
      </nuxt-link>
      <nuxt-link
        to=""
      >
        <div class="w-full">
          <svg-icon
            name="icon-chart"
            class="w-[69px]"
          />
        </div>
        <div class="w-full text-white text-center text-xs font-normal">Bảng xếp hạng</div>
      </nuxt-link>
      <nuxt-link
        to=""
      >
        <div class="w-full">
          <svg-icon
            name="icon-is-suggested"
            class="w-[69px]"
          />
        </div>
        <div class="w-full text-white text-center text-xs font-normal">Được đề cử</div>
      </nuxt-link>
    </div>
    <div class="content-main">
      <div
        v-for="(item, index) in listBlockHome"
        :key="index"
        class="tab-content my-3 pl-3 py-2"
      >
        <div class="flex justify-between my-2">
          <span class="text-white text-lg font-medium" v-text="item.title"></span>
          <nuxt-link
            to=""
            class="mr-2 text-[#FFB340]"
          >
            Tất cả
          </nuxt-link>
        </div>
        <vue-slick-carousel
          v-bind="settings"
          class="my-2"
        >
          <div
            v-for="(it, ind) in item.items"
            :key="ind"
          >
            <thumb-comic
              :comic="it"
            />
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import SvgIcon from '~/components/common/items/SvgIcon';
import ThumbComic from '~/components/mobile/comics/ThumbComic';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: "ContentHome",
  components: {
    SvgIcon,
    ThumbComic,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        lazyLoad: 'ondemand',
        autoplay: false,
        slidesToShow: 2.4,
        infinite: false,
        centerPadding: '20px',
      },
      listBlockHome: [
        {
          title: 'Mới nhất',
          filter: 'latest',
          url: '',
          items: [
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
          ]
        },
        {
          title: 'Đã hoàn thành',
          filter: 'latest',
          url: '',
          items: [
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
          ]
        },
        {
          title: 'Truyện kiểu mới',
          filter: 'latest',
          url: '',
          items: [
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
          ]
        },
        {
          title: 'Kho tàng cổ tích Việt Nam',
          filter: 'latest',
          url: '',
          items: [
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
            {
              id: 1508,
              name: "Nhím con vui vẻ - Pupi tốt bụng",
              slug: "nhim-con-vui-ve-pupi-tot-bung",
              count_like: 1,
              count_view: 10000,
              count_read: 10000,
              count_chap: 10,
              total_chap: 10,
              count_video: 1,
              total_video: 1,
              thumb: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.cmi_comic_thumb/0/0/0/2/1528.jpg?v=1&time=1668653585&w=500&h=500',
              content_type: 'cmi_comic',
              mini_app: {
                id: 16,
                code: 'Truyện tranh',
                type: 'waka_comic',
                text_color: '#FA373E',
                background_color: '#F3E9D4'
              },
              title: 'Nhím con vui vẻ - Pupi tốt bụng'
            },
          ]
        },
      ]
    }
  }
}
</script>
