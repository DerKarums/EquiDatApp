import Component from "./Component";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";

export default class TestSystem extends SubSystem {


    constructor(private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
        private components: Component[] = [],
        id?: string,

    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.schema;
    }

    public addComponent(component: Component) {
        this.components.push(component);
    }

    public deleteComponent(id: string) {
        this.components = this.components.filter(component => component.id != id)
    }
}
