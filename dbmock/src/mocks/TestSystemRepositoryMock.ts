import { AllTestSystemsRepository, Component, CreateTestSystemRepository, DeleteTestSystemRepository, EditTestSystemRepository, ShowTestSystemRepository, SystemProperty, TestSystem } from "core";
import { components, testSystems, testSystemSchema } from "../DataStore";

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository, AllTestSystemsRepository, EditTestSystemRepository, DeleteTestSystemRepository {


    getTestSystemSchema(): Promise<SystemProperty[]> {
        return Promise.resolve(testSystemSchema);
    }

    getFilteredResults(filterOptions: Map<string, string>): Promise<TestSystem[]> {
        let results: TestSystem[] = [];
        testSystems.forEach((testSystem) => {
            filterOptions.forEach((value, id) => {
                let systemPropertyValue = testSystem.getSystemPropertyValue(id);
                if (systemPropertyValue === null) {
                    results = results.filter(result => result.id !== id);
                }
                else if (systemPropertyValue.includes(value)) {
                    results.push(testSystem);
                }
                else {
                    results = results.filter(result => result.id !== id);
                }
            });
        });
        return Promise.resolve(results);
    }


    getTestSystems(): Promise<TestSystem[]> {
        return  Promise.resolve([...testSystems.values()]);
    }

    createTestSystem(testSystem: TestSystem): Promise<TestSystem> {
        console.log("createTestSystem");
        testSystems.set(testSystem.id, testSystem);
        return Promise.resolve(testSystem);
    }

    deleteTestSystem(id: string): void {
        console.log("deleteTestSystem");
        testSystems.delete(id);
    }

    getTestSystem(id: string): Promise<TestSystem> {
        const testSystem = testSystems.get(id);
        if (!testSystem) {
            return Promise.reject("TestSystem doesn't exist");
        } else {
            return Promise.resolve(testSystem);
        }
    }


    getSchema(): Promise<SystemProperty[]> {
        return Promise.resolve(testSystemSchema);
    }

    getSystemPropertiesByIds(ids: string[]): Promise<{ systemProperty: SystemProperty | null; id: string; }[]> {
        return Promise.resolve(ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id })))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return testSystemSchema.find(systemProperty => systemProperty.id === id) ?? null;
    }

    editTestSystem(id: string, newValues: Map<string, string>): Promise<TestSystem> {
        const testSystem = testSystems.get(id);
        if (!testSystem) {
            return Promise.reject("TestSystem doesn't exist");
        }
        testSystem.systemPropertyValues = newValues;
        return Promise.resolve(testSystem);
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