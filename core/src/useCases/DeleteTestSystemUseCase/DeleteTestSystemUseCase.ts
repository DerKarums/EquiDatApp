import { TestSystem } from "../../entities/TestSystem";
import { DeleteTestSystemCallbacks } from "./DeleteTestSystemCallbacks";
import { DeleteTestSystemRepository } from "./DeleteTestSystemRepository";
import { TestSystemModel } from "./TestSystemModel";


export class DeleteTestSystemUseCase {

    constructor(
        private readonly repository: DeleteTestSystemRepository,
    ) {

    }

    public deleteTestSystem(testSystemModel: TestSystemModel, callbacks: DeleteTestSystemCallbacks) {
        const schema = this.repository.getSchema()
        const testSystem = new TestSystem(schema, testSystemModel.systemPropertyValues);
        this.repository.deleteTestSystem(testSystem);
        callbacks.onComplete();
    }
}
