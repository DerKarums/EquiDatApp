import TestSystem from "../../core/src/entities/TestSystem";
import SystemProperty from "../../core/src/entities/SystemProperty";
import SystemPropertyType from "../../core/src/entities/SystemPropertyType";
import CreateTestSystemRepository from "../../core/src/useCases/CreateTestSystemUseCase/CreateTestSystemRepository"
import ShowTestSystemRepository from "../../core/src/useCases/ShowTestSystemUseCase/ShowTestSystemRepository"

export default class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository {

    testSystems: Map<string, TestSystem>;

    createTestSystem(testSystem: TestSystem): void {
        console.log("createTestSystem");
        this.testSystems.set(testSystem.id, testSystem);
    }

    getTestSystem(id: string): TestSystem {
        return this.testSystems.get(id);
    }


    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType),
        ];
    }
}