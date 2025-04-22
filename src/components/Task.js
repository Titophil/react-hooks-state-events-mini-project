import React from "react";

function Task({ text, category, onDelete, task }) {
  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <li className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </li>
  );
}

export default Task;