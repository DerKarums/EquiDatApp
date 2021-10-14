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

    getRelevantSystemProperties(): Map<SystemProperty, string | null> {
        return new Map(
            this.getSchema()
                .map((systemProperty) => [systemProperty, this.getSystemPropertyValue(systemProperty.id)])
        );
    }

    getSystemPropertyValue(id: string): string | null {
        const value = this.systemPropertyValues.get(id);
        return value === undefined ? null : value;
    }

    get id() {
        return this._id;
    }
}
