
//B1: Xay dung giao dien
//B2: setup redux
//B2.1: Tao file reducer
//B2.2: Xay dung state (Kieu du lieu + gia tri khoi tao)
//B2.3: Xay dung action + ham reducer(Kieu du lieu + logic)
//B2.4: Xay dung store
//B2.5: Boc toan bo chuong trinh trong Provider
//B3: Lay state ra de su dung (useSelector)
//B4: Hien thi du lieu theo state

import Cart from "./components/Cart"
import ListProducts from "./components/ListProducts"
import "./App.css"

function App() {
  return (
    <div className="flex">
      <ListProducts></ListProducts>
      <Cart></Cart>
    </div>
  )
}

export default App