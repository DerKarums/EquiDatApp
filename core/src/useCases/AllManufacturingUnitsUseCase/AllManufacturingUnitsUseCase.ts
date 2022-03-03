import { Component } from "../../entities/Component";
import { ManufacturingUnit } from "../../entities/ManufacturingUnit";
import { TestSystem } from "../../entities/TestSystem";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import { TestSystemModel } from "../AllTestSystemsUseCase/TestSystemModel";
import { AllManufacturingUnitsCallbacks } from "./AllManufacturingUnitsCallbacks";
import { AllManufacturingUnitsRepository } from "./AllManufacturingUnitsRepository";
import { AllManufacturingUnitsManufacturingUnitModel } from "./AllManufacturingUnitsManufacturingUnitModel";
import ManufacturingUnitResultModel from "./ManufacturingUnitResultModel";



export class AllManufacturingUnitsUseCase {
  constructor(
    private repository: AllManufacturingUnitsRepository,
  ) { }

  public getAllManufacturingUnits(callbacks: AllManufacturingUnitsCallbacks) {
    const manufacturingUnits = this.repository.getManufacturingUnits();
    const manufacturingUnitModels = manufacturingUnits.map(manufacturingUnit => {
      const componentModels = this.getComponentModels(manufacturingUnit.components);
      const testSystemModels = this.getTestSystemModels(manufacturingUnit.testSystems);
      return new AllManufacturingUnitsManufacturingUnitModel(manufacturingUnit.getRelevantSystemProperties(),
        testSystemModels, componentModels);
    });
    callbacks.setManufacturingUnits(manufacturingUnits);
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

  getFilterOptions() {
    let allSystemProperties = this.repository.getManufacturingUnitSchema();
    const systemPropertyIDs = allSystemProperties.map(prop => prop.id);
    return systemPropertyIDs;
  }

  /**
   * Takes filter options and returns TestSystems to callbacks
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  search(filterOptions?: Map<string, string>) {
    let foundManufacturingUnits = filterOptions ? this.repository.getFilteredManufacturingUnitResults(filterOptions) : this.repository.getManufacturingUnits();
    let foundManufacturingUnitModels = foundManufacturingUnits.map(manufacturingUnit => {
      let systemPropertyValues: Map<string, string | null> = new Map();
      manufacturingUnit.getRelevantSystemProperties().forEach((value, key) => {
        systemPropertyValues.set(key.id, value);
      });
      return new ManufacturingUnitResultModel(manufacturingUnit.id, systemPropertyValues);
    });
    return foundManufacturingUnitModels;
  }

}