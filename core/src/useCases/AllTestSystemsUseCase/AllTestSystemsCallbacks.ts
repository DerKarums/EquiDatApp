import TestSystemModel from "./TestSystemModel";


export interface AllTestSystemsCallbacks {
  setTestSystems(testSystemModels: TestSystemModel[]): void
}