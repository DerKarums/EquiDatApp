import { SystemProperty } from '../../entities/SystemProperty';
import { TestSystem } from '../../entities/TestSystem';

export interface DeleteTestSystemRepository {
    deleteTestSystem(testSystem: TestSystem): void;
    getSchema(): SystemProperty[];
}
