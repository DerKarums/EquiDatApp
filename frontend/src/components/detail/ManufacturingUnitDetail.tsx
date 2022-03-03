import { Grid, Stack } from "@mui/material";
import {
  AllComponentsCallbacks,
  AllTestSystemsCallbacks,
  Component,
  ManufacturingUnit,
  SystemProperty,
  TestSystem,
  ManufacturingUnitDetailModel
} from "core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import axiosInstance from "../../httpclient/axiosProvider";
import {
  allComponentsUseCase,
  allTestSystemsUseCase,
  editManufacturingUnitUseCase,
  showManufacturingUnitsUseCase
} from "../../providers/UseCaseProvider";
import { SystemPropertyRow } from "../../types/types";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import TableToolbar from "../shared/TableToolbar";
import InnerSubSystemTable from "./InnerSubsystemTable";
import SystemPropertyOverview from "./SystemPropertyOverview";

function ManufacturingUnitDetail() {
  const { t } = useTranslation();
  const history = useHistory();
  const { manufacturingUnitId } = useParams() as {
    manufacturingUnitId: string;
  };
  const [manufacturingUnit, setManufacturingUnit] =
    useState<ManufacturingUnitDetailModel | null>(null);

  useEffect(() => {
    axiosInstance.get(`/manufacturingUnits/${manufacturingUnitId}`)
      .then(response => response.data)
      .then(entry => ({ ...entry, systemPropertyValues: new Map(Object.entries(entry.systemPropertyValues)) }))
      .then((manufacturingUnitModel: ManufacturingUnitDetailModel) => setManufacturingUnit(manufacturingUnitModel))
  }, [manufacturingUnitId]);

  const shownTestSystemSystemPropertyIds = [
    "name",
    "test_type",
    "installation_date",
    "decommissioning_date",
  ];
  const [shownTestSystemSystemProperties, setShownTestSystemSystemProperties] = useState<SystemProperty[]>([]);
  const testSystemCallback: AllTestSystemsCallbacks = {
    setTestSystems: (_: TestSystem[]) => { },
    setRequestedSystemProperties: (
      systemPropertiesByIds: {
        systemProperty: SystemProperty | null;
        id: string;
      }[]
    ) => {
      setShownTestSystemSystemProperties(systemPropertiesByIds
        .map((systemPropertiesByIds) => systemPropertiesByIds.systemProperty)
        .filter(
          (systemProperty) => systemProperty !== null
        ) as SystemProperty[]
      );
    },
    setFilterOptions: () => { },
    setSearchResults: () => { },
  };
  useEffect(() => {
    allTestSystemsUseCase.getSystemPropertiesByIds(shownTestSystemSystemPropertyIds, testSystemCallback);
  }, []);

  
  const shownComponentSystemPropertyIds = ["name", "manufacturer", "type_name_manufacturer"];
  const [shownComponentSystemProperties, setShownComponentSystemProperties] = useState<SystemProperty[]>([]);
  const componentsCallback: AllComponentsCallbacks = {
    setComponents: (_: Component[]) => { },
    setRequestedSystemProperties: (
      systemPropertiesByIds: {
        systemProperty: SystemProperty | null;
        id: string;
      }[]
      ) => {
        setShownComponentSystemProperties(
          systemPropertiesByIds
          .map((systemPropertiesByIds) => systemPropertiesByIds.systemProperty)
          .filter(
            (systemProperty) => systemProperty !== null
            ) as SystemProperty[]
            );
          },
        };
        useEffect(() => {
          allComponentsUseCase.getSystemPropertiesByIds(shownComponentSystemPropertyIds, componentsCallback);
        }, []);
        
  const selectTestSystem = (id: string) => history.push(`/testSystems/${id}`);
  const selectComponent = (id: string) => history.push(`/components/${id}`);

  const saveValues = (values: SystemPropertyRow[]) => {

    const nonNullRows = values.filter(({ value }) => value !== null)
    const entryArray = nonNullRows.map((systemPropertyRow: SystemPropertyRow) =>
      [systemPropertyRow.id, systemPropertyRow.value] as [string, string]);
    const editMap = new Map<string, string>(entryArray);

    editManufacturingUnitUseCase.edit(manufacturingUnitId, editMap, {
      onSuccess: () => console.log("saved successfully"),
      onComponentAdded: () => console.log("Component added"),
      onTestSystemAdded: () => console.log("TestSystem added"),
    });
  }

  const schema = manufacturingUnit?.schema;
  const systemPropertyRows: SystemPropertyRow[] = schema?.map(systemPropertyModel => ({...systemPropertyModel, value: manufacturingUnit!.systemPropertyValues.get(systemPropertyModel.id) ?? null}) ) ?? [];

  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={manufacturingUnit && { id: manufacturingUnit.id, name: manufacturingUnit.systemPropertyValues.get("name") }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {manufacturingUnit && (
            <SystemPropertyOverview
              systemPropertyValues={systemPropertyRows}
              saveValues={saveValues}
            />
          )}
          <Grid container spacing={1}>
            <Grid item xs={11}>
              {manufacturingUnit && (
                <>
                  <TableToolbar title={t("manufacturingUnitDetail.testSystems")}></TableToolbar>
                  <InnerSubSystemTable
                    subSystems={manufacturingUnit.testSystems}
                    shownSystemProperties={shownTestSystemSystemProperties}
                    selectSubSystem={selectTestSystem}
                  />
                </>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={11}>
              {manufacturingUnit && (
                <>
                  <TableToolbar title={t("manufacturingUnitDetail.components")}></TableToolbar>
                  <InnerSubSystemTable
                    subSystems={manufacturingUnit.components}
                    shownSystemProperties={shownComponentSystemProperties}
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

export default ManufacturingUnitDetail;
