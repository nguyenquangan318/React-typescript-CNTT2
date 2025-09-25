//B2.2: Xay dung state (Kieu du lieu + gia tri khoi tao)
//B2.3: Xay dung action + ham reducer(Kieu du lieu + logic)
//B2.4: Xay dung store

export interface ProductType {
    id: number,
    img: string,
    name: string,
    description: string,
    amount: number,
    price: number
}


const initProducts: ProductType[] = [
    {
        id: 1,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Wireless Headphones",
        description: "High-quality over-ear wireless headphones with noise cancellation.",
        amount: 10,
        price: 99.99
    },
    {
        id: 2,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Smartwatch",
        description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
        amount: 15,
        price: 149.99
    },
    {
        id: 3,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with powerful bass and 12-hour battery life.",
        amount: 20,
        price: 59.99
    },
    {
        id: 4,
        img: "https://www.pizzaexpress.vn/wp-content/uploads/2018/08/a2-e1533619042175-780x435.jpg",
        name: "Laptop Stand",
        description: "Adjustable aluminum laptop stand for better ergonomics.",
        amount: 25,
        price: 39.99
    }
];

type Action = { type: "BUY", payload: ProductType }

export function productsReducer(state = initProducts, action: Action) {
    const { payload } = action


    switch (action.type) {
        case "BUY":
            if (payload.amount > 0) {
                let product = state.find((product) => product.id === payload.id)
                product!.amount -= 1
                return [...state]
            }
            return state
        default:
            return state
    }
}