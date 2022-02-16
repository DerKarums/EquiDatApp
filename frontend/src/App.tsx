import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from './components/NavigationComponent';
import Frame from './components/shared/frame/Frame';

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <NavigationComponent />
      </Frame>
    </BrowserRouter>
  );
} export default App;
