import { Component } from "../../entities";
import { AllComponentsCallbacks } from "./AllComponentsCallbacks";
import { AllComponentsRepository } from "./AllComponentsRepository";


export class AllComponentsUseCase {
  constructor(
    private readonly repository: AllComponentsRepository,
  ) { }

  public getAllComponents(callbacks?: AllComponentsCallbacks): Promise<Component[]> {
    const components = this.repository.getComponents();
    if (callbacks) {
      callbacks.setComponents(components);
    }
    return Promise.resolve(components);
  }

  public getSystemPropertiesByIds(ids: string[], callbacks: AllComponentsCallbacks) {
    const systemProperties = this.repository.getSystemPropertiesByIds(ids);
    callbacks.setRequestedSystemProperties(systemProperties);
  }
}