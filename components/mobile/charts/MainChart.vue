<template>
  <div class="main-chart">
    <div class="min-h-screen bg-[#1C1C1E] rounded-tl-3xl rounded-tr-3xl p-4">
      <div class="flex justify-around mb-3">
        <div
          class="tab-menu-chart bg-[#333333] text-sm w-1/2 rounded-full mx-2 py-2 px-4 text-center flex justify-between"
          @click="showMainMenuContentType()"
        >
          <span class="text-white">{{ contentType[0].name }}</span>
          <svg-icon
            name="continue"
          />
        </div>
        <div
          class="tab-menu-chart bg-[#333333] text-sm w-1/2 rounded-full mx-2 py-2 px-4 text-center flex justify-between"
          @click="showMainMenuRankingType()"
        >
          <span class="text-white">{{ rankingType[0].name }}</span>
          <svg-icon
            name="continue"
          />
        </div>
      </div>
      <div class="my-3">
        <div
          v-for="(item, index) in listRanking"
          :key="index"
        >
          <rank-comic
            :comic="item"
            :index="item.ranking_top"
          />
        </div>
      </div>
    </div>
    <div class="header-overlay"></div>
    <div
      id="filter-overlay"
      class="filter-overlay"
      @click="closeFilterOverlay()"
    ></div>
    <div class="menu-tab-ranking-type">
      <div class="text-center text-white pt-2 my-2">
        <span class="text-lg">Loại hình xếp hạng</span>
      </div>
      <div class="my-2">
        <nuxt-link
          v-for="(item, index) in ranking_type"
          :key="index"
          to=""
          class="flex justify-between px-4 py-2 text-white"
          :class="index != ranking_type.length - 1 ? 'border-1-b-333333' : ''"
        >
            <span
              :class="rankingType[0].value == item.value ? 'text-[#FFB340]' : ''"
            >
              {{ item.name }}
            </span>
          <span
            v-if="rankingType[0].value == item.value"
            class="my-auto"
          >
              <svg-icon
                name="icon-tick"
              />
            </span>
        </nuxt-link>
      </div>
    </div>
    <div class="menu-tab-content-type">
      <div class="text-center text-white pt-2 my-2">
        <span class="text-lg">Loại hình xếp hạng</span>
      </div>
      <div class="my-2">
        <nuxt-link
          v-for="(item, index) in content_type"
          :key="index"
          to=""
          class="flex justify-between px-4 py-2 text-white"
          :class="index != content_type.length - 1 ? 'border-1-b-333333' : ''"
        >
            <span
              :class="contentType[0].value == item.value ? 'text-[#FFB340]' : ''"
            >
              {{ item.name }}
            </span>
          <span
            v-if="contentType[0].value == item.value"
            class="my-auto"
          >
              <svg-icon
                name="icon-tick"
              />
            </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import RankComic from "~/components/mobile/comics/RankComic";
import { comicMixin } from '~/mixins/comicMixin';
import SvgIcon from '~/components/common/items/SvgIcon';
export default {
  name: "MainChart",
  components: {
    RankComic,
    SvgIcon,
  },
  mixins: [comicMixin],
  data() {
    return {
      content_type: [
        {
          name: 'Đọc nhiều',
          value: 'cmi_comic'
        },
        {
          name: 'Xem nhiều',
          value: 'cmi_comic_video'
        },
        {
          name: 'Theo dõi',
          value: 'cmi_comic_follow'
        }
      ],
      ranking_type: [
        {
          name: 'Tháng',
          value: 'month'
        },
        {
          name: 'Tổng',
          value: 'all'
        }
      ],
      listRanking: [
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
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 1,
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
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 2,
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
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 3,
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
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 4,
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
          categories: [
            {
              id: 5,
              name: 'Khác',
              parent_id: 0,
            },
            {
              id: 9,
              name: 'Tình cảm',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Manhua',
              parent_id: 5,
            },
            {
              id: 9,
              name: 'Cổ đại',
              parent_id: 5,
            },
          ],
          title: 'Nhím con vui vẻ - Pupi tốt bụng',
          ranking_top: 5,
        },
      ],
    }
  },
  computed: {
    rankingType() {
      if (this.$route.query.ranking_type === undefined) {
        return this.ranking_type.filter(rt => rt.value === 'all');
      }
      return this.ranking_type.filter(rt => rt.value === this.$route.query.ranking_type);
    },
    contentType() {
      if (this.$route.query.content_type === undefined) {
        return this.content_type.filter(ct => ct.value === 'cmi_comic');
      }
      return this.content_type.filter(ct => ct.value === this.$route.query.content_type);
    }
  },
  mounted() {
  },
  methods: {
    showMainMenuContentType() {
      document.body.classList.add('show-menu-tab-content-type');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    showMainMenuRankingType() {
      document.body.classList.add('show-menu-tab-ranking-type');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    closeFilterOverlay()
    {
      document.getElementById('filter-overlay').style = 'display: none';
      document.body.classList.remove('show-menu-tab-content-type');
      document.body.classList.remove('show-menu-tab-ranking-type');
    },
  },
}
</script>
