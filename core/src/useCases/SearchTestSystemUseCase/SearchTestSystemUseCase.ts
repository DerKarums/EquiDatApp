import { SystemProperty } from "../..";
import { SearchTestSystemCallbacks } from "./SearchTestSystemCallbacks";
import { SearchTestSystemRepository } from "./SearchTestSystemRepository";
import SystemPropertyFilterModel from "./SystemPropertyFilterModel";
import TestSystemResultModel from "./TestSystemResultModel";


export default class SearchTestSystemUseCase {

  constructor(
    private readonly repository: SearchTestSystemRepository,
  ) {
  }

  getFilterOptions(callbacks: SearchTestSystemCallbacks) {
    let allSystemProperties = this.repository.getAllPossibleSystemProperties();
    let groupedSystemProperties = allSystemProperties.reduce((properties: Array<SystemProperty>, systemProperty) => {
      if (properties.filter(prop => prop.id === systemProperty.id).length === 0) {
        properties.push(systemProperty);
      }
      return properties;
    }, new Array<SystemProperty>())
    callbacks.setFilterOptions(groupedSystemProperties.map(prop => new SystemPropertyFilterModel(prop.id, prop.label)));
  }

  /**
   * Takes filter options and returns TestSystems to callbacks
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  search(filterOptions: Map<string, string>, callbacks: SearchTestSystemCallbacks) {
    let foundTestSystems = this.repository.getFilteredResults(filterOptions);
    let foundTestSystemModels = foundTestSystems.map(testSystem => {
      let systemPropertyValues: Map<string, string | null> = new Map();
      testSystem.getRelevantSystemProperties().forEach((value, key) => {
        systemPropertyValues.set(key.label, value);
      });
      return new TestSystemResultModel(testSystem.id, systemPropertyValues);
    });
    callbacks.setSearchResults(foundTestSystemModels);
  }
}