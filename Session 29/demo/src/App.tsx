import axios from "axios"

function App() {
  //GET
  async function fetchData() {
    //fetch
    // let res = await fetch("http://localhost:3000/todos")
    // let data = await res.json()
    // console.log(data);

    //axios
    let res = await axios.get("http://localhost:3000/todos")
    console.log(res.data);
  }
  fetchData()
  //POST
  async function postData() {
    //fetch
    // fetch("http://localhost:3000/todos", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "aplication/json"
    //   },
    //   body: JSON.stringify({
    //     content: "Cong viec moi",
    //     isDone: false,
    //   })
    // })

    //axios
    let res = await axios.post("http://localhost:3000/todos", {
      id: "2",
      content: "Cong viec 2",
      isDone: false
    })

  }
  // postData()
  //PUT
  async function updateData() {
    //fetch
    // fetch("http://localhost:3000/todos/1", {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "aplication/json"
    //   },
    //   body: JSON.stringify({
    //     content: "Cong viec duoc cap nhat",
    //     isDone: false,
    //   })
    // })

    //axios
    try {
      let res = await axios.put("http://localhost:3000/todos/1")
      console.log(res);
    } catch {
      console.log("Cap nhat that bai");
    }
  }
  updateData()
  //DELETE
  function deleteData() {
    fetch("http://localhost:3000/todos/1", {
      method: "DELETE"
    })
  }
  // deleteData()
  return (
    <div>App</div>
  )
}

export default App