import { useState } from "react"
interface PropsType {
    handleAdd: (input: string) => void
}

function InputTodo({ handleAdd }: PropsType) {
    const [inputTodo, setInputTodo] = useState("")
    const handleInputTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTodo(event.target.value)
    }
    const submitInput = (event: React.FormEvent) => {
        event.preventDefault();
        handleAdd(inputTodo)
    }
    return (
        <form
            className="d-flex justify-content-center align-items-center mb-4"
        >
            <div className="form-outline flex-fill">
                {/* Đây là thẻ input để thêm công việc */}
                <input type="text" id="form2" className="form-control" onChange={handleInputTodo} />
                <label className="form-label" htmlFor="form2">
                    Thêm công việc
                </label>
            </div>
            <button
                type="submit"
                className="btn btn-info ms-2"
                onClick={submitInput}
            >
                Thêm
            </button>
        </form>
    )
}

export default InputTodo