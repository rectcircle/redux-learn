import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import index from './reducers/index';
import Sample from './containers/sample/sample'

let store = createStore(index);

export default class NumberAndAlert2 extends React.Component {

    render() {
        return (
            <Provider store={store} >
                <Sample />
            </Provider>
        )
    }
}
