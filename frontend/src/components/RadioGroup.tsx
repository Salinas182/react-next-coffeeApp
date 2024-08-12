'use client';

import { Radio, RadioGroup } from "@headlessui/react";

interface RadioGroupProps {
  options: RadioOption[];
  fieldName: string;
  label?: string;
  value?: string;

  onChange: (value: string) => void;
}
interface RadioOption {
  name: string;
  value: string;
}

export default function CustomRadioGroup({
  options,
  fieldName,
  value = "",
  label = "",
  onChange,
}: RadioGroupProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto w-full max-w-md gap-2">
        <label htmlFor={label} className="text-sm font-medium text-[#9B9B9B]">
          {label}
        </label>
        <RadioGroup
          name={fieldName}
          value={value}
          onChange={onChange}
          aria-label="Coffee type"
          className="flex justify-center gap-x-3"
        >
          {options.map((option) => (
            <Radio
              key={option.name}
              value={option.value}
              className="group relative flex w-1/2 cursor-pointer border border-gray-input rounded-lg h-[38px] bg-white/5 text-gray-input shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10 data-[checked]:border-white data-[checked]:text-white"
            >
              <div className="flex w-full items-center justify-center text-sm/6">
                <p className="font-semibold">{option.name}</p>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
