import { ManufacturingUnitOverviewDto } from "@/dtos/manufacturingUnits.dto"
import { ManufacturingUnit } from "core"

export function mapToManufacturingUnitOverviewDto(manufacturingUnit: ManufacturingUnit): ManufacturingUnitOverviewDto {

    const manufacturingUnitOverviewDto: ManufacturingUnitOverviewDto = {
        id: manufacturingUnit.id,
        systemPropertyValues: manufacturingUnit.systemPropertyValues
    }
    return manufacturingUnitOverviewDto;
}
     