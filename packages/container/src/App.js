import React from 'react';
import MarketingApp from '../component/MarketingApp';
import Header from '../component/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
}

export default App;
