import { ComponentType } from "../../entities";
import { Component } from "../../entities/Component";
import { SystemProperty } from "../../entities/SystemProperty";


export interface CreateComponentRepository {
    getComponentTypes(): Promise<ComponentType[]>;
    getComponent(componentId: string): Promise<Component>;
    createComponent(componentTypeId: string, systemPropertyValues: Map<string, string>): Promise<Component>;
}