import { FoodCategory } from "../enums/FoodCategory";

export interface FoodBasicInfo {
  readonly id: string;
  readonly category: FoodCategory[];
  readonly timeToCookBatch: number;
  readonly servingsPerBatch: number;
  readonly availableServings: number;
  updateBasicInfo(t: number, s: number, a: number): void;
  serve(q: number): void;
  cookBatch(): void;
}
  