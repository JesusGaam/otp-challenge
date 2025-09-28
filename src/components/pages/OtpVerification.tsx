import { } from 'react'
import OtpForm from "../organimns/OtpForm";

const OtpVerification = () => {
  return (
    <div className='min-h-screen px-6 md:px-8 flex flex-col justify-center items-center'>
      <div className='w-full md:max-w-[700px]'>
        <OtpForm className='min-h-screen md:min-h-auto py-8 md:p-0'/>
      </div>
    </div>
  )
}

export default OtpVerification;
