interface ToDoData {
    id: string,
    title: string,
    completed: boolean
}

interface ItemEventHandlers {
    onToggle: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
    onDelete: (id: string) => void;
}

type SubmitHandler = (title: string) => void;