<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :show-close="false"
    :close-on-click-modal="false"
    :before-close="handleClose"
    :custom-class="`${isShowTitle && 'dialog-show-title'}`"
  >
    <div
      v-show="isShowTitle"
      slot="title"
      class="w-full grid-center"
    >
      <h3
        class="text-lg-18-21 text-black-222 font-medium"
        v-text="title"
      />
    </div>
    <div class="w-full">
      <component
        :is="nameDialogType"
        v-if="dialogVisible"
        @close="closeDialog"
      />
    </div>
    <span
      v-if="!isDisableBtnClose"
      class="text-base-16-19 sm:hidden text-white-default absolute -bottom-8 left-center"
      @click="closeDialog"
      v-text="'Đóng'"
    />
  </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import {dialogTypes, nameDialogType} from '~/configs/common'

export default {
  components: {
    RequireLogin: () => import('~/components/mobile/dialogs/RequireLogin'),
  },
  data() {
    return {
      dialogVisible: false,
      title: '',
      isDisableBtnClose: false,
    }
  },
  computed: {
    ...mapGetters('dialog', {
      isShowDialog: 'isShowDialog',
      dialogType: 'dialogType',
      isDialogInsertCate: 'isDialogInsertCate',
      isShowDialogAuth: 'isShowDialogAuth'
    }),
    nameDialogType() {
      return nameDialogType[this.dialogType]
    },
    isShowTitle() {
      return ![
        dialogTypes.REQUIRE_LOGIN
      ].includes(this.dialogType)
    },
  },
  watch: {
    isShowDialog: {
      immediate: true,
      handler() {
        this.dialogVisible = this.isShowDialog && !this.isShowDialogAuth
      }
    }
  },
  mounted() {
    this.dialogVisible = this.isShowDialog
  },
  methods: {
    handleClose() {
      this.changePropertiesDialog({
        isShowDialog: false,
        isDialogInsertCate: false,
        dialogType: dialogTypes.NONE
      })
    },
    closeDialog() {
      this.dialogVisible = false;
      this.handleClose();
    },
  }
}
</script>
