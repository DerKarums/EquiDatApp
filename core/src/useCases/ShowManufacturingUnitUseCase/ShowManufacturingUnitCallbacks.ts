import { ManufacturingUnit } from "../../entities/ManufacturingUnit";

export interface ShowManufacturingUnitCallbacks {
    setManufacturingUnit(manufacturingUnit: ManufacturingUnit): void;
}
