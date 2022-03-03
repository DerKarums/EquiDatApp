import { SystemProperty } from '../../entities/SystemProperty';
import { TestSystem } from '../../entities/TestSystem';

export interface CreateTestSystemRepository {
    getTestSystem(id: string): TestSystem;
    createTestSystem(testSystem: TestSystem): TestSystem;
    getSchema(): SystemProperty[];
}
