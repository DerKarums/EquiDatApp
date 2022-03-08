import { ComponentRepositoryMock, ManufacturingUnitRepositoryMock, TestSystemRepositoryMock } from "dbmock";
import { databaseMocked } from "@/config";
import { TestSystemRepository } from "@/database/TestSystemRepository";

export const repositoryProvider =
    databaseMocked ?
        { // mocked
            componentRepository: new ComponentRepositoryMock(),
            manufacturingUnitRepository: new ManufacturingUnitRepositoryMock(),
            testSystemRepository: new TestSystemRepositoryMock(),
        } :
        { // productive
            componentRepository: new ComponentRepository(),
            manufacturingUnitRepository: new ManufacturingUnitRepository(),
            testSystemRepository: new TestSystemRepository(),
        }
