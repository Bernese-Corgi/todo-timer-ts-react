import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { IconButton, Input } from 'components';
import { TodoAddForm } from './TodoAdd.styled';

export type TodoAddProps = {
  inputSize?: string;
  onInput: (value: string, wittenDate: Date) => void;
};

export type TodoAddFormProps = {
  inputSize?: string;
};

const TodoAdd = ({ inputSize, onInput }: TodoAddProps) => {
  const size = 'base';
  const [value, setValue] = useState('');
  const [isChange, setIsChange] = useState(false);
  
  const addInput = useRef<HTMLInputElement>(null);

  // ANCHOR 지우기
  const writtenDate: Date = new Date('2020/7/24/12:30');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsChange(true);
  };

  const handleClickCancelButton = (e: MouseEvent<HTMLButtonElement>) => {
    setValue('');
    setIsChange(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) return;
    onInput(value, writtenDate);
    addInput.current?.focus();
    setValue('');
    setIsChange(false);
  };

  return (
    <TodoAddForm onSubmit={handleSubmit} inputSize={inputSize}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        inputSize={size}
        ref={addInput}
      />
      {isChange && (
        <IconButton
          id="cancelAddButton"
          title="작성 취소"
          type="button"
          shape="cancel"
          color="gray"
          onClick={handleClickCancelButton}
        />
      )}
      <IconButton
        id="addButton"
        title="할 일 추가하기"
        type="submit"
        shape="plus"
        color="secondary"
        iconSize={size}
      />
    </TodoAddForm>
  );
};

export default TodoAdd;
