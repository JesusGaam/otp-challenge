import { } from 'react'
import { useNavigate } from "react-router-dom";
import Button from '../atoms/Button';

const OtpSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen px-6 md:px-8 flex flex-col justify-center items-center'>
      <div className='w-full md:max-w-[700px]'>
        <div className='grid grid-rows-[1fr_48px] md:gap-12 py-8 md:p-0 min-h-screen md:min-h-auto'>
          <div className='flex flex-col items-center gap-4'>
            <p className='text-[80px] md:text-[100px] text-left'>🎉</p>
            <h1 className="font-semibold text-white/90 text-[22px] md:text-[34px] text-center">¡Gracias por validar tu código!</h1>
            <p className="font-light text-[18px] md:text-[24px] text-white/70 text-center">
              Has completado el proceso exitosamente.
            </p>
          </div>
          <div className='mt-0 md:mt-4 text-center'>
            <Button onClick={() => navigate('/')} size='lg'>Salir</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpSuccess;
