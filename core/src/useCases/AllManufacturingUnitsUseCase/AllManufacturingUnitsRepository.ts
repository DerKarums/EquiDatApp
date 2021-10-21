import { SystemProperty } from '../../entities';
import { ManufacturingUnit } from '../../entities/ManufacturingUnit';


export interface AllManufacturingUnitsRepository {
  getManufacturingUnits(): ManufacturingUnit[];
  getSchema(): SystemProperty[];
}