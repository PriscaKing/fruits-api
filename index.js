import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import { dbConnection } from "./config/db.js";



//use app
const app = express();
dbConnection()



//Listen for port
const port = process.env.PORT || 5050;
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
});

