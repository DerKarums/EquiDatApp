import { ManufacturingUnit } from '../../entities/ManufacturingUnit';
import { SystemProperty } from '../../entities/SystemProperty';

export interface DeleteManufacturingUnitRepository {
    deleteManufacturingUnit(manufacturingUnitId: String): void;
    getSchema(): SystemProperty[];
}