import { SystemPropertyModel } from "./shared.model";

export interface ComponentOverviewModel {
    id: string;
    systemPropertyValues: Map<string, string>;
}


export interface ComponentTypeModel {
    id: string;
    systemProperties: Map<string, string>;
}
