import { Component } from "../../entities";
import { EditComponentCallbacks } from "./EditComponentCallbacks";
import { EditComponentRepository } from "./EditComponentRepository";


export class EditComponentUseCase {

    constructor(
        private readonly repository: EditComponentRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>, callbacks?: EditComponentCallbacks): Promise<Component> {
        const component = await this.repository.editComponent(id, newValues);
        if (callbacks) callbacks.onSuccess();
        return component;
    }
}
