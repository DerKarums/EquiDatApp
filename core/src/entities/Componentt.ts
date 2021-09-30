import ComponentType from "./ComponentType";
import SubSystem from "./SubSystem";
import SystemProperty from "./SystemProperty";
import { v4 as uuid } from 'uuid';

export default class Component extends SubSystem {

    constructor(private readonly componentType: ComponentType, id: string = uuid()) {
        super(id)
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

}
