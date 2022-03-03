import { Grid, Stack } from "@mui/material";
import { ComponentDetailModel } from "core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../httpclient/axiosProvider";
import { mapToComponentDetailModel } from "../../mappers/viewmapper";
import { editComponentUseCase } from "../../providers/UseCaseProvider";
import { SystemPropertyRow } from "../../types/types";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import SystemPropertyOverview from "./SystemPropertyOverview";

function ComponentDetail() {
  const { componentId } = useParams() as { componentId: string };
  const [component, setComponent] = useState<ComponentDetailModel | null>(null);

  useEffect(() => {
    axiosInstance.get(`/components/${componentId}`)
      .then(response => response.data)
      .then(entry => mapToComponentDetailModel(entry))
      .then((componentDetailModel: ComponentDetailModel) => setComponent(componentDetailModel))
  }, [componentId]);

  const saveValues = (values: SystemPropertyRow[]) => {

    const nonNullRows = values.filter(({ value }) => value !== null)
    const entryArray = nonNullRows.map((systemPropertyRow: SystemPropertyRow) =>
      [systemPropertyRow.id, systemPropertyRow.value] as [string, string]);
    const editMap = new Map<string, string>(entryArray);

    editComponentUseCase.edit(componentId, editMap, { onSuccess: () => { console.log("saved successfully") } });
  }

  const schema = component?.type.systemProperties;
  const systemPropertyRows: SystemPropertyRow[] = schema?.map(systemPropertyModel => ({ ...systemPropertyModel, value: component!.systemPropertyValues.get(systemPropertyModel.id) ?? null })) ?? [];


  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={component?.owningManufacturingUnit && { id: component.owningManufacturingUnit.id, name: component.owningManufacturingUnit.systemPropertyValues.get("name") }}
                testSystem={component?.owningTestSystem && { id: component.owningTestSystem.id, name: component.owningTestSystem.systemPropertyValues.get("name") }}
                component={component && { id: component.id, name: component.systemPropertyValues.get("name") }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {component && (
            <SystemPropertyOverview
              systemPropertyValues={systemPropertyRows}
              saveValues={saveValues}
            />
          )}
        </Stack>
      </header>
    </div>
  );
}

export default ComponentDetail;
