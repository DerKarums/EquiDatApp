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

    public addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string, callbacks: EditManufacturingUnitCallbacks): void {
        this.repository.addTestSystemToManufacturingUnit(manufacturingUnitId, testSystemId);
        this.repository.setTestSystemParentManufacturingUnit(testSystemId, manufacturingUnitId);
        callbacks.onTestSystemAdded();
    }

    public addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string, callbacks: EditManufacturingUnitCallbacks): void {
        this.repository.addComponentToManufacturingUnit(manufacturingUnitId, componentId);
        this.repository.setComponentParentManufacturingUnit(componentId, manufacturingUnitId);
        callbacks.onComponentAdded();
    }
}
