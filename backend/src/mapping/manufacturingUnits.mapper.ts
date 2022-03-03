import { ManufacturingUnit } from "core";
import { ManufacturingUnitOverviewModel } from "core";
import { mapToSystemPropertyModel } from "./shared.mapper";

export function mapToManufacturingUnitOverviewModel(manufacturingUnit: ManufacturingUnit): ManufacturingUnitOverviewModel {

    const schemaModel = manufacturingUnit.getSchema().map(sp => mapToSystemPropertyModel(sp));
    const manufacturingUnitOverviewDto: ManufacturingUnitOverviewModel = {
        id: manufacturingUnit.id,
        schema: schemaModel,
        systemPropertyValues: manufacturingUnit.systemPropertyValues
    }
    return manufacturingUnitOverviewDto;
}
     