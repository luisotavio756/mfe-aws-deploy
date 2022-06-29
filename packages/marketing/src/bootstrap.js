import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(
    <App history={history} />,
    el
  )
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  devRoot && mount(devRoot);
}

export { mount };
