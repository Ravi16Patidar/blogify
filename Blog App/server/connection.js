import mongoose from "mongoose";

export default function databaseConnection(url){
    mongoose.connect(url).then(()=>console.log("DataBase connected successfully")).catch((err)=>console.log("failed to connect database",err))
}