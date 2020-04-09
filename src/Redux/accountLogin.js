import {AccountLogin} from '../shared/accountLogin'
import * as ActionTypes from './ActionTypes'

export const AccountLoginIsOpen  = (state = AccountLogin, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_ACCOUNT_LOGIN:
            let accountLogin = action.payload;
            return accountLogin;
        default:
            return state;
    }
};