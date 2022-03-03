import { allTestSystemsUseCase } from '@/providers/UseCaseProvider';
import { TestSystem } from 'core';

class TestSystemsService {


  public async allTestSystems(): Promise<TestSystem[]> {

    const testSystems = await allTestSystemsUseCase.getAllTestSystems();
    
    return testSystems;
  }

}

export default TestSystemsService;
