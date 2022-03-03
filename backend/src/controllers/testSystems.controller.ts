import { ManufacturingUnit, TestSystem } from '@/../../core/dist';
import { mapToManufacturingUnitOverviewModel } from '@/mapping/manufacturingUnits.mapper';
import { mapToTestSystemOverviewModel } from '@/mapping/testSystems.mapper';
import ManufacturingUnitsService from '@/services/manufacturingUnits.service';
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
