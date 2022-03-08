import { DeleteManufacturingUnitRepository } from "./DeleteManufacturingUnitRepository";


export class DeleteManufacturingUnitUseCase {

    constructor(
        private readonly repository: DeleteManufacturingUnitRepository,
    ) {

    }

    public deleteManufacturingUnit(manufacturingUnitId: string) {
        this.repository.deleteManufacturingUnit(manufacturingUnitId);
    }
}