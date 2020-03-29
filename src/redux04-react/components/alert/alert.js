import React from 'react';

export default class AlertComponent extends React.Component {
    render() {
        const {
            showAlert,
            handleClickAlert,
        } = this.props;

        return (
            <div>
                <button onClick={handleClickAlert}>showAlert</button>
                {showAlert && <div>this is alert</div>}
            </div>
        )
    }
}
