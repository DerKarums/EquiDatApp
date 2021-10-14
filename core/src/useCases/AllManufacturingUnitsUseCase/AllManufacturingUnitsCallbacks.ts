import { ManufacturingUnitModel } from "./ManufacturingUnitModel";


export interface AllManufacturingUnitsCallbacks {
  setManufacturingUnitModels(manufacturingUnits: ManufacturingUnitModel[]): void;
}