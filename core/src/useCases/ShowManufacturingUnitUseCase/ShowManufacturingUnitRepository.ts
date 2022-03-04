import { ManufacturingUnit } from '../../entities/ManufacturingUnit';

export interface ShowManufacturingUnitRepository {
    getManufacturingUnit(id: string): Promise<ManufacturingUnit>;
}
