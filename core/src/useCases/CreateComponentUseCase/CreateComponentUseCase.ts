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
        const duplicate = this.repository.getComponent(componentId);
        const component = new Component(duplicate.componentType, duplicate.systemPropertyValues);
        
        const name = component.getSystemPropertyValue('name');
        if (name != null) {
            component.editSystemPropertyValue('name', this.createNewName(name))
        }
        this.repository.createComponent(component);
        callbacks.onDuplicateComplete();
    }

    private createNewName(oldName: string): string {
        // check if oldName ends with ' (1)' or any other number
        const number = oldName.match(/(?<= \()\d+(?=\)$)/);
        if (number != null) {
            const nameWithoutNumber = oldName.substring(0, oldName.lastIndexOf(' '));
            return `${nameWithoutNumber} (${parseInt(number[0]) + 1})`
        } else {
            return `${oldName} (1)`
        }   
    }
}