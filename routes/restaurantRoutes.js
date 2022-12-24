const express = require('express')
const restaurant= require('../Controllers/restaurantController')
const router = express.Router()

router.get('/',restaurant. getAllRestaurants)
router.get('/:id',restaurant. getRestaurant)
router.post('/postRestaurant',restaurant.postRestaurant)


module.exports = router