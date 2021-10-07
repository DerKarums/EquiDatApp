import Component from "./Component";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";
import TestSystem from "./TestSystem";

export default class ManifacturingUnit extends SubSystem {

    private testSystems: TestSystem[] = [];
    private components: Component[] = [];

    constructor(private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
        id?: string
    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.schema;
    }

    public addTestSystem(testSystem: TestSystem) {
        this.testSystems.push(testSystem);
    }

    public deleteTestSystem(id: string) {
        this.testSystems = this.testSystems.filter(testSystem => testSystem.id != id)
    }

    public addComponent(component: Component) {
        this.components.push(component);
    }

    public deleteComponent(id: string) {
        this.components = this.components.filter(component => component.id != id)
    }
}
