import { CreateTestSystemRepository, ShowTestSystemRepository, SystemPropertyType, SystemProperty, TestSystem, AllTestSystemsUseCase, AllTestSystemsCallbacks, EditTestSystemRepository, AllTestSystemsRepository } from "core"
import { testSystems, testSystemSchema } from "../DataStore";

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository, AllTestSystemsRepository, EditTestSystemRepository {

    getTestSystems(): TestSystem[] {
        return [... testSystems.values()];
    }

    createTestSystem(testSystem: TestSystem): void {
        console.log("createTestSystem");
        testSystems.set(testSystem.id, testSystem);
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
}