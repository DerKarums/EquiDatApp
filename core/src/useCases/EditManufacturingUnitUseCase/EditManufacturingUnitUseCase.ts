import { Component, ManufacturingUnit } from "../../entities";
import { EditManufacturingUnitCallbacks } from "./EditManufacturingUnitCallbacks";
import { EditManufacturingUnitRepository } from "./EditManufacturingUnitRepository";


export class EditManufacturingUnitUseCase {

    constructor(
        private readonly repository: EditManufacturingUnitRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>, callbacks?: EditManufacturingUnitCallbacks): Promise<ManufacturingUnit> {
        const manufacturingUnit = this.repository.editManufacturingUnit(id, newValues);
        if (callbacks) callbacks.onSuccess();
        return manufacturingUnit;
    }

    public addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string, callbacks?: EditManufacturingUnitCallbacks): void {
        this.repository.addTestSystemToManufacturingUnit(manufacturingUnitId, testSystemId);
        this.repository.setTestSystemParentManufacturingUnit(testSystemId, manufacturingUnitId);
        if (callbacks) callbacks.onTestSystemAdded();
    }

    public addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string, callbacks?: EditManufacturingUnitCallbacks): void {
        this.repository.addComponentToManufacturingUnit(manufacturingUnitId, componentId);
        this.repository.setComponentParentManufacturingUnit(componentId, manufacturingUnitId);
        if (callbacks) callbacks.onComponentAdded();
    }
}
