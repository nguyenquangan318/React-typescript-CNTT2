import Header from "./components/Header"
import "./styles/app.css"

function App() {
  let color = "red"
  let numbers = [1, 2, 3, 4]
  return (
    <>
      <h1 className="blue-text"> demo react js</h1>
      <Header></Header>
      <h2 style={{ color: color }}> Đây là thẻ h2 màu {color === "red" ? "đỏ" : ""}</h2>
      
      {numbers.map((number) => {
        return <p key={number}>{number}</p>
      })}
    </>
  )
}

export default App
