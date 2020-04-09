import {createStore, combineReducers} from 'redux'
import {Products} from "./products";
import {BasketIsOpen} from "./basket";
import {AccountLoginIsOpen} from "./accountLogin";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            basketIsOpen: BasketIsOpen,
            accountLoginIsOpen: AccountLoginIsOpen,
        })
    );
    return store;
};