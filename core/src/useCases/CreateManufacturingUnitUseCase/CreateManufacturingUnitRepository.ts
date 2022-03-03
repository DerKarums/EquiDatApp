import { ManufacturingUnit } from '../../entities/ManufacturingUnit';
import { SystemProperty } from '../../entities/SystemProperty';

export interface CreateManufacturingUnitRepository {
    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): Promise<ManufacturingUnit>;
    getSchema(): Promise<SystemProperty[]>;
    getManufacturingUnit(id: string): Promise<ManufacturingUnit>;
}