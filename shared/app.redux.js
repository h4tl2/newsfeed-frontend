import { createStore, combineReducers } from 'redux';

const initialUser = {
    token: ""
}

const userReducer = (state=initialUser, action) => {
    switch(action.type) {
        case'setToken':
            state = {
                ...state,
                token: action.payload
            }
            break;
        default:
    }
    return state;
}

const saveReducer = (state, action) => {
    return state;
}

const store = createStore(combineReducers({ user: userReducer }));

export default store;