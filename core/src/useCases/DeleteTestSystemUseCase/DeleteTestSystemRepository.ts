import { SystemProperty } from '../../entities/SystemProperty';
import { TestSystem } from '../../entities/TestSystem';

export interface DeleteTestSystemRepository {
    createTestSystem(testSystem: TestSystem): void;
    getSchema(): SystemProperty[];
}
