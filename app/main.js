

import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import 'whatwg-fetch';
import './scss/ionic_tab.scss';
import './scss/app.scss';
import './scss/workerCommon.scss';
import './scss/bottom.scss';
import Index from './views/index/index.jsx';
import WantOffer from './views/wantOffer/wantOffer.jsx';
document.documentElement.style.fontSize = (document.documentElement.offsetWidth / 10) + 'px';

ReactDOM.render((
    <div>
        <Router history={hashHistory}>
            <Route path="/" component={Index}/>
            <Route path="/WantOffer" role="worker" component={WantOffer}/>
        </Router>
        <div className="tabs tabs-icon-top worker_bottom hide_Tab show_Tab">
              <a className="tab-item active_worker" href="#/wantOffer" >
                <i className="icon ion-offer">
                    <span className="imgCon">
                        <img src="./app/images/normal/offer22.png" />
                    </span>
                </i>
                求职
              </a>
              <a className="tab-item active_worker" href="#/managePro"  >
                <i className="icon ion-porject">
                    <span className="imgCon">
                        <img src="./app/images/normal/project2.png" />
                    </span>
                </i>
                项目管理
              </a>
              <a className="tab-item active_worker" href="#/user" >
                <i className="icon ion-user">
                    <span className="imgCon">
                        <img src="./app/images/normal/user2.png" />
                    </span>
                </i>
                我
              </a>
            </div>
        </div>
), document.getElementById('container'));
