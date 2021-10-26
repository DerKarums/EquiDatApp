import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Frame from './components/Frame';
import NavigationComponent from './components/NavigationComponent';
import HeaderBar from './components/shared/frame/HeaderBar';

function App() {

  return (
    <BrowserRouter>
      <NavigationComponent />
    </BrowserRouter>
  );
} export default App;
