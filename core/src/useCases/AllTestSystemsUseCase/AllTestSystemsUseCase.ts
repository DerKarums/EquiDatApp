import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import { AllTestSystemsCallbacks } from "./AllTestSystemsCallbacks";
import { AllTestSystemsRepository } from "./AllTestSystemsRepository";
import { TestSystemModel } from "./TestSystemModel";


export class AllTestSystemsUseCase {
  constructor(
    private repository: AllTestSystemsRepository,
  ) { }

  public getAllTestSystems(callbacks: AllTestSystemsCallbacks) {
    const testSystems = this.repository.getTestSystems();
    const testSystemModels = testSystems.map(testSystem => {
      const componentModels = testSystem.components.map(component => new ComponentModel(component.getRelevantSystemProperties()));
      return new TestSystemModel(testSystem.getRelevantSystemProperties(), componentModels);
    });
    callbacks.setTestSystems(testSystems);
  }
  
  public getSystemPropertiesByIds(ids: string[], callbacks: AllTestSystemsCallbacks) {
    const systemProperties = this.repository.getSystemPropertiesByIds(ids);
    callbacks.setRequestedSystemProperties(systemProperties);
  }
}