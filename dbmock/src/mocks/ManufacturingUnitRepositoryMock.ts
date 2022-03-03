import { AllManufacturingUnitsRepository, Component, CreateManufacturingUnitRepository, DeleteManufacturingUnitRepository, EditManufacturingUnitRepository, ManufacturingUnit, ShowManufacturingUnitRepository, SystemProperty, TestSystem } from "core";
import { manufacturingUnits, manufacturingUnitSchema, components, testSystems } from "../DataStore";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository, EditManufacturingUnitRepository, DeleteManufacturingUnitRepository {


    getManufacturingUnits(): ManufacturingUnit[] {
        return [...manufacturingUnits.values()];
    }

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): Promise<ManufacturingUnit> {
        manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
        return Promise.resolve(manufacturingUnit);
    }

    deleteManufacturingUnit(id: string): void {
        manufacturingUnits.delete(id);
    }

    getManufacturingUnit(id: string): Promise<ManufacturingUnit> {
        const manufacturingUnit = manufacturingUnits.get(id);
        if (!manufacturingUnit) {
            return Promise.reject("ManufacturingUnit does not exist");
        } else {
            return Promise.resolve(manufacturingUnit);
        }
    }

    getSchema(): Promise<SystemProperty[]> {
        return Promise.resolve(manufacturingUnitSchema);
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return manufacturingUnitSchema.find(systemProperty => systemProperty.id === id) ?? null;
    }

    editManufacturingUnit(id: string, newValues: Map<string, string>): Promise<ManufacturingUnit> {

        const manufacturingUnit = manufacturingUnits.get(id);
        if (!manufacturingUnit) {
            return Promise.reject("ManufacturingUnit doesn't exist");
        }
        Array.from(newValues).forEach(([systemPropertyId, value]) => manufacturingUnits.get(id)?.editSystemPropertyValue(systemPropertyId, value))
        return Promise.resolve(manufacturingUnit);

    }

    setComponentParentManufacturingUnit(componentId: string, manufacturingUnitId: string): void {
        let component = components.get(componentId) as Component;
        component.owningManufacturingUnit = manufacturingUnits.get(manufacturingUnitId) as ManufacturingUnit;
    }

    addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string): void {
        let manufacturingUnit = manufacturingUnits.get(manufacturingUnitId) as ManufacturingUnit;
        manufacturingUnit.addComponent(components.get(componentId) as Component)
    }

    setTestSystemParentManufacturingUnit(testSystemId: string, manufacturingUnitId: string): void {
        let testSystem = testSystems.get(testSystemId) as TestSystem
        testSystem.owningManufacturingUnit = manufacturingUnits.get(manufacturingUnitId) as ManufacturingUnit;
    }
    
    addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string): void {
        let manufacturingUnit = manufacturingUnits.get(manufacturingUnitId) as ManufacturingUnit;
        manufacturingUnit.addTestSystem(testSystems.get(testSystemId) as TestSystem)
    }
}