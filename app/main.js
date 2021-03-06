import React from 'react';
import Router from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createBrowserHistory'
import Root from "root"
import store from 'store'
console.log(createHistory)
const element = (
  <Provider store={store}>
    {() => <Router history={createHistory()} routes={routes} /> }
  </Provider>
);
React.render(element, document.body);
