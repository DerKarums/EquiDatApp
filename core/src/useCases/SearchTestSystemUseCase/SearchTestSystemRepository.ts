import { SystemProperty, TestSystem } from "../..";


export interface SearchTestSystemRepository {
  /**
   * Returns every available System Property of all Test Systems
   */
  getAllPossibleSystemProperties(): SystemProperty[];
  getFilteredResults(filterOptions: Map<string, string>): TestSystem[];
}