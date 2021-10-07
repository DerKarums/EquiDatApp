import ManifacturingUnit from '../../entities/ManufacturingUnit';


export interface AllManifacturingUnitsRepository {
  getManifacturingUnits(): ManifacturingUnit[];
}