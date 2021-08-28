import React, { ChangeEvent, forwardRef } from 'react';
import { EditInputStyle } from './EditInput.styled';

export type EditInputProps = {
  type: string;
  id?: string;
  value: string;
  readOnly?: boolean;
  done: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputSize: string;
};

const EditInput = forwardRef<HTMLInputElement, EditInputProps>(
  (
    { type, id, value, readOnly, done, onChange, onKeyPress, inputSize },
    ref
  ) => {
    return (
      <EditInputStyle
        type={type}
        id={id}
        value={value}
        readOnly={readOnly}
        done={done}
        ref={ref}
        onChange={onChange}
        onKeyPress={onKeyPress}
        inputSize={inputSize}
      />
    );
  }
);

EditInput.defaultProps = {
  type: 'text',
  readOnly: false,
  done: false,
};

EditInput.displayName = 'EditInput';

export default EditInput;
