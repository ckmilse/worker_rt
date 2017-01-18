import React from 'react';
import './wantOffer.scss';
import './../../scss/refresh.scss';
import ReactPullToRefresh from 'react-pull-to-refresh';
import workerApi from './../../lib/common/workerFetch.js';

var WorkerListItem = React.createClass({
    render() {
        return (
            <li key={this.props.worker.id}>
                <img src={this.props.worker.head}/>
                <div className="info">

                    <p className="name">
                        {this.props.worker.userName || this.props.worker.nick}
                    </p>
                    <p className="workeType">
                        {this.props.worker.workTypeName || '砌砖工'}
                    </p>
                    <p className="evaluation">
                        综合评价：<i>{this.props.worker.hasQuantity || '0'} </i>
                    </p>
                </div>
                <button>
                    邀请
                </button>
            </li>
        );
    }
});

var ProjectListItem = React.createClass({
    render() {
        return (
            <li key={this.props.project.id}>
                <img src={this.props.project.pic}/>
                <div className="info">
                    <p className="name">
                        {this.props.project.projectName}
                    </p>
                    <p className="workeType">
                        {this.props.project.wokerTypeName}
                    </p>
                    <p className="evaluation">
                        综合评价：<i>2342</i>
                    </p>
                </div>
                <button>
                    邀请
                </button>
            </li>
        );
    }
});

var wantOffer = React.createClass({
    getInitialState() {
        this.data = {};
        this.data.pList = [];
        console.log(window.roleData.role);
        let url = '{{projectListApi}}';
        if(window.roleData.role * 1 == 1) {
            url = '{{workerListApi}}';
        }
        workerApi.postFetch(url, {}).then((resData) => {
            this.data.pList = resData.pList;
            this.data.userList = resData.userList;
            console.log(this.data.pList);
            //  this.state =
            this.setState({content: '123'});
            // this.componentDidUpdate();
        });
        console.log(this);
        //  workerApi.postFetch('{{projectListApi}}', {}).then(function(resData) {
        //      console.log(this);
        //      this.data.pList = resData.pList;
        //      this.state =[];
        //      this.setState({content: '123'});
        //      // this.componentDidUpdate();
        //  });
        return {value: 'Hello!'};
    },
    handleRefresh(resolve, reject) {
        console.log('refresh');
        let success = true;
        if (success) {
            resolve();
        } else {
            reject();
        }
    },
    srollHandle(e) {
        console.log(e.clientY);
        console.log(e.offsetY);
        console.log(e.target.scrollTop);
        console.log(e.target.offsetHeight);
        console.log(e.target.scrollHeight);

        // console.log(e.target.children);
    },
    componentWillMount() {
        // workerApi.postFetch('{{projectListApi}}', {}).then(function(resData) {
        //     console.log(this);
        //     this.data.pList = resData.pList;
        //     this.state =[];
        //     this.setState({content: '123'});
        //     // this.componentDidUpdate();
        // });
    },
    render() {
        return (
            <div className="wantOffer" onScroll={this.srollHandle}>
                <ReactPullToRefresh onRefresh={this.handleRefresh} className="genericon genericon-nex">
                    <div className="upMore">
                        <div className="worker_topTitle">
                            招工
                        </div>
                        <div className="worker_banner"></div>
                        <div className="regionSelect">
                            <div className="half leftBorder">
                                重庆市<i></i>
                                <select>
                                    <option value="重庆市">重庆市</option>
                                </select>
                            </div>
                            <div className="half">
                                江北<i></i>
                                <select>
                                    <option >ooo</option>
                                </select>

                            </div>
                        </div>
                        <div className="worker_list">
                            <h3>
                                求职信息
                            </h3>
                            <ul>
                                { this.data.userList && this.data.userList.length && this.data.userList.map(function(user) {
                                    return <WorkerListItem worker={user} key={user.id}/>
                                })
                            }
                            </ul>
                            {(this.data.userList && this.data.userList.length && this.data.userList.length > 0)
                                ? <p className="tipNo">暂无更多求职人员</p>
                                : ''}
                        </div>
                        <div className="worker_list project_list">
                            <h3>
                                招工信息
                            </h3>
                            <ul>
                                { this.data.pList && this.data.pList.length && this.data.pList.map(function(project) {
                                    return <ProjectListItem project={project} key={project.id}/>
                                })
                            }
                            </ul>
                            {(this.data.pList && this.data.pList.length && this.data.pList.length > 0)
                                ? <p className="tipNo">暂无更多求职人员</p>
                                : ''}
                            <p className="tipNo">
                                没有招工项目
                            </p>
                            <p className="tipNo">
                                没有更多招工项目
                            </p>
                            <ion-infinite-scroll className="active" distance="1%"></ion-infinite-scroll>
                        </div>
                        <div className="publishProBut">
                            <button>
                                我要发布
                            </button>
                        </div>
                    </div>
                </ReactPullToRefresh>
            </div>
        )
    }
});
// class wantOffer extends React.Component {
// constructor() {
//     super();
//     // 定义 state
//     const stateMap = {
//         'worker': 'worker',
//         'boss': 'boss'
//     }
//     this.state = {
//         content: ''
//     }
//     this.data = {};
//     this.data.wList = [];
//     this.data.pList = [];
//     console.log(this.props);
// }

// getInitialState() {
//     console.log(this.props);
//     return {value: 'Hello!'};
// }
/**
    * 输入框内容发生变化
    **/

// handleChange(e) {
//     // 改变状态值
//     this.setState({content: e.target.value});
// }
// componentWillMount() {
//     // this.data.pList = [];
//     console.log(this.props);
//     workerApi.postFetch('{{projectListApi}}', {}).then((resData) => {
//         console.log(resData);
//         console.log(this);
//         this.data.pList = resData.pList;
//         this.setState({content: '123'});
//         // this.componentDidUpdate();
//     });
//
// }
// shouldComponentUpdate() {
//     return false;
// }
// handleRefresh(resolve, reject) {
//     console.log('refresh');
//     let success = true;
//     if (success) {
//         resolve();
//     } else {
//         reject();
//     }
// }

//     render() {
//         return (
//
//         );
//     }
// }
export default wantOffer
