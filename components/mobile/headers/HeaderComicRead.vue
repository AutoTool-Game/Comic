<template>
  <div id="header-reader" class="header-reader fixed-menu">
    <div class="flex justify-between">
      <div class="w-1/6">
        <nuxt-link
          to="/"
        >
          <svg-icon
            name="icon-back"
            class="mx-auto"
          />
        </nuxt-link>
      </div>
      <div class="w-4/6 text-[#F1F1F1]">
        {{ content.name }}
      </div>
      <div class="w-1/6">
        <svg-icon
          name="icon-share"
          class="mx-auto"
          @click="onShare"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { comicMixin } from "~/mixins/comicMixin";
import SvgIcon from "~/components/common/items/SvgIcon";

export default {
  name: "HeaderComicRead",
  components: {
    SvgIcon
  },
  mixins: [comicMixin],
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onShare () {
      this.onShareComic(this.content.comic);
    },
  }
}
</script>
