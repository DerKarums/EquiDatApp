import { ShowTestSystemCallbacks } from "./ShowTestSystemCallbacks";
import { ShowTestSystemRepository } from "./ShowTestSystemRepository";


export class ShowTestSystemUseCase {

    constructor(
        private readonly repository: ShowTestSystemRepository,
    ) {

    }

    public getTestSystem(id: string, callbacks: ShowTestSystemCallbacks): void {
        const testSystem = this.repository.getTestSystem(id);
        callbacks.setTestSystem(testSystem);
    }

    public addComponentToTestSystem(testSystemId: string, componentId: string, callbacks: ShowTestSystemCallbacks) : void {
        this.repository.addComponentToTestSystem(testSystemId, componentId);
        this.repository.setComponentParentTestSystem(componentId, testSystemId);
        callbacks.onComponentAdded();
      }
    
}
