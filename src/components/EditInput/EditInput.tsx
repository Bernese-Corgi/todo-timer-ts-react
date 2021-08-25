import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';
import { EditInputStyle } from './EditInput.styled';

export type EditInputProps = {
  type: string;
  value: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputSize: string;
};

const EditInput = forwardRef<HTMLInputElement, EditInputProps>(
  ({ type, value, onBlur, onChange, inputSize }, ref) => {
    return (
      <EditInputStyle
        type={type}
        value={value}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        inputSize={inputSize}
      />
    );
  }
);

EditInput.defaultProps = {
  type: 'text',
};

EditInput.displayName = 'EditInput';

export default EditInput;
