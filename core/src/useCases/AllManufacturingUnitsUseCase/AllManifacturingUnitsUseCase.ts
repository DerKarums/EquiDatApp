import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import TestSystemModel from "../AllTestSystemsUseCase/TestSystemModel";
import { AllManifacturingUnitsCallbacks } from "./AllManifacturingUnitsCallbacks";
import { AllManifacturingUnitsRepository } from "./AllManifacturingUnitsRepository";
import ManifacturingUnitModel from "./ManifacturingUnitModel";



export default class AllManifacturingUnitsUseCase {
  constructor(
    private repository: AllManifacturingUnitsRepository,
  ) { }

  public getAllManifacturingUnits(callbacks: AllManifacturingUnitsCallbacks) {
    const manifacturingUnits = this.repository.getManifacturingUnits();
    const manifacturingUnitModels = manifacturingUnits.map(manifacturingUnit => {
      const componentModels = manifacturingUnit.components
        .map(component => new ComponentModel(component.getRelevantSystemProperties()));
      const testSystemModels = manifacturingUnit.testSystems.map(testSystem => {
        const componentModels = testSystem.components.map(component => new ComponentModel(component.getRelevantSystemProperties()));
        return new TestSystemModel(testSystem.getRelevantSystemProperties(), componentModels);
      });
      return new ManifacturingUnitModel(manifacturingUnit.getRelevantSystemProperties(),
        testSystemModels, componentModels);
    });
    callbacks.setManifacturingUnitModels(manifacturingUnitModels);
  }
}