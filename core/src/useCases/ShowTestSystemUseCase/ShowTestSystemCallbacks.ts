import { TestSystem } from "../../entities/TestSystem";

export interface ShowTestSystemCallbacks {
    onComponentAdded(): void;
    setTestSystem(testSystem: TestSystem): void;
}
