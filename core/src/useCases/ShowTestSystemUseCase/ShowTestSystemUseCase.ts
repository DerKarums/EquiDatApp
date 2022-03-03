import { TestSystem } from "../../entities";
import { ShowTestSystemCallbacks } from "./ShowTestSystemCallbacks";
import { ShowTestSystemRepository } from "./ShowTestSystemRepository";


export class ShowTestSystemUseCase {

    constructor(
        private readonly repository: ShowTestSystemRepository,
    ) {

    }

    public async getTestSystem(id: string, callbacks?: ShowTestSystemCallbacks): Promise<TestSystem> {
        const testSystem = await this.repository.getTestSystem(id);
        if (callbacks) callbacks.setTestSystem(testSystem);
        return testSystem;
    }
}
