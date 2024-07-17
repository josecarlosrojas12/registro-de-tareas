import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
