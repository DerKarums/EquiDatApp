import { ManufacturingUnit } from "core";
import { ManufacturingUnitOverviewDto } from "core";

export function mapToManufacturingUnitOverviewDto(manufacturingUnit: ManufacturingUnit): ManufacturingUnitOverviewDto {

    const manufacturingUnitOverviewDto: ManufacturingUnitOverviewDto = {
        id: manufacturingUnit.id,
        systemPropertyValues: manufacturingUnit.systemPropertyValues
    }
    return manufacturingUnitOverviewDto;
}
     