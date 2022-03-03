import { Component, ComponentOverviewModel, ComponentType, ComponentTypeModel, ComponentDetailModel } from "core";
import { mapToManufacturingUnitOverviewModel } from "./manufacturingUnits.mapper";
import { mapToSystemPropertyModel } from "./shared.mapper";
import { mapToTestSystemOverviewModel } from "./testSystems.mapper";

export function mapToComponentOverviewModel(component: Component): ComponentOverviewModel {

    const componentType = mapToComponentTypeModel(component.componentType);
    const componentOverviewModel: ComponentOverviewModel = {
        id: component.id,
        type: componentType,
        systemPropertyValues: component.systemPropertyValues,
    }
    return componentOverviewModel;
}

export function mapToComponentDetailModel(component: Component): ComponentDetailModel {
    
    const componentType = mapToComponentTypeModel(component.componentType);

    const owningManufacturingUnit = component.owningManufacturingUnit ? mapToManufacturingUnitOverviewModel(component.owningManufacturingUnit) : null;
    const owningTestSystem = component.owningTestSystem ? mapToTestSystemOverviewModel(component.owningTestSystem) : null;
    
    const componentDetailModel: ComponentDetailModel = {
        id: component.id,
        type: componentType,
        systemPropertyValues: component.systemPropertyValues,
        owningManufacturingUnit: owningManufacturingUnit,
        owningTestSystem: owningTestSystem,
    }
    return componentDetailModel;
}

export function mapToComponentTypeModel(componentType: ComponentType): ComponentTypeModel {

    const systemProperties = componentType.systemProperties.map(systemProperty => mapToSystemPropertyModel(systemProperty));
    const testSystemOverviewModel: ComponentTypeModel = {
        id: componentType.id,
        systemProperties: systemProperties,
    }
    return testSystemOverviewModel;
}

