import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { CreateManufacturingUnitCallbacks } from "./CreateManufacturingUnitCallbacks";
import { CreateManufacturingUnitRepository } from "./CreateManufacturingUnitRepository";
import { ManufacturingUnitModel } from "./ManufacturingUnitModel";


export class CreateManufacturingUnitUseCase {

    constructor(
        private readonly repository: CreateManufacturingUnitRepository,
    ) {

    }

    public createManufacturingUnit(manufacturingUnitModel: ManufacturingUnitModel, callbacks: CreateManufacturingUnitCallbacks) {
        const manufacturingUnit = new ManufacturingUnit(this.repository.getSchema(), manufacturingUnitModel.systemPropertyValues);
        this.repository.createManufacturingUnit(manufacturingUnit);
        callbacks.onCreateComplete();
    }

    public createDuplicateManufacturingUnit(manufacturingUnitId: string, callbacks: CreateManufacturingUnitCallbacks) {
        const manufacturingUnit = this.repository.getManufacturingUnit(manufacturingUnitId);
        this.repository.createManufacturingUnit(manufacturingUnit);
        callbacks.onDuplicateComplete();
    }
}