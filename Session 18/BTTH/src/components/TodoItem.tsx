interface PropsType {
    content: string;
    isDone: boolean;
    id: number;
    handleToggle: (id: number) => void
    handleDelete: (id: number) => void
}

function TodoItem({ content, isDone, id, handleToggle, handleDelete }: PropsType) {
    return (
        <li
            className="list-group-item d-flex
            align-items-center border-0 mb-2 
            rounded justify-content-between"
            style={{ backgroundColor: "#f4f6f7" }}
        >
            <div>
                <input
                    className="form-check-input me-2"
                    type="checkbox"
                    onChange={() => { handleToggle(id) }}
                />
                {isDone ? <s>{content}</s> : <span>{content}</span>}
            </div>
            <div>
                <a href="#!" className="text-info" title="Sửa công việc">
                    <i
                        className="fas fa-pencil-alt me-3"
                    />
                </a>
                <a
                    href="#!"
                    className="text-danger"
                    title="Xóa công việc"
                    onClick={() => { handleDelete(id) }}
                >
                    <i
                        className="fas fa-trash-alt"
                    />
                </a>
            </div>
        </li>
    )
}

export default TodoItem