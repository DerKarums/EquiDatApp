import { AllComponentsUseCase, AllManufacturingUnitsUseCase, AllTestSystemsUseCase, CreateComponentUseCase, CreateManufacturingUnitUseCase, EditManufacturingUnitUseCase, EditTestSystemUseCase, EditComponentUseCase, CreateTestSystemUseCase, DeleteComponentUseCase, DeleteManufacturingUnitUseCase, DeleteTestSystemUseCase, ShowComponentUseCase, ShowManufacturingUnitUseCase, ShowTestSystemUseCase  } from 'core'
import { repositoryProvider } from './RepositoryProvider'

export const allComponentsUseCase = new AllComponentsUseCase(repositoryProvider.componentRepository);
export const allManufacturingUnitsUseCase = new AllManufacturingUnitsUseCase(repositoryProvider.manufacturingUnitRepository);
export const allTestSystemsUseCase = new AllTestSystemsUseCase(repositoryProvider.testSystemRepository);
export const createComponentUseCase = new CreateComponentUseCase(repositoryProvider.componentRepository);
export const createManufacturingUnitUseCase = new CreateManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository);
export const createTestSystemUseCase = new CreateTestSystemUseCase(repositoryProvider.testSystemRepository);
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
    allComponentsUseCase,
    allManufacturingUnitsUseCase,
    allTestSystemsUseCase,
    createComponentUseCase,
    createManufacturingUnitUseCase,
    createTestSystemUseCase,
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