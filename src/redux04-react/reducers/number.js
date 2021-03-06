import * as constant from '../configs/actions'
import { reducerCreator } from '../lib/common';

const initialState = {
    number: 0,
};

export default reducerCreator(initialState, {
    [constant.INCREMENT]: (state, action) => {
        return {
            ...state,
            number: state.number + 1
        };
    },
    [constant.DECREMENT]: (state, action) => {
        return {
            ...state,
            number: state.number - 1
        };
    },
    [constant.CLEAR_NUM]: (state, action) => {
        return {
            ...state,
            number: 0
        };
    },
})