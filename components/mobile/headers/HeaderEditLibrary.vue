<template>
  <div class="fixed-header-category">
    <div
      class="header-category py-2 px-3"
      :class="heightCate"
    >
      <div class="header-top-category flex justify-between">
        <div class="w-4/5 text-white">
          {{ title }}
        </div>
        <div class="header-right-category flex justify-end w-1/5 text-center items-center">
          <button id="icon-delete" class="icon-delete-content-library px-2"></button>
          <nuxt-link
            to="/library"
          >
            <svg-icon
              name="icon-close"
              class="w-[24px] mx-2"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="header-main-library flex justify-around my-4">
        <nuxt-link
          v-for="(item, index) in listLibraries"
          :key="index"
          :to="'/library/edit?title_cate=' + item.value"
          class="flex-wrap tab-library"
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
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";

export default {
  name: "HeaderEditLibrary",
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    heightCate: {
      type: String,
      default: 'h-[100px]'
    }
  },
  data () {
    return {
      listLibraries: [
        {
          name: 'Đang đọc',
          value: 'reading'
        },
        {
          name: 'Đang xem',
          value: 'watching'
        },
        {
          name: 'Đang theo dõi',
          value: 'following'
        },
        {
          name: 'Mua lẻ',
          value: 'buy_content'
        }
      ]
    }
  },
  computed: {
    titleActive () {
      if (this.$route.query.title_cate === undefined) {
        return this.listLibraries.filter(rt => rt.value === 'reading');
      }
      return this.listLibraries.filter(rt => rt.value === this.$route.query.title_cate);
    }
  },
}
</script>
