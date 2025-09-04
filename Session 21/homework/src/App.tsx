//B1: Xay dung giao dien
//B2: Xay dung kieu du lieu cho state va action
// interface State {
//   count: number
// }
// type Action = { type: "INCREASE" } | { type: "DECREASE" }

import { useReducer } from "react"

//B3: Xay dung ham reducer
function reducer(state: number, action: "INCREASE" | "DECREASE") {
  switch (action) {
    case "INCREASE":
      return state + 1
    case "DECREASE":
      return state - 1
    default:
      return state
  }
}
//B4: khoi tao state va ham dispatch su dung useReducer
//B5: Gan su kien va kiem tra ket qua
function App() {
  const [state, dispatch] = useReducer(reducer, 0)
  const handleIncrease = () => {
    dispatch("INCREASE")
  }
  return (
    <>
      <h2>So dem: {state}</h2>
      <button style={{ marginRight: "3px" }} onClick={handleIncrease}>Tang</button>
      <button onClick={() => { dispatch("DECREASE") }}>Giam</button>
    </>
  )
}

export default App