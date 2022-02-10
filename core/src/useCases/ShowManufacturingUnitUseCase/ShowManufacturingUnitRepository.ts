import { ManufacturingUnit } from '../../entities/ManufacturingUnit';

export interface ShowManufacturingUnitRepository {
    getManufacturingUnit(id: string): ManufacturingUnit;

    setComponentParentManufacturingUnit(componentId: string, manufacturingUnitId: string): void;
    addComponentToManufacturingUnit(manufacturingUnitId: string, componentId: string): void;
    setTestSystemParentManufacturingUnit(testSystemId: string, manufacturingUnitId: string): void;
    addTestSystemToManufacturingUnit(manufacturingUnitId: string, testSystemId: string) : void;  
}
