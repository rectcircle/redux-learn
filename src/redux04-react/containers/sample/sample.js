import React from 'react';
import NumberComponent from '../../components/number/number';
import AlertComponent from '../../components/alert/alert';
import { connect } from 'react-redux';
import { toggleAlert } from '../../../redux04-react/actions/alerts';
import { decrementNum, incrementNum, clearNum } from '../../../redux04-react/actions/numbers';


class Sample extends React.Component {

    render() {
        console.log(this.props);
        const {
            number,
            minusNumber,
            clearNumber,
            addNumber,
            showAlert,
            handleClickAlert,
        } = this.props;

        return (
            <div>
                <h3>Redux 04: Redux 组合 React</h3>
                <NumberComponent
                    number={number}
                    minusNumber={minusNumber}
                    clearNumber={clearNumber}
                    addNumber={addNumber}
                />
                <AlertComponent
                    showAlert={showAlert}
                    handleClickAlert={handleClickAlert}
                />
            </div>
        )
    }
}

// 将 redux 的 state 绑定到 props 中
const mapStateToProps = (state) => {
    return {
        number: state.changeNumber.number,
        showAlert:state.toggleAlert.showAlert,
    }
}

// 将 Dispatch 绑定到 props
// const mapDispatchToProps = {
//     minusNumber: decrementNum,
//     clearNumber: clearNum,
//     addNumber: incrementNum,
//     handleClickAlert: toggleAlert,
// };s

const mapDispatchToProps = (dispatch) =>  {
    return {
        minusNumber: () => dispatch(decrementNum()),
        clearNumber: () => dispatch(clearNum()),
        addNumber: () => dispatch(incrementNum()),
        handleClickAlert: () => dispatch(toggleAlert()),
    }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Sample);
