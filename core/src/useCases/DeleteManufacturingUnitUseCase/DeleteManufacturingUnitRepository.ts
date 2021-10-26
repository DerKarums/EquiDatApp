import { ManufacturingUnit } from '../../entities/ManufacturingUnit';
import { SystemProperty } from '../../entities/SystemProperty';

export interface DeleteManufacturingUnitRepository {
    deleteManufacturingUnit(manufacturingUnit: ManufacturingUnit): void;
    getSchema(): SystemProperty[];
}