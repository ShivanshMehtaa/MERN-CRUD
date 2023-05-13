const Workout = require('../models/workoutModel')
const mongoose= require ('mongoose')

//get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({
        //blank bcoz we have to get all workouts
    }).sort({createdAt: -1})
    //-1 bcoz of arranging it in newest first order
    res.status(200).json(workouts)
}

//get a single workout
    const getWorkout = async(req,res) =>{
        const {id} = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No Such Workout'})
        }

        const workout = await Workout.findById(id)

        if(!workout){
            //return bcoz we want to quit it right herre
            return res.status(404).json({error:'no such workout'})
        }

        res.status(200).json(workout)

    }

//create a new workout

const createWorkout = async(req,res) =>{
    const {title,reps,weight} = req.body
    //add doc to db
    try{
        const workout = await Workout.create({
            title,reps,weight
        })
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No Such Workout'})
    }

    const workout = await Workout.findOneAndDelete({
        _id:id
    })

    if(!workout){
        //return bcoz we want to quit it right herre
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No Such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({
        _id:id
    },{
        ...req.body
    })

    if(!workout){
        //return bcoz we want to quit it right herre
        return res.status(404).json({error:'no such workout'})
    }

    return res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}