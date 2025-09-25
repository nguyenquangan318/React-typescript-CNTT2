//B2.1: Xay dung state(Kieu du lieu + gia tri khoi tao)
//B2.2: Xay dung slice ( state, action, reducer) (createSlice)
//B2.3: Xay dung store

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface Todo {
    id: string,
    content: string,
    isDone: boolean
}

interface TodoState {
    status: "idle" | "pending" | "fullfiled" | "rejected",
    todos: Todo[],
    error: any
}
const initialState: TodoState = {
    status: "idle",
    todos: [],
    error: null
}

export const fetchData = createAsyncThunk(
    "todo/fetchTodo",
    async () => {
        try {
            const res = await axios.get("http://localhost:3000/todos")
            return res.data
        } catch (err) {
            return err
        }
    }
)

export const addTodo = createAsyncThunk(
    "todo/addTodo",
    async (data: Todo) => {
        try {
            const res = await axios.post("http://localhost:3000/todos", data)
            return res.data
        } catch (err) {
            return err
        }
    }
)

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async (id: string) => {
        try {
            const res = await axios.delete(`http://localhost:3000/todos/${id}`)
            return res.data
        } catch (err) {
            return err
        }
    }
)

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => { state.status = "pending" })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "fullfiled"
                state.todos = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            .addCase(addTodo.pending, (state) => { state.status = "pending" })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.status = "fullfiled"
                state.todos.push(action.payload)
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.payload
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.status = "fullfiled"
                state.todos = state.todos.filter((todo) => todo.id != action.payload.id)
            })
    }
})

export default todoSlice.reducer