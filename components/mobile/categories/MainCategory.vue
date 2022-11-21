<template>
  <div class="main-category">
    <div class="min-h-screen bg-[#1C1C1E] rounded-tl-3xl rounded-tr-3xl p-4">
      <div class="flex justify-around mb-3">
        <nuxt-link
          :to="tabContinue"
          class="tab-btn-cate w-1/2 rounded-full uppercase mx-2 py-2 text-center text-sm"
          :class="isTabContinue == 1 ? 'tab-link-active' : ''"
        >
          Đang ra
        </nuxt-link>
        <nuxt-link
          :to="tabFinished"
          class="tab-btn-cate w-1/2 rounded-full uppercase mx-2 py-2 text-center text-sm"
          :class="isTabFinished == 1 ? 'tab-link-active' : ''"
        >
          Đã hoàn thành
        </nuxt-link>
      </div>
      <div class="my-3">
        <div class="grid grid-cols-2 gap-4 w-full">
          <div
            v-for="(item, index) in listComic"
            :key="index"
            class="grid-item"
          >
            <cmi-comic :comic="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CmiComic from '~/components/mobile/comics/CmiComic';
export default {
  name: "MainCategory",
  components: {
    CmiComic,
  },
  data() {
    return {
      listComic: [
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
      ],
    }
  },
  computed: {
    isTabContinue () {
      return this.$route.query.filter !== 'finished' ? 1 : 0;
    },
    isTabFinished () {
      return this.$route.query.filter === 'finished' ? 1 : 0;
    },
    tabContinue () {
      return this.$route.path + '?filter=continue';
    },
    tabFinished () {
      return this.$route.path + '?filter=finished';
    }
  },
  mounted() {
  },
}
</script>
