import { AllComponentsCallbacks } from "./AllComponentsCallbacks";
import { AllComponentsRepository } from "./AllComponentsRepository";
import { ComponentModel } from "./ComponentModel";


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
}