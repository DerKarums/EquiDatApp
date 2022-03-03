import { Grid, Stack } from "@mui/material";
import {
  TestSystemDetailModel
} from "core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import axiosInstance from "../../httpclient/axiosProvider";
import { mapToTestSystemDetailModel } from "../../mappers/viewmapper";
import {
  editTestSystemUseCase
} from "../../providers/UseCaseProvider";
import { SystemPropertyRow } from "../../types/types";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import TableToolbar from "../shared/TableToolbar";
import InnerSubSystemTable from "./InnerSubsystemTable";
import SystemPropertyOverview from "./SystemPropertyOverview";

function TestSystemDetail() {
  const { t } = useTranslation();
  const history = useHistory();
  const { testSystemId } = useParams() as { testSystemId: string };
  const [testSystem, setTestSystem] = useState<TestSystemDetailModel | null>(null);

  useEffect(() => {
    axiosInstance.get(`/testSystems/${testSystemId}`)
      .then(response => response.data)
      .then(entry => mapToTestSystemDetailModel(entry))
      .then((testSystemModel: TestSystemDetailModel) => setTestSystem(testSystemModel))
  }, [testSystemId]);

  const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];

  const selectComponent = (id: string) => {
    history.push(`/components/${id}`);
  };

  const saveValues = (values: SystemPropertyRow[]) => {
    const nonNullRows = values.filter(({ value }) => value !== null)
    const entryArray = nonNullRows.map((systemPropertyRow: SystemPropertyRow) =>
      [systemPropertyRow.id, systemPropertyRow.value] as [string, string]);
    const editMap = new Map<string, string>(entryArray);

    editTestSystemUseCase.edit(testSystemId, editMap, {
      onSuccess: () => console.log("saved successfully"),
      onComponentAdded: () => console.log("Component added"),
    });
  }

  const schema = testSystem?.schema;
  const systemPropertyRows: SystemPropertyRow[] = schema?.map(systemPropertyModel => ({...systemPropertyModel, value: testSystem!.systemPropertyValues.get(systemPropertyModel.id) ?? null}) ) ?? [];


  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={testSystem?.owningManufacturingUnit && { id: testSystem.owningManufacturingUnit.id, name: testSystem.owningManufacturingUnit.systemPropertyValues.get("name") }}
                testSystem={testSystem && { id: testSystem.id, name: testSystem.systemPropertyValues.get("name") }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {testSystem && (
            <SystemPropertyOverview
              systemPropertyValues={systemPropertyRows}
              saveValues={saveValues}
            />
          )}
          <Grid container spacing={1}>
            <Grid item xs={11}>
              {testSystem && (
                <>
                  <TableToolbar title={t("testSystemDetail.components")}>

                  </TableToolbar>
                  <InnerSubSystemTable
                    subSystems={testSystem.components}
                    shownSystemPropertyIds={shownSystemPropertyIds}
                    selectSubSystem={selectComponent}
                  />
                </>
              )}
            </Grid>
          </Grid>
        </Stack>
      </header>
    </div>
  );
}

export default TestSystemDetail;
