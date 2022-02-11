import { AllManufacturingUnitsRepository, CreateManufacturingUnitRepository, DeleteManufacturingUnitRepository, EditManufacturingUnitRepository, ManufacturingUnit, ShowManufacturingUnitRepository, SystemProperty } from "core";
import { manufacturingUnits, manufacturingUnitSchema } from "../DataStore";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository, EditManufacturingUnitRepository, DeleteManufacturingUnitRepository {


    getManufacturingUnits(): ManufacturingUnit[] {
        return [...manufacturingUnits.values()];
    }

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void {
        console.log("createManufacturingUnit");
        manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
    }

    deleteManufacturingUnit(id: string): void {
        console.log("deleteManufacturingUnit");
        manufacturingUnits.delete(id);
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

    editManufacturingUnit(id: string, newValues: Map<string, string>): void {
        Array.from(newValues).forEach(([systemPropertyId, value]) => manufacturingUnits.get(id)?.editSystemPropertyValue(systemPropertyId, value))
    }
}