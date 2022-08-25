import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Pricing from '../components/Pricing';
import Landing from '../components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing',
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <HashRouter>
        <Switch>
          <Route exact path="/Test/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </HashRouter>
    </StylesProvider>
  );
}

export default App;
