import { FoodBasicInfo } from './FoodBasicInfo';
import { FoodDisplayInfo } from './FoodDisplayInfo';
import { FoodPricingInfo } from './FoodPricingInfo';
import { FoodDateInfo } from './FoodDateInfo';

export type Food = FoodBasicInfo & FoodDisplayInfo & FoodPricingInfo & FoodDateInfo;
