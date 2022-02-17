import SystemPropertyFilterModel from "./SystemPropertyFilterModel";
import TestSystemResultModel from "./TestSystemResultModel";


export interface SearchTestSystemCallbacks {
  setFilterOptions(filterOptionModels: SystemPropertyFilterModel[]): void;
  setSearchResults(testSystemResultModels: TestSystemResultModel[]): void;
}