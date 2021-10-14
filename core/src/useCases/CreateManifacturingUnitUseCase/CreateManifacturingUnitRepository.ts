import ManifactoringUnit from '../../entities/ManufacturingUnit';
import SystemProperty from '../../entities/SystemProperty';

export interface CreateManifacturingUnitRepository {
    createManifacturingUnit(manifacturingUnit: ManifactoringUnit): void;
    getSchema(): SystemProperty[];
}