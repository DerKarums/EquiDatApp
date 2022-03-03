import { TestSystem, TestSystemOverviewModel, TestSystemDetailModel } from "core";
import { mapToComponentOverviewModel } from "./components.mapper";
import { mapToManufacturingUnitOverviewModel } from "./manufacturingUnits.mapper";
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
    const owningManufacturingUnit = testSystem.owningManufacturingUnit ? mapToManufacturingUnitOverviewModel(testSystem.owningManufacturingUnit) : null;

    const schemaModel = testSystem.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const testSystemOverviewModel: TestSystemDetailModel = {
        id: testSystem.id,
        schema: schemaModel,
        systemPropertyValues: testSystem.systemPropertyValues,
        components: components,
        owningManufacturingUnit: owningManufacturingUnit,
    }
    return testSystemOverviewModel;
}
     