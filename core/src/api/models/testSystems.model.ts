import { ComponentOverviewModel } from "./components.model";
import { SystemPropertyModel } from "./shared.model";

export interface TestSystemOverviewModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
}

export interface TestSystemDetailModel {
    id: string;
    schema: SystemPropertyModel[];
    systemPropertyValues: Map<string, string>;
    components: ComponentOverviewModel;
}


