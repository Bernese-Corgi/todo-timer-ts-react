import React from 'react';
import { RootState } from 'modules';
import { addTodo, deleteTodo, editTodo, toggleTodo } from 'modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import TodoAdd from 'components/TodoAddInput/TodoAdd';
import TodoList from 'components/TodoList/TodoList';

const TodoApp = () => {
  // size 설정
  const size = 'base';

  // state.todo 불러오기
  const todos = useSelector((state: RootState) => state.todos);

  // dispatch 불러오기
  const dispatch = useDispatch();

  // TodoInput에 사용할 change 이벤트 : addTodo를 디스패치 한다.
  // 할일 1. text에 todo 전달하기 (TodoInput에서 수행) -> nonononono input에서는 그럴 필요가 없다. todo input에 작성되는 Value를 전달하는 이벤트 함수를 생성하면 됨
  // 할일 2. todo를 컴포넌트에 전달하기
  const handleChangeInput = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleItem = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleEditItem = (id: number, text: string) => {
    dispatch(editTodo(id, text));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <section>
      <TodoAdd onInput={handleChangeInput} inputSize={size} />
      <TodoList
        todos={todos}
        onToggle={handleToggleItem}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
        iconSize={size}
      />
    </section>
  );
};

export default TodoApp;
