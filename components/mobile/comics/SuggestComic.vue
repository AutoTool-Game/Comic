<template>
  <div class="my-3 flex justify-between relative">
    <div class="w-2/5 text-center">
      <thumb-comic
        :comic="comic"
        :class-parent="'w-[108px] mx-auto'"
      />
    </div>
    <div class="w-3/5 flex-wrap">
      <nuxt-link
        to=""
        class="text-sm text-white mb-2"
      >
        {{ comic.name }}
      </nuxt-link>
      <div class="my-1 text-sm">
        <span class="text-[#999999]">Tác giả: </span>
        <span
          v-if="comic.authors !== ''"
          class="text-[#FFB340]"
        >
          <span
            v-for="(author, key_author) in comic.authors"
            :key="key_author"
          >
            {{ author.name }},&nbsp;
          </span>
        </span>
      </div>
      <div class="my-1 text-sm">
        <span class="text-[#999999]">Nhà cung cấp: </span>
        <span
          v-if="comic.publishing_houses !== ''"
          class="text-[#FFB340]"
        >
        </span>
      </div>
      <div class="my-1 text-sm">
        <span class="text-[#999999]">Thể loại: </span>
        <span
          v-if="comic.categories !== ''"
          class="text-[#FFB340]"
        >
          <span
            v-for="(cate, key_cate) in comic.categories"
            :key="key_cate"
          >
            {{ cate.name }},&nbsp;
          </span>
        </span>
      </div>
      <div class="my-1 text-sm">
        <span class="text-[#999999]">
          Tình trạng:
          <span
            v-if="comic.count_chap === comic.total_chap"
          >
          Đã hoàn thành
        </span>
        <span
          v-else-if="comic.count_chap !== comic.total_chap"
        >
          Chưa hoàn thành
        </span>
        </span>
      </div>
      <div class="my-1 text-sm">
        <span class="text-[#999999]">Lượt theo dõi: {{ comic.count_like }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbComic from "~/components/mobile/comics/ThumbComic";
import { comicMixin } from '~/mixins/comicMixin';
export default {
  name: "SuggestComic",
  components: {
    ThumbComic
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true,
    },
  }
}
</script>
