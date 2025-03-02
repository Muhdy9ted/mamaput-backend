export interface FoodPricingInfo {
    readonly pricePerServing: number;
    updatePricingInfo(p: number): void;
}  