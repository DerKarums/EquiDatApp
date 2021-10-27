import { Breadcrumbs } from "@mui/material";
import { ManufacturingUnit, TestSystem , Component} from "../../../../../core/dist";
import BreadCrumbLink from "./BreadCrumbLink";

interface BreadCrumbLinkProps {
    label: string;
    id: string;
}

interface SubSystemBreadCrumbsProps {
    manufacturingUnit?: ManufacturingUnit | null;
    testSystem?: TestSystem | null;
    component?: Component | null;
}

const SubSystemBreadCrumbs = ({ manufacturingUnit, testSystem, component }: SubSystemBreadCrumbsProps) => {

    const lastLink = component ? "component" : testSystem ? "testSystem" : "manufacturingUnit" as const;

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {manufacturingUnit &&
                <BreadCrumbLink
                    label={manufacturingUnit.getSystemPropertyValue("name") ?? "#"}
                    targetUrl={`/manufacturingUnits/${manufacturingUnit.id}`}
                    active={lastLink !== "manufacturingUnit"}
                />}

            {testSystem &&
                <BreadCrumbLink
                    label={testSystem.getSystemPropertyValue("name") ?? "#"}
                    targetUrl={`/testSystems/${testSystem.id}`}
                    active={lastLink !== "testSystem"}
                />}

            {component &&
                <BreadCrumbLink
                    label={component.getSystemPropertyValue("name") ?? "#"}
                    targetUrl={`/components/${component.id}`}
                    active={lastLink !== "component"}
                />}
        </Breadcrumbs>
    )

}

export default SubSystemBreadCrumbs;