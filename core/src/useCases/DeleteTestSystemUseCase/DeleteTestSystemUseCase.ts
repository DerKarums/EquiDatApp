import { DeleteTestSystemRepository } from "./DeleteTestSystemRepository";


export class DeleteTestSystemUseCase {

    constructor(
        private readonly repository: DeleteTestSystemRepository,
    ) {

    }

    public deleteTestSystem(testSystemId: string) {
        this.repository.deleteTestSystem(testSystemId);
    }
}
