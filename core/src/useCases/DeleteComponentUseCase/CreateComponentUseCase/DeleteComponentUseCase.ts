import { Component } from "../../entities/Component";
import { DeleteManufacturingUnitCallbacks } from "../DeleteManufacturingUnitUseCase/DeleteManufacturingUnitCallbacks";
import { ComponentModel } from "./ComponentModel";
import { DeleteComponentRepository } from "./DeleteComponentRepository";


export class DeleteComponentUseCase {

    constructor(
        private readonly repository: DeleteComponentRepository,
    ) {

    }

    public deleteComponent(componentModel: ComponentModel, callbacks: DeleteManufacturingUnitCallbacks) {
        const component = new Component(componentModel.componentType);
        this.repository.deleteComponent(component);
        callbacks.onComplete();
    }
}