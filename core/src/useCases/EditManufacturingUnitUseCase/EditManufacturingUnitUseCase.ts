import { EditManufacturingUnitCallbacks } from "./EditManufacturingUnitCallbacks";
import { EditManufacturingUnitRepository } from "./EditManufacturingUnitRepository";


export class EditManufacturingUnitUseCase {

    constructor(
        private readonly repository: EditManufacturingUnitRepository,
    ) {
    }
    
    public edit(id: string, newValues: Map<string, string>, callbacks: EditManufacturingUnitCallbacks): void {
        this.repository.editManufacturingUnit(id, newValues);
        callbacks.onSuccess();
    }
}
