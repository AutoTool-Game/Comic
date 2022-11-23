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
            to="/search"
          >
            <svg-icon
              name="icon-search"
              class="w-[24px] mx-2"
            />
          </nuxt-link>
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
      <div
        v-if="showListCate === true"
        class="header-main-category py-4 w-full hide-scrollbar overflow-x-auto"
      >
        <div class="w-max h-full">
          <div
            v-for="(item, index) in listCate"
            :key="index"
            class="text-white inline-block mr-4 tabs-link"
          >
            <nuxt-link
              :to="'/category/' + item.id"
            >
              <div
                class="tab-box tab-link w-full relative"
              >
                {{ item.name }}
                <div
                  class="absolute w-full mt-2"
                >
                  <svg-icon
                    v-if="item.id == idActive"
                    name="icon-category-active"
                    class="mx-auto"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '~/components/common/items/SvgIcon';

export default {
  name: "HeaderCategory",
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showListCate: {
      type: Boolean,
      default: true,
    },
    heightCate: {
      type: String,
      default: 'h-[100px]'
    }
  },
  data() {
    return {
      listCate: [
        {
          id: 1,
          name: 'Tất cả',
          parent_id: 0,
          slug: 'thieu-nhi',
          for_kid: 1
        },
        {
          id: 42,
          name: 'Song ngữ',
          parent_id: 1,
          slug: 'song-ngu',
          for_kid: 1
        },
        {
          id: 10,
          name: 'Cổ tích - thần thoại',
          parent_id: 1,
          slug: 'co-tich-than-thoai',
          for_kid: 1
        },
        {
          id: 14,
          name: 'Ngụ ngôn',
          parent_id: 1,
          slug: 'ngu-ngon',
          for_kid: 1
        },
        {
          id: 13,
          name: 'Dân gian Việt Nam',
          parent_id: 1,
          slug: 'dan-gian-viet-nam',
          for_kid: 1
        },
        {
          id: 6,
          name: 'Giáo dục - khoa học',
          parent_id: 1,
          slug: 'giao-duc-khoa-hoc',
          for_kid: 1
        },
        {
          id: 7,
          name: 'Kĩ năng cho trẻ',
          parent_id: 1,
          slug: 'ki-nang-cho-tre',
          for_kid: 1
        },
        {
          id: 15,
          name: 'Thơ thiếu nhi',
          parent_id: 1,
          slug: 'tho-thieu-nhi',
          for_kid: 1
        },
      ],
      virtualData: {
        slides: [],
      },
    }
  },
  computed: {
    idActive () {
      return this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1);
    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>
