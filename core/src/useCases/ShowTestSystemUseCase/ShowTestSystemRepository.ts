import { TestSystem } from '../../entities/TestSystem';

export interface ShowTestSystemRepository {
    getTestSystem(id: string): Promise<TestSystem>;  
}
