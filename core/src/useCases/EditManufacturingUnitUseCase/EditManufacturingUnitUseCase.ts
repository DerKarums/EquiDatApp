import { ManufacturingUnit } from "../../entities";
import { EditManufacturingUnitRepository } from "./EditManufacturingUnitRepository";


export class EditManufacturingUnitUseCase {

    constructor(
        private readonly repository: EditManufacturingUnitRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>): Promise<ManufacturingUnit> {
        const manufacturingUnit = this.repository.editManufacturingUnit(id, newValues);
        return manufacturingUnit;
    }

    public addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string): void {
        this.repository.addTestSystemToManufacturingUnit(manufacturingUnitId, testSystemId);
        this.repository.setTestSystemParentManufacturingUnit(testSystemId, manufacturingUnitId);
    }

    public addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string): void {
        this.repository.addComponentToManufacturingUnit(manufacturingUnitId, componentId);
        this.repository.setComponentParentManufacturingUnit(componentId, manufacturingUnitId);
    }
}
