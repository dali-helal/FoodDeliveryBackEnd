
const mongoose =require('mongoose')

const foodSchema=new mongoose.Schema({
    name :String,
    price:Number
})
const categorieSchema=new mongoose.Schema({
      categorie:String,
      Food :[foodSchema]
},{ timestamps: true })
const restaurantSchema=new mongoose.Schema({
  NameRestaurant :String ,
  Img :String,
  Ratings :Number,
  Foods :[categorieSchema]
}, { timestamps: true })

const Restaurant=mongoose.model("Restaurant",restaurantSchema)

module.exports=Restaurant