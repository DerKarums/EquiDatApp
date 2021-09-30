import ComponentType from "./component-type";
import { SubSystem } from "./sub-system";
import { SystemProperty } from "./system-property";

export class Component extends SubSystem {

    constructor(private readonly componentType: ComponentType) {
        super()
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

}
