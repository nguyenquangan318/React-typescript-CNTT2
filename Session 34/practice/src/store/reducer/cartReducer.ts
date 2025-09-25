//B2.2: Xay dung state (Kieu du lieu + gia tri khoi tao)
//B2.3: Xay dung action + ham reducer(Kieu du lieu + logic)
//B2.4: Xay dung store

import type { ProductType } from "./productsReducer"

export interface CartItemType {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const initCart: CartItemType[] = []

type Action = { type: "BUY", payload: ProductType }
export function cartReducer(state = initCart, action: Action) {
    let { payload } = action
    console.log(payload);
    switch (action.type) {
        case "BUY":
            if (payload.amount >= 0) {
                let item = state.find((item) => item.id === payload.id)
                if (item) {
                    item.quantity += 1
                    return [...state]
                }
                return [...state,
                {
                    id: payload.id,
                    name: payload.name,
                    price: payload.price,
                    quantity: 1
                }
                ]
            }
            return state
        default:
            return state
    }

}