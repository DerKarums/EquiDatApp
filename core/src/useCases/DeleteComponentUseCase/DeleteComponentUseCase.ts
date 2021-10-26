import { DeleteComponentCallbacks } from ".";
import { Component } from "../../entities/Component";
import { CreateManufacturingUnitCallbacks } from "../CreateManufacturingUnitUseCase/CreateManufacturingUnitCallbacks";
import { ComponentModel } from "./ComponentModel";
import { DeleteComponentRepository } from "./DeleteComponentRepository";


export class CreateComponentUseCase {

    constructor(
        private readonly repository: DeleteComponentRepository,
    ) {

    }

    public createComponent(componentModel: ComponentModel, callbacks: DeleteComponentCallbacks) {
        const component = new Component(componentModel.componentType);
        this.repository.deleteComponent(component);
        callbacks.onComplete();
    }
}