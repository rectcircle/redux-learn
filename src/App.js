import React from 'react';
import './App.css';
import Number1 from './redux01/redux';
import Number2 from './redux02/redux';
import NumberAndAlert from './redux03/redux';
import NumberAndAlert2 from './redux04-react/redux';

function App() {
    return (
        <div className="App">
            <Number1 />
            <hr />
            <Number2 />
            <hr />
            <NumberAndAlert />
            <hr />
            <NumberAndAlert2 />
        </div>
    );
}

export default App;
