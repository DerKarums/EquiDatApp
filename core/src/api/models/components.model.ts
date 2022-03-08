import { ManufacturingUnitOverviewModel } from "./manufacturingUnits.model";
import { SystemPropertyModel } from "./shared.model";
import { TestSystemOverviewModel } from "./testSystems.model";

export interface ComponentOverviewModel {
    id: string;
    type: ComponentTypeModel;
    systemPropertyValues: Map<string, string>;
}

export interface ComponentDetailModel {
    id: string;
    type: ComponentTypeModel;
    systemPropertyValues: Map<string, string>;
    owningManufacturingUnit?: ManufacturingUnitOverviewModel;
    owningTestSystem?: TestSystemOverviewModel;
}


export interface ComponentTypeModel {
    id: string;
    systemProperties: SystemPropertyModel[];
}
