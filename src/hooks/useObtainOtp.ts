import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseObtainOtpReturn {
  otp: string | null;
  isError: boolean;
  errorMessage: string | null;
}

const useObtainOtp = (): UseObtainOtpReturn => {
  const [otp, setOtp] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = (searchParams.get('otp') || '').trim();

    if (!value) {
      setOtp(null);
      setErrorMessage('OTP parameter is missing in the URL');
      setIsError(true);
      return;
    }

    if (!/^\d{4}$/.test(value)) {
      setOtp(value);
      setErrorMessage('Invalid OTP format. OTP must be a 4-digit number.');
      setIsError(true);
      return;
    }

    setOtp(value);
    setErrorMessage(null);
    setIsError(false);
  }, [searchParams]);

  return { otp, isError, errorMessage };
}

export default useObtainOtp;