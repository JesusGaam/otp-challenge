import OtpInput from '../atoms/Input';
import OtpForm from '../../test/OtpForm';


const OtpVerification = () => {

  return (
    <div>
      <h1>Verify OTP</h1>
      <OtpInput
        id='otp-1'
      />

      <OtpForm
        length={4}
        onChange={() => { }}
        onComplete={() => { }}
      />
    </div>
  )
}

export default OtpVerification;
