<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="false"
    :close-on-click-modal="false"
    :before-close="handleClose"
    custom-class="dialog-auth"
  >
    <div
      slot="title"
      class="w-full grid-center relative"
    >
      <svg-icon
        name="logo-comic-login"
        class="w-auto h-10"
      />
      <button
        class="absolute right-0 top-[-10px] bg-[#1C1C1E] border-0"
        @click="closeDialog"
      >
        <svg-icon
          name="icon-close"
        />
      </button>
    </div>
    <div
      v-if="isShowDialogAuth"
      class="w-full"
    >
      <component
        :is="nameAuth"
      />
    </div>
  </el-dialog>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { authTypeName } from '~/configs/common'
import { comicMixin } from "~/mixins/comicMixin";
import SvgIcon from "~/components/common/items/SvgIcon";

export default {
  components: {
    AuthLogin: () => import('~/components/mobile/auth/AuthLogin'),
    AuthRegister: () => import('~/components/mobile/auth/AuthRegister'),
    SvgIcon
  },
  mixins: [comicMixin],
  data () {
    return {
      dialogVisible: false,
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('dialog', {
      isShowDialogAuth: 'isShowDialogAuth',
      authType: 'authType'
    }),
    isRouteAuthLogin () {
      return this.$route.name === 'login'
    },
    nameAuth () {
      return authTypeName[this.authType]
    }
  },
  watch: {
    isShowDialogAuth: {
      immediate: true,
      handler () {
        this.dialogVisible = this.isShowDialogAuth
      }
    },
    isRouteAuthLogin: {
      immediate: true,
      handler () {
        if (this.isRouteAuthLogin) {
          this.changePropertiesDialog({
            isShowDialogAuth: true
          })
          this.dialogVisible = true
        }
      }
    },
    nameAuth: {
      immediate: true,
      handler () {
        this.isLoading = true
        this.$nextTick(() => {
          this.isLoading = false
        })
      }
    }
  },
  methods: {
    ...mapActions('dialog', {
      changePropertiesDialog: 'changePropertiesDialog'
    }),
    handleClose () {
      this.changePropertiesDialog({
        isShowDialogAuth: false
      })
    },
    closeDialog () {
      if (this.isRouteAuthLogin) {
        this.dialogVisible = false
        this.handleClose()
        return this.$router.replace(this.routeHome)
      }
      this.dialogVisible = false
      this.handleClose()
    }
  }
}
</script>
