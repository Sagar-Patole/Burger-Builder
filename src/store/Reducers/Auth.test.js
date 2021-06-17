import reducer from './Auth';
import * as actionTypes from '../Actions/ActionTypes';

describe('auth reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null
        })
    });

    it('Should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            loading: false,
            error: null
        }, {
            type: actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            loading: false,
            error: null
        })
    })
});