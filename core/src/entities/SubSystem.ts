import SystemProperty from "./SystemProperty";

export default abstract class SubSystem {

    private systemPropertyValues = new Map<string, string>();

    constructor(private readonly _id: string) {
    }

    abstract getSchema(): SystemProperty[];

    editSystemPropertyValue(id: string, value: string): void {
        this.systemPropertyValues.set(id, value);
    }

    get id() {
        return this._id;
    }
}
