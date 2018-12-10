import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '../shared/Routes';
import { getCLientStore } from '../shared/store';

const App = () => {
  return (
    <Provider store={getCLientStore()}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
};

hydrate(<App />, document.getElementById('root'));