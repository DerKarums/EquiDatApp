import { ComponentType } from "./ComponentType";
import { ManufacturingUnit } from "./ManufacturingUnit";
import { SubSystem } from "./SubSystem";
import { SystemProperty } from "./SystemProperty";
import { TestSystem } from "./TestSystem";

export class Component extends SubSystem {

    private _owningManufacturingUnit: ManufacturingUnit | null = null;
    private _owningTestSystem: TestSystem | null = null;

    constructor(
        readonly componentType: ComponentType,
        systemPropertyValues?: Map<string, string>,
        id?: string
    ) {
        super(id, systemPropertyValues);
    }

    getSchema(): SystemProperty[] {
        return this.componentType.systemProperties;
    }

    public set owningManufacturingUnit(manufacturingUnit: ManufacturingUnit | null) {
        this._owningManufacturingUnit = manufacturingUnit;
    } 

    public get owningManufacturingUnit(): ManufacturingUnit | null {
        return this._owningManufacturingUnit;
    }

    public set owningTestSystem(testSystem: TestSystem | null) {
        this._owningTestSystem = testSystem;
    } 

    public get owningTestSystem(): TestSystem | null {
        return this._owningTestSystem;
    }

}
