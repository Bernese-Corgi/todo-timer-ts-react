import IconButton from 'components/IconButton/IconButton';
import Input from 'components/Input/Input';
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { TodoAddForm } from './TodoAdd.styled';

export type TodoAddProps = {
  inputSize?: string;
  onInput: (value: string) => void;
};

export type TodoAddFormProps = {
  inputSize?: string;
};

const TodoAdd = ({ inputSize, onInput }: TodoAddProps) => {
  const size = 'base';
  const [value, setValue] = useState('');
  const [isChange, setIsChange] = useState(false);

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
    onInput(value);
    setValue('');
  };

  return (
    <TodoAddForm onSubmit={handleSubmit} inputSize={inputSize}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        inputSize={size}
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
