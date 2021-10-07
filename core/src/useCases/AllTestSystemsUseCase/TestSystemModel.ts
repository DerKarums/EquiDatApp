import SystemProperty from "../../entities/SystemProperty";
import { ComponentModel } from "../AllComponentsUseCase/ComponentModel";


export default class TestSystemModel {
  constructor(
    public readonly relevantSystemProperties: Map<SystemProperty, string | null>,
    public readonly componentModels: ComponentModel[]
  ) { }
}