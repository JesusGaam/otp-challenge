import React, { forwardRef } from 'react';
import { type DigitInputProps } from '../../types/forms';

const DigitInput = forwardRef<HTMLInputElement, DigitInputProps>(({
  id,
  name,
  ariaLabel,
  className = '',
  defaultValue,
  value,
  disabled,
  onChange,
  onKeyDown,
  onPaste
}, ref) => {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value.replace(/\D/g, '')[0] || '';
    event.currentTarget.value = newValue;
    onChange?.(newValue);
  };

  const baseClasses = 'font-poppins bg-white/10 rounded-[50px] w-6 h-12 text-center text-[32px] px-0';
  return (
    <input
      ref={ref}
      type="text"
      id={id}
      name={name}
      aria-label={ariaLabel}
      className={`${baseClasses} ${className}`}
      defaultValue={defaultValue}
      value={value}
      onChange={handleInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      maxLength={1}
      inputMode='numeric'
      pattern='[0-9]*'
      disabled={disabled}
    />
  );
});

DigitInput.displayName = 'DigitInput';

export default DigitInput;


