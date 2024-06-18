import type { StoreProductRoot } from '@faststore/core/api'

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      return root.itemId
    },
  },
}

export default productResolver