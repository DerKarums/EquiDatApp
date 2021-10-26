import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from './components/NavigationComponent';

function App() {

  return (
    <BrowserRouter>
      <NavigationComponent />
    </BrowserRouter>
  );
} export default App;
