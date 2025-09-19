const initState = ""

type Action = {
    type: string,
    payload: string
}

function userReducer(state = initState, action: Action) {
    switch (action.type) {
        case "LOGIN":
            return action.payload
        default:
            return state
    }
}

export default userReducer