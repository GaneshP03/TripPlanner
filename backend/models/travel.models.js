import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema({
 fromplace:{
    type: String,
        required: [true, 'Place is required'],
 },

 dest:{
    type: String,
        required: [true, 'Place is required'],
 },

 budget:{
    type:Number,
    required:[true,"Budget is required"]
 },
 
 days:{
    type:Number,
    required:[true,'numbers of days is required']
 },

 people:{
    type:Number,
    required:[true,'Number of people']
 },

 places:{
    type:String,
    required:[true,"This feild is required"]
 }
});

const travelSchema = new mongoose.model('itnry',TravelSchema);

export default travelSchema;