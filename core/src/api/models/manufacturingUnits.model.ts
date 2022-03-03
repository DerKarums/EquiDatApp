import { SystemPropertyModel } from "./shared.model";

export interface ManufacturingUnitOverviewModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
}


