/* eslint-disable no-unused-vars */
export interface FoodDisplayInfo {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    updateDisplayInfo(d: string, i: string): void;
}
  