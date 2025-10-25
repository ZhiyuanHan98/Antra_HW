const baseURL = "http://localhost:3000/todos/";

async function fetchToDo<T>(path: string = "", init?: RequestInit): Promise<T> {
    const res = await fetch(`${baseURL}${path}`, {
        headers: { "Content-Type": "application/json" }, ...init
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json() as Promise<T>;
}

export default {
    getTodos: () => {
        return fetchToDo<ToDoData[]>();
    },

    createTodo: (newTodo: ToDoData) => {
        return fetchToDo<ToDoData>("", {
            method: "POST",
            body: JSON.stringify(newTodo)
        })
    },

    deleteTodo: (id: string) => {
        return fetchToDo<ToDoData>(id, { method: "DELETE" });
    },
    
    updateTodo: (id: string, updatedTodo: ToDoData) => {
        return fetchToDo<ToDoData>(id, {
            method: "PATCH",
            body: JSON.stringify(updatedTodo)
        });
    }
}