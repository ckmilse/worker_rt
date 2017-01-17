import React from 'react';
import './index.scss';
import workerApi from './../../lib/common/workerFetch.js'
/*image */

// var imgTemp = require('./../../images/index_choose/arrow_index.png');
var imgTemp = '';
console.log(imgTemp);
console.log(234);
class index_choose extends React.Component {
    constructor(...args) {
        super(...args);
        // 定义 state
        this.state = {
            content: ''
        }
        this.imgTemp = imgTemp;
    }

    /**
    * 获取焦点
    **/
    handleFocus() {
        // 改变边框颜色
        this.refs.textElDiv.style.borderColor = '#fa7d3c';
        // 切换右上角内容
        this.refs.hot.style.display = 'none';
        this.refs.tips.style.display = 'block';
    }

    /**
    * 失去焦点
    **/
    handleBlur() {
        // 改变边框颜色
        this.refs.textElDiv.style.borderColor = '#cccccc';
        // 切换右上角内容
        this.refs.hot.style.display = 'block';
        this.refs.tips.style.display = 'none';
    }

    /**
    * 输入框内容发生变化
    **/
    handleChange(e) {
        // 改变状态值
        this.setState({content: e.target.value});
    }
    handleClick(e) {
        console.log(e);
        console.log(workerApi);
        console.log(e.target);
        console.log(e.target.getAttribute('roleChoose'));
        console.log(e.target.getAttribute('data-roleChoose'));
        window.roleData.role = e.target.getAttribute('data-roleChoose');
        workerApi.postFetch('{{chooseRoleApi}}')
            .then(function() {
                window.location.href = '#/WantOffer';
            });
    }
    render() {
        return (
            <div className="index_choose">
                    <div className="index_choose_con">
                        <div className="jdb_container">
                            <img src="app/images/index_choose/arrow_index.png" className="arrow_index"/>
                            <div className="fixedContainer">
                                <p>
                                    定位中......
                                </p>
                                <div>
                                    <p className="small">寻找离你最近的</p>
                                    <p className="big">
                                        请选择离你最近的职业</p>
                                    <div className="button_con">
                                        <button className="active_choose" onClick={this.handleClick} data-roleChoose="1">
                                            劳务员
                                        </button>
                                        <button onClick={this.handleClick} data-roleChoose="2">
                                            砌体工
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default index_choose;
