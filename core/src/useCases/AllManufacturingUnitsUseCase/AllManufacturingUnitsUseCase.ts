import { Component } from "../../entities/Component";
import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { TestSystem } from "../../entities/TestSystem";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import { TestSystemModel } from "../AllTestSystemsUseCase/TestSystemModel";
import { AllManufacturingUnitsCallbacks } from "./AllManufacturingUnitsCallbacks";
import { AllManufacturingUnitsRepository } from "./AllManufacturingUnitsRepository";
import { AllManufacturingUnitsManufacturingUnitModel } from "./AllManufacturingUnitsManufacturingUnitModel";
import { SystemProperty } from "../../entities";



export class AllManufacturingUnitsUseCase {
  constructor(
    private repository: AllManufacturingUnitsRepository,
  ) { }

  public async getAllManufacturingUnits(callbacks?: AllManufacturingUnitsCallbacks): Promise<ManufacturingUnit[]> {
    const manufacturingUnits = this.repository.getManufacturingUnits();
    if (callbacks) {
      callbacks.setManufacturingUnits(manufacturingUnits);
    }
    return Promise.resolve(manufacturingUnits);
  }

  public getSystemPropertiesByIds(ids: string[], callbacks: AllManufacturingUnitsCallbacks) {
    const systemProperties = this.repository.getSystemPropertiesByIds(ids);
    callbacks.setRequestedSystemProperties(systemProperties);
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