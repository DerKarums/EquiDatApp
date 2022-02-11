import { CreateTestSystemRepository, ShowTestSystemRepository, SystemPropertyType, SystemProperty, TestSystem, AllTestSystemsUseCase, AllTestSystemsCallbacks, EditTestSystemRepository, AllTestSystemsRepository, DeleteTestSystemRepository, Component } from "core"
import { testSystems, testSystemSchema, components } from "../DataStore";

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository, AllTestSystemsRepository, EditTestSystemRepository, DeleteTestSystemRepository {


    getTestSystems(): TestSystem[] {
        return [... testSystems.values()];
    }

    createTestSystem(testSystem: TestSystem): void {
        console.log("createTestSystem");
        testSystems.set(testSystem.id, testSystem);
    }

    deleteTestSystem(id: string): void {
        console.log("deleteTestSystem");
        testSystems.delete(id);
    }

    getTestSystem(id: string): TestSystem {
        return testSystems.get(id) as TestSystem;
    }


    getSchema(): SystemProperty[] {
        return testSystemSchema;
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return this.getSchema().find(systemProperty => systemProperty.id === id) ?? null;
    }

    editTestSystem(id: string, newValues: Map<string, string>): void {
        Array.from(newValues).forEach(([systemPropertyId, value]) => testSystems.get(id)?.editSystemPropertyValue(systemPropertyId, value))
    }

    setComponentParentTestSystem(componentId: string, testSystemId: string): void {
        let component = components.get(componentId) as Component;
        component.owningTestSystem = testSystems.get(testSystemId) as TestSystem;
    }
    addComponentToTestSystem(testSystemId: string, componentId: string): void {
        let testSystem = testSystems.get(testSystemId) as TestSystem;
        testSystem.addComponent(components.get(componentId) as Component)
    }

}