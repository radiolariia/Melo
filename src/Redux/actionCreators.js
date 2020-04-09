import * as ActionTypes from './ActionTypes'

export const toggleBasket = (basketIsOpen) => ({
    type: ActionTypes.TOGGLE_BASKET,
    payload: basketIsOpen,
});
export const toggleAccountLogin = (accountLoginIsOpen) => ({
    type: ActionTypes.TOGGLE_ACCOUNT_LOGIN,
    payload: accountLoginIsOpen,
});