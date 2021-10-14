import { CreateTestSystemRepository, ShowTestSystemRepository, SystemPropertyType, SystemProperty, TestSystem, AllTestSystemsUseCase, AllTestSystemsCallbacks, AllTestSystemsRepository } from "core"

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository , AllTestSystemsRepository{
   
    private initialTestSystems = [
        new TestSystem(
            this.getSchema(), 
            new Map([
                ["name", "Testsystem Nr. 1"], 
                ["createdAt", "2021-10-14"],
                ["count", "5"]
            ])
        ),
        new TestSystem(
            this.getSchema(), 
            new Map([
                ["name", "Testsystem Nr. 2"], 
                ["createdAt", "2021-10-12"],
            ])
        ),
    ];
    
    private testSystems: Map<string, TestSystem> = new Map(this.initialTestSystems.map(testSystem => [testSystem.id, testSystem]));
    
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
            new SystemProperty("Name", SystemPropertyType.StringType, true, "name"),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false, "createdAt"),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType, false, "count"),
        ];
    }
}