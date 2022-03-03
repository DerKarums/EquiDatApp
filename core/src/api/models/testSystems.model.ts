import { SystemPropertyModel } from "./shared.model";

export interface TestSystemOverviewModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
}

