import { allTestSystemsUseCase, showTestSystemUseCase } from '@/providers/UseCaseProvider';
import { TestSystem } from 'core';

class TestSystemsService {
  
  public async allTestSystems(): Promise<TestSystem[]> {
    return await allTestSystemsUseCase.getAllTestSystems();
  }

  public async getTestSystem(testSystemId: string): Promise<TestSystem> {
    return await showTestSystemUseCase.getTestSystem(testSystemId);
  }
}

export default TestSystemsService;
