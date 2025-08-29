import { type Todo } from "../types/todoType"

interface State {
    todos: Todo[]
}

type Action = { type: "ADD", payload: string }
    | { type: "TOGGLE", payload: number }
    | { type: "DELETE", payload: number }

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case "ADD":
            const newTodo = {
                id: Date.now(),
                content: action.payload,
                isDone: false
            }
            return { ...state, todos: [...state.todos, newTodo] }
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone
                        }
                    }
                    return todo
                })
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state
    }
}