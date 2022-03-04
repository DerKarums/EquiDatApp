import { DeleteTestSystemRepository } from "./DeleteTestSystemRepository";


export class DeleteTestSystemUseCase {

    constructor(
        private readonly repository: DeleteTestSystemRepository,
    ) {

    }

    public deleteTestSystem(testSystemId: String) {
        this.repository.deleteTestSystem(testSystemId);
    }
}
