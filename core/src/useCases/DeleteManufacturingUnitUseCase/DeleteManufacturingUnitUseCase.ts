import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { DeleteManufacturingUnitCallbacks } from "./DeleteManufacturingUnitCallbacks";
import { DeleteManufacturingUnitRepository } from "./DeleteManufacturingUnitRepository";
import { ManufacturingUnitModel } from "./ManufacturingUnitModel";


export class DeleteManufacturingUnitUseCase {

    constructor(
        private readonly repository: DeleteManufacturingUnitRepository,
    ) {

    }

    public deleteManufacturingUnit(manufacturingUnitModel: ManufacturingUnitModel, callbacks: DeleteManufacturingUnitCallbacks) {
        const manufacturingUnit = new ManufacturingUnit(this.repository.getSchema(), manufacturingUnitModel.systemPropertyValues);
        this.repository.deleteManufacturingUnit(manufacturingUnit);
        callbacks.onComplete();
    }
}