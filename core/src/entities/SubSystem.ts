import { SystemProperty } from "./SystemProperty";
import { v4 as uuid } from 'uuid';

export abstract class SubSystem {

    constructor(
        private readonly _id: string = uuid(),
        private _systemPropertyValues = new Map<string, string>(),
    ) {
    }

    abstract getSchema(): SystemProperty[];

    editSystemPropertyValue(id: string, value: string): void {
        this._systemPropertyValues.set(id, value);
    }

    getRelevantSystemProperties(): Map<SystemProperty, string | null> {
        return new Map(
            this.getSchema()
                .map((systemProperty) => [systemProperty, this.getSystemPropertyValue(systemProperty.id)])
        );
    }

    getSystemPropertyValue(id: string): string | null {
        const value = this._systemPropertyValues.get(id);
        return value === undefined ? null : value;
    }

    get systemPropertyValues(): Map<string, string> {
        return new Map(this._systemPropertyValues);
    }

    get id() {
        return this._id;
    }
}
