import { Component } from "../../entities/Component";
import { SystemProperty } from "../../entities/SystemProperty";


export interface CreateComponentRepository {
    getComponent(componentId: string): Component;
    createComponent(componentTypeId: string, systemPropertyValues: Map<string, string>): Component;
}