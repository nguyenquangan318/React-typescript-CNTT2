import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../store/store';
import { decrement, increment, incrementByValue } from './counterSlice';

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            <div style={{ paddingLeft: "16px" }}>{count}</div>
            <button onClick={() => {
                dispatch(decrement())
            }}>-</button>
            <button onClick={() => {
                dispatch(increment())
            }}>+</button>
            <br />
            <button onClick={() => {
                dispatch(incrementByValue("123"))
            }}>Increase by value</button>
        </div>
    )
}

export default Counter