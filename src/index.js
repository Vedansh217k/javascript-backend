/*require('dotenv').config({path: './env'})*/
import dotenv from "dotenv";
import connectDB  from "./db/index.js";
dotenv.config();
connectDB();




















/*
import express from "express"

const app = express()
( async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("errr:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log("ERROR:", error);
        })

    }catch(error){
        console.log("ERROR", ERROR)
        throw error

    }
}) ()*/