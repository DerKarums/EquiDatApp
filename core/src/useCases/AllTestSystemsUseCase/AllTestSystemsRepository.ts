import TestSystem from "../../entities/TestSystem";


export default interface AllTestSystemsRepository {
  getTestSystems(): TestSystem[];
}