import { TestSystem } from "../../entities/TestSystem";
import { DeleteTestSystemCallbacks } from "./DeleteTestSystemCallbacks";
import { DeleteTestSystemRepository } from "./DeleteTestSystemRepository";
import { TestSystemModel } from "./TestSystemModel";


export class DeleteTestSystemUseCase {

    constructor(
        private readonly repository: DeleteTestSystemRepository,
    ) {

    }

    public deleteTestSystem(testSystemId: String, callbacks: DeleteTestSystemCallbacks) {
        this.repository.deleteTestSystem(testSystemId);
        callbacks.onComplete();
    }
}
