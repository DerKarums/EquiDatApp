import ComponentType from "./ComponentType";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";

export default class Component extends SubSystem {

    constructor(private readonly componentType: ComponentType) {
        super();
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

}
