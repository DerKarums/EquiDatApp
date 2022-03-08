import { AllManufacturingUnitsRepository, CreateManufacturingUnitRepository, DeleteManufacturingUnitRepository, EditManufacturingUnitRepository, ManufacturingUnit, ShowManufacturingUnitRepository, SystemProperty } from "core";

export class ManufacturingUnitRepository implements AllManufacturingUnitsRepository, CreateManufacturingUnitRepository, DeleteManufacturingUnitRepository, EditManufacturingUnitRepository, ShowManufacturingUnitRepository {
    async getManufacturingUnits(): Promise<ManufacturingUnit[]> {
        console.warn("getManufacturingUnits")
        return [];
    }
    async createManufacturingUnit(manufacturingUnit: ManufacturingUnit): Promise<ManufacturingUnit> {
        console.warn("createManufacturingUnit")
        return manufacturingUnit;
    }
    async getSchema(): Promise<SystemProperty[]> {
        console.warn("getSchema")
        return [];
    }
    deleteManufacturingUnit(manufacturingUnitId: string): void {
        console.warn("deleteManufacturingUnit")
    }
    async editManufacturingUnit(id: string, newValues: Map<string, string>): Promise<ManufacturingUnit> {
        console.warn("editManufacturingUnit")
        return new ManufacturingUnit([]);
    }
    setComponentParentManufacturingUnit(componentId: string, manufacturingUnitId: string): void {
        console.warn("setComponentParentManufacturingUnit")
    }
    addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string): void {
        console.warn("addComponentToManufacturingUnit")
    }
    setTestSystemParentManufacturingUnit(testSystemId: string, manufacturingUnitId: string): void {
        console.warn("setTestSystemParentManufacturingUnit")
    }
    addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string): void {
        console.warn("addTestSystemToManufacturingUnit")
    }
    async getManufacturingUnit(id: string): Promise<ManufacturingUnit> {
        console.warn("getManufacturingUnit")
        return new ManufacturingUnit([]);
    }

}