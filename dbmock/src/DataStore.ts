import * as componentsRaw from './data/components.json';
import * as componentTypesRaw from './data/component-types.json';
import * as componentTypesSharedSchemaRaw from './data/component-types-shared-schema.json';
import * as testSystemSchemaRaw from './data/test-systems-schema.json';
import * as testSystemsRaw from './data/test-systems.json';
import * as manufacturingUnitSchemaRaw from './data/manufacturing-unit-schema.json';
import * as manufacturingUnitsRaw from './data/manufacturing-units.json';

import { ComponentJson, ComponentTypeJson, ManufacturintUnitJson, mapComponent, mapComponentType, mapManufacturingUnits, mapSystemProperty, mapTestSystem, TestSystemJson } from './mapper';


export const sharedSystemProperties = componentTypesSharedSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));

export const componentTypes = new Map(componentTypesRaw.map((componentType: ComponentTypeJson) => (
    [
        componentType.id,
        mapComponentType(componentType)
    ]
)));
export const components = new Map(componentsRaw.map((component: ComponentJson) => (
    [
        component.id,
        mapComponent(component, componentTypes)
    ]
)));

export const testSystemSchema = testSystemSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));
export const testSystems = new Map(testSystemsRaw.map((testSystem: TestSystemJson) => (
    [
        testSystem.id,
        mapTestSystem(testSystem, testSystemSchema, components)
    ]
)));

export const manufacturingUnitSchema = manufacturingUnitSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));
export const manufacturingUnits = new Map(manufacturingUnitsRaw.map((manufacturingUnit: ManufacturintUnitJson) => (
    [
        manufacturingUnit.id,
        mapManufacturingUnits(manufacturingUnit, manufacturingUnitSchema, testSystems, components)
    ]
)));
