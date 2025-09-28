
import React, { useEffect } from "react"
import DigitInput from "../atoms/DigitInput"
import { useOtpInput } from "../../hooks"
import { type OtpInputsProps } from "../../types"

const OtpInput: React.FC<OtpInputsProps> = ({ disabled, onChange, }) => {
  const {
    otpList,
    otpValue,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  } = useOtpInput();

  useEffect(() => {
    onChange?.(otpValue);
  }, [otpValue, onChange]);

  return (
    <div className="grid grid-cols-[repeat(4,48px)] gap-2">
      <div>
        <DigitInput
          id="digit-1"
          value={otpList[0]}
          ref={el => inputRefs.current[0] = el}
          onKeyDown={(e) => handleKeyDown(0, e)}
          onChange={(value) => handleChange(0, value)}
          onPaste={handlePaste}
          disabled={disabled}
        />
      </div>
      <div>
        <DigitInput
          id="digit-2"
          value={otpList[1]}
          ref={el => inputRefs.current[1] = el}
          onKeyDown={(e) => handleKeyDown(1, e)}
          onChange={(value) => handleChange(1, value)}
          onPaste={handlePaste}
          disabled={disabled}
        />
      </div>
      <div >
        <DigitInput
          id="digit-3"
          value={otpList[2]}
          ref={el => inputRefs.current[2] = el}
          onKeyDown={(e) => handleKeyDown(2, e)}
          onChange={(value) => handleChange(2, value)}
          onPaste={handlePaste}
          disabled={disabled}
        />
      </div>
      <div>
        <DigitInput
          id="digit-4"
          value={otpList[3]}
          ref={el => inputRefs.current[3] = el}
          onKeyDown={(e) => handleKeyDown(3, e)}
          onChange={(value) => handleChange(3, value)}
          onPaste={handlePaste}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default OtpInput
