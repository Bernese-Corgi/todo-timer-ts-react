import IconButton from 'components/IconButton/IconButton';
import Input from 'components/Input/Input';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TodoAddWrapper } from './TodoAdd.styled';

export type TodoAddProps = {
  inputSize?: string;
  onInput: (value: string) => void;
};

const TodoAdd = ({ inputSize, onInput }: TodoAddProps) => {
  const size = 'base';
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) return;
    onInput(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoAddWrapper inputSize={inputSize}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          inputSize={size}
        />
        <IconButton
          type="submit"
          shape="plus"
          color="secondary"
          iconSize={size}
        />
      </TodoAddWrapper>
    </form>
  );
};

export default TodoAdd;
