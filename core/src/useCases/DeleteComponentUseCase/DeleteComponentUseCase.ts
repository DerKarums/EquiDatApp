import { DeleteManufacturingUnitCallbacks } from "../DeleteManufacturingUnitUseCase/DeleteManufacturingUnitCallbacks";
import { DeleteComponentRepository } from "./DeleteComponentRepository";


export class DeleteComponentUseCase {

    constructor(
        private readonly repository: DeleteComponentRepository,
    ) {

    }

    public async deleteComponent(componentId: String, callbacks?: DeleteManufacturingUnitCallbacks): Promise<void> {
        this.repository.deleteComponent(componentId);
        if (callbacks) callbacks.onComplete();
        return Promise.resolve();
    }
}