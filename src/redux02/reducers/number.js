import * as constant from '../configs/actions'

const initialState = {
    number: 0,
};

const reducerCreator = (initialState, handlers) => {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

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