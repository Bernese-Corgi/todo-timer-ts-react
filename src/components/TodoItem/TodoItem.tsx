import CheckBox from 'components/CheckBox/CheckBox';
import EditInput from 'components/EditInput/EditInput';
import IconButton from 'components/IconButton/IconButton';
import { Todo } from 'modules/todos';
import React, {
  ChangeEvent,
  DOMAttributes,
  FocusEventHandler,
  useRef,
  useState,
} from 'react';
import { theme } from 'styles/theme';
import { TodoItemWrapper } from './TodoItem.styled';

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

  const editInput = useRef<HTMLInputElement | null>(null);

  // 체크박스 토글 (완)
  const handleToggleCheckBox = () => onToggle(todo.id);

  // 확인 버튼 누르면
  const handleClickConfirmButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onEdit(todo.id, value);
    setIsFocus(false);
    if (editInput.current) editInput.current.blur();
    console.log('handleClickConfirmButton', e.target, isFocus);
  };

  const handleClickEditButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (editInput.current) editInput.current.focus();
    setIsFocus(true);
    console.log('handleClickEditButton', e.target, isFocus);
  };

  const handleChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(editInput.current);
    // console.log(e.target.focus());
    console.log('handleChangeEditInput', e.target, isFocus);
  };
  const handleDeleteButton = () => onDelete(todo.id);

  const handleFocusInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocus(true);
    // e.target.focus();
    console.log('handleFocusInput', e.target, isFocus);
  };

  // const handleBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setIsFocus(focus);
  //   console.log('handleBlurInput', e.target, isFocus);
  // };

  return (
    <li key={todo.id}>
      <TodoItemWrapper>
        <CheckBox
          id="toggleTodo"
          name="toggleTodo"
          checked={todo.done}
          onChange={handleToggleCheckBox}
        />
        {/* <EditInput
          value={value}
          onChange={handleChangeEditInput}
          inputSize={iconSize}
          ref={editInput}
        /> */}
        <input
          value={value}
          onFocus={handleFocusInput}
          // onBlur={handleBlurInput}
          onChange={handleChangeEditInput}
          ref={editInput}
        />
        {isFocus ? (
          <IconButton
            shape="confirm"
            color={theme.colors.gray.light}
            onClick={handleClickConfirmButton}
            iconSize={iconSize}
          />
        ) : (
          <IconButton
            shape="edit"
            color={theme.colors.gray.light}
            onClick={handleClickEditButton}
            iconSize={iconSize}
          />
        )}
        <IconButton
          shape="delete"
          onClick={handleDeleteButton}
          iconSize={iconSize}
        />
      </TodoItemWrapper>
    </li>
  );
};

export default TodoItem;
