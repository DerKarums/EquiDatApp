import { allTestSystemsUseCase, createTestSystemUseCase, deleteTestSystemUseCase, showTestSystemUseCase } from '@/providers/UseCaseProvider';
import { TestSystem } from 'core';

class TestSystemsService {
  
  
  public async allTestSystems(): Promise<TestSystem[]> {
    return await allTestSystemsUseCase.getAllTestSystems();
  }

  public async getTestSystem(testSystemId: string): Promise<TestSystem> {
    return await showTestSystemUseCase.getTestSystem(testSystemId);
  }

  public async createTestSystem(): Promise<TestSystem> {
    return await createTestSystemUseCase.createTestSystem();
  }

  public async duplicateTestSystem(duplicateTestSystemId: string): Promise<TestSystem> {
    return await createTestSystemUseCase.createDuplicateTestSystem(duplicateTestSystemId);
  }

  public async deleteTestSystem(testSystemId: string): Promise<void> {
    return deleteTestSystemUseCase.deleteTestSystem(testSystemId);
  }

}

export default TestSystemsService;
