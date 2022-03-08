import { SystemProperty } from "../../entities";
import { TestSystem } from "../../entities/TestSystem";


export interface AllTestSystemsRepository {
  getTestSystems(): Promise<TestSystem[]>;
  getTestSystemSchema(): Promise<SystemProperty[]>;
  getFilteredResults(filterOptions: Map<string, string>): Promise<TestSystem[]>;
}