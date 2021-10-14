import { SystemProperty } from "../../entities/SystemProperty";


export class ComponentModel {
  constructor(
    public readonly relevantSystemProperties: Map<SystemProperty, string | null>,
  ) { }
}