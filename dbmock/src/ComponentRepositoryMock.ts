import { CreateComponentRepository, ShowComponentRepository, SystemProperty, SystemPropertyType, Component, ComponentType, AllComponentsRepository } from "core"

export class ComponentRepositoryMock implements CreateComponentRepository, ShowComponentRepository, AllComponentsRepository {
    


    componentTypes = [
        new ComponentType([
            new SystemProperty("Name", SystemPropertyType.StringType, true),
            new SystemProperty("Aufgestellt am", SystemPropertyType.DateType, false),
            new SystemProperty("Anzahl", SystemPropertyType.NumberType, false),
        ])];

    components: Map<string, Component> = new Map([["c1", new Component(this.componentTypes[0])]]);

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
}