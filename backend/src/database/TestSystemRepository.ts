import { AllTestSystemsRepository, CreateTestSystemRepository, DeleteTestSystemRepository, EditTestSystemRepository, ShowTestSystemRepository, SystemProperty, TestSystem } from "core";

export class TestSystemRepository implements AllTestSystemsRepository, CreateTestSystemRepository, DeleteTestSystemRepository, EditTestSystemRepository, ShowTestSystemRepository {
    async getTestSystems(): Promise<TestSystem[]> {
        console.warn("getTestSystems")
        return []
    }
    async getTestSystemSchema(): Promise<SystemProperty[]> {
        console.warn("getTestSystemSchema")
        return []
    }
    async getFilteredResults(filterOptions: Map<string, string>): Promise<TestSystem[]> {
        console.warn("getFilteredResults")
        return []
    }

    async createTestSystem(testSystem: TestSystem): Promise<TestSystem> {
        console.warn("createTestSystem")
        return testSystem;
    }
    async getSchema(): Promise<SystemProperty[]> {
        console.warn("getSchema")
        return []
    }
    deleteTestSystem(testSystemId: string): void {
        console.warn("deleteTestSystem")
    }
    async editTestSystem(id: string, newValues: Map<string, string>): Promise<TestSystem> {
        console.warn("editTestSystem")
        return new TestSystem(await this.getSchema());
    }
    setComponentParentTestSystem(componentId: string, testSystemId: string): void {
        console.warn("setComponentParentTestSystem")
    }
    addComponentToTestSystem(testSystemId: string, componentId: string): void {
        console.warn("addComponentToTestSystem")
    }
    async getTestSystem(id: string): Promise<TestSystem> {
        console.warn("getTestSystem")
        return new TestSystem(await this.getSchema());
    }

}