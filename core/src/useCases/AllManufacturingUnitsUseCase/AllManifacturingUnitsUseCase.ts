import Component from "../../entities/Component";
import ManifacturingUnit from "../../entities/ManufacturingUnit";
import TestSystem from "../../entities/TestSystem";
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
      const componentModels = this.getComponentModels(manifacturingUnit.components);
      const testSystemModels = this.getTestSystemModels(manifacturingUnit.testSystems);
      return new ManifacturingUnitModel(manifacturingUnit.getRelevantSystemProperties(),
        testSystemModels, componentModels);
    });
    callbacks.setManifacturingUnitModels(manifacturingUnitModels);
  }

  private getComponentModels(components: Component[]) {
    return components
      .map(component => new ComponentModel(component.getRelevantSystemProperties()));
  }

  private getTestSystemModels(testSystems: TestSystem[]) {
    return testSystems.map(testSystem => {
      const componentModels = this.getComponentModels(testSystem.components);
      return new TestSystemModel(testSystem.getRelevantSystemProperties(), componentModels);
    });
  }

}