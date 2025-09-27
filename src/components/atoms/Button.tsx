import React from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps {
  variant?: 'primary' | 'disabled';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick = () => { } }) => {
  const styles = tv({
    base: 'min-h-[48px] w-fit min-w-[300px] px-[32px] rounded-[24px] font-medium cursor-pointer',
    variants: {
      intent: {
        primary: 'bg-[#49d249] text-black',
        disabled: 'bg-[#ffffff33] text-neutral-500 cursor-not-allowed',
      },
    }
  });

  return (
    <div>
      <button
        className={styles({ intent: variant })}
        disabled={variant === 'disabled'}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
