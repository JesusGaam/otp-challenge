import React from 'react'
import { tv } from 'tailwind-variants'
import { type ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  size = 'lg',
  variant = 'primary',
  className = '',
  children,
  onClick = () => { }
}) => {
  const styles = tv({
    base: 'font-medium cursor-pointer',
    variants: {
      intent: {
        primary: 'bg-[#49d249] text-black',
        disabled: 'bg-[#ffffff33] text-neutral-500 cursor-not-allowed',
      },
      size: {
        sm: "text-sm py-[6px] px-[16px] rounded-[24px]",
        md: "text-md min-h-[32px] py-[10px] px-[20px] rounded-[24px]",
        lg: "text-md min-w-[300px] min-h-[48px] py-[12px] px-[32px] rounded-[24px]",
      },
    }
  });

  return (
    <div>
      <button
        className={styles({ intent: variant, size: size }) + ` ${className}`}
        disabled={variant === 'disabled'}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
