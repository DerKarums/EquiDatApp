import { Component } from "./component";
import { SubSystem } from "./sub-system";
import { SystemProperty } from "./system-property";
import { SystemPropertyType } from "./system-property-type";
import { TestSystem } from "./test-system";


const SCHEMA = [
    new SystemProperty('Land', SystemPropertyType.StringType),
    new SystemProperty('Standort', SystemPropertyType.StringType),
    new SystemProperty('Gebäude / Werk', SystemPropertyType.StringType),
    // ...
]

export class ManifacturingUnit extends SubSystem {

    private testSystems: TestSystem[] = [];
    private components: Component[] = [];

    getSchema(): SystemProperty[] {
        return SCHEMA;
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
