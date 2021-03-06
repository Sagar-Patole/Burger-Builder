import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../../Shared/Utility';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null
};

const authStart = (state, action) => {
    return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
    return updateObject(state, { token: action.token, userId: action.userId, loading: false, error: null });
};

const authFail = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
};

export default reducer;
