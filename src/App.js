import React from 'react';
import { AppProvider } from "./context"
import { BrowserRouter } from 'react-router-dom';
import UI from './UI';

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <UI/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
