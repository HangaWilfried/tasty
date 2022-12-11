import type { FoodDTO } from "@/domain/dto";

export class Food {
  constructor(private dto: FoodDTO) {}
  get name(): string {
    return this.dto.extendedName;
  }
  get image(): string {
    return this.dto.image;
  }
  get description(): string {
    return this.dto.aisle;
  }
  get price(): number {
    return this.dto.amount;
  }
}
