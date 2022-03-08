import { AllComponentsRepository, Component, ComponentType, CreateComponentRepository, DeleteComponentRepository, EditComponentRepository, ShowComponentRepository } from "core";

export class ComponentRepository implements AllComponentsRepository, CreateComponentRepository, DeleteComponentRepository, EditComponentRepository, ShowComponentRepository {
    async getComponents(): Promise<Component[]> {
        console.warn("getManufacturingUnits")
        return [];
    }
    async getComponentTypes(): Promise<ComponentType[]> {
        console.warn("getManufacturingUnits")
        return [];
    }
    async getComponent(componentId: string): Promise<Component> {
        console.warn("getManufacturingUnits")
        return new Component(new ComponentType([]));
    }
    async createComponent(componentTypeId: string, systemPropertyValues: Map<string, string>): Promise<Component> {
        console.warn("getManufacturingUnits")
        return new Component(new ComponentType([]));
    }
    deleteComponent(componentId: string): void {
        console.warn("getManufacturingUnits")
    }
    async editComponent(id: string, newValues: Map<string, string>): Promise<Component> {
        console.warn("getManufacturingUnits")
        return new Component(new ComponentType([]));
    } 
}