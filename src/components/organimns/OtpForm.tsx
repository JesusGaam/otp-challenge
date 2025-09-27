import { } from 'react'
import OtpInput from '../molecules/OtpInput'
import { useObtainOtp } from '../../hooks';

const OtpForm = () => {
  const { otp, error } = useObtainOtp();
  console.log(otp, error);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">OTP Verification</h2>
      <p className="mb-4">Please enter the OTP confirmation:</p>
      <OtpInput
        otp2Validate={otp!}
        disabled={error !== null}
      />
      {error && <div className="text-yellow-400">{error}</div>}
    </div>
  )
}

export default OtpForm
