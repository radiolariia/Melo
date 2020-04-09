import {Basket} from '../shared/basket'
import * as ActionTypes from './ActionTypes'

export const BasketIsOpen  = (state = Basket, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_BASKET:
            let basket = action.payload;
            return basket;
        default:
            return state;
    }
};