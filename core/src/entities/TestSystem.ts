import { Component } from "./Component";
import { ManufacturingUnit } from "./ManufacturingUnit";
import { SubSystem } from "./SubSystem";
import { SystemProperty } from "./SystemProperty";

export class TestSystem extends SubSystem {

    private _owningManufacturingUnit: ManufacturingUnit | null = null;

    constructor(
        private readonly schema: SystemProperty[],
        systemPropertyValues?: Map<string, string>,
        private _components: Component[] = [],
        id?: string,
    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.schema;
    }

    public addComponent(component: Component) {
        this._components.push(component);
    }

    public deleteComponent(id: string) {
        this._components = this._components.filter(component => component.id != id)
    }

    public get components(): Component[] {
        return this._components;
    }

    public set owningManufacturingUnit(manufacturingUnit: ManufacturingUnit | null) {
        this._owningManufacturingUnit = manufacturingUnit;
    } 

    public get owningManufacturingUnit(): ManufacturingUnit | null {
        return this._owningManufacturingUnit;
    }
}
