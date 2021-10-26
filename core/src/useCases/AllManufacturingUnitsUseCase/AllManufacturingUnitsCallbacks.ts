import { ManufacturingUnit, SystemProperty } from "../../entities";

export interface AllManufacturingUnitsCallbacks {
  setManufacturingUnits(manufacturingUnits: ManufacturingUnit[]): void;
  setRequestedSystemProperties(systemPropertiesByIds: { systemProperty: SystemProperty | null, id: string }[]): void;
}