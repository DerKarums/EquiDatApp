
export interface EditTestSystemRepository {
    editTestSystem(id: string, newValues: Map<string, string>): void;
    setComponentParentTestSystem(componentId: string, testSystemId: string): void;
    addComponentToTestSystem(testSystemId: string, componentId: string): void;
}
