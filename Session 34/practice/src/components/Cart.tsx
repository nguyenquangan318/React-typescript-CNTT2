import CartTable from './CartTable'
function Cart() {
    return (
        <div className='w-[45%]'>
            <div className=' border border-[#f2dede] rounded mt-5'>
                <div className='bg-[#f2dede] text-[#af5a60] p-2'>
                    <h3>Your cart</h3>
                </div>
                <div>
                    <CartTable></CartTable>
                </div>
            </div>
            <div className='bg-[#dff0d8] text-[#718372] p-3 mt-5'>
                <p>Add to cart succesfully</p>
            </div>
        </div>

    )
}

export default Cart