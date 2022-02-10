import { ShowManufacturingUnitCallbacks } from "./ShowManufacturingUnitCallbacks";
import { ShowManufacturingUnitRepository } from "./ShowManufacturingUnitRepository";


export class ShowManufacturingUnitUseCase {

    constructor(
        private readonly repository: ShowManufacturingUnitRepository,
    ) {

    }

    public getManufacturingUnit(id: string, callbacks: ShowManufacturingUnitCallbacks): void {
        const manufacturingUnit = this.repository.getManufacturingUnit(id);
        callbacks.setManufacturingUnit(manufacturingUnit);
    }

    public addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string, callbacks: ShowManufacturingUnitCallbacks): void {
        this.repository.addTestSystemToManufacturingUnit(manufacturingUnitId, testSystemId);
        this.repository.setTestSystemParentManufacturingUnit(testSystemId, manufacturingUnitId);
        callbacks.onTestSystemAdded();
    }

    public addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string, callbacks: ShowManufacturingUnitCallbacks): void {
        this.repository.addComponentToManufacturingUnit(manufacturingUnitId, componentId);
        this.repository.setComponentParentManufacturingUnit(componentId, manufacturingUnitId);
        callbacks.onComponentAdded();
    }
}
