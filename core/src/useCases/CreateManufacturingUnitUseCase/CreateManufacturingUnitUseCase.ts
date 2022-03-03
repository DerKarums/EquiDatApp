import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { CreateManufacturingUnitCallbacks } from "./CreateManufacturingUnitCallbacks";
import { CreateManufacturingUnitRepository } from "./CreateManufacturingUnitRepository";


export class CreateManufacturingUnitUseCase {

    constructor(
        private readonly repository: CreateManufacturingUnitRepository,
    ) {

    }

    public async createManufacturingUnit(callbacks?: CreateManufacturingUnitCallbacks): Promise<ManufacturingUnit> {
        var systemPropertyValues = new Map<string, string>();
        systemPropertyValues.set("name", "Neue Montageeinheit");
        const schema = await this.repository.getSchema();
        const manufacturingUnit = new ManufacturingUnit(schema, systemPropertyValues);
        const newUnit = await this.repository.createManufacturingUnit(manufacturingUnit);
        if (callbacks) callbacks.onCreateComplete();
        return newUnit;
    }

    public async createDuplicateManufacturingUnit(manufacturingUnitId: string, callbacks?: CreateManufacturingUnitCallbacks): Promise<ManufacturingUnit> {
        const duplicate = await this.repository.getManufacturingUnit(manufacturingUnitId);
        const manufacturingUnit = new ManufacturingUnit(duplicate.getSchema(), duplicate.systemPropertyValues);
        const name = manufacturingUnit.getSystemPropertyValue('name');
        if (name != null) {
            manufacturingUnit.editSystemPropertyValue('name', this.createNewName(name))
        }
        const newUnit = await this.repository.createManufacturingUnit(manufacturingUnit);
        if (callbacks) callbacks.onDuplicateComplete();
        return newUnit;
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