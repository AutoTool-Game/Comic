<template>
  <div>
    <div class="header-comic-detail p-3">
      <div class="flex justify-between mb-5">
        <div class="w-1/5">
          <nuxt-link
            to="/"
          >
            <svg-icon
              name="icon-back"
              class="mx-2"
            />
          </nuxt-link>
        </div>
        <div class="w-2/5"></div>
        <div class="w-2/5 flex justify-between text-center items-center">
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
      <div class="mb-4">
        <img
          :src="comic.thumb"
          width="180"
          alt=""
          class="mx-auto"
        >
      </div>
      <div class="text-center">
        <span class="text-white" v-text="comic.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import { comicMixin } from "~/mixins/comicMixin";
import SvgIcon from '~/components/common/items/SvgIcon';

export default {
  name: "HeaderComic",
  components: {
    SvgIcon,
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  created() {},
  mounted () {
  },
  methods: {
    onShare () {
      this.onShareComic(this.comic);
    },
  }
}
</script>
