//import { useState } from 'react'
import "./comp/ToolBar"
import ToolBar from "./comp/ToolBar"
import { PendingList, CompletedList } from "./comp/ToDoList"

function App() {
    //const [count, setCount] = useState(0)
    const todos = [
        {
            "id": "1",
            "title": "Buy groceries",
            "completed": false
        },
        {
            "id": "2",
            "title": "Finish JavaScript project",
            "completed": true
        },
        {
            "id": "3",
            "title": "Call the dentist",
            "completed": false
        },
        {
            "id": "4",
            "title": "Workout for 30 minutes",
            "completed": true
        },
        {
            "id": "5",
            "title": "Read a chapter",
            "completed": false
        }
    ]
    return (
        <div className="app">
            <ToolBar />
            <main className="columns">
                <PendingList items={todos}/>
                <CompletedList items={todos}/>
            </main>
        </div>
    )
}

export default App
