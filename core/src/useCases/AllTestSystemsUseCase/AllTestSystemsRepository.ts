import { SystemProperty } from "../../entities";
import { TestSystem } from "../../entities/TestSystem";


export interface AllTestSystemsRepository {
  getTestSystems(): Promise<TestSystem[]>;
  getSystemPropertiesByIds(ids: string[]): Promise<{ systemProperty: SystemProperty | null, id: string }[]>;
  getTestSystemSchema(): Promise<SystemProperty[]>;
  getFilteredResults(filterOptions: Map<string, string>): Promise<TestSystem[]>;
}