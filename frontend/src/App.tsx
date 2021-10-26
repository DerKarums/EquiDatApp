import React from 'react';
import Frame from './components/Frame';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManufacturingUnitsComponent from './components/Unit-App';
import DetailKomponente from './components/DetailKomponente';
import ManufacturingUnitDetail from './components/DetailFertigungssystem';
import DetailTestsystem from './components/DetailTestsystem';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manufacturingUnits">
          <ManufacturingUnitsComponent />
        </Route>
        <Route path="/testSystems">
          <ManufacturingUnitsComponent />  {/* TODO */ }
        </Route>
        <Route path="/components">
          <ManufacturingUnitsComponent /> {/* TODO */ }
        </Route>

        <Route path="/component/:componentId">
          <DetailKomponente /> {/* TODO */ }
        </Route>

        <Route path="/testSystem/:testSystemId">
          <DetailTestsystem /> {/* TODO */ }
        </Route>

        <Route path="/manufacturingUnit/:manufacturingUnitId">
          <ManufacturingUnitDetail /> {/* TODO */ }
        </Route>
      </Switch>
    </BrowserRouter>
  );
} export default App;
