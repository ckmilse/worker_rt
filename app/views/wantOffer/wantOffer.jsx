import React from 'react';
import './wantOffer.scss';
import './../../scss/refresh.scss';
import ReactPullToRefresh from 'react-pull-to-refresh';
console.log(234);
class wantOffer extends React.Component {
    constructor() {
        super();
        // 定义 state
        this.state = {
            content: ''
        }
    }

    /**
    * 输入框内容发生变化
    **/
    handleChange(e) {
        // 改变状态值
        this.setState({content: e.target.value});
    }
    handleRefresh(resolve, reject) {
        console.log('refresh');
        let success = true;
        if (success) {
            resolve();
        } else {
            reject();
        }
    }

    render() {
        return (
            <div className="wantOffer">
                <ReactPullToRefresh onRefresh={this.handleRefresh} className="genericon genericon-nex" >
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
                            <select >
                                <option >ooo</option>

                            </select>

                        </div>
                    </div>
                    <div className="worker_list">
                        <h3>
                            求职信息
                        </h3>
                        <ul>
                            <li >

                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        砌砖工

                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>2342</i>
                                    </p>
                                </div>
                                <button>
                                    邀请
                                </button>
                            </li>

                        </ul>
                        <p className="tipNo">
                            暂时更多求职人员
                        </p>
                        <ion-infinite-scroll className="active" distance="1%"></ion-infinite-scroll>
                    </div>
                    <div className="worker_list project_list">
                        <h3>
                            招工信息
                        </h3>
                        <ul>
                            <li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li>
                            <li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li><li >
                                <div className="info">
                                    <p className="name">
                                        sdfsdfsdf
                                    </p>
                                    <p className="workeType">
                                        sdfsdfsdf
                                    </p>
                                    <p className="evaluation">
                                        综合评价：<i>3453</i>
                                    </p>
                                </div>
                                <button >
                                    申请
                                </button>
                            </li>

                        </ul>
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
                </ReactPullToRefresh>
            </div>
        );
    }
}
export default wantOffer;
