import { ComponentRepositoryMock, ManufacturingUnitRepositoryMock, TestSystemRepositoryMock } from "dbmock";

export const repositoryProvider = {
    componentRepository: new ComponentRepositoryMock(),
    manufacturingUnitRepository: new ManufacturingUnitRepositoryMock(),
    testSystemRepository: new TestSystemRepositoryMock(),
}
