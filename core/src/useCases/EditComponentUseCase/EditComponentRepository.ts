
export interface EditComponentRepository {
    editComponent(id: string, newValues: Map<string, string>): void;
}
