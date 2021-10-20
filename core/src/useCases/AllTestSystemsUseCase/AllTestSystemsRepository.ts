import { TestSystem } from "../../entities/TestSystem";


export interface AllTestSystemsRepository {
  getTestSystems(): TestSystem[];
}