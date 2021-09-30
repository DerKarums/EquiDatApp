import { Component } from "./component";
import { SubSystem } from "./sub-system";
import { SystemProperty } from "./system-property";
import { SystemPropertyType } from "./system-property-type";

const SCHEMA = [
    new SystemProperty('Name', SystemPropertyType.StringType),
    new SystemProperty('Lieferant', SystemPropertyType.StringType),
    new SystemProperty('Hersteller', SystemPropertyType.StringType),
    // ...
]

export class TestSystem extends SubSystem {

    private components: Component[] = [];

    getSchema(): SystemProperty[] {
        return SCHEMA;
    }

    public addComponent(component: Component) {
        this.components.push(component);
    }

    public deleteComponent(id: string) {
        this.components = this.components.filter(component => component.id != id)
    }
}
