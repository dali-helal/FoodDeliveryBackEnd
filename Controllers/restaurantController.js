const  Restaurant =require('../models/Restaurant')


const getAllRestaurants=async (req,res)=>{
   try{
     const restaurants=await Restaurant.find({})
     res.status(200).json(restaurants)
   }
   catch(err){
    console.log(err)
   }
}

const getRestaurant=async (req,res)=>{
    const {id}=req.params
    try{
          const restaurant=await Restaurant.findById(id)
          res.status(201).json(restaurant)
    }
    catch(err){
        console.log(err)
    }
}

const postRestaurant=async (req,res)=>{
    const {NameRestaurant,
            Img ,
            Ratings ,
            Foods }=req.body
    try{
      const restaurant=await Restaurant.create({NameRestaurant,Img,Ratings,Foods})
       res.status(201).json(restaurant)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={
    getAllRestaurants,
    getRestaurant,
    postRestaurant

}