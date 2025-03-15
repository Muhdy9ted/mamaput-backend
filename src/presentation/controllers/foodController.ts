import { Request, Response } from 'express';
import { FoodService } from '../../application/services/FoodService';

export class FoodController {
  static async getAllFoods(req: Request, res: Response) {
    try {
      const foods = await FoodService.getAllFoods();
      res.json(foods);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  static async createFood(req: Request, res: Response) {
    try {
      const food = await FoodService.createFood(req.body);
      res.status(201).json(food);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}
