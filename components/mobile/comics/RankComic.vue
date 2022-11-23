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
      <div class="w-full hide-scrollbar overflow-x-auto">
        <div class="w-max">
          <div
            v-for="(it, ind) in comic.categories"
            :key="ind"
            class="inline-block mr-2 py-1 px-2 rounded-full border-1-FFB340 text-[#FFB340] my-2 text-xs"
          >
            <nuxt-link
              to=""
            >
              {{ it.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="my-2 flex">
        <svg-icon
          name="icon-view"
        />
        <span class="text-white">
              &nbsp; {{ commaSeparateNumber(comic.count_read) }}
            </span>
      </div>
      <div class="my-2 flex">
        <svg-icon
          name="icon-eye"
        />
        <span class="text-white">
              &nbsp; {{ commaSeparateNumber(comic.count_view) }}
            </span>
      </div>
    </div>
    <div class="z-10 grid-center absolute top-0 left-0">
      <svg-icon
        :name="iconRanking"
        class="w-full h-full"
      />
      <span
        class="absolute font-bold top-0 text-sm"
        :class="colorRanking"
        v-text="labelRanking"
      />
    </div>
  </div>
</template>

<script>
import ThumbComic from "~/components/mobile/comics/ThumbComic";
import { comicMixin } from '~/mixins/comicMixin';
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  name: "RankComic",
  components: {
    ThumbComic,
    SvgIcon
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  },
  computed: {
    labelRanking () {
      return this.index;
    },
    iconRanking () {
      const ranking = this.index;
      if (ranking < 4) {
        return `icon-top-${ranking}`;
      }
      return 'icon-top-n';
    },
    colorRanking () {
      const ranking = this.index;
      if (ranking === 1) {
        return 'color-rank-1';
      }
      else if (ranking === 2) {
        return 'color-rank-2';
      }
      else if (ranking === 3) {
        return 'color-rank-3';
      }
      return 'color-rank';
    }
  },
  mounted () {

  }
}
</script>
