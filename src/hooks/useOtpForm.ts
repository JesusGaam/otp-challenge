import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useObtainOtp } from '../hooks';
import { generateRandomNumber } from '../utils';

const useOtpForm = () => {
  const navigate = useNavigate();
  const [inputOtp, setInputOtp] = useState<string>('');
  const [isValidOtp, setIsValidOtp] = useState<boolean>(false);
  const {
    otp: receivedOtp,
    isError: isErrorReceivedOtp,
    errorMessage: receivedOtpError
  } = useObtainOtp();

  const onInputOtpChange = (otp: string) => {
    setInputOtp(otp);
  };
  const handleResendOtp = () => {
    const newCode = generateRandomNumber(4);
    navigate(`/otp-verification?otp=${newCode}`, { replace: true });
  }

  useEffect(() => {
    setIsValidOtp(inputOtp.length > 0 && inputOtp === receivedOtp);
  }, [inputOtp, receivedOtp]);

  return {
    inputOtp,
    receivedOtp,
    isErrorReceivedOtp,
    receivedOtpError,
    isValidOtp,
    onInputOtpChange,
    handleResendOtp
  };
};

export default useOtpForm;  