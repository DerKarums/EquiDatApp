import { SystemProperty } from "../../entities/SystemProperty";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import { TestSystemModel } from "../AllTestSystemsUseCase/TestSystemModel";



export class ManufacturingUnitModel {
  constructor(
    public readonly relevantSystemProperties: Map<SystemProperty, string | null>,
    public readonly testSystemModels: TestSystemModel[],
    public readonly componentModels: ComponentModel[]
  ) { }
}