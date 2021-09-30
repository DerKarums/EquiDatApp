import { SystemPropertyType } from "./system-property-type";
import { v4 as uuid } from 'uuid';

export class SystemProperty {

    private readonly _id = uuid();

    constructor(private _label: string, private _type: SystemPropertyType) {
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
}
