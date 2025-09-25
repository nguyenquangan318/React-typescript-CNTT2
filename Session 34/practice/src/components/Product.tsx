import { useDispatch } from "react-redux";
import type { ProductType } from "../store/reducer/productsReducer"


function Product({ product }: { product: ProductType }) {
    const dispatch = useDispatch()
    return (
        <div className='flex m-4'>
            <img src={product.img} alt="" className='h-[110px] w-[100px] mr-2' />
            <div>
                <h4 className='text-2xl'>{product.name}</h4>
                <p>{product.description}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <div className={`border border-black pl-4 ${product.amount <= 0 && "invisible"}`}>{product.amount}</div>
                <button
                    className={`w-[70px] ${product.amount > 0 ? 'bg-[#ff6633]' : 'bg-[#cacaca]'} text-white`}
                    onClick={() => {
                        if (product.amount > 0) {
                            dispatch({
                                type: "BUY",
                                payload: product
                            })
                        }

                    }}
                >{product.price} USD</button>
            </div>
        </div>
    )
}

export default Product