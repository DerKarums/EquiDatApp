import Component from "../../entities/Component";
import { CreateManifacturingUnitCallbacks } from "../CreateManifacturingUnitUseCase/CreateManifacturingUnitCallbacks";
import ComponentModel from "./ComponentModel";
import { CreateComponentRepository } from "./CreateComponentRepository";


export default class CreateComponentUseCase {

    constructor(
        private readonly repository: CreateComponentRepository,
    ) {

    }

    public createComponent(componentModel: ComponentModel, callbacks: CreateManifacturingUnitCallbacks) {
        const component = new Component(componentModel.componentType);
        this.repository.createComponent(component);
        callbacks.onComplete();
    }
}