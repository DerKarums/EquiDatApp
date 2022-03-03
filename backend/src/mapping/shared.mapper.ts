import { SystemProperty, SystemPropertyModel, SystemPropertyType } from "core";

export function mapToSystemPropertyModel(systemProperty: SystemProperty): SystemPropertyModel {

    const systemPropertyModel: SystemPropertyModel = {
        id: systemProperty.id,
        type: SystemPropertyType[systemProperty.type],
        isRequired: systemProperty.isRequired,
    }
    return systemPropertyModel;
}