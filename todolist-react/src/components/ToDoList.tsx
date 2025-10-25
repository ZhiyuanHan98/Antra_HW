import { type MouseEvent } from "react";
import TodoItem from "./ToDoItem";

interface ListProps {
    title: string,
    items?: Array<ToDoData>,
    handlers?: ItemEventHandlers;
}

interface ItemArrayProps {
    items?: Array<ToDoData>,
    handlers?: ItemEventHandlers;
}

export function PendingList({ items, handlers }: ItemArrayProps) {
    return (
        <ToDoList 
            title="Pending Tasks" 
            items={items && items.filter(data => !data.completed)}
            handlers={handlers}>
        </ToDoList>
    )
}

export function CompletedList({ items, handlers }: ItemArrayProps) {
    return (
        <ToDoList 
            title="Completed Tasks" 
            items={items && items.filter(data => data.completed)}
            handlers={handlers}>
        </ToDoList>
    )
}

export function ToDoList({ title, items, handlers }: ListProps) {
    const onToDoClicked = (ev: MouseEvent) => {
        if (!(ev.target instanceof HTMLElement)) return;
        if (!ev.target.classList.contains("actionBtn")) return;

        const actionBtn = ev.target;
        const liDOM = actionBtn.parentElement!.parentElement as HTMLLIElement;
        const todoID = liDOM.id;

        if (actionBtn.classList.contains("icon-move")) {
            handlers?.onToggle(todoID);
        } else if (actionBtn.classList.contains("icon-edit")) {
            const titleDOM = liDOM.querySelector(".todo-text") as HTMLSpanElement;
            if (titleDOM.contentEditable == "true") {
                // Finish Editing
                titleDOM.contentEditable = "false";
                titleDOM.classList.remove("editing");
                handlers?.onEdit(todoID, titleDOM.textContent)
            } else {
                titleDOM.contentEditable = "true";
                titleDOM.focus();
                titleDOM.classList.add("editing");
            }
        } else if (actionBtn.classList.contains("icon-delete")) {
            handlers?.onDelete(todoID);
        } 
        console.log(todoID);
    }
    return (
        <section className="column" onClick={onToDoClicked}>
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