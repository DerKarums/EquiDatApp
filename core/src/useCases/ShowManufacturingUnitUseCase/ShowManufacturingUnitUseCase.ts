import { ManufacturingUnit } from "../../entities";
import { ShowManufacturingUnitCallbacks } from "./ShowManufacturingUnitCallbacks";
import { ShowManufacturingUnitRepository } from "./ShowManufacturingUnitRepository";


export class ShowManufacturingUnitUseCase {

    constructor(
        private readonly repository: ShowManufacturingUnitRepository,
    ) {

    }

    public async getManufacturingUnit(id: string, callbacks?: ShowManufacturingUnitCallbacks): Promise<ManufacturingUnit> {
        const manufacturingUnit = await this.repository.getManufacturingUnit(id);
        if (callbacks) callbacks.setManufacturingUnit(manufacturingUnit);
        return manufacturingUnit;
    }
}
