import { Box, Grid, Tab, Tabs } from '@mui/material';
import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import ManufacturingUnitDetail from './DetailFertigungssystem';
import DetailKomponente from './DetailKomponente';
import DetailTestsystem from './DetailTestsystem';
import HeaderBar from './shared/frame/HeaderBar';
import NavigationTabs from './shared/frame/NavigationTabs';
import { default as App, default as ManufacturingUnitsComponent } from './Unit-App';

function NavigationComponent() {
    return (
        <Switch>
            <Route path="/components/:componentId">
                <DetailKomponente /> {/* TODO */}
            </Route>

            <Route path="/testSystems/:testSystemId">
                <DetailTestsystem /> {/* TODO */}
            </Route>

            <Route path="/manufacturingUnits/:manufacturingUnitId">
                <ManufacturingUnitDetail /> {/* TODO */}
            </Route>

            <Route path="/manufacturingUnits">
                <ManufacturingUnitsComponent />
            </Route>
            <Route path="/testSystems">
                <ManufacturingUnitsComponent />  {/* TODO */}
            </Route>
            <Route path="/components">
                <ManufacturingUnitsComponent /> {/* TODO */}
            </Route>
            <Redirect from="" to="/manufacturingUnits" />
        </Switch>
    );
} export default NavigationComponent;
