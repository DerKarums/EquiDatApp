import { ComponentType } from "./ComponentType";
import { SubSystem } from "./SubSystem";
import { SystemProperty } from "./SystemProperty";

export class Component extends SubSystem {

    constructor(private readonly componentType: ComponentType,
        id?: string) {
        super(id);
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

}
