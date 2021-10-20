import { ManufacturingUnit } from '../../entities/ManufacturingUnit';
import { SystemProperty } from '../../entities/SystemProperty';

export interface CreateManufacturingUnitRepository {
    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void;
    getSchema(): SystemProperty[];
}