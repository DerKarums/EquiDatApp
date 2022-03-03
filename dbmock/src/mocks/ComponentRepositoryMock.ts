import { CreateComponentRepository, ShowComponentRepository, SystemProperty, SystemPropertyType, Component, ComponentType, AllComponentsRepository, EditComponentRepository, DeleteComponentRepository } from "core"
import { components, componentTypes, sharedSystemProperties } from "../DataStore";
export class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository, AllComponentsRepository, EditComponentRepository, DeleteComponentRepository {

    getComponentType(componentTypeId: string): ComponentType | null{
        return componentTypes.get(componentTypeId) ?? null;
    }

    getComponentTypes(): ComponentType[] {
        return [...componentTypes.values()];
    }

    getComponents(): Component[] {
        return [...components.values()];
    }

    createComponent(componentTypeId: string, systemPropertyValues: Map<string, string>): Component {
        const componentType = this.getComponentType(componentTypeId);
        if (componentType === null) {
            throw new Error(`ComponentType with ID ${componentTypeId} doesn't exist.`)
        }
        const component = new Component(componentType, systemPropertyValues);
        components.set(component.id, component);
        return component;
    }
    
    deleteComponent(id: string): void {
        console.log("deleteComponent");
        components.delete(id);
    }
    getComponent(id: string): Component {
        return components.get(id) as Component;
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return sharedSystemProperties.find(systemProperty => systemProperty.id === id) ?? null;
    }

    editComponent(id: string, newValues: Map<string, string>): void {
        Array.from(newValues).forEach(([systemPropertyId, value]) => components.get(id)?.editSystemPropertyValue(systemPropertyId, value))
    }
}