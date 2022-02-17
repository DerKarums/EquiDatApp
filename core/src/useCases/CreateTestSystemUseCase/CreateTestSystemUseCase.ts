import { TestSystem } from "../../entities/TestSystem";
import { CreateTestSystemCallbacks } from "./CreateTestSystemCallbacks";
import { CreateTestSystemRepository } from "./CreateTestSystemRepository";
import { TestSystemModel } from "./TestSystemModel";


export class CreateTestSystemUseCase {

    constructor(
        private readonly repository: CreateTestSystemRepository,
    ) {

    }

    public createTestSystem(testSystemModel: TestSystemModel, callbacks: CreateTestSystemCallbacks) {
        const schema = this.repository.getSchema()
        const testSystem = new TestSystem(schema, testSystemModel.systemPropertyValues);
        this.repository.createTestSystem(testSystem);
        callbacks.onCreateComplete();
    }

    public createDuplicateTestSystem(testSystemId: string, callbacks: CreateTestSystemCallbacks) {
        const testSystem = this.repository.getTestSystem(testSystemId);
        this.repository.createTestSystem(testSystem);
        callbacks.onDuplicateComplete();
    }
}
