import { CreateComponentRepository, ShowComponentRepository, SystemProperty, SystemPropertyType, Component, ComponentType, AllComponentsRepository, EditComponentRepository } from "core"
import { components, sharedSystemProperties } from "../DataStore";
export class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository, AllComponentsRepository, EditComponentRepository {


    getComponents(): Component[] {
        return [...components.values()];
    }

    createComponent(component: Component): void {
        console.log("createComponent");
        components.set(component.id, component);
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