import { SystemPropertyType } from "./SystemPropertyType";


export class SystemProperty {
    private _id: string;
    private _name: string;
    private _type: SystemPropertyType;

    constructor(id: string, name: string, type: SystemPropertyType) {
        this._id = id;
        this._name = name;
        this._type = type;
    }

    public get type(): SystemPropertyType {
        return this._type;
    }

    public set type(value: SystemPropertyType) {
        this._type = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get id(): string {
        return this._id;
    }

}