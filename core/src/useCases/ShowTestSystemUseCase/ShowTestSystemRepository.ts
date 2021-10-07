import TestSystem from '../../entities/TestSystem';

export default interface ShowTestSystemRepository {
    getTestSystem(id: string): TestSystem;
}
