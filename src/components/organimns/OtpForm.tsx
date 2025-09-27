import { } from 'react'
import { useOtpForm } from '../../hooks';
import OtpInput from '../molecules/OtpInput'
import Button from '../atoms/Button';

const OtpForm = () => {
  const {
    inputOtp,
    receivedOtp,
    receivedOtpError,
    isValidOtp,
    onInputOtpChange,
  } = useOtpForm();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="font-semibold text-white/90 md:text-[34px] sm:text-[22px] md:text-center sm:text-left">Te enviamos un SMS</h2>
      <p className="font-normal text-sub-head sm:text-left md:text-center my-3 text-white/70">Ingresa el código que te enviamos al +50 (88) 888 888:</p>
      <div className='flex flex-col items-center mb-3 gap-3'>
        <OtpInput
          disabled={receivedOtpError !== null}
          onChange={onInputOtpChange}
        />
        <Button
          variant={isValidOtp ? 'primary' : 'disabled'}
        >
          Continuar
        </Button>
      </div>

      {receivedOtpError && <div className="text-yellow-400">{receivedOtpError}</div>}
      {receivedOtp && !isValidOtp && <div className="text-red-500">The entered OTP is incorrect.</div>}
      {isValidOtp && <div className="text-green-500">OTP is valid!</div>}
      <div className="mt-4">
        <strong>Received OTP:</strong> {receivedOtp || 'N/A'}
      </div>
      <div className="mt-2">
        <strong>Entered OTP:</strong> {inputOtp || 'N/A'}
      </div>
      <div className="mt-2">
        <strong>OTP Validity:</strong> {isValidOtp ? 'Valid' : 'Invalid'}
      </div>
    </div>
  )
}

export default OtpForm
