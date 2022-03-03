import { TestSystem, TestSystemOverviewModel, TestSystemDetailModel } from "core";
import { mapToComponentOverviewModel } from "./components.mapper";
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

export function mapToTestSystemDetailModel(testSystem: TestSystem): TestSystemOverviewModel {

    const components = testSystem.components.map(component => mapToComponentOverviewModel(component));

    const schemaModel = testSystem.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const testSystemOverviewModel: TestSystemDetailModel = {
        id: testSystem.id,
        schema: schemaModel,
        systemPropertyValues: testSystem.systemPropertyValues,
        components: components,
    }
    return testSystemOverviewModel;
}
     