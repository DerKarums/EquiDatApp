import { TestSystem } from "../../entities";
import { EditTestSystemCallbacks } from "./EditTestSystemCallbacks";
import { EditTestSystemRepository } from "./EditTestSystemRepository";


export class EditTestSystemUseCase {

    constructor(
        private readonly repository: EditTestSystemRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>, callbacks?: EditTestSystemCallbacks): Promise<TestSystem> {
        const testSystem = await this.repository.editTestSystem(id, newValues);
        if (callbacks) callbacks.onSuccess();
        return testSystem;
    }

    public addComponentToTestSystem(testSystemId: string, componentId: string, callbacks?: EditTestSystemCallbacks) : void {
        this.repository.addComponentToTestSystem(testSystemId, componentId);
        this.repository.setComponentParentTestSystem(componentId, testSystemId);
        if (callbacks) callbacks.onComponentAdded();
      }
    
}
