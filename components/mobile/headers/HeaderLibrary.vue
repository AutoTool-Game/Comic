<template>
  <div class="fixed-header-category">
    <div
      class="header-category py-2 px-3"
      :class="heightCate"
    >
      <div class="header-top-category flex justify-between">
        <nuxt-link
          class="w-1/5"
          to="/"
        >
          <svg-icon
            name="icon-back"
            class="mx-2"
          />
        </nuxt-link>
        <div class="w-3/5 font-medium text-lg text-white text-center">
          {{ title }}
        </div>
        <div class="header-right-category flex justify-end w-1/5 text-center items-center">
          <nuxt-link
            to="/"
          >
            <svg-icon
              name="icon-home"
              class="w-[24px] mx-2"
            />
          </nuxt-link>
          <nuxt-link
            to="/search"
          >
            <svg-icon
              name="icon-edit"
              class="w-[24px] mx-2"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="header-main-library flex justify-around my-4">
        <nuxt-link
          v-for="(item, index) in listLibraries"
          :key="index"
          :to="'/library?title_cate=' + item.value"
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
  name: "HeaderLibrary",
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
