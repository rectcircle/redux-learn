import { createStore } from 'redux';
import React from 'react';

/**
 * 步骤1: 创建一个 Reducer
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 */
function reducer(state, action) {
    // 初始化
    if (state === undefined) {
        return 0;
    }
// function reducer(state = 0, action) {
    // 业务逻辑
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CLEAR_NUM':
            return 0;
        default:
            return state;
    }
}

// 步骤2: 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(reducer);

// 步骤3: 手动订阅更新，也可以事件绑定到视图层。
const update = () => {
    const valueEle = document.getElementsByClassName('numValue');
    valueEle[0].innerHTML = store.getState().toString();
}
store.subscribe(update);

// 步骤4: 在View中使用
export default class Number1 extends React.Component {
    addNumber = () => {
        // 改变内部 state 惟一方法是 dispatch 一个 action。
        // action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
        store.dispatch({ type: 'INCREMENT' });
    }
    minusNumber = () => {
        store.dispatch({ type: 'DECREMENT' });
    }
    clearNumber = () => {
        store.dispatch({ type: 'CLEAR_NUM' });
    }

    render() {
        return (
            <div className="wrapper">
                <h3>Redux 01: Hello World</h3>
                Current Number: <span className="numValue">0</span>
                <div>
                    <button onClick={this.minusNumber}>-</button>
                    <button onClick={this.clearNumber}>clear</button>
                    <button onClick={this.addNumber}>+</button>
                </div>
            </div>
        )
    }
}
