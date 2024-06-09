import mongoose from "mongoose";
const connect = mongoose.connect("mongodb://localhost:27017/travel");

connect.then(()=>{
    console.log("Database connected sucessfully");
})
.catch(()=>{
    console.log("Database could not be connected");
});