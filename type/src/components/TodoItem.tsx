import React from 'react';
import { Todo } from '../types';

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
