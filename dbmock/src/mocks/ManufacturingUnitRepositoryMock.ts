import { ManufacturingUnit, SystemProperty, SystemPropertyType, CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsUseCase, AllManufacturingUnitsCallbacks, AllManufacturingUnitsRepository } from "core";
import { manufacturingUnits, manufacturingUnitSchema } from "../DataStore";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository {


    getManufacturingUnits(): ManufacturingUnit[] {
        return [... manufacturingUnits.values()];
    }

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void {
        console.log("createManufacturingUnit");
        manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
    }

    getManufacturingUnit(id: string): ManufacturingUnit {
        return manufacturingUnits.get(id) as ManufacturingUnit;
    }

    getSchema(): SystemProperty[] {
        return manufacturingUnitSchema;
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return this.getSchema().find(systemProperty => systemProperty.id === id) ?? null;
    }
}