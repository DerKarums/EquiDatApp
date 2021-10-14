import ManufacturingUnit from "../../entities/ManufacturingUnit";

export default interface ShowManufacturingUnitCallbacks {
    setManufacturingUnit(manufacturingUnit: ManufacturingUnit): void;
}
