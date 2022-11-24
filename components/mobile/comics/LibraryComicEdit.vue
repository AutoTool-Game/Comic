<template>
  <div class="my-3 flex justify-between">
    <div class="1/10 text-center">
      <div class="input-checkbox" :data-id="comic.id" @click="toggleCheckbox(comic.id)"></div>
    </div>
    <div class="w-3/10 text-center">
      <thumb-comic
        :comic="comic"
        :class-parent="'w-[108px] mx-auto'"
      />
    </div>
    <div class="w-6/10 flex-wrap">
      <nuxt-link
        to=""
        class="text-sm text-white mb-2"
      >
        {{ comic.name }}
      </nuxt-link>
      <div
        v-if="titleActive === 'reading'"
      >
        <div class="my-2">
        <span class="text-sm text-[#828282]">
          Đã đọc: {{ comic.meta_data.count_chap }}/{{ comic.total_chap }} chương
        </span>
        </div>
        <div class="my-2">
        <span class="text-sm text-[#828282]">
          Đang đọc: {{ comic.meta_data.last_chap.name }}
        </span>
        </div>
      </div>
      <div
        v-else-if="titleActive === 'watching'"
      >
        <div class="my-2">
          <span class="text-sm text-[#828282]">
            Đã xem: {{ comic.meta_data.count_chap }}/{{ comic.total_video }} video
          </span>
        </div>
        <div class="my-2">
          <span class="text-sm text-[#828282]">
            Đang xem: {{ comic.meta_data.last_chap.name }}
          </span>
        </div>
      </div>
      <div
        v-else-if="titleActive === 'following' || titleActive === 'buy_content'"
      >
        <div class="my-2">
          <span class="text-sm text-[#828282]">
            Tác giả:
            <nuxt-link
              v-for="(it, ind) in comic.authors"
              :key="ind"
              to=""
              class="text-[#FFB340]"
            >
              {{ it.name }} ,
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbComic from "~/components/mobile/comics/ThumbComic";
import { comicMixin } from '~/mixins/comicMixin';
export default {
  name: "LibraryComicEdit",
  components: {
    ThumbComic,
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true,
    },
    titleActive: {
      type: String,
      required: true,
    }
  },
}
</script>
