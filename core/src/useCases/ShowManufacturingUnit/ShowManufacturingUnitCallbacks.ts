import ManufacturingUnit from "../../entities/ManufacturingUnit";

export default interface ShowManufacturingUnitCallbacks {
    onManufacturingUnitFetched(manufacturingUnit: ManufacturingUnit): void;
}
