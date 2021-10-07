import Component from "../../entities/Component";


export interface AllComponentsRepository {
  getComponents(): Component[];
}