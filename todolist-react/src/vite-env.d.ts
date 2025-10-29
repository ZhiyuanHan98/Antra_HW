interface ToDoData {
    id: string,
    todo: string,
    completed: boolean
    userId: string
}

interface ToDoResponse {
    todos: Array<ToDoData>
    total: number,
    skip: number,
    limit: number
}

interface ItemEventHandlers {
    onToggle: (id: string) => void;
    onEdit: (id: string, newTodo: string) => void;
    onDelete: (id: string) => void;
}

type SubmitHandler = (todo: string) => void;