import { SystemProperty } from "./system-property";
import { v4 as uuid } from 'uuid';

export default class ComponentType {

    private readonly _id = uuid();
    private _systemProperties: SystemProperty[] = [];

    addSystemProperty(systemProperty: SystemProperty) {
        this._systemProperties.push(systemProperty);
    }

    deleteSystemProperty(id: string) {
        this._systemProperties = this._systemProperties.filter(systemProperty => systemProperty.id != id);
    }

    get systemProperties() {
        return this._systemProperties;
    }

    get id() {
        return this._id;
    }


}
