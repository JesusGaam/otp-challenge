import React, { } from 'react';
import { type OtpInputProps } from '../../types/forms';

const OtpInput: React.FC<OtpInputProps> = ({
  id,
  name,
  ariaLabel,
  className = '',
  defaultValue,
  value,
  onChange,
}) => {

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const newValue = target.value.replace(/\D/g, '')[0] || '';
    target.value = newValue;

    onChange && onChange(newValue);
  };
  const baseClasses = 'font-poppins bg-white/10 text-testpink rounded-[50px]';

  return (
    <input
      type="text"
      id={id}
      name={name}
      aria-label={ariaLabel}
      className={`${baseClasses} ${className}`}
      defaultValue={defaultValue}
      value={value}
      onInput={handleInput}

      maxLength={1}
      inputMode={'numeric'}
      pattern='[0-9]*'
    />
  );
};

export default OtpInput;


