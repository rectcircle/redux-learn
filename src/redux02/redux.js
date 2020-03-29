import { createStore } from 'redux';
import React from 'react';
import number from './reducers/number';
import { incrementNum, decrementNum, clearNum } from './actions/numbers';

// 步骤2: 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(number);

// 步骤3: 手动订阅更新，也可以事件绑定到视图层。
const update = () => {
    const valueEle = document.getElementsByClassName('numValue2');
    valueEle[0].innerHTML = store.getState().number.toString();
}
store.subscribe(update);

// 步骤4: 在View中使用
export default class Number2 extends React.Component {
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

    render() {
        return (
            <div className="wrapper">
                <h3>Redux 02: 重构</h3>
                Current Number: <span className="numValue2">0</span>
                <div>
                    <button onClick={this.minusNumber}>-</button>
                    <button onClick={this.clearNumber}>clear</button>
                    <button onClick={this.addNumber}>+</button>
                </div>
            </div>
        )
    }
}
