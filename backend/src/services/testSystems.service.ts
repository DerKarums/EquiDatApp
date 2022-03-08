import { allTestSystemsUseCase, createTestSystemUseCase, deleteTestSystemUseCase, editTestSystemUseCase, showTestSystemUseCase } from '@/providers/UseCaseProvider';
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

  public async editTestSystem(testSystemId: string, newValues: Map<string, string>): Promise<TestSystem> {
    return await editTestSystemUseCase.edit(testSystemId, newValues);
  }
}

export default TestSystemsService;
