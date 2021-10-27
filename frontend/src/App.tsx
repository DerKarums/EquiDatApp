import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from './components/NavigationComponent';
import Frame from './components/shared/frame/Frame';

function App() {
  const [language, setLanguage] = React.useState('de');

  return (
    <BrowserRouter>
      <Frame language={language} setLanguage={setLanguage}>
        <NavigationComponent />
      </Frame>
    </BrowserRouter>
  );
} export default App;
