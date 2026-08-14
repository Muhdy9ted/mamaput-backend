import { Router } from 'express';
import { FoodController } from '../controllers/foodController';

const router = Router();

router.get('/', FoodController.getAllFoods);
router.post('/', FoodController.createFood);

export default router;
