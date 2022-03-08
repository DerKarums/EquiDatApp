import { TestSystem } from "../../entities";
import { ShowTestSystemRepository } from "./ShowTestSystemRepository";


export class ShowTestSystemUseCase {

    constructor(
        private readonly repository: ShowTestSystemRepository,
    ) {

    }

    public async getTestSystem(id: string): Promise<TestSystem> {
        return await this.repository.getTestSystem(id);
    }
}
