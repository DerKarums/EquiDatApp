
export interface EditManufacturingUnitRepository {
    editManufacturingUnit(id: string, newValues: Map<string, string>): void;
}
