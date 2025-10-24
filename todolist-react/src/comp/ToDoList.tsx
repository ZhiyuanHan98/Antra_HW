import TodoItem from "./ToDoItem";

interface ListProps {
    title: string,
    items?: Array<ToDoData>
}

interface ItemArrayProps {
    items?: Array<ToDoData>
}

export function PendingList({ items }: ItemArrayProps) {
    return (
        <ToDoList 
            title="Pending Tasks" 
            items={items && items.filter(data => !data.completed)}>
        </ToDoList>
    )
}

export function CompletedList({ items }: ItemArrayProps) {
    return (
        <ToDoList 
            title="Completed Tasks" 
            items={items && items.filter(data => data.completed)}>
        </ToDoList>
    )
}

export function ToDoList({ title, items }: ListProps) {
    return (
        <section className="column">
            <h2 className="column-title">{title}</h2>
            <ul className="todo-list">
                {   
                    items && items
                    .map(item => (
                        <TodoItem key={item.id} todo={item}/>
                    ))
                }
            </ul>
        </section>
    );
}