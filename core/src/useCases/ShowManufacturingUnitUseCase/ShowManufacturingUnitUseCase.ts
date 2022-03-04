import { ManufacturingUnit } from "../../entities";
import { ShowManufacturingUnitRepository } from "./ShowManufacturingUnitRepository";


export class ShowManufacturingUnitUseCase {

    constructor(
        private readonly repository: ShowManufacturingUnitRepository,
    ) {

    }

    public async getManufacturingUnit(id: string): Promise<ManufacturingUnit> {
        return this.repository.getManufacturingUnit(id);
    }
}
