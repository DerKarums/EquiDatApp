import { ManufacturingUnit } from "../..";
import { ManufacturingUnitModel } from "./ManufacturingUnitModel";


export interface AllManufacturingUnitsCallbacks {
  setManufacturingUnitModels(manufacturingUnits: ManufacturingUnit[]): void;
}