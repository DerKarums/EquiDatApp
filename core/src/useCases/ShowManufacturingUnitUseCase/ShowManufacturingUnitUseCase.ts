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
}
