import { SystemProperty } from '../../entities';
import { ManufacturingUnit } from '../../entities/ManufacturingUnit';


export interface AllManufacturingUnitsRepository {
  getManufacturingUnits(): ManufacturingUnit[];
  getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null, id: string }[];
  getManufacturingUnitSchema(): SystemProperty[];
  getFilteredManufacturingUnitResults(filterOptions: Map<string, string>): ManufacturingUnit[];
}