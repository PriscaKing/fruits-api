import { Router} from "express";
import { deleteFruits, getFruit, getFruits, patchFruits, postFruits } from "../controllers/fruit.js";

const fruitRouter = Router();

fruitRouter.get('/fruits',getFruits);

fruitRouter.get('/fruits/:id', getFruit);

fruitRouter.post('/fruits', postFruits)

fruitRouter.patch('/fruits/:id', patchFruits);

fruitRouter.delete('/fruits/:id', deleteFruits);

export default fruitRouter;

