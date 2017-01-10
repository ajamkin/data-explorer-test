import React from 'react';
import { render } from 'react-dom';
import IndexTopic from './views/index-topic';
import Header from './views/header';
import Footer from './views/footer';

import './assets/css/bootstrap.css'
import 'bootstrap-rtl/dist/css/bootstrap-rtl.css'
import './assets/css/oecd-headers-footers.css'
import './assets/css/main.css'
import './assets/css/custom.oecd.css'
import './assets/css/style.css'

const App = () => (
  <div>
    <Header/>
    <IndexTopic/>
    <Footer/>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);
