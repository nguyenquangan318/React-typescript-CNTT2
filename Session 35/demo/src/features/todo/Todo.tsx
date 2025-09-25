import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store/store"
import { useEffect, useState } from "react"
import { addTodo, deleteTodo, fetchData } from "./todoSlice"


//B1: Quan ly gia tri trong o input thong qua state
//B2: Tao thunk de xu ly tac vu them moi
//B3: Gan thunk vao extra reducer
//B4: Gan su kien cho nut them moi

function Todo() {
    const [inputTodo, setInputTodo] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const { todos, status } = useSelector((state: RootState) => state.todo)
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    function handleAdd() {
        dispatch(addTodo({
            id: String(Date.now()),
            content: inputTodo,
            isDone: false
        }))
    }

    function handleDelete(id: string) {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => {
                setInputTodo(e.target.value)
            }} />
            <button onClick={() => {
                handleAdd()
            }}>Thêm</button>
            {status === "pending" && <p>Đang tải dữ liệu</p>}
            <ul>
                {todos.map((todo) => <li key={todo.id}>{todo.content}<button onClick={() => {
                    handleDelete(todo.id)
                }}>Xóa</button></li>)}
            </ul>
        </div>
    )
}

export default Todo