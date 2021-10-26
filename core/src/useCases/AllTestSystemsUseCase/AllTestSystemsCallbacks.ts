import { SystemProperty, TestSystem } from "../../entities";

export interface AllTestSystemsCallbacks {
  setTestSystems(testSystems: TestSystem[]): void;
  setRequestedSystemProperties(systemPropertiesByIds: { systemProperty: SystemProperty | null, id: string }[]): void;
}
