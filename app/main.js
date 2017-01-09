

import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import 'whatwg-fetch';
import './scss/app.scss';
import './scss/workerCommon.scss';
import Index from './views/index/index.jsx';
import WantOffer from './views/wantOffer/wantOffer.jsx';
document.documentElement.style.fontSize = (document.documentElement.offsetWidth / 10) + 'px';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}/>
        <Route path="/WantOffer" component={WantOffer}/>
    </Router>
), document.getElementById('container'));
