import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { CreateManufacturingUnitCallbacks } from "./CreateManufacturingUnitCallbacks";
import { CreateManufacturingUnitRepository } from "./CreateManufacturingUnitRepository";


export class CreateManufacturingUnitUseCase {

    constructor(
        private readonly repository: CreateManufacturingUnitRepository,
    ) {

    }

    public createManufacturingUnit(manufacturingUnit: ManufacturingUnit, callbacks: CreateManufacturingUnitCallbacks) {
        this.repository.createManufacturingUnit(manufacturingUnit);
        callbacks.onCreateComplete();
    }

    public createDuplicateManufacturingUnit(manufacturingUnitId: string, callbacks: CreateManufacturingUnitCallbacks) {
        const duplicate = this.repository.getManufacturingUnit(manufacturingUnitId);

        const manufacturingUnit = new ManufacturingUnit(duplicate.getSchema(), duplicate.systemPropertyValues);
        
        const name = manufacturingUnit.getSystemPropertyValue('name');
        if (name != null) {
            manufacturingUnit.editSystemPropertyValue('name', this.createNewName(name))
        }
        this.repository.createManufacturingUnit(manufacturingUnit);
        callbacks.onDuplicateComplete();
    }

    private createNewName(oldName: string): string {
        // check if oldName ends with ' (1)' or any other number
        const number = oldName.match(/(?<= \()\d+(?=\)$)/);
        if (number != null) {
            const nameWithoutNumber = oldName.substring(0, oldName.lastIndexOf(' '));
            return `${nameWithoutNumber} (${parseInt(number[0]) + 1})`
        } else {
            return `${oldName} (1)`
        }   
    }
}