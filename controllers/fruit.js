import { FruitModel } from "../models/fruit,js";


export const getFruits = async (req, res, next) =>{
    try {
        //Get query params
        const{limit,skip,filter}= req.query;

        //Get all fruits from database
        const allFruits = await FruitModel
        .find(filter)
        .limit(limit)
        .skip(skip)

        //Return all fruits as response
        res.status(200).json(allFruits)
    } catch (error) {
        next(error);
    }
};

//Post fruits
export const postFruits = async(req, res, next) => {
    try {
        //Updates fruit by id
        const postAFruit = await FruitModel.create(req.body)

        //response
        
    } catch (error) {
        if (error.errorResponse.code === 5050){
            return res.status(401).send('Fill the name or any other fields')
        }
        
    }
};



//Patch fruits
export const patchFruits = async(req, res, next) => {
    try {
        //Updates fruit by id
        const updateFruit = await FruitModel.findByIdAndUpdate(req.params.id, req.body,{new:true})

        //response
        res.status(200).json(updateFruit)
    } catch (error) {
        
    }
};


//Delete fruits
export const deleteFruits = async (req, res, next)=>{
    try {
        //delete fruit by id
        const deleteFruit = await FruitModel.findByIdAndDelete(req.params.id)

        //response
        res.status(200).json(deleteFruit)
    } catch (error) {
        
    }
};


export const getFruit = async(req, res, next)=>{
    try {
        //Get fruit by id

        const getOneFruit = await FruitModel.findById(req.params.id)

        //return response
        res.status(200).json(getOneFruit)
    } catch (error) {
        
    }
};