import { AllComponentsUseCase, AllManufacturingUnitsUseCase, AllTestSystemsUseCase, CreateComponentUseCase, CreateManufacturingUnitUseCase, EditComponentUseCase, CreateTestSystemUseCase, ShowComponentUseCase, ShowManufacturingUnitUseCase, ShowTestSystemUseCase } from 'core'
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
export const editComponentUseCase = new EditComponentUseCase(repositoryProvider.componentRepository);

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
    editComponentUseCase,
}