import { TestSystem } from "../../entities/TestSystem";
import { CreateTestSystemCallbacks } from "./CreateTestSystemCallbacks";
import { CreateTestSystemRepository } from "./CreateTestSystemRepository";


export class CreateTestSystemUseCase {

    constructor(
        private readonly repository: CreateTestSystemRepository,
    ) {

    }

    public createTestSystem(callbacks: CreateTestSystemCallbacks): TestSystem {
        var systemPropertyValues = new Map<string, string>();
        systemPropertyValues.set("name", "Neues Testsystem");
        const schema = this.repository.getSchema()
        const testSystem = new TestSystem(schema, systemPropertyValues);
        const newTestSystem = this.repository.createTestSystem(testSystem);
        callbacks.onCreateComplete();
        return newTestSystem;
    }

    public createDuplicateTestSystem(testSystemId: string, callbacks: CreateTestSystemCallbacks) {
        const duplicate = this.repository.getTestSystem(testSystemId);
        const testSystem = new TestSystem(duplicate.getSchema(), duplicate.systemPropertyValues);
        
        const name = testSystem.getSystemPropertyValue('name');
        if (name != null) {
            testSystem.editSystemPropertyValue('name', this.createNewName(name))
        }
        this.repository.createTestSystem(testSystem);
        callbacks.onDuplicateComplete();
    }

    private createNewName(oldName: string): string {
        // check if oldName ends with ' (1)' or any other number
        const number = oldName.match(/(?<= \()\d+(?=\)$)/);
        if (number != null) {
            const nameWithoutNumber = oldName.substring(0, oldName.lastIndexOf(' '));
            return `${nameWithoutNumber} (${parseInt(number[0]) + 1})`
        } else {
            return `${oldName} (1)`
        }   
    }
}
