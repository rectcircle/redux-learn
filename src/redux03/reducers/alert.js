import * as constant from '../configs/actions'
import { reducerCreator } from '../lib/common';

const initialState = {
    showAlert: true,
};

export default reducerCreator(initialState, {
    [constant.TOGGLE_ALERT]: (state, action) => {
        return {
            ...state,
            showAlert: !state.showAlert
        };
    },
})