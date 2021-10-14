import { Component } from "../../entities/Component";
import { CreateManufacturingUnitCallbacks } from "../CreateManufacturingUnitUseCase/CreateManufacturingUnitCallbacks";
import { ComponentModel } from "./ComponentModel";
import { CreateComponentRepository } from "./CreateComponentRepository";


export class CreateComponentUseCase {

    constructor(
        private readonly repository: CreateComponentRepository,
    ) {

    }

    public createComponent(componentModel: ComponentModel, callbacks: CreateManufacturingUnitCallbacks) {
        const component = new Component(componentModel.componentType);
        this.repository.createComponent(component);
        callbacks.onComplete();
    }
}