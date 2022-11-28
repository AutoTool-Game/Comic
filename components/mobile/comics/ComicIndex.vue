<template>
  <div>
    <div class="min-h-screen bg-[#1C1C1E] rounded-tl-3xl rounded-tr-3xl py-4">
      <div class="flex justify-around px-4 z-2">
        <nuxt-link
          to=""
          class="read-earliest w-1/2 rounded-full uppercase mx-2 py-2 text-center text-sm"
        >
          Đọc từ đầu
        </nuxt-link>
        <nuxt-link
          to=""
          class="read-earliest w-1/2 rounded-full uppercase mx-2 py-2 text-center text-sm"
        >
          Đọc mới nhất
        </nuxt-link>
      </div>
      <div id="set-header-fixed-show" class="w-full header-comic-detail-fixed hidden">
        <div class="flex justify-between my-4 px-3">
          <div class="w-7/10 flex flex-nowrap">
            <nuxt-link
              to="/"
            >
              <svg-icon name="icon-back" />
            </nuxt-link>
            <div class="comic-title-detail">
              {{ comic.name }}
            </div>
          </div>
          <div class="w-3/10 flex justify-between text-center">
            <svg-icon
              name="icon-action-like"
            />
            <svg-icon
              name="icon-share"
              @click="onShare"
            />
            <nuxt-link
              to="/"
            >
              <svg-icon
                name="icon-home"
                class="w-[24px] mx-2"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-5 px-4">
        <div class="flex my-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-author"
              class="m-auto"
            />
          </div>
          <div class="11/12">
            <span class="ml-1 text-[#999999]">Tác giả: </span>
            <span
              v-if="comic.authors !== null"
              class="text-[#FFB340]"
            >
              <nuxt-link
                v-for="(item_author, index_author) in comic.authors"
                :key="index_author"
                to=""
                class="text-[#FFB340]"
              >
                {{ item_author.name }},&nbsp;
              </nuxt-link>
            </span>
          </div>
        </div>
        <div class="flex my-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-publisher"
              class="m-auto"
            />
          </div>
          <div class="w-11/12">
            <span class="ml-1 text-[#999999]">Nhà cung cấp: </span>
            <span
              v-if="comic.publishing_houses !== null"
              class="text-[#FFB340]"
            >
              <nuxt-link
                v-for="(item_publishing_house, index_publishing_house) in comic.publishing_houses"
                :key="index_publishing_house"
                to=""
                class="text-[#FFB340]"
              >
                {{ item_publishing_house.name }},&nbsp;
              </nuxt-link>
            </span>
          </div>
        </div>
        <div class="flex my-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-progress"
              class="m-auto"
            />
          </div>
          <div class="w-11/12">
            <span class="ml-1 text-[#999999]">Tình trạng: </span>
            <span
              v-if="comic.count_chap == comic.total_chap"
              class="text-[#999999]"
            >
              Đã hoàn thành
            </span>
            <span
              v-else
              class="text-[#999999]"
            >
              Đang cập nhật
            </span>
          </div>
        </div>
        <div class="flex my-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-like"
              class="m-auto"
            />
          </div>
          <div class="w-11/12">
            <span class="ml-1 text-[#999999]">Lượt thích: </span>
            <span
              class="text-[#999999]"
            >
              {{ commaSeparateNumber(comic.count_like) }}
            </span>
          </div>
        </div>
        <div class="flex my-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-view"
              class="m-auto"
            />
          </div>
          <div class="w-11/12">
            <span class="ml-1 text-[#999999]">Lượt đọc: </span>
            <span
              class="text-[#999999]"
            >
              {{ commaSeparateNumber(comic.count_read) }}
            </span>
          </div>
        </div>
        <div class="flex mt-3 text-sm">
          <div class="w-1/12">
            <svg-icon
              name="icon-eye"
              class="m-auto"
            />
          </div>
          <div class="w-11/12">
            <span class="ml-1 text-[#999999]">Lượt xem: </span>
            <span
              class="text-[#999999]"
            >
              {{ commaSeparateNumber(comic.count_view) }}
            </span>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="(item_cate, index_cate) in comic.categories"
            :key="index_cate"
            class="py-1 px-2 rounded-full border-1-FFB340 mr-2 mt-3"
          >
            <nuxt-link
              to=""
              class="text-xs text-[#FFB340]"
            >
              {{ item_cate.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="mt-4 area-share"></div>
      <div class="mt-4 px-3">
        <p class="text-lg text-[#F1F1F1] my-2">Nội dung truyện</p>
        <div id="desc-summary">
          <div class="box-description text-[#F1F1F1]">
            <div
              class="collapse-full-content text-justify"
              v-html="comic.description"
            >
            </div>
            <div class="collapse-short-content text-justify"></div>
            <div class="read-more-btn short flex justify-center mb-10">
              <svg-icon
                class="more-down"
                name="icon-more-down"
                @click="callPrepareReadMore()"
              />
              <svg-icon
                class="summary-up hidden"
                name="icon-summary-up"
                @click="callPrepareReadMore()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 area-share"></div>
      <div class="mt-4 px-4 flex justify-around border-1-b-333333 pb-3">
        <nuxt-link
          v-for="(item, index) in listTabs"
          :key="index"
          to=""
          class="text-sm tab-box tab-link-comic text-[#5C5C5D]"
          :class="titleActive[0].value == item.value ? 'tab-active' : ''"
        >
          {{ item.name }}
          <div
            class="flex justify-center w-full mt-2"
          >
            <svg-icon
              v-if="titleActive[0].value == item.value"
              name="icon-category-active"
            />
          </div>
        </nuxt-link>
      </div>
      <div
        v-if="titleActive[0].value == 'list_read'"
        id="list-chapter"
      >
        <div class="p-3 flex justify-between border-1-b-333333">
          <div class="text-[#F1F1F1] text-sm">
            Đã ra {{ comic.count_chap }}/{{ comic.total_chap }} chương
          </div>
          <nuxt-link
            class="text-[#999999] flex"
            to=""
          >
            <span class="mx-2">Mới nhất</span>
            <svg-icon
              name="icon-sort-new"
            />
          </nuxt-link>
        </div>
        <div id="load-more-list-read">
          <div
            v-for="(item_chap, index_chap) in chaps"
            :key="index_chap"
            class="flex justify-between p-3 border-1-b-333333"
          >
            <nuxt-link
              class="w-5/6 text-[#F1F1F1] text-sm pr-1"
              to=""
            >
              {{ item_chap.name }}
            </nuxt-link>
            <span
              class="w-1/6 my-auto"
            >
              <svg-icon
                v-if="item_chap.price == 0 && item_chap.label == 'free'"
                name="icon-free"
                class="mx-auto"
              />
              <svg-icon
                v-if="item_chap.permission.read != 1"
                name="icon-lock"
                class="mx-auto"
              />
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="titleActive[0].value == 'list_watch'"
        id="list-video-chapter"
      >
        <div
          v-for="(item_video, index_video) in videos"
          :key="index_video"
        >
          <nuxt-link
            class="flex justify-between p-3"
            to=""
          >
            <div class="w-1/2 relative">
              <img
                class="rounded-lg w-full"
                :src="item_video.image"
                alt=""
              >
              <svg-icon
                name="icon-play"
                class="absolute top-1/2 left-1/2 translate-middle"
              />
              <div class="absolute text-white bottom-0 right-0 px-2">
                {{ convertSecondsToMinutes(item_video.duration) }}
              </div>
            </div>
            <div class="w-1/2 flex flex-wrap pl-2">
              <span class="text-white m-auto">
                {{ item_video.name }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { comicMixin } from '~/mixins/comicMixin';
import SvgIcon from '~/components/common/items/SvgIcon';
export default {
  name: "ComicIndex",
  components: {
    SvgIcon,
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true,
    },
    chaps: {
      type: Array,
      required: true,
    },
    videos: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      listTabs: [
        {
          name: 'Danh sách đọc',
          value: 'list_read'
        },
        {
          name: 'Danh sách xem',
          value: 'list_watch'
        }
      ],
    }
  },
  computed: {
    titleActive() {
      if (this.$route.query.title === undefined) {
        return this.listTabs.filter(rt => rt.value === 'list_read');
      }
      return this.listTabs.filter(rt => rt.value === this.$route.query.title);
    }
  },
  mounted() {
    this.viewMoreNoJQuery('.box-description', 0);
  },
  methods: {
    onShare () {
      this.onShareComic(this.comic);
    },
    callPrepareReadMore() {
      const btn = document.querySelector('.read-more-btn');
      if (btn.classList.contains('short')) {
        btn.classList.remove('short');
        btn.classList.add('full');
        document.querySelector('.more-down').classList.add('hidden');
        document.querySelector('.summary-up').classList.remove('hidden');
        this.viewMoreNoJQuery('.box-description', 1);
      }
      else {
        btn.classList.remove('full');
        btn.classList.add('short');
        document.querySelector('.more-down').classList.remove('hidden');
        document.querySelector('.summary-up').classList.add('hidden');
        this.viewMoreNoJQuery('.box-description', 0);
      }
    },
    convertSecondsToMinutes(duration)
    {
      return this.fancyTimeFormat(duration);
    }
  },
}
</script>
