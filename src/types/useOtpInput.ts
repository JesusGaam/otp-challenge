export type OtpValues = [string, string, string, string];

export interface UseOtpInputReturn {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  otpList: OtpValues;
  otpValue: string;
  handleChange: handleOtpChangeType;
  handleKeyDown: (index: number, e: React.KeyboardEvent) => void;
  handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

export type handleOtpChangeType = (index: number, value: string) => void;