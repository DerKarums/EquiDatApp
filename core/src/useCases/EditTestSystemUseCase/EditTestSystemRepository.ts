import { TestSystem } from "../../entities";

export interface EditTestSystemRepository {
    editTestSystem(id: string, newValues: Map<string, string>): Promise<TestSystem>;
    setComponentParentTestSystem(componentId: string, testSystemId: string): void;
    addComponentToTestSystem(testSystemId: string, componentId: string): void;
}
