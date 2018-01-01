import React from 'react'
import { render } from 'react-dom'

import { createStore } from "redux"
import { Provider } from "react-redux";
import reducer from "./reducer.js"
import { Router, Route, hashHistory, IndexRoute } from 'react-router'



import App from './../App.js';
import Home from './Home/Home.js';
import sms from './sms/sms.js';
import Nav from './Nav/Nav.js';
import setup from './setup/setup.js';
import application from './application/application.js';
import enterprisedata from './enterprisedata/enterprisedata.js';
import invite from "./invite/invite.js";
import Importexport from "./Importexport/invite.js";
import Attendancehome from "./application/Appbtn/Attendancehome/Attendancehome.js";
import "./style.less";


//sma 下的组件

import Right from "./sms/rightpart/RightPart";
import Outer from "./sms/outerSms/Outer";

const store = createStore(reducer);
render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route exact path="/sms" component={sms}>
          <IndexRoute component={Right} />
          <Route exact path="/sms/outer" component={Outer} />
          <Route exact path="/sms/Importexport" component={Importexport}/>
          <Route exact path="/sms/invite" component={invite} />
        </Route>
        <Route path="/setup" component={setup} />
        <Route path="/application" component={application} />
        <Route path="/enterprisedata" component={enterprisedata} />
        <Route path="/Attendancehome" component={Attendancehome} />
      </Route>
      <Route path="/nav" component={Nav} />
    </Router>
  </Provider>
), document.getElementById('app'));
