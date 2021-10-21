import { Component } from "../../entities/Component";
import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { TestSystem } from "../../entities/TestSystem";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import { TestSystemModel } from "../AllTestSystemsUseCase/TestSystemModel";
import { AllManufacturingUnitsCallbacks } from "./AllManufacturingUnitsCallbacks";
import { AllManufacturingUnitsRepository } from "./AllManufacturingUnitsRepository";
import { ManufacturingUnitModel } from "./ManufacturingUnitModel";



export class AllManufacturingUnitsUseCase {
  constructor(
    private repository: AllManufacturingUnitsRepository,
  ) { }

  public getAllManufacturingUnits(callbacks: AllManufacturingUnitsCallbacks) {
    const manufacturingUnits = this.repository.getManufacturingUnits();
    const manufacturingUnitModels = manufacturingUnits.map(manufacturingUnit => {
      const componentModels = this.getComponentModels(manufacturingUnit.components);
      const testSystemModels = this.getTestSystemModels(manufacturingUnit.testSystems);
      return new ManufacturingUnitModel(manufacturingUnit.getRelevantSystemProperties(),
        testSystemModels, componentModels);
    });
    callbacks.setManufacturingUnitModels(manufacturingUnits);
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