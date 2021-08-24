import IconButton from 'components/IconButton/IconButton';
import Input from 'components/Input/Input';
import React, { ChangeEvent, useState } from 'react';
import { TodoInputWrapper } from './TodoInput.styled';

export type TodoInputWrapperProps = {
  size?: string;
};

const TodoInput = () => {
  const size = 'base';

  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    console.log('click');
    setValue('');
  };

  return (
    <TodoInputWrapper size={size}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        inputSize={size}
      />
      <IconButton
        shape="plus"
        color="primary"
        iconSize={size}
        onClick={handleClick}
      />
    </TodoInputWrapper>
  );
};

export default TodoInput;
