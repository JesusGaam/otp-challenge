import { } from 'react'
import { useOtpForm } from '../../hooks';
import OtpInput from '../molecules/OtpInput'
import Button from '../atoms/Button';

interface OtpFormProps {
  className?: string;
}

const OtpForm: React.FC<OtpFormProps> = ({ className = '' }) => {
  const {
    receivedOtp,
    receivedOtpError,
    isValidOtp,
    onInputOtpChange,
  } = useOtpForm();
  return (
    <div className={`flex flex-col items-center justify-between gap-0 md:gap-12 w-full ${className}`}>
      <div className='flex flex-col gap-2 w-full'>
        <h1 className="font-semibold text-white/90 text-[22px] md:text-[34px] text-left md:text-center">Te enviamos un SMS</h1>
        <p className="font-normal text-[16px] text-white/70 text-left md:text-center">
          Ingresa el código que te enviamos al +50 (88) 888 888:
        </p>
        <div className="flex flex-col items-center pt-8">
          <OtpInput
            disabled={receivedOtpError !== null}
            onChange={onInputOtpChange}
          />
        </div>

        {receivedOtpError && <div className="text-yellow-400">{receivedOtpError}</div>}
        {receivedOtp && !isValidOtp && <div className="text-red-500">The entered OTP is incorrect.</div>}
        {isValidOtp && <div className="text-green-500">OTP is valid!</div>}
      </div>
      <div>
        <Button
          variant={isValidOtp ? 'primary' : 'disabled'}
        >
          Continuar
        </Button>
      </div>
    </div >
  )
}

export default OtpForm
