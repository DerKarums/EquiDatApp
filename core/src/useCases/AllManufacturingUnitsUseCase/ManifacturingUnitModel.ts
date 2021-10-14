import SystemProperty from "../../entities/SystemProperty";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";
import TestSystemModel from "../AllTestSystemsUseCase/TestSystemModel";



export default class ManifacturingUnitModel {
  constructor(
    public readonly relevantSystemProperties: Map<SystemProperty, string | null>,
    public readonly testSystemModels: TestSystemModel[],
    public readonly componentModels: ComponentModel[]
  ) { }
}