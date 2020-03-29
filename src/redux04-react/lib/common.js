
export const reducerCreator = (initialState, handlers) => {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

export const combineReducers = (reducerObj) => {
    return (state = {}, action) => {
        const newState = {};
        Object.keys(reducerObj).forEach(reducerName => {
            const reducer = reducerObj[reducerName];
            newState[reducerName] = reducer(state[reducerName], action);
        });
        return {
            ...state,
            ...newState,
        }
    }
}

export const createStore = (reducer) => {
    let state = undefined;
    let listeners = [];

    return {
        dispatch: (action) => {
            state = reducer(state, action);
            for (const listener of listeners) {
                listener();
            }
        },
        getState: () => state,
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                listeners.splice(listeners.lastIndexOf(listener))
            }
        }
    }
}