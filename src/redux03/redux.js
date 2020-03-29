import { createStore } from 'redux';
// import { createStore } from './lib/common';
import React from 'react';
import index from './reducers/index';
import { incrementNum, decrementNum, clearNum } from './actions/numbers';
import { toggleAlert } from "./actions/alerts";

// 步骤2: 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(index);

// 步骤3: 手动订阅更新，也可以事件绑定到视图层。
const update = () => {
    const valueEle = document.getElementsByClassName('numValue3');
    valueEle[0].innerHTML = store.getState().changeNumber.number.toString();
}

store.subscribe(update);
store.subscribe(() => {
    const valueEle = document.getElementsByClassName('alterContent');
    valueEle[0].hidden = ! store.getState().toggleAlert.showAlert;
});

// 步骤4: 在View中使用
export default class NumberAndAlert extends React.Component {
    addNumber = () => {
        // 改变内部 state 惟一方法是 dispatch 一个 action。
        // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
        store.dispatch(incrementNum());
    }
    minusNumber = () => {
        store.dispatch(decrementNum());
    }
    clearNumber = () => {
        store.dispatch(clearNum());
    }

    toggleAlert = () => {
        store.dispatch(toggleAlert());
    }

    render() {
        return (
            <div className="wrapper">
                <h3>Redux 03: Reducer 组合</h3>
                Current Number: <span className="numValue3">0</span>
                <div>
                    <button onClick={this.minusNumber}>-</button>
                    <button onClick={this.clearNumber}>clear</button>
                    <button onClick={this.addNumber}>+</button>
                </div>
                <button onClick={this.toggleAlert}>toggleAlert</button>
                <div className="alterContent">this is alert</div>
            </div>
        )
    }
}
