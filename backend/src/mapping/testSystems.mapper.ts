import { TestSystem, TestSystemOverviewModel } from "core";
import { mapToSystemPropertyModel } from "./shared.mapper";

export function mapToTestSystemOverviewModel(testSystem: TestSystem): TestSystemOverviewModel {

    const schemaModel = testSystem.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const testSystemOverviewModel: TestSystemOverviewModel = {
        id: testSystem.id,
        schema: schemaModel,
        systemPropertyValues: testSystem.systemPropertyValues
    }
    return testSystemOverviewModel;
}
     