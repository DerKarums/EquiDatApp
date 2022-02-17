import { Component } from "../../entities/Component";
import { SystemProperty } from "../../entities/SystemProperty";


export interface CreateComponentRepository {
    getComponent(componentId: string): Component;
    createComponent(component: Component): void;
}