import Component from "./Component";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";

export default class TestSystem extends SubSystem {

    private components: Component[] = [];

    constructor(private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
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
