import { useState } from "react";

interface IProp {
    onSubmit: SubmitHandler
}

export default function ToolBar({ onSubmit }: IProp ) {
    const [inputValue, setValue] = useState("");
    return (
        <header className="toolbar">
            <input id="todoInput" className="todo-input" type="text" 
                placeholder="Enter new todo..." 
                onChange={e => setValue(e.target.value)}/>
            <button id="addBtn" className="submit submit-primary" onClick={() => onSubmit(inputValue)}>
                Submit
            </button>
        </header>
    )
}