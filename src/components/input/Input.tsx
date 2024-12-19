import React from 'react';

import './input.css';

export interface InputProps {
  /** What type of input to render */
  type?: 'text' | 'password' | 'email' | 'number';
  /** Placeholder text for the input */
  placeholder?: string;
  /** Is the input disabled? */
  disabled?: boolean;
  /** Optional value for controlled inputs */
  value?: string;
  /** Optional change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Primary UI component for user input */
export const Input = ({
  type = 'text',
  placeholder,
  disabled = false,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={'storybook-input'}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
