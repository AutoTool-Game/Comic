import Vue from 'vue'
import SvgIcon from '~/components/common/items/SvgIcon'

const components = {
  SvgIcon,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
