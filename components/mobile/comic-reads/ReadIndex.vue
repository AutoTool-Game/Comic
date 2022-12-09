<template>
  <div style="margin-top: 60px;">
    <div class="loader"></div>
    <div class="header-overlay"></div>
    <div
      id="filter-overlay"
      class="filter-overlay"
      @click="closeFilterOverlay()"
    ></div>
    <div id="list-chapter" class="list-chapter">
      <div class="p-3 flex justify-between border-1-b-333333">
        <div class="text-[#F1F1F1] text-sm">
          Đã ra {{ content.comic.count_chap }}/{{ content.comic.total_chap }} chương
        </div>
        <nuxt-link
          class="text-[#999999] flex"
          to=""
        >
          <span class="mx-2">Mới nhất</span>
          <svg-icon
            name="icon-sort-new"
          />
        </nuxt-link>
      </div>
      <div id="load-more-list-read">
        <div
          v-for="(item_issue, index_issue) in list_issues"
          :key="index_issue"
          class="flex justify-between flex-wrap p-3 border-1-b-333333"
        >
          <nuxt-link
            class="w-5/6 text-[#F1F1F1] text-sm pr-1"
            to=""
          >
            {{ item_issue.name }}
          </nuxt-link>
          <span
            class="w-1/6 my-auto"
          >
          <svg-icon
            v-if="item_issue.price == 0 && item_issue.label == 'free'"
            name="icon-free"
            class="mx-auto"
          />
          <svg-icon
            v-if="item_issue.permission.read != 1"
            name="icon-lock"
            class="mx-auto"
          />
        </span>
        </div>
      </div>
    </div>
    <div
      class="content-read"
      @click="setShowPlayer()"
    >
      <div
        v-for="(item_img, index_img) in content.list"
        id="comic-data-image"
        :key="index_img"
        class="list-image-preview"
      >
        <img
          class="w-full"
          :src="item_img"
          alt=""
        >
      </div>
    </div>
    <div class="player-reader border-1-b-333333">
      <div class="w-full flex">
        <div class="w-1/12 text-center my-auto">
          <svg-icon
            name="icon-back-chapter"
            class="mx-auto"
          />
        </div>
        <div class="w-5/6 text-center my-auto">Thần thoại Hy Lạp - ...</div>
        <div class="w-1/12 text-center my-auto">
          <svg-icon
            name="icon-next-chapter"
            class="mx-auto"
          />
        </div>
      </div>
    </div>
    <div class="muc-luc-cat flex justify-around">
      <div
        class="muc-luc text-center pt-2"
        @click="showIndex()"
      >
        <div>
          <svg-icon
            name="icon-index"
            class="mx-auto"
          />
        </div>
        <div class="mx-auto">
          Mục lục
        </div>
      </div>
      <div
        class="text-center pt-2"
        @click="autoScroll()"
      >
        <div>
          <svg-icon
            name="icon-auto-read"
            class="mx-auto icon-auto-read"
          />
          <svg-icon
            name="icon-auto-read-active"
            class="mx-auto icon-auto-read-active hidden"
          />
        </div>
        <div class="mx-auto text-auto-read">
          Đọc tự động
        </div>
      </div>
      <div class="text-center pt-2">
        <div>
          <svg-icon
            name="icon-audio-comic-read"
            class="mx-auto"
          />
        </div>
        <div class="mx-auto">
          Đọc tự động
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "~/components/common/items/SvgIcon";
import { comicMixin } from '~/mixins/comicMixin';
export default {
  name: "ReadIndex",
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
  data () {
    return {
      old_scroll_top: 0,
      list_issues: [
        {
          id: 1,
          name: 'Chap 1',
          count_view: 9,
          price: 0,
          permission: {
            read: 1,
          },
          order: 1,
          label: 'free',
        },
        {
          id: 2,
          name: 'Chap 2',
          count_view: 9,
          price: 0,
          permission: {
            read: 1,
          },
          order: 2,
          label: 'free',
        },
        {
          id: 3,
          name: 'Chap 3',
          count_view: 9,
          price: 1000,
          permission: {
            read: 0,
          },
          order: 3,
          label: 'paid',
        },
      ],
      pause: true,
      id: null,
      canScroll: 1,
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const headerReader = document.querySelector('.header-reader');
      if (headerReader.clientHeight > 0) {
        const scrollTop = window.scrollY;
        if (scrollTop > this.old_scroll_top) {
          this.hidePlayer();
        } else {/* Scroll Up */
          this.showPlayer();
        }
        this.old_scroll_top = scrollTop;
      }
    },
    showIndex() {
      document.getElementById('list-chapter').classList.add('show');
      document.getElementById('filter-overlay').style = 'display: block';
    },
    autoScroll() {
      document.querySelector('.icon-auto-read').classList.toggle('hidden');
      document.querySelector('.icon-auto-read-active').classList.toggle('hidden');
      document.querySelector('.text-auto-read').classList.toggle('text-FFB340');
      if (this.paused === true) {
        clearInterval(this.id);
        this.paused = false;
      } else {
        this.id = setInterval(() => {
          window.scrollBy({
            top: 5,
            left: 0,
            behavior: 'smooth'
          });
        }, 10);
        this.paused = true;
      }
    },
    hidePlayer() {
      if (this.canScroll === 1) {
        document.querySelector('.header-reader').classList.add('header-sticky-hide');
        document.querySelector('.player-reader').classList.add('hide-player');
        document.querySelector('.muc-luc-cat').classList.add('hide-player');
      }
    },
    showPlayer() {
      if (document.querySelector('.header-reader').classList.contains('header-sticky-hide')) {
        document.querySelector('.header-reader').classList.remove('header-sticky-hide');
      }

      if (document.querySelector('.player-reader').classList.contains('hide-player')) {
        document.querySelector('.player-reader').classList.remove('hide-player');
      }

      if (document.querySelector('.muc-luc-cat').classList.contains('hide-player')) {
        document.querySelector('.muc-luc-cat').classList.remove('hide-player');
      }
    },
    setShowPlayer() {
      this.canScroll = 0;
      setTimeout(() => {
        this.canScroll = 1;
      }, 2000);
      this.showPlayer();
    },
    closeFilterOverlay()
    {
      document.getElementById('filter-overlay').style = 'display: none';
      document.getElementById('list-chapter').classList.remove('show');
    },
  }
}
</script>
