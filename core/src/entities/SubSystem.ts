import SystemProperty from "./SystemProperty";
import { v4 as uuid } from 'uuid';

export default abstract class SubSystem {

    constructor(
        private readonly _id: string = uuid(),
        private systemPropertyValues = new Map<string, string>(),
    ) {
    }

    abstract getSchema(): SystemProperty[];

    editSystemPropertyValue(id: string, value: string): void {
        this.systemPropertyValues.set(id, value);
    }

    get id() {
        return this._id;
    }
}
