import IconButton from 'components/IconButton/IconButton';
import Input from 'components/Input/Input';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TodoInputWrapper } from './TodoInput.styled';

export type TodoInputProps = {
  inputSize?: string;
  onInput: (value: string) => void;
};

const TodoInput = ({ inputSize, onInput }: TodoInputProps) => {
  const size = 'base';

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // const handleClickButton = () =>

  return (
    <form>
      <TodoInputWrapper inputSize={inputSize}>
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
      </TodoInputWrapper>
    </form>
  );
};

export default TodoInput;
