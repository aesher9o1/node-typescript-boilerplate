import express from 'express'
import * as data from '../assets/db.json'

const router = express()
type CATEGORIES = 'popularBrands' | 'offersNearYou' | 'expressDelivery' | 'gourmet' | 'exclusive'
enum CATEGORY {
  popularBrands = 'popularBrands',
  offersNearYou = 'offersNearYou',
  expressDelivery = 'expressDelivery',
  gourmet = 'gourmet',
  exclusive = 'exclusive'
}

const calculateExclusiveRestaurants = (): [] => {
  const exclusiveRestaurants: any = []

  data.forEach((restaurants: any) => {
    restaurants.restaurantList.forEach((restaurant: any) => {
      if (restaurant.isExlusive) exclusiveRestaurants.push(restaurant)
    })
  })
  return exclusiveRestaurants
}

router.get('/', (req, res) => {
  const queryCategory = req.query.category

  switch (queryCategory as CATEGORIES) {
    case CATEGORY.popularBrands:
      res.send(data[0].restaurantList)
      break
    case CATEGORY.offersNearYou:
      res.send(data[1].restaurantList)
      break
    case CATEGORY.expressDelivery:
      res.send(data[2].restaurantList)
      break
    case CATEGORY.gourmet:
      res.send(data[3].restaurantList)
      break
    case CATEGORY.exclusive:
      res.send(calculateExclusiveRestaurants())
      break
    default:
      res.send(400)
  }
})

export default router
