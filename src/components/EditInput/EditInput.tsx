import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';
import { EditInputStyle } from './EditInput.styled';

export type EditInputProps = {
  type: string;
  value: string;
  disabled: boolean;
  done: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputSize: string;
};

const EditInput = forwardRef<HTMLInputElement, EditInputProps>(
  ({ type, value, disabled, done, onChange, inputSize }, ref) => {
    return (
      <EditInputStyle
        type={type}
        value={value}
        disabled={disabled}
        done={done}
        ref={ref}
        onChange={onChange}
        inputSize={inputSize}
      />
    );
  }
);

EditInput.defaultProps = {
  type: 'text',
  disabled: false,
  done: false,
};

EditInput.displayName = 'EditInput';

export default EditInput;
