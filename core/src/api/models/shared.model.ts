import { SystemPropertyType } from "../../entities";

export interface SystemPropertyModel {
    type: SystemPropertyType,
    isRequired: boolean,
    id: string,
}
