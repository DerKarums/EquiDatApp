import { SystemProperty } from "../../entities";
import { TestSystem } from "../../entities/TestSystem";


export interface AllTestSystemsRepository {
  getTestSystems(): TestSystem[];
  getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null, id: string }[];
}