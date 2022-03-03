import { SystemProperty, SystemPropertyModel, SystemPropertyType } from "core";

export function mapToSystemPropertyModel(systemProperty: SystemProperty): SystemPropertyModel {

    const systemPropertyModel: SystemPropertyModel = {
        id: systemProperty.id,
        type: systemProperty.type,
        isRequired: systemProperty.isRequired,
    }
    return systemPropertyModel;
}