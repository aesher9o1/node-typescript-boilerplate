import express from 'express'
import * as data from '../assets/db.json'

const router = express()

router.get('exclusives', (req, res) => {
  const exclusiveRestaurants: any = []

  data.forEach((restaurants: any) => {
    restaurants.restaurantList.forEach((restaurant: any) => {
      if (restaurant.isExlusive) exclusiveRestaurants.push(restaurant)
    })
  })

  res.send(exclusiveRestaurants)
})

export default router
