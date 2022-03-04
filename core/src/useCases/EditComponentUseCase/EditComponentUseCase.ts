import { Component } from "../../entities";
import { EditComponentRepository } from "./EditComponentRepository";


export class EditComponentUseCase {

    constructor(
        private readonly repository: EditComponentRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>): Promise<Component> {
        const component = await this.repository.editComponent(id, newValues);
        return component;
    }
}
