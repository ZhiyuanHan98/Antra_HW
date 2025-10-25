//import { useState } from 'react'
import "./components/ToolBar"
import ToolBar from "./components/ToolBar"
import { PendingList, CompletedList } from "./components/ToDoList"
import API from "./utils/api";
import { useState } from "react";

interface IProp {
    data: Array<ToDoData>
}

function App({ data }: IProp) {
    const [todos, setTodo] = useState(data);
    const submitHandler: SubmitHandler = inputValue => {
        const newTodo = {
            id: crypto.randomUUID(),
            title: inputValue,
            completed: false
        };
        setTodo([...todos, newTodo]);
        API.createTodo(newTodo);
    }
    const itemEventHandlers: ItemEventHandlers = {
        onToggle(id: string) {
            const newTodos = [...todos];
            const target = newTodos.find(todo => todo.id === id);
            if (!target) throw new Error("Todo Item not found");
            target.completed = !target.completed;
            setTodo(newTodos);
            API.updateTodo(id, target);
        },
        onEdit(id: string, newTitle: string) {
            const newTodos = [...todos];
            const target = newTodos.find(todo => todo.id === id);
            if (!target) throw new Error("Todo Item not found");
            target.title = newTitle;
            setTodo(newTodos);
            API.updateTodo(id, target);
        },
        onDelete(id: string) {
            setTodo(todos.filter(todo => todo.id !== id));
            API.deleteTodo(id);
        },
    }
    return (
        <div className="app">
            <ToolBar onSubmit={submitHandler}/>
            <main className="columns">
                <PendingList items={todos} handlers={itemEventHandlers}/>
                <CompletedList items={todos} handlers={itemEventHandlers}/>
            </main>
        </div>
    )
}

export default App
