import { EditComponentCallbacks } from "./EditComponentCallbacks";
import { EditComponentRepository } from "./EditComponentRepository";


export class EditComponentUseCase {

    constructor(
        private readonly repository: EditComponentRepository,
    ) {
    }
    
    public edit(id: string, newValues: Map<string, string>, callbacks: EditComponentCallbacks): void {
        this.repository.editComponent(id, newValues);
        callbacks.onSuccess();
    }
}
