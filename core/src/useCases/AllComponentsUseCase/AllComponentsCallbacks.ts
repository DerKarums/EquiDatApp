import Component from "../../entities/Component";
import { ComponentModel } from "./ComponentModel";


export interface AllComponentsCallbacks {
  setComponents(componentModels: ComponentModel[]): void;
}