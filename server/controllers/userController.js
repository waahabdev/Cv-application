// export default router
// const router = require('express').Router()
// const userModel = require ('../models/userModel.js')

//här specifieras vilken funktion som ska användas. vad ska ske när vi gör en get mot denna url, dvs getUser (alla users)
// router.get('/', userModel.getUser)
// module.exports = router

//  export const getUsers = async (req, res) => {
//     try{
//         const allUsers = await user.find()
//         res.status(200).json(allUsers); //skickar tillbaka alla users
//     }
//     catch (error){
//         res.status(500).json(error);
//     }
// }

// export const createUser = async(req, res) => {
//     //the body of req gets stored in NewUser från client side
//     const user = req.body
//     const newUser = new user(user)
//     try{
//         await newUser.save() //sparar till databasen
//         res.status(201).json(newUser);
//     }
//     catch(error){
//         res.status(404).json({message: error.message})
//     }

// }