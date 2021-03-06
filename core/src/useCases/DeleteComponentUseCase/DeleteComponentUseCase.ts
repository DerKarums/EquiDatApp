import { DeleteComponentRepository } from "./DeleteComponentRepository";


export class DeleteComponentUseCase {

    constructor(
        private readonly repository: DeleteComponentRepository,
    ) {

    }

    public async deleteComponent(componentId: string): Promise<void> {
        this.repository.deleteComponent(componentId);
        return Promise.resolve();
    }
}