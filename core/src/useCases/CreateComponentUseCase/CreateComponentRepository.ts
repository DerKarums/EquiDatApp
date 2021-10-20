import { Component } from "../../entities/Component";
import { SystemProperty } from "../../entities/SystemProperty";


export interface CreateComponentRepository {
    createComponent(component: Component): void;
}