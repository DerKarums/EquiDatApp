import { SystemProperty } from "./SystemProperty";
import { v4 as uuid } from 'uuid';

export class ComponentType {

    constructor(private _systemProperties: SystemProperty[], private readonly _id = uuid()) {
    }


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
