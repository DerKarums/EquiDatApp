import ManufacturingUnit from '../../entities/ManufacturingUnit';

export default interface ShowManufacturingUnitRepository {
    getManufacturingUnit(id: string): ManufacturingUnit;
}
