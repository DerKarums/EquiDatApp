import TestSystem from "../../entities/TestSystem";

export default interface ShowTestSystemCallbacks {
    onTestSystemFetched(testSystem: TestSystem): void;
}
