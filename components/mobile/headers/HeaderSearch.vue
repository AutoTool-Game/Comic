<template>
  <div class="header flex justify-between px-2 mt-4 mb-5">
    <div class="search-box w-4/5">
      <form
        id="top-search-form"
        action="/search/result"
        class="relative"
      >
        <div>
          <input
            ref="keyword"
            v-model="keyword"
            type="text"
            class="search-page"
            placeholder="Nhập từ khóa tìm kiếm"
            required
            autocomplete="off"
            @input="changeKeyword"
            @change="handleChangeKeyword"
          >
        </div>
        <svg-icon
          v-show="keyword !== null"
          name="icon-clear-search"
          class="absolute top-[11px] right-[10px]"
        />
      </form>
    </div>
    <nuxt-link
      class="close-search w-1/5"
      to="/"
    >
      Đóng
    </nuxt-link>
  </div>
</template>

<script>
import { routeNames } from '~/configs/common'
import SvgIcon from "~/components/common/items/SvgIcon";
export default {
  name: "HeaderSearch",
  components: {
    SvgIcon
  },
  data () {
    return {
      keyword: '',
      isGotoItem: false
    }
  },
  computed: {
    isRouteSearch () {
      return [
        routeNames.SEARCH,
        routeNames.SEARCH_RESULT,
      ]
    }
  },
  created () {
    this.keyword = this.$route.params.slug;
  },
  methods: {
    changeKeyword (event) {
      this.keyword = event.target.value
    },
    handleChangeKeyword () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (this.isGotoItem) {
          return
        }
        if (this.keyword) {
          if (this.isRouteSearch) {
            this.$router.replace({
              path: `/search/${this.keyword}`
            })
          } else {
            this.$router.push({
              path: `/search/${this.keyword}`
            })
          }
        }
        this.isShowSuggest = false
      }, 500)
    },
  }
}
</script>
