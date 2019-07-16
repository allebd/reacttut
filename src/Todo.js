import React from 'react';

export default function Todo({
  todo: { description, completed, id },
  toggleTodo
}){
  return (
    <li style={completed ? { textDecoration: 'line-through' } : {}}>
      {description} -{' '}
      <input
        onChange={() => toggleTodo(id)}
        type="checkbox"
        checked={completed}
      />
    </li>
  );
}