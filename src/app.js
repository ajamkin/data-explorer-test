import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory  } from 'react-router';
import { useBasename, createHistory } from 'history';

import IndexTopic from './views/index-topic';
import LandingPage from './views/landing';
import NoMatch from './views/nomatch';
import Header from './views/header';
import Footer from './views/footer';

import './assets/css/bootstrap.css'
// import 'bootstrap-rtl/dist/css/bootstrap-rtl.css'
import './assets/css/oecd-headers-footers.css'
import './assets/css/main.css'
import './assets/css/custom.oecd.css'
import './assets/css/style.css'

const App = ({ children }) => (
  <div>
    <Header/>
    {children}
    <Footer/>
  </div>
);

const browserHistory = useRouterHistory(useBasename(createHistory))({
  basename: '/data-explorer-test/dist'
});


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path="topic" component={IndexTopic}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
