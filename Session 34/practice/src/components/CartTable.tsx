import { useSelector } from "react-redux"
import type { StateType } from "../store/reducer"

function CartTable() {
    const cart = useSelector((state: StateType) => state.cart)
    return (
        <div>
            {cart.length === 0 ? <p>Khong co san pham nao</p> :
                <table className='w-[95%] ml-[13px]'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th className='w-[30%]'>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price} USD</td>
                                <td>{item.quantity}</td>
                                <td className='text-center'>
                                    <button className='bg-[#5cc0de] text-white m-2'>Update</button>
                                    <button className='bg-[#d9534f] text-white'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
            <div className='flex justify-between mb-5'>
                <p>
                    There are {cart.length} items in your cart
                </p>
                <div className='text-red-500 font-bold'>
                    0 USD
                </div>
            </div>
        </div>
    )
}

export default CartTable