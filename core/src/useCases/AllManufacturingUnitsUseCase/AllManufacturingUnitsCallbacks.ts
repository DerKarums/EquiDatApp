import { ManufacturingUnit, SystemProperty } from "../../entities";

export interface AllManufacturingUnitsCallbacks {
  setManufacturingUnits(manufacturingUnits: ManufacturingUnit[]): void;
  setSchema(schema: SystemProperty[]): void;
}