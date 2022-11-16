import { createSlug } from '~/helpers/common'
import { routeNames } from '~/configs/common'

export default {
  computed: {
    routeHome () {
      return {
        name: routeNames.HOME
      }
    },
    routeNames () {
      return routeNames
    }
  },
  methods: {
    generateSlug(item) {
      return createSlug(`${item.name}-${item.id}`)
    },
  }
}
