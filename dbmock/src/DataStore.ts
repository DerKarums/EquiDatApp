import * as componentsRaw from './data/components.json';
import * as componentTypesRaw from './data/component-types.json';
import * as componentTypesSharedSchemaRaw from './data/component-types-shared-schema.json';
import * as testSystemSchemaRaw from './data/test-systems-schema.json';
import * as testSystemsRaw from './data/test-systems.json';
import * as manufacturingUnitSchemaRaw from './data/manufacturing-unit-schema.json';
import * as manufacturingUnitsRaw from './data/manufacturing-units.json';

import { ComponentJson, ComponentTypeJson, ManufacturintUnitJson, mapComponent, mapComponentType, mapManufacturingUnits, mapSystemProperty, mapTestSystem, TestSystemJson } from './mapper';
import { ManufacturingUnit, TestSystem } from '../../core/dist';


const sharedSystemProperties = componentTypesSharedSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));

const componentTypes = new Map(componentTypesRaw.map((componentType: ComponentTypeJson) => (
    [
        componentType.id,
        mapComponentType(componentType)
    ]
)));
const components = new Map(componentsRaw.map((component: ComponentJson) => (
    [
        component.id,
        mapComponent(component, componentTypes)
    ]
)));

const testSystemSchema = testSystemSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));
const testSystems = new Map(testSystemsRaw.map((testSystem: TestSystemJson) => (
    [
        testSystem.id,
        mapTestSystem(testSystem, testSystemSchema, components)
    ]
)));

const manufacturingUnitSchema = manufacturingUnitSchemaRaw.map(systemProperty => mapSystemProperty(systemProperty));
const manufacturingUnits = new Map(manufacturingUnitsRaw.map((manufacturingUnit: ManufacturintUnitJson) => (
    [
        manufacturingUnit.id,
        mapManufacturingUnits(manufacturingUnit, manufacturingUnitSchema, testSystems, components)
    ]
)));

// link manufacturingUnits to the testSystems and components they directly own
Array.from(manufacturingUnits.values()).forEach((manufacturingUnit: ManufacturingUnit) => {
    manufacturingUnit.testSystems
        .forEach(childTestSystem => {
            if (childTestSystem.owningManufacturingUnit !== null){
                throw new Error(`TestSystem ${childTestSystem.id} may not be assigned to multiple owners.`);
            }
            childTestSystem.owningManufacturingUnit = manufacturingUnit
        })
    manufacturingUnit.components
        .forEach(childComponent => {
            if (childComponent.owningManufacturingUnit !== null){
                throw new Error(`Component ${childComponent.id} may not be assigned to multiple owners.`);
            }
            childComponent.owningManufacturingUnit = manufacturingUnit
        })
})

// link testSystems and their ManufacturingUnits to the components they directly own
Array.from(testSystems.values()).forEach((testSystem: TestSystem) => {
    testSystem.components.forEach(childComponent => {
        if (childComponent.owningTestSystem !== null || childComponent.owningManufacturingUnit !== null){
            throw new Error(`Component ${childComponent.id} may not be assigned to multiple owners.`);
        }
        childComponent.owningTestSystem = testSystem;
        childComponent.owningManufacturingUnit = testSystem.owningManufacturingUnit;
    })
});

export {
    sharedSystemProperties,
    componentTypes,
    components,
    testSystemSchema,
    testSystems,
    manufacturingUnitSchema,
    manufacturingUnits,
}