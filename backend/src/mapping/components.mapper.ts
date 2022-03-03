import { Component, ComponentOverviewModel, ComponentType, ComponentTypem, ComponentTypeModel } from "core";
import { mapToSystemPropertyModel } from "./shared.mapper";

export function mapToComponentOverviewModel(component: Component): ComponentOverviewModel {

    const componentType = mapToComponentTypeModel(component.componentType);

    const componentOverviewModel: ComponentOverviewModel = {
        id: component.id,
        type: componentType,
        systemPropertyValues: component.systemPropertyValues,
    }
    return componentOverviewModel;
}

export function mapToComponentTypeModel(componentType: ComponentType): ComponentTypeModel {

    const testSystemOverviewModel: ComponentTypeModel = {
        id: componentType.id,
        systemProperties: componentType.systemProperties,
    }
    return testSystemOverviewModel;
}
     
     