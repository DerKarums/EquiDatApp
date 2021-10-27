
export interface EditTestSystemRepository {
    editTestSystem(id: string, newValues: Map<string, string>): void;
}
