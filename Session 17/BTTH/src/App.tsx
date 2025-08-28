import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"
//B1: Xay dung giao dien
//B2: Xay dung kieu du lieu (Todo, State)
interface Todo {
  id: number,
  content: string,
  isDone: boolean
}
//B3: Xay dung chức năng lưu lại giá trị trong ô input
//B4: Xây dựng chức năng thêm công việc
//B5: Cập nhật giao diện theo todos
//B6: Chỉnh sửa component con để render
function App() {
  const [inputTodo, setInputTodo] = useState('')
  let [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]")
    setTodos(todos)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let newTodo: Todo = {
      id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
      content: inputTodo,
      isDone: false
    }
    todos.push(newTodo)
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const handleDelete = (id: number) => {
    todos = todos.filter((todo) => todo.id !== id)
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const toggleTodo = (id: number) => {
    todos = todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    setTodos(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div
          className="row d-flex justify-content-center align-items-center
              h-100"
        >
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  Quản lý công việc
                </h3>
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <div className="form-outline flex-fill">
                    {/* Đây là thẻ input để thêm công việc */}
                    <input type="text" id="form2" className="form-control" onChange={handleChange} />
                    <label className="form-label" htmlFor="form2">
                      Thêm công việc
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-info ms-2"
                    onClick={handleSubmit}
                  >
                    Thêm
                  </button>
                </form>
                {/* Tabs navs */}
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>
                {/* Tabs navs */}
                {/* Tabs content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {todos.map((todo) => {
                        return <TodoItem key={todo.id}
                          content={todo.content}
                          isDone={todo.isDone}
                          id={todo.id}
                          handleDelete={handleDelete}
                          handleToggleTodo={toggleTodo}></TodoItem>
                      })}
                    </ul>
                  </div>
                </div>
                {/* Tabs content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App