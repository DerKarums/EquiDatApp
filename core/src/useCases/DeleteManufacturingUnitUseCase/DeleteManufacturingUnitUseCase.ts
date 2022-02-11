import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { DeleteManufacturingUnitCallbacks } from "./DeleteManufacturingUnitCallbacks";
import { DeleteManufacturingUnitRepository } from "./DeleteManufacturingUnitRepository";
import { ManufacturingUnitModel } from "./ManufacturingUnitModel";


export class DeleteManufacturingUnitUseCase {

    constructor(
        private readonly repository: DeleteManufacturingUnitRepository,
    ) {

    }

    public deleteManufacturingUnit(manufacturingUnitId: String, callbacks: DeleteManufacturingUnitCallbacks) {
        this.repository.deleteManufacturingUnit(manufacturingUnitId);
        callbacks.onComplete();
    }
}