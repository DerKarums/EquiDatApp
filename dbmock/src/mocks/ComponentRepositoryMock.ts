import { CreateComponentRepository, ShowComponentRepository, SystemProperty, SystemPropertyType, Component, ComponentType, AllComponentsRepository, EditComponentRepository, DeleteComponentRepository } from "core"
import { components, componentTypes, sharedSystemProperties } from "../DataStore";
export class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository, AllComponentsRepository, EditComponentRepository, DeleteComponentRepository {

    // only returns one schema for mocking purpose
    getUnifiedComponentSchema(): SystemProperty[] {
        return components.values().next().value;
    }
    getFilteredComponentResults(filterOptions: Map<string, string>): Component[] {
        let results: Component[] = [];
        components.forEach((component) => {
            filterOptions.forEach((value, id) => {
                let systemPropertyValue = component.getSystemPropertyValue(id);
                if (systemPropertyValue === null) {
                    results = results.filter(result => result.id !== id);
                }
                else if (systemPropertyValue.includes(value)) {
                    results.push(component);
                }
                else {
                    results = results.filter(result => result.id !== id);
                }
            });
        });
        return results;

    }

    getComponents(): Component[] {
        return [...components.values()];
    }

    createComponent(component: Component): void {
        console.log("createComponent");
        components.set(component.id, component);
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