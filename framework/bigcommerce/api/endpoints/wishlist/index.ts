import { GetAPISchema, createEndpoint } from '@commerce/api'
import wishlist from '@commerce/api/endpoints/wishlist'
import type { WishlistSchema } from '../../../types/wishlist'
import type { BigcommerceAPI } from '../..'
import getWishlist from './get-wishlist'
import addItem from './add-item'
import removeItem from './remove-item'

export type WishlistAPI = GetAPISchema<BigcommerceAPI, WishlistSchema>

export type WishlistEndpoint = WishlistAPI['endpoint']

export const handlers: WishlistEndpoint['handlers'] = {
  getWishlist,
  addItem,
  removeItem,
}

const wishlistEndpoint = createEndpoint({
  handler: wishlist as WishlistAPI['endpoint']['handler'],
  handlers,
})

export default wishlistEndpoint
