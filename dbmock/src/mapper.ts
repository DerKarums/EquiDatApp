import { Component, ComponentType, ManufacturingUnit, SystemProperty, SystemPropertyType, TestSystem } from "core";

export function mapSystemProperty(systemProperty: SystemPropertyJson): SystemProperty {
    return new SystemProperty(
        SystemPropertyType[systemProperty.type as keyof typeof SystemPropertyType],
        systemProperty.isRequired,
        systemProperty.id);
}

export function mapComponentType(componentType: ComponentTypeJson): ComponentType {
    return new ComponentType(
        componentType.systemProperties.map(mapSystemProperty),
        componentType.id
    )
}

export function mapComponent(component: ComponentJson, componentTypes: Map<string, ComponentType>): Component {
    if (!componentTypes.has(component.type)) {
        throw new Error(`Unknown componentType: ${component.type}`)
    }
    return new Component(
        componentTypes.get(component.type) as ComponentType,
        new Map(Object.entries(component.systemPropertyValues)),
        component.id
    )
}

export function mapTestSystem(testSystem: TestSystemJson, schema: SystemProperty[], components: Map<string, Component>): TestSystem {
    testSystem.components.forEach(component => { 
        if (!components.has(component)) {
        throw new Error(`Unknown componentType: ${component}`)
    }})
   
    return new TestSystem(
        schema,
        new Map(Object.entries(testSystem.systemPropertyValues)),
        testSystem.components.map(component => components.get(component) as Component),
        testSystem.id
    )
}

export function mapManufacturingUnits(manufacturingUnit: ManufacturintUnitJson, schema: SystemProperty[], testSystems: Map<string, TestSystem>, components: Map<string, Component>): ManufacturingUnit {
    manufacturingUnit.testSystems.forEach(testSystem => { 
        if (!testSystems.has(testSystem)) {
        throw new Error(`Unknown componentType: ${testSystem}`)
    }})

    manufacturingUnit.components.forEach(component => { 
        if (!components.has(component)) {
        throw new Error(`Unknown componentType: ${component}`)
    }})
   
    return new ManufacturingUnit(
        schema,
        new Map(Object.entries(manufacturingUnit.systemPropertyValues)),
        manufacturingUnit.testSystems.map(testSystem => testSystems.get(testSystem) as TestSystem),
        manufacturingUnit.components.map(component => components.get(component) as Component),
        manufacturingUnit.id
    )
}

export type ComponentTypeJson = {
    id: string;
    systemProperties: SystemPropertyJson[];
}

export type SystemPropertyJson = {
    id: string;
    type: string;
    isRequired: boolean;
}

export type ComponentJson = {
    id: string;
    type: string;
    systemPropertyValues: any;
}

export type TestSystemJson = {
    id: string;
    systemPropertyValues: any;
    components: string[];
}

export type ManufacturintUnitJson = {
    id: string;
    systemPropertyValues: any;
    components: string[];
    testSystems: string[];
}