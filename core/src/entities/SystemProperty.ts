import SystemPropertyType from "./SystemPropertyType";
import { v4 as uuid } from 'uuid';

export default class SystemProperty {

    constructor(private _label: string, private _type: SystemPropertyType, private _isRequired: boolean, private readonly _id = uuid()) {
    }

    get id() {
        return this._id;
    }

    get label() {
        return this._label;
    }

    set label(label: string) {
        this._label = label;
    }

    get type() {
        return this._type;
    }

    set type(type: SystemPropertyType) {
        this._type = type;
    }

    get isRequired() {
        return this._isRequired;
    }

    set isRequired(isRequired: boolean) {
        this._isRequired = isRequired;
    }
}
