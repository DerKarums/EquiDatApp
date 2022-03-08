import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { AllManufacturingUnitsRepository } from "./AllManufacturingUnitsRepository";



export class AllManufacturingUnitsUseCase {
  constructor(
    private repository: AllManufacturingUnitsRepository,
  ) { }

  public async getAllManufacturingUnits(): Promise<ManufacturingUnit[]> {
    return this.repository.getManufacturingUnits();
  }

}