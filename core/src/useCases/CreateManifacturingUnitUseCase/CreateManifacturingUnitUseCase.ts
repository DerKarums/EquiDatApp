import ManifacturingUnit from "../../entities/ManufacturingUnit";
import { CreateManifacturingUnitCallbacks } from "./CreateManifacturingUnitCallbacks";
import { CreateManifacturingUnitRepository } from "./CreateManifacturingUnitRepository";
import ManifactoringUnitModel from "./ManifacturingUnitModel";


export default class CreateManifacturingUnitUseCase {

    constructor(
        private readonly repository: CreateManifacturingUnitRepository,
    ) {

    }

    public createManifacturingUnit(manifactoringUnitModel: ManifactoringUnitModel, callbacks: CreateManifacturingUnitCallbacks) {
        const manifacturingUnit = new ManifacturingUnit(this.repository.getSchema(), manifactoringUnitModel.systemPropertyValues);
        this.repository.createManifacturingUnit(manifacturingUnit);
        callbacks.onComplete();
    }
}