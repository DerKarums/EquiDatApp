import { Component } from "../../entities";
import { ShowComponentCallbacks } from "./ShowComponentCallbacks";
import { ShowComponentRepository } from "./ShowComponentRepository";


export class ShowComponentUseCase {

    constructor(
        private readonly repository: ShowComponentRepository,
    ) {

    }

    public async getComponent(id: string, callbacks?: ShowComponentCallbacks): Promise<Component> {
        const component = await this.repository.getComponent(id);
        if (callbacks) callbacks.setComponent(component);
        return component;

    }
}
