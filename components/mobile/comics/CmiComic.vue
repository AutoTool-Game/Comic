<template>
  <nuxt-link
    :comic="comic"
    to=""
  >
    <img
      :src="comic.thumb"
      alt=""
      class="w-max rounded-xl"
    >
    <div class="px-1">
      <div class="text-white text-sm">
        {{ comic.name }}
      </div>
      <div class="flex justify-around">
        <div class="w-1/2 flex">
          <svg-icon
            name="icon-like"
          />
          <div class="text-white">
            &nbsp; {{ commaSeparateNumber(comic.count_like) }}
          </div>
        </div>
        <div class="w-1/2 flex">
          <svg-icon
            name="icon-view"
          />
          <div class="text-white">
            &nbsp; {{ commaSeparateNumber(comic.count_view) }}
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>

import { comicMixin } from '~/mixins/comicMixin';

import SvgIcon from '~/components/common/items/SvgIcon';

export default {
  name: "CmiComic",
  components: {
    SvgIcon
  },
  mixins: [comicMixin],
  props: {
    comic: {
      type: Object,
      required: true,
    }
  },
}
</script>
