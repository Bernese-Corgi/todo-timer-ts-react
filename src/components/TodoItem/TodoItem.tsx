import CheckBox from 'components/CheckBox/CheckBox';
import EditInput from 'components/EditInput/EditInput';
import IconButton from 'components/IconButton/IconButton';
import { Todo } from 'modules/todos';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TodoItemLiStyle } from './TodoItem.styled';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onDelete: (id: number) => void;
  iconSize: string;
};

const TodoItem = ({
  todo,
  onToggle,
  onEdit,
  onDelete,
  iconSize,
}: TodoItemProps) => {
  const [value, setValue] = useState(todo.text);
  const [isFocus, setIsFocus] = useState(false);

  const editInput = useRef<HTMLInputElement>(null);

  // 체크박스 클릭 시 이벤트
  const handleToggleCheckBox = () => onToggle(todo.id);

  // 편집 버튼 클릭 시 이벤트 : 편집창으로 focus, 현재 focus 상태 true
  const handleClickEditButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    editInput.current?.focus();
    setIsFocus(true);
  };

  // 확인 버튼 클릭 시 이벤트
  // - 편집된 value를 인수에 넣어서 dispatch하는 함수 호출
  // - 편집창에서 blur, 현재 focus 상태 false
  const handleClickConfirmButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onEdit(todo.id, value);
    setIsFocus(false);
  };

  // 편집할 때의 input change 이벤트
  const handleChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // blur 시 edit input 이벤트
  // todo: any 타입 해결
  const handleBlurEditInput = (e: any) => {
    if (e.target === editInput) return;
    setIsFocus(false);
  };

  // 삭제 버튼 클릭 시 이벤트
  const handleDeleteButton = () => onDelete(todo.id);

  // edit input과 수정 버튼 이외의 외부 클릭 시 focus 상태가 취소되는 이벤트
  useEffect(() => {
    window.addEventListener('click', handleBlurEditInput);
    return () => {
      window.removeEventListener('click', handleBlurEditInput);
    };
  });

  return (
    <TodoItemLiStyle key={todo.id} inputFocus={isFocus}>
      <CheckBox
        id="toggleTodo"
        name="toggleTodo"
        ariaLabel={todo.done ? '완료되지 않음 표시하기' : '완료됨 표시하기'}
        shape="circle"
        color="gray-light"
        checked={todo.done}
        onChange={handleToggleCheckBox}
      />
      <EditInput
        type="text"
        id="editTodoInput"
        value={value}
        ref={editInput}
        readOnly={!isFocus}
        done={todo.done}
        onChange={handleChangeEditInput}
        inputSize={iconSize}
      />
      {isFocus ? (
        <IconButton
          id="confirmButton"
          ariaLabel="수정완료"
          shape="confirm"
          color="gray-light"
          onClick={handleClickConfirmButton}
          iconSize={iconSize}
        />
      ) : (
        <IconButton
          id="editButton"
          ariaLabel="수정하기"
          shape="edit"
          color="gray-light"
          onClick={handleClickEditButton}
          iconSize={iconSize}
        />
      )}
      <IconButton
        id="deleteButton"
        shape="delete"
        ariaLabel="삭제하기"
        color="gray-light"
        onClick={handleDeleteButton}
        iconSize={iconSize}
      />
    </TodoItemLiStyle>
  );
};

export default TodoItem;
