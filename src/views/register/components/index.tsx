import React from "react";
import { Controller, FieldValues, UseFormReturn } from "react-hook-form";
import InputMask from "react-input-mask";

interface inputProps {
  name: string;
  placeholder: string;
  label: string;
  maskInput?: (value: string) => string | undefined;
  control: UseFormReturn<FieldValues, any>["control"];
  type?: string;
}

export const InputComponent: any = ({
  name,
  placeholder,
  maskInput,
  control,
  type,
}: inputProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value }, ...others }) => (
          <InputMask mask="">
            <>
              <input
                {...others}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                  const newValue = maskInput
                    ? maskInput!(String(e.target.value))
                    : String(e.target.value);
                  onChange(newValue);
                }}
                type={type}
              />
            </>
          </InputMask>
        )}
      />
    </div>
  );
};
