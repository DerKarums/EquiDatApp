import ManufacturingUnit from '../../entities/ManufacturingUnit';

export default interface ShowManufacturingUnitRepository {
    getManifacturingUnit(id: string): ManufacturingUnit;
}
