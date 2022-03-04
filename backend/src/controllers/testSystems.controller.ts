import { TestSystem, TestSystemDetailModel } from '@/../../core/dist';
import { mapToTestSystemDetailModel, mapToTestSystemOverviewModel } from '@/mapping/testSystems.mapper';
import TestSystemsService from '@/services/testSystems.service';
import { Body, Controller, Delete, Get, Param, Post, Put, QueryParam } from 'routing-controllers';
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

  @Put('/testSystems/:testSystemId')
  @OpenAPI({ summary: 'Edit the test system by providing a new array of system properties' })
  async editTestSystem(
    @Param('testSystemId') testSystemId: string,
    @Body() newValues: Map<string, string>,
  ): Promise<TestSystemDetailModel> {
    const testSystem = await this.testSystemsService.editTestSystem(testSystemId, newValues);
    return mapToTestSystemDetailModel(testSystem);
  }


}
