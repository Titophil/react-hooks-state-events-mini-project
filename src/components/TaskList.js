import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;