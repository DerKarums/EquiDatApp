import { EditTestSystemCallbacks } from "./EditTestSystemCallbacks";
import { EditTestSystemRepository } from "./EditTestSystemRepository";


export class EditTestSystemUseCase {

    constructor(
        private readonly repository: EditTestSystemRepository,
    ) {
    }
    
    public edit(id: string, newValues: Map<string, string>, callbacks: EditTestSystemCallbacks): void {
        this.repository.editTestSystem(id, newValues);
        callbacks.onSuccess();
    }

    public addComponentToTestSystem(testSystemId: string, componentId: string, callbacks: EditTestSystemCallbacks) : void {
        this.repository.addComponentToTestSystem(testSystemId, componentId);
        this.repository.setComponentParentTestSystem(componentId, testSystemId);
        callbacks.onComponentAdded();
      }
    
}
