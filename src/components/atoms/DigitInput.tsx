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

  return (
    <div className={'p-0 bg-white/10 border-solid border-1 rounded-lg border-transparent focus-within:border-green-500 transition-all'}>
      <input
        ref={ref}
        type="text"
        id={id}
        name={name}
        aria-label={ariaLabel}
        className={`text-center text-[32px] w-12 h-14 p-0 m-0 bg-transparent text-white/90 rounded-lg outline-none focus:ring-0 ${className}`}
        defaultValue={defaultValue}
        value={value}
        onChange={handleInput}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        maxLength={1}
        inputMode='numeric'
        pattern='[0-9]*'
        disabled={disabled}
        autoComplete='one-time-code'
      />
    </div>
  );
});

DigitInput.displayName = 'DigitInput';

export default DigitInput;


