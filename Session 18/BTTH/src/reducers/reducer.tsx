interface Todo {
    id: number;
    content: string;
    isDone: boolean
}

interface State {
    todos: Todo[]
}

type Action = { type: "ADD", payload: string }
    | { type: "TOGGLE", payload: number }
    | { type: "UPDATE", payload: number }

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case "ADD":
            const newTodo = {
                id: Date.now(),
                content: action.payload,
                isDone: false
            }
            return { ...state, todos: [...state.todos, newTodo] }
        default:
            return state
    }
}