
export interface EditManufacturingUnitRepository {
    editManufacturingUnit(id: string, newValues: Map<string, string>): void;
    
    setComponentParentManufacturingUnit(componentId: string, manufacturingUnitId: string): void;
    addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string): void;
    setTestSystemParentManufacturingUnit(testSystemId: string, manufacturingUnitId: string): void;
    addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string) : void;  

}
