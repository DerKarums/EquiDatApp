import React from 'react';
import { Route, Switch } from "react-router-dom";
import ManufacturingUnitDetail from './DetailFertigungssystem';
import DetailKomponente from './DetailKomponente';
import DetailTestsystem from './DetailTestsystem';
import Frame from './Frame';
import HeaderBar from './shared/frame/HeaderBar';
import ManufacturingUnitsComponent from './Unit-App';

function NavigationComponent() {
    const [language, setLanguage] = React.useState('');

    return (
        <>
            <HeaderBar language={language} setLanguage={setLanguage} />
            <Switch>
                <Route path="/manufacturingUnits">
                    <ManufacturingUnitsComponent />
                </Route>
                <Route path="/testSystems">
                    <ManufacturingUnitsComponent />  {/* TODO */}
                </Route>
                <Route path="component">
                    <ManufacturingUnitsComponent /> {/* TODO */}
                </Route>

                <Route path="/component/:componentId">
                    <DetailKomponente /> {/* TODO */}
                </Route>

                <Route path="/testSystem/:testSystemId">
                    <DetailTestsystem /> {/* TODO */}
                </Route>

                <Route path="/manufacturingUnit/:manufacturingUnitId">
                    <ManufacturingUnitDetail /> {/* TODO */}
                </Route>

                <Route path="">
                    <Frame language={language} setLanguage={setLanguage} /> { /* For testing purposes only */}
                </Route>
            </Switch>
        </>
    );
} export default NavigationComponent;
