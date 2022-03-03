import { ComponentType } from "../..";
import { Component } from "../../entities/Component";
import { CreateComponentCallbacks } from "./CreateComponentCallbacks";
import { CreateComponentRepository } from "./CreateComponentRepository";


export class CreateComponentUseCase {

    constructor(
        private readonly repository: CreateComponentRepository,
    ) {

    }

    public async getComponentTypes(callbacks?: CreateComponentCallbacks): Promise<ComponentType[]> {
        const componentTypes = await this.repository.getComponentTypes();
        if (callbacks) callbacks.setComponentTypes(componentTypes);
        return componentTypes;
    }

    public async createComponent(typeId: string, callbacks?: CreateComponentCallbacks): Promise<Component> {
        const newComponent = await this.repository.createComponent(typeId, new Map());
        if (callbacks) callbacks.onCreateComplete();
        return Promise.resolve(newComponent);
    }

    public async createDuplicateComponent(componentId: string, callbacks?: CreateComponentCallbacks): Promise<Component> {
        const duplicate = await this.repository.getComponent(componentId);

        const systemPropertyValues = duplicate.systemPropertyValues;
        const name = this.createNewName(systemPropertyValues.get('name') ?? 'New Component');
        systemPropertyValues.set('name', name);

        const newComponent = await this.repository.createComponent(duplicate.componentType.id, systemPropertyValues);
        if (callbacks) callbacks.onDuplicateComplete();
        return Promise.resolve(newComponent);

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