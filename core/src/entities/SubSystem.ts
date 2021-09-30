import SystemProperty from "./SystemProperty";

export default abstract class SubSystem {

    constructor(
        private readonly _id: string,
        private systemPropertyValues = new Map<string, string>()
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
