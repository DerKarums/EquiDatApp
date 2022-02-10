import { TestSystem } from '../../entities/TestSystem';

export interface ShowTestSystemRepository {
    getTestSystem(id: string): TestSystem;

    setComponentParentTestSystem(componentId: string, testSystemId: string): void;
    addComponentToTestSystem(testSystemId: string, componentId: string): void;
  
}
