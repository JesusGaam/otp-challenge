export type ValidationOtpStatus =
  | 'idle'
  | 'validating'
  | 'success'
  | 'error'
  | 'invalid';

export interface UseOtpFormReturn {
  inputOtp: string;
  receivedOtp: string | null;
  validationMessage: string | null;
  validationStatus: ValidationOtpStatus;
  onInputOtpChange: (otp: string) => void;
  handleResendOtp: () => void;
  handleOtpValidation: () => void;
  resetValidation: () => void;
}