import { Component } from 'react'

interface PropsType {
    content: string;
    isDone: boolean;
    id: number;
    handleDelete: (id: number) => void
    handleToggle: (id: number) => void
}

export default class TodoItem extends Component<PropsType> {

    render() {
        let { content, isDone, id, handleDelete, handleToggle } = this.props;
        return (
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox" />
                {
                    isDone ?
                        <span className="todo-text completed" onClick={() => { handleToggle(id) }}>{content}</span>
                        : <span className="todo-text" onClick={() => { handleToggle(id) }}>{content}</span>
                }
                <div className="todo-actions">
                    <button className="delete-btn" onClick={() => { handleDelete(id) }}>🗑️ Xóa</button>
                </div>
            </div>
        )
    }
}
