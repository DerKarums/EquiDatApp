import Component from "./Componentt";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";
import SystemPropertyType from "./SystemPropertyType";

const SCHEMA = [
    new SystemProperty('Name', SystemPropertyType.StringType),
    new SystemProperty('Lieferant', SystemPropertyType.StringType),
    new SystemProperty('Hersteller', SystemPropertyType.StringType),
    // ...
]

export default class TestSystem extends SubSystem {

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
