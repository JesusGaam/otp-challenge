import { useState, useMemo, useRef, useEffect } from 'react';
import { type UseOtpInputReturn, type OtpValues, type handleOtpChangeType } from '../types';

const useOtpInput = (): UseOtpInputReturn => {
  const [otpList, setOtpList] = useState<OtpValues>(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange: handleOtpChangeType = (index, value) => {
    setOtpList(prev => {
      const updated: OtpValues = [...prev];
      updated[index] = value;
      return updated;
    });


    if (value.length > 0 && index < otpList.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpList[index] && index > 0) {
      inputFocus(inputRefs.current[index - 1]);
    }


    if (e.key === 'ArrowLeft' && index > 0) {
      inputFocus(inputRefs.current[index - 1])
    }

    const currentValue = (e.currentTarget as HTMLInputElement).value;
    if (!currentValue) {
      return
    }

    if (e.key === 'ArrowRight' && index < otpList.length - 1) {
      inputFocus(inputRefs.current[index + 1])
    }
  };

  const inputFocus = (input: HTMLInputElement | null) => {
    if (input) {
      input.focus();
      const len = input.value.length;
      if (typeof input.setSelectionRange === 'function') {
        requestAnimationFrame(() => {
          try {
            input.setSelectionRange(len, len);
          } catch { }
        });
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pasteText = e.clipboardData.getData('Text').slice(0, 4).split('');

    if (pasteText.length !== 4) {
      console.log('Pasted text must be exactly 4 digits');
      return;
    }

    if (!/^\d{4}$/.test(pasteText.join(''))) {
      console.log('Each character must be numeric');
      return;
    }

    setOtpList(prev => {
      const updated: OtpValues = [...prev];
      for (let i = 0; i < otpList.length; i++) {
        if (pasteText[i]) {
          updated[i] = pasteText[i];
        }
      }

      return updated;
    });

    const nextIndex = Math.min(pasteText.length, otpList.length - 1);
    inputFocus(inputRefs.current[nextIndex]);
  };


  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const otpValue = useMemo(() => otpList.join(''), [otpList]);

  return {
    inputRefs,
    otpList,
    otpValue,
    handleChange,
    handleKeyDown,
    handlePaste
  };
};

export default useOtpInput;