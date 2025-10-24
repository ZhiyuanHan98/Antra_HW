export default function ToolBar() {
    return (
        <header className="toolbar">
            <input id="todoInput" className="todo-input" type="text" placeholder="Enter new todo..." />
            <button id="addBtn" className="btn btn-primary">submit</button>
        </header>
    )
}