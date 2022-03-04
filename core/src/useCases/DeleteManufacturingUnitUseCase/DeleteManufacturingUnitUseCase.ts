import { DeleteManufacturingUnitRepository } from "./DeleteManufacturingUnitRepository";


export class DeleteManufacturingUnitUseCase {

    constructor(
        private readonly repository: DeleteManufacturingUnitRepository,
    ) {

    }

    public deleteManufacturingUnit(manufacturingUnitId: String) {
        this.repository.deleteManufacturingUnit(manufacturingUnitId);
    }
}