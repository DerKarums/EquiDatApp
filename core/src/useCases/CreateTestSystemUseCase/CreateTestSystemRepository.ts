import { SystemProperty } from '../../entities/SystemProperty';
import { TestSystem } from '../../entities/TestSystem';

export interface CreateTestSystemRepository {
    getTestSystem(id: string): Promise<TestSystem>;
    createTestSystem(testSystem: TestSystem): Promise<TestSystem>;
    getSchema(): Promise<SystemProperty[]>;
}
