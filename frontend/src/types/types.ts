import { ManufacturingUnitOverviewModel, TestSystemOverviewModel, ComponentOverviewModel } from 'core';

export type Mode = "display" | "edit";

export type SubSystemOverviewModel = ManufacturingUnitOverviewModel | TestSystemOverviewModel | ComponentOverviewModel;
