import { DeleteManufacturingUnitCallbacks } from "../DeleteManufacturingUnitUseCase/DeleteManufacturingUnitCallbacks";
import { DeleteComponentRepository } from "./DeleteComponentRepository";


export class DeleteComponentUseCase {

    constructor(
        private readonly repository: DeleteComponentRepository,
    ) {

    }

    public deleteComponent(componentId: String, callbacks: DeleteManufacturingUnitCallbacks) {
        this.repository.deleteComponent(componentId);
        callbacks.onComplete();
    }
}