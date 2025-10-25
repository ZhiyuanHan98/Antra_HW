interface IProps {
  todo: ToDoData
}

export default function TodoItem({ todo }: IProps) {
  const { id, title, completed } = todo;

  // Define button icons
  const icons = {
    edit: "✎",
    trash: "🗑",
    right: "🠊",
    left: "🠈",
  };

  return (
    <li id= {id} className="todo">
      <span className="todo-text">{title}</span>
      <span className="actions">
        {/* Move button */}
        <button
          className="actionBtn icon-move"
          title="Move"
        >
          {completed ? icons.left : icons.right}
        </button>

        {/* Edit button */}
        <button
          className="actionBtn icon-edit"
          title="Edit"
        >
          {icons.edit}
        </button>

        {/* Delete button */}
        <button
          className="actionBtn icon-delete"
          title="Delete"
        >
          {icons.trash}
        </button>
      </span>
    </li>
  );
}
