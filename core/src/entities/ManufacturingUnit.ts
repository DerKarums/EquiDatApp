import Component from "./Component";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";
import TestSystem from "./TestSystem";

export default class ManufacturingUnit extends SubSystem {


    constructor(private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
        private _testSystems: TestSystem[] = [],
        private _components: Component[] = [],
        id?: string
    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.schema;
    }

    public addTestSystem(testSystem: TestSystem) {
        this._testSystems.push(testSystem);
    }

    public deleteTestSystem(id: string) {
        this._testSystems = this._testSystems.filter(testSystem => testSystem.id != id)
    }

    public addComponent(component: Component) {
        this._components.push(component);
    }

    public deleteComponent(id: string) {
        this._components = this._components.filter(component => component.id != id)
    }

    public get testSystems(): TestSystem[] {
        return this._testSystems;
    }

    public get components(): Component[] {
        return this._components;
    }

}
