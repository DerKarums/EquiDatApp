import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SystemProperty, SystemPropertyType } from 'core';
import { ManufacturingUnitRepositoryMock } from 'dbmock';

function App() {

  const test = new SystemProperty("test", SystemPropertyType.StringType, true);
  const test2 = new ManufacturingUnitRepositoryMock();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {test.label}
        </p>
        {test2.getSchema().map((systemProperty: SystemProperty) => <p>{systemProperty.label}</p>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
