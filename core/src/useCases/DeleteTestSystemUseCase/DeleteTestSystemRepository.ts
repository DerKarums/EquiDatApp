import { SystemProperty } from '../../entities/SystemProperty';
import { TestSystem } from '../../entities/TestSystem';

export interface DeleteTestSystemRepository {
    deleteTestSystem(testSystemId: String): void;
    getSchema(): SystemProperty[];
}
