<template>
  <div>
    <div class="header-overlay"></div>
    <div class="filter-overlay"></div>
    <div class="mobile-menu">
      <div class="user-login my-5">
        <div class="login-button-menu flex">
          <div class="btn-login mx-auto">Đăng nhập</div>
        </div>
        <div class="main-menu my-5">
          <nuxt-link
            v-for="(item, index) in mobile_menu"
            :key="index"
            :to="item[1]"
            :class="item[0]"
          >
            <div class="w-1/4">
              <svg-icon
                :name="item[2]"
                class="mx-auto"
              />
            </div>
            <span class="w-1/2 text-base" v-text="item[3]"></span>
            <div class="w-1/4">
              <svg-icon
                :name="item[4]"
                class="mx-auto"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '~/components/common/items/SvgIcon';

export default {
  name: "MobileMenu",
  components: {
    SvgIcon
  },
  data() {
    return {
      mobile_menu: [
        [
          'text-[#FFB340] flex justify-between py-3',
          '/',
          'icon-home-active',
          'Trang chủ',
          'icon-more-active',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-audio-comic',
          'Truyện kiểu mới',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-tu-sach',
          'Tủ truyện',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-setting',
          'Cài đặt App',
          'icon-more',
        ],
        [
          'text-white flex justify-between py-3',
          '/',
          'icon-logout',
          'Đăng xuất',
          '',
        ],
      ]
    }
  }
}
</script>
