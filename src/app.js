import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { useBasename, createHistory } from 'history';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import IndexTopic from './views/index-topic';
import LandingPage from './views/landing';
import NoMatch from './views/nomatch';
import Header from './views/header';
import Footer from './views/footer';
import Delayed from './views/delayed';

import reducer from './reducers';

import './assets/css/bootstrap.css'
// import 'bootstrap-rtl/dist/css/bootstrap-rtl.css'
import './assets/css/oecd-headers-footers.css'
import './assets/css/main.css'
import './assets/css/custom.oecd.css'
import './assets/css/style.css'

const App = ({ children }) => (
  <div>
    <Header/>
    <div className="row">
      <div className="col-md-2">
        <Delayed wait={1000}/>
      </div>
      <div className="col-md-2">
        <Delayed wait={3000}/>
      </div>
      <div className="col-md-2">
        <Delayed wait={5000}/>
      </div>
      <div className="col-md-3">
        <Delayed wait={7000}/>
      </div>
      <div className="col-md-3">
        <Delayed wait={10000}/>
      </div>
    </div>
    {children}
    <Footer/>
  </div>
);

const browserHistory = useRouterHistory(createHistory)({
  basename: '/data-explorer-test/dist/'
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path="topic" component={IndexTopic}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
