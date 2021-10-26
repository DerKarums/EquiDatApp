import { Box, Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import ManufacturingUnitDetail from './DetailFertigungssystem';
import DetailKomponente from './DetailKomponente';
import DetailTestsystem from './DetailTestsystem';
import ComponentsOverview from './overview/ComponentsOverview';
import ManufacturingsUnitsOverview from './overview/ManufacturingUnitsOverview';
import TestSystemsOverview from './overview/TestSystemsOverview';
import HeaderBar from './shared/frame/HeaderBar';
import NavigationTabs from './shared/frame/NavigationTabs';

function NavigationComponent() {
    return (
        <Switch>
            <Route path="/components/:componentId">
                <DetailKomponente />
            </Route>

            <Route path="/testSystems/:testSystemId">
                <DetailTestsystem />
            </Route>

            <Route path="/manufacturingUnits/:manufacturingUnitId">
                <ManufacturingUnitDetail />
            </Route>

            <Route path="/manufacturingUnits">
                <ManufacturingsUnitsOverview />
            </Route>
            <Route path="/testSystems">
                <TestSystemsOverview />
            </Route>
            <Route path="/components">
                <ComponentsOverview />
            </Route>
            <Redirect from="" to="/manufacturingUnits" />
        </Switch>
    );
};
 export default NavigationComponent;
