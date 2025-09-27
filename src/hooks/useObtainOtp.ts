import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useObtainOtp = () => {
  const [otp, setOtp] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const otp = searchParams.get('otp');

    if (otp == null) {
      setError('OTP parameter is missing in the URL');
    }

    if (!/^\d{4}$/.test(otp!)) {
      setError('Invalid OTP format. OTP must be a 4-digit number.');
    }


    setOtp(otp);

  }, []);

  return { otp, error };
}

export default useObtainOtp;