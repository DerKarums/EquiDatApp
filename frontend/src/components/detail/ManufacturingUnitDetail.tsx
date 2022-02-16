import { Edit } from "@mui/icons-material";
import { Breadcrumbs, Grid, IconButton, Link, Stack } from "@mui/material";
import {
  AllComponentsCallbacks,
  AllTestSystemsCallbacks,
  Component,
  ManufacturingUnit,
  SystemProperty,
  TestSystem,
} from "core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  allComponentsUseCase,
  allTestSystemsUseCase,
  editManufacturingUnitUseCase,
  showManufacturingUnitsUseCase,
} from "../../providers/UseCaseProvider";
import SubSystemBreadCrumbs from "../shared/breadcrumbs/SubSystemBreadCrumbs";
import TableToolbar from "../shared/TableToolbar";
import InnerSubSystemTable from "./InnerSubsystemTable";
import SystemPropertyOverview from "./SystemPropertyOverview";
import { useTranslation } from "react-i18next";

function ManufacturingUnitDetail() {
  const { t } = useTranslation();
  const history = useHistory();
  const { manufacturingUnitId } = useParams() as {
    manufacturingUnitId: string;
  };
  const [manufacturingUnit, setManufacturingUnit] =
    useState<ManufacturingUnit | null>(null);

  useEffect(() => {
    showManufacturingUnitsUseCase.getManufacturingUnit(manufacturingUnitId, {
      setManufacturingUnit: (manufacturingUnit: ManufacturingUnit) => {
        console.log(manufacturingUnit);
        setManufacturingUnit(manufacturingUnit);
      },
    });
  }, []);

  const shownTestSystemSystemPropertyIds = [
    "name",
    "test_type",
    "installation_date",
    "decommissioning_date",
  ];
  const [shownTestSystemSystemProperties, setShownTestSystemSystemProperties] =
    useState<SystemProperty[]>([]);
  const testSystemCallback: AllTestSystemsCallbacks = {
    setTestSystems: (_: TestSystem[]) => { },
    setRequestedSystemProperties: (
      systemPropertiesByIds: {
        systemProperty: SystemProperty | null;
        id: string;
      }[]
    ) => {
      setShownTestSystemSystemProperties(
        systemPropertiesByIds
          .map((systemPropertiesByIds) => systemPropertiesByIds.systemProperty)
          .filter(
            (systemProperty) => systemProperty !== null
          ) as SystemProperty[]
      );
    },
  };
  useEffect(() => {
    allTestSystemsUseCase.getSystemPropertiesByIds(
      shownTestSystemSystemPropertyIds,
      testSystemCallback
    );
  }, []);

  const selectTestSystem = (id: string) => {
    history.push(`/testSystems/${id}`);
  };

  const shownComponentSystemPropertyIds = [
    "name",
    "manufacturer",
    "type_name_manufacturer",
  ];
  const [shownComponentSystemProperties, setShownComponentSystemProperties] =
    useState<SystemProperty[]>([]);
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
    allComponentsUseCase.getSystemPropertiesByIds(
      shownComponentSystemPropertyIds,
      componentsCallback
    );
  }, []);

  const selectComponent = (id: string) => {
    history.push(`/components/${id}`);
  };

  const saveValues = (values: [SystemProperty, string | null][]) => {
    editManufacturingUnitUseCase.edit(manufacturingUnitId,
      new Map<string, string>(
        values.filter(([_, value]) => value !== null)
          .map(
            ([systemProperty, value]: [SystemProperty, string | null]) =>
              [systemProperty.id, value] as [string, string])),
      {
        onSuccess: () => console.log("saved successfully"),
       // onComponentAdded: () => console.log("Component added"),
        //onTestSystemAdded: () => console.log("TestSystem added"),
      });
  }

  return (
    <div className="Detail">
      <header className="Detail-header">
        <Stack spacing={2}>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <SubSystemBreadCrumbs
                manufacturingUnit={manufacturingUnit}
              />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {manufacturingUnit && (
            <SystemPropertyOverview
              systemPropertyValues={manufacturingUnit.getRelevantSystemProperties()}
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
