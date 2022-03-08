import { Breadcrumbs } from "@mui/material";
import BreadCrumbLink from "./BreadCrumbLink";

interface BreadCrumbEntry {
    id: string;
    name?: string;
}
interface SubSystemBreadCrumbsProps {
    manufacturingUnit?: BreadCrumbEntry | null | undefined;
    testSystem?: BreadCrumbEntry | null | undefined;
    component?: BreadCrumbEntry | null | undefined;
}

const SubSystemBreadCrumbs = ({ manufacturingUnit, testSystem, component }: SubSystemBreadCrumbsProps) => {

    const lastLink = component ? "component" : testSystem ? "testSystem" : "manufacturingUnit" as const;

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {manufacturingUnit &&
                <BreadCrumbLink
                    label={manufacturingUnit.name ?? "#"}
                    targetUrl={`/manufacturingUnits/${manufacturingUnit.id}`}
                    active={lastLink !== "manufacturingUnit"}
                />}

            {testSystem &&
                <BreadCrumbLink
                    label={testSystem.name ?? "#"}
                    targetUrl={`/testSystems/${testSystem.id}`}
                    active={lastLink !== "testSystem"}
                />}

            {component &&
                <BreadCrumbLink
                    label={component.name ?? "#"}
                    targetUrl={`/components/${component.id}`}
                    active={lastLink !== "component"}
                />}
        </Breadcrumbs>
    )

}

export default SubSystemBreadCrumbs;