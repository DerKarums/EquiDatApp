import ManufacturingUnit from "../../core/src/entities/ManufacturingUnit";
import SystemProperty from "../../core/src/entities/SystemProperty";
import SystemPropertyType from "../../core/src/entities/SystemPropertyType";
import CreateManufacturingUnitRepository from "../../core/src/useCases/CreateManufacturingUnitUseCase/CreateManufacturingUnitRepository"
import ShowManufacturingUnitRepository from "../../core/src/useCases/ShowManufacturingUnitUseCase/ShowManufacturingUnitRepository"

export default class ManifactoringUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository{

    manufacturingUnits: Map<string, ManufacturingUnit>;

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void {
        console.log("createManufacturingUnit");
        this.manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
    }

    getManufacturingUnit(id: string): ManufacturingUnit {
        return this.manufacturingUnits.get(id);
    }

    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType),
        ];
    }
}