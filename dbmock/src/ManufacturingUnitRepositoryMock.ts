import { ManufacturingUnit, SystemProperty, SystemPropertyType, CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsUseCase, AllManufacturingUnitsCallbacks, AllManufacturingUnitsRepository } from "core";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository {

    private initialManufacturingUnits = [
        new ManufacturingUnit(
            this.getSchema(),
            new Map([
                ["name", "Fertigungseinheit Nr. 1"],
                ["createdAt", "2021-10-14"],
                ["count", "5"]
            ])
        ),
        new ManufacturingUnit(
            this.getSchema(),
            new Map([
                ["name", "Montagezelle Nr. 4711"],
                ["createdAt", "2021-10-12"],
            ])
        ),
    ];

    private manufacturingUnits: Map<string, ManufacturingUnit> = new Map(this.initialManufacturingUnits.map(manufacturingUnit => [manufacturingUnit.id, manufacturingUnit]));

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
            new SystemProperty("Name", SystemPropertyType.StringType, true, "name"),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false, "createdAt"),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType, false, "count"),
        ];
    }
}