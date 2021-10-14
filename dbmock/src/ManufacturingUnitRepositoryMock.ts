import { ManufacturingUnit, SystemProperty, SystemPropertyType, CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsUseCase, AllManufacturingUnitsCallbacks, AllManufacturingUnitsRepository } from "core";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository {

    manufacturingUnits: Map<string, ManufacturingUnit> = new Map([["mu1", new ManufacturingUnit(this.getSchema())]]);

    getManufacturingUnits(): ManufacturingUnit[] {
        return [... this.manufacturingUnits.values()];
    }

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void {
        console.log("createManufacturingUnit");
        this.manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
    }

    getManufacturingUnit(id: string): ManufacturingUnit {
        return this.manufacturingUnits.get(id) as ManufacturingUnit;
    }

    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType, true),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType, false),
        ];
    }
}