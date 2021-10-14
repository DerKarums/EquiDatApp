import Component from "./Component";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";

export default class TestSystem extends SubSystem {


    constructor(private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
        private _components: Component[] = [],
        id?: string,

    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.schema;
    }

    public addComponent(component: Component) {
        this._components.push(component);
    }

    public deleteComponent(id: string) {
        this._components = this._components.filter(component => component.id != id)
    }

    public get components(): Component[] {
        return this._components;
    }
}
