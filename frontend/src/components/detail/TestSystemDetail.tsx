import { Grid, Stack } from "@mui/material";
import {
  AllComponentsCallbacks,
  Component,
  SystemProperty,
  TestSystem
} from "core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import {
  allComponentsUseCase,
  editTestSystemUseCase,
  showTestSystemUseCase
} from "../../providers/UseCaseProvider";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import TableToolbar from "../shared/TableToolbar";
import InnerSubSystemTable from "./InnerSubsystemTable";
import SystemPropertyOverview from "./SystemPropertyOverview";

function TestSystemDetail() {
  const { t } = useTranslation();
  const history = useHistory();
  const { testSystemId } = useParams() as { testSystemId: string };
  const [testSystem, setTestSystem] = useState<TestSystem | null>(null);

  useEffect(() => {
    showTestSystemUseCase.getTestSystem(testSystemId, {
      setTestSystem: (testSystem: TestSystem) => setTestSystem(testSystem),
    });
  }, []);

  const shownSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];
  const [shownSystemProperties, setShownSystemProperties] = useState<
    SystemProperty[]
  >([]);
  const callback: AllComponentsCallbacks = {
    setComponents: (_: Component[]) => { },
    setRequestedSystemProperties: (
      systemPropertiesByIds: {
        systemProperty: SystemProperty | null;
        id: string;
      }[]
    ) => {
      setShownSystemProperties(
        systemPropertiesByIds
          .map((systemPropertiesByIds) => systemPropertiesByIds.systemProperty)
          .filter(
            (systemProperty) => systemProperty !== null
          ) as SystemProperty[]
      );
    },
  };

  useEffect(() => {
    allComponentsUseCase.getSystemPropertiesByIds(
      shownSystemPropertyIds,
      callback
    );
  }, []);

  const selectComponent = (id: string) => {
    history.push(`/components/${id}`);
  };

  const saveValues = (values: [SystemProperty, string | null][]) => {
    editTestSystemUseCase.edit(testSystemId,
      new Map<string, string>(
        values.filter(([_, value]) => value !== null)
          .map(
            ([systemProperty, value]: [SystemProperty, string | null]) =>
              [systemProperty.id, value] as [string, string])),
      {
        onSuccess: () => console.log("saved successfully"),
        //onComponentAdded: () => console.log("TestSystem added")
      });
  }


  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={testSystem?.owningManufacturingUnit}
                testSystem={testSystem}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {testSystem && (
            <SystemPropertyOverview
              systemPropertyValues={testSystem?.getRelevantSystemProperties()}
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
                    shownSystemProperties={shownSystemProperties}
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
