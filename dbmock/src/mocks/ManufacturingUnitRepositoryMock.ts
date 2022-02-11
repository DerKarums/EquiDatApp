import { AllManufacturingUnitsRepository, Component, CreateManufacturingUnitRepository, DeleteManufacturingUnitRepository, EditManufacturingUnitRepository, ManufacturingUnit, ShowManufacturingUnitRepository, SystemProperty, TestSystem } from "core";
import { manufacturingUnits, manufacturingUnitSchema, components, testSystems } from "../DataStore";

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