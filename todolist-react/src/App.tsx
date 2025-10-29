//import { useState } from 'react'
import "./components/ToolBar"
import ToolBar from "./components/ToolBar"
import { PendingList, CompletedList } from "./components/ToDoList"
import API from "./utils/api";
import { useState } from "react";

interface IProp {
    data: Array<ToDoData>
}

fetch('https://dummyjson.com/todos/1', {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    completed: false,
  })
})
.then(res => res.json())
.then(console.log);

function App({ data }: IProp) {
    const [todos, setTodo] = useState(data);
    const submitHandler: SubmitHandler = inputValue => {
        const request: Partial<ToDoData> = {
            todo: inputValue,
            completed: false,
            userId: todos[0].userId
        };
        API.createTodo(request).then(newTodo => {
            setTodo([...todos, newTodo]);
        })
    }
    const itemEventHandlers: ItemEventHandlers = {
        onToggle(id: string) {
            const newTodos = [...todos];
            const target = newTodos.find(todo => todo.id == id);
            if (!target) throw new Error("Todo Item not found");
            target.completed = !target.completed;
            setTodo(newTodos);
            API.updateTodo(id, { completed: target.completed })
            .then(console.log);
        },
        onEdit(id: string, newTodo: string) {
            const newTodos = [...todos];
            const target = newTodos.find(todo => todo.id == id);
            if (!target) throw new Error("Todo Item not found");
            target.todo = newTodo;
            setTodo(newTodos);
            API.updateTodo(id, { todo: newTodo })
            .then(console.log);
        },
        onDelete(id: string) {
            setTodo(todos.filter(todo => todo.id != id));
            API.deleteTodo(id).then(console.log);
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
