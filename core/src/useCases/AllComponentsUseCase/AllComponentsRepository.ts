import { SystemProperty } from "../../entities";
import { Component } from "../../entities/Component";


export interface AllComponentsRepository {
  getComponents(): Component[];
  getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null, id: string }[];
}