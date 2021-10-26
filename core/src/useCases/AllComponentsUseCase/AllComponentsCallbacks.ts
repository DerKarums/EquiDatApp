import { Component, SystemProperty } from "../../entities";


export interface AllComponentsCallbacks {
  setComponents(components: Component[]): void;
  setRequestedSystemProperties(systemPropertiesByIds: { systemProperty: SystemProperty | null, id: string }[]): void;
}