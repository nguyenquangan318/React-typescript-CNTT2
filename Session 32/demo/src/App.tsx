//B1: Tạo store
//B2: Bọc chương trình trong component Provider
//B3: Lấy dữ liệu thông qua hook useSelector
//Cập nhật dữ liệu thông qua dispatch

import { useDispatch, useSelector } from "react-redux"


function App() {
  let counterState = useSelector((state) => state.count)
  console.log(counterState);

  const dispatch = useDispatch()
  return (
    <div>
      <p>{counterState}</p>
      <button onClick={() => {
        dispatch({ type: "INCREASE" })
      }}>Increase</button>
    </div>
  )
}

export default App