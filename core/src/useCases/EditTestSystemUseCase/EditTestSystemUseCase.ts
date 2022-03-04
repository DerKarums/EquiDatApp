import { TestSystem } from "../../entities";
import { EditTestSystemRepository } from "./EditTestSystemRepository";


export class EditTestSystemUseCase {

    constructor(
        private readonly repository: EditTestSystemRepository,
    ) {
    }
    
    public async edit(id: string, newValues: Map<string, string>): Promise<TestSystem> {
        const testSystem = await this.repository.editTestSystem(id, newValues);
        return testSystem;
    }

    public addComponentToTestSystem(testSystemId: string, componentId: string) : void {
        this.repository.addComponentToTestSystem(testSystemId, componentId);
        this.repository.setComponentParentTestSystem(componentId, testSystemId);
      }
    
}
