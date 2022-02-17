import { Component } from "../../entities/Component";
import { CreateComponentCallbacks } from "./CreateComponentCallbacks";
import { ComponentModel } from "./ComponentModel";
import { CreateComponentRepository } from "./CreateComponentRepository";


export class CreateComponentUseCase {

    constructor(
        private readonly repository: CreateComponentRepository,
    ) {

    }

    public createComponent(componentModel: ComponentModel, callbacks: CreateComponentCallbacks) {
        const component = new Component(componentModel.componentType);
        this.repository.createComponent(component);
        callbacks.onCreateComplete();
    }

    
    public createDuplicateComponent(componentId: string, callbacks: CreateComponentCallbacks) {
        const component = this.repository.getComponent(componentId);
        this.repository.createComponent(component);
        callbacks.onDuplicateComplete();
    }
}