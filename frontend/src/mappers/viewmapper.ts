import { ComponentDetailModel, ComponentOverviewModel, ManufacturingUnitDetailModel, ManufacturingUnitOverviewModel, TestSystemDetailModel, TestSystemOverviewModel } from "core"

export function mapToManufacturingUnitOverviewModel(manufacturingUnit: any): ManufacturingUnitOverviewModel {
    const manufacturingUnitOverviewModel: ManufacturingUnitOverviewModel = {
        ...manufacturingUnit,
        systemPropertyValues: new Map(Object.entries(manufacturingUnit.systemPropertyValues)),
    }
    return manufacturingUnitOverviewModel
}

export function mapToTestSystemOverviewModel(testSystem: any): TestSystemOverviewModel {
    const testSystemOverviewModel: TestSystemOverviewModel = {
        ...testSystem,
        systemPropertyValues: new Map(Object.entries(testSystem.systemPropertyValues)),
    }
    return testSystemOverviewModel
}

export function mapToComponentOverviewModel(component: any): ComponentOverviewModel {
    const componentOverviewModel: ComponentOverviewModel = {
        ...component,
        systemPropertyValues: new Map(Object.entries(component.systemPropertyValues)),
    }
    return componentOverviewModel
}

export function mapToManufacturingUnitDetailModel(manufacturingUnit: any): ManufacturingUnitDetailModel {
    const manufacturingUnitDetailModel: ManufacturingUnitDetailModel = {
        ...manufacturingUnit,
        systemPropertyValues: new Map(Object.entries(manufacturingUnit.systemPropertyValues)),
        testSystems: manufacturingUnit.testSystems.map((testSystem: any)  => mapToTestSystemOverviewModel(testSystem)),
        components: manufacturingUnit.components.map((component: any) => mapToComponentOverviewModel(component)),
    }

    return manufacturingUnitDetailModel;
}

export function mapToTestSystemDetailModel(testSystem: any): TestSystemDetailModel {
    const testSystemDetailModel: TestSystemDetailModel = {
        ...testSystem,
        systemPropertyValues: new Map(Object.entries(testSystem.systemPropertyValues)),
        owningManufacturingUnit: mapToManufacturingUnitOverviewModel(testSystem.owningManufacturingUnit),
        components: testSystem.components.map((component: any) => mapToComponentOverviewModel(component)),
    }

    return testSystemDetailModel;
}

export function mapToComponentDetailModel(component: any): ComponentDetailModel {
    const componentDetailModel: ComponentDetailModel = {
        ...component,
        systemPropertyValues: new Map(Object.entries(component.systemPropertyValues)),
        owningManufacturingUnit: mapToManufacturingUnitOverviewModel(component.owningManufacturingUnit),
        owningTestSystem: mapToTestSystemOverviewModel(component.owningTestSystem),
    }

    return componentDetailModel;
}