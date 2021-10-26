import { CreateComponentRepository, ShowComponentRepository, SystemProperty, SystemPropertyType, Component, ComponentType, AllComponentsRepository } from "core"

export class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository, AllComponentsRepository {


    systemProperties = [
        new SystemProperty("Name", SystemPropertyType.StringType, true, "name"),
        new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false, "createdAt"),
        new SystemProperty("Anzahl", SystemPropertyType.NumberType, false, "count"),
    ]

    componentTypes = [
        new ComponentType(this.systemProperties)
    ];

    private initialComponents = [
        new Component(
            this.componentTypes[0],
            new Map([
                ["name", "Fertigungseinheit Nr. 1"],
                ["createdAt", "2021-10-14"],
                ["count", "5"]
            ])
        ),
        new Component(
            this.componentTypes[0],
            new Map([
                ["name", "Montagezelle Nr. 4711"],
                ["createdAt", "2021-10-12"],
            ])
        ),
    ];

    private components: Map<string, Component> = new Map(this.initialComponents.map(component => [component.id, component]));


    getComponents(): Component[] {
        return [...this.components.values()];
    }

    createComponent(component: Component): void {
        console.log("createComponent");
        this.components.set(component.id, component);
    }

    getComponent(id: string): Component {
        return this.components.get(id) as Component;
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return this.systemProperties.find(systemProperty => systemProperty.id === id) ?? null;
    }
}