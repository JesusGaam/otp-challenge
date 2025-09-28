import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useObtainOtp } from '../hooks';
import { generateRandomNumber } from '../utils';

export type ValidationOtpStatus =
  | 'idle'
  | 'validating'
  | 'success'
  | 'error'
  | 'invalid';

interface UseOtpFormReturn {
  inputOtp: string;
  receivedOtp: string | null;
  validationMessage: string | null;
  validationStatus: ValidationOtpStatus;
  onInputOtpChange: (otp: string) => void;
  handleResendOtp: () => void;
  handleOtpValidation: () => void;
  resetValidation: () => void;
}

const useOtpForm = (): UseOtpFormReturn => {
  const navigate = useNavigate();
  const [inputOtp, setInputOtp] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<ValidationOtpStatus>('idle');
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const {
    otp: receivedOtp,
    isError: isErrorReceivedOtp,
    errorMessage: receivedOtpError
  } = useObtainOtp();

  const onInputOtpChange = (otp: string) => {
    setInputOtp(otp);
  };

  const resetValidation = () => {
    setValidationStatus('idle');
    setValidationMessage(null);
  };

  const handleResendOtp = () => {
    const newCode = generateRandomNumber(4);
    navigate(`/otp-verification?otp=${newCode}`, { replace: true });
    resetValidation();
  }

  const handleOtpValidation = () => {
    setValidationStatus('validating');
    setValidationMessage('Validando OTP...');

    if (inputOtp.length === 4 && inputOtp === receivedOtp) {
      setValidationStatus('success');
      setValidationMessage(null);

      navigate('/otp-success', { replace: true });
    } else {
      setValidationStatus('error');
      setValidationMessage('El código ingresado es incorrecto');
    }
  };

  useEffect(() => {
    resetValidation();
  }, [inputOtp]);

  useEffect(() => {
    if (isErrorReceivedOtp) {
      setValidationStatus('invalid');
      setValidationMessage(receivedOtpError);
    }
  }, [isErrorReceivedOtp]);

  return {
    inputOtp,
    receivedOtp,
    validationMessage,
    validationStatus,
    onInputOtpChange,
    handleResendOtp,
    handleOtpValidation,
    resetValidation
  };
};

export default useOtpForm;  