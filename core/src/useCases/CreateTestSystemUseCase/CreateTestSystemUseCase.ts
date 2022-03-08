import { TestSystem } from "../../entities/TestSystem";
import { CreateTestSystemRepository } from "./CreateTestSystemRepository";


export class CreateTestSystemUseCase {

    constructor(
        private readonly repository: CreateTestSystemRepository,
    ) {

    }

    public async createTestSystem(): Promise<TestSystem> {
        var systemPropertyValues = new Map<string, string>();
        systemPropertyValues.set("name", "Neues Testsystem");
        const schema = await this.repository.getSchema()
        const testSystem = new TestSystem(schema, systemPropertyValues);
        const newTestSystem = await this.repository.createTestSystem(testSystem);
        return newTestSystem;
    }

    public async createDuplicateTestSystem(testSystemId: string): Promise<TestSystem> {
        const duplicate = await this.repository.getTestSystem(testSystemId);
        const testSystem = new TestSystem(duplicate.getSchema(), duplicate.systemPropertyValues);
        
        const name = testSystem.getSystemPropertyValue('name');
        if (name != null) {
            testSystem.editSystemPropertyValue('name', this.createNewName(name))
        }
        const newTestSystem = await this.repository.createTestSystem(testSystem);
        return newTestSystem;
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
