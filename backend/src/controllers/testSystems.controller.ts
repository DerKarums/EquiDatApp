import { TestSystem } from '@/../../core/dist';
import { mapToTestSystemDetailModel, mapToTestSystemOverviewModel } from '@/mapping/testSystems.mapper';
import TestSystemsService from '@/services/testSystems.service';
import { Controller, Delete, Get, Param, Post, QueryParam } from 'routing-controllers';
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

  @Get('/testSystems/:testSystemId')
  @OpenAPI({ summary: 'Return the test system with the given ID' })
  async getTestSystem(@Param('testSystemId') testSystemId: string) {
    const testSystem: TestSystem = await this.testSystemsService.getTestSystem(testSystemId);
    return mapToTestSystemDetailModel(testSystem)
  }

  @Delete('/testSystems/:testSystemId')
  @OpenAPI({ summary: 'Delete the test system with the given ID' })
  async deleteTestSystem(@Param('testSystemId') testSystemId: string): Promise<string> {
    await this.testSystemsService.deleteTestSystem(testSystemId);
    return "success"
  }

  @Post('/testSystems/')
  @OpenAPI({ summary: 'Create a new empty test system or duplicate one via its ID' })
  async createTestSystem(
    @QueryParam("duplicateTestSystemId") duplicateTestSystemId: string
  ) {

    let testSystem: TestSystem;
    if (duplicateTestSystemId) {
      testSystem = await this.testSystemsService.duplicateTestSystem(duplicateTestSystemId);
    } else {
      testSystem = await this.testSystemsService.createTestSystem();
    }
    return mapToTestSystemDetailModel(testSystem)
  }




}
