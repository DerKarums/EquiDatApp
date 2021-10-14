import { CreateTestSystemRepository, ShowTestSystemRepository, SystemPropertyType, SystemProperty, TestSystem, AllTestSystemsUseCase, AllTestSystemsCallbacks, AllTestSystemsRepository } from "core"

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository , AllTestSystemsRepository{
   
    testSystems: Map<string, TestSystem> = new Map([["ts1", new TestSystem(this.getSchema())]]);
    
    getTestSystems(): TestSystem[] {
        return [... this.testSystems.values()];
    }

    createTestSystem(testSystem: TestSystem): void {
        console.log("createTestSystem");
        this.testSystems.set(testSystem.id, testSystem);
    }

    getTestSystem(id: string): TestSystem {
        return this.testSystems.get(id) as TestSystem;
    }


    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType, true),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType, false),
        ];
    }
}