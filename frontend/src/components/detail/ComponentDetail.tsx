import { Edit, Save } from "@mui/icons-material";
import { Breadcrumbs, Grid, IconButton, Link, Stack } from "@mui/material";
import { Component } from "core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showComponentUseCase } from "../../providers/UseCaseProvider";
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
                />
              )}
        </Stack>
      </header>
    </div>
  );
}

export default ComponentDetail;
