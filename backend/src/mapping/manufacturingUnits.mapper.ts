import { ManufacturingUnit } from "core";
import { ManufacturingUnitOverviewModel, ManufacturingUnitDetailModel } from "core";
import { mapToComponentOverviewModel } from "./components.mapper";
import { mapToSystemPropertyModel } from "./shared.mapper";
import { mapToTestSystemOverviewModel } from "./testSystems.mapper";

export function mapToManufacturingUnitOverviewModel(manufacturingUnit: ManufacturingUnit): ManufacturingUnitOverviewModel {

    const schemaModel = manufacturingUnit.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const manufacturingUnitOverviewDto: ManufacturingUnitOverviewModel = {
        id: manufacturingUnit.id,
        schema: schemaModel,
        systemPropertyValues: manufacturingUnit.systemPropertyValues
    }
    return manufacturingUnitOverviewDto;
}
    
export function mapToManufacturingUnitDetailModel(manufacturingUnit: ManufacturingUnit): ManufacturingUnitDetailModel {

    const testSystems = manufacturingUnit.testSystems.map(testSystem => mapToTestSystemOverviewModel(testSystem));
    const components = manufacturingUnit.components.map(component => mapToComponentOverviewModel(component));
    
    const schemaModel = manufacturingUnit.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const manufacturingUnitOverviewDto: ManufacturingUnitDetailModel = {
        id: manufacturingUnit.id,
        schema: schemaModel,
        systemPropertyValues: manufacturingUnit.systemPropertyValues,
        testSystems: testSystems,
        components: components,
    }
    return manufacturingUnitOverviewDto;
}
   