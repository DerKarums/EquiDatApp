import { ManufacturingUnit } from "../../entities/ManufacturingUnit";

export interface ShowManufacturingUnitCallbacks {
    onComponentAdded(): void;
    onTestSystemAdded(): void;
    setManufacturingUnit(manufacturingUnit: ManufacturingUnit): void;
}
