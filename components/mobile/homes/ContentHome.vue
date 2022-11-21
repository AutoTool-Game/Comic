<template>
  <div class="main">
    <div class="flex justify-between px-3 mt-4">
      <nuxt-link
        v-for="(item, index) in listMenuHome"
        :key="index"
        :to="item.to"
      >
        <div class="w-full">
          <svg-icon
            :name="item.thumb_name"
            class="w-[69px]"
          />
        </div>
        <div class="w-full text-white text-center text-xs font-normal" v-text="item.title"></div>
      </nuxt-link>
    </div>
    <div class="content-main my-4">
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
        <div class="w-full hide-scrollbar overflow-x-auto my-2">
          <div class="w-max">
            <div
              v-for="(it, ind) in item.items"
              :key="ind"
              class="inline-block mr-4"
            >
              <thumb-comic
                :comic="it"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '~/components/common/items/SvgIcon';
import ThumbComic from '~/components/mobile/comics/ThumbComic';

export default {
  name: "ContentHome",
  components: {
    SvgIcon,
    ThumbComic,
  },
  data() {
    return {
      listMenuHome: [
        {
          title: 'Danh mục',
          thumb_name: 'icon-category',
          to: ''
        },
        {
          title: 'Bảng xếp hạng',
          thumb_name: 'icon-chart',
          to: ''
        },
        {
          title: 'Được đề cử',
          thumb_name: 'icon-is-suggested',
          to: ''
        },
      ],
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
