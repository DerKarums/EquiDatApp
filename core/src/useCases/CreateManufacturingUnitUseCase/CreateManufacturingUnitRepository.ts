import { ManufacturingUnit } from '../../entities/ManufacturingUnit';
import { SystemProperty } from '../../entities/SystemProperty';

export interface CreateManufacturingUnitRepository {
    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): ManufacturingUnit;
    getSchema(): SystemProperty[];
    getManufacturingUnit(id: string): ManufacturingUnit;
}