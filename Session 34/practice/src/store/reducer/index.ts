import { combineReducers } from "redux";
import { productsReducer, type ProductType } from "./productsReducer";
import { cartReducer, type CartItemType } from "./cartReducer";

export interface StateType {
    products: ProductType[],
    cart: CartItemType[]
}

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})