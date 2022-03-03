import { DeleteManufacturingUnitCallbacks } from "./DeleteManufacturingUnitCallbacks";
import { DeleteManufacturingUnitRepository } from "./DeleteManufacturingUnitRepository";


export class DeleteManufacturingUnitUseCase {

    constructor(
        private readonly repository: DeleteManufacturingUnitRepository,
    ) {

    }

    public deleteManufacturingUnit(manufacturingUnitId: String, callbacks?: DeleteManufacturingUnitCallbacks) {
        this.repository.deleteManufacturingUnit(manufacturingUnitId);
        if (callbacks) callbacks.onComplete();
    }
}