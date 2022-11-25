<template>
  <div>
    <div class="flex justify-around">
      <nuxt-link
        v-for="(item, index) in listTabSearch"
        :key="index"
        :to="'/search/' + keywordSearch + '?tab=' + item.value"
        class="flex-wrap tabs-link"
        :class="titleActive[0].value == item.value ? 'tab-active' : ''"
      >
        <div
          class="tab-box tab-link relative"
        >
          {{ item.name }}
          <div
            class="absolute w-full mt-2"
          >
            <svg-icon
              v-if="titleActive[0].value == item.value"
              name="icon-category-active"
              class="mx-auto"
            />
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="min-h-screen bg-[#1C1C1E] rounded-tl-3xl rounded-tr-3xl p-4 mt-5">
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
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  name: "SearchResultMain",
  components: {
    CmiComic,
    SvgIcon,
  },
  data () {
    return {
      listTabSearch: [
        {
          name: 'Tất cả',
          value: 'all'
        },
        {
          name: 'Truyện kiểu mới',
          value: 'video_comic'
        },
        {
          name: 'Tác giả',
          value: 'author'
        }
      ],
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
      keyword: '',
      isGotoItem: false
    }
  },
  computed: {
    titleActive () {
      if (this.$route.query.tab === undefined) {
        return this.listTabSearch.filter(rt => rt.value === 'all');
      }
      return this.listTabSearch.filter(rt => rt.value === this.$route.query.tab);
    },
    keywordSearch() {
      return `${this.keyword}`;
    }
  },
  created () {
    this.keyword = this.$route.params.slug;
  },
  methods: {
    changeKeyword (event) {
      this.keyword = event.target.value
    },
    handleChangeKeyword () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (this.isGotoItem) {
          return
        }
        if (this.keyword) {
          if (this.isRouteSearch) {
            this.$router.replace({
              path: `/search/${this.keyword}`
            })
          } else {
            this.$router.push({
              path: `/search/${this.keyword}`
            })
          }
        }
        this.isShowSuggest = false
      }, 500)
    },
  }
}
</script>
