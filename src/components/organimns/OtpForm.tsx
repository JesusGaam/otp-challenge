import { } from 'react'
import { useOtpForm } from '../../hooks';
import OtpInput from '../molecules/OtpInput'
import Button from '../atoms/Button';
import NotificationMessage from '../molecules/NotificationMessage';

interface OtpFormProps {
  className?: string;
}

const OtpForm: React.FC<OtpFormProps> = ({ className = '' }) => {
  const {
    inputOtp,
    isErrorReceivedOtp,
    receivedOtpError,
    isValidOtp,
    onInputOtpChange,
    handleResendOtp,
  } = useOtpForm();

  return (
    <div className={`flex flex-col items-center justify-between gap-0 md:gap-12 w-full ${className}`}>
      <div className='flex flex-col gap-2 w-full'>
        <h1 className="font-semibold text-white/90 text-[22px] md:text-[34px] text-left md:text-center">Te enviamos un SMS</h1>
        <p className="font-normal text-[16px] text-white/70 text-left md:text-center">
          Ingresa el código que te enviamos al +50 (88) 888 888:
        </p>
        <div className="flex flex-col items-center gap-3 pt-8">
          <OtpInput
            disabled={receivedOtpError !== null}
            onChange={onInputOtpChange}
          />
          {inputOtp.length === 4 && !isValidOtp && (
            <div className="text-red-400">El código ingresado es incorrecto</div>
          )}
        </div>

        {isErrorReceivedOtp && (
          <NotificationMessage
            type='error'
            title='Código OTP no detectado'
            message={'Reenvía el código para continuar con la verificación.'}
            className='mt-8'
          >
            <Button
              size='md'
              className='block w-full md:w-auto'
              onClick={handleResendOtp}
            >
              Reenviar código
            </Button>
          </NotificationMessage>
        )}

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
