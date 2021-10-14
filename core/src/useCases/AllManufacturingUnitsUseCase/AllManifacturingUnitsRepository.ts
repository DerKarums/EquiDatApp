import ManufacturingUnit from '../../entities/ManufacturingUnit';


export interface AllManufacturingUnitsRepository {
  getManufacturingUnits(): ManufacturingUnit[];
}