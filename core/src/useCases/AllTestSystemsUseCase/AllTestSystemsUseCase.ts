import { AllTestSystemsCallbacks } from "./AllTestSystemsCallbacks";
import { AllTestSystemsRepository } from "./AllTestSystemsRepository";
import { TestSystemModel } from "./TestSystemModel";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import SystemPropertyFilterModel from "./SystemPropertyFilterModel";
import TestSystemResultModel from "./TestSystemResultModel";
import { TestSystem } from "../../entities";


export class AllTestSystemsUseCase {
  constructor(
    private repository: AllTestSystemsRepository,
  ) { }

  public getAllTestSystems(callbacks?: AllTestSystemsCallbacks): Promise<TestSystem[]> {
    const testSystems = this.repository.getTestSystems();
    const testSystemModels = testSystems.map(testSystem => {
      const componentModels = testSystem.components.map(component => new ComponentModel(component.getRelevantSystemProperties()));
      return new TestSystemModel(testSystem.getRelevantSystemProperties(), componentModels);
    });
    if (callbacks) {
      callbacks.setTestSystems(testSystems);
    }
    return Promise.resolve(testSystems);
  }

  public getSystemPropertiesByIds(ids: string[], callbacks: AllTestSystemsCallbacks) {
    const systemProperties = this.repository.getSystemPropertiesByIds(ids);
    callbacks.setRequestedSystemProperties(systemProperties);
  }

  getFilterOptions(callbacks: AllTestSystemsCallbacks) {
    let allSystemProperties = this.repository.getTestSystemSchema();
    callbacks.setFilterOptions(allSystemProperties.map(prop => new SystemPropertyFilterModel(prop.id)));
  }

  /**
   * Takes filter options and returns TestSystems to callbacks
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  search(callbacks: AllTestSystemsCallbacks, filterOptions?: Map<string, string>) {
    let foundTestSystems = filterOptions ? this.repository.getFilteredResults(filterOptions) : this.repository.getTestSystems();
    let foundTestSystemModels = foundTestSystems.map(testSystem => {
      let systemPropertyValues: Map<string, string | null> = new Map();
      testSystem.getRelevantSystemProperties().forEach((value, key) => {
        systemPropertyValues.set(key.id, value);
      });
      return new TestSystemResultModel(testSystem.id, systemPropertyValues);
    });
    callbacks.setSearchResults(foundTestSystemModels);
  }
}