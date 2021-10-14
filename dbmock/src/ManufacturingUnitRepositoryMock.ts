import { ManufacturingUnit, SystemProperty, SystemPropertyType, CreateManufacturingUnitRepository, ShowManufacturingUnitRepository } from "core";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository {

    manufacturingUnits: Map<string, ManufacturingUnit> = new Map([["mu1", new ManufacturingUnit(this.getSchema())]]);

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