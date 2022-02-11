import { Component } from "../../entities/Component";
import { SystemProperty } from "../../entities/SystemProperty";


export interface DeleteComponentRepository {
    deleteComponent(componentId: String): void;
}