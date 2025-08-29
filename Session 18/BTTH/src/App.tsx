import { useReducer } from "react"
import Header from "./components/Header"
import InputTodo from "./components/InputTodo"
import { reducer } from "./reducers/reducer"
import TodoItem from "./components/TodoItem"
function App() {
  const [state, dispatch] = useReducer(reducer, { todos: [] })
  const handleAdd = (input: string) => {
    dispatch({ type: "ADD", payload: input })
  }
  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id })
  }
  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id })
  }
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div
          className="row d-flex justify-content-center align-items-center h-100"
        >
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <Header></Header>
                <InputTodo handleAdd={handleAdd}></InputTodo>
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {state.todos.map((todo) => {
                        return <TodoItem
                          key={todo.id}
                          content={todo.content}
                          isDone={todo.isDone}
                          id={todo.id}
                          handleToggle={handleToggle}
                          handleDelete={handleDelete}></TodoItem>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App