import { Grid, Stack } from "@mui/material";
import { Component, SystemProperty } from "core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editComponentUseCase, showComponentUseCase } from "../../providers/UseCaseProvider";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import SystemPropertyOverview from "./SystemPropertyOverview";

function ComponentDetail() {
  const { componentId } = useParams() as { componentId: string };
  const [component, setComponent] = useState<Component | null>(null);

  useEffect(() => {
    showComponentUseCase.getComponent(componentId, {
      setComponent: (component: Component) => setComponent(component),
    });
  }, []);

  const saveValues = (values: [SystemProperty, string | null][]) => {
    editComponentUseCase.edit(componentId,
      new Map<string, string>(
        values.filter(([_, value]) => value !== null)
          .map(
            ([systemProperty, value]: [SystemProperty, string | null]) =>
              [systemProperty.id, value] as [string, string])),
      {onSuccess: () => {console.log("saved successfully")}});
  }

  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={component?.owningManufacturingUnit}
                testSystem={component?.owningTestSystem}
                component={component}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {component && (
            <SystemPropertyOverview
              systemPropertyValues={component?.getRelevantSystemProperties()}
              saveValues={saveValues}
            />
          )}
        </Stack>
      </header>
    </div>
  );
}

export default ComponentDetail;
