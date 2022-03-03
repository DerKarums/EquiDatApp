import { EditComponentUseCase, EditManufacturingUnitUseCase, EditTestSystemUseCase } from 'core';
import { repositoryProvider } from './RepositoryProvider';

export const editManufacturingUnitUseCase = new EditManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository);
export const editTestSystemUseCase = new EditTestSystemUseCase(repositoryProvider.testSystemRepository);
export const editComponentUseCase = new EditComponentUseCase(repositoryProvider.componentRepository);
export const useCases = {
    editManufacturingUnitUseCase,
    editTestSystemUseCase,
    editComponentUseCase,
}