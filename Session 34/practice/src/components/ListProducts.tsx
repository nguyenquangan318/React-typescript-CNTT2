import { useSelector } from 'react-redux'
import Product from './Product'
import type { StateType } from '../store/reducer';

function ListProducts() {
    const products = useSelector((state: StateType) => state.products)
    return (
        <div className='w-[55%] border border-[#337ab7] rounded m-5'>
            <div className='bg-[#337ab7] text-white p-2'>
                <h3>List products</h3>
            </div>
            <div>
                {products.map((product) => <Product product={product} key={product.id}></Product>)}
            </div>
        </div>

    )
}

export default ListProducts