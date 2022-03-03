import { SystemPropertyModel } from "./shared.model";

export interface ComponentOverviewModel {
    id: string;
    type: ComponentTypeModel;
    systemPropertyValues: Map<string, string>;
}

export interface ComponentDetailModel {
    id: string;
    type: ComponentTypeModel;
    systemPropertyValues: Map<string, string>;
}


export interface ComponentTypeModel {
    id: string;
    systemProperties: SystemPropertyModel[];
}
