import TestSystem from "../../entities/TestSystem";

export default interface ShowTestSystemCallbacks {
    setTestSystem(testSystem: TestSystem): void;
}
