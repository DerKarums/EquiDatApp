import { SystemProperty, TestSystem } from "../../entities";
import SystemPropertyFilterModel from "./SystemPropertyFilterModel";
import TestSystemResultModel from "./TestSystemResultModel";

export interface AllTestSystemsCallbacks {
  setTestSystems(testSystems: TestSystem[]): void;
  setRequestedSystemProperties(systemPropertiesByIds: { systemProperty: SystemProperty | null, id: string }[]): void;
  setFilterOptions(filterOptionModels: SystemPropertyFilterModel[]): void;
  setSearchResults(testSystemResultModels: TestSystemResultModel[]): void;
}
