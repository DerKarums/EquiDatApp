import { ComponentType } from "./ComponentType";
import { SubSystem } from "./SubSystem";
import { SystemProperty } from "./SystemProperty";

export class Component extends SubSystem {

    constructor(private readonly componentType: ComponentType,
        systemPropertyValues?: Map<string, string>,
        id?: string) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

}
