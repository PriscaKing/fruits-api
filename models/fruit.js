import mongoose from "mongoose";
import {model, Schema, Types} from "mongoose";
import {toJSON} from '@reis/mongoose-to-json';



const fruitSchema = new Schema({
    name:{type:String,required:true},
    color:{type:String, required:true},
    state:{type:String, enum: ['ripe', 'unripe'], required:true},
    image:{type:String, unique:true}
},{
    timestamps:true
})

fruitSchema.plugin(toJSON);
export const FruitModel = model('fruit', fruitSchema);