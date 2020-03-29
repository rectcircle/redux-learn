import React from 'react';

export default class NumberComponent extends React.Component {
    render() {
        const {
            number,
            minusNumber,
            clearNumber,
            addNumber,
        } = this.props;

        return (
            <div>
                Current Number: {number}
                <div>
                    <button onClick={minusNumber}>-</button>
                    <button onClick={clearNumber}>clear</button>
                    <button onClick={addNumber}>+</button>
                </div>
            </div>
        )
    }
}
