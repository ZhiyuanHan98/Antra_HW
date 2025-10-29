const baseURL = "https://dummyjson.com/todos/";

async function fetchToDo<T>(path: string = "", init?: RequestInit): Promise<T> {
    const res = await fetch(`${baseURL}${path}`, {
        headers: { "Content-Type": "application/json" }, ...init
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json() as Promise<T>;
}

export default {
    getTodos: async () => {
        return (await fetchToDo<ToDoResponse>()).todos;
    },

    createTodo: (newTodo: Partial<ToDoData>) => {
        return fetchToDo<ToDoData>("add", {
            method: "POST",
            body: JSON.stringify(newTodo)
        })
    },

    deleteTodo: (id: string) => {
        return fetchToDo<ToDoData>(id, { method: "DELETE" });
    },
    
    updateTodo: (id: string, updatedTodo: Partial<ToDoData>) => {
        return fetchToDo<ToDoData>(id, {
            method: "PATCH",
            body: JSON.stringify(updatedTodo)
        });
    }
}