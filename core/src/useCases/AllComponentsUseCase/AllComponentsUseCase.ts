import { Component } from "../../entities";
import { AllComponentsRepository } from "./AllComponentsRepository";


export class AllComponentsUseCase {
  constructor(
    private readonly repository: AllComponentsRepository,
  ) { }

  public async getAllComponents(): Promise<Component[]> {
    return this.repository.getComponents();
  }
}