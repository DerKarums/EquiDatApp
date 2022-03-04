import { TestSystem } from "../../entities";
import { AllTestSystemsRepository } from "./AllTestSystemsRepository";
import SystemPropertyFilterModel from "./SystemPropertyFilterModel";


export class AllTestSystemsUseCase {
  constructor(
    private repository: AllTestSystemsRepository,
  ) { }

  public async getAllTestSystems(): Promise<TestSystem[]> {
    return this.repository.getTestSystems();
  }

  async getFilterOptions(): Promise<SystemPropertyFilterModel[]> {
    let allSystemProperties = await this.repository.getTestSystemSchema();
    const filterOptions = allSystemProperties.map(prop => new SystemPropertyFilterModel(prop.id));
    return filterOptions;
  }

  /**
   * Takes filter options and returns TestSystems
   * @param filterOptions Map of <SystemPropertyID, Value>
   */
  async search(filterOptions?: Map<string, string>): Promise<TestSystem[]> {
    return filterOptions ? this.repository.getFilteredResults(filterOptions) : this.repository.getTestSystems();
  }
}