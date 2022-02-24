import { ComponentType } from "../..";
import { Component } from "../../entities/Component";
import { CreateComponentCallbacks } from "./CreateComponentCallbacks";
import { CreateComponentRepository } from "./CreateComponentRepository";


export class CreateComponentUseCase {

    constructor(
        private readonly repository: CreateComponentRepository,
    ) {

    }

    public getComponentTypes(callbacks: CreateComponentCallbacks) {
        callbacks.setComponentTypes(this.repository.getComponentTypes());
    }

    public createComponent(typeId: string, callbacks: CreateComponentCallbacks) {
        this.repository.createComponent(typeId, new Map());
        callbacks.onCreateComplete();
    }

    public createDuplicateComponent(componentId: string, callbacks: CreateComponentCallbacks) {
        const duplicate = this.repository.getComponent(componentId);

        const systemPropertyValues = duplicate.systemPropertyValues;
        const name = this.createNewName(systemPropertyValues.get('name') ?? 'New Component');
        systemPropertyValues.set('name', name);

        this.repository.createComponent(duplicate.componentType.id, systemPropertyValues);
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