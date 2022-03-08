import { ManufacturingUnitOverviewModel, TestSystemOverviewModel, ComponentOverviewModel, SystemPropertyType } from 'core';

export type Mode = "display" | "edit";

export type SubSystemOverviewModel = ManufacturingUnitOverviewModel | TestSystemOverviewModel | ComponentOverviewModel;

export interface SystemPropertyRow {
    id: string;
    value: string | null;
    type: SystemPropertyType;
  }
  
