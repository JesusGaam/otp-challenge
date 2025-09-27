
import { useEffect, useState } from 'react';
import { useObtainOtp } from '../hooks';

const useOtpForm = () => {
  const [inputOtp, setInputOtp] = useState<string>('');
  const [isValidOtp, setIsValidOtp] = useState<boolean>(false);
  const { otp: receivedOtp, error: receivedOtpError } = useObtainOtp();

  const onInputOtpChange = (otp: string) => {
    setInputOtp(otp);
  };

  useEffect(() => {
    setIsValidOtp(inputOtp.length > 0 && inputOtp === receivedOtp);
  }, [inputOtp, receivedOtp]);

  return {
    inputOtp,
    receivedOtp,
    receivedOtpError,
    isValidOtp,
    onInputOtpChange,
  };
};

export default useOtpForm;  