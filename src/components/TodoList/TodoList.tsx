import TodoItem from 'components/TodoItem/TodoItem';
import { Todo } from 'modules/todos';
import React from 'react';
import { TodoListStyle } from './TodoList.styled';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
  iconSize: string;
};

const TodoList = ({
  todos,
  onToggle,
  onEdit,
  onDelete,
  iconSize,
}: TodoListProps) => {
  return (
    <TodoListStyle>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          iconSize={iconSize}
        />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
