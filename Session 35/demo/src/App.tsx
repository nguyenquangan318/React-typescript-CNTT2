
//B1: Xay dung giao dien
//B2: Xay dung store
//B2.1: Xay dung state(Kieu du lieu + gia tri khoi tao)
//B2.2: Xay dung slice ( state, action, reducer) (createSlice)
//B2.3: Xay dung store
//B3: Lay du lieu tu trong store (useSelector)

import Counter from "./features/counter/Counter"
import Todo from "./features/todo/Todo"

function App() {
  return (
    <div>
      {/* <Counter></Counter> */}
      <Todo></Todo>
    </div>
  )
}

export default App