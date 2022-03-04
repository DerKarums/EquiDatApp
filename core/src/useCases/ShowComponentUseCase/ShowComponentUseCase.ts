import { Component } from "../../entities";
import { ShowComponentRepository } from "./ShowComponentRepository";


export class ShowComponentUseCase {

    constructor(
        private readonly repository: ShowComponentRepository,
    ) {

    }

    public async getComponent(id: string): Promise<Component> {
        return this.repository.getComponent(id);
    }
}
