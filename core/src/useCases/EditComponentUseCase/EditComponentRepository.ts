import { Component } from "../../entities";

export interface EditComponentRepository {
    editComponent(id: string, newValues: Map<string, string>): Promise<Component>;
}
