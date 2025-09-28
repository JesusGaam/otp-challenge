export interface DigitInputProps {
  id?: string;
  name?: string;
  ariaLabel?: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  variant?: 'primary' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface NotificationMessageProps {
  type: 'error' | 'success' | 'info';
  title: string;
  message: string;
  className?: string;
}

export interface OtpInputsProps {
  disabled?: boolean;
  onChange?: (otpValue: string) => void;
}

export interface OtpFormProps {
  className?: string;
}