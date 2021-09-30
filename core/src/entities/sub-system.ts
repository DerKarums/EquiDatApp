import { SystemProperty } from "./system-property";
import { v4 as uuid } from 'uuid';

export abstract class SubSystem {

    private readonly _id: string = uuid();
    private systemPropertyValues = new Map<string, string>();

    constructor() {

    }

    abstract getSchema(): SystemProperty[];

    editSystemPropertyValue(id: string, value: string): void {
        this.systemPropertyValues.set(id, value);
    }

    get id() {
        return this._id;
    }
}
