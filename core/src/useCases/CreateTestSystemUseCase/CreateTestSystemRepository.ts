import SystemProperty from '../../entities/SystemProperty';
import TestSystem from '../../entities/TestSystem';

export interface CreateTestSystemRepository {
    createTestSystem(testSystem: TestSystem): void;
    getSchema(): SystemProperty[];
}
