import { DeleteComponentUseCase, DeleteManufacturingUnitUseCase, DeleteTestSystemUseCase, EditComponentUseCase, EditManufacturingUnitUseCase, EditTestSystemUseCase, ShowComponentUseCase, ShowManufacturingUnitUseCase, ShowTestSystemUseCase } from 'core';
import { repositoryProvider } from './RepositoryProvider';

export const showComponentUseCase = new ShowComponentUseCase(repositoryProvider.componentRepository);
export const showManufacturingUnitsUseCase = new ShowManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository);
export const showTestSystemUseCase = new ShowTestSystemUseCase(repositoryProvider.testSystemRepository);
export const editManufacturingUnitUseCase = new EditManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository);
export const editTestSystemUseCase = new EditTestSystemUseCase(repositoryProvider.testSystemRepository);
export const editComponentUseCase = new EditComponentUseCase(repositoryProvider.componentRepository);
export const deleteManufacturingUnitUseCase = new DeleteManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository);
export const deleteTestSystemUseCase = new DeleteTestSystemUseCase(repositoryProvider.testSystemRepository);
export const deleteComponentUseCase = new DeleteComponentUseCase(repositoryProvider.componentRepository);
export const useCases = {
    showComponentUseCase,
    showManufacturingUnitsUseCase,
    showTestSystemUseCase,
    editManufacturingUnitUseCase,
    editTestSystemUseCase,
    editComponentUseCase,
    deleteComponentUseCase,
    deleteManufacturingUnitUseCase,
    deleteTestSystemUseCase,
}