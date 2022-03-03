import { TestSystem } from '@/../../core/dist';
import { mapToTestSystemOverviewModel } from '@/mapping/testSystems.mapper';
import TestSystemsService from '@/services/testSystems.service';
import { Controller, Get } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

@Controller()
export class TestSystemsController {
  public testSystemsService = new TestSystemsService();

  @Get('/testSystems')
  @OpenAPI({ summary: 'Return all test systems' })
  async getTestSystems() {
    const testSystems: TestSystem[] = await this.testSystemsService.allTestSystems();
    return testSystems.map(testSystem => mapToTestSystemOverviewModel(testSystem))
  }

}
