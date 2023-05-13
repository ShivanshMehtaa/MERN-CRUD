const express = require('express')
const router = express.Router()
// const Workout = require('../models/workoutModel')
// not needed here bcoz of messy code
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}= require ('../controllers/workoutController')

//to get all workouts
// router.get('/',(req,res)=>{
//     res.json({mssg:"get all workouts"})
// })
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)
// router.get('/:id',(req,res)=>{
//     res.json({mssg: 'get single workout'})
// })

//post a new workout
//router.post('/', async(req,res)=>{
    // yeh code yaha nahi controller file mei karna hai
    // const {title,reps,weight} = req.body
    // try{
    //     const workout = await Workout.create({
    //         title,reps,weight
    //     })
    //     res.status(200).json(workout)
    // }
    // catch(error){
    //     res.status(400).json({error:error.message})
    // }
    // res.json({mssg:'post a new workout'})
//})

//instead=======================

router.post('/', createWorkout)

//delete a workout
// router.delete('/:id', (req,res)=>{
//     res.json({mssg:'delete a workout'})
// })
router.delete("/:id",deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)
// router.patch('/:id', (req,res)=>{
//     res.json({mssg:'update a workout'})
// })

module.exports = router