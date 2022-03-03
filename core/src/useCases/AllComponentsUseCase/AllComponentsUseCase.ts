import { AllComponentsCallbacks } from "./AllComponentsCallbacks";
import { AllComponentsRepository } from "./AllComponentsRepository";
import { ComponentModel } from "./ComponentModel";
import ComponentResultModel from "./ComponentResultModel";


export class AllComponentsUseCase {
  constructor(
    private readonly repository: AllComponentsRepository,
  ) { }

  public getAllComponents(callbacks: AllComponentsCallbacks) {
    const components = this.repository.getComponents();
    const componentModels = components.map(component => new ComponentModel(component.getRelevantSystemProperties()));
    callbacks.setComponents(components);
  }

  public getSystemPropertiesByIds(ids: string[], callbacks: AllComponentsCallbacks) {
    const systemProperties = this.repository.getSystemPropertiesByIds(ids);
    callbacks.setRequestedSystemProperties(systemProperties);
  }

  getFilterOptions() {
    let allSystemProperties = this.repository.getUnifiedComponentSchema();
    const systemPropertyIDs = allSystemProperties.map(prop => prop.id);
    return systemPropertyIDs;
  }

  /**
   * Takes filter options and returns ComponentResultModels
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  search(filterOptions?: Map<string, string>) {
    let foundComponents = filterOptions ? this.repository.getFilteredComponentResults(filterOptions) : this.repository.getComponents();
    let foundComponentModels = foundComponents.map(component => {
      let systemPropertyValues: Map<string, string | null> = new Map();
      component.getRelevantSystemProperties().forEach((value, key) => {
        systemPropertyValues.set(key.id, value);
      });
      return new ComponentResultModel(component.id, systemPropertyValues);
    });
    return foundComponentModels;
  }
}