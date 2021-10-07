import ShowManufacturingUnitCallbacks from "./ShowManufacturingUnitCallbacks";
import ShowManufacturingUnitRepository from "./ShowManufacturingUnitRepository";


export default class ShowManufacturingUnitUseCase {

    constructor(
        private readonly repository: ShowManufacturingUnitRepository,
    ) {

    }

    public getManufacturingUnit(id: string, callbacks: ShowManufacturingUnitCallbacks) : void {
        const manufacturingUnit = this.repository.getManifacturingUnit(id);
        callbacks.onManufacturingUnitFetched(manufacturingUnit);
    }
}
