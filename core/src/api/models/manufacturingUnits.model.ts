import { ComponentOverviewModel } from "./components.model";
import { SystemPropertyModel } from "./shared.model";
import { TestSystemOverviewModel } from "./testSystems.model";

export interface ManufacturingUnitOverviewModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
}

export interface ManufacturingUnitDetailModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
    testSystems: TestSystemOverviewModel;
    components: ComponentOverviewModel;
}


