import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import ComponentDetail from './detail/ComponentDetail';
import ManufacturingUnitDetail from './detail/ManufacturingUnitDetail';
import TestSystemDetail from './detail/TestSystemDetail';
import ComponentsOverview from './overview/ComponentsOverview';
import ManufacturingsUnitsOverview from './overview/ManufacturingUnitsOverview';
import TestSystemsOverview from './overview/TestSystemsOverview';

function NavigationComponent() {
    return (
        <Switch>
            <Route path="/components/:componentId">
                <ComponentDetail />
            </Route>

            <Route path="/testSystems/:testSystemId">
                <TestSystemDetail />
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
