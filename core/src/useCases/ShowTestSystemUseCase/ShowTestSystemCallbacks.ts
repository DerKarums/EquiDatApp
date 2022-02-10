import { TestSystem } from "../../entities/TestSystem";

export interface ShowTestSystemCallbacks {
    setTestSystem(testSystem: TestSystem): void;
}
