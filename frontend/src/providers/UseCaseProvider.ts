import { AllComponentsUseCase, AllManufacturingUnitsUseCase, AllTestSystemsUseCase, CreateComponentUseCase, CreateManufacturingUnitUseCase, CreateTestSystemUseCase, ShowComponentUseCase, ShowManufacturingUnitUseCase, ShowTestSystemUseCase } from 'core'
import {repositoryProvider } from './RepositoryProvider'

export const useCases = {
    allComponentsUseCase: new AllComponentsUseCase(repositoryProvider.componentRepository),
    allManufacturingUnitsUseCase: new AllManufacturingUnitsUseCase(repositoryProvider.manufacturingUnitRepository),
    allTestSystemsUseCase: new AllTestSystemsUseCase(repositoryProvider.testSystemRepository),
    createComponentUseCase: new CreateComponentUseCase(repositoryProvider.componentRepository),
    createManufacturingUnitUseCase: new CreateManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository),
    createTestSystemUseCase: new CreateTestSystemUseCase(repositoryProvider.testSystemRepository),
    showComponentUseCase: new ShowComponentUseCase(repositoryProvider.componentRepository),
    showManufacturingUnitsUseCase: new ShowManufacturingUnitUseCase(repositoryProvider.manufacturingUnitRepository),
    showTestSystemsUseCase: new ShowTestSystemUseCase(repositoryProvider.testSystemRepository),
}