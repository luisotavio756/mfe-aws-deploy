import React from 'react';
import { Switch, Route, BrowserRouter, useRouteMatch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Pricing from '../components/Pricing';
import Landing from '../components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing',
});

function App() {
  const routeMatch = useRouteMatch();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path={`${routeMatch.url}/pricing`} component={Pricing} />
          <Route path={`${routeMatch.url}/`} component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
