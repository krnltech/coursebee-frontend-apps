import { OTP_DIGIT } from "@/constants";
import React, { useMemo } from "react";

interface Props {
  value: string;
  otpLength: number;
  onChange: (value: string) => void;
}
const OtpInput = ({ value, otpLength, onChange }: Props) => {
  const inputValues = useMemo(() => {
    const valueItems = value.split("");
    const inputs: Array<string> = [];

    for (let i = 0; i < otpLength; i++) {
      const char = valueItems[i];

      if (OTP_DIGIT.test(char)) inputs.push(char);
      else inputs.push("");
    }
    return inputs;
  }, [value, otpLength]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();

    const isTargetValueDigit = OTP_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") return;

    targetValue = isTargetValueDigit ? targetValue : " ";
    const targetValueLength = targetValue.length;

    // normal typing
    if (targetValueLength === 1) {
      const newInputValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);

      onChange(newInputValue);

      // when deleting the input
      if (!isTargetValueDigit) return;

      const nextElement = target.nextElementSibling as HTMLInputElement | null;
      if (nextElement) {
        nextElement.focus();
      }
    }
    // paste entire code
    else if (targetValueLength === otpLength) {
      onChange(targetValue);

      target.blur;
    }
  };

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const previousElement = e.target
      .previousElementSibling as HTMLInputElement | null;
    if (previousElement && previousElement.value === "")
      return previousElement.focus();

    e.target.setSelectionRange(0, e.target.value.length);
  };

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    if (key !== "Backspace" || target.value !== "") return;

    const previousElement =
      target.previousElementSibling as HTMLInputElement | null;
    if (previousElement) previousElement.focus();
  };

  return (
    <div className="flex w-full gap-2">
      {inputValues.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={otpLength}
          className="w-full h-16 text-center border rounded-lg title focus:border-primary"
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={handleInputOnKeyDown}
          onFocus={onInputFocus}
        />
      ))}
    </div>
  );
};

export default OtpInput;
