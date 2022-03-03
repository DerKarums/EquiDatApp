import { ManufacturingUnit, SystemProperty } from "../../entities";
import ManufacturingUnitResultModel from "./ManufacturingUnitResultModel";

export interface AllManufacturingUnitsCallbacks {
  setManufacturingUnits(manufacturingUnits: ManufacturingUnit[]): void;
  setRequestedSystemProperties(systemPropertiesByIds: { systemProperty: SystemProperty | null, id: string }[]): void;
}