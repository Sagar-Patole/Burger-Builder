import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import * as actionTypes from '../Actions/ActionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, checkAuthStateSaga } from './Auth';
import { initIngredientsSaga } from './BurgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './Order';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, checkAuthStateSaga)
    ])
};

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
};

export function* watchOrders() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}