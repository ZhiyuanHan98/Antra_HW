interface IProps {
  data: ToDoData
}

export default function TodoItem({ data }: IProps) {
  const { id, todo, completed } = data;

  // Define button icons
  const icons = {
    edit: "✎",
    trash: "🗑",
    right: "🠊",
    left: "🠈",
  };

  return (
    <li id={id.toString()} className="todo">
      <span className="todo-text">{todo}</span>
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
