import { FoodCategory } from "../enums/FoodCategory";
import { Food } from "../interfaces/Food";
import { v4 as uuidv4 } from 'uuid';

class FoodItem implements Food {
    private readonly _id: string;
    private _availableServings: number;
    private readonly _createdAt: Date;
    private _updatedAt: Date;

    constructor(
        private _category: FoodCategory[],
        private _timeToCookBatch: number,
        private _servingsPerBatch: number,
        private _name: string,
        private _description: string,
        private _image: string,
        private _pricePerServing: number
    ) {
        this._id = uuidv4();
        this._availableServings = 0;
        this._createdAt = new Date();
        this._updatedAt = new Date();
    }

    // Getters
    public get id(): string {
        return this._id;
      }
    
      public get category(): FoodCategory[] {
        return this._category;
      }
    
      public get timeToCookBatch(): number {
        return this._timeToCookBatch;
      }
    
      public get servingsPerBatch(): number {
        return this._servingsPerBatch;
      }
    
      public get availableServings(): number {
        return this._availableServings;
      }
    
      public get name(): string {
        return this._name;
      }
    
      public get description(): string {
        return this._description;
      }
    
      public get image(): string {
        return this._image;
      }
    
      public get pricePerServing(): number {
        return this._pricePerServing;
      }
    
      public get createdAt(): Date {
        return this._createdAt;
      }
    
      public get updatedAt(): Date {
        return this._updatedAt;
      }

  //Setters
  protected set timeToCookBatch(value: number) {
    this._timeToCookBatch = value;
  }

  protected set servingsPerBatch(value: number) {
    this._servingsPerBatch = value;
  }

  protected set availableServings(value: number) {
    this._availableServings = value;
  }

  protected set description(value: string) {
    this._description = value;
  }

  protected set image(value: string) {
    this._image = value;
  }

  protected set pricePerServing(value: number) {
    this._pricePerServing = value;
  }

  protected set updatedAt(value: Date) {
    this._updatedAt = value;
  }

    public updateBasicInfo(timeToCookBatch: number, servingsPerBatch: number, availableServings: number): void {
        this.timeToCookBatch = timeToCookBatch;
        this.servingsPerBatch = servingsPerBatch;
        this.availableServings = availableServings;
        this.updatedAt = new Date();
    }

    public updateDisplayInfo(description: string, image: string): void {
        this.description = description;
        this.image = image;
        this.updatedAt = new Date();
    }

    public updatePricingInfo(pricePerServing: number): void {
        this.pricePerServing = pricePerServing;
        this.updatedAt = new Date();
    }

    public serve(quantity: number): void {
      if (quantity < 1 || !Number.isInteger(quantity)) {
        throw new Error('Quantity must be a positive whole number');
      }
      if (this.availableServings === 0) {
        throw new Error('No servings available');
      }
      if (quantity > this.availableServings) {
        throw new Error('Not enough servings available');
      }
      this.availableServings = this.availableServings - quantity;
      this.updatedAt = new Date();
    }

    public cookBatch(): void {
      this.availableServings = this.availableServings + this.servingsPerBatch;
      this.updatedAt = new Date();
    }
}

export default FoodItem;