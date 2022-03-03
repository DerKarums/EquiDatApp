import { AllTestSystemsCallbacks } from "./AllTestSystemsCallbacks";
import { AllTestSystemsRepository } from "./AllTestSystemsRepository";
import { TestSystemModel } from "./TestSystemModel";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import SystemPropertyFilterModel from "./SystemPropertyFilterModel";
import TestSystemResultModel from "./TestSystemResultModel";
import { SystemProperty, TestSystem } from "../../entities";


export class AllTestSystemsUseCase {
  constructor(
    private repository: AllTestSystemsRepository,
  ) { }

  public async getAllTestSystems(callbacks?: AllTestSystemsCallbacks): Promise<TestSystem[]> {
    const testSystems = await this.repository.getTestSystems();

    if (callbacks) callbacks.setTestSystems(testSystems);

    return testSystems;
  }

  public async getSystemPropertiesByIds(ids: string[], callbacks?: AllTestSystemsCallbacks): Promise<{ systemProperty: SystemProperty | null, id: string }[]> {
    const systemProperties = await this.repository.getSystemPropertiesByIds(ids);
    if (callbacks) callbacks.setRequestedSystemProperties(systemProperties);
    return systemProperties;
  }

  async getFilterOptions(callbacks: AllTestSystemsCallbacks): Promise<SystemPropertyFilterModel[]> {
    let allSystemProperties = await this.repository.getTestSystemSchema();
    const filterOptions = allSystemProperties.map(prop => new SystemPropertyFilterModel(prop.id));
    callbacks.setFilterOptions(filterOptions);
    return filterOptions;
  }

  /**
   * Takes filter options and returns TestSystems to callbacks
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  async search(callbacks?: AllTestSystemsCallbacks, filterOptions?: Map<string, string>): Promise<TestSystem[]> {
    let foundTestSystems = filterOptions ? await this.repository.getFilteredResults(filterOptions) : await this.repository.getTestSystems();
    let foundTestSystemModels = foundTestSystems.map(testSystem => {
      let systemPropertyValues: Map<string, string | null> = new Map();
      testSystem.getRelevantSystemProperties().forEach((value, key) => {
        systemPropertyValues.set(key.id, value);
      });
      return new TestSystemResultModel(testSystem.id, systemPropertyValues);
    });
    if (callbacks) callbacks.setSearchResults(foundTestSystemModels);
    return foundTestSystems;
  }
}