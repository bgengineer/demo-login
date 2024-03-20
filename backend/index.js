import mongoose from "mongoose";
import express from "express";
import { PORT, MONGODB } from "./config.js";
import cors from 'cors'
import router from "./routers/regRouter.js";


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

mongoose.connect(MONGODB)
.then(() => {
    console.log("Connected to DB")
    app.listen(PORT, ()=>{
        console.log("Sever is running")
    })
})